function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getClass: function() {
            return o
        }
    });
    var r = n("778513");

    function o(e, t) {
        for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
        var a = o.reduce(function(e, t) {
                return e + (0, r.upperCaseFirstChar)(t)
            }, ""),
            u = e["".concat(t).concat(a)];
        if (null != u) return u
    }
}