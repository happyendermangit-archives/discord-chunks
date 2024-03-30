function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        checkDefaultChannelThresholdMetAfterChannelPermissionDeny: function() {
            return T
        },
        isDefaultChannelThresholdMetAfterDelete: function() {
            return E
        }
    }), n("47120");
    var i = n("149765"),
        r = n("668781"),
        s = n("434404"),
        a = n("430824"),
        o = n("745752"),
        l = n("45966"),
        u = n("637853"),
        d = n("290511"),
        _ = n("981631"),
        c = n("689938");
    async function E(e, t) {
        return null == e || await I(e, t, {
            removingView: !0,
            removingChat: !0
        })
    }
    async function I(e, t, n) {
        var i;
        let r = a.default.getGuild(e);
        if (null == r) return !0;
        let s = null != r && (null === (i = r.features) || void 0 === i ? void 0 : i.has(_.GuildFeatures.GUILD_ONBOARDING));
        if (!s) return !0;
        s && l.default.shouldFetchPrompts(e) && await (0, o.fetchOnboardingPrompts)(e);
        let c = l.default.getDefaultChannelIds(e),
            [E, I] = (0, u.getChattableDefaultChannels)(e, c);
        if (!c.includes(t)) return !0;
        let T = n.removingView && I.length - 1 < d.MIN_NUMBER_OF_DEFAULT_CHANNELS_FOR_ONBOARDING,
            f = (n.removingChat || n.removingView) && E.length - 1 < d.NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
        return !T && !f
    }
    async function T(e, t, n) {
        let a = e.getGuildId();
        if (null == a) return !0;
        null != n && (t = i.filter(t, i.invert(n)));
        let o = e.permissionOverwrites[a],
            l = null != o ? i.filter(o.deny, i.invert(o.allow)) : i.deserialize(0),
            u = {
                removingView: i.has(t, _.Permissions.VIEW_CHANNEL) && !i.has(l, _.Permissions.VIEW_CHANNEL),
                removingChat: !1
            };
        return e.isForumLikeChannel() ? u.removingChat = i.has(t, _.Permissions.SEND_MESSAGES_IN_THREADS) && !i.has(l, _.Permissions.SEND_MESSAGES_IN_THREADS) : u.removingChat = i.has(t, _.Permissions.SEND_MESSAGES) && !i.has(l, _.Permissions.SEND_MESSAGES), !u.removingChat && !u.removingView || !!await I(a, e.id, u) || (r.default.show({
            title: c.default.Messages.CANNOT_CHANGE_CHANNEL_PERMS,
            body: c.default.Messages.ONBOARDING_CHANNEL_THRESHOLD_WARNING.format({
                onClick: () => {
                    r.default.close(), s.default.open(a, _.GuildSettingsSections.ONBOARDING)
                }
            })
        }), !1)
    }
}