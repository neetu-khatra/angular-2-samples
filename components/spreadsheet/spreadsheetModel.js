var key_map_1 = require('./key-map');
var row_1 = require('./row');
var column_1 = require('./column');
var SpreadsheetModel = (function () {
    function SpreadsheetModel(rowCount, columnCount) {
        this.rows = [];
        for (var i = 0; i < rowCount; i++) {
            var row = new row_1.Row();
            for (var j = 0; j < columnCount; j++) {
                row.columns.push(new column_1.Column(j, i));
            }
            this.rows.push(row);
        }
        this.current = this.rows[0].columns[0];
    }
    SpreadsheetModel.prototype.selectColumn = function (col) {
        this.current = col;
    };
    SpreadsheetModel.prototype.navigate = function (keyCode) {
        var navDirection = key_map_1.KeyMap.getNavigationDorection(keyCode);
    };
    SpreadsheetModel.prototype.getActive = function (col) {
        if (col === this.current) {
            return 'active-cell';
        }
    };
    return SpreadsheetModel;
})();
exports.SpreadsheetModel = SpreadsheetModel;
