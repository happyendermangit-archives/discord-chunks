function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MemberRole: function() {
            return x
        },
        OverflowAddRolesButton: function() {
            return H
        },
        default: function() {
            return W
        }
    }), n("47120"), n("411104");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("512722"),
        l = n.n(o),
        u = n("153832"),
        d = n("924826"),
        _ = n("866442"),
        c = n("442837"),
        E = n("692547"),
        I = n("481060"),
        T = n("239091"),
        f = n("749210"),
        S = n("112724"),
        h = n("607070"),
        A = n("605436"),
        m = n("134433"),
        N = n("518738"),
        p = n("434404"),
        O = n("271383"),
        R = n("430824"),
        C = n("496675"),
        g = n("594174"),
        L = n("285952"),
        v = n("153124"),
        D = n("465670"),
        M = n("795295"),
        y = n("729285"),
        P = n("176278"),
        U = n("700785"),
        b = n("944613"),
        G = n("981631"),
        w = n("689938"),
        B = n("48125");
    let k = () => Promise.resolve();

    function V(e) {
        let {
            userRoles: t,
            position: n,
            ...r
        } = e, a = (0, v.useUID)();
        return (0, i.jsxs)(I.Dialog, {
            className: s()(B.overflowRolesPopout, {
                [B.popoutBottom]: "bottom" === n,
                [B.popoutTop]: "top" === n
            }),
            "aria-labelledby": a,
            children: [(0, i.jsx)("div", {
                className: B.overflowRolesPopoutArrowWrapper,
                children: (0, i.jsx)("div", {
                    className: B.overflowRolesPopoutArrow
                })
            }), (0, i.jsxs)(L.default, {
                className: B.overflowRolesPopoutHeader,
                align: L.default.Align.CENTER,
                children: [(0, i.jsx)(M.default, {
                    color: E.default.unsafe_rawColors.PRIMARY_400.css,
                    className: B.overflowRolesPopoutHeaderIcon
                }), (0, i.jsx)("div", {
                    className: B.overflowRolesPopoutHeaderText,
                    id: a,
                    children: w.default.Messages.ROLES_LIST.format({
                        numRoles: t.length
                    })
                })]
            }), (0, i.jsx)(Y, {
                ...r,
                wrap: !0,
                userRoles: t
            })]
        })
    }
    let x = r.forwardRef(function(e, t) {
        var a, o, l;
        let u;
        let {
            canRemove: f,
            className: S,
            role: A,
            onRemove: p,
            guildId: O,
            disableBorderColor: R,
            onMouseDown: C
        } = e, {
            tabIndex: g,
            ...L
        } = (0, d.useListItem)(A.id), v = (0, N.useRoleIcon)({
            roleId: A.id,
            size: 16,
            guildId: O
        }), M = (0, c.useStateFromStores)([h.default], () => h.default.roleStyle), y = (null === (a = A.tags) || void 0 === a ? void 0 : a.guild_connections) === null, U = r.useCallback(e => {
            (0, T.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("5396").then(n.bind(n, "731646"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    id: A.id,
                    label: w.default.Messages.COPY_ID_ROLE
                })
            })
        }, [A.id]), b = (0, I.useToken)(E.default.unsafe_rawColors.PRIMARY_300).hsl(), G = null !== (o = A.colorString) && void 0 !== o ? o : b, k = null !== (l = (0, _.hex2rgb)(G, .6)) && void 0 !== l ? l : void 0, V = E.default.unsafe_rawColors.WHITE_500.css, x = (0, _.hex2int)(G);
        null != x && .3 > (0, _.getDarkness)(x) && (V = E.default.unsafe_rawColors.PRIMARY_630.css), u = y ? (0, i.jsx)(m.default, {
            className: B.roleFlowerStar,
            iconClassName: f ? B.roleVerifiedIcon : void 0,
            color: G,
            size: 14
        }) : "dot" === M ? (0, i.jsx)(I.RoleDot, {
            className: B.roleDot,
            color: G,
            background: !1,
            tooltip: !1
        }) : (0, i.jsx)(I.RoleCircle, {
            color: G
        });
        let F = r.useMemo(() => {
            var t;
            return {
                borderColor: R ? void 0 : k,
                ...null !== (t = e.style) && void 0 !== t ? t : {}
            }
        }, [k, R, e.style]);
        return (0, i.jsx)(I.FocusRing, {
            children: (0, i.jsxs)("div", {
                ref: t,
                className: s()(B.role, S),
                style: F,
                onContextMenu: U,
                onMouseDown: C,
                "aria-label": A.name,
                tabIndex: g,
                ...L,
                children: [(0, i.jsxs)(I.Clickable, {
                    className: B.roleRemoveButton,
                    onClick: f ? p : void 0,
                    tabIndex: f ? g : -1,
                    focusProps: {
                        focusClassName: B.roleRemoveIconFocused
                    },
                    "aria-hidden": !f,
                    "aria-label": w.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                        roleName: A.name
                    }),
                    children: [u, f ? (0, i.jsx)(D.default, {
                        color: V,
                        className: B.roleRemoveIcon,
                        "aria-hidden": !0
                    }) : null]
                }), null != v ? (0, i.jsx)(P.default, {
                    className: B.roleIcon,
                    ...v,
                    enableTooltip: !1
                }) : null, (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: B.roleName,
                    children: (0, i.jsx)(I.Text, {
                        variant: "text-xs/medium",
                        className: B.roleNameOverflow,
                        children: A.name
                    })
                })]
            })
        })
    });

    function F(e) {
        let {
            user: t,
            numRolesHidden: n,
            roleClassName: r
        } = e, a = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
        return (0, i.jsx)(I.Popout, {
            renderPopout: t => {
                let {
                    position: n
                } = t;
                return (0, i.jsx)(V, {
                    ...e,
                    position: null != n ? n : "top"
                })
            },
            position: "top",
            align: "center",
            children: e => (0, i.jsx)(I.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...e,
                    className: s()(B.overflowButton, r),
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
            handleAddRole: r,
            roleClassName: a,
            addButtonClassName: o,
            addButtonIconClassName: l
        } = e, u = (0, d.useListItem)("overflow-add-roles-".concat(n.id)), _ = (0, c.useStateFromStores)([h.default], () => h.default.roleStyle), E = C.default.getHighestRole(t), T = O.default.getMember(t.id, n.id), f = e => (0, A.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && C.default.isRoleHigher(t, E, e) && (null == T || -1 === T.roles.indexOf(e.id));
        return (0, i.jsx)(I.Popout, {
            renderPopout: e => {
                let {
                    closePopout: n
                } = e;
                return (0, i.jsx)(b.default, {
                    guild: t,
                    roleStyle: _,
                    roleFilter: f,
                    onSelect: r,
                    onClose: n
                })
            },
            position: "bottom",
            align: "center",
            children: e => (0, i.jsx)(I.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...e,
                    className: s()(B.addButton, a, o),
                    "aria-label": w.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: "button",
                    ...u,
                    children: (0, i.jsx)(y.default, {
                        className: s()(B.addButtonIcon, l),
                        "aria-hidden": !0
                    })
                })
            })
        })
    }

    function Y(e) {
        let t;
        let {
            user: n,
            guild: a,
            userRoles: o,
            wrap: _ = !0,
            width: E,
            className: I,
            readOnly: T,
            roleClassName: S,
            disableBorderColor: h
        } = e, A = r.useRef({}), m = r.useCallback(e => {
            var t;
            let i = o.filter(t => t !== e.id);
            (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? f.default.unassignGuildRoleConnection(a.id, e.id) : p.default.updateMemberRoles(a.id, n.id, i, [], [e.id])
        }, [o, a.id, n.id]), N = r.useCallback(e => {
            let t = o; - 1 === t.indexOf(e) && (t = t.concat([e])), p.default.updateMemberRoles(a.id, n.id, t, [e], [])
        }, [o, a.id, n.id]), [O, L] = r.useState(null), v = (0, c.useStateFromStores)([R.default], () => R.default.getRoles(a.id)), D = r.useMemo(() => {
            let e = Object.values(v).filter(e => o.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    a = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !a ? 1 : !r && a ? -1 : 0
            });
            return null != O ? e.slice(0, O) : e
        }, [v, O, o]), M = o.length - D.length;
        r.useLayoutEffect(() => {
            if (_) return;
            if ("number" != typeof E) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = E - 30 - 4;
            for (let i = 0; i < D.length; i++) {
                let r = D[i],
                    a = A.current[r.id];
                if (null != a) {
                    if ((t += a.offsetWidth + 4) > n) break;
                    e++
                }
            }
            L(t => e < D.length ? e : t)
        }, [_, E, D]);
        let y = g.default.getCurrentUser();
        l()(null != y, "MemberRolesList: currentUser cannot be undefined");
        let P = !T && C.default.can(G.Permissions.MANAGE_ROLES, a),
            b = U.getHighestRole(a, y.id),
            V = r.useMemo(() => "roles-".concat((0, u.v4)()), []),
            Y = (0, d.default)({
                id: V,
                isEnabled: !0,
                scrollToStart: k,
                scrollToEnd: k,
                wrap: !0
            }),
            j = D.map(e => {
                var t;
                return (0, i.jsx)(x, {
                    className: S,
                    role: e,
                    canRemove: P && U.isRoleHigher(a, y.id, b, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === y.id,
                    onRemove: () => m(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? A.current[n] = i : delete A.current[n])
                    },
                    guildId: a.id,
                    disableBorderColor: h
                }, e.id)
            });
        return null != O && 0 !== M ? t = (0, i.jsx)(F, {
            ...e,
            numRolesHidden: M
        }) : P && (t = (0, i.jsx)(H, {
            ...e,
            handleAddRole: N
        })), (0, i.jsx)(d.ListNavigatorProvider, {
            navigator: Y,
            children: (0, i.jsx)(d.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        ...r
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: s()(B.root, I),
                        "aria-label": w.default.Messages.ROLES_LIST.format({
                            numRoles: o.length
                        }),
                        ref: n,
                        ...r,
                        children: [j, t]
                    })
                }
            })
        })
    }
    let j = (0, S.default)(Y);

    function W(e) {
        return (0, c.useStateFromStores)([C.default], () => {
            var t;
            return C.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), !1 === e.wrap ? (0, i.jsx)(j, {
            ...e
        }) : (0, i.jsx)(Y, {
            ...e
        })
    }
}