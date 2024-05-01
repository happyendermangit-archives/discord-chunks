function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("381499"),
        r = n("601992"),
        a = n("675478"),
        s = n("885110"),
        o = n("626135"),
        l = n("981631");
    async function u(e, t, n, u) {
        null == t && (t = s.default.getStatus()), await a.PreloadedUserSettingsActionCreators.updateAsync("status", t => {
            t.status = i.StringValue.create({
                value: e
            }), t.statusExpiresAtMs = null != u ? "".concat(Date.now() + u) : "0"
        }, a.UserSettingsDelay.INFREQUENT_USER_ACTION);
        let d = {
            next_status: e,
            prev_status: t,
            ...r.default.getGlobalStats()
        };
        null != n && (d = {
            ...d,
            ...n,
            expire_duration_minutes: null != u ? u / 1e3 : null
        }), o.default.track(l.AnalyticEvents.USER_STATUS_UPDATED, d)
    }
}