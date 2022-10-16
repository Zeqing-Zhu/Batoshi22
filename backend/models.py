from extension import db

class Mining(db.Model):
    __tablename__ = 'mining'
    ID = db.Column(db.String(255), primary_key=True, nullable=False)
    Model = db.Column(db.String(255), nullable=False)
    HashRate = db.Column(db.String(255), nullable=False)
    Power = db.Column(db.String(255), nullable=False)
    InstalledDate = db.Column(db.String(255), nullable=False)

    @staticmethod
    def init_db():
        rets = [
            ('001', 'Antminer S19 Pro', '110T', '3450W', '09/01/2022')
        ]
        for ret in rets:
            mining = Mining()
            mining.ID = ret[0]
            mining.Model = ret[1]
            mining.HashRate = ret[2]
            mining.Power = ret[3]
            mining.InstalledDate = ret[4]
            db.session.add(mining)
        db.session.commit()