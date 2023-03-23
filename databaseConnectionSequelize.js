const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = "mongodb+srv://admin:TJegPTvGhuNMMnPL@cluster0.ztfkq3k.mongodb.net/?retryWrites=true&w=majority";

const dbConfigLocal = "mysql://root:password@localhost/lab_example";

if (is_qoddi) {
	var databaseConnectionString = dbConfigQoddi;
}
else {
	var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
		