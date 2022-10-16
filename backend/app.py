
from flask import Flask, request
from flask.views import MethodView
from extension import db
from models import Machine
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///mining.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS().init_app(app)


@app.route('/')
def hello_world():
    return "hello_world"

 
@app.cli.command()
def create():
    db.drop_all()
    db.create_all()
    Machine.init_db()


class MachineApi(MethodView):
    def get(self, machine_id):
        if not machine_id:
            machines: [Machine] = Machine.query.all()
            results =[
                {
                    'ID': machine.id,
                    'Model': machine.model,
                    'HashRate': machine.hashrate,
                    'Power': machine.power,
                    'InstalledDate': machine.installeddate
                }for machine in machines
            ]
            return{
                'status': 'success',
                'message': 'Data query succeeded!',
                'results': results
            }
        machine: Machine = Machine.query.get(machine_id)
        return {
            'status': 'success',
            'message': 'Data query succeeded!',
            'results': {
                'ID': machine.id,
                'Model': machine.model,
                'HashRate': machine.hashrate,
                'Power': machine.power,
                'InstalledDate': machine.installeddate
            }
        }
    
    def post(self):
        form =request.json
        machine = Machine()
        machine.id = form.get('ID')
        machine.model = form.get('Model')
        machine.hashrate = form.get('HashRate')
        machine.power = form.get('Power')
        machine.installeddate = form.get('InstalledDate')
        db.session.add(machine)
        db.session.commit()
        
        return{
            'status': 'success',
            'message': 'data add successfully'
        }

    def delete(self, machine_id):
        machine = Machine.query.get(machine_id)
        db.session.delete(machine)
        db.session.commit()

        return{
            'status': 'success',
            'message': 'data delete successfully'
        }
    
    def put(self, machine_id):
        machine: Machine = Machine.query.get(machine_id)
        machine.id = request.json.get('ID')
        machine.model = request.json.get('Model')
        machine.hashrate = request.json.get('HashRate')
        machine.power = request.json.get('Power')
        machine.installeddate = request.json.get('InstalledDate')
        db.session.commit()
        return {
            'status': 'success',
            'message': 'data edit successfully'
        }
    

        



machine_view = MachineApi.as_view('machine_api')
app.add_url_rule('/machines/', defaults={'machine_id': None}, view_func=machine_view, methods= ['GET', ])
app.add_url_rule('/machines/', view_func=machine_view, methods= ['POST', ])
app.add_url_rule('/machines/<int:machine_id>', view_func=machine_view, methods= ['GET', 'PUT', 'DELETE'])


if __name__ == '__main__':
    app.run(debug=True)
