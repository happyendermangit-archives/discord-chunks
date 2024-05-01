function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("913527"),
        r = n.n(i),
        s = n("689938");
    let a = 3600,
        o = 86400,
        l = 2592e3,
        u = 31104e3,
        d = () => ({
            seconds: s.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
            minutes: s.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
            hours: s.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
            days: s.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
            months: s.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
            years: s.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
        }),
        _ = (e, t) => null != t && null != t[e],
        c = (e, t, n) => {
            var i, r, s;
            return _(e, t) ? null !== (r = null !== (i = t[e]) && void 0 !== i ? i : null == n ? void 0 : n[e]) && void 0 !== r ? r : null : null !== (s = null == n ? void 0 : n[e]) && void 0 !== s ? s : null
        };
    t.default = function(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = r()().diff(r()(e), "s"),
            s = null != t ? t() : void 0,
            _ = d(),
            E = (e, t) => {
                let i = c(e, s, n ? _ : void 0);
                return null == i ? null : "string" == typeof i ? i : i.format({
                    count: t
                })
            };
        if (i < 60) {
            let e = (null == s ? void 0 : s.seconds) != null ? E("seconds", i) : E("minutes", 1);
            if (null != e) return e
        }
        if (i < a) {
            let e = E("minutes", Math.floor(i / 60));
            if (null != e) return e
        }
        if (i < o) {
            let e = E("hours", Math.floor(i / a));
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
        if (i >= u && (null == s ? void 0 : s.years) != null) {
            let e = E("years", Math.floor(i / u));
            if (null != e) return e
        }
        return r()(e).format("LL")
    }
}