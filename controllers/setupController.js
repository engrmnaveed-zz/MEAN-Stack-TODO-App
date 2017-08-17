var Todos = require('../models/todoModel');

module.exports = function (app) {

    app.get('/api/setupTodos', function (req, res) {

        Todos.find({}, function (err, results) {
            if (err) {
                res.send('Somethings went wrong! while fetching data');
            }
            else if (results.length > 0) {
                var response = {
                    "message": "Already seeded!"
                };
                res.send(response);
            }
            else {
                //seed database
                var starterTodos = [
                    {
                        username: 'test',
                        todo: 'complete task 1',
                        isDone: false,
                        hasAttachment: false
                    },
                    {
                        username: 'test',
                        todo: 'complete task 2',
                        isDone: false,
                        hasAttachment: false
                    },
                    {
                        username: 'test',
                        todo: 'complete task 3',
                        isDone: false,
                        hasAttachment: false
                    },
                    {
                        username: 'test-2',
                        todo: 'complete task 1',
                        isDone: false,
                        hasAttachment: false
                    },
                    {
                        username: 'test-2',
                        todo: 'complete task 2',
                        isDone: false,
                        hasAttachment: false
                    }
                ];

                Todos.create(starterTodos, function (err, results) {
                    if (err) {
                        res.send('Somethings went wrong! while saving data');
                    }
                    else {
                        res.send(results);
                    }
                });
            }
        });


    });

}