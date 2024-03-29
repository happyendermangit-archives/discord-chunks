function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        },
        useGetVoiceChannelInfoForVoiceActivitySection: function() {
            return O
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("906732"),
        o = n("557135"),
        l = n("592125"),
        u = n("430824"),
        d = n("496675"),
        _ = n("19780"),
        c = n("979651"),
        E = n("346656"),
        I = n("632184"),
        T = n("785717"),
        f = n("221292"),
        S = n("659101"),
        h = n("981631"),
        A = n("689938"),
        m = n("989171"),
        N = n("858903");

    function O(e, t) {
        let n = (0, r.useStateFromStores)([c.default], () => {
                var n;
                return null !== (n = c.default.getVoiceState(t, e)) && void 0 !== n ? n : c.default.getVoiceStateForUser(e)
            }, [t, e]),
            i = (0, r.useStateFromStores)([l.default], () => null != n && null != n.channelId ? l.default.getChannel(n.channelId) : null, [n]),
            s = (0, r.useStateFromStores)([u.default], () => null != i ? u.default.getGuild(i.guild_id) : null, [i]),
            a = (0, r.useStateFromStores)([d.default], () => null != i && d.default.can(h.Permissions.VIEW_CHANNEL, i), [i]),
            o = (0, r.useStateFromStores)([d.default], () => null != i && d.default.can(h.Permissions.CONNECT, i), [i]);
        return a && o && null != i && null != s ? {
            voiceGuild: s,
            voiceChannel: i
        } : null
    }

    function p(e) {
        let {
            voiceGuild: t,
            voiceChannel: n,
            color: l
        } = e, {
            analyticsLocations: u
        } = (0, a.default)(), {
            trackUserProfileAction: d,
            ...c
        } = (0, T.useUserProfileAnalyticsContext)(), h = (0, r.useStateFromStores)([_.default], () => _.default.getChannelId() === n.id), O = h ? A.default.Messages.PROFILE_OPEN_VOICE_CHANNEL : n.isGuildStageVoice() ? A.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : A.default.Messages.PROFILE_JOIN_VOICE_CHANNEL;
        return (0, i.jsxs)(S.default, {
            children: [(0, i.jsx)(s.Heading, {
                variant: "eyebrow",
                className: m.title,
                children: A.default.Messages.PROFILE_IN_VOICE_CALL
            }), (0, i.jsxs)("div", {
                className: N.voiceDisplayContainer,
                children: [(0, i.jsxs)("div", {
                    className: N.iconContainer,
                    children: [(0, i.jsx)(E.default, {
                        size: E.default.Sizes.SMALL,
                        active: !0,
                        guild: t
                    }), (0, i.jsx)("div", {
                        className: N.speakerIconContainer,
                        children: (0, i.jsx)(I.default, {
                            className: N.speakerIcon
                        })
                    })]
                }), (0, i.jsxs)("div", {
                    className: N.voiceChannelInfo,
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
                    d({
                        action: "JOIN_ACTIVITY"
                    }), (0, f.trackUserProfileActivityJoined)({
                        activityType: "VOICE",
                        voiceChannelId: n.id,
                        analyticsLocations: u,
                        ...c
                    }), o.default.handleVoiceConnect({
                        channel: n,
                        needSubscriptionToAccess: !1,
                        connected: h
                    })
                },
                color: null != l ? l : s.Button.Colors.PRIMARY,
                size: s.Button.Sizes.SMALL,
                fullWidth: !0,
                children: O
            })]
        })
    }
}