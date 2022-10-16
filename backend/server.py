from flask import Flask
from extension import db
from models import Mining

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mining.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/')
def hello_word():
    return 'Hello Word!'

@app.cli.command()
def create():
    db.drop_all()
    db.create_all()
    Mining.init_db()

if __name__ == '__name__':
    app.run(debug=True)
