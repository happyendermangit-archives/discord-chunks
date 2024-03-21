function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDefaultChannelThresholdMetAfterDelete: function() {
            return f
        },
        checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
            return h
        }
    }), n("222007");
    var i = n("316693"),
        s = n("404118"),
        r = n("592407"),
        a = n("305961"),
        o = n("685829"),
        l = n("863636"),
        u = n("380710"),
        d = n("653138"),
        c = n("49111"),
        _ = n("782340");
    async function f(e, t) {
        return null == e || await E(e, t, {
            removingView: !0,
            removingChat: !0
        })
    }
    async function E(e, t, n) {
        var i;
        let s = a.default.getGuild(e);
        if (null == s) return !0;
        let r = null != s && (null === (i = s.features) || void 0 === i ? void 0 : i.has(c.GuildFeatures.GUILD_ONBOARDING));
        if (!r) return !0;
        r && l.default.shouldFetchPrompts(e) && await (0, o.fetchOnboardingPrompts)(e);
        let _ = l.default.getDefaultChannelIds(e),
            [f, E] = (0, u.getChattableDefaultChannels)(e, _),
            h = _.includes(t);
        if (!h) return !0;
        let g = n.removingView && E.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
            m = (n.removingChat || n.removingView) && f.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
        return !g && !m
    }
    async function h(e, t, n) {
        let a = e.getGuildId();
        if (null == a) return !0;
        null != n && (t = i.filter(t, i.invert(n)));
        let o = e.permissionOverwrites[a],
            l = null != o ? i.filter(o.deny, i.invert(o.allow)) : i.deserialize(0),
            u = {
                removingView: i.has(t, c.Permissions.VIEW_CHANNEL) && !i.has(l, c.Permissions.VIEW_CHANNEL),
                removingChat: !1
            };
        if (e.isForumLikeChannel() ? u.removingChat = i.has(t, c.Permissions.SEND_MESSAGES_IN_THREADS) && !i.has(l, c.Permissions.SEND_MESSAGES_IN_THREADS) : u.removingChat = i.has(t, c.Permissions.SEND_MESSAGES) && !i.has(l, c.Permissions.SEND_MESSAGES), !u.removingChat && !u.removingView) return !0;
        let d = await E(a, e.id, u);
        return !!d || (s.default.show({
            title: _.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
            body: _.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                onClick: () => {
                    s.default.close(), r.default.open(a, c.GuildSettingsSections.ONBOARDING)
                }
            })
        }), !1)
    }
}