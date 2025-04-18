from flask import Blueprint, jsonify
from models.tpoupdate import TPOUpdate
from models import db

tpoupdates_bp = Blueprint('tpoupdates', __name__)

@tpoupdates_bp.route('/tpoupdates', methods=['GET'])
def get_tpoupdates():
    updates = TPOUpdate.query.all()
    return jsonify([{
        'id': u.id,
        'message': u.message,
        'isRead': u.isRead
    } for u in updates])
