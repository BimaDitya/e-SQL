import initSqlJs from "sql.js";
const SQL = await initSqlJs({
	locateFile: (file) => `./node_modules/sql.js/dist/${file}`,
});
export default SQL;
