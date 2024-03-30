function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPremiumTypeFromRawValue: function() {
            return d
        },
        isStaffEnv: function() {
            return c
        },
        isStaffEnvRawData: function() {
            return f
        },
        validatePremiumType: function() {
            return s
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("947248"),
        a = n("591662"),
        u = n("281767");

    function s(e, t, n) {
        !e && void 0 !== t && o()(n === t, "Premium type should not change for non-staff users")
    }

    function l(e) {
        return "production" === a.Environments.TEST && null != e ? e : "production"
    }

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        return l(t) === a.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.Environments.STAGING || null != e && (e.isStaff() || e.isStaffPersonal())
    }

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        return l(t) === a.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === a.Environments.STAGING || null != e && (!!(null != e.flags && (0, i.hasFlag)(e.flags, u.UserFlags.STAFF)) || null != e.personal_connection_id)
    }

    function d(e) {
        return void 0 !== e ? e === u.PREMIUM_TYPE_NONE ? null : e : e
    }
}