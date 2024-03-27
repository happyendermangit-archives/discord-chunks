function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canSeeOnboardingHome: function() {
            return h
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
        let t = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(e)),
            n = (0, c.default)(t),
            {
                homeSettingsEnabled: i
            } = _.default.useExperiment({
                guildId: e,
                location: "61eef9_2"
            }, {
                autoTrackExposure: !1
            }),
            d = (0, s.useStateFromStores)([o.default], () => o.default.isFullServerPreview(e)),
            S = (0, E.default)(e),
            h = (0, s.useStateFromStores)([l.default], () => l.default.getMutableGuildChannelsForGuild(e));
        if (null == t || __OVERLAY__ || e === I.ME || e === I.FAVORITES) return !1;
        if (d) return f(t);
        let A = i && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(I.GuildFeatures.GUILD_SERVER_GUIDE),
            m = r().some(r().values(h), e => e.hasFlag(T.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL));
        return !(!S && !m) && (n && t.hasFeature(I.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(I.GuildFeatures.GUILD_SERVER_GUIDE) || A) && t.hasFeature(I.GuildFeatures.COMMUNITY)
    }

    function h(e) {
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