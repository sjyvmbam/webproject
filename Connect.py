from flask import Flask, request, jsonify,render_template,json,session
from flask_mysqldb import MySQL
import os
import sys
from flask_cors import CORS,cross_origin
import logging
#from werkzeug import check_password_hash


# make your awesome app
logging.basicConfig(level=logging.DEBUG)
sys.path.insert(0, os.path.dirname(__file__))

app = Flask(__name__)

app.config['CORS_RESOURCES']={r"/*": {"origins": "*"}}
CORS(app)

app.config['MYSQL_HOST']= 'localhost'
app.config['MYSQL_USER']= 'kkcfwgua_dbp189'
app.config['MYSQL_PASSWORD']= ''
app.config['MYSQL_DB']= 'kkcfwgua_flaskapp'

mysql= MySQL(app)
#CORS(app)

#mysql.init_app(app)

#with app.app_context():
#  cur = mysql.connection.cursor()

#cur = mysql.connection.cursor()
#conn = mysql.connect()
#cur=conn.cursor()
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})