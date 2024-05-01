function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        acknowledgeDmSettingsUpsell: function() {
            return u
        }
    }), n("47120");
    var i = n("544891"),
        r = n("147913"),
        s = n("25733"),
        a = n("704587"),
        o = n("981631");
    class l extends r.default {
        intialize() {
            a.DmSettingsUpsellExperiment.getCurrentConfig({
                location: "initializer"
            }, {
                autoTrackExposure: !1
            })
        }
        handleDmSettingsUpsellShow(e) {
            s.default.openDmSettingsUpsellModal(e.guildId)
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

    function u(e) {
        return i.HTTP.post({
            url: o.Endpoints.DM_SETTINGS_UPSELL_ACK(e)
        })
    }
    t.default = new l
}