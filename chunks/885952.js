function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = {
        start: "end",
        end: "start"
    };

    function i(e) {
        return e.replace(/start|end/g, function(e) {
            return r[e]
        })
    }
}