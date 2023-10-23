const { ResponseTemplate } = require("../helper/template.helper");

function TestUser(req, res) {
  let resp = ResponseTemplate(null, "success", null, 200);
  res.json(resp);

  // jika manual
  // res.json({
  //   data: null,
  //   message: "Berhasil Masuk User",
  //   status: 200,
  // });
}

function TestUserPost(req, res) {
  // console.log(req.query.name);

  // create validation
  const { name, address } = req.body;

  try {
    // if (!name || !address) {
    //   let resp = ResponseTemplate(
    //     null,
    //     "bad request",
    //     new Error("bad request"),
    //     400,
    //   );
    //   res.json(resp);
    //   return;
    // }
    let objResp = {
      name: req.body.name,
      address: req.body.address,
    };
    let resp = ResponseTemplate(objResp, "success", null, 200);
    res.json(resp);
    return;
  } catch (error) {
    let resp = ResponseTemplate(null, "server error", error, 500);
    res.json(resp);
    return;
  }
}

module.exports = {
  TestUser,
  TestUserPost,
};
