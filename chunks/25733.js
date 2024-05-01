function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("433517"),
        a = n("481060"),
        s = n("704587"),
        o = n("920133"),
        l = n("338096");
    t.default = {
        openDmSettingsUpsellModal(e) {
            if (!(0, s.isEligibleForDmSettingsUpsell)({
                    location: "DmSettingsUpsellManager"
                })) return;
            let t = r.Storage.get(l.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY),
                u = Date.now();
            null == t || u - t > l.DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS ? (r.Storage.set(l.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY, u), (0, a.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("99387"), n.e("35489")]).then(n.bind(n, "582712"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: e
                })
            })) : (0, o.trackEvent)(o.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, e)
        }
    }
}