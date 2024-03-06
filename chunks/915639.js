function(I, N, A) {
    "use strict";
    A.r(N), A.d(N, {
        default: function() {
            return n
        }
    });
    var O = A("446674"),
        T = A("913144"),
        _ = A("318696"),
        e = A("374363");
    let E = A("782340").default.getDefaultLocale();

    function V() {
        var I, N;
        let A = null === (N = e.default.settings.localization) || void 0 === N ? void 0 : null === (I = N.locale) || void 0 === I ? void 0 : I.value;
        return null != A && "" !== A && A !== E && (E = A, _.setLocale(E), !0)
    }
    class t extends O.default.Store {
        initialize() {
            this.waitFor(e.default), V(), _.setLocale(E)
        }
        get locale() {
            return E
        }
    }
    t.displayName = "LocaleStore";
    var n = new t(T.default, {
        OVERLAY_INITIALIZE: V,
        CACHE_LOADED: V,
        CONNECTION_OPEN: V,
        USER_SETTINGS_PROTO_UPDATE: V,
        USER_SETTINGS_LOCALE_OVERRIDE: function(I) {
            E = I.locale, _.setLocale(E)
        }
    })
}