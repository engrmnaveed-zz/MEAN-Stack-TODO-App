var database_user = process.env.DB_USER || 'root';
var database_pass = process.env.DB_PASS || 'root';

module.exports = {

    getDbConnectionString: function () {
        return 'mongodb://' + database_user + ':' + database_pass + '@ds145193.mlab.com:45193/mean-todo-app';
    }

}