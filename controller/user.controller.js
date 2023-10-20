const {resp} = require("../helper/template.helper")

function TestUser(req, res) {

  resp.data = null
  resp.message = "success"
  resp.status = 200

  res.json(resp)

  // res.json({
  //   data: null,
  //   message: "Berhasil Masuk User",
  //   status: 200,
  // });
}

module.exports = {
  TestUser,
};
