function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TIMESTAMP_FORMATS: function() {
            return o
        },
        DEFAULT_TIMESTAMP_FORMAT: function() {
            return l
        },
        TIMESTAMP_REGEX: function() {
            return d
        },
        parseTimestamp: function() {
            return c
        },
        unparseTimestamp: function() {
            return _
        }
    });
    var i = n("866227"),
        s = n.n(i),
        r = n("888400"),
        a = n("718517");
    let o = {
            t: e => (0, r.dateFormat)(e, "LT"),
            T: e => (0, r.dateFormat)(e, "LTS"),
            d: e => (0, r.dateFormat)(e, "L"),
            D: e => (0, r.dateFormat)(e, "LL"),
            f: e => (0, r.dateFormat)(e, "LLL"),
            F: e => (0, r.dateFormat)(e, "LLLL"),
            R: e => {
                let t = s.relativeTimeThreshold("s");
                s.relativeTimeThreshold("s", 60);
                let n = s.relativeTimeThreshold("ss");
                s.relativeTimeThreshold("ss", -1);
                let i = s.relativeTimeThreshold("m");
                s.relativeTimeThreshold("m", 60);
                let r = null;
                try {
                    r = s(e.toDate()).fromNow()
                } catch (e) {}
                return s.relativeTimeThreshold("s", t), s.relativeTimeThreshold("ss", n), s.relativeTimeThreshold("m", i), null != r ? r : s(e.toDate()).fromNow()
            }
        },
        l = "f";
    Object.setPrototypeOf(o, null);
    let u = Object.keys(o).join("|"),
        d = new RegExp("^<t:(-?\\d{1,17})(?::(".concat(u, "))?>"));

    function c(e, t) {
        let n = s(Number(e) * a.default.Millis.SECOND);
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

    function _(e, t) {
        return null != t ? "<t:".concat(e, ":").concat(t, ">") : "<t:".concat(e, ">")
    }
}