from app import app
from models import db
from models.reminder import Reminder
from models.event import Event
from models.tpoupdate import TPOUpdate

with app.app_context():
    db.drop_all()
    db.create_all()

    db.session.add_all([
        Reminder(text="Submit DSA Assignment"),
        Reminder(text="Pay Hostel Fees"),
        Event(name="Tech Fest", description="Coding, Robotics, Fun!", date="2025-04-30",isAttended=False, isFeatured=True),
        Event(name="Cultural Fest", description="Dance, Music, Drama!", date="2025-05-15",isAttended=False, isFeatured=True),
        TPOUpdate(message="Infosys Drive is coming very soon.", isRead=False)
    ])
    
    db.session.commit()
    print("✅ Dummy data added!")
