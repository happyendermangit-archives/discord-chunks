function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseCustomClydeProfiles: function() {
            return I
        },
        getClydeEnabled: function() {
            return c
        },
        getClydeExperimentEnabled: function() {
            return E
        },
        useClydeEnabled: function() {
            return d
        },
        useClydeProfilesEnabled: function() {
            return u
        }
    }), n("470079"), n("442837");
    var i = n("430824"),
        r = n("496675"),
        a = n("266090"),
        s = n("981631"),
        o = n("176505");

    function l(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
            r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : s.EMPTY_STRING_SNOWFLAKE_ID;
        return a.default.useExperiment({
            guildId: r,
            location: i
        }, {
            autoTrackExposure: n
        }).experimentState
    }

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        return l(e, t, n) === a.ClydeExperimentState.ClydeProfiles
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return _(l(e, n), e, t)
    }

    function _(e, t, n) {
        if (null == t) {
            if (null != n && n.isPrivate()) return !!n.hasFlag(o.ChannelFlags.CLYDE_AI) || i.default.getGuildIds().some(e => E(i.default.getGuild(e)));
            return !1
        }
        return null != e && e !== a.ClydeExperimentState.None && r.default.can(s.Permissions.USE_CLYDE_AI, n)
    }

    function c(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : s.EMPTY_STRING_SNOWFLAKE_ID;
        return _(a.default.getCurrentConfig({
            guildId: r,
            location: "1e9ccc_2"
        }, {
            autoTrackExposure: i
        }).experimentState, e, t)
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return T(e, t) !== a.ClydeExperimentState.None
    }

    function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return T(e, t) === a.ClydeExperimentState.ClydeProfiles
    }

    function T(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return !1;
        let n = e.id;
        return a.default.getCurrentConfig({
            guildId: n,
            location: "1e9ccc_4"
        }, {
            autoTrackExposure: t
        }).experimentState
    }
}