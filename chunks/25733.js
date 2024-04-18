function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("433517"),
        s = n("481060"),
        a = n("704587"),
        o = n("338096");
    t.default = {
        openDmSettingsUpsellModal(e) {
            if (!(0, a.isEligibleForDmSettingsUpsell)({
                    location: "DmSettingsUpsellManager"
                })) return;
            let t = r.Storage.get(o.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY),
                l = Date.now();
            (null == t || l - t > o.DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS) && (r.Storage.set(o.DM_SETTINGS_UPSELL_LAST_SHOWN_KEY, l), (0, s.openModalLazy)(async () => {
                let {
                    default: t
                } = await Promise.all([n.e("99387"), n.e("35489")]).then(n.bind(n, "582712"));
                return n => (0, i.jsx)(t, {
                    ...n,
                    guildId: e
                })
            }))
        }
    }
}