from api import api, models, db, ma
from flask_restplus import Resource, Api, reqparse, inputs
from api.models import Employee, Event
import datetime
import calendar
from dateutil.parser import parse
import json

@api.route('/api/init')
class HelloWorld(Resource):
    def get(self):
        db.create_all()
        emp = Employee(lastName='Jones', firstName='Bob', extension='x5555')
        db.session.add(emp)
        emp = Employee(lastName='Parker', firstName='Alice', extension='x6666')
        db.session.add(emp)
        db.session.commit()
        return {'hello': 'world'}

class EmployeeSchema(ma.ModelSchema):
    class Meta:
        model = Employee

class EventSchema(ma.ModelSchema):
    class Meta:
        model = Event

@api.route('/api/users')
class UserList(Resource):
    def get(self):
        return self.all_employees()

    def post(self):
        args = self.get_args()
        emp = Employee.query.filter(Employee.employeeNumber==args.employeeNumber).first()
        if not emp:
            emp = Employee()
        emp.firstName = args.firstName
        emp.lastName = args.lastName
        db.session.add(emp)
        db.session.commit()
        return self.all_employees()
    
    def all_employees(self):
        all_employees = Employee.query.order_by(Employee.lastName).all()
        employee_schema = EmployeeSchema(many=True)
        return employee_schema.jsonify(all_employees)

    def get_args(self):
        parser = reqparse.RequestParser()
        parser.add_argument('firstName', default='', help='First name')
        parser.add_argument('lastName', default='', help='Last name')
        parser.add_argument('employeeNumber', default='', help='Employee number')
        return parser.parse_args()


@api.route('/api/events')
class EventList(Resource):

    def post(self):
        args = self.get_args()
        daysinmonth = calendar.monthrange(args.year, args.month)[1]
        startDate = datetime.date(args.year, args.month, 1)
        endDate = datetime.date(args.year, args.month, daysinmonth)
        all_events = Event.query.filter(Event.startDate >= startDate, Event.startDate <= endDate).all()
        event_schema = EventSchema(many=True)
        return event_schema.jsonify(all_events)
    
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('startDate', default='', help='Start date')
        parser.add_argument('title', default='', help='Title')
        args = parser.parse_args()
        event = Event()
        event.title = args.title
        event.startDate = parse(args.startDate)
        event.endDate = parse(args.startDate)
        db.session.add(event)
        db.session.commit()
        return '[]'
        

    def get_args(self):
        parser = reqparse.RequestParser()
        today = datetime.date.today()
        parser.add_argument('month', type=int, default=today.month, help='Month')
        parser.add_argument('year', type=int, default=today.year, help='Year')
        return parser.parse_args()