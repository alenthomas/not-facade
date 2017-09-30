from flask import Flask
from flask import render_template as rt
from flask import request as req
from flask import jsonify

from sanitation import check_form_data
from keys import FACADE_FLASK_SECRET
from helper import get_page, get_albums, get_images, get_img_src

app = Flask(__name__)
app.config.from_object(__name__)
app.config.update(dict(
    SECRET_KEY=FACADE_FLASK_SECRET
))

@app.route("/",)
def home():
    return rt('home.html')

@app.route("/page", methods=['POST'])
def page():
    if check_form_data(['page_name'], req.form):
        page_name = req.form['page_name']
        page = get_page(page_name)
        print("\npageID", page['id'], "\n")
        #album = get_albums(page['id'])
        #image_ids = get_images(album['id'])['data']
        links = []
        #for i in image_ids:
        #    links.append(get_img_src(i))
        return rt('page.html', page_name=page['name'], data=links)

@app.route("/albums/<pageid>")
def get_page_albums(pageid):
    album = get_albums(pageid)
    return jsonify(album)

@app.route("/images/<albumid>")
def get_album_images(albumid):
    limit = int(req.args.get('limit')) if req.args.get('limit') else 10
    image_ids = get_images(albumid, limit)
    return jsonify(image_ids)

@app.route("/image/<imgid>")
def get_img_by_id(imgid):
    link = get_img_src(imgid)
    return jsonify(link)
