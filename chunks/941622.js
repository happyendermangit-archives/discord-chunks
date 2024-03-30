function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Select: function() {
            return j
        },
        SingleSelect: function() {
            return H
        },
        multiSelect: function() {
            return U
        },
        singleSelect: function() {
            return k
        },
        toggleSelect: function() {
            return w
        },
        useMultiSelectState: function() {
            return L
        },
        useSingleSelectState: function() {
            return D
        },
        useVariableSelect: function() {
            return M
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("762624"),
        u = n("324377"),
        s = n("979820"),
        l = n("726712"),
        c = n("882393"),
        f = n("784184"),
        d = n("675865"),
        _ = n("629630"),
        E = n("708438"),
        p = n("527020"),
        m = n("811070"),
        y = n("943273"),
        I = n("247164"),
        h = n("587844"),
        O = n("941504"),
        T = n("60772");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    v(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    v(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                A(e, t, n[t])
            })
        }
        return e
    }

    function N(e, t) {
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

    function R(e, t) {
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

    function C(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return S(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function P(e, t) {
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
    }

    function D(e) {
        var t = e.value,
            n = e.onChange,
            r = e.serialize;
        return {
            select: function(e) {
                return n(e)
            },
            isSelected: function(e) {
                return e === t
            },
            clear: function() {
                return n(null)
            },
            serialize: void 0 === r ? function(e) {
                return String(e)
            } : r
        }
    }

    function L(e) {
        var t = e.value,
            n = e.onChange,
            r = e.serialize;
        return {
            select: function(e) {
                var r = new Set(t);
                r.has(e) ? r.delete(e) : r.add(e), n(r)
            },
            isSelected: function(e) {
                var n;
                return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
            },
            clear: function() {
                return n(new Set)
            },
            serialize: void 0 === r ? function(e) {
                return String(e)
            } : r
        }
    }

    function M(e) {
        var t = e.value,
            n = e.onChange,
            r = e.onSelectInteraction,
            o = e.serialize;
        return {
            select: function(e) {
                var o = r(e, t),
                    i = o.newValues;
                o.updated && n(i)
            },
            isSelected: function(e) {
                var n;
                return null !== (n = null == t ? void 0 : t.has(e)) && void 0 !== n && n
            },
            clear: function() {
                return n(new Set)
            },
            serialize: void 0 === o ? function(e) {
                return String(e)
            } : o
        }
    }

    function U(e, t) {
        var n = new Set(t);
        return n.has(e) ? n.delete(e) : n.add(e), {
            newValues: n,
            updated: !0
        }
    }

    function w(e, t) {
        return t.has(e) ? {
            newValues: new Set,
            updated: !0
        } : {
            newValues: new Set([e]),
            updated: !0
        }
    }

    function k(e, t) {
        return t.has(e) ? {
            newValues: t,
            updated: !1
        } : {
            newValues: new Set([e]),
            updated: !0
        }
    }

    function G(e) {
        return null == e ? void 0 : e.label
    }

    function B(e) {
        return e.map(function(e) {
            return G(e)
        }).join(", ")
    }

    function j(e) {
        var t = e.options,
            n = e.placeholder,
            o = void 0 === n ? O.default.Messages.SELECT : n,
            a = e.className,
            s = e.isDisabled,
            c = void 0 !== s && s,
            E = e.maxVisibleItems,
            y = void 0 === E ? 7 : E,
            S = e.autoFocus,
            v = void 0 !== S && S,
            g = e.popoutWidth,
            P = e.clearable,
            D = void 0 !== P && P,
            L = e.look,
            M = void 0 === L ? h.SelectLooks.FILLED : L,
            U = e.onClose,
            w = e.onOpen,
            k = e.renderOptionLabel,
            j = void 0 === k ? G : k,
            V = e.renderOptionValue,
            H = void 0 === V ? B : V,
            x = e.popoutClassName,
            Y = e.popoutPosition,
            W = e.popoutLayerContext,
            K = e.optionClassName,
            z = e.closeOnSelect,
            X = e.select,
            q = e.isSelected,
            Q = e.serialize,
            J = e.clear,
            Z = e.hideIcon,
            $ = void 0 !== Z && Z,
            ee = e["aria-label"],
            et = e["aria-labelledby"],
            en = C(r.useState(!1), 2),
            er = en[0],
            eo = en[1],
            ei = (0, d.default)(),
            ea = ei.ref,
            eu = ei.width,
            es = ei.height,
            el = r.useCallback(function(e) {
                er !== e && !c && (eo(e), e ? null == w || w() : null == U || U())
            }, [c, U, w, er]),
            ec = r.useCallback(function(e) {
                er && !e && el(!1)
            }, [el, er]),
            ef = (0, _.useIsVisible)(ec),
            ed = r.useCallback(function(e) {
                if (X(e), z) {
                    var t;
                    null === (t = ea.current) || void 0 === t || t.focus()
                }
            }, [X, z]),
            e_ = r.useCallback(function(e) {
                e.stopPropagation(), null == J || J()
            }, [J]),
            eE = t.filter(function(e) {
                return q(e.value)
            });
        r.useLayoutEffect(function() {
            if (v) {
                var e;
                null === (e = ea.current) || void 0 === e || e.focus()
            }
        }, [v]);
        var ep = (0, f.useRedesignIconContext)().enabled;
        return r.createElement(l.Popout, {
            spacing: 0,
            animation: l.Popout.Animation.NONE,
            shouldShow: er,
            onRequestOpen: function() {
                el(!0)
            },
            onRequestClose: function() {
                el(!1)
            },
            renderPopout: function(e) {
                var n = e.closePopout,
                    o = e.position,
                    i = e.updatePosition;
                return r.createElement(F, {
                    className: x,
                    closeOnSelect: z,
                    maxVisibleItems: y,
                    width: null != g ? g : eu,
                    isSelected: q,
                    closePopout: n,
                    buttonHeight: null != es ? es : 0,
                    onSelect: ed,
                    options: t,
                    serialize: Q,
                    renderOptionLabel: j,
                    optionClassName: K,
                    updatePosition: i,
                    popoutPosition: o
                })
            },
            position: void 0 === Y ? "bottom" : Y,
            layerContext: W
        }, function(e, t) {
            var n, s = e.onClick,
                l = e.onKeyDown,
                f = R(e, ["onClick", "onKeyDown"]),
                d = t.isShown,
                _ = t.position,
                E = d ? m.default : p.default,
                y = ep ? 18 : 24;
            return r.createElement(u.Clickable, N(b({
                role: "button",
                "aria-disabled": c,
                innerRef: function(e) {
                    ea.current = e, ef.current = e
                },
                onClick: c ? void 0 : function(e) {
                    s(e), el(!er)
                },
                onKeyDown: function(e) {
                    "ArrowDown" === e.key ? el(!0) : "Escape" === e.key && (e.stopPropagation(), el(!1)), l(e)
                }
            }, f), {
                className: i()(T.select, a, (A(n = {}, T.open, d), A(n, T.disabled, c), A(n, T.selectPositionTop, "top" === _), A(n, T.lookFilled, M === h.SelectLooks.FILLED), n)),
                "aria-haspopup": "listbox",
                "aria-expanded": d,
                "aria-label": ee,
                "aria-labelledby": et
            }), eE.length > 0 ? r.createElement("span", {
                className: T.value
            }, H(eE)) : r.createElement("span", {
                className: T.placeholder
            }, o), r.createElement("div", {
                className: T.icons
            }, D ? r.createElement(u.Clickable, {
                role: "button",
                "aria-disabled": c,
                onClick: e_,
                "aria-label": O.default.Messages.CLEAR
            }, r.createElement(I.default, {
                width: 16,
                height: 16,
                className: T.clear
            })) : null, $ ? null : r.createElement(E, {
                width: y,
                height: y
            })))
        })
    }

    function F(e) {
        var t = e.className,
            n = e.onSelect,
            o = e.closePopout,
            u = e.closeOnSelect,
            l = void 0 === u || u,
            f = e.isSelected,
            d = e.options,
            _ = e.width,
            p = e.maxVisibleItems,
            m = e.renderOptionLabel,
            y = e.serialize,
            I = e.optionClassName,
            h = e.buttonHeight,
            O = e.updatePosition,
            S = e.popoutPosition,
            v = C(r.useState(0), 2),
            D = v[0],
            L = v[1],
            M = r.useRef(null),
            U = r.useId(),
            w = (0, a.default)({
                id: U,
                scrollToEnd: function() {
                    return g(function() {
                        return P(this, function(e) {
                            return [2]
                        })
                    })()
                },
                scrollToStart: function() {
                    return g(function() {
                        return P(this, function(e) {
                            return [2]
                        })
                    })()
                },
                isEnabled: !0,
                wrap: !0
            }),
            k = r.useRef(null);
        (0, s.useFocusLock)(k), r.useLayoutEffect(function() {
            var e;
            null === (e = k.current) || void 0 === e || e.focus()
        }, []), r.useEffect(function() {
            h > 0 && O()
        }, [h, O]), (0, E.default)(O), r.useLayoutEffect(function() {
            var e, t, n = null === (t = M.current) || void 0 === t ? void 0 : null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.height;
            null != n && L(n)
        }, [p]), r.useEffect(function() {
            O()
        }, [O, D]);
        var G = r.useCallback(function(e) {
                n(e), l && o()
            }, [o, n, l]),
            B = d.map(function(e, t) {
                var n;
                return r.createElement(V, {
                    isSelected: f(e.value),
                    key: null !== (n = e.key) && void 0 !== n ? n : t,
                    value: e.value,
                    label: m(e),
                    onSelect: G,
                    className: I,
                    isDisabled: e.disabled,
                    serialize: y
                })
            }),
            j = d.length <= p ? c.AdvancedScrollerNone : c.AdvancedScrollerThin;
        return r.createElement(a.ListNavigatorProvider, {
            navigator: w
        }, r.createElement(a.ListNavigatorContainer, null, function(e) {
            var n = e.ref,
                o = R(e, ["ref"]);
            return r.createElement(r.Fragment, null, r.createElement(j, N(b({
                className: i()(T.popout, t, A({}, T.popoutPositionTop, "top" === S)),
                style: {
                    width: _,
                    maxHeight: D
                },
                ref: function(e) {
                    var t, r = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                    n.current = r, k.current = r
                }
            }, o), {
                role: "listbox"
            }), B), r.createElement("div", {
                "aria-hidden": !0,
                ref: M,
                className: T.measurement
            }, B.slice(0, p)))
        }))
    }

    function V(e) {
        var t = e.className,
            n = e.value,
            o = e.label,
            s = e.onSelect,
            l = e.isSelected,
            c = e.isDisabled,
            f = e.serialize,
            d = (0, a.useListItem)(f(n));
        return r.createElement(u.Clickable, N(b({
            focusProps: {
                enabled: !1
            },
            className: i()(T.option, t),
            onClick: function() {
                return !c && s(n)
            }
        }, d), {
            "aria-selected": l,
            "aria-disabled": c,
            role: "option"
        }), o, l && r.createElement(y.default, {
            backgroundColor: "white",
            className: T.selectedIcon,
            width: 20,
            height: 20
        }))
    }

    function H(e) {
        var t = e.value,
            n = e.onChange,
            o = R(e, ["value", "onChange"]),
            i = D({
                value: t,
                onChange: n
            });
        return r.createElement(j, b({}, o, i))
    }
}