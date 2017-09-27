from flask import Flask
from flask import render_template as rt
from flask import request as req

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
        album = get_albums(page['id'])
        image_ids = get_images(album['id'])['data']
        links = []
        for i in image_ids:
            links.append(get_img_src(i))
        return rt('page.html', page_name=page['name'], data=links)
