var configValues = require('./config');

module.exports = {
    
    // In production, I can pass an argument in here that will tell this what string to return depending on if we're in test or production.
    // That can be an environment variable in Node.
    
    getDbConnectionString: function(){
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds035750.mlab.com:35750/nodetodosample';
    }
    
}