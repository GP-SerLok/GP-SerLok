const { OAuth2Client } = require('google-auth-library');
const { signToken } = require('../helper/jwt');
const client = new OAuth2Client();

module.exports = class User {
    static async googleLogin(req, res) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.googleToken,
                audience: "622140840189-o5sk7mltpbipqsrfg2volh0kklfgu8j8.apps.googleusercontent.com",
            });
            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    name: payload.name,
                    email: payload.email,
                    password: Math.random().toString()
                },
            });
            const token = signToken({ id: user.id })
            res.json({ access_token: token })
        } catch (error) {
            console.log(error)
        }
    }
}