function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return s
        },
        age: function() {
            return u
        },
        atPreviousMillisecond: function() {
            return l
        },
        compare: function() {
            return d
        },
        extractTimestamp: function() {
            return a
        },
        fromTimestamp: function() {
            return o
        }
    });
    var i = n("654861"),
        r = n.n(i);
    let s = 14200704e5;

    function a(e) {
        return Math.floor(Number(e) / 4194304) + s
    }

    function o(e) {
        let t = e - s;
        return t <= 0 ? "0" : r()(t).shiftLeft(22).toString()
    }

    function l(e) {
        return o(a(e) - 1)
    }

    function u(e) {
        return Date.now() - a(e)
    }

    function d(e, t) {
        return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
    }
}