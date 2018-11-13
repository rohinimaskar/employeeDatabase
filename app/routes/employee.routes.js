module.exports = (app) => {
    const employees = require('../controllers/employee.controller.js');

    // Create a new Note
    app.post('/api/employees', employees.create);
    app.get('/api/employees', employees.findAll);
    app.get('/api/employees/:id', employees.findOne);
    app.put('/api/employees/:id', employees.update);
    app.delete('/api/employees/:id', employees.delete);

    // Retrieve all Notes
    //app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    //app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    //app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    //app.delete('/notes/:noteId', notes.delete);
}