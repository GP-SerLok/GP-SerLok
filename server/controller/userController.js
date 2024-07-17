const { signToken } = require("../helper/jwt");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();

module.exports = class UserController {
  static async userLogin(req, res) {
    try {
      const { email, password } = req.body;
      if (!email) {
        return res.status(400).json({
          message: "Email is required",
        });
      }
      if (!password) {
        return res.status(400).json({
          message: "Password is required",
        });
      }
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({
          message: "Email or Password invalid",
        });
      }
      const access_token = jwt.signToken(
        { id: user.id, name: user.name },
        "JWT_SECRET"
      );
      res.status(200).json({
        access_token,
      });
    } catch (error) {
      console.log(error);
    }
  }
  static async googleLogin(req, res) {
    try {
      console.log(req.body, "<<CEKK");
      const ticket = await client.verifyIdToken({
        idToken: req.body.googleToken,
        audience:
          "622140840189-o5sk7mltpbipqsrfg2volh0kklfgu8j8.apps.googleusercontent.com",
      });
      const payload = ticket.getPayload();
      let userName = payload.name;

      const [user, created] = await User.findOrCreate({
        where: { email: payload.email },
        defaults: {
          name: payload.name,
          email: payload.email,
          password: Math.random().toString(),
        },
      });
      const token = signToken({ id: user.id });
      //   res.status(created ? 201 : 200).json({ id: 123, name: "nama" });
      res
        .status(created ? 201 : 200)
        .json({ access_token: token, name: userName });
    } catch (error) {
      console.log(error);
    }
  }
};
