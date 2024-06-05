from flask import Flask, render_template, request, jsonify, redirect, url_for
import firebase_admin
from firebase_admin import credentials, auth

# Initialize the Flask application
app = Flask(__name__)

# Initialize Firebase Admin SDK with your service account key
cred = credentials.Certificate("coincloud-serviceAccount-Key.json")
firebase_admin.initialize_app(cred)

# Define the landing page route
@app.route('/')
def landing_page():
    return render_template('landing2.html')

# Define the login route
@app.route('/login')
def login():
    return render_template('signin.html')

# Define the register route with GET and POST methods
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Handle registration logic here
        id_token = request.json.get('idToken')
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        # Create a new user or link the sign-in with an existing user
        return jsonify({'uid': uid}), 200
    return render_template('signup.html')

# Define the home route
@app.route('/home')
def home():
    return render_template('Dashboard.html')

# Define a custom error handler for 404 errors
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
