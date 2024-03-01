function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("866227"),
        a = n.n(i),
        l = n("782340");
    let s = 3600,
        r = 24 * s,
        u = 30 * r,
        d = 12 * u,
        o = () => ({
            seconds: l.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
            minutes: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
            hours: l.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
            days: l.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
            months: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
            years: l.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
        }),
        c = (e, t) => null != t && null != t[e],
        _ = (e, t, n) => {
            var i, a, l;
            return c(e, t) ? null !== (a = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== a ? a : null : null !== (l = null == n ? void 0 : n[e]) && void 0 !== l ? l : null
        };
    var f = function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = a().diff(a(e), "s"),
            l = null != t ? t() : void 0,
            c = o(),
            f = (e, t) => {
                let i = _(e, l, n ? c : void 0);
                return null == i ? null : "string" == typeof i ? i : i.format({
                    count: t
                })
            };
        if (i < 60) {
            let e = (null == l ? void 0 : l.seconds) != null ? f("seconds", i) : f("minutes", 1);
            if (null != e) return e
        }
        if (i < s) {
            let e = f("minutes", Math.floor(i / 60));
            if (null != e) return e
        }
        if (i < r) {
            let e = f("hours", Math.floor(i / s));
            if (null != e) return e
        }
        if (i < u) {
            let e = f("days", Math.floor(i / r));
            if (null != e) return e
        }
        if (i < d) {
            let e = f("months", Math.floor(i / u));
            if (null != e) return e
        }
        if (i >= d && (null == l ? void 0 : l.years) != null) {
            let e = f("years", Math.floor(i / d));
            if (null != e) return e
        }
        return a(e).format("LL")
    }
}