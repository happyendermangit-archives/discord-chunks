function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function i(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return r[e]
        })
    }
}