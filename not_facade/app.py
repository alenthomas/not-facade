from flask import Flask
from keys import FACADE_FLASK_SECRET

app = Flask(__name__)
app.config.from_object(__name__)
app.config.update(dict(
    SECRET_KEY=FACADE_FLASK_SECRET
))

@app.route("/")
def home():
    return "Hello World!"
