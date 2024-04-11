function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canSeeOnboardingHome: function() {
            return A
        },
        useCanSeeOnboardingHome: function() {
            return S
        }
    }), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("399606"),
        a = n("637853"),
        o = n("160404"),
        l = n("592125"),
        u = n("430824"),
        d = n("563534"),
        _ = n("621923"),
        c = n("199689"),
        E = n("460347"),
        I = n("981631"),
        T = n("176505");

    function f(e) {
        var t;
        let n = e.id,
            {
                homeSettingsEnabled: i
            } = _.default.getCurrentConfig({
                guildId: n,
                location: "61eef9_1"
            }, {
                autoTrackExposure: !1
            }),
            r = (null !== (t = d.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
            s = d.default.getEnabled(n);
        return i && r && e.hasFeature(I.GuildFeatures.COMMUNITY) && !(e.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && !s)
    }

    function S(e) {
        let {
            homeSettingsEnabled: t
        } = _.default.useExperiment({
            guildId: e,
            location: "61eef9_2"
        }, {
            autoTrackExposure: !1
        }), n = (0, E.default)(e), i = l.default.getMutableGuildChannelsForGuild(e);
        return (0, s.useStateFromStores)([u.default, o.default], () => {
            let s = u.default.getGuild(e);
            if (__OVERLAY__ || e === I.ME || e === I.FAVORITES || null == s) return !1;
            if (o.default.isFullServerPreview(e)) return f(s);
            let l = (0, c.default)(s),
                d = t && (0, a.isGuildOnboardingSettingsAvailable)(e) && s.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && s.hasFeature(I.GuildFeatures.GUILD_SERVER_GUIDE),
                _ = r().some(r().values(i), e => e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
            return !(!n && !_) && (l && s.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && s.hasFeature(I.GuildFeatures.GUILD_SERVER_GUIDE) || d) && s.hasFeature(I.GuildFeatures.COMMUNITY)
        }, [e, t, n, i])
    }

    function A(e) {
        let t = u.default.getGuild(e),
            {
                homeSettingsEnabled: n
            } = _.default.getCurrentConfig({
                guildId: e,
                location: "61eef9_4"
            }),
            i = o.default.isFullServerPreview(e);
        if (null == t || __OVERLAY__ || e === I.ME || e === I.FAVORITES) return !1;
        if (i) return f(t);
        let r = n && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(I.GuildFeatures.GUILD_SERVER_GUIDE);
        return (t.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(I.GuildFeatures.GUILD_SERVER_GUIDE) || r) && t.hasFeature(I.GuildFeatures.COMMUNITY)
    }
}