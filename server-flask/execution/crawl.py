from bs4 import BeautifulSoup

from selenium import webdriver
from time import sleep

def main(sw):
    driver = selenium_config()
    url = get_url(sw)
    driver.get(url)
    sleep(3)
    html = driver.page_source
    driver.quit()
    soup = BeautifulSoup(html, 'html.parser')
    round = ''
    if sw == 'dw':
        p_price = soup.select_one('#last_last').text.replace(',','')
        round = soup.select_one('#leftColumn > div.clear.overviewDataTable.overviewDataTableWithTooltip > div:nth-child(6) > span.float_lang_base_2.bold').text
    elif sw == 'dxy':
        p_price = soup.select_one('.instrument-price_last__KQzyA').text.replace(',','')
        round = soup.select_one('div.instrument-page_border__ufzK4 > dl > div:nth-child(6)>dd').text
    else:
        print('error in crawl.py class_main')
    splited = round.strip().replace(',','').split('-')
    # [ p_price, low, avg, high ]
    return [ float(p_price), float(splited[0]), ( (float(splited[0]) + float(splited[1]))/2 ), float(splited[1])]


def selenium_config():
    options = webdriver.ChromeOptions()
    options.add_argument("headless")
    driver = webdriver.Chrome('/Users/imharam/hr/codes/for_selenium/chromedriver', options=options)
    driver.implicitly_wait(3)
    return driver

def get_url(sw):
    if sw == 'dw':
        return 'https://www.investing.com/currencies/usd-krw'
    elif sw == 'dxy':
        return 'https://investing.com/indices/usdollar'
