function(e) {
    "use strict";
    e.exports = function(e) {
        if (e.preventDefault) {
            e.preventDefault();
            return
        }
        e.returnValue = !1
    }
}