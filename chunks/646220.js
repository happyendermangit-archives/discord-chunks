function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canUseCustomClydeProfiles: function() {
            return E
        },
        getClydeEnabled: function() {
            return d
        },
        getClydeExperimentEnabled: function() {
            return _
        },
        useClydeEnabled: function() {
            return c
        },
        useClydeProfilesEnabled: function() {
            return l
        }
    }), n("470079"), n("898511");
    var r = n("306912"),
        o = n("29884"),
        i = n("897725"),
        a = n("281767"),
        u = n("928204");

    function s(e) {
        var t, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
            o = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : a.EMPTY_STRING_SNOWFLAKE_ID;
        return i.default.useExperiment({
            guildId: o,
            location: r
        }, {
            autoTrackExposure: n
        }).experimentState
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        return s(e, t, n) === i.ClydeExperimentState.ClydeProfiles
    }

    function c(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return f(s(e, n), e, t)
    }

    function f(e, t, n) {
        if (null == t) {
            if (null != n && n.isPrivate()) return !!n.hasFlag(u.ChannelFlags.CLYDE_AI) || r.default.getGuildIds().some(function(e) {
                return _(r.default.getGuild(e))
            });
            return !1
        }
        return null != e && e !== i.ClydeExperimentState.None && o.default.can(a.Permissions.USE_CLYDE_AI, n)
    }

    function d(e, t) {
        var n, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            o = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : a.EMPTY_STRING_SNOWFLAKE_ID;
        return f(i.default.getCurrentConfig({
            guildId: o,
            location: "1e9ccc_2"
        }, {
            autoTrackExposure: r
        }).experimentState, e, t)
    }

    function _(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return p(e, t) !== i.ClydeExperimentState.None
    }

    function E(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return p(e, t) === i.ClydeExperimentState.ClydeProfiles
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return !1;
        var n = e.id;
        return i.default.getCurrentConfig({
            guildId: n,
            location: "1e9ccc_4"
        }, {
            autoTrackExposure: t
        }).experimentState
    }
}