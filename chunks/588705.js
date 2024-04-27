function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteResolvingHeader: function() {
            return N
        }
    }), n("411104");
    var s = n("735250"),
        a = n("470079"),
        i = n("442837"),
        r = n("481060"),
        l = n("726745"),
        o = n("973616"),
        u = n("131704"),
        d = n("601964"),
        c = n("598077"),
        f = n("594174"),
        h = n("366695"),
        E = n("940627"),
        g = n("819570"),
        _ = n("806519"),
        m = n("51144"),
        p = n("981631"),
        T = n("888592"),
        A = n("245335"),
        I = n("689938"),
        S = n("754613");
    let N = () => (0, s.jsxs)(a.Fragment, {
            children: [(0, s.jsx)(g.Avatar, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: S.avatar
            }), (0, s.jsx)(g.SubTitle, {
                children: I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
            }), (0, s.jsx)(g.Title, {
                className: S.inviteResolvingGuildName,
                children: I.default.Messages.LOADING
            })]
        }),
        R = e => {
            let {
                guild: t,
                user: n,
                application: a,
                compact: i
            } = e;
            if (null != a) return (0, s.jsx)(h.default, {
                className: S.appIcon,
                game: a,
                size: S.appIconSize
            });
            if (null != n) return (0, s.jsx)(g.Avatar, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: i ? S.compactAvatar : S.avatar
            });
            if (null != t) return (0, s.jsx)(_.default, {
                mask: _.default.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: S.guildIcon,
                children: (0, s.jsx)(g.GuildIcon, {
                    guild: t,
                    size: g.GuildIcon.Sizes.LARGER,
                    animate: !0
                })
            });
            else return null
        };
    t.default = e => {
        var t;
        let n, a, h, {
                invite: _,
                disableUser: N = !1,
                error: C,
                flatActivityCount: O = !1,
                isRegister: L = !1
            } = e,
            {
                currentUser: v,
                multiAccounts: M
            } = (0, i.useStateFromStoresObject)([l.default, f.default], () => ({
                currentUser: f.default.getCurrentUser(),
                multiAccounts: l.default.getUsers()
            }));
        if (null == _) return null;
        let x = null != _.guild ? new d.default(_.guild) : null,
            b = null != _.channel ? (0, u.createChannelRecordFromInvite)(_.channel) : null,
            y = null != _.target_application ? new o.default(_.target_application) : null,
            U = N || null == _.inviter ? null : new c.default(_.inviter),
            D = !(null != _.approximate_member_count && _.approximate_member_count > 100 || null != x && x.hasFeature(p.GuildFeatures.COMMUNITY)) && null != U,
            P = null,
            G = !1;
        if (null != x) P = null == U ? I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
            username: m.default.getFormattedName(U)
        }), _.target_type === A.InviteTargetTypes.STREAM && null != _.target_user && (P = I.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: m.default.getFormattedName(_.target_user)
        })), _.target_type === A.InviteTargetTypes.EMBEDDED_APPLICATION && null != _.target_application && (P = null != U ? I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
            username: m.default.getFormattedName(U)
        }) : I.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), D && null == y && (n = (0, s.jsx)(g.GuildIcon, {
            className: S.icon,
            guild: x,
            size: g.GuildIcon.Sizes.SMALL
        })), a = x.name, null != y && (a = y.name, h = (0, s.jsxs)("div", {
            children: [(0, s.jsx)(g.SubTitle, {
                className: S.appIn,
                children: I.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, s.jsxs)("div", {
                className: S.guildContainer,
                children: [(0, s.jsx)(g.GuildIcon, {
                    guild: x,
                    size: g.GuildIcon.Sizes.SMALL
                }), (0, s.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: S.appGuildName,
                    children: x.name
                })]
            })]
        }));
        else if (null != b) {
            if (null == U) throw Error("no inviter in group DM invite");
            let e = m.default.getFormattedName(U);
            null != b.name && "" !== b.name ? (P = I.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e
            }), a = b.name, null != b.icon && (n = (0, s.jsx)(g.ChannelIcon, {
                channel: b,
                size: r.AvatarSizes.SIZE_32
            }))) : (P = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
        } else if (null != U) {
            let e = m.default.getFormattedName(U, !0);
            a = I.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), G = !0, h = null != C ? null : (0, s.jsx)(g.SubTitle, {
                className: S.directInviteSubTitle,
                children: L ? I.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                    username: e
                }) : I.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, s.jsxs)("div", {
            className: S.container,
            children: [(0, s.jsx)(R, {
                application: y,
                guild: x,
                user: D ? U : null,
                compact: G
            }), null != C ? (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(g.SubTitle, {
                    children: I.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, s.jsx)(g.Title, {
                    children: C
                })]
            }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(g.SubTitle, {
                    children: P
                }), (0, s.jsxs)(g.Title, {
                    className: S.title,
                    children: [null != x ? (0, s.jsx)(E.default, {
                        guild: x,
                        className: S.guildBadge,
                        tooltipPosition: "left"
                    }) : null, n, a]
                })]
            }), h, null != y || G || (null == _ ? void 0 : null === (t = _.guild) || void 0 === t ? void 0 : t.id) === T.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, s.jsx)(g.ActivityCount, {
                className: S.activityCount,
                online: _.approximate_presence_count,
                total: _.approximate_member_count,
                flat: O
            }), M.length > 1 ? (0, s.jsx)(g.JoiningAs, {
                user: v
            }) : null]
        })
    }
}