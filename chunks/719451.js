function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteResolvingHeader: function() {
            return g
        },
        default: function() {
            return h
        }
    }), n("70102");
    var l = n("37983"),
        a = n("884691"),
        u = n("446674"),
        r = n("77078"),
        s = n("770032"),
        i = n("653047"),
        o = n("233069"),
        _ = n("813006"),
        E = n("766274"),
        d = n("697218"),
        I = n("953109"),
        c = n("580357"),
        T = n("124969"),
        N = n("587974"),
        f = n("158998"),
        A = n("49111"),
        O = n("238055"),
        p = n("91366"),
        S = n("782340"),
        C = n("985551");
    let g = () => (0, l.jsxs)(a.Fragment, {
            children: [(0, l.jsx)(T.Avatar, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: C.avatar
            }), (0, l.jsx)(T.SubTitle, {
                children: S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
            }), (0, l.jsx)(T.Title, {
                className: C.inviteResolvingGuildName,
                children: S.default.Messages.LOADING
            })]
        }),
        R = e => {
            let {
                guild: t,
                user: n,
                application: a,
                compact: u
            } = e;
            if (null != a) return (0, l.jsx)(I.default, {
                className: C.appIcon,
                game: a,
                size: C.appIconSize
            });
            if (null != n) return (0, l.jsx)(T.Avatar, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: u ? C.compactAvatar : C.avatar
            });
            if (null != t) return (0, l.jsx)(N.default, {
                mask: N.default.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: C.guildIcon,
                children: (0, l.jsx)(T.GuildIcon, {
                    guild: t,
                    size: T.GuildIcon.Sizes.LARGER,
                    animate: !0
                })
            });
            else return null
        };
    var h = e => {
        var t;
        let n, a, I, {
                invite: N,
                disableUser: g = !1,
                error: h,
                flatActivityCount: m = !1,
                isRegister: U = !1
            } = e,
            {
                currentUser: M,
                multiAccounts: D
            } = (0, u.useStateFromStoresObject)([s.default, d.default], () => ({
                currentUser: d.default.getCurrentUser(),
                multiAccounts: s.default.getUsers()
            }));
        if (null == N) return null;
        let L = null != N.guild ? new _.default(N.guild) : null,
            v = null != N.channel ? (0, o.createChannelRecordFromInvite)(N.channel) : null,
            P = null != N.target_application ? new i.default(N.target_application) : null,
            F = g || null == N.inviter ? null : new E.default(N.inviter),
            y = null != N.approximate_member_count && N.approximate_member_count > 100 || null != L && L.hasFeature(A.GuildFeatures.COMMUNITY),
            V = !y && null != F,
            H = null,
            G = !1;
        if (null != L) H = null == F ? S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
            username: f.default.getFormattedName(F)
        }), N.target_type === p.InviteTargetTypes.STREAM && null != N.target_user && (H = S.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: f.default.getFormattedName(N.target_user)
        })), N.target_type === p.InviteTargetTypes.EMBEDDED_APPLICATION && null != N.target_application && (H = null != F ? S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
            username: f.default.getFormattedName(F)
        }) : S.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), V && null == P && (n = (0, l.jsx)(T.GuildIcon, {
            className: C.icon,
            guild: L,
            size: T.GuildIcon.Sizes.SMALL
        })), a = L.name, null != P && (a = P.name, I = (0, l.jsxs)("div", {
            children: [(0, l.jsx)(T.SubTitle, {
                className: C.appIn,
                children: S.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, l.jsxs)("div", {
                className: C.guildContainer,
                children: [(0, l.jsx)(T.GuildIcon, {
                    guild: L,
                    size: T.GuildIcon.Sizes.SMALL
                }), (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: C.appGuildName,
                    children: L.name
                })]
            })]
        }));
        else if (null != v) {
            if (null == F) throw Error("no inviter in group DM invite");
            let e = f.default.getFormattedName(F);
            null != v.name && "" !== v.name ? (H = S.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e
            }), a = v.name, null != v.icon && (n = (0, l.jsx)(T.ChannelIcon, {
                channel: v,
                size: r.AvatarSizes.SIZE_32
            }))) : (H = S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
        } else if (null != F) {
            let e = f.default.getFormattedName(F, !0);
            a = S.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), G = !0, I = null != h ? null : (0, l.jsx)(T.SubTitle, {
                className: C.directInviteSubTitle,
                children: U ? S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                    username: e
                }) : S.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, l.jsxs)("div", {
            className: C.container,
            children: [(0, l.jsx)(R, {
                application: P,
                guild: L,
                user: V ? F : null,
                compact: G
            }), null != h ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(T.SubTitle, {
                    children: S.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, l.jsx)(T.Title, {
                    children: h
                })]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(T.SubTitle, {
                    children: H
                }), (0, l.jsxs)(T.Title, {
                    className: C.title,
                    children: [null != L ? (0, l.jsx)(c.default, {
                        guild: L,
                        className: C.guildBadge,
                        tooltipPosition: "left"
                    }) : null, n, a]
                })]
            }), I, null != P || G || (null == N ? void 0 : null === (t = N.guild) || void 0 === t ? void 0 : t.id) === O.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(T.ActivityCount, {
                className: C.activityCount,
                online: N.approximate_presence_count,
                total: N.approximate_member_count,
                flat: m
            }), D.length > 1 ? (0, l.jsx)(T.JoiningAs, {
                user: M
            }) : null]
        })
    }
}