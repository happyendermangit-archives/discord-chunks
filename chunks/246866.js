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
        O = n("981631"),
        p = n("689938"),
        R = n("442817");
    let C = (0, E.default)(function(e) {
        let {
            user: t,
            guild: n,
            userRoles: s,
            width: E
        } = e, C = r.useRef({}), g = r.useCallback(e => {
            var i;
            let r = s.filter(t => t !== e.id);
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? _.default.unassignGuildRoleConnection(n.id, e.id) : T.default.updateMemberRoles(n.id, t.id, r, [], [e.id])
        }, [s, n.id, t.id]), L = r.useCallback(e => {
            let i = s; - 1 === i.indexOf(e) && (i = i.concat([e])), T.default.updateMemberRoles(n.id, t.id, i, [e], [])
        }, [s, n.id, t.id]), [D, v] = r.useState(null), M = (0, u.useStateFromStores)([f.default], () => f.default.getRoles(n.id)), y = r.useMemo(() => {
            let e = Object.values(M).filter(e => s.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !s ? 1 : !r && s ? -1 : 0
            });
            return null != D ? e.slice(0, D) : e
        }, [M, D, s]), P = s.length - y.length;
        r.useLayoutEffect(() => {
            if ("number" != typeof E) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = E - 24,
                i = n - 32;
            for (let r = 0; r < 2; r++) {
                t = 0;
                let s = 1 === r ? i : n;
                for (let n = e; n < y.length; n++) {
                    let i = y[n],
                        r = C.current[i.id];
                    if (null != r) {
                        if ((t += r.offsetWidth + 4) > s) break;
                        e++
                    }
                }
            }
            v(t => e < y.length ? e : t)
        }, [E, y]);
        let U = h.default.getCurrentUser();
        a()(null != U, "MemberRolesList: currentUser cannot be undefined");
        let b = S.default.can(O.Permissions.MANAGE_ROLES, n),
            G = A.getHighestRole(n, U.id),
            w = r.useMemo(() => "roles-".concat((0, o.v4)()), []),
            B = (0, l.default)({
                id: w,
                isEnabled: !0,
                scrollToStart: O.NOOP_PROMISE,
                scrollToEnd: O.NOOP_PROMISE,
                wrap: !0
            }),
            k = y.map(e => {
                var r;
                return (0, i.jsx)(c.MemberRole, {
                    className: R.role,
                    role: e,
                    canRemove: b && A.isRoleHigher(n, U.id, G, e) || (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && t.id === U.id,
                    onRemove: () => g(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? C.current[n] = i : delete C.current[n])
                    },
                    guildId: n.id,
                    disableBorderColor: !0
                }, e.id)
            }),
            {
                guildId: V,
                channelId: F,
                messageId: x,
                roleId: H
            } = (0, m.useUserProfileAnalyticsContext)(),
            {
                analyticsLocations: Y
            } = (0, I.default)(),
            j = null != D && 0 !== P ? (0, i.jsx)(d.Clickable, {
                onClick: () => {
                    (0, N.openUserProfileModal)({
                        userId: t.id,
                        guildId: V,
                        channelId: F,
                        messageId: x,
                        roleId: H,
                        analyticsLocation: {
                            section: O.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
                        },
                        sourceAnalyticsLocations: Y
                    })
                },
                className: R.overflowButton,
                children: (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    children: "+".concat(P)
                })
            }) : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: R.rolesHeader,
                children: [(0, i.jsx)(d.Text, {
                    variant: "text-xs/semibold",
                    className: R.rolesHeaderText,
                    children: p.default.Messages.ROLES
                }), b && (0, i.jsx)(d.Tooltip, {
                    text: p.default.Messages.USER_PROFILE_ADD_ROLE,
                    children: t => (0, i.jsx)("div", {
                        ...t,
                        children: (0, i.jsx)(c.OverflowAddRolesButton, {
                            ...e,
                            handleAddRole: L,
                            addButtonClassName: R.addButton,
                            addButtonIconClassName: R.addButtonIcon
                        })
                    })
                })]
            }), (0, i.jsx)(l.ListNavigatorProvider, {
                navigator: B,
                children: (0, i.jsx)(l.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, i.jsxs)("div", {
                            className: R.root,
                            "aria-label": p.default.Messages.ROLES_LIST.format({
                                numRoles: s.length
                            }),
                            ref: t,
                            ...n,
                            children: [k, j]
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