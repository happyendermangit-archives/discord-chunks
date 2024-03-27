function(e) {
    "use strict";
    e.exports = function(e) {
        return "+" === e ? ["+"] : e.split("+")
    }
}