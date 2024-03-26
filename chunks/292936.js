function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        }
    }), n("222007");
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("974667"),
        d = n("942367"),
        c = n("617258"),
        f = n("769846"),
        p = n("77078"),
        m = n("812204"),
        h = n("685665"),
        x = n("200197"),
        E = n("538282"),
        y = n("866353"),
        g = n("364685"),
        S = n("161585"),
        C = n("24373"),
        _ = n("41170"),
        T = n("591522"),
        I = n("209069"),
        v = n("845579"),
        N = n("945330"),
        A = n("587974"),
        O = n("599110"),
        R = n("510500"),
        M = n("171209"),
        k = n("49111"),
        L = n("782340"),
        P = n("279197");
    let b = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
        j = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
        U = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN),
        D = 2 * j + U + 2 * b,
        w = () => Promise.resolve();

    function F(e) {
        let {
            isFocused: t,
            isHidden: n,
            sendability: i,
            listIndex: l,
            sticker: s,
            onMouseOver: r,
            onSelectSticker: d
        } = e, {
            tabIndex: c,
            ...f
        } = (0, u.useListItem)("".concat(l));
        return (0, a.jsxs)(p.Clickable, {
            ...f,
            tabIndex: n ? -1 : c,
            className: o(P.suggestedExpression, {
                [P.suggestedExpressionFocused]: t
            }),
            focusProps: {
                enabled: !1
            },
            onClick: () => d(s, i),
            onMouseOver: r,
            children: [(0, a.jsx)(A.default, {
                mask: A.default.Masks.STICKER_ROUNDED_RECT,
                width: j + 4,
                height: j + 4,
                className: P.mask,
                children: (0, a.jsx)("div", {
                    className: P.maskBackground
                })
            }), (0, a.jsx)(_.default, {
                maskAsset: !0,
                size: j,
                sticker: s,
                className: P.sticker
            }), i !== y.StickerSendability.SENDABLE && (0, a.jsx)(T.default, {
                size: 14
            })]
        })
    }(l = i || (i = {}))[l.STICKER = 0] = "STICKER";
    var G = s.memo(function(e) {
        var t;
        let {
            editorRef: n,
            channel: i,
            isEditorFocused: l,
            onSelectSticker: r,
            stickerIconVisible: c = !1,
            submitButtonVisible: f = !1
        } = e, _ = s.useContext(x.default), [T, A] = s.useState(null), [b, j] = s.useState(!1), [U, G] = s.useState(null), H = (0, E.useExpressionPickerStore)(e => null != e.activeView), B = s.useRef(null), [V, K] = s.useState(""), [W, Y] = s.useState(""), [z, Z] = s.useState(!1), [J, Q] = s.useState(!1), q = (0, R.useStickerSuggestionResults)(V, b, i), {
            analyticsLocations: X
        } = (0, h.default)(m.default.EXPRESSION_SUGGESTIONS), {
            handleTextChange: $,
            debouncedSetTextInputValue: ee
        } = (0, R.useTextChangeHandler)({
            setTextInputValue: K,
            setHasDismissed: j,
            setHasSelection: Q,
            setFocusedSuggestionType: A
        });
        s.useEffect(() => {
            let e = e => {
                    Z(e)
                },
                t = e => {
                    let t = "" !== e && null != e;
                    if (Q(t), t) {
                        var i;
                        A(null), null === (i = n.current) || void 0 === i || i.focus()
                    }
                };
            return _.addListener("text-changed", $), _.addListener("autocomplete-visibility-change", e), _.addListener("selection-changed", t), () => {
                _.removeListener("text-changed", $), _.removeListener("autocomplete-visibility-change", e), _.removeListener("selection-changed", t)
            }
        }, [$, n, _]), s.useLayoutEffect(() => {
            null == T && G(null)
        }, [T]);
        let [et, en] = s.useState(!1);
        s.useLayoutEffect(() => {
            requestAnimationFrame(() => {
                let e = B.current;
                en(l || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
            })
        }, [l]);
        let ei = q.length > 0,
            el = et && !H && !z && !b && !J && ei,
            {
                stickersNavigator: ea
            } = function(e) {
                let {
                    editorRef: t,
                    hasStickerResults: n,
                    shouldRenderSuggestions: i,
                    focusedSuggestionType: l,
                    setFocusedStickerListItem: a,
                    setFocusedSuggestionType: r,
                    setHasDismissed: o,
                    setTextInputValue: c
                } = e, f = s.useCallback((e, t) => {
                    a(t)
                }, [a]), p = (0, u.default)({
                    id: "expression-suggestions-stickers",
                    isEnabled: !0,
                    scrollToStart: w,
                    scrollToEnd: w,
                    orientation: d.Orientations.HORIZONTAL,
                    setFocus: f,
                    useVirtualFocus: !0
                });
                return s.useEffect(() => {
                    let e = e => {
                        var a, s;
                        if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            switch (e.key) {
                                case "ArrowUp":
                                    e.preventDefault(), null == l && n && (p.focusFirstVisibleItem(), r(0));
                                    break;
                                case "ArrowDown":
                                    r(null), null === (a = t.current) || void 0 === a || a.focus();
                                    break;
                                case "Escape":
                                    r(null), o(!0), c(""), null === (s = t.current) || void 0 === s || s.focus()
                            }
                            0 === l && p.containerProps.onKeyDown(e)
                        }
                    };
                    return window.addEventListener("keydown", e, {
                        capture: !0
                    }), () => window.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [p, i, l, r, n, t, o, a, c]), {
                    stickersNavigator: p
                }
            }({
                editorRef: n,
                hasStickerResults: ei,
                shouldRenderSuggestions: el,
                focusedSuggestionType: T,
                setFocusedSuggestionType: A,
                setHasDismissed: j,
                setFocusedStickerListItem: G,
                setTextInputValue: K
            }),
            es = (e, t) => {
                if (el) {
                    if (O.default.track(k.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: W
                        }), t === y.StickerSendability.SENDABLE) j(!0), r(e, S.StickerSelectLocation.EXPRESSION_SUGGESTIONS), ee.cancel(), K("");
                    else if ((0, C.isStandardSticker)(e)) {
                        let t = g.default.getStickerPack(e.pack_id);
                        null != t && (0, I.default)({
                            stickerPack: t,
                            analyticsLocations: X
                        })
                    }
                    _.emit("sticker-suggestions-hidden")
                }
            },
            er = s.useRef([]),
            eo = s.useRef(!1);
        s.useEffect(() => {
            el && (er.current = q), el !== eo.current && (_.emit(el ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), el && ((0, M.throttledTrackExpressionSuggestionDisplayed)(V), Y(V))), eo.current = el
        }, [_, el, q, V]);
        let eu = !el,
            ed = el ? q : er.current;
        return (0, a.jsx)(h.AnalyticsLocationProvider, {
            value: X,
            children: (0, a.jsxs)(p.Clickable, {
                tabIndex: eu ? -1 : 0,
                "aria-hidden": eu,
                className: o(P.container, {
                    [P.hidden]: eu,
                    [P.submitButtonOffset]: f,
                    [P.stickerIconOffset]: c
                }),
                innerRef: B,
                style: {
                    minWidth: D
                },
                onClick: () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
                },
                children: [(0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.ListNavigatorProvider, {
                        navigator: ea,
                        children: (0, a.jsx)(u.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    tabIndex: n,
                                    ...i
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: P.stickerResults,
                                    ref: e => {
                                        t.current = e
                                    },
                                    onMouseLeave: () => {
                                        null == T && G(null)
                                    },
                                    tabIndex: eu ? -1 : n,
                                    ...i,
                                    children: ed.map((e, t) => {
                                        let {
                                            sticker: n,
                                            sendability: i
                                        } = e;
                                        return (0, a.jsx)(F, {
                                            isFocused: U === "".concat(t),
                                            isHidden: eu,
                                            sendability: i,
                                            listIndex: t,
                                            onMouseOver: () => {
                                                ea.setFocus("".concat(t)), G("".concat(t))
                                            },
                                            onSelectSticker: es,
                                            sticker: n
                                        }, n.id)
                                    })
                                })
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: P.bottomInformationTextContainer,
                        children: [(0, a.jsx)("div", {
                            className: P.textDivider
                        }), (0, a.jsxs)("div", {
                            className: P.bottomInformationLayout,
                            children: [(0, a.jsx)(p.Text, {
                                className: P.descriptionText,
                                style: {
                                    maxWidth: D
                                },
                                variant: "text-sm/normal",
                                children: null != U ? L.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                    stickerName: null === (t = q[+U]) || void 0 === t ? void 0 : t.sticker.name
                                }) : L.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                    upHook: (e, t) => (0, a.jsx)(p.KeyCombo, {
                                        shortcut: "up",
                                        className: P.keybind
                                    }, t)
                                })
                            }), (0, a.jsx)(p.Clickable, {
                                onClick: () => {
                                    O.default.track(k.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !1,
                                        location: {
                                            section: k.AnalyticsSections.EXPRESSION_PICKER
                                        }
                                    }), v.ExpressionSuggestionsEnabled.updateSetting(!1)
                                },
                                children: (0, a.jsx)(p.Tooltip, {
                                    text: L.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                    children: e => (0, a.jsx)(N.default, {
                                        ...e,
                                        className: P.closeIcon
                                    })
                                })
                            })]
                        })]
                    })]
                }), (0, a.jsx)("div", {
                    className: P.containerBackground
                })]
            })
        })
    })
}