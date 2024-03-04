function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NONE: function() {
            return i
        },
        ALL: function() {
            return o
        },
        areDirty: function() {
            return s
        }
    });
    var r = n("125692"),
        i = [],
        o = [];

    function s(e, t) {
        return e !== i && (e === o || void 0 === t || (0, r.intersection)(t, e).length > 0)
    }
    i.__IS_NONE__ = !0, o.__IS_ALL__ = !0
}