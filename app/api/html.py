from api import app
from flask import render_template


@app.route('/')
def index():
    return render_template('index.html', title='Welcome')

@app.route('/events')
def events():
    return render_template('events.html', title='Events')