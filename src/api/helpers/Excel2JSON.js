var XLSX = require('xlsx');



function Excel2JSON (file){


    var data = new Uint8Array(file.buffer);
    var arr = new Array();
    for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    var bstr = arr.join("");

    /* Call XLSX */
    var workbook = XLSX.read(bstr, {type:"binary"});
    var procesed_workbook = JSON.parse(process_wb(workbook));

    data = procesed_workbook.us;

    return data;


    function process_wb(wb) {
        var output = JSON.stringify(to_json(wb), 2, 2);
        return output
    }
    function to_json(workbook) {
        var result = {};
        workbook.SheetNames.forEach(function(sheetName) {
            var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if(roa.length > 0){
                result[sheetName] = roa;
            }
        });
        return result;
    }



}

module.exports = Excel2JSON;
