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
            (1, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (2, 'Whatsminer', 'M50s', 1667092275.331346, 0, 3600, 110, 38.5, 4000, 120, 33.3),
            (3, 'Whatsminer', 'M50s', 1667092275.331346, 1, 3600, 110, 38.5, 4000, 120, 33.3),
            (4, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (5, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (6, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (7, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (8, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (9, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (10, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (11, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (12, 'Whatsminer', 'S31 Pro', 1667092275.331346, 0, 3600, 110, 38.5, 4000, 120, 33.3),
            (13, 'Whatsminer', 'S19 Pro', 1667092275.331346, 1, 3600, 110, 38.5, 4000, 120, 33.3),
            (14, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (15, 'Antminer', 'S19 jPro', 1667092275.331346, 1, 2950, 141, 20.8, 3050, 141, 20.8),
            (16, 'Antminer', 'S19 jPro', 1667092275.331346, 1, 2950, 141, 20.8, 3050, 141, 20.8),
            (17, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 141, 20.8, 2950, 141, 20.8),
            (18, 'Antminer', 'S19 jPro', 1667092275.331346, 1, 2950, 100, 29.5, 3050, 141, 20.8),
            (19, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 100, 29.5, 2950, 141, 20.8),
            (20, 'Antminer', 'S19 Pro', 1667092275.331346, 1, 2950, 100, 29.5, 2950, 141, 20.8)
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
