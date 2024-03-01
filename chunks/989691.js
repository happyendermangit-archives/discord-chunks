function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("446674"),
        r = n("913144"),
        s = n("599110"),
        a = n("495226"),
        o = n("49111");
    let l = {
        numberOfDCsShownToday: 0,
        dailyCapPeriodStart: null,
        dismissibleContentSeenDuringSession: new Set,
        dailyCapOverridden: !1,
        renderedAtTimestamps: new Map
    };
    class u extends i.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                var t;
                l.numberOfDCsShownToday = null !== (t = e.numberOfDCsShownToday) && void 0 !== t ? t : 0, l.dailyCapPeriodStart = e.dailyCapPeriodStart, l.dailyCapOverridden = e.dailyCapOverridden
            }
            l.dismissibleContentSeenDuringSession = new Set
        }
        getState() {
            return l
        }
        get dailyCapOverridden() {
            return l.dailyCapOverridden
        }
        getRenderedAtTimestamp(e) {
            return l.renderedAtTimestamps.get(e)
        }
        hasUserHitDCCap(e) {
            if (null != e && (a.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e) || l.dailyCapOverridden) || null != e && l.dismissibleContentSeenDuringSession.has(e)) return !1;
            let t = new Date;
            return t.setHours(0, 0, 0, 0), null != l.dailyCapPeriodStart && l.dailyCapPeriodStart < t.getTime() && (l.numberOfDCsShownToday = 0, l.dailyCapPeriodStart = null), l.numberOfDCsShownToday >= 3
        }
    }
    u.displayName = "DismissibleContentFrameworkStore", u.persistKey = "DismissibleContentFrameworkStore", u.migrations = [e => ({
        ...e
    })];
    var c = new u(r.default, {
        LOGOUT: function() {
            l = {
                ...l,
                dismissibleContentSeenDuringSession: new Set,
                renderedAtTimestamps: new Map
            }
        },
        DCF_DAILY_CAP_OVERRIDE: function(e) {
            let {
                value: t
            } = e;
            l.dailyCapOverridden = t
        },
        DCF_HANDLE_DC_SHOWN: function(e) {
            let {
                dismissibleContent: t
            } = e, n = new Date;
            if (l.renderedAtTimestamps.set(t, n.getTime()), !a.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(t) && !l.dailyCapOverridden) {
                if (!l.dismissibleContentSeenDuringSession.has(t)) {
                    if (l.dismissibleContentSeenDuringSession.add(t), null == l.dailyCapPeriodStart) {
                        let e = new Date;
                        e.setHours(0, 0, 0, 0), l.dailyCapPeriodStart = e.getTime()
                    }
                    l.numberOfDCsShownToday += 1, l.numberOfDCsShownToday > 3 && s.default.track(o.AnalyticEvents.DCF_CAP_EXCEEDED, {
                        cap_type: "daily_cap",
                        dismissible_content: t,
                        shown_dcs: l.numberOfDCsShownToday
                    })
                }
            }
        },
        DCF_HANDLE_DC_DISMISSED: function(e) {
            let {
                dismissibleContent: t
            } = e;
            l.renderedAtTimestamps.delete(t)
        },
        DCF_RESET: function() {
            l.dailyCapPeriodStart = null, l.numberOfDCsShownToday = 0, l.dismissibleContentSeenDuringSession = new Set
        }
    })
}