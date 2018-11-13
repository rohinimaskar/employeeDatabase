const mongoose = require('mongoose');
mongoose.set('debug', true);
const EmployeeSchema = mongoose.Schema({
    name: String,
    employeeId: String,
    dob: String,
    gender: {type: String, values: ['male', 'female', 'other']},
    address: {
    	street: String,
    	city: String,
    	state: String,
    	zip: String
    },
    phoneNumber: String,
    email: String,
    department: String,
    manager: String,
    baseSalary: Number,
    incentive: Number,
    otherAllowance: Number,    
    deduction: {
    	taxes: Number,
    	healthInsurance: Number,
    	'401k': Number
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', EmployeeSchema);