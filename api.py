from User import allUsers,addUser,login,addComment,allComment
from Connect import *
#from flask_ngrok import run_with_ngrok

#run_with_ngrok(app)
#import tornado.web
#import tornado.ioloop
#from flask_cors import CORS
#import sys

allUsers
addUser
login
addComment
allComment

from flask import Flask




if __name__ == '__main__':
    app.run(debug=True)









'''


    import os
    import sys
    from wsgiref.simple_server import make_server

    sys.path.insert(0, os.path.dirname(__file__))


    def app(environ, start_response):
        start_response('200 OK', [('Content-Type', 'text/plain')])
        message = 'It works!\n'
        version = 'Python v' + sys.version.split()[0] + '\n'
        response = '\n'.join([message, version])
        return [response.encode()]
'''