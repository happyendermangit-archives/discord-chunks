function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchableSelect: function() {
            return V
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("423802"),
        u = n("967147"),
        s = n("762624"),
        l = n("608036"),
        c = n("324377"),
        f = n("35628"),
        d = n("512341"),
        _ = n("246906"),
        E = n("839881"),
        p = n("726712"),
        m = n("680799"),
        y = n("135983"),
        I = n("675865"),
        h = n("629630"),
        O = n("708438"),
        T = n("62980"),
        S = n("527020"),
        v = n("811070"),
        g = n("843317"),
        A = n("943273"),
        b = n("247164"),
        N = n("587844"),
        R = n("941504"),
        C = n("60772");

    function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function D(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function L(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    D(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    D(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                M(e, t, n[t])
            })
        }
        return e
    }

    function w(e, t) {
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

    function k(e, t) {
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

    function G(e, t) {
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
        }(e, t) || B(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function B(e, t) {
        if (e) {
            if ("string" == typeof e) return P(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
        }
    }

    function j(e, t) {
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

    function F(e) {
        return e.label
    }
    var V = r.forwardRef(function(e, t) {
        var n, o, u, l, _, E, m, y, O, g, A, D, L, j = e.options,
            V = e.value,
            x = e.onChange,
            Y = e.clearable,
            W = void 0 !== Y && Y,
            K = e.multi,
            q = void 0 !== K && K,
            Q = e.closeOnSelect,
            J = void 0 === Q || Q,
            Z = e.onOpen,
            $ = e.onClose,
            ee = e.placeholder,
            et = void 0 === ee ? R.default.Messages.SELECT : ee,
            en = e.wrapperClassName,
            er = e.className,
            eo = e.isDisabled,
            ei = void 0 !== eo && eo,
            ea = e.maxVisibleItems,
            eu = void 0 === ea ? 7 : ea,
            es = e.look,
            el = void 0 === es ? N.SelectLooks.FILLED : es,
            ec = e.autoFocus,
            ef = void 0 !== ec && ec,
            ed = e.popoutPosition,
            e_ = e.filter,
            eE = void 0 === e_ || e_,
            ep = e.debounceTime,
            em = e.renderOptionLabel,
            ey = void 0 === em ? F : em,
            eI = e.onSearchChange,
            eh = e.renderOptionPrefix,
            eO = void 0 === eh ? function() {
                return null
            } : eh,
            eT = e.renderOptionSuffix,
            eS = void 0 === eT ? function() {
                return null
            } : eT,
            ev = e["aria-describedby"],
            eg = e["aria-invalid"],
            eA = e["aria-labelledby"],
            eb = e["aria-required"],
            eN = e.inputClassNames,
            eR = e.centerCaret,
            eC = void 0 !== eR && eR,
            eP = e.onBlur,
            eD = k(e, ["options", "value", "onChange", "clearable", "multi", "closeOnSelect", "onOpen", "onClose", "placeholder", "wrapperClassName", "className", "isDisabled", "maxVisibleItems", "look", "autoFocus", "popoutPosition", "filter", "debounceTime", "renderOptionLabel", "onSearchChange", "renderOptionPrefix", "renderOptionSuffix", "aria-describedby", "aria-invalid", "aria-labelledby", "aria-required", "inputClassNames", "centerCaret", "onBlur"]),
            eL = (0, I.default)(),
            eM = eL.ref,
            eU = eL.width,
            ew = (0, d.useFormContext)(),
            ek = ew.titleId,
            eG = ew.errorId,
            eB = ew.error,
            ej = (0, I.default)(),
            eF = ej.ref,
            eV = ej.width,
            eH = r.useRef(null),
            ex = G(r.useState(null), 2),
            eY = ex[0],
            eW = ex[1],
            eK = G(r.useState(!1), 2),
            ez = eK[0],
            eX = eK[1],
            eq = G(r.useState(null), 2),
            eQ = eq[0],
            eJ = eq[1],
            eZ = G(r.useState(!1), 2),
            e$ = eZ[0],
            e0 = eZ[1],
            e1 = r.useRef(null),
            e2 = r.useRef(null);
        var e3 = (o = (n = {
                active: ez,
                loadableOptions: j,
                debounceTime: ep
            }).active, u = n.loadableOptions, l = n.debounceTime, _ = "function" == typeof u, m = (E = G(r.useState({
                options: _ ? [] : u,
                query: "",
                debouncedQuery: "",
                loading: !1
            }), 2))[0], y = E[1], O = m.options, g = m.loading, A = m.query, D = m.debouncedQuery, L = r.useCallback(function(e) {
                return y(function(t) {
                    return w(U({}, t), {
                        loading: _,
                        query: e,
                        debouncedQuery: e
                    })
                })
            }, [_]), r.useEffect(function() {
                o && L("")
            }, [o, L]), r.useEffect(function() {
                var e;
                return _ ? (y(function(e) {
                        return w(U({}, e), {
                            loading: !0,
                            debouncedQuery: null
                        })
                    }), e = setTimeout(function() {
                        L(A)
                    }, null != l ? l : 500)) : L(A),
                    function() {
                        clearTimeout(e)
                    }
            }, [_, A, l, L]), r.useEffect(function() {
                var e = !1;
                return o && null !== D && ("function" == typeof u ? u(D) : Promise.resolve(u)).then(function(t) {
                        !e && y(function(e) {
                            return w(U({}, e), {
                                options: t,
                                loading: !1
                            })
                        })
                    }),
                    function() {
                        e = !0
                    }
            }, [o, u, D]), {
                options: O,
                loading: g,
                onQueryChange: r.useCallback(function(e) {
                    y(function(t) {
                        return w(U({}, t), {
                            query: e
                        })
                    })
                }, [])
            }),
            e4 = e3.options,
            e6 = e3.loading,
            e8 = e3.onQueryChange,
            e7 = r.useMemo(function() {
                var e, t;
                return e = e4, null == (t = V) ? [] : (Array.isArray(t) ? t : [t]).map(function(t) {
                    return "object" == typeof t && (null == t || "value" in t) ? t : e.find(function(e) {
                        return e.value === t
                    })
                }).filter(Boolean)
            }, [e4, V]),
            e9 = r.useMemo(function() {
                return e7.map(function(e) {
                    return e.value
                })
            }, [e7]),
            e5 = e7[e7.length - 1],
            te = (0, T.default)(e5),
            tt = r.useId(),
            tn = r.useId(),
            tr = r.useId(),
            to = r.useCallback(function(e) {
                ez !== e && !ei && (eX(e), e ? null == Z || Z() : null == $ || $())
            }, [ei, $, Z, ez]),
            ti = r.useCallback(function(e) {
                ez && !e && to(!1)
            }, [to, ez]),
            ta = (0, h.useIsVisible)(ti);
        r.useImperativeHandle(t, function() {
            return {
                close: function() {
                    to(!1)
                }
            }
        });
        var tu = r.useCallback(function(e, t) {
                var n = document.querySelector(e),
                    r = e1.current;
                eW(t), null != r && null != n && r.scrollIntoViewNode({
                    node: n
                })
            }, []),
            ts = r.useCallback(function() {
                return new Promise(function(e) {
                    var t = e1.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: function() {
                            return requestAnimationFrame(function() {
                                return e()
                            })
                        }
                    })
                })
            }, []),
            tl = r.useCallback(function() {
                return new Promise(function(e) {
                    var t = e1.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback: function() {
                            return requestAnimationFrame(function() {
                                return e()
                            })
                        }
                    })
                })
            }, []),
            tc = (0, s.default)({
                id: tn,
                defaultFocused: null != e5 ? String(e5.value) : void 0,
                scrollToStart: ts,
                scrollToEnd: tl,
                isEnabled: ez,
                wrap: !0,
                useVirtualFocus: !0,
                setFocus: tu,
                disableClickOnSpace: !0
            }),
            tf = (0, T.default)(tc),
            td = (0, T.default)(e4);
        r.useEffect(function() {
            var e = td.current,
                t = te.current;
            ez && null != t && !e6 && requestAnimationFrame(function() {
                var n = e1.current,
                    r = e.indexOf(t);
                null == n || n.scrollToIndex({
                    section: 0,
                    row: r
                })
            })
        }, [ez, e6]), r.useEffect(function() {
            var e = tf.current;
            if (ez && !e6) {
                var t, n = eH.current;
                if (null != n) {
                    n.focus();
                    var r = n.value;
                    n.value = " ", n.value = r
                }
                eW(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
            } else {
                var o = te.current,
                    i = null != o ? String(o.value) : null;
                e.setFocus(i), eW(null)
            }
        }, [ez, e6]), r.useLayoutEffect(function() {
            !ez && (q ? eJ("") : null != e5 && eJ(e5.label))
        }, [q, e5, ez]), r.useLayoutEffect(function() {
            q && eJ("")
        }, [q, e7.length]);
        var t_ = r.useCallback(function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                x(q ? [] : void 0);
                return
            }
            var n = "function" == typeof j,
                r = n ? e4.find(function(t) {
                    return t.value === e
                }) : e;
            if (q) {
                var o, i, a = null != V ? V : [];
                if (a.some(function(t) {
                        return (n ? t.value : t) === e
                    })) x(a.filter(function(t) {
                    return (n ? t.value : t) !== e
                }));
                else {
                    ;
                    x(((function(e) {
                        if (Array.isArray(e)) return P(e)
                    })(o = a) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(o) || B(o) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).concat([r]))
                }
                t && (null === (i = eH.current) || void 0 === i || i.focus())
            } else x(r);
            eW(null), (!q || J) && to(!1), e0(!1)
        }, [j, e4, q, J, x, V, to]);
        r.useLayoutEffect(function() {
            if (ef) {
                var e;
                null === (e = eH.current) || void 0 === e || e.focus()
            }
        }, [ef]);
        var tE = r.useCallback(function() {
                eJ(""), t_(null), to(!0)
            }, [t_, to]),
            tp = r.useCallback(function(e) {
                switch (e.key) {
                    case "Escape":
                        ez && (e.stopPropagation(), to(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        to(!0)
                }
            }, [to, ez]),
            tm = e4;
        e$ && null != eQ && !1 !== eE && (tm = "function" == typeof eE ? eE(e4, eQ) : (0, a.matchSorter)(e4, eQ, {
            keys: ["label"]
        })), r.useEffect(function() {
            var e = e1.current;
            null == e || e.scrollToTop()
        }, [eQ]), r.useEffect(function() {
            !e6 && e$ && null !== eQ && requestAnimationFrame(function() {
                return tc.focusFirstVisibleItem()
            })
        }, [e6, e$, eQ]);
        var ty = q ? X : z;
        return r.createElement(s.ListNavigatorProvider, {
            navigator: tc
        }, r.createElement(p.Popout, {
            spacing: 0,
            animation: p.Popout.Animation.NONE,
            shouldShow: ez,
            onRequestClose: function() {
                return to(!1)
            },
            layerContext: eD.popoutLayerContext,
            renderPopout: function(e) {
                var t = e.closePopout,
                    n = e.position,
                    o = e.updatePosition;
                return r.createElement(H, {
                    loading: e6,
                    multi: q,
                    listRef: e1,
                    listId: tt,
                    maxVisibleItems: eu,
                    width: eV,
                    selectedValues: e9,
                    closePopout: t,
                    onSelect: t_,
                    closeOnSelect: J,
                    options: tm,
                    activeDescendant: eY,
                    renderOptionLabel: ey,
                    updatePosition: o,
                    popoutPosition: n,
                    renderOptionPrefix: eO,
                    renderOptionSuffix: eS
                })
            },
            position: void 0 === ed ? "bottom" : ed
        }, function(e, t) {
            var n, o, a = e["aria-expanded"],
                u = (e["aria-controls"], t.isShown),
                s = t.position,
                l = u ? v.default : S.default,
                d = tc.containerProps,
                _ = d.ref,
                E = d.onKeyDown;
            return r.createElement("div", {
                ref: e2,
                className: i()(en, C.wrapper),
                style: {
                    "--icons-width": "".concat(eU, "px")
                },
                onBlur: function(e) {
                    var t, n, r;
                    !((null === (t = e2.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (r = e1.current) || void 0 === r ? void 0 : null === (n = r.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!q && null != e5 && eJ(e5.label), e0(!1), to(!1), null == eP || eP(e))
                }
            }, r.createElement(f.FocusRing, {
                ringTarget: eF,
                focusTarget: eH,
                offset: 4
            }, r.createElement("div", {
                onClick: ei ? void 0 : function(e) {
                    e.stopPropagation(), e.preventDefault(), eJ(""), to(!0)
                },
                onMouseDown: function(e) {
                    e.preventDefault()
                },
                ref: function(e) {
                    eF.current = e, ta.current = e
                },
                className: i()(C.select, C.searchable, er, (M(n = {}, C.open, u), M(n, C.lookFilled, el === N.SelectLooks.FILLED), M(n, C.disabled, ei), M(n, C.multi, q), M(n, C.selectPositionTop, "top" === s), n))
            }, r.createElement("div", {
                className: i()(C.value, M({}, C.multi, q))
            }, r.createElement(ty, {
                query: eQ,
                selectedOptions: e7,
                loading: e6,
                renderOptionPrefix: eO,
                renderOptionSuffix: eS,
                isDisabled: ei,
                isEditing: e$,
                inputRef: eH,
                "aria-describedby": null != ev ? ev : eG,
                "aria-required": eb,
                "aria-invalid": null != eg ? eg : null != eB,
                "aria-labelledby": null != eA ? eA : ek,
                "aria-expanded": a,
                setInputRef: function(e) {
                    _.current = e, eH.current = e
                },
                onFocus: function() {
                    var e, t;
                    null === (e = eH.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == eQ ? void 0 : eQ.length) && void 0 !== t ? t : 0)
                },
                onChange: function(e) {
                    e8(e), null == eI || eI(e), eJ(e), to(!0), e0(!0)
                },
                onKeyDown: function(e) {
                    var t;
                    null === (t = eD.onKeyDown) || void 0 === t || t.call(eD, e), E(e), tp(e)
                },
                activeDescendant: eY,
                placeholder: et,
                inputId: tr,
                listboxId: tt,
                navigatorId: tn,
                selectValue: function(e) {
                    var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    t_(e, t)
                },
                inputClassNames: eN
            })))), r.createElement("div", {
                className: i()(C.icons, (M(o = {}, C.multi, q), M(o, C.iconsContainer, !eC), o)),
                ref: eM
            }, W && (null != eQ && "" !== eQ || e7.length > 0) ? r.createElement(c.Clickable, {
                "aria-label": R.default.Messages.CLEAR,
                "aria-controls": tr,
                onClick: tE
            }, r.createElement(b.default, {
                width: 16,
                height: 16,
                className: C.clear
            })) : null, r.createElement(c.Clickable, {
                className: i()(M({}, C.iconsCenter, eC)),
                "aria-label": ez ? R.default.Messages.CLOSE : R.default.Messages.OPEN,
                "aria-controls": tr,
                onClick: function() {
                    to(!ez)
                }
            }, r.createElement(l, {
                className: C.dropdownIcon
            }))))
        }))
    });

    function H(e) {
        var t = e.onSelect,
            n = e.closePopout,
            o = e.selectedValues,
            a = e.options,
            u = e.width,
            l = e.maxVisibleItems,
            c = e.activeDescendant,
            f = e.listRef,
            d = e.listId,
            _ = e.renderOptionLabel,
            p = e.updatePosition,
            I = e.loading,
            h = e.multi,
            T = e.popoutPosition,
            S = e.closeOnSelect,
            v = e.renderOptionPrefix,
            g = void 0 === v ? function() {
                return null
            } : v,
            A = e.renderOptionSuffix,
            b = void 0 === A ? function() {
                return null
            } : A,
            N = r.useRef(null),
            P = r.useCallback(function(e) {
                t(e), S && n()
            }, [S, n, t]);
        return ((0, O.default)(p), void 0 !== I && I) ? r.createElement("div", {
            "aria-busy": !0,
            className: i()(C.popout, C.loading, M({}, C.popoutPositionTop, "top" === T)),
            style: {
                width: u
            }
        }, r.createElement(m.Spinner, {
            itemClassName: C.loadingSpinner,
            type: m.SpinnerTypes.PULSING_ELLIPSIS
        })) : 0 === a.length ? r.createElement("div", {
            className: i()(C.popout, C.noResults, M({}, C.popoutPositionTop, "top" === T)),
            style: {
                width: u
            }
        }, r.createElement(y.Text, {
            color: "text-muted",
            variant: "text-md/normal"
        }, R.default.Messages.NO_RESULTS_FOUND)) : r.createElement(s.ListNavigatorContainer, null, function(e) {
            var t, n = e.ref,
                s = (e.onKeyDown, k(e, ["ref", "onKeyDown"]));
            return r.createElement(E.ListAuto, w(U({
                className: i()(C.popout, C.searchableSelect, (M(t = {}, C.noScrollbar, a.length <= l), M(t, C.popoutPositionTop, "top" === T), t)),
                style: {
                    width: u,
                    maxHeight: 44 * l
                },
                ref: function(e) {
                    f.current = e;
                    var t, r = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null;
                    N.current = r, n.current = r
                }
            }, s), {
                role: void 0,
                innerRole: "listbox",
                innerAriaMultiselectable: h,
                innerId: d,
                rowHeight: 44,
                sections: [a.length],
                sectionHeight: 0,
                renderRow: function(e) {
                    var t, n = e.row,
                        i = a[n],
                        u = _(i);
                    return r.createElement(W, {
                        multi: h,
                        "aria-posinset": n,
                        "aria-setsize": a.length,
                        isSelected: o.includes(i.value),
                        isFocused: c === String(i.value),
                        key: null !== (t = i.key) && void 0 !== t ? t : n,
                        value: i.value,
                        label: u,
                        onSelect: P,
                        prefix: g(i, {
                            inPill: !1,
                            inDropdown: !0
                        }),
                        suffix: b(i, {
                            inPill: !1,
                            inDropdown: !0
                        })
                    })
                },
                renderSection: function() {
                    return null
                }
            }))
        })
    }

    function x(e, t) {
        if (null == e || null == t) return !1;
        var n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
        return (e.compareDocumentPosition(t) & n) === n
    }

    function Y(e) {
        var t = e.selectedOptions,
            n = e.selectValue,
            o = e.listRef,
            i = e.focusPreviousItem,
            a = e.focusNextItem,
            u = e.renderOptionSuffix,
            s = e.renderOptionPrefix,
            l = r.useCallback(function(e) {
                if (null != o.current) switch (e.key) {
                    case "ArrowRight":
                        return e.stopPropagation(), e.preventDefault(), a();
                    case "ArrowLeft":
                        return e.stopPropagation(), e.preventDefault(), i()
                }
            }, [o, i, a]),
            c = G(r.useState(null), 2),
            f = c[0],
            d = c[1];
        return r.createElement("ul", {
            className: C.optionPillContainer,
            ref: o,
            onKeyDown: l,
            onFocus: function(e) {
                var t = e.target;
                null != o.current && x(o.current, t) && d(t.getAttribute("data-option-pill-value"))
            },
            onBlur: function(e) {
                var t = e.relatedTarget;
                !x(o.current, t) && d(null)
            }
        }, t.map(function(e, t) {
            var o;
            return r.createElement("li", {
                key: "".concat(e.label, "-").concat(e.value),
                className: C.optionPillItem
            }, r.createElement(Q, {
                focused: null == f ? 0 === t : f === String(e.value),
                option: e,
                onClick: function() {
                    return n(e.value)
                },
                onKeyDown: (o = L(function(t) {
                    return j(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if ("Backspace" !== t.key) return [3, 2];
                                return [4, i(!0)];
                            case 1:
                                return r.sent(), n(e.value, !1), [3, 4];
                            case 2:
                                if ("Delete" !== t.key) return [3, 4];
                                return [4, a(!0)];
                            case 3:
                                r.sent(), n(e.value, !1), r.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                }), function(e) {
                    return o.apply(this, arguments)
                }),
                renderOptionPrefix: s,
                renderOptionSuffix: u
            }))
        }))
    }

    function W(e) {
        var t, n = e.value,
            o = e.label,
            a = e.prefix,
            u = e.suffix,
            l = e.onSelect,
            f = e.isSelected,
            d = e.isFocused,
            _ = e.multi,
            E = k(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]),
            p = (0, s.useListItem)(String(n));
        return r.createElement(c.Clickable, w(U({
            tag: "li",
            style: {
                height: 44
            },
            focusProps: {
                enabled: !1
            },
            className: i()(C.option, (M(t = {}, C.focused, d), M(t, C.multi, _), t)),
            onClick: function() {
                return l(n)
            }
        }, p, E), {
            "aria-selected": f,
            id: p["data-list-item-id"],
            role: "option"
        }), r.createElement("div", {
            className: C.content
        }, o, "\xa0"), null != a && r.createElement("div", {
            className: C.prefix
        }, a), " ", null != u && r.createElement("div", {
            className: C.suffix
        }, u), " ", r.createElement(K, {
            isSelected: f,
            multi: _
        }))
    }

    function K(e) {
        var t, n = e.isSelected,
            o = e.multi;
        return o ? r.createElement("div", {
            className: i()(C.multiSelectCheckbox, (M(t = {}, C.checked, n), M(t, C.unchecked, !n), t))
        }, n && r.createElement(g.default, {
            foreground: C.multiSelectCheck
        })) : n ? r.createElement(A.default, {
            "aria-hidden": !0,
            backgroundColor: "white",
            className: C.selectedIcon,
            width: 20,
            height: 20
        }) : null
    }

    function z(e) {
        var t = e.selectedOptions,
            n = e.renderOptionPrefix,
            o = e.renderOptionSuffix,
            i = k(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]),
            a = t[0],
            u = null == n ? void 0 : n(null != a ? a : null, {
                inPill: !1,
                inDropdown: !1
            }),
            s = null == o ? void 0 : o(null != a ? a : null, {
                inPill: !1,
                inDropdown: !1
            });
        return r.createElement(r.Fragment, null, null != u ? r.createElement("div", {
            "aria-hidden": !0
        }, u) : null, r.createElement(q, U({
            selectedOptions: t
        }, i)), null != s ? r.createElement("div", {
            "aria-hidden": !0
        }, s) : null)
    }

    function X(e) {
        var t, n, o, a, s, l = e.query,
            c = e.placeholder,
            f = e.selectedOptions,
            d = e.selectValue,
            _ = e.onKeyDown,
            E = e.isEditing,
            p = e.isDisabled,
            m = e.inputRef,
            y = e.renderOptionPrefix,
            I = e.renderOptionSuffix,
            h = e.inputClassNames,
            O = k(e, ["query", "placeholder", "selectedOptions", "selectValue", "onKeyDown", "isEditing", "isDisabled", "inputRef", "renderOptionPrefix", "renderOptionSuffix", "inputClassNames"]),
            T = Math.max(c.length, (null != l ? l : "").length),
            S = r.useRef(null);
        var v = (t = S, n = m, o = f, a = r.useMemo(function() {
                return (0, u.createFocusManager)({
                    getFocusableElements: function() {
                        var e = t.current;
                        return null != e ? Array.from(e.querySelectorAll("[data-option-pill-value]")) : []
                    },
                    getActiveElement: function() {
                        var e, n;
                        return null == t ? void 0 : null === (n = t.current) || void 0 === n ? void 0 : null === (e = n.ownerDocument) || void 0 === e ? void 0 : e.activeElement
                    }
                })
            }, [o]), s = r.useCallback(function(e) {
                var n, r;
                return e === (null === (r = t.current) || void 0 === r ? void 0 : null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.activeElement)
            }, [t]), {
                focusPreviousItem: r.useCallback(L(function() {
                    var e, t, r, o = arguments;
                    return j(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return e = o.length > 0 && void 0 !== o[0] && o[0], [4, a.getPreviousFocusableElement({
                                    wrap: !e
                                })];
                            case 1:
                                if (t = i.sent(), !e) return [3, 4];
                                if (!(null == t || s(t))) return [3, 3];
                                return [4, a.getNextFocusableElement()];
                            case 2:
                                t = i.sent(), i.label = 3;
                            case 3:
                                if (null == t || s(t)) return [2, null === (r = n.current) || void 0 === r ? void 0 : r.focus()];
                                i.label = 4;
                            case 4:
                                return [2, null == t ? void 0 : t.focus()]
                        }
                    })
                }), [a, s, n]),
                focusNextItem: r.useCallback(L(function() {
                    var e, t, r, o = arguments;
                    return j(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return e = o.length > 0 && void 0 !== o[0] && o[0], [4, a.getNextFocusableElement({
                                    wrap: !e
                                })];
                            case 1:
                                if (t = i.sent(), !e) return [3, 4];
                                if (!(null == t || s(t))) return [3, 3];
                                return [4, a.getPreviousFocusableElement()];
                            case 2:
                                t = i.sent(), i.label = 3;
                            case 3:
                                if (null == t || s(t)) return [2, null === (r = n.current) || void 0 === r ? void 0 : r.focus()];
                                i.label = 4;
                            case 4:
                                return [2, null == t ? void 0 : t.focus()]
                        }
                    })
                }), [a, s, n]),
                focusLastItem: r.useCallback(L(function() {
                    var e;
                    return j(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, a.getLastFocusableElement()];
                            case 1:
                                return [2, null == (e = t.sent()) ? void 0 : e.focus()]
                        }
                    })
                }), [a])
            }),
            g = v.focusPreviousItem,
            A = v.focusNextItem,
            b = v.focusLastItem;
        return r.createElement(r.Fragment, null, f.length > 0 && r.createElement(Y, {
            listRef: S,
            selectedOptions: f,
            renderOptionPrefix: y,
            renderOptionSuffix: I,
            selectValue: d,
            focusNextItem: A,
            focusPreviousItem: g
        }), r.createElement(q, U({
            style: {
                minWidth: "".concat(T, "ch")
            },
            className: i()(C.multi, h),
            query: l,
            placeholder: c,
            selectValue: d,
            selectedOptions: f,
            isEditing: E,
            isDisabled: p,
            inputRef: m,
            onKeyDown: function(e) {
                ["ArrowLeft", "Backspace"].includes(e.key) && ("" === l || null == l) && f.length > 0 ? b() : _(e)
            }
        }, O)))
    }

    function q(e) {
        var t, n = e.query,
            o = e.inputId,
            a = e["aria-describedby"],
            u = e["aria-invalid"],
            l = e["aria-required"],
            c = e["aria-labelledby"],
            f = e["aria-expanded"],
            d = e.isDisabled,
            _ = e.listboxId,
            E = e.activeDescendant,
            p = e.navigatorId,
            m = e.onChange,
            y = e.onFocus,
            I = e.setInputRef,
            h = e.isEditing,
            O = e.onKeyDown,
            T = e.placeholder,
            S = e.loading,
            v = e.style,
            g = e.className;
        return r.createElement("input", {
            role: "combobox",
            id: o,
            "aria-haspopup": "listbox",
            "aria-invalid": u,
            "aria-labelledby": c,
            "aria-autocomplete": "list",
            "aria-expanded": f,
            "aria-describedby": a,
            "aria-disabled": d,
            "aria-controls": _,
            "aria-required": l,
            "aria-busy": S,
            style: null != v ? v : {},
            "aria-activedescendant": null != E ? (0, s.createListItemId)(p, E) : "",
            disabled: d,
            value: null != n ? n : "",
            onChange: function(e) {
                m(e.target.value)
            },
            onFocus: y,
            className: i()(C.searchInput, g, (M(t = {}, C.editing, h), M(t, C.disabled, d), t)),
            onKeyDown: O,
            placeholder: "" !== (null != n ? n : "").trim() ? void 0 : T,
            ref: I
        })
    }

    function Q(e) {
        var t = e.option,
            n = e.focused,
            o = e.onClick,
            i = e.onKeyDown,
            a = e.renderOptionPrefix,
            u = e.renderOptionSuffix,
            s = null == a ? void 0 : a(t, {
                inPill: !0,
                inDropdown: !1
            }),
            c = null == u ? void 0 : u(t, {
                inPill: !0,
                inDropdown: !1
            });
        return r.createElement(f.FocusRing, {
            offset: 3
        }, r.createElement(l.Button, {
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: C.optionPillBtn,
            innerClassName: C.optionPill,
            onClick: function() {
                return null == o ? void 0 : o(t.value)
            },
            onKeyDown: i
        }, r.createElement("div", {
            className: C.content
        }, t.label), null != s && r.createElement("div", {
            className: C.prefix
        }, s), " ", null != c && r.createElement("div", {
            className: C.suffix
        }, c), r.createElement(_.HiddenVisually, null, R.default.Messages.REMOVE), r.createElement(b.default, {
            className: C.deleteOptionIcon,
            width: 14,
            height: 14
        })))
    }
}