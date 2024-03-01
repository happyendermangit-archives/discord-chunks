function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        add: function() {
            return o
        },
        serialize: function() {
            return n
        }
    }), E("424973");
    let t = [];

    function o(e) {
        for (t.push(e); t.length > 10;) t.shift()
    }

    function n() {
        return t.join(" -> ")
    }
}