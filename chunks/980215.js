function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useClydeProfilesEnabled: function() {
            return u
        },
        useClydeEnabled: function() {
            return d
        },
        getClydeEnabled: function() {
            return f
        },
        getClydeExperimentEnabled: function() {
            return _
        },
        canUseCustomClydeProfiles: function() {
            return h
        }
    }), n("884691"), n("446674");
    var i = n("305961"),
        s = n("957255"),
        r = n("772051"),
        a = n("49111"),
        o = n("724210");

    function l(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1e9ccc_1",
            s = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : a.EMPTY_STRING_SNOWFLAKE_ID,
            o = r.default.useExperiment({
                guildId: s,
                location: i
            }, {
                autoTrackExposure: n
            }).experimentState;
        return o
    }

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = l(e, t, n);
        return i === r.ClydeExperimentState.ClydeProfiles
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = l(e, n);
        return c(i, e, t)
    }

    function c(e, t, n) {
        if (null == t) {
            if (null != n && n.isPrivate()) {
                if (n.hasFlag(o.ChannelFlags.CLYDE_AI)) return !0;
                let e = i.default.getGuildIds().some(e => _(i.default.getGuild(e)));
                return e
            }
            return !1
        }
        return null != e && e !== r.ClydeExperimentState.None && s.default.can(a.Permissions.USE_CLYDE_AI, n)
    }

    function f(e, t) {
        var n;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : a.EMPTY_STRING_SNOWFLAKE_ID,
            o = r.default.getCurrentConfig({
                guildId: s,
                location: "1e9ccc_2"
            }, {
                autoTrackExposure: i
            }).experimentState;
        return c(o, e, t)
    }

    function _(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = E(e, t);
        return n !== r.ClydeExperimentState.None
    }

    function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return E(e, t) === r.ClydeExperimentState.ClydeProfiles
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (null == e) return !1;
        let n = e.id;
        return r.default.getCurrentConfig({
            guildId: n,
            location: "1e9ccc_4"
        }, {
            autoTrackExposure: t
        }).experimentState
    }
}