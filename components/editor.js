import initSqlJs from "sql.js";
import TableSQL from "./table";
import { hint } from "codemirror";
import React, { useState, useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import "codemirror/mode/sql/sql";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/addon/hint/sql-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";

export default function SQLEditor() {
	const [code, setCode] = useState("");
	const [error, setError] = useState(null);
	const [results, setResults] = useState([]);
	const [database, setDatabase] = useState(null);
	
	useEffect(() => {
		initSqlJs({
			locateFile: (file) => `https://sql.js.org/dist/${file}`,
		})
			.then((SQL) => setDatabase(new SQL.Database()))
			.catch((error) => setError(error));
	}, []);

	async function execute() {
		try {
			const result = database.exec(code)
			setResults(console.log(result));
			setError(null);
		} catch (error) {
			setError(console.log(error));
			setResults([]);
		}
	}
	return (
		<>
			<div className="w-[70%] p-4 rounded-md backdrop-blur-sm bg-white/5 border-2 border-gray-200 ml-2">
				{/* Editor Section */}
				<div className="w-full">
					<p className="text-lg font-head font-semibold text-secondary-400">
						Editor
					</p>
					<div className="z-50 w-full">
						<div className="w-auto h-48">
							<CodeMirror
								height="100%"
								onChange={(editor) => setCode(editor.getValue())}
								options={{
									hintOptions: { completeSingle: false, hint: hint.sql },
									showHint: true,
									autofocus: true,
									autocapitalize: true,
									lineWrapping: true,
									theme: "material",
									mode: "text/x-mysql",
									extraKeys: { "Ctrl-Space": "autocomplete" },
								}}
							/>
						</div>
						<p className="py-2 text-sm font-body text-gray-400">
							*Gunakan &apos; Ctrl + Space &apos; Untuk Menampilkan Hint
						</p>
						<div className="flex flex-row justify-start space-x-4">
							<button
								onClick={execute}
								disabled={!code}
								className="flex flex-row w-fit font-head px-6 py-2 bg-emerald-600 text-white rounded-md transition ease-in-out hover:bg-emerald-400 hover:shadow-md duration-300 disabled:bg-slate-400 disabled:text-gray-200"
							>
								<p>Jalankan</p>
							</button>
							<label
								htmlFor="load-db"
								className="flex flex-row w-fit font-head px-6 py-2 bg-primary-400 text-white rounded-md cursor-pointer transition ease-in-out hover:bg-primary-200 hover:shadow-md duration-300"
							>
								Muat Database
							</label>
							<input hidden id="load-db" type="file" />
						</div>
					</div>
				</div>
				{/* Output Section */}
				<div className="w-full py-2">
					<p className="text-lg font-head font-semibold text-secondary-400">
						Output
					</p>
					<div className="w-full">
						{/* <pre className="font-body text-sm text-rose-600">{error || ""}</pre> */}
						{/* {results.map(({ columns, values }) => (
							<TableSQL key={values} columns={columns} values={values} />
						))} */}
					</div>
				</div>
			</div>
		</>
	);
}
