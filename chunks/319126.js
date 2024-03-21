function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("866227"),
        s = n.n(i),
        r = n("782340");
    let a = 3600,
        o = 24 * a,
        l = 30 * o,
        u = 12 * l,
        d = () => ({
            seconds: r.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
            minutes: r.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
            hours: r.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
            days: r.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
            months: r.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
            years: r.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
        }),
        c = (e, t) => null != t && null != t[e],
        _ = (e, t, n) => {
            var i, s, r;
            return c(e, t) ? null !== (s = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== s ? s : null : null !== (r = null == n ? void 0 : n[e]) && void 0 !== r ? r : null
        };
    var f = function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = s().diff(s(e), "s"),
            r = null != t ? t() : void 0,
            c = d(),
            f = (e, t) => {
                let i = _(e, r, n ? c : void 0);
                return null == i ? null : "string" == typeof i ? i : i.format({
                    count: t
                })
            };
        if (i < 60) {
            let e = (null == r ? void 0 : r.seconds) != null ? f("seconds", i) : f("minutes", 1);
            if (null != e) return e
        }
        if (i < a) {
            let e = f("minutes", Math.floor(i / 60));
            if (null != e) return e
        }
        if (i < o) {
            let e = f("hours", Math.floor(i / a));
            if (null != e) return e
        }
        if (i < l) {
            let e = f("days", Math.floor(i / o));
            if (null != e) return e
        }
        if (i < u) {
            let e = f("months", Math.floor(i / l));
            if (null != e) return e
        }
        if (i >= u && (null == r ? void 0 : r.years) != null) {
            let e = f("years", Math.floor(i / u));
            if (null != e) return e
        }
        return s(e).format("LL")
    }
}