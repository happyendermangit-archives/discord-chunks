function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("517001"),
        a = n("646718");
    let o = "OverridePremiumTypeStore",
        l = {
            premiumTypeOverride: a.UNSELECTED_PREMIUM_TYPE_OVERRIDE,
            premiumTypeActual: a.UNSELECTED_PREMIUM_TYPE_OVERRIDE
        };

    function u(e) {
        let {
            user: t
        } = e;
        l.premiumTypeActual = (0, r.getPremiumTypeFromRawValue)(t.premium_type)
    }
    class d extends i.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                l = e;
                return
            }
            l.premiumTypeOverride = a.UNSELECTED_PREMIUM_TYPE_OVERRIDE
        }
        getPremiumTypeOverride() {
            return l.premiumTypeOverride
        }
        getPremiumTypeActual() {
            return l.premiumTypeActual
        }
        getState() {
            return l
        }
        get premiumType() {
            return l.premiumTypeOverride
        }
    }
    d.displayName = o, d.persistKey = o;
    var c = new d(s.default, {
        SET_PREMIUM_TYPE_OVERRIDE: function(e) {
            let {
                premiumType: t
            } = e;
            l.premiumTypeOverride = t
        },
        CURRENT_USER_UPDATE: u,
        CONNECTION_OPEN: u
    })
}