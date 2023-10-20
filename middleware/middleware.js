function PrintSuccess(req, res, next) {
	console.log(`Selalu Berhasil Akses`)
	next()
}

function PrintSuccessRoute(req, res, next) {
	console.log(`Selalu Berhasil Akses Lewat Route Level`)
	next()
}


module.exports = {
	PrintSuccess, PrintSuccessRoute
}