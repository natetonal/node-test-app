var Todos = require('../models/todomodel');

module.exports = function(app) {
    
    app.get('/api/setupTodos', function(req, res){
        
        // seed database
        // beta.json-generator.com has a great JSON seeder. Good for Tonal!
        
        var starterTodos = [
          {
              username: 'test',
              todo: 'Buy milk',
              isDone: false,
              hasAttachment: false 
          },
          {
              username: 'test',
              todo: 'Feed dog',
              isDone: false,
              hasAttachment: false 
          },
          {
              username: 'test',
              todo: 'Learn Node',
              isDone: false,
              hasAttachment: false 
          }
        ];
        
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    }); 
}