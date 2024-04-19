function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SearchableSelect: function() {
            return U
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
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
        h = n("993365"),
        A = n("393238"),
        m = n("434650"),
        N = n("98650"),
        p = n("863840"),
        O = n("86813"),
        R = n("826026"),
        C = n("263704"),
        g = n("441674"),
        L = n("465670"),
        D = n("748585"),
        v = n("689938"),
        M = n("60772");
    let y = {
        keys: ["label"]
    };

    function P(e) {
        return e.label
    }
    let U = r.forwardRef(function(e, t) {
        let {
            options: n,
            value: s,
            onChange: l,
            clearable: d = !1,
            multi: I = !1,
            closeOnSelect: T = !0,
            onOpen: S,
            onClose: h,
            placeholder: N = v.default.Messages.SELECT,
            wrapperClassName: C,
            className: g,
            isDisabled: U = !1,
            maxVisibleItems: G = 7,
            look: w = D.SelectLooks.FILLED,
            autoFocus: B = !1,
            popoutPosition: k = "bottom",
            filter: x = !0,
            debounceTime: H,
            renderOptionLabel: Y = P,
            onSearchChange: j,
            renderOptionPrefix: W = () => null,
            renderOptionSuffix: K = () => null,
            "aria-describedby": z,
            "aria-invalid": X,
            "aria-labelledby": q,
            "aria-required": Q,
            inputClassNames: Z,
            centerCaret: J = !1,
            onBlur: $,
            matchSorterOptions: ee,
            ...et
        } = e, {
            ref: en,
            width: ei
        } = (0, A.default)(), {
            titleId: er,
            errorId: es,
            error: ea
        } = (0, E.useFormContext)(), {
            ref: eo,
            width: el
        } = (0, A.default)(), eu = r.useRef(null), [ed, e_] = r.useState(null), [ec, eE] = r.useState(!1), [eI, eT] = r.useState(null), [ef, eS] = r.useState(!1), eh = r.useRef(null), eA = r.useRef(null), {
            options: em,
            loading: eN,
            onQueryChange: ep
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
            active: ec,
            loadableOptions: n,
            debounceTime: H
        }), eO = r.useMemo(() => {
            var e, t;
            return e = em, null == (t = s) ? [] : (Array.isArray(t) ? t : [t]).map(t => "object" == typeof t && (null == t || "value" in t) ? t : e.find(e => e.value === t)).filter(Boolean)
        }, [em, s]), eR = r.useMemo(() => eO.map(e => e.value), [eO]), eC = eO[eO.length - 1], eg = (0, p.default)(eC), eL = r.useId(), eD = r.useId(), ev = r.useId(), eM = r.useCallback(e => {
            ec !== e && !U && (eE(e), e ? null == S || S() : null == h || h())
        }, [U, h, S, ec]), ey = r.useCallback(e => {
            ec && !e && eM(!1)
        }, [eM, ec]), eP = (0, m.useIsVisible)(ey);
        r.useImperativeHandle(t, () => ({
            close() {
                eM(!1)
            }
        }));
        let eU = r.useCallback((e, t) => {
                let n = document.querySelector(e),
                    i = eh.current;
                e_(t), null != i && null != n && i.scrollIntoViewNode({
                    node: n
                })
            }, []),
            eb = r.useCallback(() => new Promise(e => {
                let t = eh.current;
                if (null == t) return e();
                t.scrollToTop({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            eG = r.useCallback(() => new Promise(e => {
                let t = eh.current;
                if (null == t) return e();
                t.scrollToBottom({
                    callback: () => requestAnimationFrame(() => e())
                })
            }), []),
            ew = (0, u.default)({
                id: eD,
                defaultFocused: null != eC ? String(eC.value) : void 0,
                scrollToStart: eb,
                scrollToEnd: eG,
                isEnabled: ec,
                wrap: !0,
                useVirtualFocus: !0,
                setFocus: eU,
                disableClickOnSpace: !0
            }),
            eB = (0, p.default)(ew),
            ek = (0, p.default)(em);
        r.useEffect(() => {
            let e = ek.current,
                t = eg.current;
            ec && null != t && !eN && requestAnimationFrame(() => {
                let n = eh.current,
                    i = e.indexOf(t);
                null == n || n.scrollToIndex({
                    section: 0,
                    row: i
                })
            })
        }, [ec, eN]), r.useEffect(() => {
            let e = eB.current;
            if (ec && !eN) {
                var t;
                let n = eu.current;
                if (null != n) {
                    n.focus();
                    let {
                        value: e
                    } = n;
                    n.value = " ", n.value = e
                }
                e_(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null)
            } else {
                let t = eg.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), e_(null)
            }
        }, [ec, eN]), r.useLayoutEffect(() => {
            !ec && (I ? eT("") : null != eC && eT(eC.label))
        }, [I, eC, ec]), r.useLayoutEffect(() => {
            I && eT("")
        }, [I, eO.length]);
        let eF = r.useCallback(function(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                l(I ? [] : void 0);
                return
            }
            let i = "function" == typeof n,
                r = i ? em.find(t => t.value === e) : e;
            if (I) {
                let n = null != s ? s : [];
                if (n.some(t => (i ? t.value : t) === e) ? l(n.filter(t => (i ? t.value : t) !== e)) : l([...n, r]), t) {
                    var a;
                    null === (a = eu.current) || void 0 === a || a.focus()
                }
            } else l(r);
            e_(null), (!I || T) && eM(!1), eS(!1)
        }, [n, em, I, T, l, s, eM]);
        r.useLayoutEffect(() => {
            if (B) {
                var e;
                null === (e = eu.current) || void 0 === e || e.focus()
            }
        }, [B]);
        let eV = r.useCallback(() => {
                eT(""), eF(null), eM(!0)
            }, [eF, eM]),
            ex = r.useCallback(e => {
                switch (e.key) {
                    case "Escape":
                        ec && (e.stopPropagation(), eM(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eM(!0)
                }
            }, [eM, ec]),
            eH = em;
        ef && null != eI && !1 !== x && (eH = "function" == typeof x ? x(em, eI) : (0, o.matchSorter)(em, eI, null != ee ? ee : y)), r.useEffect(() => {
            let e = eh.current;
            null == e || e.scrollToTop()
        }, [eI]), r.useEffect(() => {
            !eN && ef && null !== eI && requestAnimationFrame(() => ew.focusFirstVisibleItem())
        }, [eN, ef, eI]);
        let eY = I ? V : F;
        return (0, i.jsx)(u.ListNavigatorProvider, {
            navigator: ew,
            children: (0, i.jsx)(f.Popout, {
                spacing: 0,
                animation: f.Popout.Animation.NONE,
                shouldShow: ec,
                onRequestClose: () => eM(!1),
                layerContext: et.popoutLayerContext,
                renderPopout: e => {
                    let {
                        closePopout: t,
                        position: n,
                        updatePosition: r
                    } = e;
                    return (0, i.jsx)(b, {
                        loading: eN,
                        multi: I,
                        listRef: eh,
                        listId: eL,
                        maxVisibleItems: G,
                        width: el,
                        selectedValues: eR,
                        closePopout: t,
                        onSelect: eF,
                        closeOnSelect: T,
                        options: eH,
                        activeDescendant: ed,
                        renderOptionLabel: Y,
                        updatePosition: r,
                        popoutPosition: n,
                        renderOptionPrefix: W,
                        renderOptionSuffix: K
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
                    } = t, l = s ? R.default : O.default, {
                        ref: u,
                        onKeyDown: E
                    } = ew.containerProps;
                    return (0, i.jsxs)("div", {
                        ref: eA,
                        className: a()(C, M.wrapper),
                        style: {
                            "--icons-width": "".concat(ei, "px")
                        },
                        onBlur: e => {
                            var t, n, i;
                            !((null === (t = eA.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = eh.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (!I && null != eC && eT(eC.label), eS(!1), eM(!1), null == $ || $(e))
                        },
                        children: [(0, i.jsx)(c.FocusRing, {
                            ringTarget: eo,
                            focusTarget: eu,
                            offset: 4,
                            children: (0, i.jsx)("div", {
                                onClick: U ? void 0 : e => {
                                    e.stopPropagation(), e.preventDefault(), eT(""), eM(!0)
                                },
                                onMouseDown: e => {
                                    e.preventDefault()
                                },
                                ref: e => {
                                    eo.current = e, eP.current = e
                                },
                                className: a()(M.select, M.searchable, g, {
                                    [M.open]: s,
                                    [M.lookFilled]: w === D.SelectLooks.FILLED,
                                    [M.disabled]: U,
                                    [M.multi]: I,
                                    [M.selectPositionTop]: "top" === o
                                }),
                                children: (0, i.jsx)("div", {
                                    className: a()(M.value, {
                                        [M.multi]: I
                                    }),
                                    children: (0, i.jsx)(eY, {
                                        query: eI,
                                        selectedOptions: eO,
                                        loading: eN,
                                        renderOptionPrefix: W,
                                        renderOptionSuffix: K,
                                        isDisabled: U,
                                        isEditing: ef,
                                        inputRef: eu,
                                        "aria-describedby": null != z ? z : es,
                                        "aria-required": Q,
                                        "aria-invalid": null != X ? X : null != ea,
                                        "aria-labelledby": null != q ? q : er,
                                        "aria-expanded": n,
                                        setInputRef: e => {
                                            u.current = e, eu.current = e
                                        },
                                        onFocus: () => {
                                            var e, t;
                                            null === (e = eu.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == eI ? void 0 : eI.length) && void 0 !== t ? t : 0)
                                        },
                                        onChange: e => {
                                            ep(e), null == j || j(e), eT(e), eM(!0), eS(!0)
                                        },
                                        onKeyDown: e => {
                                            var t;
                                            null === (t = et.onKeyDown) || void 0 === t || t.call(et, e), E(e), ex(e)
                                        },
                                        activeDescendant: ed,
                                        placeholder: N,
                                        inputId: ev,
                                        listboxId: eL,
                                        navigatorId: eD,
                                        selectValue: function(e) {
                                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                            eF(e, t)
                                        },
                                        inputClassNames: Z
                                    })
                                })
                            })
                        }), (0, i.jsxs)("div", {
                            className: a()(M.icons, {
                                [M.multi]: I,
                                [M.iconsContainer]: !J
                            }),
                            ref: en,
                            children: [d && (null != eI && "" !== eI || eO.length > 0) ? (0, i.jsx)(_.Clickable, {
                                "aria-label": v.default.Messages.CLEAR,
                                "aria-controls": ev,
                                onClick: eV,
                                children: (0, i.jsx)(L.default, {
                                    width: 16,
                                    height: 16,
                                    className: M.clear
                                })
                            }) : null, (0, i.jsx)(_.Clickable, {
                                className: a()({
                                    [M.iconsCenter]: J
                                }),
                                "aria-label": ec ? v.default.Messages.CLOSE : v.default.Messages.OPEN,
                                "aria-controls": ev,
                                onClick: () => {
                                    eM(!ec)
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

    function b(e) {
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
            loading: A = !1,
            multi: m,
            popoutPosition: p,
            closeOnSelect: O,
            renderOptionPrefix: R = () => null,
            renderOptionSuffix: C = () => null
        } = e, g = r.useRef(null), L = r.useCallback(e => {
            t(e), O && n()
        }, [O, n, t]);
        return ((0, N.default)(f), A) ? (0, i.jsx)("div", {
            "aria-busy": !0,
            className: a()(M.popout, M.loading, {
                [M.popoutPositionTop]: "top" === p
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
                [M.popoutPositionTop]: "top" === p
            }),
            style: {
                width: l
            },
            children: (0, i.jsx)(h.Text, {
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
                        [M.popoutPositionTop]: "top" === p
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
                        return (0, i.jsx)(B, {
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
                null != s.current && G(s.current, t) && c(t.getAttribute("data-option-pill-value"))
            },
            onBlur: e => {
                let t = e.relatedTarget;
                !G(s.current, t) && c(null)
            },
            children: t.map((e, t) => (0, i.jsx)("li", {
                className: M.optionPillItem,
                children: (0, i.jsx)(H, {
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

    function B(e) {
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

    function F(e) {
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
            }) : null, (0, i.jsx)(x, {
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
        } = e, S = Math.max(n.length, (null != t ? t : "").length), h = r.useRef(null), {
            focusPreviousItem: A,
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
        }(h, c, s);
        return (0, i.jsxs)(i.Fragment, {
            children: [s.length > 0 && (0, i.jsx)(w, {
                listRef: h,
                selectedOptions: s,
                renderOptionPrefix: E,
                renderOptionSuffix: I,
                selectValue: o,
                focusNextItem: m,
                focusPreviousItem: A
            }), (0, i.jsx)(x, {
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

    function x(e) {
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
            isEditing: h,
            onKeyDown: A,
            placeholder: m,
            loading: N,
            style: p,
            className: O
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
            style: null != p ? p : {},
            "aria-activedescendant": null != E ? (0, u.createListItemId)(I, E) : "",
            disabled: _,
            value: null != t ? t : "",
            onChange: e => {
                T(e.target.value)
            },
            onFocus: f,
            className: a()(M.searchInput, O, {
                [M.editing]: h,
                [M.disabled]: _
            }),
            onKeyDown: A,
            placeholder: "" !== (null != t ? t : "").trim() ? void 0 : m,
            ref: S
        })
    }

    function H(e) {
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