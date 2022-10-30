from extension import db

class Machine(db.Model):
    __tablename__ = 'machine'
    minerID = db.Column(db.Integer, primary_key=True, nullable=False)
    brand = db.Column(db.String(255), nullable=False)
    model = db.Column(db.String(255), nullable=False)
    monitoringTime = db.Column(db.Float, nullable=False)
    curStatus = db.Column(db.Integer, nullable=False)
    curPower = db.Column(db.Float, nullable=False)
    curHashRate = db.Column(db.Float, nullable=False)
    curPowerRatio = db.Column(db.Float, nullable=False)
    ratedPower = db.Column(db.Float, nullable=False)
    ratedHashRate = db.Column(db.Float, nullable=False)
    ratedPowerRatio = db.Column(db.Float, nullable=False)

    @staticmethod
    def init_db():
        rets = [
            (1, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 88.98, 123.09, 827.98, 88.98, 123.09, 827.98),
            (2, 'Antminer', 'S31 Pro', 1667092275.331346, 0, 88.98, 123.09, 827.98, 88.98, 123.09, 827.98)
        ]
        for ret in rets:
            machine = Machine()
            machine.minerID = ret[0]
            machine.brand = ret[1]
            machine.model = ret[2]
            machine.monitoringTime = ret[3]
            machine.curStatus = ret[4]
            machine.curPower = ret[5]
            machine.curHashRate = ret[6]
            machine.curPowerRatio = ret[7]
            machine.ratedPower = ret[8]
            machine.ratedHashRate = ret[9]
            machine.ratedPowerRatio = ret[10]
            db.session.add(machine)
        db.session.commit()
