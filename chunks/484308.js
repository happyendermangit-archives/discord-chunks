function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DISCORD_EPOCH: function() {
            return i
        },
        age: function() {
            return l
        },
        atPreviousMillisecond: function() {
            return s
        },
        compare: function() {
            return c
        },
        extractTimestamp: function() {
            return a
        },
        fromTimestamp: function() {
            return u
        }
    });
    var r = n("654861"),
        o = n.n(r),
        i = 14200704e5;

    function a(e) {
        return Math.floor(Number(e) / 4194304) + i
    }

    function u(e) {
        var t = e - i;
        return t <= 0 ? "0" : o()(t).shiftLeft(22).toString()
    }

    function s(e) {
        return u(a(e) - 1)
    }

    function l(e) {
        return Date.now() - a(e)
    }

    function c(e, t) {
        return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
    }
}