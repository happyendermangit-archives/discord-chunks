function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MemberRole: function() {
            return F
        },
        default: function() {
            return K
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
        _ = n("957255"),
        v = n("697218"),
        N = n("145131"),
        A = n("476765"),
        O = n("945330"),
        k = n("907566"),
        M = n("151185"),
        R = n("483093"),
        L = n("991170"),
        b = n("487311"),
        P = n("49111"),
        j = n("782340"),
        U = n("556248");
    let D = () => Promise.resolve();

    function w(e) {
        let {
            userRoles: t,
            position: n,
            ...l
        } = e, a = (0, A.useUID)();
        return (0, i.jsxs)(m.Dialog, {
            className: s(U.overflowRolesPopout, {
                [U.popoutBottom]: "bottom" === n,
                [U.popoutTop]: "top" === n
            }),
            "aria-labelledby": a,
            children: [(0, i.jsx)("div", {
                className: U.overflowRolesPopoutArrowWrapper,
                children: (0, i.jsx)("div", {
                    className: U.overflowRolesPopoutArrow
                })
            }), (0, i.jsxs)(N.default, {
                className: U.overflowRolesPopoutHeader,
                align: N.default.Align.CENTER,
                children: [(0, i.jsx)(k.default, {
                    color: p.default.unsafe_rawColors.PRIMARY_400.css,
                    className: U.overflowRolesPopoutHeaderIcon
                }), (0, i.jsx)("div", {
                    className: U.overflowRolesPopoutHeaderText,
                    id: a,
                    children: j.default.Messages.ROLES_LIST.format({
                        numRoles: t.length
                    })
                })]
            }), (0, i.jsx)(H, {
                ...l,
                wrap: !0,
                userRoles: t
            })]
        })
    }
    let F = l.forwardRef(function(e, t) {
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
        } = (0, d.useListItem)(g.id), k = (0, C.useRoleIcon)({
            roleId: g.id,
            size: 16,
            guildId: T
        }), M = (0, f.useStateFromStores)([y.default], () => y.default.roleStyle), L = (null === (a = g.tags) || void 0 === a ? void 0 : a.guild_connections) === null, b = l.useCallback(e => {
            (0, h.openContextMenuLazy)(e, async () => {
                let {
                    default: e
                } = await n.el("443070").then(n.bind(n, "443070"));
                return t => (0, i.jsx)(e, {
                    ...t,
                    id: g.id,
                    label: j.default.Messages.COPY_ID_ROLE
                })
            })
        }, [g.id]), P = (0, m.useToken)(p.default.unsafe_rawColors.PRIMARY_300).hsl(), D = null !== (r = g.colorString) && void 0 !== r ? r : P, w = null !== (o = (0, c.hex2rgb)(D, .6)) && void 0 !== o ? o : void 0, F = p.default.unsafe_rawColors.WHITE_500.css, B = (0, c.hex2int)(D);
        null != B && .3 > (0, c.getDarkness)(B) && (F = p.default.unsafe_rawColors.PRIMARY_630.css), u = L ? (0, i.jsx)(S.default, {
            className: U.roleFlowerStar,
            iconClassName: x ? U.roleVerifiedIcon : void 0,
            color: D,
            size: 14
        }) : "dot" === M ? (0, i.jsx)(m.RoleDot, {
            className: U.roleDot,
            color: D,
            background: !1,
            tooltip: !1
        }) : (0, i.jsx)(m.RoleCircle, {
            color: D
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
                className: s(U.role, E),
                style: G,
                onContextMenu: b,
                onMouseDown: v,
                "aria-label": g.name,
                tabIndex: N,
                ...A,
                children: [(0, i.jsxs)(m.Clickable, {
                    className: U.roleRemoveButton,
                    onClick: x ? I : void 0,
                    tabIndex: x ? N : -1,
                    focusProps: {
                        focusClassName: U.roleRemoveIconFocused
                    },
                    "aria-hidden": !x,
                    "aria-label": j.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                        roleName: g.name
                    }),
                    children: [u, x ? (0, i.jsx)(O.default, {
                        color: F,
                        className: U.roleRemoveIcon,
                        "aria-hidden": !0
                    }) : null]
                }), null != k ? (0, i.jsx)(R.default, {
                    className: U.roleIcon,
                    ...k,
                    enableTooltip: !1
                }) : null, (0, i.jsx)("div", {
                    "aria-hidden": !0,
                    className: U.roleName,
                    children: (0, i.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        className: U.roleNameOverflow,
                        children: g.name
                    })
                })]
            })
        })
    });

    function B(e) {
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
                return (0, i.jsx)(w, {
                    ...e,
                    position: null != n ? n : "top"
                })
            },
            position: "top",
            align: "center",
            children: e => (0, i.jsx)(m.FocusRing, {
                children: (0, i.jsx)("button", {
                    ...e,
                    className: s(U.overflowButton, l),
                    ...a,
                    children: "+".concat(n)
                })
            })
        })
    }

    function G(e) {
        let {
            guild: t,
            user: n,
            handleAddRole: l,
            roleClassName: a
        } = e, r = (0, d.useListItem)("overflow-add-roles-".concat(n.id)), o = (0, f.useStateFromStores)([y.default], () => y.default.roleStyle), u = _.default.getHighestRole(t), c = T.default.getMember(t.id, n.id), p = e => (0, g.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && _.default.isRoleHigher(t, u, e) && (null == c || -1 === c.roles.indexOf(e.id));
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
                    className: s(U.addButton, a),
                    "aria-label": j.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                    type: "button",
                    ...r,
                    children: (0, i.jsx)(M.default, {
                        className: U.addButtonIcon,
                        "aria-hidden": !0
                    })
                })
            })
        })
    }

    function H(e) {
        let t;
        let {
            user: n,
            guild: a,
            userRoles: r,
            wrap: c = !0,
            width: f,
            className: p,
            readOnly: m,
            roleClassName: h,
            disableBorderColor: E
        } = e, y = l.useRef({}), g = l.useCallback(e => {
            var t;
            let i = r.filter(t => t !== e.id);
            (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? x.default.unassignGuildRoleConnection(a.id, e.id) : I.default.updateMemberRoles(a.id, n.id, i, [], [e.id])
        }, [r, a.id, n.id]), S = l.useCallback(e => {
            let t = r; - 1 === t.indexOf(e) && (t = t.concat([e])), I.default.updateMemberRoles(a.id, n.id, t, [e], [])
        }, [r, a.id, n.id]), [C, T] = l.useState(null), N = l.useMemo(() => {
            let e = Object.values(a.roles).filter(e => r.includes(e.id)).sort((e, t) => {
                var n, i;
                let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                    a = (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                return l && !a ? 1 : !l && a ? -1 : 0
            });
            return null != C ? e.slice(0, C) : e
        }, [a.roles, C, r]), A = r.length - N.length;
        l.useLayoutEffect(() => {
            if (c) return;
            if ("number" != typeof f) throw Error("Unexpected null width");
            let e = 0,
                t = 0,
                n = f - 30 - 4;
            for (let i = 0; i < N.length; i++) {
                let l = N[i],
                    a = y.current[l.id];
                if (null == a) continue;
                let s = a.offsetWidth;
                if ((t += s + 4) > n) break;
                e++
            }
            T(t => e < N.length ? e : t)
        }, [c, f, N]);
        let O = v.default.getCurrentUser();
        o(null != O, "MemberRolesList: currentUser cannot be undefined");
        let k = !m && _.default.can(P.Permissions.MANAGE_ROLES, a),
            M = L.default.getHighestRole(a, O.id),
            R = l.useMemo(() => "roles-".concat((0, u.v4)()), []),
            b = (0, d.default)({
                id: R,
                isEnabled: !0,
                scrollToStart: D,
                scrollToEnd: D,
                wrap: !0
            }),
            w = N.map(e => {
                var t;
                return (0, i.jsx)(F, {
                    className: h,
                    role: e,
                    canRemove: k && L.default.isRoleHigher(a, O.id, M, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && n.id === O.id,
                    onRemove: () => g(e),
                    ref: t => {
                        var n, i;
                        return n = e.id, void(null != (i = t) ? y.current[n] = i : delete y.current[n])
                    },
                    guildId: a.id,
                    disableBorderColor: E
                }, e.id)
            });
        return null != C && 0 !== A ? t = (0, i.jsx)(B, {
            ...e,
            numRolesHidden: A
        }) : k && (t = (0, i.jsx)(G, {
            ...e,
            handleAddRole: S
        })), (0, i.jsx)(d.ListNavigatorProvider, {
            navigator: b,
            children: (0, i.jsx)(d.ListNavigatorContainer, {
                children: e => {
                    let {
                        ref: n,
                        ...l
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: s(U.root, p),
                        "aria-label": j.default.Messages.ROLES_LIST.format({
                            numRoles: r.length
                        }),
                        ref: n,
                        ...l,
                        children: [w, t]
                    })
                }
            })
        })
    }
    let V = (0, E.default)(H);

    function K(e) {
        return (0, f.useStateFromStores)([_.default], () => {
            var t;
            return _.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), !1 === e.wrap ? (0, i.jsx)(V, {
            ...e
        }) : (0, i.jsx)(H, {
            ...e
        })
    }
}