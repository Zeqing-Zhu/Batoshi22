import pandas as pd
from sqlalchemy import create_engine
from flask import Flask, request
from flask.views import MethodView
from extension import db
from models import Machine
from flask_cors import CORS
import os

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'mining.sqlite3')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
CORS().init_app(app)


@app.route('/')
def hello_world():
    return "Batoshi22_Backend"

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
app.add_url_rule('/data/', defaults={'machine_minerID': None}, view_func=machine_view, methods= ['GET'])
app.add_url_rule('/machines/post/', view_func=machine_view, methods= ['POST'])
app.add_url_rule('/machines/<int:machine_minerID>', view_func=machine_view, methods= ['GET', 'PUT', 'DELETE'])

@app.route('/machines_run/<number>')
def machines_run(number):
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)#.set_index('minerID')
    df['curStatus'] = df['curStatus'].replace([1], 0)
    m = df.nlargest(int(number), 'curPowerRatio').index
    df.loc[m, 'curStatus'] = 1
    df.to_sql('machine', db, if_exists='replace', index=False)
    return 'Run%s' % number

@app.route('/machines_turn_on_all/')
def machines_turn_on_all():
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)#.set_index('minerID')
    df['curStatus'] = df['curStatus'].replace([0], 1)
    df.to_sql('machine', db, if_exists='replace', index=False)
    return 'All machines start running'

@app.route('/machines_shut_down/')
def machines_shut_down():
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)#.set_index('minerID')
    df['curStatus'] = df['curStatus'].replace([1], 0)
    df.to_sql('machine', db, if_exists='replace', index=False)
    return 'All machines shut down'

@app.route('/run_by_power/<power>')
def run_by_power(power):
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)  # .set_index('minerID')
    df['curStatus'] = df['curStatus'].replace([1], 0)
    n = df.sort_values('curPowerRatio', ascending=False).reset_index(drop=True)

    sum = 0
    ans = []
    for i in range(len(n)):
        sum += n['curPower'][i]
        if sum <= int(power):
            save = sum
            ans.append(n.index[i])
        else:
            sum = save

    n.loc[n.index.isin(ans), 'curStatus'] =1
    new_df = n.sort_values('minerID').reset_index(drop=True)
    new_df.to_sql('machine', db, if_exists='replace', index=False)
    return 'Successfully run!'

@app.route('/total_curpower/')
def total_curpower():
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)
    sump = df.loc[df['curStatus'] == 1]
    sp = sump['curPower'].sum()
    return str(sp)
@app.route('/p_of_r/')
def p_of_r():
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)
    tm = df['minerID'].count()
    cm = df['minerID'].loc[df['curStatus'] == 1].count()
    pm = cm / tm
    return str(pm)

@app.route('/curhash_ratedhash/')
def curhash_ratedhash():
    db = create_engine('sqlite:///mining.sqlite3')
    df = pd.read_sql('machine', db)
    ch = df.loc[df['curStatus'] == 1]
    sch = ch['curHashRate'].sum()
    srh = ch['ratedHashRate'].sum()
    ph = sch/srh
    return str(ph)

if __name__ == '__main__':
    app.run(debug=True)
