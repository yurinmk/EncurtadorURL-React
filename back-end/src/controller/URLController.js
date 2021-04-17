const { response } = require("express");
const URLModel = require("../model/URLModel");

class URLController {
  async generateShortenedURL(request, response) {
    const { id_user, original_url } = request.body;
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    const data = {
      id_user,
      id_url: code,
      original_url,
      shortened_url: `${process.env.APP_URL}/${code}`,
    };

    const url = new URLModel(data);

    await url
      .save()
      .then(() => {
        return response.status(200).json({
          success: {
            originalURL: data.original_url,
            shortenedURL: data.shortened_url,
          },
        });
      })
      .catch((error) => {
        return response.status(500).json({ error: error });
      });
  }

  async listGeneratedURL(request, response) {
    const { id } = request.params;

    const urls = await URLModel.findAll({
      where: {
        id_user: id,
      },
    });

    if (urls) {
      return response.status(200).json({ success: urls });
    } else {
      return response
        .status(500)
        .json({ success: "Usuário não possui URLs geradas!" });
    }
  }

  async findURL(request, response) {
    const { id_url } = request.params;

    const url = await URLModel.findOne({ where: { id_url: id_url } });

    if (url) {
      response.redirect(url.original_url);
    } else {
      return response.status(500).json({ success: "URL não localizada." });
    }
  }
}

module.exports = new URLController();
