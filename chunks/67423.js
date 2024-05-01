function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return a
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
            return s
        },
        fromTimestamp: function() {
            return o
        }
    });
    var i = n("654861"),
        r = n.n(i);
    let a = 14200704e5;

    function s(e) {
        return Math.floor(Number(e) / 4194304) + a
    }

    function o(e) {
        let t = e - a;
        return t <= 0 ? "0" : r()(t).shiftLeft(22).toString()
    }

    function l(e) {
        return o(s(e) - 1)
    }

    function u(e) {
        return Date.now() - s(e)
    }

    function d(e, t) {
        return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
    }
}