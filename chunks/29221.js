function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        canSeeOnboardingHome: function() {
            return I
        },
        useCanSeeOnboardingHome: function() {
            return y
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("37295"),
        a = n("826611"),
        u = n("717744"),
        s = n("935741"),
        l = n("306912"),
        c = n("163868"),
        f = n("446052"),
        d = n("81571"),
        _ = n("302213"),
        E = n("281767"),
        p = n("928204");

    function m(e) {
        var t, n = e.id,
            r = f.default.getCurrentConfig({
                guildId: n,
                location: "61eef9_1"
            }, {
                autoTrackExposure: !1
            }).homeSettingsEnabled,
            o = (null !== (t = c.default.getNewMemberActions(n)) && void 0 !== t ? t : []).length > 0,
            i = c.default.getEnabled(n);
        return r && o && e.hasFeature(E.GuildFeatures.COMMUNITY) && !(e.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && !i)
    }

    function y(e) {
        var t = (0, i.useStateFromStores)([l.default], function() {
                return l.default.getGuild(e)
            }),
            n = (0, d.default)(t),
            r = f.default.useExperiment({
                guildId: e,
                location: "61eef9_2"
            }, {
                autoTrackExposure: !1
            }).homeSettingsEnabled,
            c = (0, i.useStateFromStores)([u.default], function() {
                return u.default.isFullServerPreview(e)
            }),
            y = (0, _.default)(e),
            I = (0, i.useStateFromStores)([s.default], function() {
                return s.default.getMutableGuildChannelsForGuild(e)
            });
        if (null == t || __OVERLAY__ || e === E.ME || e === E.FAVORITES) return !1;
        if (c) return m(t);
        var h = r && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE),
            O = o().some(o().values(I), function(e) {
                return e.hasFlag(p.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)
            });
        return !(!y && !O) && (n && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE) || h) && t.hasFeature(E.GuildFeatures.COMMUNITY)
    }

    function I(e) {
        var t = l.default.getGuild(e),
            n = f.default.getCurrentConfig({
                guildId: e,
                location: "61eef9_4"
            }).homeSettingsEnabled,
            r = u.default.isFullServerPreview(e);
        if (null == t || __OVERLAY__ || e === E.ME || e === E.FAVORITES) return !1;
        if (r) return m(t);
        var o = n && (0, a.isGuildOnboardingSettingsAvailable)(e) && t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE);
        return (t.hasFeature(E.GuildFeatures.GUILD_ONBOARDING) && t.hasFeature(E.GuildFeatures.GUILD_SERVER_GUIDE) || o) && t.hasFeature(E.GuildFeatures.COMMUNITY)
    }
}