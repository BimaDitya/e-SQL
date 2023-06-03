export default function TableSQL({ columns, values }) {
	return (
		<>
			<div className="overflow-auto">
				<table className="table-auto w-full text-left border-2 border-secondary-200">
					<thead className="font-head uppercase bg-secondary-200 text-white">
						<tr>
							{columns.map((column, index) => (
								<th key={index} scope="col" className="px-4 py-2">
									{column}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="font-body text-sm text-gray-600">
						{
							values.map((rows, index) => (
								<tr className="border-b-2 border-secondary-200" key={index}>
									{rows.map((value, index) => (
										<td className="px-4 py-2" key={index}>{value}</td>
									))}
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</>
	);
}
