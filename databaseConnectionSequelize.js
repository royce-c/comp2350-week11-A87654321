const is_qoddi = process.env.IS_HEROKU || false;

const dbConfigHeroku = "mongodb+srv://admin:TJegPTvGhuNMMnPL@cluster0.ztfkq3k.mongodb.net/?retryWrites=true&w=majority";

const dbConfigLocal = "mysql://root:Password@localhost/lab_example";

if (is_qoddi) {
	var databaseConnectionString = dbConfigHeroku;
}
else {
	var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
		