// passport-google init
module.exports = async (context, next) => {
    const passport = await context.container.make('passport');
    return passport.authenticate('google', {session: false})(context, next);
};