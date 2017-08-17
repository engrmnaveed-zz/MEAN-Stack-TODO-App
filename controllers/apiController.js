var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    app.get('/api/todos/:uname', function (req, res) {

        Todos.find({ username: req.params.uname }, function (err, todos) {
            if (err) throw err;

            res.send(todos);
        });

    });

    app.get('/api/todo/:id', function (req, res) {

        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;

            res.send(todo);
        });

    });

    app.post('/api/todo', function (req, res) {

        if (req.body.id) {
            // Update
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {

                if (err) throw err;

                res.send('Successfully Updated!');

            });

        }
        else {
            // Create
            var newTodo = Todos ({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function (err) {

                if (err) throw err;

                res.send('Successfully Created!');

            });
        }

    });

    app.delete('/api/todo', function (req, res) {

        Todos.findByIdAndRemove(req.body.id, function (err) {

            if (err) throw err;

            res.send('Successfully Deleted!');

        })
        
    });

}
