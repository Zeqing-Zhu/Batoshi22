
# Import flask and datetime module for showing date and time
from flask import Flask
import datetime
from flask_cors import CORS
  
x = datetime.datetime.now()
  
# Initializing flask app
app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "<p>Welcome To Batoshi!</p>"
  
# Route for seeing a data
@app.route("/data")
def get_time():
  
    # Returning an api for showing in  reactjs
    return {
        "ID" : "001",
        "Model":"Antminer S19 Pro", 
        "HashRate":"110T",
        "Power":"3450W", 
        "InstalledDate":"09/01/2022"
        }

@app.route("/api", methods = ['GET'])
def index():
    return {
        'name':'Hello World'
    }


if __name__ =='__main__':
    app.run(debug = True)
