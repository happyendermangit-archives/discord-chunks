function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ALL: function() {
            return a
        },
        NONE: function() {
            return i
        },
        areDirty: function() {
            return o
        }
    });
    var r = n("144459"),
        i = [],
        a = [];

    function o(e, t) {
        return e !== i && (e === a || void 0 === t || (0, r.intersection)(t, e).length > 0)
    }
    i.__IS_NONE__ = !0, a.__IS_ALL__ = !0
}