from django.template import Template, Context
from django.conf import settings

import requests
import re
import string
import time
import random
import csv
import sys
import hashlib
import sys, traceback
import time
import random
from random import choice
import socket
import urllib2
import json
import datetime
import traceback

from bs4 import BeautifulSoup,NavigableString
import HTMLParser
from datetime import datetime
import codecs

import urllib2
DEBUG = True

def scrapeTA(ta_func):

    s = requests.Session()
    s.headers.update({'User-Agent':'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)'})
    response = urllib2.urlopen('http://www.quanttools.com/HTMLHelp/html/CT.16279.htm')
    html = response.read()
    soup = BeautifulSoup(html, 'lxml',from_encoding='windows-1251')
    to_return =[]
    name = soup.find_all('a')
    for a in name:
        try:
            print a
            if ta_func in a.text:
                #print a['href']
                page = s.get('http://www.quanttools.com/HTMLHelp/html/'+a['href'])
                soup_page = BeautifulSoup(page.text, 'lxml',from_encoding='windows-1251')
                text  = soup_page.find(class_ = 'BackBlock')
                return text.text
#            name = repetitor.a.string#.encode('windows-1251','ignore').decode('utf-8')
#            print name
#            phone = ','.join(re.findall('\(?0([12356789]\d\)?\s?-?\d.?\d.?\d.?\d.?\d.?\d.?\d)[^\d]?',page))
#            #print phone
#            to_return.append([repetitor, name,phone.replace('(','').replace(')','').replace(' ','').replace('-','')])
#
        except:
            print '-'*60
            traceback.print_exc(file=sys.stdout)
            print '-'*60
#            print repetitor.a['href'] + ' error'
#
#        time.sleep(1)

    return ''


