function(t) {
    "use strict";
    t.exports = Math.sign || function(t) {
        var r = +t;
        return 0 === r || r != r ? r : r < 0 ? -1 : 1
    }
}