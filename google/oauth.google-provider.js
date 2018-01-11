const GoogleStrategy = require('passport-google-oauth20').Strategy;

exports.register = async (container) => {
    container.singleton('passport.google', async () => {
        let kernel   = await container.make('http.kernel');
        let config   = await container.make('config');

        return new GoogleStrategy(config.oauth.google, (request, accessToken, refreshToken, profile, callback) => {
            kernel.context.google = {
                request: request,
                accessToken: accessToken,
                refreshToken: refreshToken,
                profile: profile
            };

            callback(null, profile);
        });

    })
};

module.exports.boot = async (container) => {
    const passport = await container.make('passport');
    const google   = await container.make('passport.google');

    passport.use(google);
};
