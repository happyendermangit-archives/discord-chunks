function(e, t, n) {
    "use strict";
    let l;
    n.r(t);
    var a, u = n("442837"),
        r = n("570140"),
        i = n("133080");

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let o = (0, i.getDefaultCountryCode)();

    function _(e) {
        var t;
        let {
            countryCode: n
        } = e;
        null != n && (o = null !== (t = (0, i.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, i.getDefaultCountryCode)())
    }
    class c extends(a = u.default.DeviceSettingsStore) {
        initialize(e) {
            null != e && (l = e.selectedCountryCode)
        }
        getUserAgnosticState() {
            return {
                selectedCountryCode: l
            }
        }
        getCountryCode() {
            return null != l ? l : o
        }
    }
    s(c, "displayName", "PhoneStore"), s(c, "persistKey", "PhoneStore"), t.default = new c(r.default, {
        PHONE_SET_COUNTRY_CODE: function(e) {
            let {
                countryCode: t
            } = e;
            l = t
        },
        CONNECTION_OPEN: _,
        SET_LOCATION_METADATA: _
    })
}