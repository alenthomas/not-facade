import json
import requests as r

from keys import FB_FACADE_TOKEN

# Typewritersvoice
# PAGE URL
url0 = "https://graph.facebook.com/v2.10/{}?access_token={}"

# PAGE ALBUMS
url1 = "https://graph.facebook.com/v2.10/{}/albums?access_token={}"

# PAGE TIMELINE PHOTOS
url2 = "https://graph.facebook.com/v2.10/{}/photos?limit={}&after={}&access_token={}"

url3 = "https://graph.facebook.com/v2.10/{}?access_token={}&fields=source"


def get_page(page_name):
    api = url0.format(page_name, FB_FACADE_TOKEN)
    response = r.get(api)
    result = response.json()
    try:
        return {'id':result['id'], 'name':result['name']}
    except KeyError as err:
        raise(err)

def get_albums(page_id):
    api = url1.format(page_id, FB_FACADE_TOKEN)
    response = r.get(api)
    result = response.json()
    timeline_album = {}
    try:
        for album in result['data']:
            if(album['name'] == 'Timeline Photos'):
                timeline_album['name'] = album['name']
                timeline_album['id'] = album['id']
                break
        return timeline_album
    except KeyError as err:
        raise(err)

def get_images(album_id, limit, cursor=''):
    api = url2.format(album_id, limit, cursor, FB_FACADE_TOKEN)
    response = r.get(api)
    result = response.json()
    img_ids = []
    paging = None
    try:
        paging = result['paging']
        for img in result['data']:
            img_ids.append(img['id'])
        return {'data':img_ids, 'paging':paging}
    except KeyError as err:
        raise

def get_img_src(img_id):
    api = url3.format(img_id, FB_FACADE_TOKEN)
    response = r.get(api)
    result = response.json()
    try:
        src = result['source']
        return {'src':src}
    except KeyError as err:
        raise(err)
