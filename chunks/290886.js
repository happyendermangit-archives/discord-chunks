function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanSeeOnboardingHome: function() {
            return m
        },
        canSeeOnboardingHome: function() {
            return p
        }
    }), n("222007");
    var i = n("917351"),
        s = n.n(i),
        r = n("65597"),
        a = n("380710"),
        o = n("38654"),
        l = n("42203"),
        u = n("305961"),
        d = n("698882"),
        c = n("233706"),
        _ = n("284683"),
        f = n("363176"),
        E = n("49111"),
        h = n("724210");

    function g(e) {
        var t;
        let n = e.id,
            {
                homeSettingsEnabled: i
            } = c.default.getCurrentConfig({
                guildId: n,
                location: "61eef9_1"
            }, {
                autoTrackExposure: !1
            }),
            s = (null !== (t = d.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
            r = d.default.getEnabled(n);
        return i && s && e.hasFeature(E.GuildFeatures.COMMUNITY) && !(e.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && !r)
    }

    function m(e) {
        let t = (0, r.default)([u.default], () => u.default.getGuild(e)),
            n = (0, _.default)(t),
            {
                homeSettingsEnabled: i
            } = c.default.useExperiment({
                guildId: e,
                location: "61eef9_2"
            }, {
                autoTrackExposure: !1
            }),
            d = (0, r.default)([o.default], () => o.default.isFullServerPreview(e)),
            m = (0, f.default)(e),
            p = (0, r.default)([l.default], () => l.default.getMutableGuildChannelsForGuild(e));
        if (null == t || __OVERLAY__ || e === E.ME || e === E.FAVORITES) return !1;
        if (d) return g(t);
        let S = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE),
            v = s.some(s.values(p), e => e.hasFlag(h.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
        return !(!m && !v) && (n && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE) || S) && t.hasFeature(E.GuildFeatures.COMMUNITY)
    }

    function p(e) {
        let t = u.default.getGuild(e),
            {
                homeSettingsEnabled: n
            } = c.default.getCurrentConfig({
                guildId: e,
                location: "61eef9_4"
            }),
            i = o.default.isFullServerPreview(e);
        if (null == t || __OVERLAY__ || e === E.ME || e === E.FAVORITES) return !1;
        if (i) return g(t);
        let s = n && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE);
        return (t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE) || s) && t.hasFeature(E.GuildFeatures.COMMUNITY)
    }
}