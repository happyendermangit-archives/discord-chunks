function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        add: function() {
            return o
        },
        serialize: function() {
            return i
        }
    });
    var r = [];

    function o(e) {
        for (r.push(e); r.length > 10;) r.shift()
    }

    function i() {
        return r.join(" -> ")
    }
}