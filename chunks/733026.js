function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        splitQuery: function() {
            return r
        }
    }), n("653041");
    var i = n("581364");

    function r(e) {
        let t = e.split(",").map(e => e.trim()),
            n = [],
            r = [];
        return t.forEach(e => {
            (0, i.isSnowflake)(e) ? n.push(e): r.push(e)
        }), [r, n]
    }
}