function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        s = n("570140"),
        a = n("626135"),
        o = n("261376"),
        l = n("981631");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set,
        dailyCapOverridden: !1,
        renderedAtTimestamps: new Map
    };
    class _ extends(i = r.default.PersistedStore) {
        initialize(e) {
            if (null != e) {
                var t;
                d.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0, d.dailyCapPeriodStart = e.dailyCapPeriodStart, d.dailyCapOverridden = e.dailyCapOverridden
            }
            d.dismissibleContentSeenDuringSession = new Set
        }
        getState() {
            return d
        }
        get dailyCapOverridden() {
            return d.dailyCapOverridden
        }
        getRenderedAtTimestamp(e) {
            return d.renderedAtTimestamps.get(e)
        }
        hasUserHitDCCap(e) {
            if (null != e && (o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e) || d.dailyCapOverridden) || null != e && d.dismissibleContentSeenDuringSession.has(e)) return !1;
            let t = new Date;
            return t.setHours(0, 0, 0, 0), null != d.dailyCapPeriodStart && d.dailyCapPeriodStart < t.getTime() && (d.numberOfDCsShownToday = 0, d.dailyCapPeriodStart = null), d.numberOfDCsShownToday >= 3
        }
    }
    u(_, "displayName", "DismissibleContentFrameworkStore"), u(_, "persistKey", "DismissibleContentFrameworkStore"), u(_, "migrations", [e => ({
        ...e
    })]), t.default = new _(s.default, {
        LOGOUT: function() {
            d = {
                ...d,
                dismissibleContentSeenDuringSession: new Set,
                renderedAtTimestamps: new Map
            }
        },
        DCF_DAILY_CAP_OVERRIDE: function(e) {
            let {
                value: t
            } = e;
            d.dailyCapOverridden = t
        },
        DCF_HANDLE_DC_SHOWN: function(e) {
            let {
                dismissibleContent: t
            } = e, n = new Date;
            if (d.renderedAtTimestamps.set(t, n.getTime()), !o.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t) && !d.dailyCapOverridden) {
                if (!d.dismissibleContentSeenDuringSession.has(t)) {
                    if (d.dismissibleContentSeenDuringSession.add(t), null == d.dailyCapPeriodStart) {
                        let e = new Date;
                        e.setHours(0, 0, 0, 0), d.dailyCapPeriodStart = e.getTime()
                    }
                    d.numberOfDCsShownToday += 1, d.numberOfDCsShownToday > 3 && a.default.track(l.AnalyticEvents.DCF_CAP_EXCEEDED, {
                        cap_type: "daily_cap",
                        dismissible_content: t,
                        shown_dcs: d.numberOfDCsShownToday
                    })
                }
            }
        },
        DCF_HANDLE_DC_DISMISSED: function(e) {
            let {
                dismissibleContent: t
            } = e;
            d.renderedAtTimestamps.delete(t)
        },
        DCF_RESET: function() {
            d.dailyCapPeriodStart = null, d.numberOfDCsShownToday = 0, d.dismissibleContentSeenDuringSession = new Set
        }
    })
}