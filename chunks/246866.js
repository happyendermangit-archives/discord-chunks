function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        s = n("512722"),
        a = n.n(s),
        o = n("153832"),
        l = n("924826"),
        u = n("442837"),
        d = n("481060"),
        _ = n("749210"),
        c = n("412899"),
        E = n("112724"),
        I = n("906732"),
        T = n("434404"),
        f = n("430824"),
        S = n("496675"),
        h = n("594174"),
        A = n("700785"),
        m = n("785717"),
        N = n("171368"),
        p = n("981631"),
        O = n("689938"),
        R = n("442817");
    let C = (0, E.default)(function(e) {
        let {
            user: t,
            guild: n,
            userRoles: s,
            width: E
        } = e, {
            trackUserProfileAction: C
        } = (0, m.useUserProfileAnalyticsContext)(), g = r.useRef({}), L = r.useCallback(e => {
            var i;
            C({
                action: "REMOVE_ROLE"
            });
            let r = s.filter(t => t !== e.id);
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? _.default.unassignGuildRoleConnection(n.id, e.id) : T.default.updateMemberRoles(n.id, t.id, r, [], [e.id])
        }, [s, n.id, t.id, C]), D = r.useCallback(e => {
            C({
                action: "ADD_ROLE"
            });
            let i = s; - 1 === i.indexOf(e) && (i = i.concat([e])), T.default.updateMemberRoles(n.id, t.id, i, [e], [])
        }, [s, n.id, t.id, C]), [v, M] = r.useState(null), y = (0, u.useStateFromStores)([f.default], () => f.default.getRoles(n.id)), P = r.useMemo(() => {
            let e = Object.values(y).filter(e => s.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !s ? 1 : !r && s ? -1 : 0
            });
            return null != v ? e.slice(0, v) : e
        }, [y, v, s]), U = s.length - P.length;
        r.useLayoutEffect(() => {
            if ("number" != typeof E) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = E - 32,
                i = n - 32;
            for (let r = 0; r < 2; r++) {
                t = 0;
                let s = 1 === r ? i : n;
                for (let n = e; n < P.length; n++) {
                    let i = P[n],
                        r = g.current[i.id];
                    if (null != r) {
                        if ((t += r.offsetWidth + 4) > s) break;
                        e++
                    }
                }
            }
            M(t => e < P.length ? e : t)
        }, [E, P]);
        let b = h.default.getCurrentUser();
        a()(null != b, "MemberRolesList: currentUser cannot be undefined");
        let G = S.default.can(p.Permissions.MANAGE_ROLES, n),
            w = A.getHighestRole(n, b.id),
            B = r.useMemo(() => "roles-".concat((0, o.v4)()), []),
            k = (0, l.default)({
                id: B,
                isEnabled: !0,
                scrollToStart: p.NOOP_PROMISE,
                scrollToEnd: p.NOOP_PROMISE,
                wrap: !0
            }),
            F = P.map(e => {
                var r;
                return (0, i.jsx)(c.MemberRole, {
                    className: R.role,
                    role: e,
                    canRemove: G && A.isRoleHigher(n, b.id, w, e) || (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && t.id === b.id,
                    onRemove: () => L(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? g.current[n] = i : delete g.current[n])
                    },
                    guildId: n.id,
                    disableBorderColor: !0
                }, e.id)
            }),
            {
                guildId: V,
                channelId: x,
                messageId: H,
                roleId: Y
            } = (0, m.useUserProfileAnalyticsContext)(),
            {
                analyticsLocations: j
            } = (0, I.default)(),
            W = null != v && 0 !== U ? (0, i.jsx)(d.Clickable, {
                onClick: () => {
                    (0, N.openUserProfileModal)({
                        userId: t.id,
                        guildId: V,
                        channelId: x,
                        messageId: H,
                        roleId: Y,
                        analyticsLocation: {
                            section: p.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
                        },
                        sourceAnalyticsLocations: j
                    })
                },
                className: R.overflowButton,
                children: (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    children: "+".concat(U)
                })
            }) : null;
        return (0, i.jsxs)("div", {
            className: R.container,
            children: [(0, i.jsxs)("div", {
                className: R.rolesHeader,
                children: [(0, i.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    className: R.rolesHeaderText,
                    children: O.default.Messages.ROLES
                }), G && (0, i.jsx)(d.Tooltip, {
                    text: O.default.Messages.USER_PROFILE_ADD_ROLE,
                    children: t => (0, i.jsx)("div", {
                        ...t,
                        children: (0, i.jsx)(c.OverflowAddRolesButton, {
                            ...e,
                            handleAddRole: D,
                            addButtonClassName: R.addButton,
                            addButtonIconClassName: R.addButtonIcon
                        })
                    })
                })]
            }), (0, i.jsx)(l.ListNavigatorProvider, {
                navigator: k,
                children: (0, i.jsx)(l.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, i.jsxs)("div", {
                            className: R.root,
                            "aria-label": O.default.Messages.ROLES_LIST.format({
                                numRoles: s.length
                            }),
                            ref: t,
                            ...n,
                            children: [F, W]
                        })
                    }
                })
            })]
        })
    });

    function g(e) {
        return (0, u.useStateFromStores)([S.default], () => {
            var t;
            return S.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), (0, i.jsx)(C, {
            ...e
        })
    }
}