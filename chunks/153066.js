function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClass: function() {
            return r
        }
    }), n("724458");
    var i = n("624138");

    function r(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) r[s - 2] = arguments[s];
        let a = r.reduce((e, t) => e + (0, i.upperCaseFirstChar)(t), ""),
            o = e["".concat(t).concat(a)];
        if (null != o) return o
    }
}