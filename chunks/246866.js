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
            onClose: E,
            width: C
        } = e, {
            trackUserProfileAction: g
        } = (0, m.useUserProfileAnalyticsContext)(), L = r.useRef({}), D = r.useCallback(e => {
            var i;
            g({
                action: "REMOVE_ROLE"
            });
            let r = s.filter(t => t !== e.id);
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? _.default.unassignGuildRoleConnection(n.id, e.id) : T.default.updateMemberRoles(n.id, t.id, r, [], [e.id])
        }, [s, n.id, t.id, g]), v = r.useCallback(e => {
            g({
                action: "ADD_ROLE"
            });
            let i = s; - 1 === i.indexOf(e) && (i = i.concat([e])), T.default.updateMemberRoles(n.id, t.id, i, [e], [])
        }, [s, n.id, t.id, g]), [M, y] = r.useState(null), P = (0, u.useStateFromStores)([f.default], () => f.default.getRoles(n.id)), U = r.useMemo(() => {
            let e = Object.values(P).filter(e => s.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !s ? 1 : !r && s ? -1 : 0
            });
            return null != M ? e.slice(0, M) : e
        }, [P, M, s]), b = s.length - U.length;
        r.useLayoutEffect(() => {
            if ("number" != typeof C) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = C - 32,
                i = n - 32;
            for (let r = 0; r < 2; r++) {
                t = 0;
                let s = 1 === r ? i : n;
                for (let n = e; n < U.length; n++) {
                    let i = U[n],
                        r = L.current[i.id];
                    if (null != r) {
                        if ((t += r.offsetWidth + 4) > s) break;
                        e++
                    }
                }
            }
            y(t => e < U.length ? e : t)
        }, [C, U]);
        let G = h.default.getCurrentUser();
        a()(null != G, "MemberRolesList: currentUser cannot be undefined");
        let w = S.default.can(p.Permissions.MANAGE_ROLES, n),
            k = A.getHighestRole(n, G.id),
            B = r.useMemo(() => "roles-".concat((0, o.v4)()), []),
            F = (0, l.default)({
                id: B,
                isEnabled: !0,
                scrollToStart: p.NOOP_PROMISE,
                scrollToEnd: p.NOOP_PROMISE,
                wrap: !0
            }),
            V = U.map(e => {
                var r;
                return (0, i.jsx)(c.MemberRole, {
                    className: R.role,
                    role: e,
                    canRemove: w && A.isRoleHigher(n, G.id, k, e) || (null === (r = e.tags) || void 0 === r ? void 0 : r.guild_connections) === null && t.id === G.id,
                    onRemove: () => D(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? L.current[n] = i : delete L.current[n])
                    },
                    guildId: n.id,
                    disableBorderColor: !0
                }, e.id)
            }),
            {
                guildId: x,
                channelId: H,
                messageId: Y,
                roleId: j
            } = (0, m.useUserProfileAnalyticsContext)(),
            {
                analyticsLocations: W
            } = (0, I.default)(),
            K = null != M && 0 !== b ? (0, i.jsx)(d.Clickable, {
                onClick: () => {
                    null == E || E(), (0, N.openUserProfileModal)({
                        userId: t.id,
                        guildId: x,
                        channelId: H,
                        messageId: Y,
                        roleId: j,
                        analyticsLocation: {
                            section: p.AnalyticsSections.BITE_SIZE_PROFILE_POPOUT
                        },
                        sourceAnalyticsLocations: W
                    })
                },
                className: R.overflowButton,
                children: (0, i.jsx)(d.Text, {
                    variant: "text-xs/medium",
                    children: "+".concat(b)
                })
            }) : null;
        return (0, i.jsxs)("div", {
            className: R.container,
            children: [(0, i.jsxs)("div", {
                className: R.rolesHeader,
                children: [(0, i.jsx)(d.Heading, {
                    variant: "text-xs/semibold",
                    children: O.default.Messages.ROLES
                }), w && (0, i.jsx)(d.TooltipContainer, {
                    className: R.hiddenTooltip,
                    text: O.default.Messages.USER_PROFILE_ADD_ROLE,
                    children: (0, i.jsx)(c.OverflowAddRolesButton, {
                        ...e,
                        handleAddRole: v,
                        addButtonClassName: R.addButton,
                        addButtonIconClassName: R.addButtonIcon
                    })
                })]
            }), (0, i.jsx)(l.ListNavigatorProvider, {
                navigator: F,
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
                            children: [V, K]
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