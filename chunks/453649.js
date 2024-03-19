function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetVoiceChannelInfoForVoiceActivitySection: function() {
            return C
        },
        default: function() {
            return _
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("446674"),
        a = n("77078"),
        s = n("242740"),
        r = n("42203"),
        o = n("305961"),
        u = n("957255"),
        d = n("945956"),
        c = n("800762"),
        f = n("476263"),
        p = n("368121"),
        m = n("756507"),
        h = n("4462"),
        x = n("777003"),
        E = n("49111"),
        y = n("782340"),
        g = n("862939"),
        S = n("463147");

    function C(e, t) {
        let n = (0, l.useStateFromStores)([c.default], () => {
                var n;
                return null !== (n = c.default.getVoiceState(t, e)) && void 0 !== n ? n : c.default.getVoiceStateForUser(e)
            }, [t, e]),
            i = (0, l.useStateFromStores)([r.default], () => null != n && null != n.channelId ? r.default.getChannel(n.channelId) : null, [n]),
            a = (0, l.useStateFromStores)([o.default], () => null != i ? o.default.getGuild(i.guild_id) : null, [i]),
            s = (0, l.useStateFromStores)([u.default], () => null != i && u.default.can(E.Permissions.VIEW_CHANNEL, i), [i]),
            d = (0, l.useStateFromStores)([u.default], () => null != i && u.default.can(E.Permissions.CONNECT, i), [i]);
        return s && d && null != i && null != a ? {
            voiceGuild: a,
            voiceChannel: i
        } : null
    }

    function _(e) {
        let {
            voiceGuild: t,
            voiceChannel: n,
            color: r
        } = e, {
            trackUserProfileAction: o,
            ...u
        } = (0, m.useUserProfileAnalyticsContext)(), c = (0, l.useStateFromStores)([d.default], () => d.default.getChannelId() === n.id), E = c ? y.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : n.isGuildStageVoice() ? y.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : y.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
        return (0, i.jsxs)(x.default, {
            children: [(0, i.jsx)(a.Heading, {
                variant: "eyebrow",
                className: g.title,
                children: y.default.Messages.PROFILE_IN_VOICE_CALL
            }), (0, i.jsxs)("div", {
                className: S.voiceDisplayContainer,
                children: [(0, i.jsxs)("div", {
                    className: S.iconContainer,
                    children: [(0, i.jsx)(f.default, {
                        size: f.default.Sizes.SMALL,
                        active: !0,
                        guild: t
                    }), (0, i.jsx)("div", {
                        className: S.speakerIconContainer,
                        children: (0, i.jsx)(p.default, {
                            className: S.speakerIcon
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: S.voiceChannelInfo,
                    children: [(0, i.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        children: n.name
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: null == t ? void 0 : t.name
                    })]
                })]
            }), (0, i.jsx)(a.Button, {
                onClick: () => {
                    o({
                        action: "JOIN_ACTIVITY"
                    }), (0, h.trackUserProfileActivityJoined)({
                        activityType: "VOICE",
                        voiceChannelId: n.id,
                        ...u
                    }), s.default.handleVoiceConnect({
                        channel: n,
                        needSubscriptionToAccess: !1,
                        connected: c
                    })
                },
                color: null != r ? r : a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                children: E
            })]
        })
    }
}