function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEFAULT_TIMESTAMP_FORMAT: function() {
            return l
        },
        TIMESTAMP_FORMATS: function() {
            return o
        },
        TIMESTAMP_REGEX: function() {
            return d
        },
        parseTimestamp: function() {
            return _
        },
        unparseTimestamp: function() {
            return c
        }
    });
    var i = n("913527"),
        r = n.n(i),
        a = n("55935"),
        s = n("70956");
    let o = {
            t: e => (0, a.dateFormat)(e, "LT"),
            T: e => (0, a.dateFormat)(e, "LTS"),
            d: e => (0, a.dateFormat)(e, "L"),
            D: e => (0, a.dateFormat)(e, "LL"),
            f: e => (0, a.dateFormat)(e, "LLL"),
            F: e => (0, a.dateFormat)(e, "LLLL"),
            R: e => {
                let t = r().relativeTimeThreshold("s");
                r().relativeTimeThreshold("s", 60);
                let n = r().relativeTimeThreshold("ss");
                r().relativeTimeThreshold("ss", -1);
                let i = r().relativeTimeThreshold("m");
                r().relativeTimeThreshold("m", 60);
                let a = null;
                try {
                    a = r()(e.toDate()).fromNow()
                } catch (e) {}
                return r().relativeTimeThreshold("s", t), r().relativeTimeThreshold("ss", n), r().relativeTimeThreshold("m", i), null != a ? a : r()(e.toDate()).fromNow()
            }
        },
        l = "f";
    Object.setPrototypeOf(o, null);
    let u = Object.keys(o).join("|"),
        d = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(u, "))?>"));

    function _(e, t) {
        let n = r()(Number(e) * s.default.Millis.SECOND);
        if (!n.isValid()) return null;
        let i = null != t ? o[t] : void 0;
        return null == i && (i = o[l]), {
            timestamp: e,
            format: t,
            parsed: n,
            full: o.F(n),
            formatted: i(n)
        }
    }

    function c(e, t) {
        return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
    }
}