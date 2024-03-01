function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchableSelect: function() {
            return M
        }
    }), n("222007");
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("165994"),
        l = n("71185"),
        u = n("974667"),
        c = n("271841"),
        d = n("227645"),
        f = n("718776"),
        E = n("516826"),
        p = n("741662"),
        h = n("433600"),
        _ = n("442761"),
        S = n("242670"),
        m = n("577776"),
        T = n("731898"),
        g = n("811425"),
        I = n("31695"),
        C = n("561744"),
        v = n("837899"),
        A = n("425190"),
        R = n("36694"),
        N = n("578706"),
        O = n("945330"),
        D = n("178814"),
        y = n("782340"),
        P = n("800836");

    function L(e) {
        return e.label
    }
    let b = r.forwardRef(function(e, t) {
            let {
                options: n,
                value: s,
                onChange: l,
                clearable: c = !1,
                multi: p = !1,
                closeOnSelect: h = !0,
                onOpen: S,
                onClose: m,
                placeholder: I = y.default.Messages.SELECT,
                wrapperClassName: R,
                className: N,
                isDisabled: b = !1,
                maxVisibleItems: M = 7,
                look: G = D.SelectLooks.FILLED,
                autoFocus: w = !1,
                popoutPosition: k = "bottom",
                filter: V = !0,
                debounceTime: B,
                renderOptionLabel: H = L,
                onSearchChange: Y,
                renderOptionPrefix: j = () => null,
                renderOptionSuffix: W = () => null,
                "aria-describedby": K,
                "aria-invalid": z,
                "aria-labelledby": q,
                "aria-required": X,
                inputClassNames: Q,
                centerCaret: Z = !1,
                onBlur: J,
                ...$
            } = e, {
                ref: ee,
                width: et
            } = (0, T.default)(), {
                titleId: en,
                errorId: ei,
                error: er
            } = (0, E.useFormContext)(), {
                ref: es,
                width: ea
            } = (0, T.default)(), eo = r.useRef(null), [el, eu] = r.useState(null), [ec, ed] = r.useState(!1), [ef, eE] = r.useState(null), [ep, eh] = r.useState(!1), e_ = r.useRef(null), eS = r.useRef(null), {
                options: em,
                loading: eT,
                onQueryChange: eg
            } = function(e) {
                let {
                    active: t,
                    loadableOptions: n,
                    debounceTime: i
                } = e, s = "function" == typeof n, [a, o] = r.useState({
                    options: s ? [] : n,
                    query: "",
                    debouncedQuery: "",
                    loading: !1
                }), {
                    options: l,
                    loading: u,
                    query: c,
                    debouncedQuery: d
                } = a, f = r.useCallback(e => o(t => ({
                    ...t,
                    loading: s,
                    query: e,
                    debouncedQuery: e
                })), [s]);
                r.useEffect(() => {
                    t && f("")
                }, [t, f]), r.useEffect(() => {
                    let e;
                    return s ? (o(e => ({
                        ...e,
                        loading: !0,
                        debouncedQuery: null
                    })), e = setTimeout(() => {
                        f(c)
                    }, null != i ? i : 500)) : f(c), () => {
                        clearTimeout(e)
                    }
                }, [s, c, i, f]), r.useEffect(() => {
                    let e = !1;
                    return t && null !== d && ("function" == typeof n ? n(d) : Promise.resolve(n)).then(t => {
                        !e && o(e => ({
                            ...e,
                            options: t,
                            loading: !1
                        }))
                    }), () => {
                        e = !0
                    }
                }, [t, n, d]);
                let E = r.useCallback(e => {
                    o(t => ({
                        ...t,
                        query: e
                    }))
                }, []);
                return {
                    options: l,
                    loading: u,
                    onQueryChange: E
                }
            }({
                active: ec,
                loadableOptions: n,
                debounceTime: B
            }), eI = r.useMemo(() => (function(e, t) {
                if (null == t) return [];
                let n = Array.isArray(t) ? t : [t];
                return n.map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
            })(em, s), [em, s]), eC = r.useMemo(() => eI.map(e => e.value), [eI]), ev = eI[eI.length - 1], eA = (0, C.default)(ev), eR = r.useId(), eN = r.useId(), eO = r.useId(), eD = r.useCallback(e => {
                ec !== e && !b && (ed(e), e ? null == S || S() : null == m || m())
            }, [b, m, S, ec]), ey = r.useCallback(e => {
                ec && !e && eD(!1)
            }, [eD, ec]), eP = (0, g.useIsVisible)(ey);
            r.useImperativeHandle(t, () => ({
                close() {
                    eD(!1)
                }
            }));
            let eL = r.useCallback((e, t) => {
                    let n = document.querySelector(e),
                        i = e_.current;
                    eu(t), null != i && null != n && i.scrollIntoViewNode({
                        node: n
                    })
                }, []),
                eb = r.useCallback(() => new Promise(e => {
                    let t = e_.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e())
                    })
                }), []),
                eM = r.useCallback(() => new Promise(e => {
                    let t = e_.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback: () => requestAnimationFrame(() => e())
                    })
                }), []),
                eU = (0, u.default)({
                    id: eN,
                    defaultFocused: null != ev ? String(ev.value) : void 0,
                    scrollToStart: eb,
                    scrollToEnd: eM,
                    isEnabled: ec,
                    wrap: !0,
                    useVirtualFocus: !0,
                    setFocus: eL,
                    disableClickOnSpace: !0
                }),
                eG = (0, C.default)(eU),
                ew = (0, C.default)(em);
            r.useEffect(() => {
                let e = ew.current,
                    t = eA.current;
                ec && null != t && !eT && requestAnimationFrame(() => {
                    let n = e_.current,
                        i = e.indexOf(t);
                    null == n || n.scrollToIndex({
                        section: 0,
                        row: i
                    })
                })
            }, [ec, eT]), r.useEffect(() => {
                let e = eG.current;
                if (ec && !eT) {
                    var t;
                    let n = eo.current;
                    if (null != n) {
                        n.focus();
                        let {
                            value: e
                        } = n;
                        n.value = " ", n.value = e
                    }
                    eu(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
                } else {
                    let t = eA.current,
                        n = null != t ? String(t.value) : null;
                    e.setFocus(n), eu(null)
                }
            }, [ec, eT]), r.useLayoutEffect(() => {
                !ec && (p ? eE("") : null != ev && eE(ev.label))
            }, [p, ev, ec]), r.useLayoutEffect(() => {
                p && eE("")
            }, [p, eI.length]);
            let ek = r.useCallback(function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) {
                    l(p ? [] : void 0);
                    return
                }
                let i = "function" == typeof n,
                    r = i ? em.find(t => t.value === e) : e;
                if (p) {
                    let n = null != s ? s : [],
                        o = n.some(t => (i ? t.value : t) === e);
                    if (o ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
                        var a;
                        null === (a = eo.current) || void 0 === a || a.focus()
                    }
                } else l(r);
                eu(null), (!p || h) && eD(!1), eh(!1)
            }, [n, em, p, h, l, s, eD]);
            r.useLayoutEffect(() => {
                if (w) {
                    var e;
                    null === (e = eo.current) || void 0 === e || e.focus()
                }
            }, [w]);
            let ex = r.useCallback(() => {
                    eE(""), ek(null), eD(!0)
                }, [ek, eD]),
                eF = r.useCallback(e => {
                    switch (e.key) {
                        case "Escape":
                            ec && (e.stopPropagation(), eD(!1));
                            break;
                        case "ArrowDown":
                        case "ArrowUp":
                            eD(!0)
                    }
                }, [eD, ec]),
                eV = em;
            ep && null != ef && !1 !== V && (eV = "function" == typeof V ? V(em, ef) : (0, o.matchSorter)(em, ef, {
                keys: ["label"]
            })), r.useEffect(() => {
                let e = e_.current;
                null == e || e.scrollToTop()
            }, [ef]), r.useEffect(() => {
                !eT && ep && null !== ef && requestAnimationFrame(() => eU.focusFirstVisibleItem())
            }, [eT, ep, ef]);
            let eB = p ? F : x;
            return (0, i.jsx)(u.ListNavigatorProvider, {
                navigator: eU,
                children: (0, i.jsx)(_.Popout, {
                    spacing: 0,
                    animation: _.Popout.Animation.NONE,
                    shouldShow: ec,
                    onRequestClose: () => eD(!1),
                    layerContext: $.popoutLayerContext,
                    renderPopout: e => {
                        let {
                            closePopout: t,
                            position: n,
                            updatePosition: r
                        } = e;
                        return (0, i.jsx)(U, {
                            loading: eT,
                            multi: p,
                            listRef: e_,
                            listId: eR,
                            maxVisibleItems: M,
                            width: ea,
                            selectedValues: eC,
                            closePopout: t,
                            onSelect: ek,
                            closeOnSelect: h,
                            options: eV,
                            activeDescendant: el,
                            renderOptionLabel: H,
                            updatePosition: r,
                            popoutPosition: n,
                            renderOptionPrefix: j,
                            renderOptionSuffix: W
                        })
                    },
                    position: k,
                    children: (e, t) => {
                        let {
                            "aria-expanded": n,
                            "aria-controls": r
                        } = e, {
                            isShown: s,
                            position: o
                        } = t, l = s ? A.default : v.default, {
                            ref: u,
                            onKeyDown: E
                        } = eU.containerProps;
                        return (0, i.jsxs)("div", {
                            ref: eS,
                            className: a(R, P.wrapper),
                            style: {
                                "--icons-width": "".concat(et, "px")
                            },
                            onBlur: e => {
                                var t, n, i;
                                !((null === (t = eS.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = e_.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!p && null != ev && eE(ev.label), eh(!1), eD(!1), null == J || J(e))
                            },
                            children: [(0, i.jsx)(f.FocusRing, {
                                ringTarget: es,
                                focusTarget: eo,
                                offset: 4,
                                children: (0, i.jsx)("div", {
                                    onClick: b ? void 0 : e => {
                                        e.stopPropagation(), e.preventDefault(), eE(""), eD(!0)
                                    },
                                    onMouseDown: e => {
                                        e.preventDefault()
                                    },
                                    ref: e => {
                                        es.current = e, eP.current = e
                                    },
                                    className: a(P.select, P.searchable, N, {
                                        [P.open]: s,
                                        [P.lookFilled]: G === D.SelectLooks.FILLED,
                                        [P.disabled]: b,
                                        [P.multi]: p,
                                        [P.selectPositionTop]: "top" === o
                                    }),
                                    children: (0, i.jsx)("div", {
                                        className: a(P.value, {
                                            [P.multi]: p
                                        }),
                                        children: (0, i.jsx)(eB, {
                                            query: ef,
                                            selectedOptions: eI,
                                            loading: eT,
                                            renderOptionPrefix: j,
                                            renderOptionSuffix: W,
                                            isDisabled: b,
                                            isEditing: ep,
                                            inputRef: eo,
                                            "aria-describedby": null != K ? K : ei,
                                            "aria-required": X,
                                            "aria-invalid": null != z ? z : null != er,
                                            "aria-labelledby": null != q ? q : en,
                                            "aria-expanded": n,
                                            setInputRef: e => {
                                                u.current = e, eo.current = e
                                            },
                                            onFocus: () => {
                                                var e, t;
                                                null === (e = eo.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == ef ? void 0 : ef.length) && void 0 !== t ? t : 0)
                                            },
                                            onChange: e => {
                                                eg(e), null == Y || Y(e), eE(e), eD(!0), eh(!0)
                                            },
                                            onKeyDown: e => {
                                                var t;
                                                null === (t = $.onKeyDown) || void 0 === t || t.call($, e), E(e), eF(e)
                                            },
                                            activeDescendant: el,
                                            placeholder: I,
                                            inputId: eO,
                                            listboxId: eR,
                                            navigatorId: eN,
                                            selectValue: function(e) {
                                                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                ek(e, t)
                                            },
                                            inputClassNames: Q
                                        })
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: a(P.icons, {
                                    [P.multi]: p,
                                    [P.iconsContainer]: !Z
                                }),
                                ref: ee,
                                children: [c && (null != ef && "" !== ef || eI.length > 0) ? (0, i.jsx)(d.Clickable, {
                                    "aria-label": y.default.Messages.CLEAR,
                                    "aria-controls": eO,
                                    onClick: ex,
                                    children: (0, i.jsx)(O.default, {
                                        width: 16,
                                        height: 16,
                                        className: P.clear
                                    })
                                }) : null, (0, i.jsx)(d.Clickable, {
                                    className: a({
                                        [P.iconsCenter]: Z
                                    }),
                                    "aria-label": ec ? y.default.Messages.CLOSE : y.default.Messages.OPEN,
                                    "aria-controls": eO,
                                    onClick: () => {
                                        eD(!ec)
                                    },
                                    children: (0, i.jsx)(l, {
                                        className: P.dropdownIcon
                                    })
                                })]
                            })]
                        })
                    }
                })
            })
        }),
        M = b;

    function U(e) {
        let {
            onSelect: t,
            closePopout: n,
            selectedValues: s,
            options: o,
            width: l,
            maxVisibleItems: c,
            activeDescendant: d,
            listRef: f,
            listId: E,
            renderOptionLabel: p,
            updatePosition: _,
            loading: T = !1,
            multi: g,
            popoutPosition: C,
            closeOnSelect: v,
            renderOptionPrefix: A = () => null,
            renderOptionSuffix: R = () => null
        } = e, N = r.useRef(null), O = r.useCallback(e => {
            t(e), v && n()
        }, [v, n, t]);
        return ((0, I.default)(_), T) ? (0, i.jsx)("div", {
            "aria-busy": !0,
            className: a(P.popout, P.loading, {
                [P.popoutPositionTop]: "top" === C
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(S.Spinner, {
                itemClassName: P.loadingSpinner,
                type: S.SpinnerTypes.PULSING_ELLIPSIS
            })
        }) : 0 === o.length ? (0, i.jsx)("div", {
            className: a(P.popout, P.noResults, {
                [P.popoutPositionTop]: "top" === C
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(m.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: y.default.Messages.NO_RESULTS_FOUND
            })
        }) : (0, i.jsx)(u.ListNavigatorContainer, {
            children: e => {
                let {
                    ref: t,
                    onKeyDown: n,
                    ...r
                } = e;
                return (0, i.jsx)(h.ListAuto, {
                    className: a(P.popout, P.searchableSelect, {
                        [P.noScrollbar]: o.length <= c,
                        [P.popoutPositionTop]: "top" === C
                    }),
                    style: {
                        width: l,
                        maxHeight: 44 * c
                    },
                    ref: e => {
                        var n;
                        f.current = e;
                        let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                        N.current = i, t.current = i
                    },
                    ...r,
                    role: void 0,
                    innerRole: "listbox",
                    innerAriaMultiselectable: g,
                    innerId: E,
                    rowHeight: 44,
                    sections: [o.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        var t;
                        let {
                            row: n
                        } = e, r = o[n], a = p(r);
                        return (0, i.jsx)(Option, {
                            multi: g,
                            "aria-posinset": n,
                            "aria-setsize": o.length,
                            isSelected: s.includes(r.value),
                            isFocused: d === String(r.value),
                            value: r.value,
                            label: a,
                            onSelect: O,
                            prefix: A(r, {
                                inPill: !1,
                                inDropdown: !0
                            }),
                            suffix: R(r, {
                                inPill: !1,
                                inDropdown: !0
                            })
                        }, null !== (t = r.key) && void 0 !== t ? t : n)
                    },
                    renderSection: () => null
                })
            }
        })
    }

    function G(e, t) {
        if (null == e || null == t) return !1;
        let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
        return (e.compareDocumentPosition(t) & n) === n
    }

    function w(e) {
        let {
            selectedOptions: t,
            selectValue: n,
            listRef: s,
            focusPreviousItem: a,
            focusNextItem: o,
            renderOptionSuffix: l,
            renderOptionPrefix: u
        } = e, c = r.useCallback(e => {
            let t = s.current;
            if (null != t) switch (e.key) {
                case "ArrowRight":
                    return e.stopPropagation(), e.preventDefault(), o();
                case "ArrowLeft":
                    return e.stopPropagation(), e.preventDefault(), a()
            }
        }, [s, a, o]), [d, f] = r.useState(null);
        return (0, i.jsx)("ul", {
            className: P.optionPillContainer,
            ref: s,
            onKeyDown: c,
            onFocus: e => {
                let t = e.target;
                null != s.current && G(s.current, t) && f(t.getAttribute("data-option-pill-value"))
            },
            onBlur: e => {
                let t = e.relatedTarget;
                !G(s.current, t) && f(null)
            },
            children: t.map((e, t) => (0, i.jsx)("li", {
                className: P.optionPillItem,
                children: (0, i.jsx)(B, {
                    focused: null == d ? 0 === t : d === String(e.value),
                    option: e,
                    onClick: () => n(e.value),
                    onKeyDown: async t => {
                        "Backspace" === t.key ? (await a(!0), n(e.value, !1)) : "Delete" === t.key && (await o(!0), n(e.value, !1))
                    },
                    renderOptionPrefix: u,
                    renderOptionSuffix: l
                })
            }, "".concat(e.label, "-").concat(e.value)))
        })
    }

    function Option(e) {
        let {
            value: t,
            label: n,
            prefix: r,
            suffix: s,
            onSelect: o,
            isSelected: l,
            isFocused: c,
            multi: f,
            ...E
        } = e, p = (0, u.useListItem)(String(t));
        return (0, i.jsxs)(d.Clickable, {
            tag: "li",
            style: {
                height: 44
            },
            focusProps: {
                enabled: !1
            },
            className: a(P.option, {
                [P.focused]: c,
                [P.multi]: f
            }),
            onClick: () => o(t),
            ...p,
            ...E,
            "aria-selected": l,
            id: p["data-list-item-id"],
            role: "option",
            children: [(0, i.jsxs)("div", {
                className: P.content,
                children: [n, "\xa0"]
            }), null != r && (0, i.jsx)("div", {
                className: P.prefix,
                children: r
            }), " ", null != s && (0, i.jsx)("div", {
                className: P.suffix,
                children: s
            }), " ", (0, i.jsx)(k, {
                isSelected: l,
                multi: f
            })]
        })
    }

    function k(e) {
        let {
            isSelected: t,
            multi: n
        } = e;
        return n ? (0, i.jsx)("div", {
            className: a(P.multiSelectCheckbox, {
                [P.checked]: t,
                [P.unchecked]: !t
            }),
            children: t && (0, i.jsx)(R.default, {
                foreground: P.multiSelectCheck
            })
        }) : t ? (0, i.jsx)(N.default, {
            "aria-hidden": !0,
            backgroundColor: "white",
            className: P.selectedIcon,
            width: 20,
            height: 20
        }) : null
    }

    function x(e) {
        let {
            selectedOptions: t,
            renderOptionPrefix: n,
            renderOptionSuffix: r,
            ...s
        } = e, a = t[0], o = null == n ? void 0 : n(null != a ? a : null, {
            inPill: !1,
            inDropdown: !1
        }), l = null == r ? void 0 : r(null != a ? a : null, {
            inPill: !1,
            inDropdown: !1
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [null != o ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                children: o
            }) : null, (0, i.jsx)(V, {
                selectedOptions: t,
                ...s
            }), null != l ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                children: l
            }) : null]
        })
    }

    function F(e) {
        let {
            query: t,
            placeholder: n,
            selectedOptions: s,
            selectValue: o,
            onKeyDown: u,
            isEditing: c,
            isDisabled: d,
            inputRef: f,
            renderOptionPrefix: E,
            renderOptionSuffix: p,
            inputClassNames: h,
            ..._
        } = e, S = Math.max(n.length, (null != t ? t : "").length), m = r.useRef(null), {
            focusPreviousItem: T,
            focusNextItem: g,
            focusLastItem: I
        } = function(e, t, n) {
            let i = r.useMemo(() => (0, l.createFocusManager)({
                    getFocusableElements() {
                        let t = e.current;
                        if (null != t) {
                            let e = t.querySelectorAll("[data-option-pill-value]");
                            return Array.from(e)
                        }
                        return []
                    },
                    getActiveElement() {
                        var t, n;
                        return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement
                    }
                }), [n]),
                s = r.useCallback(t => {
                    var n, i;
                    return t === (null === (i = e.current) || void 0 === i ? void 0 : null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.activeElement)
                }, [e]),
                a = r.useCallback(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = await i.getPreviousFocusableElement({
                            wrap: !e
                        });
                    if (e && ((null == n || s(n)) && (n = await i.getNextFocusableElement()), null == n || s(n))) {
                        var r;
                        return null === (r = t.current) || void 0 === r ? void 0 : r.focus()
                    }
                    return null == n ? void 0 : n.focus()
                }, [i, s, t]),
                o = r.useCallback(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = await i.getNextFocusableElement({
                            wrap: !e
                        });
                    if (e && ((null == n || s(n)) && (n = await i.getPreviousFocusableElement()), null == n || s(n))) {
                        var r;
                        return null === (r = t.current) || void 0 === r ? void 0 : r.focus()
                    }
                    return null == n ? void 0 : n.focus()
                }, [i, s, t]),
                u = r.useCallback(async () => {
                    let e = await i.getLastFocusableElement();
                    return null == e ? void 0 : e.focus()
                }, [i]);
            return {
                focusPreviousItem: a,
                focusNextItem: o,
                focusLastItem: u
            }
        }(m, f, s);
        return (0, i.jsxs)(i.Fragment, {
            children: [s.length > 0 && (0, i.jsx)(w, {
                listRef: m,
                selectedOptions: s,
                renderOptionPrefix: E,
                renderOptionSuffix: p,
                selectValue: o,
                focusNextItem: g,
                focusPreviousItem: T
            }), (0, i.jsx)(V, {
                style: {
                    minWidth: "".concat(S, "ch")
                },
                className: a(P.multi, h),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: s,
                isEditing: c,
                isDisabled: d,
                inputRef: f,
                onKeyDown: e => {
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && s.length > 0 ? I() : u(e)
                },
                ..._
            })]
        })
    }

    function V(e) {
        let {
            query: t,
            inputId: n,
            "aria-describedby": r,
            "aria-invalid": s,
            "aria-required": o,
            "aria-labelledby": l,
            "aria-expanded": c,
            isDisabled: d,
            listboxId: f,
            activeDescendant: E,
            navigatorId: p,
            onChange: h,
            onFocus: _,
            setInputRef: S,
            isEditing: m,
            onKeyDown: T,
            placeholder: g,
            loading: I,
            style: C,
            className: v
        } = e;
        return (0, i.jsx)("input", {
            role: "combobox",
            id: n,
            "aria-haspopup": "listbox",
            "aria-invalid": s,
            "aria-labelledby": l,
            "aria-autocomplete": "list",
            "aria-expanded": c,
            "aria-describedby": r,
            "aria-disabled": d,
            "aria-controls": f,
            "aria-required": o,
            "aria-busy": I,
            style: null != C ? C : {},
            "aria-activedescendant": null != E ? (0, u.createListItemId)(p, E) : "",
            disabled: d,
            value: null != t ? t : "",
            onChange: e => {
                h(e.target.value)
            },
            onFocus: _,
            className: a(P.searchInput, v, {
                [P.editing]: m,
                [P.disabled]: d
            }),
            onKeyDown: T,
            placeholder: "" !== (null != t ? t : "").trim() ? void 0 : g,
            ref: S
        })
    }

    function B(e) {
        let {
            option: t,
            focused: n,
            onClick: r,
            onKeyDown: s,
            renderOptionPrefix: a,
            renderOptionSuffix: o
        } = e, l = null == a ? void 0 : a(t, {
            inPill: !0,
            inDropdown: !1
        }), u = null == o ? void 0 : o(t, {
            inPill: !0,
            inDropdown: !1
        });
        return (0, i.jsx)(f.FocusRing, {
            offset: 3,
            children: (0, i.jsxs)(c.Button, {
                tabIndex: n ? 0 : -1,
                "data-option-pill-value": t.value,
                className: P.optionPillBtn,
                innerClassName: P.optionPill,
                onClick: () => null == r ? void 0 : r(t.value),
                onKeyDown: s,
                children: [(0, i.jsx)("div", {
                    className: P.content,
                    children: t.label
                }), null != l && (0, i.jsx)("div", {
                    className: P.prefix,
                    children: l
                }), " ", null != u && (0, i.jsx)("div", {
                    className: P.suffix,
                    children: u
                }), (0, i.jsx)(p.HiddenVisually, {
                    children: y.default.Messages.REMOVE
                }), (0, i.jsx)(O.default, {
                    className: P.deleteOptionIcon,
                    width: 14,
                    height: 14
                })]
            })
        })
    }
}