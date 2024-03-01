function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areCoordsEqual: function() {
            return a
        },
        areArraysEqual: function() {
            return i
        }
    });
    var r = function(e, t) {
        return e === t
    };

    function a(e, t) {
        return !e && !t || !!e && !!t && e.x === t.x && e.y === t.y
    }

    function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        if (e.length !== t.length) return !1;
        for (var a = 0; a < e.length; ++a)
            if (!n(e[a], t[a])) return !1;
        return !0
    }
}