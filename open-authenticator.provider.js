const passport = require('koa-passport');

module.exports.register = async (container) => {
    container.singleton('passport', async () => {
        return passport;
    });
};