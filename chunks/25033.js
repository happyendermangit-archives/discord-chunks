function(e, t, n) {
    "use strict";
    let s;
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var a = n("446674"),
        l = n("913144"),
        r = n("988415");
    let i = (0, r.getDefaultCountryCode)();

    function o(e) {
        var t;
        let {
            countryCode: n
        } = e;
        null != n && (i = null !== (t = (0, r.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
    }
    class u extends a.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (s = e.selectedCountryCode)
        }
        getUserAgnosticState() {
            return {
                selectedCountryCode: s
            }
        }
        getCountryCode() {
            return null != s ? s : i
        }
    }
    u.displayName = "PhoneStore", u.persistKey = "PhoneStore";
    var d = new u(l.default, {
        PHONE_SET_COUNTRY_CODE: function(e) {
            let {
                countryCode: t
            } = e;
            s = t
        },
        CONNECTION_OPEN: o,
        SET_LOCATION_METADATA: o
    })
}