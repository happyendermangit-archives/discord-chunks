function(e) {
    "use strict";

    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    e.exports = function(e) {
        return null !== e && "object" === t(e)
    }
}