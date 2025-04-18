from flask import Blueprint, jsonify
from models.event import Event
from models import db

events_bp = Blueprint('events', __name__)

@events_bp.route('/events', methods=['GET'])
def get_events():
    events = Event.query.all()
    return jsonify([{
        'id': event.id,
        'name': event.name,
        'description': event.description,
        'date': event.date,
        'isAttended': event.isAttended,
        'isFeatured': event.isFeatured
    } for event in events])
