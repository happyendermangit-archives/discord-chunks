function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteResolvingHeader: function() {
            return C
        }
    }), n("411104");
    var l = n("735250"),
        a = n("470079"),
        u = n("442837"),
        r = n("481060"),
        i = n("726745"),
        s = n("973616"),
        o = n("131704"),
        _ = n("601964"),
        c = n("598077"),
        d = n("594174"),
        E = n("366695"),
        I = n("940627"),
        T = n("819570"),
        N = n("806519"),
        f = n("51144"),
        A = n("981631"),
        S = n("888592"),
        p = n("245335"),
        g = n("689938"),
        m = n("138333");
    let C = () => (0, l.jsxs)(a.Fragment, {
            children: [(0, l.jsx)(T.Avatar, {
                src: null,
                size: r.AvatarSizes.DEPRECATED_SIZE_100,
                className: m.avatar
            }), (0, l.jsx)(T.SubTitle, {
                children: g.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
            }), (0, l.jsx)(T.Title, {
                className: m.inviteResolvingGuildName,
                children: g.default.Messages.LOADING
            })]
        }),
        U = e => {
            let {
                guild: t,
                user: n,
                application: a,
                compact: u
            } = e;
            if (null != a) return (0, l.jsx)(E.default, {
                className: m.appIcon,
                game: a,
                size: m.appIconSize
            });
            if (null != n) return (0, l.jsx)(T.Avatar, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: r.AvatarSizes.SIZE_80,
                className: u ? m.compactAvatar : m.avatar
            });
            if (null != t) return (0, l.jsx)(N.default, {
                mask: N.default.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: m.guildIcon,
                children: (0, l.jsx)(T.GuildIcon, {
                    guild: t,
                    size: T.GuildIcon.Sizes.LARGER,
                    animate: !0
                })
            });
            else return null
        };
    t.default = e => {
        var t;
        let n, a, E, {
                invite: N,
                disableUser: C = !1,
                error: O,
                flatActivityCount: L = !1,
                isRegister: M = !1
            } = e,
            {
                currentUser: R,
                multiAccounts: v
            } = (0, u.useStateFromStoresObject)([i.default, d.default], () => ({
                currentUser: d.default.getCurrentUser(),
                multiAccounts: i.default.getUsers()
            }));
        if (null == N) return null;
        let D = null != N.guild ? new _.default(N.guild) : null,
            y = null != N.channel ? (0, o.createChannelRecordFromInvite)(N.channel) : null,
            G = null != N.target_application ? new s.default(N.target_application) : null,
            h = C || null == N.inviter ? null : new c.default(N.inviter),
            w = !(null != N.approximate_member_count && N.approximate_member_count > 100 || null != D && D.hasFeature(A.GuildFeatures.COMMUNITY)) && null != h,
            F = null,
            b = !1;
        if (null != D) F = null == h ? g.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : g.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
            username: f.default.getFormattedName(h)
        }), N.target_type === p.InviteTargetTypes.STREAM && null != N.target_user && (F = g.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: f.default.getFormattedName(N.target_user)
        })), N.target_type === p.InviteTargetTypes.EMBEDDED_APPLICATION && null != N.target_application && (F = null != h ? g.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
            username: f.default.getFormattedName(h)
        }) : g.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), w && null == G && (n = (0, l.jsx)(T.GuildIcon, {
            className: m.icon,
            guild: D,
            size: T.GuildIcon.Sizes.SMALL
        })), a = D.name, null != G && (a = G.name, E = (0, l.jsxs)("div", {
            children: [(0, l.jsx)(T.SubTitle, {
                className: m.appIn,
                children: g.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
            }), (0, l.jsxs)("div", {
                className: m.guildContainer,
                children: [(0, l.jsx)(T.GuildIcon, {
                    guild: D,
                    size: T.GuildIcon.Sizes.SMALL
                }), (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "header-primary",
                    className: m.appGuildName,
                    children: D.name
                })]
            })]
        }));
        else if (null != y) {
            if (null == h) throw Error("no inviter in group DM invite");
            let e = f.default.getFormattedName(h);
            null != y.name && "" !== y.name ? (F = g.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: e
            }), a = y.name, null != y.icon && (n = (0, l.jsx)(T.ChannelIcon, {
                channel: y,
                size: r.AvatarSizes.SIZE_32
            }))) : (F = g.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
        } else if (null != h) {
            let e = f.default.getFormattedName(h, !0);
            a = g.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: e
            }), b = !0, E = null != O ? null : (0, l.jsx)(T.SubTitle, {
                className: m.directInviteSubTitle,
                children: M ? g.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                    username: e
                }) : g.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                    username: e
                })
            })
        }
        return (0, l.jsxs)("div", {
            className: m.container,
            children: [(0, l.jsx)(U, {
                application: G,
                guild: D,
                user: w ? h : null,
                compact: b
            }), null != O ? (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(T.SubTitle, {
                    children: g.default.Messages.INVITE_MODAL_ERROR_TITLE
                }), (0, l.jsx)(T.Title, {
                    children: O
                })]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(T.SubTitle, {
                    children: F
                }), (0, l.jsxs)(T.Title, {
                    className: m.title,
                    children: [null != D ? (0, l.jsx)(I.default, {
                        guild: D,
                        className: m.guildBadge,
                        tooltipPosition: "left"
                    }) : null, n, a]
                })]
            }), E, null != G || b || (null == N ? void 0 : null === (t = N.guild) || void 0 === t ? void 0 : t.id) === S.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(T.ActivityCount, {
                className: m.activityCount,
                online: N.approximate_presence_count,
                total: N.approximate_member_count,
                flat: L
            }), v.length > 1 ? (0, l.jsx)(T.JoiningAs, {
                user: R
            }) : null]
        })
    }
}