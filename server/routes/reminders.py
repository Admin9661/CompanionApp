from flask import Blueprint, jsonify
from models.reminder import Reminder
from models import db

reminders_bp = Blueprint('reminders', __name__)

@reminders_bp.route('/reminders', methods=['GET'])
def get_reminders():
    reminders = Reminder.query.all()
    return jsonify([{
        'id': r.id,
        'text': r.text,
    } for r in reminders])
