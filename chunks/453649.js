function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGetVoiceChannelInfoForVoiceActivitySection: function() {
            return g
        },
        default: function() {
            return S
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
        m = n("777003"),
        h = n("49111"),
        x = n("782340"),
        E = n("862939"),
        y = n("463147");

    function g(e, t) {
        let n = (0, l.useStateFromStores)([c.default], () => {
                var n;
                return null !== (n = c.default.getVoiceState(t, e)) && void 0 !== n ? n : c.default.getVoiceStateForUser(e)
            }, [t, e]),
            i = (0, l.useStateFromStores)([r.default], () => null != n && null != n.channelId ? r.default.getChannel(n.channelId) : null, [n]),
            a = (0, l.useStateFromStores)([o.default], () => null != i ? o.default.getGuild(i.guild_id) : null, [i]),
            s = (0, l.useStateFromStores)([u.default], () => null != i && u.default.can(h.Permissions.VIEW_CHANNEL, i), [i]),
            d = (0, l.useStateFromStores)([u.default], () => null != i && u.default.can(h.Permissions.CONNECT, i), [i]);
        return s && d && null != i && null != a ? {
            voiceGuild: a,
            voiceChannel: i
        } : null
    }

    function S(e) {
        let {
            voiceGuild: t,
            voiceChannel: n,
            onClose: r,
            color: o
        } = e, u = (0, l.useStateFromStores)([d.default], () => d.default.getChannelId() === n.id), c = u ? x.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : n.isGuildStageVoice() ? x.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : x.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
        return (0, i.jsxs)(m.default, {
            children: [(0, i.jsx)(a.Heading, {
                variant: "eyebrow",
                className: E.title,
                children: x.default.Messages.PROFILE_IN_VOICE_CALL
            }), (0, i.jsxs)("div", {
                className: y.voiceDisplayContainer,
                children: [(0, i.jsxs)("div", {
                    className: y.iconContainer,
                    children: [(0, i.jsx)(f.default, {
                        size: f.default.Sizes.SMALL,
                        active: !0,
                        guild: t
                    }), (0, i.jsx)("div", {
                        className: y.speakerIconContainer,
                        children: (0, i.jsx)(p.default, {
                            className: y.speakerIcon
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: y.voiceChannelInfo,
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
                onClick: function() {
                    null != n && (s.default.handleVoiceConnect({
                        channel: n,
                        connected: d.default.getChannelId() === n.id,
                        needSubscriptionToAccess: !1
                    }), null == r || r())
                },
                color: null != o ? o : a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.SMALL,
                fullWidth: !0,
                children: c
            })]
        })
    }
}