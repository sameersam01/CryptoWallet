##building url dynamically
from flask import Flask,redirect,url_for,render_template,request

main=Flask(__name__)

@main.route('/')
def Landing_page():
   return render_template('landing2.html')

@main.route('/Login')
def Login_page():
   return render_template('signin.html')

@main.route('/CreateAccount')
def Signup_page():
   return render_template('signup.html')

@main.route('/Home')
def Home():
   return render_template('Dashboard.html')





if __name__=='__main__':
   main.run(debug=True)