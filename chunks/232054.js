function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("203288"),
        s = n("590260"),
        r = n("677315"),
        a = n("875229"),
        o = n("466818"),
        l = n("471706"),
        u = n("290886"),
        d = n("903724"),
        c = n("120252"),
        f = n("42203"),
        _ = n("305961"),
        h = n("449008"),
        E = n("361572"),
        g = n("49111"),
        m = n("724210");
    async function p(e) {
        let {
            guildId: t,
            channelId: n
        } = e, p = _.default.getGuild(t);
        if (null == p && t !== g.ME) return !1;
        if (null == n) return !0;
        if ((0, m.isStaticChannelRoute)(n)) switch (n) {
            case m.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                return (0, d.areRoleSubscriptionsVisibleInGuild)(t);
            case m.StaticChannelRoute.GUILD_SHOP:
                return (0, s.isGuildShopVisibleInGuild)(p);
            case m.StaticChannelRoute.MEMBER_APPLICATIONS:
                return (0, a.canReviewGuildMemberApplications)(t);
            case m.StaticChannelRoute.GUILD_HOME:
                return (0, r.canSeeGuildHome)(t) || (0, u.canSeeOnboardingHome)(t);
            case m.StaticChannelRoute.CHANNEL_BROWSER:
                return null != p && p.hasFeature(g.GuildFeatures.COMMUNITY);
            case m.StaticChannelRoute.GUILD_ONBOARDING:
                return l.default.shouldShowOnboarding(t);
            case m.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                return null != p && p.hasFeature(g.GuildFeatures.COMMUNITY);
            case m.StaticChannelRoute.MEMBER_SAFETY:
                return (0, o.canAccessMemberSafetyPage)(t);
            default:
                (0, h.assertNever)(n)
        }
        let S = f.default.getChannel(n);
        return (null != S || (await c.default.loadThread(n), null != (S = f.default.getChannel(n)))) && ((0, E.canViewChannel)(S) || i.default.isChannelGatedAndVisible(t, n))
    }
}