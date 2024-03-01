function(e, t, n) {
    "use strict";
    var r = "undefined" != typeof Symbol && Symbol,
        a = n("391938");
    e.exports = function() {
        return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && a()
    }
}