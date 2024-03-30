function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InviteResolvingHeader: function() {
            return v
        }
    });
    var r = n("470079"),
        a = n("898511"),
        l = n("784184"),
        u = n("545962"),
        i = n("338140"),
        o = n("569492"),
        s = n("393588"),
        c = n("428009"),
        E = n("208454"),
        d = n("433073"),
        _ = n("793570"),
        f = n("283895"),
        p = n("845265"),
        I = n("830567"),
        T = n("281767"),
        m = n("524281"),
        N = n("551941"),
        h = n("941504"),
        g = n("138333"),
        v = function() {
            return r.createElement(r.Fragment, null, r.createElement(f.Avatar, {
                src: null,
                size: l.AvatarSizes.DEPRECATED_SIZE_100,
                className: g.avatar
            }), r.createElement(f.SubTitle, null, h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN), r.createElement(f.Title, {
                className: g.inviteResolvingGuildName
            }, h.default.Messages.LOADING))
        },
        S = function(e) {
            var t = e.guild,
                n = e.user,
                a = e.application,
                u = e.compact;
            if (null != a) return r.createElement(d.default, {
                className: g.appIcon,
                game: a,
                size: g.appIconSize
            });
            if (null != n) return r.createElement(f.Avatar, {
                src: null != n ? n.getAvatarURL(void 0, 80) : null,
                size: l.AvatarSizes.SIZE_80,
                className: u ? g.compactAvatar : g.avatar
            });
            if (null != t) return r.createElement(p.default, {
                mask: p.default.Masks.SQUIRCLE,
                width: 64,
                height: 64,
                className: g.guildIcon
            }, r.createElement(f.GuildIcon, {
                guild: t,
                size: f.GuildIcon.Sizes.LARGER,
                animate: !0
            }));
            else return null
        };
    t.default = function(e) {
        var t, n, d, p, v = e.invite,
            A = e.disableUser,
            O = e.error,
            y = e.flatActivityCount,
            b = e.isRegister,
            R = (0, a.useStateFromStoresObject)([u.default, E.default], function() {
                return {
                    currentUser: E.default.getCurrentUser(),
                    multiAccounts: u.default.getUsers()
                }
            }),
            P = R.currentUser,
            C = R.multiAccounts;
        if (null == v) return null;
        var D = null != v.guild ? new s.default(v.guild) : null,
            M = null != v.channel ? (0, o.createChannelRecordFromInvite)(v.channel) : null,
            H = null != v.target_application ? new i.default(v.target_application) : null,
            F = void 0 !== A && A || null == v.inviter ? null : new c.default(v.inviter),
            L = !(null != v.approximate_member_count && v.approximate_member_count > 100 || null != D && D.hasFeature(T.GuildFeatures.COMMUNITY)) && null != F,
            U = null,
            V = !1;
        if (null != D) U = null == F ? h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : h.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
            username: I.default.getFormattedName(F)
        }), v.target_type === N.InviteTargetTypes.STREAM && null != v.target_user && (U = h.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
            username: I.default.getFormattedName(v.target_user)
        })), v.target_type === N.InviteTargetTypes.EMBEDDED_APPLICATION && null != v.target_application && (U = null != F ? h.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
            username: I.default.getFormattedName(F)
        }) : h.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), L && null == H && (n = r.createElement(f.GuildIcon, {
            className: g.icon,
            guild: D,
            size: f.GuildIcon.Sizes.SMALL
        })), d = D.name, null != H && (d = H.name, p = r.createElement("div", null, r.createElement(f.SubTitle, {
            className: g.appIn
        }, h.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN), r.createElement("div", {
            className: g.guildContainer
        }, r.createElement(f.GuildIcon, {
            guild: D,
            size: f.GuildIcon.Sizes.SMALL
        }), r.createElement(l.Text, {
            tag: "span",
            variant: "text-lg/normal",
            color: "header-primary",
            className: g.appGuildName
        }, D.name))));
        else if (null != M) {
            if (null == F) throw Error("no inviter in group DM invite");
            var w = I.default.getFormattedName(F);
            null != M.name && "" !== M.name ? (U = h.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                username: w
            }), d = M.name, null != M.icon && (n = r.createElement(f.ChannelIcon, {
                channel: M,
                size: l.AvatarSizes.SIZE_32
            }))) : (U = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, d = w)
        } else if (null != F) {
            var G = I.default.getFormattedName(F, !0);
            d = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                username: G
            }), V = !0, p = null != O ? null : r.createElement(f.SubTitle, {
                className: g.directInviteSubTitle
            }, void 0 !== b && b ? h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                username: G
            }) : h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                username: G
            }))
        }
        return r.createElement("div", {
            className: g.container
        }, r.createElement(S, {
            application: H,
            guild: D,
            user: L ? F : null,
            compact: V
        }), null != O ? r.createElement(r.Fragment, null, r.createElement(f.SubTitle, null, h.default.Messages.INVITE_MODAL_ERROR_TITLE), r.createElement(f.Title, null, O)) : r.createElement(r.Fragment, null, r.createElement(f.SubTitle, null, U), r.createElement(f.Title, {
            className: g.title
        }, null != D ? r.createElement(_.default, {
            guild: D,
            className: g.guildBadge,
            tooltipPosition: "left"
        }) : null, n, d)), p, null != H || V || (null == v ? void 0 : null === (t = v.guild) || void 0 === t ? void 0 : t.id) === m.INVITE_ROUTING_HUB_GUILD_ID ? null : r.createElement(f.ActivityCount, {
            className: g.activityCount,
            online: v.approximate_presence_count,
            total: v.approximate_member_count,
            flat: void 0 !== y && y
        }), C.length > 1 ? r.createElement(f.JoiningAs, {
            user: P
        }) : null)
    }
}