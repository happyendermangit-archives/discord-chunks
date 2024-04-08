function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        InviteDestinationIcon: function() {
            return x
        },
        InviteHeader: function() {
            return P
        },
        InviteJoinContext: function() {
            return L
        },
        InviteMemberCounts: function() {
            return D
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
    }), s("411104");
    var n = s("735250"),
        a = s("470079"),
        l = s("803997"),
        i = s.n(l),
        r = s("481060"),
        u = s("366695"),
        o = s("940627"),
        d = s("819570"),
        c = s("154921"),
        f = s("768581"),
        E = s("51144"),
        I = s("245335"),
        _ = s("981631"),
        h = s("888592"),
        p = s("689938"),
        T = s("902014");
    let N = 100,
        g = e => {
            var t, s;
            let n = {
                onlineCount: null !== (t = e.approximate_presence_count) && void 0 !== t ? t : 0,
                memberCount: null !== (s = e.approximate_member_count) && void 0 !== s ? s : 0
            };
            return 0 === n.memberCount && 0 === n.memberCount ? null : n
        },
        m = e => e.target_type === I.InviteTargetTypes.STREAM && null != e.target_user,
        A = e => {
            var t;
            return (null === (t = e.channel) || void 0 === t ? void 0 : t.type) === _.ChannelTypes.GROUP_DM
        },
        S = e => null == e.channel && null == e.guild && null != e.inviter,
        v = e => {
            var t;
            let s = g(e);
            return (null !== (t = null == s ? void 0 : s.memberCount) && void 0 !== t ? t : 0) > N
        },
        C = e => e.state === _.InviteStates.ACCEPTED,
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
                user: s,
                application: a
            } = e;
            if (null != a) return (0, n.jsx)(u.default, {
                className: T.appIcon,
                game: a,
                size: T.appIconSize
            });
            if (null != s) return (0, n.jsx)(d.Avatar, {
                src: s.getAvatarURL(void 0, 100),
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: T.avatar
            });
            if (null != t) return (0, n.jsx)(d.GuildIcon, {
                guild: t,
                size: d.GuildIcon.Sizes.LARGER,
                className: T.guildIcon,
                animate: !0
            });
            else return null
        };

    function D(e) {
        var t;
        let {
            invite: s,
            textClassName: a,
            className: l
        } = e, r = g(s);
        return null == r || R(s) || (null == s ? void 0 : null === (t = s.guild) || void 0 === t ? void 0 : t.id) === h.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, n.jsx)(d.ActivityCount, {
            className: i()(T.activityCount, l),
            online: r.onlineCount,
            total: r.memberCount,
            textClassName: a,
            flat: !0
        })
    }

    function L(e) {
        let {
            invite: t,
            showBigUserIcon: s
        } = e, l = a.useMemo(() => s ? null : m(t) && null != t.target_user ? f.default.getUserAvatarURL(t.target_user) : R(t) && null != t.inviter ? f.default.getUserAvatarURL(t.inviter) : null, [t, s]), i = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN;
        if (A(t)) {
            var u, o;
            i = (null === (u = t.channel) || void 0 === u ? void 0 : u.name) != null && (null === (o = t.inviter) || void 0 === o ? void 0 : o.username) != null ? p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM_BY_USER.format({
                username: t.inviter.username
            }) : p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM
        } else m(t) && null != t.target_user ? i = p.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: t.target_user.username
        }) : C(t) ? i = p.default.Messages.INSTANT_INVITE_YOU_ARE_ALREADY_A_MEMBER_OF : R(t) && null != t.inviter && (i = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_BY_USER.format({
            username: E.default.getFormattedName(t.inviter)
        }));
        return (0, n.jsxs)("div", {
            className: T.inviteJoinContainer,
            children: [null != l && (0, n.jsx)("div", {
                className: T.inviterIconWrapper,
                children: (0, n.jsx)(d.Avatar, {
                    src: l,
                    size: r.AvatarSizes.SIZE_24
                })
            }), (0, n.jsx)(d.SubTitle, {
                className: T.__invalid_inviteJoinSubTitle,
                children: i
            })]
        })
    }

    function P(e) {
        let t, s, a, {
            user: l,
            guild: i,
            channel: u,
            application: f,
            showBigUserIcon: I
        } = e;
        if (null != i) I && null == f && (t = (0, n.jsx)(d.GuildIcon, {
            guild: i,
            size: d.GuildIcon.Sizes.SMALL
        })), s = i.name, null != f && (s = f.name, a = (0, n.jsxs)("div", {
            className: T.inviteJoinContainer,
            children: [(0, n.jsx)(d.SubTitle, {
                className: T.appIn,
                children: p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, n.jsxs)("div", {
                className: T.guildContainer,
                children: [(0, n.jsx)(d.GuildIcon, {
                    guild: i,
                    size: d.GuildIcon.Sizes.SMALL
                }), (0, n.jsx)(c.default, {
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
            null != u.name && "" !== u.name ? (s = u.name, null != u.icon && (t = (0, n.jsx)(d.ChannelIcon, {
                channel: u,
                size: r.AvatarSizes.SIZE_32
            }))) : s = e
        } else if (null != l) {
            let e = E.default.getFormattedName(l);
            s = p.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), a = (0, n.jsx)(d.SubTitle, {
                className: T.directInviteSubTitle,
                children: p.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsxs)(d.Title, {
                className: T.title,
                children: [null != i ? (0, n.jsx)(o.default, {
                    guild: i,
                    className: T.guildBadge,
                    tooltipPosition: "left"
                }) : null, t, s]
            }), a]
        })
    }
}