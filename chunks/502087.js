function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        a = n("570140"),
        s = n("168232"),
        o = n("474936");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = "OverridePremiumTypeStore",
        d = {
            premiumTypeOverride: o.UNSELECTED_PREMIUM_TYPE_OVERRIDE,
            premiumTypeActual: o.UNSELECTED_PREMIUM_TYPE_OVERRIDE
        };

    function _(e) {
        let {
            user: t
        } = e;
        d.premiumTypeActual = (0, s.getPremiumTypeFromRawValue)(t.premium_type)
    }
    class c extends(i = r.default.PersistedStore) {
        initialize(e) {
            if (null != e) {
                d = e;
                return
            }
            d.premiumTypeOverride = o.UNSELECTED_PREMIUM_TYPE_OVERRIDE
        }
        getPremiumTypeOverride() {
            return d.premiumTypeOverride
        }
        getPremiumTypeActual() {
            return d.premiumTypeActual
        }
        getState() {
            return d
        }
        get premiumType() {
            return d.premiumTypeOverride
        }
    }
    l(c, "displayName", u), l(c, "persistKey", u), t.default = new c(a.default, {
        SET_PREMIUM_TYPE_OVERRIDE: function(e) {
            let {
                premiumType: t
            } = e;
            d.premiumTypeOverride = t
        },
        CURRENT_USER_UPDATE: _,
        CONNECTION_OPEN: _
    })
}