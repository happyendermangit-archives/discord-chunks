function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteDestinationIcon: function() {
            return x
        },
        InviteHeader: function() {
            return D
        },
        InviteJoinContext: function() {
            return M
        },
        InviteMemberCounts: function() {
            return L
        },
        LARGE_SERVER_MEMBER_THRESHOLD: function() {
            return N
        },
        isDirectInvite: function() {
            return S
        },
        isEnhancedCommunityInvite: function() {
            return O
        },
        isGroupInvite: function() {
            return A
        }
    }), n("411104");
    var s = n("735250"),
        a = n("470079"),
        l = n("120356"),
        i = n.n(l),
        r = n("481060"),
        u = n("366695"),
        o = n("940627"),
        d = n("819570"),
        c = n("154921"),
        f = n("768581"),
        E = n("51144"),
        _ = n("245335"),
        I = n("981631"),
        p = n("888592"),
        h = n("689938"),
        T = n("902014");
    let N = 100,
        g = e => {
            var t, n;
            let s = {
                onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
                memberCount: null !== (n = e.approximate_member_count) && void 0 !== n ? n : 0
            };
            return 0 === s.memberCount && 0 === s.memberCount ? null : s
        },
        m = e => e.target_type === _.InviteTargetTypes.STREAM && null != e.target_user,
        A = e => {
            var t;
            return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === I.ChannelTypes.GROUP_DM
        },
        S = e => null == e.channel && null == e.guild && null != e.inviter,
        v = e => {
            var t;
            let n = g(e);
            return (null !== (t = null == n ? void 0 : n.memberCount) && void 0 !== t ? t : 0) > N
        },
        C = e => e.state === I.InviteStates.ACCEPTED,
        O = e => {
            let {
                guild_scheduled_event: t
            } = e;
            return null != t || !1
        },
        R = e => !O(e) && (!!S(e) || null != e.inviter && !C(e) && !v(e)),
        x = e => {
            let {
                guild: t,
                user: n,
                application: a
            } = e;
            if (null != a) return (0, s.jsx)(u.default, {
                className: T.appIcon,
                game: a,
                size: T.appIconSize
            });
            if (null != n) return (0, s.jsx)(d.Avatar, {
                src: n.getAvatarURL(void 0, 100),
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: T.avatar
            });
            if (null != t) return (0, s.jsx)(d.GuildIcon, {
                guild: t,
                size: d.GuildIcon.Sizes.LARGER,
                className: T.guildIcon,
                animate: !0
            });
            else return null
        };

    function L(e) {
        var t;
        let {
            invite: n,
            textClassName: a,
            className: l
        } = e, r = g(n);
        return null == r || R(n) || (null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) === p.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(d.ActivityCount, {
            className: i()(T.activityCount, l),
            online: r.onlineCount,
            total: r.memberCount,
            textClassName: a,
            flat: !0
        })
    }

    function M(e) {
        let {
            invite: t,
            showBigUserIcon: n
        } = e, l = a.useMemo(() => n ? null : m(t) && null != t.target_user ? f.default.getUserAvatarURL(t.target_user) : R(t) && null != t.inviter ? f.default.getUserAvatarURL(t.inviter) : null, [t, n]), i = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
        if (A(t)) {
            var u, o;
            i = (null === (u = t.channel) || void 0 === u ? void 0 : u.name) != null && (null === (o = t.inviter) || void 0 === o ? void 0 : o.username) != null ? h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
                username: t.inviter.username
            }) : h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
        } else m(t) && null != t.target_user ? i = h.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: t.target_user.username
        }) : C(t) ? i = h.default.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : R(t) && null != t.inviter && (i = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
            username: E.default.getFormattedName(t.inviter)
        }));
        return (0, s.jsxs)("div", {
            className: T.inviteJoinContainer,
            children: [null != l && (0, s.jsx)("div", {
                className: T.inviterIconWrapper,
                children: (0, s.jsx)(d.Avatar, {
                    src: l,
                    size: r.AvatarSizes.SIZE_24
                })
            }), (0, s.jsx)(d.SubTitle, {
                className: T.__invalid_inviteJoinSubTitle,
                children: i
            })]
        })
    }

    function D(e) {
        let t, n, a, {
            user: l,
            guild: i,
            channel: u,
            application: f,
            showBigUserIcon: _
        } = e;
        if (null != i) _ && null == f && (t = (0, s.jsx)(d.GuildIcon, {
            guild: i,
            size: d.GuildIcon.Sizes.SMALL
        })), n = i.name, null != f && (n = f.name, a = (0, s.jsxs)("div", {
            className: T.inviteJoinContainer,
            children: [(0, s.jsx)(d.SubTitle, {
                className: T.appIn,
                children: h.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, s.jsxs)("div", {
                className: T.guildContainer,
                children: [(0, s.jsx)(d.GuildIcon, {
                    guild: i,
                    size: d.GuildIcon.Sizes.SMALL
                }), (0, s.jsx)(c.default, {
                    className: T.appGuildName,
                    color: c.default.Colors.CUSTOM,
                    tag: "span",
                    size: c.default.Sizes.SIZE_24,
                    children: i.name
                })]
            })]
        }));
        else if (null != u) {
            if (null == l) throw Error("no inviter in group DM invite");
            let e = E.default.getFormattedName(l);
            null != u.name && "" !== u.name ? (n = u.name, null != u.icon && (t = (0, s.jsx)(d.ChannelIcon, {
                channel: u,
                size: r.AvatarSizes.SIZE_32
            }))) : n = e
        } else if (null != l) {
            let e = E.default.getFormattedName(l);
            n = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), a = (0, s.jsx)(d.SubTitle, {
                className: T.directInviteSubTitle,
                children: h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsxs)(d.Title, {
                className: T.title,
                children: [null != i ? (0, s.jsx)(o.default, {
                    guild: i,
                    className: T.guildBadge,
                    tooltipPosition: "left"
                }) : null, t, n]
            }), a]
        })
    }
}