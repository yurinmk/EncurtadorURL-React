const UserModel = require("../model/UserModel");

class UserController {
  async create(request, response) {
    const user = new UserModel(request.body);

    await user
      .save()
      .then((success) => {
        return response
          .status(200)
          .json({ success: "Cadastro realizado com sucesso!" });
      })
      .catch((error) => {
        return response.status(500).json({ error: error });
      });
  }

  async login(request, response) {
    const { email, password } = request.body;

    const auth = await UserModel.findOne({
      where: { email: email, password: password },
    });

    if (auth) {
      const user = {
        id_user: auth.id,
        email: auth.email,
        nome: auth.name,
        sobrenome: auth.surname,
      };
      return response.status(200).json({ success: user });
    } else {
      return response.status(500).json({ error: "Login ou senha inválidos!" });
    }
  }
}

module.exports = new UserController();
