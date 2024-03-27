function(e) {
    "use strict";
    (e.exports = {}).getOption = function(e, t, n) {
        var r = e[t];
        return null == r && void 0 !== n ? n : r
    }
}