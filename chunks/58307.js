function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        },
        useGetVoiceChannelInfoForVoiceActivitySection: function() {
            return N
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("557135"),
        o = n("592125"),
        l = n("430824"),
        u = n("496675"),
        d = n("19780"),
        _ = n("979651"),
        c = n("346656"),
        E = n("632184"),
        I = n("785717"),
        T = n("221292"),
        f = n("659101"),
        S = n("981631"),
        h = n("689938"),
        A = n("989171"),
        m = n("858903");

    function N(e, t) {
        let n = (0, r.useStateFromStores)([_.default], () => {
                var n;
                return null !== (n = _.default.getVoiceState(t, e)) && void 0 !== n ? n : _.default.getVoiceStateForUser(e)
            }, [t, e]),
            i = (0, r.useStateFromStores)([o.default], () => null != n && null != n.channelId ? o.default.getChannel(n.channelId) : null, [n]),
            s = (0, r.useStateFromStores)([l.default], () => null != i ? l.default.getGuild(i.guild_id) : null, [i]),
            a = (0, r.useStateFromStores)([u.default], () => null != i && u.default.can(S.Permissions.VIEW_CHANNEL, i), [i]),
            d = (0, r.useStateFromStores)([u.default], () => null != i && u.default.can(S.Permissions.CONNECT, i), [i]);
        return a && d && null != i && null != s ? {
            voiceGuild: s,
            voiceChannel: i
        } : null
    }

    function O(e) {
        let {
            voiceGuild: t,
            voiceChannel: n,
            color: o
        } = e, {
            trackUserProfileAction: l,
            ...u
        } = (0, I.useUserProfileAnalyticsContext)(), _ = (0, r.useStateFromStores)([d.default], () => d.default.getChannelId() === n.id), S = _ ? h.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : n.isGuildStageVoice() ? h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : h.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
        return (0, i.jsxs)(f.default, {
            children: [(0, i.jsx)(s.Heading, {
                variant: "eyebrow",
                className: A.title,
                children: h.default.Messages.PROFILE_IN_VOICE_CALL
            }), (0, i.jsxs)("div", {
                className: m.voiceDisplayContainer,
                children: [(0, i.jsxs)("div", {
                    className: m.iconContainer,
                    children: [(0, i.jsx)(c.default, {
                        size: c.default.Sizes.SMALL,
                        active: !0,
                        guild: t
                    }), (0, i.jsx)("div", {
                        className: m.speakerIconContainer,
                        children: (0, i.jsx)(E.default, {
                            className: m.speakerIcon
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: m.voiceChannelInfo,
                    children: [(0, i.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        children: n.name
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: null == t ? void 0 : t.name
                    })]
                })]
            }), (0, i.jsx)(s.Button, {
                onClick: () => {
                    l({
                        action: "JOIN_ACTIVITY"
                    }), (0, T.trackUserProfileActivityJoined)({
                        activityType: "VOICE",
                        voiceChannelId: n.id,
                        ...u
                    }), a.default.handleVoiceConnect({
                        channel: n,
                        needSubscriptionToAccess: !1,
                        connected: _
                    })
                },
                color: null != o ? o : s.Button.Colors.PRIMARY,
                size: s.Button.Sizes.SMALL,
                fullWidth: !0,
                children: S
            })]
        })
    }
}