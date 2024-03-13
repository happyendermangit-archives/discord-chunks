function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MemberRole: function() {
            return B
        },
        default: function() {
            return W
        }
    }), n("222007"), n("70102");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("627445"),
        o = n.n(r),
        u = n("748820"),
        d = n("974667"),
        c = n("509043"),
        f = n("446674"),
        p = n("669491"),
        m = n("77078"),
        h = n("272030"),
        x = n("851387"),
        E = n("737960"),
        y = n("206230"),
        g = n("454273"),
        S = n("339023"),
        C = n("405645"),
        I = n("592407"),
        T = n("26989"),
        _ = n("305961"),
        v = n("957255"),
        N = n("697218"),
        A = n("145131"),
        O = n("476765"),
        R = n("945330"),
        M = n("907566"),
        k = n("151185"),
        L = n("483093"),
        P = n("991170"),
        b = n("487311"),
        j = n("49111"),
        U = n("782340"),
        D = n("556248");
    let w = () => Promise.resolve();

    function F(e) {
        let {
            userRoles: t,
            position: n,
            ...l
        } = e, a = (0, O.useUID)();
        return (0, i.jsxs)(m.Dialog, {
            className: s(D.overflowRolesPopout, {
                [D.popoutBottom]: "bottom" === n,
                [D.popoutTop]: "top" === n
            }),
            "aria-labelledby": a,
            children: [(0, i.jsx)("div", {
                className: D.overflowRolesPopoutArrowWrapper,
                children: (0, i.jsx)("div", {
                    className: D.overflowRolesPopoutArrow
                })
            }), (0, i.jsxs)(A.default, {
                className: D.overflowRolesPopoutHeader,
                align: A.default.Align.CENTER,
                children: [(0, i.jsx)(M.default, {
                    color: p.default.unsafe_rawColors.PRIMARY_400.css,
                    className: D.overflowRolesPopoutHeaderIcon
                }), (0, i.jsx)("div", {
                    className: D.overflowRolesPopoutHeaderText,
                    id: a,
                    children: U.default.Messages.ROLES_LIST.format({
                        numRoles: t.length
                    })
                })]
            }), (0, i.jsx)(V, {
                ...l,
                wrap: !0,
                userRoles: t
            })]
        })
    }
    let B = l.forwardRef(function(e, t) {
        var a, r, o;
        let u;
        let {
            canRemove: x,
            className: E,
            role: g,
            onRemove: I,
            guildId: T,
            disableBorderColor: _,
            onMouseDown: v
        } = e, {
            tabIndex: N,
            ...A
        } = (0, d.useListItem)(g.id), O = (0, C.useRoleIcon)({
            roleId: g.id,
            size: 16,
            guildId: T
        }), M = (0, f.useStateFromStores)([y.default], () => y.default.roleStyle), k = (null === (a = g.tags) || void 0 === a ? void 0 : a.guild_connections) === null, P = l.useCallback(e => {
            (0, h.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("443070").then(n.bind(n, "443070"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    id: g.id,
                    label: U.default.Messages.COPY_ID_ROLE
                })
            })
        }, [g.id]), b = (0, m.useToken)(p.default.unsafe_rawColors.PRIMARY_300).hsl(), j = null !== (r = g.colorString) && void 0 !== r ? r : b, w = null !== (o = (0, c.hex2rgb)(j, .6)) && void 0 !== o ? o : void 0, F = p.default.unsafe_rawColors.WHITE_500.css, B = (0, c.hex2int)(j);
        null != B && .3 > (0, c.getDarkness)(B) && (F = p.default.unsafe_rawColors.PRIMARY_630.css), u = k ? (0, i.jsx)(S.default, {
            className: D.roleFlowerStar,
            iconClassName: x ? D.roleVerifiedIcon : void 0,
            color: j,
            size: 14
        }) : "dot" === M ? (0, i.jsx)(m.RoleDot, {
            className: D.roleDot,
            color: j,
            background: !1,
            tooltip: !1
        }) : (0, i.jsx)(m.RoleCircle, {
            color: j
        });
        let G = l.useMemo(() => {
            var t;
            return {
                borderColor: _ ? void 0 : w,
                ...null !== (t = e.style) && void 0 !== t ? t : {}
            }
        }, [w, _, e.style]);
        return (0, i.jsx)(m.FocusRing, {
            children: (0, i.jsxs)("div", {
                ref: t,
                className: s(D.role, E),
                style: G,
                onContextMenu: P,
                onMouseDown: v,
                "aria-label": g.name,
                tabIndex: N,
                ...A,
                children: [(0, i.jsxs)(m.Clickable, {
                    className: D.roleRemoveButton,
                    onClick: x ? I : void 0,
                    tabIndex: x ? N : -1,
                    focusProps: {
                        focusClassName: D.roleRemoveIconFocused
                    },
                    "aria-hidden": !x,
                    "aria-label": U.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                        roleName: g.name
                    }),
                    children: [u, x ? (0, i.jsx)(R.default, {
                        color: F,
                        className: D.roleRemoveIcon,
                        "aria-hidden": !0
                    }) : null]
                }), null != O ? (0, i.jsx)(L.default, {
                    className: D.roleIcon,
                    ...O,
                    enableTooltip: !1
                }) : null, (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: D.roleName,
                    children: (0, i.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        className: D.roleNameOverflow,
                        children: g.name
                    })
                })]
            })
        })
    });

    function G(e) {
        let {
            user: t,
            numRolesHidden: n,
            roleClassName: l
        } = e, a = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
        return (0, i.jsx)(m.Popout, {
            renderPopout: t => {
                let {
                    position: n
                } = t;
                return (0, i.jsx)(F, {
                    ...e,
                    position: null != n ? n : "top"
                })
            },
            position: "top",
            align: "center",
            children: e => (0, i.jsx)(m.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...e,
                    className: s(D.overflowButton, l),
                    ...a,
                    children: "+".concat(n)
                })
            })
        })
    }

    function H(e) {
        let {
            guild: t,
            user: n,
            handleAddRole: l,
            roleClassName: a
        } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(n.id)), o = (0, f.useStateFromStores)([y.default], () => y.default.roleStyle), u = v.default.getHighestRole(t), c = T.default.getMember(t.id, n.id), p = e => (0, g.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && v.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
        return (0, i.jsx)(m.Popout, {
            renderPopout: e => {
                let {
                    closePopout: n
                } = e;
                return (0, i.jsx)(b.default, {
                    guild: t,
                    roleStyle: o,
                    roleFilter: p,
                    onSelect: l,
                    onClose: n
                })
            },
            position: "bottom",
            align: "center",
            children: e => (0, i.jsx)(m.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...e,
                    className: s(D.addButton, a),
                    "aria-label": U.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: "button",
                    ...r,
                    children: (0, i.jsx)(k.default, {
                        className: D.addButtonIcon,
                        "aria-hidden": !0
                    })
                })
            })
        })
    }

    function V(e) {
        let t;
        let {
            user: n,
            guild: a,
            userRoles: r,
            wrap: c = !0,
            width: p,
            className: m,
            readOnly: h,
            roleClassName: E,
            disableBorderColor: y
        } = e, g = l.useRef({}), S = l.useCallback(e => {
            var t;
            let i = r.filter(t => t !== e.id);
            (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? x.default.unassignGuildRoleConnection(a.id, e.id) : I.default.updateMemberRoles(a.id, n.id, i, [], [e.id])
        }, [r, a.id, n.id]), C = l.useCallback(e => {
            let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), I.default.updateMemberRoles(a.id, n.id, t, [e], [])
        }, [r, a.id, n.id]), [T, A] = l.useState(null), O = (0, f.useStateFromStores)([_.default], () => _.default.getRoles(a.id)), R = l.useMemo(() => {
            let e = Object.values(O).filter(e => r.includes(e.id)).sort((e, t) => {
                var n, i;
                let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    a = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return l && !a ? 1 : !l && a ? -1 : 0
            });
            return null != T ? e.slice(0, T) : e
        }, [O, T, r]), M = r.length - R.length;
        l.useLayoutEffect(() => {
            if (c) return;
            if ("number" != typeof p) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = p - 30 - 4;
            for (let i = 0; i < R.length; i++) {
                let l = R[i],
                    a = g.current[l.id];
                if (null == a) continue;
                let s = a.offsetWidth;
                if ((t += s + 4) > n) break;
                e++
            }
            A(t => e < R.length ? e : t)
        }, [c, p, R]);
        let k = N.default.getCurrentUser();
        o(null != k, "MemberRolesList: currentUser cannot be undefined");
        let L = !h && v.default.can(j.Permissions.MANAGE_ROLES, a),
            b = P.default.getHighestRole(a, k.id),
            F = l.useMemo(() => "roles-".concat((0, u.v4)()), []),
            V = (0, d.default)({
                id: F,
                isEnabled: !0,
                scrollToStart: w,
                scrollToEnd: w,
                wrap: !0
            }),
            K = R.map(e => {
                var t;
                return (0, i.jsx)(B, {
                    className: E,
                    role: e,
                    canRemove: L && P.default.isRoleHigher(a, k.id, b, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === k.id,
                    onRemove: () => S(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? g.current[n] = i : delete g.current[n])
                    },
                    guildId: a.id,
                    disableBorderColor: y
                }, e.id)
            });
        return null != T && 0 !== M ? t = (0, i.jsx)(G, {
            ...e,
            numRolesHidden: M
        }) : L && (t = (0, i.jsx)(H, {
            ...e,
            handleAddRole: C
        })), (0, i.jsx)(d.ListNavigatorProvider, {
            navigator: V,
            children: (0, i.jsx)(d.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        ...l
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: s(D.root, m),
                        "aria-label": U.default.Messages.ROLES_LIST.format({
                            numRoles: r.length
                        }),
                        ref: n,
                        ...l,
                        children: [K, t]
                    })
                }
            })
        })
    }
    let K = (0, E.default)(V);

    function W(e) {
        return (0, f.useStateFromStores)([v.default], () => {
            var t;
            return v.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), !1 === e.wrap ? (0, i.jsx)(K, {
            ...e
        }) : (0, i.jsx)(V, {
            ...e
        })
    }
}