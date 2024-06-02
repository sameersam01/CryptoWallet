##building url dynamically
from flask import Flask,redirect,url_for,render_template,request


main=Flask(__name__)


@main.route('/')
def Landing_page():
   return render_template('landing2.html')

@main.route('/login')
def login():
   return render_template('signin.html')

@main.route('/register',methods=['GET','POST'])
def register():
  return render_template('signup.html')
   
   
# @main.errorhandler(404)
# def page_not_found(e):
#     return render_template('404.html'), 404


# @main.route('/Home')
# def Home():
#    return render_template('Dashboard.html')





if __name__=='__main__':
   main.run(debug=True)