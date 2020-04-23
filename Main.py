from flask import Flask, render_template
from flask_socketio import SocketIO,send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)
socketio = SocketIO(app, manage_session=False, cors_allowed_origins='*')


@socketio.on('message')
def handleMessage(msg):
    print('message: '+msg)
    send(msg, broadcast=True)


@socketio.on('userName')
def handleuserName(msg1):
    print('userName: '+msg1)
    send(msg1, broadcast=True)



if __name__ == '__main__':
    #app.run(port=5001, debug=True)
    socketio.run(app, debug=True)