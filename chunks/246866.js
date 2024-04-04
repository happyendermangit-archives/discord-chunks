function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("512722"),
        l = n.n(o),
        u = n("153832"),
        d = n("924826"),
        _ = n("442837"),
        c = n("481060"),
        E = n("749210"),
        I = n("412899"),
        T = n("112724"),
        f = n("434404"),
        S = n("430824"),
        h = n("496675"),
        A = n("594174"),
        m = n("700785"),
        N = n("981631"),
        O = n("689938"),
        p = n("442817");

    function R(e) {
        let {
            user: t,
            guild: n,
            userRoles: s,
            wrap: o = !0,
            width: T,
            className: R,
            roleClassName: C,
            addButtonClassName: g,
            addButtonIconClassName: L,
            readOnly: D,
            disableBorderColor: v
        } = e, M = r.useRef({}), y = r.useCallback(e => {
            var i;
            let r = s.filter(t => t !== e.id);
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? E.default.unassignGuildRoleConnection(n.id, e.id) : f.default.updateMemberRoles(n.id, t.id, r, [], [e.id])
        }, [s, n.id, t.id]), P = r.useCallback(e => {
            let i = s; - 1 === i.indexOf(e) && (i = i.concat([e])), f.default.updateMemberRoles(n.id, t.id, i, [e], [])
        }, [s, n.id, t.id]), [U, b] = r.useState(null), G = (0, _.useStateFromStores)([S.default], () => S.default.getRoles(n.id)), w = r.useMemo(() => {
            let e = Object.values(G).filter(e => s.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !s ? 1 : !r && s ? -1 : 0
            });
            return null != U ? e.slice(0, U) : e
        }, [G, U, s]), B = s.length - w.length;
        r.useLayoutEffect(() => {
            if (o) return;
            if ("number" != typeof T) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = T - 30 - 4;
            for (let i = 0; i < w.length; i++) {
                let r = w[i],
                    s = M.current[r.id];
                if (null != s) {
                    if ((t += s.offsetWidth + 4) > n) break;
                    e++
                }
            }
            b(t => e < w.length ? e : t)
        }, [o, T, w]);
        let k = A.default.getCurrentUser();
        l()(null != k, "MemberRolesList: currentUser cannot be undefined");
        let V = !D && h.default.can(N.Permissions.MANAGE_ROLES, n),
            F = m.getHighestRole(n, k.id),
            x = r.useMemo(() => "roles-".concat((0, u.v4)()), []),
            H = (0, d.default)({
                id: x,
                isEnabled: !0,
                scrollToStart: N.NOOP_PROMISE,
                scrollToEnd: N.NOOP_PROMISE,
                wrap: !0
            }),
            Y = w.map(e => {
                var r;
                return (0, i.jsx)(I.MemberRole, {
                    className: C,
                    role: e,
                    canRemove: V && m.isRoleHigher(n, k.id, F, e) || (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && t.id === k.id,
                    onRemove: () => y(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? M.current[n] = i : delete M.current[n])
                    },
                    guildId: n.id,
                    disableBorderColor: v
                }, e.id)
            }),
            j = null != U && 0 !== B ? (0, i.jsx)(I.OverflowMoreRolesButton, {
                ...e,
                numRolesHidden: B
            }) : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: p.rolesHeader,
                children: [(0, i.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    className: p.rolesHeaderText,
                    children: O.default.Messages.ROLES
                }), V && (0, i.jsx)(c.Tooltip, {
                    text: O.default.Messages.USER_PROFILE_ADD_ROLE,
                    children: t => (0, i.jsx)("div", {
                        ...t,
                        children: (0, i.jsx)(I.OverflowAddRolesButton, {
                            ...e,
                            handleAddRole: P,
                            addButtonClassName: g,
                            addButtonIconClassName: L
                        })
                    })
                })]
            }), (0, i.jsx)(d.ListNavigatorProvider, {
                navigator: H,
                children: (0, i.jsx)(d.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, i.jsxs)("div", {
                            className: a()(p.root, R),
                            "aria-label": O.default.Messages.ROLES_LIST.format({
                                numRoles: s.length
                            }),
                            ref: t,
                            ...n,
                            children: [Y, j]
                        })
                    }
                })
            })]
        })
    }
    let C = (0, T.default)(R);

    function g(e) {
        return (0, _.useStateFromStores)([h.default], () => {
            var t;
            return h.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), !1 === e.wrap ? (0, i.jsx)(C, {
            ...e
        }) : (0, i.jsx)(R, {
            ...e
        })
    }
}