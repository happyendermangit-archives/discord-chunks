function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createListItemId: function() {
            return s.createListItemId
        },
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("967147"),
        i = n("556387"),
        a = n("916432"),
        u = n("639340"),
        s = n("447261"),
        l = n("344796");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.es(l, t);

    function f(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function d(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    f(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    f(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function _(e, t) {
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

    function E(e, t) {
        var n;
        return Array.from((null !== (n = t.current) && void 0 !== n ? n : document).querySelectorAll("[".concat(s.LIST_ITEM_ID_ATTRIBUTE, '^="').concat(e, '"]')))
    }

    function p(e) {
        var t, n, l = e.id,
            f = e.defaultFocused,
            p = e.isEnabled,
            m = e.scrollToStart,
            y = e.scrollToEnd,
            I = e.onNavigatePreviousAtStart,
            h = e.onNavigateNextAtEnd,
            O = e.setFocus,
            T = e.setFocusOnList,
            S = e.preserveFocusPosition,
            v = void 0 === S || S,
            g = e.useVirtualFocus,
            A = void 0 !== g && g,
            b = e.wrap,
            N = void 0 !== b && b,
            R = e.orientation,
            C = void 0 === R ? u.Orientations.VERTICAL : R,
            P = e.disableClickOnSpace,
            D = void 0 !== P && P,
            L = r.useRef(f ? (0, s.createListItemId)(l, f) : null),
            M = r.useRef(!1),
            U = r.useRef(null),
            w = r.useRef(p);

        function k(e) {
            var t;
            return (null !== (t = U.current) && void 0 !== t ? t : document).querySelector(e)
        }

        function G(e) {
            var t;
            null === (t = k(e)) || void 0 === t || t.focus()
        }
        r.useLayoutEffect(function() {
            w.current = p
        }, [p]);
        var B = r.useCallback(function(e, t) {
                w.current && (null != O ? O : G)(e, t)
            }, [O]),
            j = r.useCallback(function(e) {
                w.current && (null != T ? T : G)(e)
            }, [T]),
            F = r.useCallback(function(e) {
                L.current = e;
                var t = (0, s.createSelector)(e),
                    n = (0, s.getItemId)(e);
                B(t, n), (0, i.notifyFocusSubscribers)(l, n, v)
            }, [l, v, B]),
            V = r.useMemo(function() {
                return (0, o.createFocusManager)({
                    getFocusableElements: function() {
                        return E(l, U)
                    },
                    getActiveElement: function() {
                        var e;
                        return null === (e = U.current) || void 0 === e ? void 0 : e.ownerDocument.activeElement
                    },
                    scrollToStart: m,
                    scrollToEnd: y
                })
            }, [l, m, y]);
        var H = (t = r.useState(!1), n = 2, function(e) {
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
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            x = H[0],
            Y = H[1],
            W = r.useRef(x);
        r.useLayoutEffect(function() {
            W.current = x
        }, [x]), r.useLayoutEffect(function() {
            var e = function() {
                    Y(!0)
                },
                t = function(e) {
                    !e.currentTarget.contains(e.relatedTarget) && (Y(!1), requestAnimationFrame(function() {
                        var e = L.current;
                        null !== e && null == k((0, s.createSelector)(e)) && j((0, s.createSelector)(l, s.LIST_ID_ATTRIBUTE))
                    }))
                },
                n = function() {
                    return i.apply(this, arguments)
                },
                r = function() {
                    M.current = !0
                },
                o = U.current;
            if (null != o) {
                if (p) return o.addEventListener("focusin", e), o.addEventListener("focusout", t), o.addEventListener("focus", n), o.addEventListener("scroll", r, {
                        passive: !0
                    }),
                    function() {
                        o.removeEventListener("focusin", e), o.removeEventListener("focusout", t), o.removeEventListener("focus", n), o.removeEventListener("scroll", r)
                    }
            }

            function i() {
                return (i = d(function() {
                    var e, t, n, r, o;
                    return _(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (e = U.current, W.current || null == e) return [2];
                                if (t = L.current, !(v && null !== t) || !(null != (r = k(n = (0, s.createSelector)(t))))) return [3, 3];
                                if (!0 !== M.current) return [3, 2];
                                return [4, (0, a.isItemVisible)(e, r)];
                            case 1:
                                if (i.sent()) return [2, B(n, (0, s.getItemId)(t))];
                                return [3, 3];
                            case 2:
                                return [2, B(n, (0, s.getItemId)(t))];
                            case 3:
                                return [4, (0, a.findFirstVisibleItem)(e, E(l, U))];
                            case 4:
                                return null !== (o = i.sent()) && F(o), [2]
                        }
                    })
                })).apply(this, arguments)
            }
        }, [p, l, v, B, T, j, F]);
        var K = r.useMemo(function() {
                return {
                    wrap: N,
                    get from() {
                        if (!A) return;
                        var e, t = L.current;
                        if (null != t) {
                            ;
                            return null !== (e = k((0, s.createSelector)(t))) && void 0 !== e ? e : void 0
                        }
                        return
                    }
                }
            }, [A, N]),
            z = r.useCallback(d(function() {
                var e, t;
                return _(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, V.getNextFocusableElement(K)];
                        case 1:
                            return null != (t = null == (e = n.sent()) ? void 0 : e.getAttribute(s.LIST_ITEM_ID_ATTRIBUTE)) ? F(t) : null == e && null != h && h(), [2]
                    }
                })
            }), [V, K, h, F]),
            X = r.useCallback(d(function() {
                var e, t;
                return _(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, V.getPreviousFocusableElement(K)];
                        case 1:
                            return null != (t = null == (e = n.sent()) ? void 0 : e.getAttribute(s.LIST_ITEM_ID_ATTRIBUTE)) ? F(t) : null == e && null != I && I(), [2]
                    }
                })
            }), [V, K, I, F]),
            q = r.useCallback(function(e) {
                if (w.current && (A || W.current)) {
                    var t = C === u.Orientations.HORIZONTAL ? u.Keys.RIGHT : u.Keys.DOWN,
                        n = C === u.Orientations.HORIZONTAL ? u.Keys.LEFT : u.Keys.UP;
                    switch (e.key) {
                        case t:
                            e.stopPropagation(), e.preventDefault(), z();
                            return;
                        case n:
                            e.stopPropagation(), e.preventDefault(), X();
                            return;
                        case u.Keys.HOME:
                            e.stopPropagation(), e.preventDefault(), m().then(function() {
                                var e, t = null === (e = E(l, U)[0]) || void 0 === e ? void 0 : e.getAttribute(s.LIST_ITEM_ID_ATTRIBUTE);
                                null != t && F(t)
                            });
                            return;
                        case u.Keys.END:
                            e.stopPropagation(), e.preventDefault(), y().then(function() {
                                var e, t = E(l, U),
                                    n = null === (e = t[t.length - 1]) || void 0 === e ? void 0 : e.getAttribute(s.LIST_ITEM_ID_ATTRIBUTE);
                                null != n && F(n)
                            });
                            return;
                        case u.Keys.SPACE:
                        case u.Keys.ENTER:
                            if (e.key === u.Keys.SPACE && D || e.repeat) return;
                            var r = L.current;
                            if (null != r) {
                                var o, i = k((0, s.createSelector)(r)),
                                    a = null !== (o = null == i ? void 0 : i.ownerDocument) && void 0 !== o ? o : document,
                                    c = A || i === a.activeElement;
                                null != i && c && (e.preventDefault(), e.stopPropagation(), null == i || i.click())
                            }
                    }
                }
            }, [z, X, l, C, y, m, F, A]),
            Q = r.useCallback(function(e) {
                var t = null != e ? (0, s.createListItemId)(l, e) : null;
                L.current = t
            }, [l]);
        return r.useMemo(function() {
            return {
                id: l,
                containerProps: {
                    onKeyDown: q,
                    ref: U,
                    tabIndex: x && v ? -1 : 0
                },
                orientation: C,
                setFocus: Q,
                focusLastVisibleItem: function() {
                    return d(function() {
                        var e, t;
                        return _(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, a.findLastVisibleItem)(null !== (e = U.current) && void 0 !== e ? e : document.body, E(l, U))];
                                case 1:
                                    return null !== (t = n.sent()) && F(t), [2]
                            }
                        })
                    })()
                },
                focusFirstVisibleItem: function() {
                    return d(function() {
                        var e, t;
                        return _(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, a.findFirstVisibleItem)(null !== (e = U.current) && void 0 !== e ? e : document.body, E(l, U))];
                                case 1:
                                    return null !== (t = n.sent()) && F(t), [2]
                            }
                        })
                    })()
                },
                focusPreviousItem: X,
                focusNextItem: z,
                focusedItemId: function() {
                    var e = L.current;
                    return e ? (0, s.getItemId)(e) : null
                }
            }
        }, [l, q, C, x, v, Q, X, z, F])
    }
}