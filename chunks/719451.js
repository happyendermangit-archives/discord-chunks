function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteResolvingHeader: function() {
            return R
        },
        default: function() {
            return C
        }
    }), n("70102");
    var s = n("37983"),
        a = n("884691"),
        r = n("446674"),
        l = n("77078"),
        i = n("770032"),
        o = n("653047"),
        u = n("233069"),
        d = n("813006"),
        c = n("766274"),
        E = n("697218"),
        f = n("953109"),
        _ = n("580357"),
        h = n("124969"),
        g = n("587974"),
        m = n("158998"),
        p = n("49111"),
        T = n("238055"),
        I = n("91366"),
        A = n("782340"),
        S = n("985551");
    let R = () => (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(h.Avatar, {
                src: null,
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: S.avatar
            }), (0, s.jsx)(h.SubTitle, {
                children: A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
            }), (0, s.jsx)(h.Title, {
                className: S.inviteResolvingGuildName,
                children: A.default.Messages.LOADING
            })]
        }),
        N = e => {
            let {
                guild: t,
                user: n,
                application: a,
                compact: r
            } = e;
            if (null != a) return (0, s.jsx)(f.default, {
                className: S.appIcon,
                game: a,
                size: S.appIconSize
            });
            if (null != n) return (0, s.jsx)(h.Avatar, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: l.AvatarSizes.SIZE_80,
                className: r ? S.compactAvatar : S.avatar
            });
            if (null != t) return (0, s.jsx)(g.default, {
                mask: g.default.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: S.guildIcon,
                children: (0, s.jsx)(h.GuildIcon, {
                    guild: t,
                    size: h.GuildIcon.Sizes.LARGER,
                    animate: !0
                })
            });
            else return null
        };
    var C = e => {
        var t;
        let n, a, f, {
                invite: g,
                disableUser: R = !1,
                error: C,
                flatActivityCount: O = !1,
                isRegister: L = !1
            } = e,
            {
                currentUser: M,
                multiAccounts: v
            } = (0, r.useStateFromStoresObject)([i.default, E.default], () => ({
                currentUser: E.default.getCurrentUser(),
                multiAccounts: i.default.getUsers()
            }));
        if (null == g) return null;
        let D = null != g.guild ? new d.default(g.guild) : null,
            x = null != g.channel ? (0, u.createChannelRecordFromInvite)(g.channel) : null,
            U = null != g.target_application ? new o.default(g.target_application) : null,
            b = R || null == g.inviter ? null : new c.default(g.inviter),
            y = null != g.approximate_member_count && g.approximate_member_count > 100 || null != D && D.hasFeature(p.GuildFeatures.COMMUNITY),
            P = !y && null != b,
            G = null,
            F = !1;
        if (null != D) G = null == b ? A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
            username: m.default.getFormattedName(b)
        }), g.target_type === I.InviteTargetTypes.STREAM && null != g.target_user && (G = A.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: m.default.getFormattedName(g.target_user)
        })), g.target_type === I.InviteTargetTypes.EMBEDDED_APPLICATION && null != g.target_application && (G = null != b ? A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
            username: m.default.getFormattedName(b)
        }) : A.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), P && null == U && (n = (0, s.jsx)(h.GuildIcon, {
            className: S.icon,
            guild: D,
            size: h.GuildIcon.Sizes.SMALL
        })), a = D.name, null != U && (a = U.name, f = (0, s.jsxs)("div", {
            children: [(0, s.jsx)(h.SubTitle, {
                className: S.appIn,
                children: A.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, s.jsxs)("div", {
                className: S.guildContainer,
                children: [(0, s.jsx)(h.GuildIcon, {
                    guild: D,
                    size: h.GuildIcon.Sizes.SMALL
                }), (0, s.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: S.appGuildName,
                    children: D.name
                })]
            })]
        }));
        else if (null != x) {
            if (null == b) throw Error("no inviter in group DM invite");
            let e = m.default.getFormattedName(b);
            null != x.name && "" !== x.name ? (G = A.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e
            }), a = x.name, null != x.icon && (n = (0, s.jsx)(h.ChannelIcon, {
                channel: x,
                size: l.AvatarSizes.SIZE_32
            }))) : (G = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
        } else if (null != b) {
            let e = m.default.getFormattedName(b, !0);
            a = A.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), F = !0, f = null != C ? null : (0, s.jsx)(h.SubTitle, {
                className: S.directInviteSubTitle,
                children: L ? A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                    username: e
                }) : A.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, s.jsxs)("div", {
            className: S.container,
            children: [(0, s.jsx)(N, {
                application: U,
                guild: D,
                user: P ? b : null,
                compact: F
            }), null != C ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(h.SubTitle, {
                    children: A.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, s.jsx)(h.Title, {
                    children: C
                })]
            }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(h.SubTitle, {
                    children: G
                }), (0, s.jsxs)(h.Title, {
                    className: S.title,
                    children: [null != D ? (0, s.jsx)(_.default, {
                        guild: D,
                        className: S.guildBadge,
                        tooltipPosition: "left"
                    }) : null, n, a]
                })]
            }), f, null != U || F || (null == g ? void 0 : null === (t = g.guild) || void 0 === t ? void 0 : t.id) === T.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(h.ActivityCount, {
                className: S.activityCount,
                online: g.approximate_presence_count,
                total: g.approximate_member_count,
                flat: O
            }), v.length > 1 ? (0, s.jsx)(h.JoiningAs, {
                user: M
            }) : null]
        })
    }
}