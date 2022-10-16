from extension import db

class Machine(db.Model):
    __tablename__ = 'machine'
    id = db.Column(db.Integer, primary_key=True, nullable=False)
    model = db.Column(db.String(255), nullable=False)
    hashrate = db.Column(db.String(255), nullable=False)
    power = db.Column(db.String(255), nullable=False)
    installeddate = db.Column(db.String(255), nullable=False)

    @staticmethod
    def init_db():
        rets = [
            (1, 'Antminer S19 Pro', '110T', '3450W', '09/01/2022'),
            (2, 'Antminer S31 Pro', '46T', '8790W', '09/01/2022')
        ]
        for ret in rets:
            machine = Machine()
            machine.id = ret[0]
            machine.model = ret[1]
            machine.hashrate = ret[2]
            machine.power = ret[3]
            machine.installeddate = ret[4]
            db.session.add(machine)
        db.session.commit()
