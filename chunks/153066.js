function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClass: function() {
            return r
        }
    }), n("724458");
    var i = n("624138");

    function r(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) r[a - 2] = arguments[a];
        let s = r.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
            o = e["".concat(t).concat(s)];
        if (null != o) return o
    }
}