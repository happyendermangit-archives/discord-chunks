function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useClydeProfilesEnabled: function() {
            return s
        },
        useClydeEnabled: function() {
            return c
        },
        getClydeEnabled: function() {
            return f
        },
        getClydeExperimentEnabled: function() {
            return p
        },
        canUseCustomClydeProfiles: function() {
            return h
        }
    }), n("884691"), n("446674");
    var l = n("305961"),
        r = n("957255"),
        a = n("772051"),
        i = n("49111"),
        u = n("724210");

    function o(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
            r = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : i.EMPTY_STRING_SNOWFLAKE_ID,
            u = a.default.useExperiment({
                guildId: r,
                location: l
            }, {
                autoTrackExposure: n
            }).experimentState;
        return u
    }

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            l = o(e, t, n);
        return l === a.ClydeExperimentState.ClydeProfiles
    }

    function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            l = o(e, n);
        return d(l, e, t)
    }

    function d(e, t, n) {
        if (null == t) {
            if (null != n && n.isPrivate()) {
                if (n.hasFlag(u.ChannelFlags.CLYDE_AI)) return !0;
                let e = l.default.getGuildIds().some(e => p(l.default.getGuild(e)));
                return e
            }
            return !1
        }
        return null != e && e !== a.ClydeExperimentState.None && r.default.can(i.Permissions.USE_CLYDE_AI, n)
    }

    function f(e, t) {
        var n;
        let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : i.EMPTY_STRING_SNOWFLAKE_ID,
            u = a.default.getCurrentConfig({
                guildId: r,
                location: "1e9ccc_2"
            }, {
                autoTrackExposure: l
            }).experimentState;
        return d(u, e, t)
    }

    function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = m(e, t);
        return n !== a.ClydeExperimentState.None
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return m(e, t) === a.ClydeExperimentState.ClydeProfiles
    }

    function m(e) {
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