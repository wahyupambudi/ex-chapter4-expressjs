const { ResponseTemplate } = require("../helper/template.helper");
const Joi = require("joi");

// function PrintSuccess(req, res, next) {
// 	console.log(`Selalu Berhasil Akses`);
// 	next();
// }

// function PrintSuccessRoute(req, res, next) {
// 	console.log(`Selalu Berhasil Akses Lewat Route Level`);
// 	next();
// }

function CheckPostReq(req, res, next) {
	// if (req.body.name == undefined || req.body.address == undefined) {
	// 	let respErr = ResponseTemplate(
	// 		null,
	// 		"invalid request",
	// 		new Error("invalid request"),
	// 		400,
	// 	);
	// 	res.json(respErr);
	// }

	const schema = Joi.object({
		name: Joi.string().alphanum().max(255).required(),
		address: Joi.string().alphanum().required(),
	});

	const { error } = schema.validate(req.body);
	if (error) {
		let respErr = ResponseTemplate(null, "invalid request", error, 400);
		res.json(respErr);
		return
	}

	next();
}

module.exports = {
	// PrintSuccess,
	// PrintSuccessRoute,
	CheckPostReq,
};
