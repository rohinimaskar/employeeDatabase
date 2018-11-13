const Employee = require('../models/employee.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Employee name can not be empty"
        });
    }


    const employee = new Employee({
        name: req.body.name,
        employeeId: req.body.employeeId,
        dob: req.body.dob,
        gender: req.body.gender,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        department: req.body.department,
        manager: req.body.manager,
        baseSalary: req.body.baseSalary,
        incentive: req.body.incentive,
        otherAllowance: req.body.otherAllowance,
        deduction: req.body.deduction           
    });

    // Save Note in the database
    employee.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the record."
        });
    });
};
//find all employees
exports.findAll = (req, res) => {
    Employee.find()
    .then(employees => {
        res.send(employees);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving Employees."
        });
    });
};

//find employee by Id
exports.findOne = (req, res) => {
    if(!req.params.id) {
        return res.status(400).send({
            message: "Id does not exist"
        });
    }
    Employee.findById(req.params.id)
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });            
        }
        res.send(employee);
    }).catch(err => {
        return res.status(500).send({
            message: "Error retrieving Employee with id " + req.params.id
        });
    });
};

exports.update = (req, res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Employee name can not be empty"
        });
    }

    Employee.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
             name: req.body.name,
             employeeId: req.body.employeeId,
             dob: req.body.dob,
             gender: req.body.gender,
             address: req.body.address,
             phoneNumber: req.body.phoneNumber,
             email: req.body.email,
             department: req.body.department,
             manager: req.body.manager,
             baseSalary: req.body.baseSalary,
             incentive: req.body.incentive,
             otherAllowance: req.body.otherAllowance,
             deduction: req.body.deduction             
        }
    }, {multi:false})
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.id
            });
        }
        res.send(employee);
    }).catch(err => {
        return res.status(500).send({
            message: "Error while updating with id " + req.params.id
        })
    })

};

exports.delete = (req, res) => {
    if(!req.params.id) {
        return res.status(400).send({
            message: "Id does not exist"
        });
    }
    Employee.findByIdAndRemove(req.params.id)
    .then(employee => {
        if(!employee) {
            return res.status(404).send({
                message: "Empoyee not found with id " + req.params.id
            });
        }
        res.send({message: "Employee deleted successfully!"});
    }).catch(err => {
        return res.status(500).send({
            message: "Could not delete Employee with id " + req.params.id
        });

    })
};
