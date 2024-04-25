function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    }), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("153832"),
        a = n("924826"),
        o = n("442837"),
        l = n("481060"),
        u = n("749210"),
        d = n("412899"),
        _ = n("112724"),
        c = n("434404"),
        E = n("271383"),
        I = n("430824"),
        T = n("496675"),
        f = n("700785"),
        S = n("785717"),
        h = n("981631"),
        A = n("689938"),
        m = n("548646");
    let N = (0, _.default)(function(e) {
        let {
            user: t,
            currentUser: n,
            guild: u,
            userRoles: _,
            canManageRoles: c,
            width: E,
            onRemoveRole: T,
            onOpenProfile: S
        } = e, N = f.getHighestRole(u, n.id), p = r.useRef({}), [O, R] = r.useState(null), C = (0, o.useStateFromStores)([I.default], () => I.default.getRoles(u.id)), g = r.useMemo(() => {
            let e = Object.values(C).filter(e => _.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !s ? 1 : !r && s ? -1 : 0
            });
            return null != O ? e.slice(0, O) : e
        }, [C, O, _]), L = _.length - g.length;
        r.useLayoutEffect(() => {
            if ("number" != typeof E) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = E - 32;
            for (let i = 0; i < 2; i++) {
                t = 0;
                let r = 1 === i ? n : E;
                for (let n = e; n < g.length; n++) {
                    let i = g[n],
                        s = p.current[i.id];
                    if (null != s) {
                        if ((t += s.offsetWidth) > r) break;
                        t += 4, e++
                    }
                }
            }
            R(t => e < g.length ? e : t)
        }, [E, g]);
        let D = r.useMemo(() => "roles-".concat((0, s.v4)()), []),
            v = (0, a.default)({
                id: D,
                isEnabled: !0,
                scrollToStart: h.NOOP_PROMISE,
                scrollToEnd: h.NOOP_PROMISE,
                wrap: !0
            }),
            M = g.map(e => {
                var r;
                return (0, i.jsx)(d.MemberRole, {
                    className: m.role,
                    role: e,
                    canRemove: c ? f.isRoleHigher(u, n.id, N, e) : (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && t.id === n.id,
                    onRemove: () => T(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? p.current[n] = i : delete p.current[n])
                    },
                    guildId: u.id,
                    disableBorderColor: !0
                }, e.id)
            });
        return (0, i.jsx)(a.ListNavigatorProvider, {
            navigator: v,
            children: (0, i.jsx)(a.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: t,
                        ...n
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: m.root,
                        "aria-label": 0 === _.length ? A.default.Messages.ROLE_LIST_EMPTY : A.default.Messages.ROLES_LIST.format({
                            numRoles: _.length
                        }),
                        ref: t,
                        ...n,
                        children: [M, null != O && 0 !== L && (0, i.jsx)(l.Clickable, {
                            onClick: S,
                            className: m.overflowButton,
                            children: (0, i.jsx)(l.Text, {
                                variant: "text-xs/medium",
                                children: "+".concat(L)
                            })
                        })]
                    })
                }
            })
        })
    });

    function p(e) {
        let {
            user: t,
            currentUser: n,
            guild: s,
            onOpenProfile: a
        } = e, {
            trackUserProfileAction: _
        } = (0, S.useUserProfileAnalyticsContext)(), I = (0, o.useStateFromStores)([E.default], () => {
            var e;
            return null === (e = E.default.getMember(s.id, t.id)) || void 0 === e ? void 0 : e.roles
        }), [f] = (0, o.useStateFromStoresArray)([T.default], () => [T.default.can(h.Permissions.MANAGE_ROLES, s), null != s ? T.default.getGuildVersion(s.id) : null]), p = r.useCallback(e => {
            var n, i;
            _({
                action: "REMOVE_ROLE"
            });
            let r = null !== (i = null == I ? void 0 : I.filter(t => t !== e.id)) && void 0 !== i ? i : [];
            (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? u.default.unassignGuildRoleConnection(s.id, e.id) : c.default.updateMemberRoles(s.id, t.id, r, [], [e.id])
        }, [I, s.id, t.id, _]), O = r.useCallback(e => {
            _({
                action: "ADD_ROLE"
            });
            let n = null != I ? I : []; - 1 === n.indexOf(e) && (n = n.concat([e])), c.default.updateMemberRoles(s.id, t.id, n, [e], [])
        }, [I, s.id, t.id, _]);
        return (0, i.jsxs)("div", {
            className: m.container,
            children: [(0, i.jsxs)("div", {
                className: m.rolesHeader,
                children: [(0, i.jsx)(l.Heading, {
                    variant: "text-xs/semibold",
                    children: A.default.Messages.ROLES
                }), f && (0, i.jsx)(l.TooltipContainer, {
                    className: m.hiddenTooltip,
                    text: A.default.Messages.USER_PROFILE_ADD_ROLE,
                    children: (0, i.jsx)(d.OverflowAddRolesButton, {
                        user: t,
                        guild: s,
                        userRoles: null != I ? I : [],
                        handleAddRole: O,
                        addButtonClassName: m.addButton,
                        addButtonIconClassName: m.addButtonIcon
                    })
                })]
            }), null == I || 0 === I.length ? (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                children: A.default.Messages.ROLE_LIST_EMPTY
            }) : (0, i.jsx)("div", {
                children: (0, i.jsx)(N, {
                    user: t,
                    currentUser: n,
                    guild: s,
                    userRoles: I,
                    canManageRoles: f,
                    onRemoveRole: p,
                    onOpenProfile: a
                })
            })]
        })
    }
}