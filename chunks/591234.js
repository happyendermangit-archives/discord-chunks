function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_TIMESTAMP_FORMAT: function() {
            return s
        },
        TIMESTAMP_FORMATS: function() {
            return u
        },
        TIMESTAMP_REGEX: function() {
            return c
        },
        parseTimestamp: function() {
            return f
        },
        unparseTimestamp: function() {
            return d
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("170030"),
        a = n("388990"),
        u = {
            t: function(e) {
                return (0, i.dateFormat)(e, "LT")
            },
            T: function(e) {
                return (0, i.dateFormat)(e, "LTS")
            },
            d: function(e) {
                return (0, i.dateFormat)(e, "L")
            },
            D: function(e) {
                return (0, i.dateFormat)(e, "LL")
            },
            f: function(e) {
                return (0, i.dateFormat)(e, "LLL")
            },
            F: function(e) {
                return (0, i.dateFormat)(e, "LLLL")
            },
            R: function(e) {
                var t = o().relativeTimeThreshold("s");
                o().relativeTimeThreshold("s", 60);
                var n = o().relativeTimeThreshold("ss");
                o().relativeTimeThreshold("ss", -1);
                var r = o().relativeTimeThreshold("m");
                o().relativeTimeThreshold("m", 60);
                var i = null;
                try {
                    i = o()(e.toDate()).fromNow()
                } catch (e) {}
                return o().relativeTimeThreshold("s", t), o().relativeTimeThreshold("ss", n), o().relativeTimeThreshold("m", r), null != i ? i : o()(e.toDate()).fromNow()
            }
        },
        s = "f";
    Object.setPrototypeOf(u, null);
    var l = Object.keys(u).join("|"),
        c = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(l, "))?>"));

    function f(e, t) {
        var n = o()(Number(e) * a.default.Millis.SECOND);
        if (!n.isValid()) return null;
        var r = null != t ? u[t] : void 0;
        return null == r && (r = u[s]), {
            timestamp: e,
            format: t,
            parsed: n,
            full: u.F(n),
            formatted: r(n)
        }
    }

    function d(e, t) {
        return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
    }
}