from django.template import RequestContext, loader
from datavis.models import Data
from datavis.stocks import Stocks
from datavis.indicators import Indicators
from datavis.predictors import Predictors
from datavis.transforms import Transforms
from datavis.filters import Filters
from django.http import HttpResponse
#from django.views.generic.simple import direct_to_template
from django.views.generic import TemplateView
import numpy
import datetime
import time
import logging
from django.shortcuts import render_to_response, get_object_or_404, redirect, render

"""
In Django, requests for URLs are mapped to functions in here.
A request for / will be mapped to index(request) and so on.
"""

from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def index(request):
	#csrf_token = get_token(request)
	"""
	Executed when a request for / comes in. The default symbol is 'EBAY'.
	The default time range is 2000 to now.

	Parameters
	----------
	request: incoming request

	Returns
	-------
	context: data needed for template index.html to render
	"""
	symbol = ""

	if request.method == "POST":
		symbol = request.POST.get("symbol")
		symbol = symbol.upper()
		logging.error("changing symbol"+symbol)
	if symbol == "":
		symbol = 'GOOG'

	start = datetime.date(2012, 12, 31)
	end = datetime.datetime.now()

	# get the stock history for that symbol with start and end dates
	stock = Stocks(symbol, start, end)
	try:

		dates, prices_close, prices_open, prices_high, prices_low = stock.get_stock_history()
		
	except Exception as e:
		logging.error("error retrieving symbol "+ symbol)
		symbol = 'EBAY'
		stock = Stocks(symbol, start, end)
		dates, prices_close, prices_open, prices_high, prices_low = stock.get_stock_history()

	# find the MA and MACD of this time series
	indicators = Indicators(prices_close)	
	ma20 = indicators.moving_average(7, type='simple')
	macd = indicators.moving_average_convergence()
	rsi = indicators.relative_strength()

	template = 'datavis/index.html'

	context = {
		'symbol': symbol,
		'dates': dates,
		'prices': prices_close,
		'prices_open': prices_open,
		'prices_high': prices_high,
		'prices_low': prices_low,		
		'ma20': ma20,
		'macd': macd,
		'rsi': rsi,
		#'csrf_token': csrf_token
	}
	from django.template.context import RequestContext
	return render_to_response(template, context,context_instance=RequestContext(request))


def predict(request, symbol, method =None):
	"""
	Executed when a request for /predict/SYMBOL comes in.
	Django handles parsing this string for SYMBOL.
	The default time range is 2000 to now.

	Parameters
	----------
	request: incoming request
	symbol: stock symbol

	Returns
	-------
	projection: data needed for "projection" div in index.html to show a next-day stock price via ajax
	"""
	# find the next day stock price in this time series
	start = datetime.date(2009, 12, 31)
	end = datetime.datetime.now()

	# get the stock history for that symbol with start and end dates
	stock = Stocks(symbol, start, end)
	dates, prices,  close_, low_, high_ = stock.get_stock_history()

	if method == 'NN':
		logging.error("Started predicting")
		predictor = Predictors(dates, prices)
		projection = predictor.predict()
		projection = "%.2f" % projection		
		logging.error("Ended predicting")
	# use our neural network to predict the next day closing price

	return HttpResponse(projection, mimetype="text/html")


def fft(request, symbol):
	"""
	Executed when a request for /fft/SYMBOL comes in.
	Django handles parsing this string for SYMBOL.
	The default time range is 2000 to now.

	Parameters
	----------
	request: incoming request
	symbol: stock symbol

	Returns
	-------
	context: data needed for template fft.html to render
	"""
	# get the stock history for that symbol with start and end dates
	start = datetime.date(1999, 12, 31)
	end = datetime.datetime.now()
	stock = Stocks(symbol, start, end)
	dates, prices = stock.get_stock_history()

	# transform the time-series to the frequency domain
	transform = Transforms(prices)
	period, power = transform.fft2()

	# reverse the numpy array
	period = period[::-1]
	power = power[::-1]

	template = 'datavis/fft.html'

	context = {
		'symbol': symbol,
		'period': period,
		'power': power,
	}

	return render_to_response(template, context,context_instance=RequestContext(request))
	#return direct_to_template(request, template, context)


def kalman(request, symbol):
	"""
	Executed when a request for /kalman/SYMBOL comes in.
	Django handles parsing this string for SYMBOL.
	The default time range is 2000 to now.

	Parameters
	----------
	request: incoming request
	symbol: stock symbol

	Returns
	-------
	context: data needed for template kalman.html to render
	"""
	# get the stock history for that symbol with start and end dates
	start = datetime.date(1999, 12, 31)
	end = datetime.datetime.now()
	stock = Stocks(symbol, start, end)
	dates, prices = stock.get_stock_history()

	#get the mean and standard deviation for this price feature
	mu = numpy.average(prices)
	sigma = numpy.std(prices)
	mu = "%.2f" % mu
	sigma = "%.2f" % sigma

	# apply the kalman filter to the time series
	filters = Filters(prices, mu, sigma)
	kalman = filters.kalmanfilter()

	template = 'datavis/kalman.html'

	context = {
		'symbol': symbol,
		'dates': dates,
		'prices': prices,
		'kalman': kalman,
		'mu': mu,
		'sigma': sigma,
	}
	return render_to_response(template, context,context_instance=RequestContext(request))
	#return direct_to_template(request, template, context)
