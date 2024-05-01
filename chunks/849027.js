function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("430198"),
        r = n("897345"),
        a = n("859802"),
        s = n("697379"),
        o = n("241559"),
        l = n("819553"),
        u = n("931261"),
        d = n("994592"),
        _ = n("911560"),
        c = n("592125"),
        E = n("430824"),
        I = n("823379"),
        T = n("754688"),
        f = n("981631"),
        S = n("176505");
    async function h(e) {
        let {
            guildId: t,
            channelId: n
        } = e, h = E.default.getGuild(t), A = E.default.getRoles(t);
        if (null == h && t !== f.ME) return !1;
        if (null == n) return !0;
        if ((0, S.isStaticChannelRoute)(n)) switch (n) {
            case S.StaticChannelRoute.ROLE_SUBSCRIPTIONS:
                return (0, d.areRoleSubscriptionsVisibleInGuild)(t, A);
            case S.StaticChannelRoute.GUILD_SHOP:
                return (0, r.isGuildShopVisibleInGuild)(h, A);
            case S.StaticChannelRoute.MEMBER_APPLICATIONS:
                return (0, s.canReviewGuildMemberApplications)(t);
            case S.StaticChannelRoute.GUILD_HOME:
                return (0, a.canSeeGuildHome)(t) || (0, u.canSeeOnboardingHome)(t);
            case S.StaticChannelRoute.CHANNEL_BROWSER:
                return null != h && h.hasFeature(f.GuildFeatures.COMMUNITY);
            case S.StaticChannelRoute.GUILD_ONBOARDING:
                return l.default.shouldShowOnboarding(t);
            case S.StaticChannelRoute.CUSTOMIZE_COMMUNITY:
                return null != h && h.hasFeature(f.GuildFeatures.COMMUNITY);
            case S.StaticChannelRoute.MEMBER_SAFETY:
                return (0, o.canAccessMemberSafetyPage)(t);
            default:
                (0, I.assertNever)(n)
        }
        let m = c.default.getChannel(n);
        return (null != m || (await _.default.loadThread(n), null != (m = c.default.getChannel(n)))) && ((0, T.canViewChannel)(m) || i.default.isChannelGatedAndVisible(t, n))
    }
}