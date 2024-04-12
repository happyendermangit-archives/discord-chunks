function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("147913"),
        r = n("25733");
    class s extends i.default {
        handleDmSettingsUpsellShow(e) {
            r.default.openDmSettingsUpsellModal(e.guildId)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new s
}