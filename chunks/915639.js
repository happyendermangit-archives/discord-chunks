function(N, I, A) {
    "use strict";
    A.r(I), A.d(I, {
        default: function() {
            return t
        }
    });
    var O = A("446674"),
        T = A("913144"),
        _ = A("318696"),
        e = A("374363");
    let E = A("782340").default.getDefaultLocale();

    function V() {
        var N, I;
        let A = null === (I = e.default.settings.localization) || void 0 === I ? void 0 : null === (N = I.locale) || void 0 === N ? void 0 : N.value;
        return null != A && "" !== A && A !== E && (E = A, _.setLocale(E), !0)
    }
    class i extends O.default.Store {
        initialize() {
            this.waitFor(e.default), V(), _.setLocale(E)
        }
        get locale() {
            return E
        }
    }
    i.displayName = "LocaleStore";
    var t = new i(T.default, {
        OVERLAY_INITIALIZE: V,
        CACHE_LOADED: V,
        CONNECTION_OPEN: V,
        USER_SETTINGS_PROTO_UPDATE: V,
        USER_SETTINGS_LOCALE_OVERRIDE: function(N) {
            E = N.locale, _.setLocale(E)
        }
    })
}