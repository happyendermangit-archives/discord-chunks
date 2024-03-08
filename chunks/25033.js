function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var a = n("446674"),
        u = n("913144"),
        r = n("988415");
    let s = (0, r.getDefaultCountryCode)();

    function i(e) {
        var t;
        let {
            countryCode: n
        } = e;
        null != n && (s = null !== (t = (0, r.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
    }
    class o extends a.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (l = e.selectedCountryCode)
        }
        getUserAgnosticState() {
            return {
                selectedCountryCode: l
            }
        }
        getCountryCode() {
            return null != l ? l : s
        }
    }
    o.displayName = "PhoneStore", o.persistKey = "PhoneStore";
    var _ = new o(u.default, {
        PHONE_SET_COUNTRY_CODE: function(e) {
            let {
                countryCode: t
            } = e;
            l = t
        },
        CONNECTION_OPEN: i,
        SET_LOCATION_METADATA: i
    })
}