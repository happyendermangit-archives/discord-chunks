function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return k
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("917351"),
        r = n.n(s),
        o = n("509043"),
        u = n("446674"),
        d = n("77078"),
        c = n("272030"),
        f = n("888503"),
        p = n("206230"),
        m = n("812204"),
        h = n("685665"),
        x = n("862205"),
        E = n("895026"),
        y = n("506885"),
        g = n("340906"),
        S = n("42203"),
        C = n("26989"),
        _ = n("305961"),
        T = n("697218"),
        I = n("145131"),
        v = n("666897"),
        N = n("826684"),
        A = n("782340"),
        R = n("665958"),
        O = n("919163");
    let M = (0, x.createExperiment)({
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

    function k(e) {
        let {
            roleColor: t,
            roleId: l,
            channelId: s,
            roleName: x,
            guildId: k,
            children: L,
            inlinePreview: P = !1
        } = e, {
            analyticsLocations: b
        } = (0, h.default)(m.default.ROLE_MENTION), j = (0, u.useStateFromStores)([p.default], () => p.default.roleStyle), U = null != t && 0 !== t && !P, D = U && "dot" === j, w = e => (0, i.jsxs)(v.default, {
            className: a(O.roleMention),
            color: "username" === j && U ? t : null,
            ...e,
            children: [D && (0, i.jsx)(d.RoleDot, {
                color: (0, o.int2hex)(t),
                className: R.roleDot,
                background: !1,
                tooltip: !1
            }), L]
        }), {
            enabled: F
        } = M.getCurrentConfig({
            location: "2ec235_1"
        }, {
            autoTrackExposure: !1
        });
        return !F || P || null == s || null == k || null == l && "@everyone" !== x ? (0, i.jsx)(h.AnalyticsLocationProvider, {
            value: b,
            children: w()
        }) : (0, i.jsx)(h.AnalyticsLocationProvider, {
            value: b,
            children: (0, i.jsx)(d.Popout, {
                preload: async () => {
                    null != l && await (0, E.requestMembersForRole)(k, l)
                },
                renderPopout: e => {
                    let t = S.default.getChannel(s),
                        a = _.default.getGuild(k),
                        o = C.default.getMembers(a.id),
                        u = _.default.getRole(k, null != l ? l : a.getEveryoneRoleId()),
                        p = r(o).filter(e => {
                            if ("@everyone" === x || e.roles.includes(l)) {
                                let t = T.default.getUser(e.userId);
                                return null != t
                            }
                            return !1
                        }).sortBy(e => {
                            var t;
                            let n = T.default.getUser(e.userId);
                            return (null != n ? null !== (t = e.nick) && void 0 !== t ? t : n.username : "").toLocaleLowerCase()
                        }).map(e => {
                            let l = T.default.getUser(e.userId);
                            return (0, i.jsx)(d.Popout, {
                                preload: () => (0, y.default)(l.id, l.getAvatarURL(t.guild_id, 80), {
                                    guildId: t.guild_id,
                                    channelId: t.id
                                }),
                                renderPopout: n => (0, i.jsx)(g.default, {
                                    ...n,
                                    location: "RoleMention",
                                    userId: e.userId,
                                    guildId: a.id,
                                    channelId: t.id,
                                    roleId: u.id
                                }),
                                spacing: 14,
                                children: (s, r) => {
                                    let {
                                        isShown: o
                                    } = r;
                                    return (0, i.jsx)(f.default, {
                                        selected: o,
                                        colorString: e.colorString,
                                        colorRoleName: u.name,
                                        user: l,
                                        isOwner: e.userId === a.ownerId,
                                        nick: e.nick,
                                        premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                        channel: t,
                                        guildId: a.id,
                                        onContextMenu: e => {
                                            (0, c.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("834247").then(n.bind(n, "834247"));
                                                return n => (0, i.jsx)(e, {
                                                    ...n,
                                                    user: l,
                                                    guildId: a.id,
                                                    channel: t,
                                                    showMediaItems: !0
                                                })
                                            })
                                        },
                                        ...s
                                    }, e.userId)
                                }
                            }, l.id)
                        }).value();
                    return (0, i.jsx)(I.default, {
                        className: O.rolePopout,
                        ...e,
                        children: (0, i.jsxs)(d.Scroller, {
                            className: O.roleScroller,
                            children: [(0, i.jsx)(N.default, {
                                className: O.roleHeader,
                                "aria-label": A.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                    title: u.name,
                                    count: p.length
                                }),
                                children: (0, i.jsxs)("span", {
                                    "aria-hidden": !0,
                                    children: [u.name, " — ", p.length]
                                })
                            }), p]
                        })
                    })
                },
                position: "right",
                children: w
            })
        })
    }
}