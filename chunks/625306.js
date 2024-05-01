function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        add: function() {
            return r
        },
        serialize: function() {
            return s
        }
    }), n("653041");
    let i = [];

    function r(e) {
        for (i.push(e); i.length > 10;) i.shift()
    }

    function s() {
        return i.join(" -> ")
    }
}