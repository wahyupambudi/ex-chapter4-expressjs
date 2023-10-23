const express = require("express");
const router = express.Router();
const userRoute = require("./user.route");
const morgan = require("morgan");

router.use(morgan("dev"));

router.get("/ping", (req, res) => {
	// console.log(req)
	// res.json({
	// 	data: null,
	// 	message: "PONG",
	// 	status: 200,
	// });

	const pong = 'PING' || 'void'

	res.render('index', {
		pong
	}) 
	return
});

router.get('/signup', (req, res) => {
	res.render('register');
	return
})
 
router.use("/user", userRoute);

// router.use("/v1/user", userRoute);
// router.use("/v2/user", userRoute);

module.exports = router;
