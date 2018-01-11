// passport initialize
module.exports = async (context, next) => {
    const passport = await context.container.make('passport');
    return passport.initialize()(context, next);
};