function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return r
        },
        extractTimestamp: function() {
            return a
        },
        fromTimestamp: function() {
            return o
        },
        atPreviousMillisecond: function() {
            return l
        },
        age: function() {
            return u
        },
        compare: function() {
            return d
        }
    });
    var i = n("552442"),
        s = n.n(i);
    let r = 14200704e5;

    function a(e) {
        return Math.floor(Number(e) / 4194304) + r
    }

    function o(e) {
        let t = e - r;
        return t <= 0 ? "0" : s(t).shiftLeft(22).toString()
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