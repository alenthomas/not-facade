from flask import Flask
from flask import render_template as rt
from flask import request as req

from sanitation import check_form_data
from keys import FACADE_FLASK_SECRET

app = Flask(__name__)
app.config.from_object(__name__)
app.config.update(dict(
    SECRET_KEY=FACADE_FLASK_SECRET
))

@app.route("/", methods=['GET', 'POST'])
def home():
    if req.method == 'GET':
        return rt('home.html')
    elif req.method == 'POST':
        if check_form_data(['page_name'], req.form):
            page = req.form['page_name']
            return rt('home.html', post=True, page_name=page)
        else:
            return rt('home.html')
