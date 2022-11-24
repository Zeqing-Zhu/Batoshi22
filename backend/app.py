
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
    def get(self, machine_minerID):
        if not machine_minerID:
            machines: [Machine] = Machine.query.all()
            results =[
                {
                    'minerID': machine.minerID,
                    'brand': machine.brand,
                    'model': machine.model,
                    'monitoringTime': machine.monitoringTime,
                    'curStatus': machine.curStatus,
                    'curPower': machine.curPower,
                    'curHashRate': machine.curHashRate,
                    'curPowerRatio': machine.curPowerRatio,
                    'ratedPower': machine.ratedPower,
                    'ratedHashRate': machine.ratedHashRate,
                    'ratedPowerRatio': machine.ratedPowerRatio
                }for machine in machines
            ]
            return{

                'results': results
            }
        machine: Machine = Machine.query.get(machine_minerID)
        return {
            'status': 'success',
            'message': 'Data query succeeded!',
            'results': {
                    'minerID': machine.minerID,
                    'brand': machine.brand,
                    'model': machine.model,
                    'monitoringTime': machine.monitoringTime,
                    'curStatus': machine.curStatus,
                    'curPower': machine.curPower,
                    'curHashRate': machine.curHashRate,
                    'curPowerRatio': machine.curPowerRatio,
                    'ratedPower': machine.ratedPower,
                    'ratedHashRate': machine.ratedHashRate,
                    'ratedPowerRatio': machine.ratedPowerRatio
            }
        }
    
    def post(self):
        form =request.json
        machine = Machine()
        machine.minerID = form.get('minerID')
        machine.brand = form.get('brand')
        machine.model = form.get('model')
        machine.monitoringTime = form.get('monitoringTime')
        machine.curStatus = form.get('curStatus')
        machine.curPower = form.get('curPower')
        machine.curHashRate = form.get('curHashRate')
        machine.curPowerRatio = form.get('curPowerRatio')
        machine.ratedPower = form.get('ratedPower')
        machine.ratedHashRate = form.get('ratedHashRate')
        machine.ratedPowerRatio = form.get('ratedPowerRatio')
        db.session.add(machine)
        db.session.commit()
        
        return{
            'status': 'success',
            'message': 'data add successfully'
        }

    def delete(self, machine_minerID):
        machine = Machine.query.get(machine_minerID)
        db.session.delete(machine)
        db.session.commit()

        return{
            'status': 'success',
            'message': 'data delete successfully'
        }
    
    def put(self, machine_minerID):
        machine: Machine = Machine.query.get(machine_minerID)
        machine.minerID = request.json.get('minerID')
        machine.brand = request.json.get('brand')
        machine.model = request.json.get('model')
        machine.monitoringTime = request.json.get('monitoringTime')
        machine.curStatus = request.json.get('curStatus')
        machine.curPower = request.json.get('curPower')
        machine.curHashRate = request.json.get('curHashRate')
        machine.curPowerRatio = request.json.get('curPowerRatio')
        machine.ratedPower = request.json.get('ratedPower')
        machine.ratedHashRate = request.json.get('ratedHashRate')
        machine.ratedPowerRatio = request.json.get('ratedPowerRatio')
        db.session.commit()
        return {
            'status': 'success',
            'message': 'data edit successfully'
        }
    

        



machine_view = MachineApi.as_view('machine_api')
app.add_url_rule('/machines/', defaults={'machine_minerID': None}, view_func=machine_view, methods= ['GET'])
app.add_url_rule('/machines/post/', view_func=machine_view, methods= ['POST'])
app.add_url_rule('/machines/<int:machine_minerID>', view_func=machine_view, methods= ['GET', 'PUT', 'DELETE'])


if __name__ == '__main__':
    app.run(debug=True)