function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        splitQuery: function() {
            return n
        }
    }), r("424973");
    var i = r("389153");

    function n(e) {
        let t = e.split(",").map(e => e.trim()),
            r = [],
            n = [];
        return t.forEach(e => {
            (0, i.isSnowflake)(e) ? r.push(e): n.push(e)
        }), [n, r]
    }
}