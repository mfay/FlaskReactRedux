from api import api, models, db, ma
from flask_restplus import Resource, Api, reqparse, inputs
from api.models import Employee

@api.route('/init')
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

@api.route('/users')
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


@api.route('/employees')
class EmployeeList(Resource):

    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', default='', help='Filter by email address')
        parser.add_argument('firstName', default='', help='Filter by first name')
        parser.add_argument('lastName', default='', help='Filter by last name')
        args = parser.parse_args()
        all_employees = (
            Employee.query
            .filter(Employee.email.contains(args.email))
            .filter(Employee.firstName.contains(args.firstName))
            .filter(Employee.lastName.contains(args.lastName))
            .all()
        )
        employee_schema = EmployeeSchema(many=True)
        return employee_schema.jsonify(all_employees)