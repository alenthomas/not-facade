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
    return rt('base.html')

@app.route("/page/<page_name>")
def page(page_name):
    print('in here')
    page = get_page(page_name)
    return jsonify(page)

@app.route("/albums/<pageid>")
def get_page_albums(pageid):
    album = get_albums(pageid)
    return jsonify(album)

@app.route("/images/<albumid>")
def get_album_images(albumid):
    limit = int(req.args.get('limit')) if req.args.get('limit') else 10
    cursor = req.args.get('afterCursor') if req.args.get('afterCursor') else ''
    image_ids = get_images(albumid, limit, cursor)
    return jsonify(image_ids)

@app.route("/image/<imgid>")
def get_img_by_id(imgid):
    link = get_img_src(imgid)
    return jsonify(link)
