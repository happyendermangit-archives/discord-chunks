function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getSourceClientOffset: function() {
            return i
        },
        getDifferenceFromInitialOffset: function() {
            return o
        }
    });

    function r(e, t) {
        return {
            x: e.x - t.x,
            y: e.y - t.y
        }
    }

    function i(e) {
        var t, n, i = e.clientOffset,
            o = e.initialClientOffset,
            s = e.initialSourceClientOffset;
        if (!i || !o || !s) return null;
        return r((t = i, n = s, {
            x: t.x + n.x,
            y: t.y + n.y
        }), o)
    }

    function o(e) {
        var t = e.clientOffset,
            n = e.initialClientOffset;
        return t && n ? r(t, n) : null
    }
}