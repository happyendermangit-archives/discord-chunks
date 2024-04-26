function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        s = n.n(r),
        a = n("392711"),
        o = n.n(a),
        l = n("866442"),
        u = n("442837"),
        d = n("481060"),
        _ = n("239091"),
        c = n("276264"),
        E = n("607070"),
        I = n("100527"),
        T = n("906732"),
        f = n("818083"),
        S = n("480608"),
        h = n("484459"),
        A = n("103575"),
        m = n("592125"),
        N = n("271383"),
        p = n("430824"),
        O = n("594174"),
        R = n("285952"),
        C = n("797053"),
        g = n("151827"),
        L = n("689938"),
        D = n("958986"),
        v = n("990291");
    let M = (0, f.createExperiment)({
        kind: "user",
        id: "2021-07_role_popout",
        label: "Role Popout",
        defaultConfig: {
            enabled: !1
        },
        treatments: [{
            id: 1,
            label: "Enable Popout",
            config: {
                enabled: !0
            }
        }]
    });

    function y(e) {
        let {
            roleColor: t,
            roleId: r,
            channelId: a,
            roleName: f,
            guildId: y,
            children: P,
            inlinePreview: U = !1
        } = e, {
            analyticsLocations: b
        } = (0, T.default)(I.default.ROLE_MENTION), G = (0, u.useStateFromStores)([E.default], () => E.default.roleStyle), w = null != t && 0 !== t && !U, B = w && "dot" === G, k = e => (0, i.jsxs)(C.default, {
            className: s()(v.roleMention),
            color: "username" === G && w ? t : null,
            ...e,
            children: [B && (0, i.jsx)(d.RoleDot, {
                color: (0, l.int2hex)(t),
                className: D.roleDot,
                background: !1,
                tooltip: !1
            }), P]
        }), {
            enabled: V
        } = M.getCurrentConfig({
            location: "2ec235_1"
        }, {
            autoTrackExposure: !1
        });
        return !V || U || null == a || null == y || null == r && "@everyone" !== f ? (0, i.jsx)(T.AnalyticsLocationProvider, {
            value: b,
            children: k()
        }) : (0, i.jsx)(T.AnalyticsLocationProvider, {
            value: b,
            children: (0, i.jsx)(d.Popout, {
                preload: async () => {
                    null != r && await (0, S.requestMembersForRole)(y, r)
                },
                renderPopout: e => {
                    let t = m.default.getChannel(a),
                        s = p.default.getGuild(y),
                        l = N.default.getMembers(s.id),
                        u = p.default.getRole(y, null != r ? r : s.getEveryoneRoleId()),
                        E = o()(l).filter(e => !!("@everyone" === f || e.roles.includes(r)) && null != O.default.getUser(e.userId)).sortBy(e => {
                            var t;
                            let n = O.default.getUser(e.userId);
                            return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : "").toLocaleLowerCase()
                        }).map(e => {
                            let r = O.default.getUser(e.userId);
                            return (0, i.jsx)(d.Popout, {
                                preload: () => (0, h.default)(r.id, r.getAvatarURL(t.guild_id, 80), {
                                    guildId: t.guild_id,
                                    channelId: t.id
                                }),
                                renderPopout: n => (0, i.jsx)(A.default, {
                                    ...n,
                                    location: "RoleMention",
                                    userId: e.userId,
                                    guildId: s.id,
                                    channelId: t.id,
                                    roleId: u.id
                                }),
                                spacing: 14,
                                children: (a, o) => {
                                    let {
                                        isShown: l
                                    } = o;
                                    return (0, i.jsx)(c.default, {
                                        selected: l,
                                        colorString: e.colorString,
                                        colorRoleName: u.name,
                                        user: r,
                                        isOwner: e.userId === s.ownerId,
                                        nick: e.nick,
                                        premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                        channel: t,
                                        guildId: s.id,
                                        onContextMenu: e => {
                                            (0, _.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await Promise.all([n.e("99387"), n.e("79695"), n.e("1502"), n.e("70866"), n.e("12435"), n.e("6696")]).then(n.bind(n, "757387"));
                                                return n => (0, i.jsx)(e, {
                                                    ...n,
                                                    user: r,
                                                    guildId: s.id,
                                                    channel: t,
                                                    showMediaItems: !0
                                                })
                                            })
                                        },
                                        ...a
                                    }, e.userId)
                                }
                            }, r.id)
                        }).value();
                    return (0, i.jsx)(R.default, {
                        className: v.rolePopout,
                        ...e,
                        children: (0, i.jsxs)(d.Scroller, {
                            className: v.roleScroller,
                            children: [(0, i.jsx)(g.default, {
                                className: v.roleHeader,
                                "aria-label": L.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                    title: u.name,
                                    count: E.length
                                }),
                                children: (0, i.jsxs)("span", {
                                    "aria-hidden": !0,
                                    children: [u.name, " — ", E.length]
                                })
                            }), E]
                        })
                    })
                },
                position: "right",
                children: k
            })
        })
    }
}