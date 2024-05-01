function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("209185"),
        d = n("581883"),
        _ = n("689938");
    let c = _.default.getDefaultLocale();

    function E() {
        var e, t;
        let n = null === (t = d.default.settings.localization) || void 0 === t ? void 0 : null === (e = t.locale) || void 0 === e ? void 0 : e.value;
        return null != n && "" !== n && n !== c && (c = n, u.setLocale(c), !0)
    }
    class I extends(s = o.default.Store) {
        initialize() {
            this.waitFor(d.default), E(), u.setLocale(c)
        }
        get locale() {
            return c
        }
    }
    a = "LocaleStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new I(l.default, {
        OVERLAY_INITIALIZE: E,
        CACHE_LOADED: E,
        CONNECTION_OPEN: E,
        USER_SETTINGS_PROTO_UPDATE: E,
        USER_SETTINGS_LOCALE_OVERRIDE: function(e) {
            c = e.locale, u.setLocale(c)
        }
    })
}