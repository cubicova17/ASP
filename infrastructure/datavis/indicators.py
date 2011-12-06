import numpy as np


class Indicators:
	"""this class defines two algorithms that are specific to the stock market
	in identifying trends."""

	def __init__(self, prices):
		# list of stock prices
		self.prices = prices


	def moving_average(self, n, type='simple'):
		"""Moving Average (MA): An average of data for a certain number of time periods. 
		It moves because for each calculation, we use the latest x number of time periods data. 
		By definition, a moving average lags the market. An exponentially smoothed moving average 
		(EMA) gives greater weight to the more recent data, in an attempt to reduce the lag."""

		prices = np.asarray(self.prices)
		if type=='simple':
			weights = np.ones(n)
		else:
			 weights = np.exp(np.linspace(-1., 0., n))

		weights /= weights.sum()

		a =  np.convolve(prices, weights, mode='full')[:len(prices)]
		a[:n] = a[n]
		return a


	def moving_average_convergence(self, nslow=26, nfast=12):
		"""MACD (Moving Average Convergence/Divergence): An indicator developed by Gerald Appel that is 
		calculated by subtracting the 26-period exponential moving average of a given security from 
		its 12-period exponential moving average. By comparing moving averages, MACD displays trend 
		following characteristics, and by plotting the difference of the moving averages as an oscillator, 
		MACD displays momentum characteristics."""  
	  
		emaslow = self.moving_average(nslow, type='exponential')
		emafast = self.moving_average(nfast, type='exponential')
		return (emafast - emaslow)