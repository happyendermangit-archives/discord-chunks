function(e, t, n) {
    "use strict";
    let s;
    n.r(t);
    var a, i = n("442837"),
        r = n("570140"),
        l = n("133080");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = (0, l.getDefaultCountryCode)();

    function d(e) {
        var t;
        let {
            countryCode: n
        } = e;
        null != n && (u = null !== (t = (0, l.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, l.getDefaultCountryCode)())
    }
    class c extends(a = i.default.DeviceSettingsStore) {
        initialize(e) {
            null != e && (s = e.selectedCountryCode)
        }
        getUserAgnosticState() {
            return {
                selectedCountryCode: s
            }
        }
        getCountryCode() {
            return null != s ? s : u
        }
    }
    o(c, "displayName", "PhoneStore"), o(c, "persistKey", "PhoneStore"), t.default = new c(r.default, {
        PHONE_SET_COUNTRY_CODE: function(e) {
            let {
                countryCode: t
            } = e;
            s = t
        },
        CONNECTION_OPEN: d,
        SET_LOCATION_METADATA: d
    })
}