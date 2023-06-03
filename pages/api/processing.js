import SQL from "@/lib/sql";
export default async function SQLProcessing(req, res) {
	const database = new SQL.Database()
	const code = req.body;
	try {
		const string =
			"CREATE TABLE Users (Id Int, Nama Char, Prodi Char); \
		INSERT INTO Users VALUES (0, 'Bima Aditya', 'P. Teknologi Informasi'); \
		INSERT INTO Users VALUES (1, 'Moch. Hendra', 'Teknik Informatika');";
		database.run(string);
		const results = database.exec(code);
		const result = results[0];
		const { columns, values } = result || [{}];
		res.status(200).send([{ columns, values }]);
		console.log([{ columns, values }]);
	} catch (error) {
		res.status(500).send(error.message.toUpperCase());
		console.log(error.message);
	}
}
