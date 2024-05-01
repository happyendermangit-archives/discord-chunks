function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("913527"),
        r = n.n(i),
        a = n("689938");
    let s = 3600,
        o = 86400,
        l = 2592e3,
        u = 31104e3,
        d = () => ({
            seconds: a.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
            minutes: a.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
            hours: a.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
            days: a.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
            months: a.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
            years: a.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
        }),
        _ = (e, t) => null != t && null != t[e],
        c = (e, t, n) => {
            var i, r, a;
            return _(e, t) ? null !== (r = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== r ? r : null : null !== (a = null == n ? void 0 : n[e]) && void 0 !== a ? a : null
        };
    t.default = function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = r()().diff(r()(e), "s"),
            a = null != t ? t() : void 0,
            _ = d(),
            E = (e, t) => {
                let i = c(e, a, n ? _ : void 0);
                return null == i ? null : "string" == typeof i ? i : i.format({
                    count: t
                })
            };
        if (i < 60) {
            let e = (null == a ? void 0 : a.seconds) != null ? E("seconds", i) : E("minutes", 1);
            if (null != e) return e
        }
        if (i < s) {
            let e = E("minutes", Math.floor(i / 60));
            if (null != e) return e
        }
        if (i < o) {
            let e = E("hours", Math.floor(i / s));
            if (null != e) return e
        }
        if (i < l) {
            let e = E("days", Math.floor(i / o));
            if (null != e) return e
        }
        if (i < u) {
            let e = E("months", Math.floor(i / l));
            if (null != e) return e
        }
        if (i >= u && (null == a ? void 0 : a.years) != null) {
            let e = E("years", Math.floor(i / u));
            if (null != e) return e
        }
        return r()(e).format("LL")
    }
}