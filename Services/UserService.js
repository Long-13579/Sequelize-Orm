const User = require('../Data Access/UsersAccess.js');

exports.GetAll = async function () {
    try {
        let users = await User.getAll();
        return users;
    } catch (error) {
        
    }
}