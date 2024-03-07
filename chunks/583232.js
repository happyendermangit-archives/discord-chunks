function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return I
        }
    });
    var t = E("750028"),
        o = E("637929"),
        n = E("872173"),
        r = E("101125"),
        a = E("599110"),
        i = E("49111");
    async function I(e, _, E, I) {
        null == _ && (_ = r.default.getStatus()), await n.PreloadedUserSettingsActionCreators.updateAsync("status", _ => {
            _.status = t.StringValue.create({
                value: e
            }), _.statusExpiresAtMs = null != I ? "".concat(Date.now() + I) : "0"
        }, n.UserSettingsDelay.INFREQUENT_USER_ACTION);
        let s = {
            next_status: e,
            prev_status: _,
            ...o.default.getGlobalStats()
        };
        null != E && (s = {
            ...s,
            ...E,
            expire_duration_minutes: null != I ? I / 1e3 : null
        }), a.default.track(i.AnalyticEvents.USER_STATUS_UPDATED, s)
    }
}