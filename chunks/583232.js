function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return o
        }
    });
    var s = t("750028"),
        d = t("637929"),
        n = t("872173"),
        c = t("101125"),
        i = t("599110"),
        r = t("49111");
    async function o(e, a, t, o) {
        null == a && (a = c.default.getStatus()), await n.PreloadedUserSettingsActionCreators.updateAsync("status", a => {
            a.status = s.StringValue.create({
                value: e
            }), a.statusExpiresAtMs = null != o ? "".concat(Date.now() + o) : "0"
        }, n.UserSettingsDelay.INFREQUENT_USER_ACTION);
        let l = {
            next_status: e,
            prev_status: a,
            ...d.default.getGlobalStats()
        };
        null != t && (l = {
            ...l,
            ...t,
            expire_duration_minutes: null != o ? o / 1e3 : null
        }), i.default.track(r.AnalyticEvents.USER_STATUS_UPDATED, l)
    }
}