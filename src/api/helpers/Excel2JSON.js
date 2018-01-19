const XLSX = require('xlsx');


function Excel2JSON(file) {


	let data = new Uint8Array(file.buffer);
	const arr = [];
	for (const i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
	const bstr = arr.join("");

	/* Call XLSX */
	const workbook = XLSX.read(bstr, {type: "binary"});
	const procesed_workbook = JSON.parse(process_wb(workbook));

	data = procesed_workbook.us;

	return data;

}

function process_wb(wb) {
	return JSON.stringify(to_json(wb), 2, 2);
}
function to_json(workbook) {
	const result = {};
	workbook.SheetNames.forEach(function (sheetName) {
		const roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		if (roa.length > 0) {
			result[sheetName] = roa;
		}
	});
	return result;
}

module.exports = Excel2JSON;
