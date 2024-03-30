function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("913527"),
        o = n.n(r),
        i = n("941504"),
        a = 3600,
        u = 86400,
        s = 2592e3,
        l = 31104e3,
        c = function(e, t, n) {
            var r, o, i, a, u;
            return (a = e, null != (u = t) && null != u[a]) ? null !== (o = null !== (r = t[e]) && void 0 !== r ? r : null == n ? void 0 : n[e]) && void 0 !== o ? o : null : null !== (i = null == n ? void 0 : n[e]) && void 0 !== i ? i : null
        };
    t.default = function(e, t) {
        var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = o()().diff(o()(e), "s"),
            f = null != t ? t() : void 0,
            d = {
                seconds: i.default.Messages.THREAD_BROWSER_TIMESTAMP_SECONDS,
                minutes: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES,
                hours: i.default.Messages.THREAD_BROWSER_TIMESTAMP_HOURS,
                days: i.default.Messages.THREAD_BROWSER_TIMESTAMP_DAYS,
                months: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH,
                years: i.default.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_YEAR
            },
            _ = function(e, t) {
                var r = c(e, f, n ? d : void 0);
                return null == r ? null : "string" == typeof r ? r : r.format({
                    count: t
                })
            };
        if (r < 60) {
            var E = (null == f ? void 0 : f.seconds) != null ? _("seconds", r) : _("minutes", 1);
            if (null != E) return E
        }
        if (r < a) {
            var p = _("minutes", Math.floor(r / 60));
            if (null != p) return p
        }
        if (r < u) {
            var m = _("hours", Math.floor(r / a));
            if (null != m) return m
        }
        if (r < s) {
            var y = _("days", Math.floor(r / u));
            if (null != y) return y
        }
        if (r < l) {
            var I = _("months", Math.floor(r / s));
            if (null != I) return I
        }
        if (r >= l && (null == f ? void 0 : f.years) != null) {
            var h = _("years", Math.floor(r / l));
            if (null != h) return h
        }
        return o()(e).format("LL")
    }
}