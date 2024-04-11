function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchableSelect: function() {
            return P
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("423802"),
        l = n("372817"),
        u = n("924826"),
        d = n("693789"),
        _ = n("1561"),
        c = n("84735"),
        E = n("15127"),
        I = n("766646"),
        T = n("742746"),
        f = n("235874"),
        S = n("922770"),
        A = n("993365"),
        h = n("393238"),
        m = n("434650"),
        N = n("98650"),
        O = n("863840"),
        p = n("86813"),
        R = n("826026"),
        C = n("263704"),
        g = n("441674"),
        L = n("465670"),
        D = n("748585"),
        v = n("689938"),
        M = n("60772");

    function y(e) {
        return e.label
    }
    let P = r.forwardRef(function(e, t) {
        let {
            options: n,
            value: s,
            onChange: l,
            clearable: d = !1,
            multi: I = !1,
            closeOnSelect: T = !0,
            onOpen: S,
            onClose: A,
            placeholder: N = v.default.Messages.SELECT,
            wrapperClassName: C,
            className: g,
            isDisabled: P = !1,
            maxVisibleItems: b = 7,
            look: G = D.SelectLooks.FILLED,
            autoFocus: w = !1,
            popoutPosition: k = "bottom",
            filter: F = !0,
            debounceTime: x,
            renderOptionLabel: H = y,
            onSearchChange: Y,
            renderOptionPrefix: j = () => null,
            renderOptionSuffix: W = () => null,
            "aria-describedby": K,
            "aria-invalid": z,
            "aria-labelledby": X,
            "aria-required": Q,
            inputClassNames: q,
            centerCaret: J = !1,
            onBlur: Z,
            ...$
        } = e, {
            ref: ee,
            width: et
        } = (0, h.default)(), {
            titleId: en,
            errorId: ei,
            error: er
        } = (0, E.useFormContext)(), {
            ref: es,
            width: ea
        } = (0, h.default)(), eo = r.useRef(null), [el, eu] = r.useState(null), [ed, e_] = r.useState(!1), [ec, eE] = r.useState(null), [eI, eT] = r.useState(!1), ef = r.useRef(null), eS = r.useRef(null), {
            options: eA,
            loading: eh,
            onQueryChange: em
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
                query: d,
                debouncedQuery: _
            } = a, c = r.useCallback(e => o(t => ({
                ...t,
                loading: s,
                query: e,
                debouncedQuery: e
            })), [s]);
            return r.useEffect(() => {
                t && c("")
            }, [t, c]), r.useEffect(() => {
                let e;
                return s ? (o(e => ({
                    ...e,
                    loading: !0,
                    debouncedQuery: null
                })), e = setTimeout(() => {
                    c(d)
                }, null != i ? i : 500)) : c(d), () => {
                    clearTimeout(e)
                }
            }, [s, d, i, c]), r.useEffect(() => {
                let e = !1;
                return t && null !== _ && ("function" == typeof n ? n(_) : Promise.resolve(n)).then(t => {
                    !e && o(e => ({
                        ...e,
                        options: t,
                        loading: !1
                    }))
                }), () => {
                    e = !0
                }
            }, [t, n, _]), {
                options: l,
                loading: u,
                onQueryChange: r.useCallback(e => {
                    o(t => ({
                        ...t,
                        query: e
                    }))
                }, [])
            }
        }({
            active: ed,
            loadableOptions: n,
            debounceTime: x
        }), eN = r.useMemo(() => {
            var e, t;
            return e = eA, null == (t = s) ? [] : (Array.isArray(t) ? t : [t]).map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
        }, [eA, s]), eO = r.useMemo(() => eN.map(e => e.value), [eN]), ep = eN[eN.length - 1], eR = (0, O.default)(ep), eC = r.useId(), eg = r.useId(), eL = r.useId(), eD = r.useCallback(e => {
            ed !== e && !P && (e_(e), e ? null == S || S() : null == A || A())
        }, [P, A, S, ed]), ev = r.useCallback(e => {
            ed && !e && eD(!1)
        }, [eD, ed]), eM = (0, m.useIsVisible)(ev);
        r.useImperativeHandle(t, () => ({
            close() {
                eD(!1)
            }
        }));
        let ey = r.useCallback((e, t) => {
                let n = document.querySelector(e),
                    i = ef.current;
                eu(t), null != i && null != n && i.scrollIntoViewNode({
                    node: n
                })
            }, []),
            eP = r.useCallback(() => new Promise(e => {
                let t = ef.current;
                if (null == t) return e();
                t.scrollToTop({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            eU = r.useCallback(() => new Promise(e => {
                let t = ef.current;
                if (null == t) return e();
                t.scrollToBottom({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            eb = (0, u.default)({
                id: eg,
                defaultFocused: null != ep ? String(ep.value) : void 0,
                scrollToStart: eP,
                scrollToEnd: eU,
                isEnabled: ed,
                wrap: !0,
                useVirtualFocus: !0,
                setFocus: ey,
                disableClickOnSpace: !0
            }),
            eG = (0, O.default)(eb),
            ew = (0, O.default)(eA);
        r.useEffect(() => {
            let e = ew.current,
                t = eR.current;
            ed && null != t && !eh && requestAnimationFrame(() => {
                let n = ef.current,
                    i = e.indexOf(t);
                null == n || n.scrollToIndex({
                    section: 0,
                    row: i
                })
            })
        }, [ed, eh]), r.useEffect(() => {
            let e = eG.current;
            if (ed && !eh) {
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
                let t = eR.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eu(null)
            }
        }, [ed, eh]), r.useLayoutEffect(() => {
            !ed && (I ? eE("") : null != ep && eE(ep.label))
        }, [I, ep, ed]), r.useLayoutEffect(() => {
            I && eE("")
        }, [I, eN.length]);
        let ek = r.useCallback(function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                l(I ? [] : void 0);
                return
            }
            let i = "function" == typeof n,
                r = i ? eA.find(t => t.value === e) : e;
            if (I) {
                let n = null != s ? s : [];
                if (n.some(t => (i ? t.value : t) === e) ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
                    var a;
                    null === (a = eo.current) || void 0 === a || a.focus()
                }
            } else l(r);
            eu(null), (!I || T) && eD(!1), eT(!1)
        }, [n, eA, I, T, l, s, eD]);
        r.useLayoutEffect(() => {
            if (w) {
                var e;
                null === (e = eo.current) || void 0 === e || e.focus()
            }
        }, [w]);
        let eB = r.useCallback(() => {
                eE(""), ek(null), eD(!0)
            }, [ek, eD]),
            eV = r.useCallback(e => {
                switch (e.key) {
                    case "Escape":
                        ed && (e.stopPropagation(), eD(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eD(!0)
                }
            }, [eD, ed]),
            eF = eA;
        eI && null != ec && !1 !== F && (eF = "function" == typeof F ? F(eA, ec) : (0, o.matchSorter)(eA, ec, {
            keys: ["label"]
        })), r.useEffect(() => {
            let e = ef.current;
            null == e || e.scrollToTop()
        }, [ec]), r.useEffect(() => {
            !eh && eI && null !== ec && requestAnimationFrame(() => eb.focusFirstVisibleItem())
        }, [eh, eI, ec]);
        let ex = I ? V : B;
        return (0, i.jsx)(u.ListNavigatorProvider, {
            navigator: eb,
            children: (0, i.jsx)(f.Popout, {
                spacing: 0,
                animation: f.Popout.Animation.NONE,
                shouldShow: ed,
                onRequestClose: () => eD(!1),
                layerContext: $.popoutLayerContext,
                renderPopout: e => {
                    let {
                        closePopout: t,
                        position: n,
                        updatePosition: r
                    } = e;
                    return (0, i.jsx)(U, {
                        loading: eh,
                        multi: I,
                        listRef: ef,
                        listId: eC,
                        maxVisibleItems: b,
                        width: ea,
                        selectedValues: eO,
                        closePopout: t,
                        onSelect: ek,
                        closeOnSelect: T,
                        options: eF,
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
                    } = t, l = s ? R.default : p.default, {
                        ref: u,
                        onKeyDown: E
                    } = eb.containerProps;
                    return (0, i.jsxs)("div", {
                        ref: eS,
                        className: a()(C, M.wrapper),
                        style: {
                            "--icons-width": "".concat(et, "px")
                        },
                        onBlur: e => {
                            var t, n, i;
                            !((null === (t = eS.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = ef.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!I && null != ep && eE(ep.label), eT(!1), eD(!1), null == Z || Z(e))
                        },
                        children: [(0, i.jsx)(c.FocusRing, {
                            ringTarget: es,
                            focusTarget: eo,
                            offset: 4,
                            children: (0, i.jsx)("div", {
                                onClick: P ? void 0 : e => {
                                    e.stopPropagation(), e.preventDefault(), eE(""), eD(!0)
                                },
                                onMouseDown: e => {
                                    e.preventDefault()
                                },
                                ref: e => {
                                    es.current = e, eM.current = e
                                },
                                className: a()(M.select, M.searchable, g, {
                                    [M.open]: s,
                                    [M.lookFilled]: G === D.SelectLooks.FILLED,
                                    [M.disabled]: P,
                                    [M.multi]: I,
                                    [M.selectPositionTop]: "top" === o
                                }),
                                children: (0, i.jsx)("div", {
                                    className: a()(M.value, {
                                        [M.multi]: I
                                    }),
                                    children: (0, i.jsx)(ex, {
                                        query: ec,
                                        selectedOptions: eN,
                                        loading: eh,
                                        renderOptionPrefix: j,
                                        renderOptionSuffix: W,
                                        isDisabled: P,
                                        isEditing: eI,
                                        inputRef: eo,
                                        "aria-describedby": null != K ? K : ei,
                                        "aria-required": Q,
                                        "aria-invalid": null != z ? z : null != er,
                                        "aria-labelledby": null != X ? X : en,
                                        "aria-expanded": n,
                                        setInputRef: e => {
                                            u.current = e, eo.current = e
                                        },
                                        onFocus: () => {
                                            var e, t;
                                            null === (e = eo.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == ec ? void 0 : ec.length) && void 0 !== t ? t : 0)
                                        },
                                        onChange: e => {
                                            em(e), null == Y || Y(e), eE(e), eD(!0), eT(!0)
                                        },
                                        onKeyDown: e => {
                                            var t;
                                            null === (t = $.onKeyDown) || void 0 === t || t.call($, e), E(e), eV(e)
                                        },
                                        activeDescendant: el,
                                        placeholder: N,
                                        inputId: eL,
                                        listboxId: eC,
                                        navigatorId: eg,
                                        selectValue: function(e) {
                                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                            ek(e, t)
                                        },
                                        inputClassNames: q
                                    })
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: a()(M.icons, {
                                [M.multi]: I,
                                [M.iconsContainer]: !J
                            }),
                            ref: ee,
                            children: [d && (null != ec && "" !== ec || eN.length > 0) ? (0, i.jsx)(_.Clickable, {
                                "aria-label": v.default.Messages.CLEAR,
                                "aria-controls": eL,
                                onClick: eB,
                                children: (0, i.jsx)(L.default, {
                                    width: 16,
                                    height: 16,
                                    className: M.clear
                                })
                            }) : null, (0, i.jsx)(_.Clickable, {
                                className: a()({
                                    [M.iconsCenter]: J
                                }),
                                "aria-label": ed ? v.default.Messages.CLOSE : v.default.Messages.OPEN,
                                "aria-controls": eL,
                                onClick: () => {
                                    eD(!ed)
                                },
                                children: (0, i.jsx)(l, {
                                    className: M.dropdownIcon
                                })
                            })]
                        })]
                    })
                }
            })
        })
    });

    function U(e) {
        let {
            onSelect: t,
            closePopout: n,
            selectedValues: s,
            options: o,
            width: l,
            maxVisibleItems: d,
            activeDescendant: _,
            listRef: c,
            listId: E,
            renderOptionLabel: I,
            updatePosition: f,
            loading: h = !1,
            multi: m,
            popoutPosition: O,
            closeOnSelect: p,
            renderOptionPrefix: R = () => null,
            renderOptionSuffix: C = () => null
        } = e, g = r.useRef(null), L = r.useCallback(e => {
            t(e), p && n()
        }, [p, n, t]);
        return ((0, N.default)(f), h) ? (0, i.jsx)("div", {
            "aria-busy": !0,
            className: a()(M.popout, M.loading, {
                [M.popoutPositionTop]: "top" === O
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(S.Spinner, {
                itemClassName: M.loadingSpinner,
                type: S.SpinnerTypes.PULSING_ELLIPSIS
            })
        }) : 0 === o.length ? (0, i.jsx)("div", {
            className: a()(M.popout, M.noResults, {
                [M.popoutPositionTop]: "top" === O
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(A.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: v.default.Messages.NO_RESULTS_FOUND
            })
        }) : (0, i.jsx)(u.ListNavigatorContainer, {
            children: e => {
                let {
                    ref: t,
                    onKeyDown: n,
                    ...r
                } = e;
                return (0, i.jsx)(T.ListAuto, {
                    className: a()(M.popout, M.searchableSelect, {
                        [M.noScrollbar]: o.length <= d,
                        [M.popoutPositionTop]: "top" === O
                    }),
                    style: {
                        width: l,
                        maxHeight: 44 * d
                    },
                    ref: e => {
                        var n;
                        c.current = e;
                        let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                        g.current = i, t.current = i
                    },
                    ...r,
                    role: void 0,
                    innerRole: "listbox",
                    innerAriaMultiselectable: m,
                    innerId: E,
                    rowHeight: 44,
                    sections: [o.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        var t;
                        let {
                            row: n
                        } = e, r = o[n], a = I(r);
                        return (0, i.jsx)(w, {
                            multi: m,
                            "aria-posinset": n,
                            "aria-setsize": o.length,
                            isSelected: s.includes(r.value),
                            isFocused: _ === String(r.value),
                            value: r.value,
                            label: a,
                            onSelect: L,
                            prefix: R(r, {
                                inPill: !1,
                                inDropdown: !0
                            }),
                            suffix: C(r, {
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

    function b(e, t) {
        if (null == e || null == t) return !1;
        let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
        return (e.compareDocumentPosition(t) & n) === n
    }

    function G(e) {
        let {
            selectedOptions: t,
            selectValue: n,
            listRef: s,
            focusPreviousItem: a,
            focusNextItem: o,
            renderOptionSuffix: l,
            renderOptionPrefix: u
        } = e, d = r.useCallback(e => {
            if (null != s.current) switch (e.key) {
                case "ArrowRight":
                    return e.stopPropagation(), e.preventDefault(), o();
                case "ArrowLeft":
                    return e.stopPropagation(), e.preventDefault(), a()
            }
        }, [s, a, o]), [_, c] = r.useState(null);
        return (0, i.jsx)("ul", {
            className: M.optionPillContainer,
            ref: s,
            onKeyDown: d,
            onFocus: e => {
                let t = e.target;
                null != s.current && b(s.current, t) && c(t.getAttribute("data-option-pill-value"))
            },
            onBlur: e => {
                let t = e.relatedTarget;
                !b(s.current, t) && c(null)
            },
            children: t.map((e, t) => (0, i.jsx)("li", {
                className: M.optionPillItem,
                children: (0, i.jsx)(x, {
                    focused: null == _ ? 0 === t : _ === String(e.value),
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

    function w(e) {
        let {
            value: t,
            label: n,
            prefix: r,
            suffix: s,
            onSelect: o,
            isSelected: l,
            isFocused: d,
            multi: c,
            ...E
        } = e, I = (0, u.useListItem)(String(t));
        return (0, i.jsxs)(_.Clickable, {
            tag: "li",
            style: {
                height: 44
            },
            focusProps: {
                enabled: !1
            },
            className: a()(M.option, {
                [M.focused]: d,
                [M.multi]: c
            }),
            onClick: () => o(t),
            ...I,
            ...E,
            "aria-selected": l,
            id: I["data-list-item-id"],
            role: "option",
            children: [(0, i.jsxs)("div", {
                className: M.content,
                children: [n, "\xa0"]
            }), null != r && (0, i.jsx)("div", {
                className: M.prefix,
                children: r
            }), " ", null != s && (0, i.jsx)("div", {
                className: M.suffix,
                children: s
            }), " ", (0, i.jsx)(k, {
                isSelected: l,
                multi: c
            })]
        })
    }

    function k(e) {
        let {
            isSelected: t,
            multi: n
        } = e;
        return n ? (0, i.jsx)("div", {
            className: a()(M.multiSelectCheckbox, {
                [M.checked]: t,
                [M.unchecked]: !t
            }),
            children: t && (0, i.jsx)(C.default, {
                foreground: M.multiSelectCheck
            })
        }) : t ? (0, i.jsx)(g.default, {
            "aria-hidden": !0,
            backgroundColor: "white",
            className: M.selectedIcon,
            width: 20,
            height: 20
        }) : null
    }

    function B(e) {
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
            }) : null, (0, i.jsx)(F, {
                selectedOptions: t,
                ...s
            }), null != l ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                children: l
            }) : null]
        })
    }

    function V(e) {
        let {
            query: t,
            placeholder: n,
            selectedOptions: s,
            selectValue: o,
            onKeyDown: u,
            isEditing: d,
            isDisabled: _,
            inputRef: c,
            renderOptionPrefix: E,
            renderOptionSuffix: I,
            inputClassNames: T,
            ...f
        } = e, S = Math.max(n.length, (null != t ? t : "").length), A = r.useRef(null), {
            focusPreviousItem: h,
            focusNextItem: m,
            focusLastItem: N
        } = function(e, t, n) {
            let i = r.useMemo(() => (0, l.createFocusManager)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll("[data-option-pill-value]")) : []
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
                }, [i, s, t]);
            return {
                focusPreviousItem: a,
                focusNextItem: o,
                focusLastItem: r.useCallback(async () => {
                    let e = await i.getLastFocusableElement();
                    return null == e ? void 0 : e.focus()
                }, [i])
            }
        }(A, c, s);
        return (0, i.jsxs)(i.Fragment, {
            children: [s.length > 0 && (0, i.jsx)(G, {
                listRef: A,
                selectedOptions: s,
                renderOptionPrefix: E,
                renderOptionSuffix: I,
                selectValue: o,
                focusNextItem: m,
                focusPreviousItem: h
            }), (0, i.jsx)(F, {
                style: {
                    minWidth: "".concat(S, "ch")
                },
                className: a()(M.multi, T),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: s,
                isEditing: d,
                isDisabled: _,
                inputRef: c,
                onKeyDown: e => {
                    ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && s.length > 0 ? N() : u(e)
                },
                ...f
            })]
        })
    }

    function F(e) {
        let {
            query: t,
            inputId: n,
            "aria-describedby": r,
            "aria-invalid": s,
            "aria-required": o,
            "aria-labelledby": l,
            "aria-expanded": d,
            isDisabled: _,
            listboxId: c,
            activeDescendant: E,
            navigatorId: I,
            onChange: T,
            onFocus: f,
            setInputRef: S,
            isEditing: A,
            onKeyDown: h,
            placeholder: m,
            loading: N,
            style: O,
            className: p
        } = e;
        return (0, i.jsx)("input", {
            role: "combobox",
            id: n,
            "aria-haspopup": "listbox",
            "aria-invalid": s,
            "aria-labelledby": l,
            "aria-autocomplete": "list",
            "aria-expanded": d,
            "aria-describedby": r,
            "aria-disabled": _,
            "aria-controls": c,
            "aria-required": o,
            "aria-busy": N,
            style: null != O ? O : {},
            "aria-activedescendant": null != E ? (0, u.createListItemId)(I, E) : "",
            disabled: _,
            value: null != t ? t : "",
            onChange: e => {
                T(e.target.value)
            },
            onFocus: f,
            className: a()(M.searchInput, p, {
                [M.editing]: A,
                [M.disabled]: _
            }),
            onKeyDown: h,
            placeholder: "" !== (null != t ? t : "").trim() ? void 0 : m,
            ref: S
        })
    }

    function x(e) {
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
        return (0, i.jsx)(c.FocusRing, {
            offset: 3,
            children: (0, i.jsxs)(d.Button, {
                tabIndex: n ? 0 : -1,
                "data-option-pill-value": t.value,
                className: M.optionPillBtn,
                innerClassName: M.optionPill,
                onClick: () => null == r ? void 0 : r(t.value),
                onKeyDown: s,
                children: [(0, i.jsx)("div", {
                    className: M.content,
                    children: t.label
                }), null != l && (0, i.jsx)("div", {
                    className: M.prefix,
                    children: l
                }), " ", null != u && (0, i.jsx)("div", {
                    className: M.suffix,
                    children: u
                }), (0, i.jsx)(I.HiddenVisually, {
                    children: v.default.Messages.REMOVE
                }), (0, i.jsx)(L.default, {
                    className: M.deleteOptionIcon,
                    width: 14,
                    height: 14
                })]
            })
        })
    }
}