from models import db

class TPOUpdate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(100))
    isRead = db.Column(db.Boolean, default=False)
