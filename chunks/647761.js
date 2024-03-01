function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
            return
        }
        e.cancelBubble = !0
    }
}