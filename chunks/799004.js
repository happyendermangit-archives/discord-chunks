function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MemberRole: function() {
            return W
        },
        default: function() {
            return Q
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("153832"),
        l = n("762624"),
        c = n("194926"),
        f = n("898511"),
        d = n("447515"),
        _ = n("784184"),
        E = n("549579"),
        p = n("322997"),
        m = n("713339"),
        y = n("622780"),
        I = n("898366"),
        h = n("610577"),
        O = n("493632"),
        T = n("878943"),
        S = n("957808"),
        v = n("306912"),
        g = n("29884"),
        A = n("208454"),
        b = n("143953"),
        N = n("719328"),
        R = n("247164"),
        C = n("639578"),
        P = n("210295"),
        D = n("227051"),
        L = n("359017"),
        M = n("401233"),
        U = n("281767"),
        w = n("941504"),
        k = n("862273");

    function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function B(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function F(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                j(e, t, n[t])
            })
        }
        return e
    }

    function V(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function H(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var x = function() {
        return Promise.resolve()
    };

    function Y(e) {
        var t, n = e.userRoles,
            o = e.position,
            a = H(e, ["userRoles", "position"]),
            u = (0, N.useUID)();
        return r.createElement(_.Dialog, {
            className: i()(k.overflowRolesPopout, (j(t = {}, k.popoutBottom, "bottom" === o), j(t, k.popoutTop, "top" === o), t)),
            "aria-labelledby": u
        }, r.createElement("div", {
            className: k.overflowRolesPopoutArrowWrapper
        }, r.createElement("div", {
            className: k.overflowRolesPopoutArrow
        })), r.createElement(b.default, {
            className: k.overflowRolesPopoutHeader,
            align: b.default.Align.CENTER
        }, r.createElement(C.default, {
            color: d.default.unsafe_rawColors.PRIMARY_400.css,
            className: k.overflowRolesPopoutHeaderIcon
        }), r.createElement("div", {
            className: k.overflowRolesPopoutHeaderText,
            id: u
        }, w.default.Messages.ROLES_LIST.format({
            numRoles: n.length
        }))), r.createElement(X, V(F({}, a), {
            wrap: !0,
            userRoles: n
        })))
    }
    var W = r.forwardRef(function(e, t) {
        var o, a, u, s, p = e.canRemove,
            m = e.className,
            I = e.role,
            T = e.onRemove,
            S = e.guildId,
            v = e.disableBorderColor,
            g = e.onMouseDown,
            A = (0, l.useListItem)(I.id),
            b = A.tabIndex,
            N = H(A, ["tabIndex"]),
            C = (0, O.useRoleIcon)({
                roleId: I.id,
                size: 16,
                guildId: S
            }),
            P = (0, f.useStateFromStores)([y.default], function() {
                return y.default.roleStyle
            }),
            L = (null === (o = I.tags) || void 0 === o ? void 0 : o.guild_connections) === null,
            M = r.useCallback(function(e) {
                var t;
                (0, E.openContextMenuLazy)(e, (t = function() {
                    var e;
                    return function(e, t) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;

                        function u(i) {
                            return function(u) {
                                return function(i) {
                                    if (n) throw TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                            case 0:
                                            case 1:
                                                o = i;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: i[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = i[1], i = [0];
                                                continue;
                                            case 7:
                                                i = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                    a.label = i[1];
                                                    break
                                                }
                                                if (6 === i[0] && a.label < o[1]) {
                                                    a.label = o[1], o = i;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(i);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        i = t.call(e, a)
                                    } catch (e) {
                                        i = [6, e], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & i[0]) throw i[1];
                                    return {
                                        value: i[0] ? i[1] : void 0,
                                        done: !0
                                    }
                                }([i, u])
                            }
                        }
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, n.e("22364").then(n.bind(n, "482267"))];
                            case 1:
                                return e = t.sent().default, [2, function(t) {
                                    return r.createElement(e, V(F({}, t), {
                                        id: I.id,
                                        label: w.default.Messages.COPY_ID_ROLE
                                    }))
                                }]
                        }
                    })
                }, function() {
                    var e = this,
                        n = arguments;
                    return new Promise(function(r, o) {
                        var i = t.apply(e, n);

                        function a(e) {
                            B(i, r, o, a, u, "next", e)
                        }

                        function u(e) {
                            B(i, r, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }))
            }, [I.id]),
            U = (0, _.useToken)(d.default.unsafe_rawColors.PRIMARY_300).hsl(),
            G = null !== (a = I.colorString) && void 0 !== a ? a : U,
            j = null !== (u = (0, c.hex2rgb)(G, .6)) && void 0 !== u ? u : void 0,
            x = d.default.unsafe_rawColors.WHITE_500.css,
            Y = (0, c.hex2int)(G);
        null != Y && .3 > (0, c.getDarkness)(Y) && (x = d.default.unsafe_rawColors.PRIMARY_630.css), s = L ? r.createElement(h.default, {
            className: k.roleFlowerStar,
            iconClassName: p ? k.roleVerifiedIcon : void 0,
            color: G,
            size: 14
        }) : "dot" === P ? r.createElement(_.RoleDot, {
            className: k.roleDot,
            color: G,
            background: !1,
            tooltip: !1
        }) : r.createElement(_.RoleCircle, {
            color: G
        });
        var W = r.useMemo(function() {
            var t;
            return F({
                borderColor: v ? void 0 : j
            }, null !== (t = e.style) && void 0 !== t ? t : {})
        }, [j, v, e.style]);
        return r.createElement(_.FocusRing, null, r.createElement("div", F({
            ref: t,
            className: i()(k.role, m),
            style: W,
            onContextMenu: M,
            onMouseDown: g,
            "aria-label": I.name,
            tabIndex: b
        }, N), r.createElement(_.Clickable, {
            className: k.roleRemoveButton,
            onClick: p ? T : void 0,
            tabIndex: p ? b : -1,
            focusProps: {
                focusClassName: k.roleRemoveIconFocused
            },
            "aria-hidden": !p,
            "aria-label": w.default.Messages.GUILD_SETTINGS_MEMBERS_REMOVE_ROLE.format({
                roleName: I.name
            })
        }, s, p ? r.createElement(R.default, {
            color: x,
            className: k.roleRemoveIcon,
            "aria-hidden": !0
        }) : null), null != C ? r.createElement(D.default, V(F({
            className: k.roleIcon
        }, C), {
            enableTooltip: !1
        })) : null, r.createElement("div", {
            "aria-hidden": !0,
            className: k.roleName
        }, r.createElement(_.Text, {
            variant: "text-xs/medium",
            className: k.roleNameOverflow
        }, I.name))))
    });

    function K(e) {
        var t = e.user,
            n = e.numRolesHidden,
            o = e.roleClassName,
            a = (0, l.useListItem)("overflow-more-roles-".concat(t.id));
        return r.createElement(_.Popout, {
            renderPopout: function(t) {
                var n = t.position;
                return r.createElement(Y, V(F({}, e), {
                    position: null != n ? n : "top"
                }))
            },
            position: "top",
            align: "center"
        }, function(e) {
            return r.createElement(_.FocusRing, null, r.createElement("button", F(V(F({}, e), {
                className: i()(k.overflowButton, o)
            }), a), "+".concat(n)))
        })
    }

    function z(e) {
        var t = e.guild,
            n = e.user,
            o = e.handleAddRole,
            a = e.roleClassName,
            u = (0, l.useListItem)("overflow-add-roles-".concat(n.id)),
            s = (0, f.useStateFromStores)([y.default], function() {
                return y.default.roleStyle
            }),
            c = g.default.getHighestRole(t),
            d = S.default.getMember(t.id, n.id),
            E = function(e) {
                return (0, I.isNotEveryoneRoleId)(t.id, e.id) && !e.managed && g.default.isRoleHigher(t, c, e) && (null == d || -1 === d.roles.indexOf(e.id))
            };
        return r.createElement(_.Popout, {
            renderPopout: function(e) {
                var n = e.closePopout;
                return r.createElement(M.default, {
                    guild: t,
                    roleStyle: s,
                    roleFilter: E,
                    onSelect: o,
                    onClose: n
                })
            },
            position: "bottom",
            align: "center"
        }, function(e) {
            return r.createElement(_.FocusRing, null, r.createElement("button", F(V(F({}, e), {
                className: i()(k.addButton, a),
                "aria-label": w.default.Messages.GUILD_SETTINGS_MEMBERS_ADD_ROLE,
                type: "button"
            }), u), r.createElement(P.default, {
                className: k.addButtonIcon,
                "aria-hidden": !0
            })))
        })
    }

    function X(e) {
        var t, n, o, a = e.user,
            c = e.guild,
            d = e.userRoles,
            _ = e.wrap,
            E = void 0 === _ || _,
            m = e.width,
            y = e.className,
            I = e.readOnly,
            h = e.roleClassName,
            O = e.disableBorderColor,
            S = r.useRef({}),
            b = r.useCallback(function(e) {
                var t, n = d.filter(function(t) {
                    return t !== e.id
                });
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? p.default.unassignGuildRoleConnection(c.id, e.id) : T.default.updateMemberRoles(c.id, a.id, n, [], [e.id])
            }, [d, c.id, a.id]),
            N = r.useCallback(function(e) {
                var t = d; - 1 === t.indexOf(e) && (t = t.concat([e])), T.default.updateMemberRoles(c.id, a.id, t, [e], [])
            }, [d, c.id, a.id]);
        var R = (t = r.useState(null), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            C = R[0],
            P = R[1],
            D = (0, f.useStateFromStores)([v.default], function() {
                return v.default.getRoles(c.id)
            }),
            M = r.useMemo(function() {
                var e = Object.values(D).filter(function(e) {
                    return d.includes(e.id)
                }).sort(function(e, t) {
                    var n, r, o = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
                        i = (null === (r = t.tags) || void 0 === r ? void 0 : r.guild_connections) !== null;
                    return o && !i ? 1 : !o && i ? -1 : 0
                });
                return null != C ? e.slice(0, C) : e
            }, [D, C, d]),
            B = d.length - M.length;
        r.useLayoutEffect(function() {
            if (!E) {
                if ("number" != typeof m) throw Error("Unexpected null width");
                for (var e = 0, t = 0, n = m - 30 - 4, r = 0; r < M.length; r++) {
                    var o = M[r],
                        i = S.current[o.id];
                    if (null != i) {
                        if ((t += i.offsetWidth + 4) > n) break;
                        e++
                    }
                }
                P(function(t) {
                    return e < M.length ? e : t
                })
            }
        }, [E, m, M]);
        var j = A.default.getCurrentUser();
        u()(null != j, "MemberRolesList: currentUser cannot be undefined");
        var Y = !I && g.default.can(U.Permissions.MANAGE_ROLES, c),
            X = L.getHighestRole(c, j.id),
            q = r.useMemo(function() {
                return "roles-".concat((0, s.v4)())
            }, []),
            Q = (0, l.default)({
                id: q,
                isEnabled: !0,
                scrollToStart: x,
                scrollToEnd: x,
                wrap: !0
            }),
            J = M.map(function(e) {
                var t;
                return r.createElement(W, {
                    className: h,
                    role: e,
                    canRemove: Y && L.isRoleHigher(c, j.id, X, e) || (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null && a.id === j.id,
                    onRemove: function() {
                        return b(e)
                    },
                    ref: function(t) {
                        var n, r;
                        return n = e.id, void(null != (r = t) ? S.current[n] = r : delete S.current[n])
                    },
                    key: e.id,
                    guildId: c.id,
                    disableBorderColor: O
                })
            });
        return null != C && 0 !== B ? o = r.createElement(K, V(F({}, e), {
            numRolesHidden: B
        })) : Y && (o = r.createElement(z, V(F({}, e), {
            handleAddRole: N
        }))), r.createElement(l.ListNavigatorProvider, {
            navigator: Q
        }, r.createElement(l.ListNavigatorContainer, null, function(e) {
            var t = e.ref,
                n = H(e, ["ref"]);
            return r.createElement("div", F({
                className: i()(k.root, y),
                "aria-label": w.default.Messages.ROLES_LIST.format({
                    numRoles: d.length
                }),
                ref: t
            }, n), J, o)
        }))
    }
    var q = (0, m.default)(X);

    function Q(e) {
        return (0, f.useStateFromStores)([g.default], function() {
            var t;
            return g.default.getGuildVersion(null === (t = e.guild) || void 0 === t ? void 0 : t.id)
        }), !1 === e.wrap ? r.createElement(q, e) : r.createElement(X, e)
    }
}