module.exports = (app) => {
    const employees = require('../controllers/employee.controller.js');

    ]
    app.post('/api/employees', employees.create);
    app.get('/api/employees', employees.findAll);
    app.get('/api/employees/:id', employees.findOne);
    app.put('/api/employees/:id', employees.update);
    app.delete('/api/employees/:id', employees.delete);

}
