function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchableSelect: function() {
            return b
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("165994"),
        l = n("71185"),
        u = n("974667"),
        d = n("271841"),
        c = n("227645"),
        _ = n("718776"),
        f = n("516826"),
        E = n("741662"),
        h = n("433600"),
        g = n("442761"),
        m = n("242670"),
        p = n("577776"),
        S = n("731898"),
        T = n("811425"),
        v = n("31695"),
        I = n("561744"),
        A = n("837899"),
        C = n("425190"),
        y = n("36694"),
        N = n("578706"),
        R = n("945330"),
        O = n("178814"),
        D = n("782340"),
        P = n("800836");

    function L(e) {
        return e.label
    }
    let M = s.forwardRef(function(e, t) {
            let {
                options: n,
                value: r,
                onChange: l,
                clearable: d = !1,
                multi: E = !1,
                closeOnSelect: h = !0,
                onOpen: m,
                onClose: p,
                placeholder: v = D.default.Messages.SELECT,
                wrapperClassName: y,
                className: N,
                isDisabled: M = !1,
                maxVisibleItems: b = 7,
                look: w = O.SelectLooks.FILLED,
                autoFocus: k = !1,
                popoutPosition: V = "bottom",
                filter: x = !0,
                debounceTime: B,
                renderOptionLabel: H = L,
                onSearchChange: Y,
                renderOptionPrefix: K = () => null,
                renderOptionSuffix: j = () => null,
                "aria-describedby": W,
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
            } = (0, S.default)(), {
                titleId: en,
                errorId: ei,
                error: es
            } = (0, f.useFormContext)(), {
                ref: er,
                width: ea
            } = (0, S.default)(), eo = s.useRef(null), [el, eu] = s.useState(null), [ed, ec] = s.useState(!1), [e_, ef] = s.useState(null), [eE, eh] = s.useState(!1), eg = s.useRef(null), em = s.useRef(null), {
                options: ep,
                loading: eS,
                onQueryChange: eT
            } = function(e) {
                let {
                    active: t,
                    loadableOptions: n,
                    debounceTime: i
                } = e, r = "function" == typeof n, [a, o] = s.useState({
                    options: r ? [] : n,
                    query: "",
                    debouncedQuery: "",
                    loading: !1
                }), {
                    options: l,
                    loading: u,
                    query: d,
                    debouncedQuery: c
                } = a, _ = s.useCallback(e => o(t => ({
                    ...t,
                    loading: r,
                    query: e,
                    debouncedQuery: e
                })), [r]);
                s.useEffect(() => {
                    t && _("")
                }, [t, _]), s.useEffect(() => {
                    let e;
                    return r ? (o(e => ({
                        ...e,
                        loading: !0,
                        debouncedQuery: null
                    })), e = setTimeout(() => {
                        _(d)
                    }, null != i ? i : 500)) : _(d), () => {
                        clearTimeout(e)
                    }
                }, [r, d, i, _]), s.useEffect(() => {
                    let e = !1;
                    return t && null !== c && ("function" == typeof n ? n(c) : Promise.resolve(n)).then(t => {
                        !e && o(e => ({
                            ...e,
                            options: t,
                            loading: !1
                        }))
                    }), () => {
                        e = !0
                    }
                }, [t, n, c]);
                let f = s.useCallback(e => {
                    o(t => ({
                        ...t,
                        query: e
                    }))
                }, []);
                return {
                    options: l,
                    loading: u,
                    onQueryChange: f
                }
            }({
                active: ed,
                loadableOptions: n,
                debounceTime: B
            }), ev = s.useMemo(() => (function(e, t) {
                if (null == t) return [];
                let n = Array.isArray(t) ? t : [t];
                return n.map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
            })(ep, r), [ep, r]), eI = s.useMemo(() => ev.map(e => e.value), [ev]), eA = ev[ev.length - 1], eC = (0, I.default)(eA), ey = s.useId(), eN = s.useId(), eR = s.useId(), eO = s.useCallback(e => {
                ed !== e && !M && (ec(e), e ? null == m || m() : null == p || p())
            }, [M, p, m, ed]), eD = s.useCallback(e => {
                ed && !e && eO(!1)
            }, [eO, ed]), eP = (0, T.useIsVisible)(eD);
            s.useImperativeHandle(t, () => ({
                close() {
                    eO(!1)
                }
            }));
            let eL = s.useCallback((e, t) => {
                    let n = document.querySelector(e),
                        i = eg.current;
                    eu(t), null != i && null != n && i.scrollIntoViewNode({
                        node: n
                    })
                }, []),
                eM = s.useCallback(() => new Promise(e => {
                    let t = eg.current;
                    if (null == t) return e();
                    t.scrollToTop({
                        callback: () => requestAnimationFrame(() => e())
                    })
                }), []),
                eb = s.useCallback(() => new Promise(e => {
                    let t = eg.current;
                    if (null == t) return e();
                    t.scrollToBottom({
                        callback: () => requestAnimationFrame(() => e())
                    })
                }), []),
                eU = (0, u.default)({
                    id: eN,
                    defaultFocused: null != eA ? String(eA.value) : void 0,
                    scrollToStart: eM,
                    scrollToEnd: eb,
                    isEnabled: ed,
                    wrap: !0,
                    useVirtualFocus: !0,
                    setFocus: eL,
                    disableClickOnSpace: !0
                }),
                ew = (0, I.default)(eU),
                ek = (0, I.default)(ep);
            s.useEffect(() => {
                let e = ek.current,
                    t = eC.current;
                ed && null != t && !eS && requestAnimationFrame(() => {
                    let n = eg.current,
                        i = e.indexOf(t);
                    null == n || n.scrollToIndex({
                        section: 0,
                        row: i
                    })
                })
            }, [ed, eS]), s.useEffect(() => {
                let e = ew.current;
                if (ed && !eS) {
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
                    let t = eC.current,
                        n = null != t ? String(t.value) : null;
                    e.setFocus(n), eu(null)
                }
            }, [ed, eS]), s.useLayoutEffect(() => {
                !ed && (E ? ef("") : null != eA && ef(eA.label))
            }, [E, eA, ed]), s.useLayoutEffect(() => {
                E && ef("")
            }, [E, ev.length]);
            let eV = s.useCallback(function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (null == e) {
                    l(E ? [] : void 0);
                    return
                }
                let i = "function" == typeof n,
                    s = i ? ep.find(t => t.value === e) : e;
                if (E) {
                    let n = null != r ? r : [],
                        o = n.some(t => (i ? t.value : t) === e);
                    if (o ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, s]), t) {
                        var a;
                        null === (a = eo.current) || void 0 === a || a.focus()
                    }
                } else l(s);
                eu(null), (!E || h) && eO(!1), eh(!1)
            }, [n, ep, E, h, l, r, eO]);
            s.useLayoutEffect(() => {
                if (k) {
                    var e;
                    null === (e = eo.current) || void 0 === e || e.focus()
                }
            }, [k]);
            let eG = s.useCallback(() => {
                    ef(""), eV(null), eO(!0)
                }, [eV, eO]),
                eF = s.useCallback(e => {
                    switch (e.key) {
                        case "Escape":
                            ed && (e.stopPropagation(), eO(!1));
                            break;
                        case "ArrowDown":
                        case "ArrowUp":
                            eO(!0)
                    }
                }, [eO, ed]),
                ex = ep;
            eE && null != e_ && !1 !== x && (ex = "function" == typeof x ? x(ep, e_) : (0, o.matchSorter)(ep, e_, {
                keys: ["label"]
            })), s.useEffect(() => {
                let e = eg.current;
                null == e || e.scrollToTop()
            }, [e_]), s.useEffect(() => {
                !eS && eE && null !== e_ && requestAnimationFrame(() => eU.focusFirstVisibleItem())
            }, [eS, eE, e_]);
            let eB = E ? F : G;
            return (0, i.jsx)(u.ListNavigatorProvider, {
                navigator: eU,
                children: (0, i.jsx)(g.Popout, {
                    spacing: 0,
                    animation: g.Popout.Animation.NONE,
                    shouldShow: ed,
                    onRequestClose: () => eO(!1),
                    layerContext: $.popoutLayerContext,
                    renderPopout: e => {
                        let {
                            closePopout: t,
                            position: n,
                            updatePosition: s
                        } = e;
                        return (0, i.jsx)(U, {
                            loading: eS,
                            multi: E,
                            listRef: eg,
                            listId: ey,
                            maxVisibleItems: b,
                            width: ea,
                            selectedValues: eI,
                            closePopout: t,
                            onSelect: eV,
                            closeOnSelect: h,
                            options: ex,
                            activeDescendant: el,
                            renderOptionLabel: H,
                            updatePosition: s,
                            popoutPosition: n,
                            renderOptionPrefix: K,
                            renderOptionSuffix: j
                        })
                    },
                    position: V,
                    children: (e, t) => {
                        let {
                            "aria-expanded": n,
                            "aria-controls": s
                        } = e, {
                            isShown: r,
                            position: o
                        } = t, l = r ? C.default : A.default, {
                            ref: u,
                            onKeyDown: f
                        } = eU.containerProps;
                        return (0, i.jsxs)("div", {
                            ref: em,
                            className: a(y, P.wrapper),
                            style: {
                                "--icons-width": "".concat(et, "px")
                            },
                            onBlur: e => {
                                var t, n, i;
                                !((null === (t = em.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = eg.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!E && null != eA && ef(eA.label), eh(!1), eO(!1), null == J || J(e))
                            },
                            children: [(0, i.jsx)(_.FocusRing, {
                                ringTarget: er,
                                focusTarget: eo,
                                offset: 4,
                                children: (0, i.jsx)("div", {
                                    onClick: M ? void 0 : e => {
                                        e.stopPropagation(), e.preventDefault(), ef(""), eO(!0)
                                    },
                                    onMouseDown: e => {
                                        e.preventDefault()
                                    },
                                    ref: e => {
                                        er.current = e, eP.current = e
                                    },
                                    className: a(P.select, P.searchable, N, {
                                        [P.open]: r,
                                        [P.lookFilled]: w === O.SelectLooks.FILLED,
                                        [P.disabled]: M,
                                        [P.multi]: E,
                                        [P.selectPositionTop]: "top" === o
                                    }),
                                    children: (0, i.jsx)("div", {
                                        className: a(P.value, {
                                            [P.multi]: E
                                        }),
                                        children: (0, i.jsx)(eB, {
                                            query: e_,
                                            selectedOptions: ev,
                                            loading: eS,
                                            renderOptionPrefix: K,
                                            renderOptionSuffix: j,
                                            isDisabled: M,
                                            isEditing: eE,
                                            inputRef: eo,
                                            "aria-describedby": null != W ? W : ei,
                                            "aria-required": X,
                                            "aria-invalid": null != z ? z : null != es,
                                            "aria-labelledby": null != q ? q : en,
                                            "aria-expanded": n,
                                            setInputRef: e => {
                                                u.current = e, eo.current = e
                                            },
                                            onFocus: () => {
                                                var e, t;
                                                null === (e = eo.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == e_ ? void 0 : e_.length) && void 0 !== t ? t : 0)
                                            },
                                            onChange: e => {
                                                eT(e), null == Y || Y(e), ef(e), eO(!0), eh(!0)
                                            },
                                            onKeyDown: e => {
                                                var t;
                                                null === (t = $.onKeyDown) || void 0 === t || t.call($, e), f(e), eF(e)
                                            },
                                            activeDescendant: el,
                                            placeholder: v,
                                            inputId: eR,
                                            listboxId: ey,
                                            navigatorId: eN,
                                            selectValue: function(e) {
                                                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                eV(e, t)
                                            },
                                            inputClassNames: Q
                                        })
                                    })
                                })
                            }), (0, i.jsxs)("div", {
                                className: a(P.icons, {
                                    [P.multi]: E,
                                    [P.iconsContainer]: !Z
                                }),
                                ref: ee,
                                children: [d && (null != e_ && "" !== e_ || ev.length > 0) ? (0, i.jsx)(c.Clickable, {
                                    "aria-label": D.default.Messages.CLEAR,
                                    "aria-controls": eR,
                                    onClick: eG,
                                    children: (0, i.jsx)(R.default, {
                                        width: 16,
                                        height: 16,
                                        className: P.clear
                                    })
                                }) : null, (0, i.jsx)(c.Clickable, {
                                    className: a({
                                        [P.iconsCenter]: Z
                                    }),
                                    "aria-label": ed ? D.default.Messages.CLOSE : D.default.Messages.OPEN,
                                    "aria-controls": eR,
                                    onClick: () => {
                                        eO(!ed)
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
        b = M;

    function U(e) {
        let {
            onSelect: t,
            closePopout: n,
            selectedValues: r,
            options: o,
            width: l,
            maxVisibleItems: d,
            activeDescendant: c,
            listRef: _,
            listId: f,
            renderOptionLabel: E,
            updatePosition: g,
            loading: S = !1,
            multi: T,
            popoutPosition: I,
            closeOnSelect: A,
            renderOptionPrefix: C = () => null,
            renderOptionSuffix: y = () => null
        } = e, N = s.useRef(null), R = s.useCallback(e => {
            t(e), A && n()
        }, [A, n, t]);
        return ((0, v.default)(g), S) ? (0, i.jsx)("div", {
            "aria-busy": !0,
            className: a(P.popout, P.loading, {
                [P.popoutPositionTop]: "top" === I
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(m.Spinner, {
                itemClassName: P.loadingSpinner,
                type: m.SpinnerTypes.PULSING_ELLIPSIS
            })
        }) : 0 === o.length ? (0, i.jsx)("div", {
            className: a(P.popout, P.noResults, {
                [P.popoutPositionTop]: "top" === I
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(p.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: D.default.Messages.NO_RESULTS_FOUND
            })
        }) : (0, i.jsx)(u.ListNavigatorContainer, {
            children: e => {
                let {
                    ref: t,
                    onKeyDown: n,
                    ...s
                } = e;
                return (0, i.jsx)(h.ListAuto, {
                    className: a(P.popout, P.searchableSelect, {
                        [P.noScrollbar]: o.length <= d,
                        [P.popoutPositionTop]: "top" === I
                    }),
                    style: {
                        width: l,
                        maxHeight: 44 * d
                    },
                    ref: e => {
                        var n;
                        _.current = e;
                        let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                        N.current = i, t.current = i
                    },
                    ...s,
                    role: void 0,
                    innerRole: "listbox",
                    innerAriaMultiselectable: T,
                    innerId: f,
                    rowHeight: 44,
                    sections: [o.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        var t;
                        let {
                            row: n
                        } = e, s = o[n], a = E(s);
                        return (0, i.jsx)(Option, {
                            multi: T,
                            "aria-posinset": n,
                            "aria-setsize": o.length,
                            isSelected: r.includes(s.value),
                            isFocused: c === String(s.value),
                            value: s.value,
                            label: a,
                            onSelect: R,
                            prefix: C(s, {
                                inPill: !1,
                                inDropdown: !0
                            }),
                            suffix: y(s, {
                                inPill: !1,
                                inDropdown: !0
                            })
                        }, null !== (t = s.key) && void 0 !== t ? t : n)
                    },
                    renderSection: () => null
                })
            }
        })
    }

    function w(e, t) {
        if (null == e || null == t) return !1;
        let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
        return (e.compareDocumentPosition(t) & n) === n
    }

    function k(e) {
        let {
            selectedOptions: t,
            selectValue: n,
            listRef: r,
            focusPreviousItem: a,
            focusNextItem: o,
            renderOptionSuffix: l,
            renderOptionPrefix: u
        } = e, d = s.useCallback(e => {
            let t = r.current;
            if (null != t) switch (e.key) {
                case "ArrowRight":
                    return e.stopPropagation(), e.preventDefault(), o();
                case "ArrowLeft":
                    return e.stopPropagation(), e.preventDefault(), a()
            }
        }, [r, a, o]), [c, _] = s.useState(null);
        return (0, i.jsx)("ul", {
            className: P.optionPillContainer,
            ref: r,
            onKeyDown: d,
            onFocus: e => {
                let t = e.target;
                null != r.current && w(r.current, t) && _(t.getAttribute("data-option-pill-value"))
            },
            onBlur: e => {
                let t = e.relatedTarget;
                !w(r.current, t) && _(null)
            },
            children: t.map((e, t) => (0, i.jsx)("li", {
                className: P.optionPillItem,
                children: (0, i.jsx)(B, {
                    focused: null == c ? 0 === t : c === String(e.value),
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
            prefix: s,
            suffix: r,
            onSelect: o,
            isSelected: l,
            isFocused: d,
            multi: _,
            ...f
        } = e, E = (0, u.useListItem)(String(t));
        return (0, i.jsxs)(c.Clickable, {
            tag: "li",
            style: {
                height: 44
            },
            focusProps: {
                enabled: !1
            },
            className: a(P.option, {
                [P.focused]: d,
                [P.multi]: _
            }),
            onClick: () => o(t),
            ...E,
            ...f,
            "aria-selected": l,
            id: E["data-list-item-id"],
            role: "option",
            children: [(0, i.jsxs)("div", {
                className: P.content,
                children: [n, "\xa0"]
            }), null != s && (0, i.jsx)("div", {
                className: P.prefix,
                children: s
            }), " ", null != r && (0, i.jsx)("div", {
                className: P.suffix,
                children: r
            }), " ", (0, i.jsx)(V, {
                isSelected: l,
                multi: _
            })]
        })
    }

    function V(e) {
        let {
            isSelected: t,
            multi: n
        } = e;
        return n ? (0, i.jsx)("div", {
            className: a(P.multiSelectCheckbox, {
                [P.checked]: t,
                [P.unchecked]: !t
            }),
            children: t && (0, i.jsx)(y.default, {
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

    function G(e) {
        let {
            selectedOptions: t,
            renderOptionPrefix: n,
            renderOptionSuffix: s,
            ...r
        } = e, a = t[0], o = null == n ? void 0 : n(null != a ? a : null, {
            inPill: !1,
            inDropdown: !1
        }), l = null == s ? void 0 : s(null != a ? a : null, {
            inPill: !1,
            inDropdown: !1
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [null != o ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                children: o
            }) : null, (0, i.jsx)(x, {
                selectedOptions: t,
                ...r
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
            selectedOptions: r,
            selectValue: o,
            onKeyDown: u,
            isEditing: d,
            isDisabled: c,
            inputRef: _,
            renderOptionPrefix: f,
            renderOptionSuffix: E,
            inputClassNames: h,
            ...g
        } = e, m = Math.max(n.length, (null != t ? t : "").length), p = s.useRef(null), {
            focusPreviousItem: S,
            focusNextItem: T,
            focusLastItem: v
        } = function(e, t, n) {
            let i = s.useMemo(() => (0, l.createFocusManager)({
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
                r = s.useCallback(t => {
                    var n, i;
                    return t === (null === (i = e.current) || void 0 === i ? void 0 : null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.activeElement)
                }, [e]),
                a = s.useCallback(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = await i.getPreviousFocusableElement({
                            wrap: !e
                        });
                    if (e && ((null == n || r(n)) && (n = await i.getNextFocusableElement()), null == n || r(n))) {
                        var s;
                        return null === (s = t.current) || void 0 === s ? void 0 : s.focus()
                    }
                    return null == n ? void 0 : n.focus()
                }, [i, r, t]),
                o = s.useCallback(async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = await i.getNextFocusableElement({
                            wrap: !e
                        });
                    if (e && ((null == n || r(n)) && (n = await i.getPreviousFocusableElement()), null == n || r(n))) {
                        var s;
                        return null === (s = t.current) || void 0 === s ? void 0 : s.focus()
                    }
                    return null == n ? void 0 : n.focus()
                }, [i, r, t]),
                u = s.useCallback(async () => {
                    let e = await i.getLastFocusableElement();
                    return null == e ? void 0 : e.focus()
                }, [i]);
            return {
                focusPreviousItem: a,
                focusNextItem: o,
                focusLastItem: u
            }
        }(p, _, r);
        return (0, i.jsxs)(i.Fragment, {
            children: [r.length > 0 && (0, i.jsx)(k, {
                listRef: p,
                selectedOptions: r,
                renderOptionPrefix: f,
                renderOptionSuffix: E,
                selectValue: o,
                focusNextItem: T,
                focusPreviousItem: S
            }), (0, i.jsx)(x, {
                style: {
                    minWidth: "".concat(m, "ch")
                },
                className: a(P.multi, h),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: r,
                isEditing: d,
                isDisabled: c,
                inputRef: _,
                onKeyDown: e => {
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && r.length > 0 ? v() : u(e)
                },
                ...g
            })]
        })
    }

    function x(e) {
        let {
            query: t,
            inputId: n,
            "aria-describedby": s,
            "aria-invalid": r,
            "aria-required": o,
            "aria-labelledby": l,
            "aria-expanded": d,
            isDisabled: c,
            listboxId: _,
            activeDescendant: f,
            navigatorId: E,
            onChange: h,
            onFocus: g,
            setInputRef: m,
            isEditing: p,
            onKeyDown: S,
            placeholder: T,
            loading: v,
            style: I,
            className: A
        } = e;
        return (0, i.jsx)("input", {
            role: "combobox",
            id: n,
            "aria-haspopup": "listbox",
            "aria-invalid": r,
            "aria-labelledby": l,
            "aria-autocomplete": "list",
            "aria-expanded": d,
            "aria-describedby": s,
            "aria-disabled": c,
            "aria-controls": _,
            "aria-required": o,
            "aria-busy": v,
            style: null != I ? I : {},
            "aria-activedescendant": null != f ? (0, u.createListItemId)(E, f) : "",
            disabled: c,
            value: null != t ? t : "",
            onChange: e => {
                h(e.target.value)
            },
            onFocus: g,
            className: a(P.searchInput, A, {
                [P.editing]: p,
                [P.disabled]: c
            }),
            onKeyDown: S,
            placeholder: "" !== (null != t ? t : "").trim() ? void 0 : T,
            ref: m
        })
    }

    function B(e) {
        let {
            option: t,
            focused: n,
            onClick: s,
            onKeyDown: r,
            renderOptionPrefix: a,
            renderOptionSuffix: o
        } = e, l = null == a ? void 0 : a(t, {
            inPill: !0,
            inDropdown: !1
        }), u = null == o ? void 0 : o(t, {
            inPill: !0,
            inDropdown: !1
        });
        return (0, i.jsx)(_.FocusRing, {
            offset: 3,
            children: (0, i.jsxs)(d.Button, {
                tabIndex: n ? 0 : -1,
                "data-option-pill-value": t.value,
                className: P.optionPillBtn,
                innerClassName: P.optionPill,
                onClick: () => null == s ? void 0 : s(t.value),
                onKeyDown: r,
                children: [(0, i.jsx)("div", {
                    className: P.content,
                    children: t.label
                }), null != l && (0, i.jsx)("div", {
                    className: P.prefix,
                    children: l
                }), " ", null != u && (0, i.jsx)("div", {
                    className: P.suffix,
                    children: u
                }), (0, i.jsx)(E.HiddenVisually, {
                    children: D.default.Messages.REMOVE
                }), (0, i.jsx)(R.default, {
                    className: P.deleteOptionIcon,
                    width: 14,
                    height: 14
                })]
            })
        })
    }
}