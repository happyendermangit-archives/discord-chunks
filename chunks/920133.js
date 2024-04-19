function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DmUpsellActionTypes: function() {
            return r
        },
        trackEvent: function() {
            return o
        }
    });
    var i, r, s = n("626135"),
        a = n("981631");

    function o(e, t) {
        s.default.track(a.AnalyticEvents.DM_SETTINGS_UPSELL_ACTION, {
            action: e,
            guild_id: t
        })
    }(i = r || (r = {})).MODAL_VIEWED = "modal_viewed", i.MODAL_DISMISSED = "modal_dismissed", i.MODAL_GUILD_SETTINGS_CLICKED = "modal_guild_settings_clicked", i.SUPPRESSED_BY_COOLDOWN = "suppressed_by_cooldown", i.MODAL_DISABLED_DMS = "modal_disabled_dms"
}