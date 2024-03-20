function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LARGE_SERVER_MEMBER_THRESHOLD: function() {
            return T
        },
        isGroupInvite: function() {
            return A
        },
        isDirectInvite: function() {
            return S
        },
        isEnhancedCommunityInvite: function() {
            return O
        },
        InviteDestinationIcon: function() {
            return L
        },
        InviteMemberCounts: function() {
            return x
        },
        InviteJoinContext: function() {
            return M
        },
        InviteHeader: function() {
            return D
        }
    }), n("70102");
    var s = n("37983"),
        a = n("884691"),
        l = n("414456"),
        r = n.n(l),
        i = n("77078"),
        u = n("953109"),
        o = n("580357"),
        d = n("124969"),
        c = n("258078"),
        f = n("315102"),
        E = n("158998"),
        _ = n("91366"),
        I = n("49111"),
        h = n("238055"),
        p = n("782340"),
        m = n("573905");
    let T = 100,
        N = e => {
            var t, n;
            let s = {
                onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
                memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
            };
            return 0 === s.memberCount && 0 === s.memberCount ? null : s
        },
        g = e => e.target_type === _.InviteTargetTypes.STREAM && null != e.target_user,
        A = e => {
            var t;
            return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === I.ChannelTypes.GROUP_DM
        },
        S = e => null == e.channel && null == e.guild && null != e.inviter,
        C = e => {
            var t;
            let n = N(e);
            return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > T
        },
        v = e => e.state === I.InviteStates.ACCEPTED,
        O = e => {
            let {
                guild_scheduled_event: t
            } = e;
            return null != t || !1
        },
        R = e => !O(e) && (!!S(e) || null != e.inviter && !v(e) && !C(e)),
        L = e => {
            let {
                guild: t,
                user: n,
                application: a
            } = e;
            if (null != a) return (0, s.jsx)(u.default, {
                className: m.appIcon,
                game: a,
                size: m.appIconSize
            });
            if (null != n) return (0, s.jsx)(d.Avatar, {
                src: n.getAvatarURL(void 0, 100),
                size: i.AvatarSizes.DEPRECATED_SIZE_100,
                className: m.avatar
            });
            if (null != t) return (0, s.jsx)(d.GuildIcon, {
                guild: t,
                size: d.GuildIcon.Sizes.LARGER,
                className: m.guildIcon,
                animate: !0
            });
            else return null
        };

    function x(e) {
        var t;
        let {
            invite: n,
            textClassName: a,
            className: l
        } = e, i = N(n);
        return null == i || R(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === h.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(d.ActivityCount, {
            className: r(m.activityCount, l),
            online: i.onlineCount,
            total: i.memberCount,
            textClassName: a,
            flat: !0
        })
    }

    function M(e) {
        let {
            invite: t,
            showBigUserIcon: n
        } = e, l = a.useMemo(() => n ? null : g(t) && null != t.target_user ? f.default.getUserAvatarURL(t.target_user) : R(t) && null != t.inviter ? f.default.getUserAvatarURL(t.inviter) : null, [t, n]), r = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
        if (A(t)) {
            var u, o;
            r = (null === (u = t.channel) || void 0 === u ? void 0 : u.name) != null && (null === (o = t.inviter) || void 0 === o ? void 0 : o.username) != null ? p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
                username: t.inviter.username
            }) : p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
        } else g(t) && null != t.target_user ? r = p.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: t.target_user.username
        }) : v(t) ? r = p.default.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : R(t) && null != t.inviter && (r = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
            username: E.default.getFormattedName(t.inviter)
        }));
        return (0, s.jsxs)("div", {
            className: m.inviteJoinContainer,
            children: [null != l && (0, s.jsx)("div", {
                className: m.inviterIconWrapper,
                children: (0, s.jsx)(d.Avatar, {
                    src: l,
                    size: i.AvatarSizes.SIZE_24
                })
            }), (0, s.jsx)(d.SubTitle, {
                className: m.inviteJoinSubTitle,
                children: r
            })]
        })
    }

    function D(e) {
        let t, n, a, {
            user: l,
            guild: r,
            channel: u,
            application: f,
            showBigUserIcon: _
        } = e;
        if (null != r) _ && null == f && (t = (0, s.jsx)(d.GuildIcon, {
            guild: r,
            size: d.GuildIcon.Sizes.SMALL
        })), n = r.name, null != f && (n = f.name, a = (0, s.jsxs)("div", {
            className: m.inviteJoinContainer,
            children: [(0, s.jsx)(d.SubTitle, {
                className: m.appIn,
                children: p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, s.jsxs)("div", {
                className: m.guildContainer,
                children: [(0, s.jsx)(d.GuildIcon, {
                    guild: r,
                    size: d.GuildIcon.Sizes.SMALL
                }), (0, s.jsx)(c.default, {
                    className: m.appGuildName,
                    color: c.default.Colors.CUSTOM,
                    tag: "span",
                    size: c.default.Sizes.SIZE_24,
                    children: r.name
                })]
            })]
        }));
        else if (null != u) {
            if (null == l) throw Error("no inviter in group DM invite");
            let e = E.default.getFormattedName(l);
            null != u.name && "" !== u.name ? (n = u.name, null != u.icon && (t = (0, s.jsx)(d.ChannelIcon, {
                channel: u,
                size: i.AvatarSizes.SIZE_32
            }))) : n = e
        } else if (null != l) {
            let e = E.default.getFormattedName(l);
            n = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), a = (0, s.jsx)(d.SubTitle, {
                className: m.directInviteSubTitle,
                children: p.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)(d.Title, {
                className: m.title,
                children: [null != r ? (0, s.jsx)(o.default, {
                    guild: r,
                    className: m.guildBadge,
                    tooltipPosition: "left"
                }) : null, t, n]
            }), a]
        })
    }
}