function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getPremiumTypeFromRawValue: function() {
            return c
        },
        isStaffEnv: function() {
            return d
        },
        isStaffEnvRawData: function() {
            return _
        },
        validatePremiumType: function() {
            return l
        }
    }), n("789020");
    var i = n("512722"),
        r = n.n(i),
        a = n("630388"),
        s = n("48541"),
        o = n("981631");

    function l(e, t, n) {
        !e && void 0 !== t && r()(n === t, "Premium type should not change for non-staff users")
    }

    function u(e) {
        return "production" === s.Environments.TEST && null != e ? e : "production"
    }

    function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        return u(t) === s.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.Environments.STAGING || null != e && (e.isStaff() || e.isStaffPersonal())
    }

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        return u(t) === s.Environments.DEVELOPMENT || window.GLOBAL_ENV.RELEASE_CHANNEL === s.Environments.STAGING || null != e && (!!(null != e.flags && (0, a.hasFlag)(e.flags, o.UserFlags.STAFF)) || null != e.personal_connection_id)
    }

    function c(e) {
        return void 0 !== e ? e === o.PREMIUM_TYPE_NONE ? null : e : e
    }
}