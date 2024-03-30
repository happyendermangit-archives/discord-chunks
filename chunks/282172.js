function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        splitQuery: function() {
            return o
        }
    });
    var r = n("653754");

    function o(e) {
        var t = e.split(",").map(function(e) {
                return e.trim()
            }),
            n = [],
            o = [];
        return t.forEach(function(e) {
            (0, r.isSnowflake)(e) ? n.push(e): o.push(e)
        }), [o, n]
    }
}