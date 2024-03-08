function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteResolvingHeader: function() {
            return S
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
        f = n("697218"),
        E = n("953109"),
        h = n("580357"),
        _ = n("124969"),
        g = n("587974"),
        m = n("158998"),
        p = n("49111"),
        I = n("238055"),
        T = n("91366"),
        N = n("782340"),
        A = n("985551");
    let S = () => (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(_.Avatar, {
                src: null,
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: A.avatar
            }), (0, s.jsx)(_.SubTitle, {
                children: N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
            }), (0, s.jsx)(_.Title, {
                className: A.inviteResolvingGuildName,
                children: N.default.Messages.LOADING
            })]
        }),
        R = e => {
            let {
                guild: t,
                user: n,
                application: a,
                compact: r
            } = e;
            if (null != a) return (0, s.jsx)(E.default, {
                className: A.appIcon,
                game: a,
                size: A.appIconSize
            });
            if (null != n) return (0, s.jsx)(_.Avatar, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: l.AvatarSizes.SIZE_80,
                className: r ? A.compactAvatar : A.avatar
            });
            if (null != t) return (0, s.jsx)(g.default, {
                mask: g.default.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: A.guildIcon,
                children: (0, s.jsx)(_.GuildIcon, {
                    guild: t,
                    size: _.GuildIcon.Sizes.LARGER,
                    animate: !0
                })
            });
            else return null
        };
    var C = e => {
        var t;
        let n, a, E, {
                invite: g,
                disableUser: S = !1,
                error: C,
                flatActivityCount: O = !1,
                isRegister: v = !1
            } = e,
            {
                currentUser: L,
                multiAccounts: M
            } = (0, r.useStateFromStoresObject)([i.default, f.default], () => ({
                currentUser: f.default.getCurrentUser(),
                multiAccounts: i.default.getUsers()
            }));
        if (null == g) return null;
        let x = null != g.guild ? new d.default(g.guild) : null,
            y = null != g.channel ? (0, u.createChannelRecordFromInvite)(g.channel) : null,
            D = null != g.target_application ? new o.default(g.target_application) : null,
            U = S || null == g.inviter ? null : new c.default(g.inviter),
            b = null != g.approximate_member_count && g.approximate_member_count > 100 || null != x && x.hasFeature(p.GuildFeatures.COMMUNITY),
            P = !b && null != U,
            G = null,
            F = !1;
        if (null != x) G = null == U ? N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
            username: m.default.getFormattedName(U)
        }), g.target_type === T.InviteTargetTypes.STREAM && null != g.target_user && (G = N.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: m.default.getFormattedName(g.target_user)
        })), g.target_type === T.InviteTargetTypes.EMBEDDED_APPLICATION && null != g.target_application && (G = null != U ? N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
            username: m.default.getFormattedName(U)
        }) : N.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), P && null == D && (n = (0, s.jsx)(_.GuildIcon, {
            className: A.icon,
            guild: x,
            size: _.GuildIcon.Sizes.SMALL
        })), a = x.name, null != D && (a = D.name, E = (0, s.jsxs)("div", {
            children: [(0, s.jsx)(_.SubTitle, {
                className: A.appIn,
                children: N.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, s.jsxs)("div", {
                className: A.guildContainer,
                children: [(0, s.jsx)(_.GuildIcon, {
                    guild: x,
                    size: _.GuildIcon.Sizes.SMALL
                }), (0, s.jsx)(l.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: A.appGuildName,
                    children: x.name
                })]
            })]
        }));
        else if (null != y) {
            if (null == U) throw Error("no inviter in group DM invite");
            let e = m.default.getFormattedName(U);
            null != y.name && "" !== y.name ? (G = N.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e
            }), a = y.name, null != y.icon && (n = (0, s.jsx)(_.ChannelIcon, {
                channel: y,
                size: l.AvatarSizes.SIZE_32
            }))) : (G = N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
        } else if (null != U) {
            let e = m.default.getFormattedName(U, !0);
            a = N.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), F = !0, E = null != C ? null : (0, s.jsx)(_.SubTitle, {
                className: A.directInviteSubTitle,
                children: v ? N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                    username: e
                }) : N.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, s.jsxs)("div", {
            className: A.container,
            children: [(0, s.jsx)(R, {
                application: D,
                guild: x,
                user: P ? U : null,
                compact: F
            }), null != C ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(_.SubTitle, {
                    children: N.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, s.jsx)(_.Title, {
                    children: C
                })]
            }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(_.SubTitle, {
                    children: G
                }), (0, s.jsxs)(_.Title, {
                    className: A.title,
                    children: [null != x ? (0, s.jsx)(h.default, {
                        guild: x,
                        className: A.guildBadge,
                        tooltipPosition: "left"
                    }) : null, n, a]
                })]
            }), E, null != D || F || (null == g ? void 0 : null === (t = g.guild) || void 0 === t ? void 0 : t.id) === I.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(_.ActivityCount, {
                className: A.activityCount,
                online: g.approximate_presence_count,
                total: g.approximate_member_count,
                flat: O
            }), M.length > 1 ? (0, s.jsx)(_.JoiningAs, {
                user: L
            }) : null]
        })
    }
}