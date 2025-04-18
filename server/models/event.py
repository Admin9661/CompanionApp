from models import db

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.String(300))
    date = db.Column(db.String(20))
    isAttended = db.Column(db.Boolean, default=False)
    isFeatured = db.Column(db.Boolean, default=False)