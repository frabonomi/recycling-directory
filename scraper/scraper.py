import json
import requests
from bs4 import BeautifulSoup

url = 'http://websitenew.amsa.it/dovelobutto/'
headers = {'user-agent': 'Mozilla/5.0 (Macintosh; '
        'Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) '
        'Chrome/55.0.2883.75 Safari/537.36'}

def get_cities():
    response = requests.get(url + 'aspemComuni', headers=headers)
    html = response.content

    soup = BeautifulSoup(html, 'html.parser')
    select = soup.find('select', {'id': 'aspemSelect'})

    cities = {}
    for option in select.findAll('option'):
        cities[option['value']] = option.text

    return cities

def get_objects(city_id):
    payload = {'idComune': city_id}
    response = requests.post(url + 'findAspemOggetti', headers=headers, data=payload)
    html = response.content

    soup = BeautifulSoup(html, 'html.parser')
    select = soup.find('select', {'id': 'idoggettoselect'})

    objs = {}
    for option in select.findAll('option'):
        objs[option['value']] = option.text

    return objs

def get_container(city, obj):
    payload = {'idComune': city, 'idoggettoselect': obj}

    response = requests.post(url + 'findAspemContenitori', headers=headers, data=payload)
    html = response.content

    soup = BeautifulSoup(html, 'html.parser')
    return soup.find('h3').text

def create_json():
    cities = get_cities()
    all_objects = []
    for city_key in cities:
        objs = get_objects(city_key)
        for obj_key in objs:
            all_objects.append({
                    'obj_key': obj_key,
                    'name': objs[obj_key],
                    'city': cities[city_key],
                    'container': get_container(city_key, obj_key)})

    with open('objects.json', 'w') as outfile:
        json.dump(all_objects, outfile, indent=2)

    print '%s were successfully written' % len(objs)

create_json()
