// passport facebook
module.exports = async (context, next) => {
    const passport = await context.container.make('passport');
    return passport.authenticate('facebook', { session: false })(context, next);
};