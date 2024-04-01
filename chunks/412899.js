function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MemberRole: function() {
            return F
        },
        default: function() {
            return W
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
        _ = n("866442"),
        c = n("442837"),
        E = n("692547"),
        I = n("481060"),
        T = n("239091"),
        f = n("749210"),
        S = n("112724"),
        A = n("607070"),
        h = n("605436"),
        m = n("134433"),
        N = n("518738"),
        O = n("434404"),
        p = n("271383"),
        R = n("430824"),
        C = n("496675"),
        g = n("594174"),
        L = n("285952"),
        D = n("153124"),
        v = n("465670"),
        M = n("795295"),
        y = n("729285"),
        P = n("176278"),
        U = n("700785"),
        b = n("944613"),
        G = n("981631"),
        w = n("689938"),
        B = n("862273");
    let k = () => Promise.resolve();

    function V(e) {
        let {
            userRoles: t,
            position: n,
            ...r
        } = e, s = (0, D.useUID)();
        return (0, i.jsxs)(I.Dialog, {
            className: a()(B.overflowRolesPopout, {
                [B.popoutBottom]: "bottom" === n,
                [B.popoutTop]: "top" === n
            }),
            "aria-labelledby": s,
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
                    id: s,
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
    let F = r.forwardRef(function(e, t) {
        var s, o, l;
        let u;
        let {
            canRemove: f,
            className: S,
            role: h,
            onRemove: O,
            guildId: p,
            disableBorderColor: R,
            onMouseDown: C
        } = e, {
            tabIndex: g,
            ...L
        } = (0, d.useListItem)(h.id), D = (0, N.useRoleIcon)({
            roleId: h.id,
            size: 16,
            guildId: p
        }), M = (0, c.useStateFromStores)([A.default], () => A.default.roleStyle), y = (null === (s = h.tags) || void 0 === s ? void 0 : s.guild_connections) === null, U = r.useCallback(e => {
            (0, T.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.e("5396").then(n.bind(n, "731646"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    id: h.id,
                    label: w.default.Messages.COPY_ID_ROLE
                })
            })
        }, [h.id]), b = (0, I.useToken)(E.default.unsafe_rawColors.PRIMARY_300).hsl(), G = null !== (o = h.colorString) && void 0 !== o ? o : b, k = null !== (l = (0, _.hex2rgb)(G, .6)) && void 0 !== l ? l : void 0, V = E.default.unsafe_rawColors.WHITE_500.css, F = (0, _.hex2int)(G);
        null != F && .3 > (0, _.getDarkness)(F) && (V = E.default.unsafe_rawColors.PRIMARY_630.css), u = y ? (0, i.jsx)(m.default, {
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
        let x = r.useMemo(() => {
            var t;
            return {
                borderColor: R ? void 0 : k,
                ...null !== (t = e.style) && void 0 !== t ? t : {}
            }
        }, [k, R, e.style]);
        return (0, i.jsx)(I.FocusRing, {
            children: (0, i.jsxs)("div", {
                ref: t,
                className: a()(B.role, S),
                style: x,
                onContextMenu: U,
                onMouseDown: C,
                "aria-label": h.name,
                tabIndex: g,
                ...L,
                children: [(0, i.jsxs)(I.Clickable, {
                    className: B.roleRemoveButton,
                    onClick: f ? O : void 0,
                    tabIndex: f ? g : -1,
                    focusProps: {
                        focusClassName: B.roleRemoveIconFocused
                    },
                    "aria-hidden": !f,
                    "aria-label": w.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                        roleName: h.name
                    }),
                    children: [u, f ? (0, i.jsx)(v.default, {
                        color: V,
                        className: B.roleRemoveIcon,
                        "aria-hidden": !0
                    }) : null]
                }), null != D ? (0, i.jsx)(P.default, {
                    className: B.roleIcon,
                    ...D,
                    enableTooltip: !1
                }) : null, (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: B.roleName,
                    children: (0, i.jsx)(I.Text, {
                        variant: "text-xs/medium",
                        className: B.roleNameOverflow,
                        children: h.name
                    })
                })]
            })
        })
    });

    function x(e) {
        let {
            user: t,
            numRolesHidden: n,
            roleClassName: r
        } = e, s = (0, d.useListItem)("overflow-more-roles-".concat(t.id));
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
                    className: a()(B.overflowButton, r),
                    ...s,
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
            roleClassName: s
        } = e, o = (0, d.useListItem)("overflow-add-roles-".concat(n.id)), l = (0, c.useStateFromStores)([A.default], () => A.default.roleStyle), u = C.default.getHighestRole(t), _ = p.default.getMember(t.id, n.id), E = e => (0, h.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && C.default.isRoleHigher(t, u, e) && (null == _ || -1 === _.roles.indexOf(e.id));
        return (0, i.jsx)(I.Popout, {
            renderPopout: e => {
                let {
                    closePopout: n
                } = e;
                return (0, i.jsx)(b.default, {
                    guild: t,
                    roleStyle: l,
                    roleFilter: E,
                    onSelect: r,
                    onClose: n
                })
            },
            position: "bottom",
            align: "center",
            children: e => (0, i.jsx)(I.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...e,
                    className: a()(B.addButton, s),
                    "aria-label": w.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: "button",
                    ...o,
                    children: (0, i.jsx)(y.default, {
                        className: B.addButtonIcon,
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
            guild: s,
            userRoles: o,
            wrap: _ = !0,
            width: E,
            className: I,
            readOnly: T,
            roleClassName: S,
            disableBorderColor: A
        } = e, h = r.useRef({}), m = r.useCallback(e => {
            var t;
            let i = o.filter(t => t !== e.id);
            (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? f.default.unassignGuildRoleConnection(s.id, e.id) : O.default.updateMemberRoles(s.id, n.id, i, [], [e.id])
        }, [o, s.id, n.id]), N = r.useCallback(e => {
            let t = o; - 1 === t.indexOf(e) && (t = t.concat([e])), O.default.updateMemberRoles(s.id, n.id, t, [e], [])
        }, [o, s.id, n.id]), [p, L] = r.useState(null), D = (0, c.useStateFromStores)([R.default], () => R.default.getRoles(s.id)), v = r.useMemo(() => {
            let e = Object.values(D).filter(e => o.includes(e.id)).sort((e, t) => {
                var n, i;
                let r = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    s = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return r && !s ? 1 : !r && s ? -1 : 0
            });
            return null != p ? e.slice(0, p) : e
        }, [D, p, o]), M = o.length - v.length;
        r.useLayoutEffect(() => {
            if (_) return;
            if ("number" != typeof E) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = E - 30 - 4;
            for (let i = 0; i < v.length; i++) {
                let r = v[i],
                    s = h.current[r.id];
                if (null != s) {
                    if ((t += s.offsetWidth + 4) > n) break;
                    e++
                }
            }
            L(t => e < v.length ? e : t)
        }, [_, E, v]);
        let y = g.default.getCurrentUser();
        l()(null != y, "MemberRolesList: currentUser cannot be undefined");
        let P = !T && C.default.can(G.Permissions.MANAGE_ROLES, s),
            b = U.getHighestRole(s, y.id),
            V = r.useMemo(() => "roles-".concat((0, u.v4)()), []),
            Y = (0, d.default)({
                id: V,
                isEnabled: !0,
                scrollToStart: k,
                scrollToEnd: k,
                wrap: !0
            }),
            j = v.map(e => {
                var t;
                return (0, i.jsx)(F, {
                    className: S,
                    role: e,
                    canRemove: P && U.isRoleHigher(s, y.id, b, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === y.id,
                    onRemove: () => m(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? h.current[n] = i : delete h.current[n])
                    },
                    guildId: s.id,
                    disableBorderColor: A
                }, e.id)
            });
        return null != p && 0 !== M ? t = (0, i.jsx)(x, {
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
                        className: a()(B.root, I),
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