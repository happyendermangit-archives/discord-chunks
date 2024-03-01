function(t, e, l) {
    "use strict";
    let n;
    l.r(e), l.d(e, {
        default: function() {
            return u
        }
    }), l("424973");
    var a = l("446674"),
        i = l("913144");
    let s = {
        hasAcceptedStoreTerms: !1,
        hasAcceptedEulaIds: []
    };
    class o extends a.default.PersistedStore {
        initialize(t) {
            n = null != t ? t : s
        }
        getState() {
            return n
        }
        get hasAcceptedStoreTerms() {
            return n.hasAcceptedStoreTerms
        }
        hasAcceptedEULA(t) {
            return n.hasAcceptedEulaIds.includes(t)
        }
    }
    o.displayName = "ApplicationStoreUserSettingsStore", o.persistKey = "ApplicationStoreUserSettingsStore", o.migrations = [t => null == t.hasAcceptedEulaIds ? {
        ...t,
        hasAcceptedEulaIds: []
    } : t];
    var u = new o(i.default, {
        APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
            n.hasAcceptedStoreTerms = !0
        },
        APPLICATION_STORE_ACCEPT_EULA: function(t) {
            let {
                eulaId: e
            } = t;
            if (n.hasAcceptedEulaIds.includes(e)) return !1;
            n.hasAcceptedEulaIds.push(e)
        }
    })
}