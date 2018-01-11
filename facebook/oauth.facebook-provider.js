const FacebookStrategy = require('passport-facebook');

module.exports.register = async (container) => {
    container.singleton('passport.facebook', async () => {
        let kernel   = await container.make('http.kernel');
        let config   = await container.make('config');
        return new FacebookStrategy(config.oauth.facebook, (accessToken, refreshToken, profile, callback) => {
            kernel.context.facebook = {
                accessToken: accessToken,
                refreshToken: refreshToken,
                profile: profile
            };

            callback(null, profile);
        });
    });
};

module.exports.boot = async (container) => {
    const passport = await container.make('passport');
    const facebook = await container.make('passport.facebook');

    passport.use(facebook);
};