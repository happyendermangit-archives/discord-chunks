function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCanSeeOnboardingHome: function() {
            return m
        },
        canSeeOnboardingHome: function() {
            return T
        }
    }), n("222007");
    var i = n("917351"),
        r = n.n(i),
        s = n("65597"),
        a = n("380710"),
        o = n("38654"),
        l = n("42203"),
        u = n("26989"),
        c = n("305961"),
        d = n("698882"),
        f = n("233706"),
        E = n("6263"),
        p = n("363176"),
        h = n("49111"),
        _ = n("724210");

    function S(e) {
        var t;
        let n = e.id,
            {
                homeSettingsEnabled: i
            } = f.default.getCurrentConfig({
                guildId: n,
                location: "61eef9_1"
            }, {
                autoTrackExposure: !1
            }),
            r = (null !== (t = d.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
            s = d.default.getEnabled(n);
        return i && r && e.hasFeature(h.GuildFeatures.COMMUNITY) && !(e.hasFeature(h.GuildFeatures.GUILD_ONBOARDING) && !s)
    }

    function m(e) {
        let t = (0, s.default)([c.default], () => c.default.getGuild(e)),
            n = (0, s.default)([u.default], () => u.default.getSelfMember(e)),
            {
                showOnboardingHome: i
            } = (0, E.useOnboardingHomeExperiment)(t, n),
            {
                homeSettingsEnabled: d
            } = f.default.useExperiment({
                guildId: e,
                location: "61eef9_2"
            }, {
                autoTrackExposure: !1
            }),
            m = (0, s.default)([o.default], () => o.default.isFullServerPreview(e)),
            T = (0, p.default)(e),
            g = (0, s.default)([l.default], () => l.default.getMutableGuildChannelsForGuild(e));
        if (null == t || __OVERLAY__ || e === h.ME || e === h.FAVORITES) return !1;
        if (m) return S(t);
        let I = d && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(h.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(h.GuildFeatures.GUILD_SERVER_GUIDE),
            C = r.some(r.values(g), e => e.hasFlag(_.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
        return !(!T && !C) && (i && t.hasFeature(h.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(h.GuildFeatures.GUILD_SERVER_GUIDE) || I) && t.hasFeature(h.GuildFeatures.COMMUNITY)
    }

    function T(e) {
        let t = c.default.getGuild(e),
            {
                showOnboardingHome: n
            } = E.default.getCurrentConfig({
                location: "61eef9_3"
            }, {
                autoTrackExposure: !1
            }),
            {
                homeSettingsEnabled: i
            } = f.default.getCurrentConfig({
                guildId: e,
                location: "61eef9_4"
            }),
            r = o.default.isFullServerPreview(e);
        if (null == t || __OVERLAY__ || e === h.ME || e === h.FAVORITES) return !1;
        if (r) return S(t);
        let s = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(h.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(h.GuildFeatures.GUILD_SERVER_GUIDE);
        return (n && t.hasFeature(h.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(h.GuildFeatures.GUILD_SERVER_GUIDE) || s) && t.hasFeature(h.GuildFeatures.COMMUNITY)
    }
}