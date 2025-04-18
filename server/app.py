from flask import Flask, jsonify
from flask_cors import CORS
from models import db
from routes.events import events_bp
from routes.reminders import reminders_bp
from routes.tpoupdates import tpoupdates_bp

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///campus_companion.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

app.register_blueprint(events_bp)
app.register_blueprint(reminders_bp)
app.register_blueprint(tpoupdates_bp)

@app.route('/')
def home():
    return jsonify({"message": "Campus Companion API Running!"})

if __name__ == '__main__':
    app.run(debug=True)
