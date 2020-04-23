from Helper import prepareforJSON, encodePASSWD
from Connect import *
import MySQLdb
from flask import render_template
#import _mysql_connector
#from mysql.connector.errors import Error



@app.route('/', methods=['GET'])
def home():

		return render_template("index.html")


@app.route('/chat', methods=['GET'])
def register():
   return render_template("chat.html ")



@app.route('/allUsers', methods=['GET'])
def allUsers():
  try:
    cur = mysql.connection.cursor()
    response=cur.execute('''SELECT * FROM registers''')
    result = cur.fetchall()
    cur.close()
  except (MySQLdb.Error) as err :
    print("something went wrong {}".format(err))
    pass
  modeller=["id","username","email","pwd"]
  return jsonify(prepareforJSON(result,modeller)) #jsonify(result)



@app.route('/register', methods=['POST'])

#@cross_origin(origin='http://localhost:5001/api/register',headers=['Content-Type','Authorization'])

def addUser():


   data = request.get_json()

   username = data['username']
   email = data['email']
   psd = data['pwd']
   pwd= encodePASSWD(psd)
   #liste=["@","yahoo","gmail","outlook",".uk",".de",".fr",".com"]

   try:

     cur = mysql.connection.cursor()
     response= cur.execute(""" SELECT * FROM  registers WHERE username = %s and email= %s and pwd= %s """,(username,email,pwd))
     response1= cur.execute(""" SELECT * FROM  registers WHERE username = %s and email= %s""",(username,email))

     #rs = cur.fetchall()

     if response >0:
       result = {'message': 'register fail/already exits'}


     elif response1 >0:
       result = {'message':'username or email always exists'}

     elif username=="" or email=="" or psd=="":

       result={'message':'please full all the field please'}


     elif "@" not in email:

       result={"message":"please check your email or password something is wrong"}


     else:

       cur.execute(""" INSERT INTO registers (username,email,pwd) VALUES (%s, %s, %s)""",(username,email,pwd))
       mysql.connection.commit()
       cur.close()

       result = {'message': 'register done', 'username': username}

   except (MySQLdb.Error) as err:

     print("something went wrong {}".format(err))
     pass

   return jsonify(result)


@app.route('/login', methods=['POST'])
def login():

  data= request.get_json()
  username= data['username']
  ps = data['pwd']
  pwd = encodePASSWD(ps)

  try:

    cur = mysql.connection.cursor()

    response= cur.execute(""" SELECT * FROM  registers WHERE username = %s and pwd= %s""",(username,pwd))
    rs= cur.fetchall()
    cur.close()

    if response > 0 :

      modeller = ["id", "username", "email","pwd"]
      userData = prepareforJSON(rs,modeller)
      user= userData[0]
      print(user)
      user['message']= 'login done'
      user.pop('id')
      user.pop('email')
      user.pop('pwd')
      result = user


    else:
      result = {"message" : "login fail"}


  except (MySQLdb.Error) as err:
    print("something went wrong {}".format(err))
    pass
  return jsonify(result)


@app.route('/menu',methods=['POST'])
def addComment():
   json = request.get_json()

   comment = json['comment']
   username = json['username']



   try:

        cur = mysql.connection.cursor()


        #register_id= cur.execute("""SELECT id FROM registers WHERE username = %s""",(username))
        #rs = cur.fetchone()

       # cur.execute(""" INSERT INTO comment (commentary,registers_id) VALUES (%s,%s)""",(comment,cur.execute("""SELECT id FROM registers WHERE username = %s""",(username))))
        cur.execute(""" INSERT INTO chat (username,commentary) values(%s,%s)""",(username,comment))

        mysql.connection.commit()
        cur.close()
        result = {'message': 'commentary was successfull  added', 'comment': comment}

   except (MySQLdb.Error) as err:

      print("something went wrong {}".format(err))
      pass
   return jsonify(result)



@app.route('/allcomment',methods=['GET'])
def allComment():
   json = request.get_json()

   #comment = json['comment']
   #username = json['username']



   try:

       cur = mysql.connection.cursor()
       response = cur.execute('''SELECT username,commentary FROM chat''')
       result = cur.fetchall()
       cur.close()


   except (MySQLdb.Error) as err:
       print("something went wrong {}".format(err))
       pass
   modeller = ["username", "commentary",]
   return jsonify(prepareforJSON(result, modeller))



@app.route('/Search',methods=['GET'])
def search():
   json = request.get_json()

   #comment = json['comment']
   #username = json['username']



   try:

       cur = mysql.connection.cursor()
       response = cur.execute('''SELECT commentary FROM chat''')
       result = cur.fetchall()
       cur.close()


   except (MySQLdb.Error) as err:
       print("something went wrong {}".format(err))
       pass
   modeller = ["commentary",]
   return jsonify(prepareforJSON(result, modeller))

