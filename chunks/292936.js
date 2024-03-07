function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return G
        }
    }), n("222007");
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("974667"),
        d = n("942367"),
        c = n("617258"),
        f = n("769846"),
        m = n("77078"),
        p = n("812204"),
        h = n("685665"),
        E = n("200197"),
        g = n("538282"),
        S = n("866353"),
        C = n("364685"),
        T = n("161585"),
        v = n("24373"),
        I = n("41170"),
        _ = n("591522"),
        N = n("209069"),
        A = n("845579"),
        x = n("945330"),
        y = n("587974"),
        O = n("599110"),
        R = n("510500"),
        M = n("171209"),
        L = n("49111"),
        P = n("782340"),
        b = n("279197");
    let j = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
        U = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
        D = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN),
        k = 2 * U + D + 2 * j,
        w = () => Promise.resolve();

    function F(e) {
        let {
            isFocused: t,
            isHidden: n,
            sendability: l,
            listIndex: i,
            sticker: s,
            onMouseOver: r,
            onSelectSticker: d
        } = e, {
            tabIndex: c,
            ...f
        } = (0, u.useListItem)("".concat(i));
        return (0, a.jsxs)(m.Clickable, {
            ...f,
            tabIndex: n ? -1 : c,
            className: o(b.suggestedExpression, {
                [b.suggestedExpressionFocused]: t
            }),
            focusProps: {
                enabled: !1
            },
            onClick: () => d(s, l),
            onMouseOver: r,
            children: [(0, a.jsx)(y.default, {
                mask: y.default.Masks.STICKER_ROUNDED_RECT,
                width: U + 4,
                height: U + 4,
                className: b.mask,
                children: (0, a.jsx)("div", {
                    className: b.maskBackground
                })
            }), (0, a.jsx)(I.default, {
                maskAsset: !0,
                size: U,
                sticker: s,
                className: b.sticker
            }), l !== S.StickerSendability.SENDABLE && (0, a.jsx)(_.default, {
                size: 14
            })]
        })
    }(i = l || (l = {}))[i.STICKER = 0] = "STICKER";
    var G = s.memo(function(e) {
        var t;
        let {
            editorRef: n,
            channel: l,
            isEditorFocused: i,
            onSelectSticker: r,
            stickerIconVisible: c = !1,
            submitButtonVisible: f = !1
        } = e, I = s.useContext(E.default), [_, y] = s.useState(null), [j, U] = s.useState(!1), [D, G] = s.useState(null), B = (0, g.useExpressionPickerStore)(e => null != e.activeView), H = s.useRef(null), [V, K] = s.useState(""), [W, Y] = s.useState(""), [z, Z] = s.useState(!1), [J, q] = s.useState(!1), X = (0, R.useStickerSuggestionResults)(V, j, l), {
            analyticsLocations: Q,
            AnalyticsLocationProvider: $
        } = (0, h.default)(p.default.EXPRESSION_SUGGESTIONS), {
            handleTextChange: ee,
            debouncedSetTextInputValue: et
        } = (0, R.useTextChangeHandler)({
            setTextInputValue: K,
            setHasDismissed: U,
            setHasSelection: q,
            setFocusedSuggestionType: y
        });
        s.useEffect(() => {
            let e = e => {
                    Z(e)
                },
                t = e => {
                    let t = "" !== e && null != e;
                    if (q(t), t) {
                        var l;
                        y(null), null === (l = n.current) || void 0 === l || l.focus()
                    }
                };
            return I.addListener("text-changed", ee), I.addListener("autocomplete-visibility-change", e), I.addListener("selection-changed", t), () => {
                I.removeListener("text-changed", ee), I.removeListener("autocomplete-visibility-change", e), I.removeListener("selection-changed", t)
            }
        }, [ee, n, I]), s.useLayoutEffect(() => {
            null == _ && G(null)
        }, [_]);
        let [en, el] = s.useState(!1);
        s.useLayoutEffect(() => {
            requestAnimationFrame(() => {
                let e = H.current;
                el(i || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
            })
        }, [i]);
        let ei = X.length > 0,
            ea = en && !B && !z && !j && !J && ei,
            {
                stickersNavigator: es
            } = function(e) {
                let {
                    editorRef: t,
                    hasStickerResults: n,
                    shouldRenderSuggestions: l,
                    focusedSuggestionType: i,
                    setFocusedStickerListItem: a,
                    setFocusedSuggestionType: r,
                    setHasDismissed: o,
                    setTextInputValue: c
                } = e, f = s.useCallback((e, t) => {
                    a(t)
                }, [a]), m = (0, u.default)({
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
                        if (l && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            switch (e.key) {
                                case "ArrowUp":
                                    e.preventDefault(), null == i && n && (m.focusFirstVisibleItem(), r(0));
                                    break;
                                case "ArrowDown":
                                    r(null), null === (a = t.current) || void 0 === a || a.focus();
                                    break;
                                case "Escape":
                                    r(null), o(!0), c(""), null === (s = t.current) || void 0 === s || s.focus()
                            }
                            0 === i && m.containerProps.onKeyDown(e)
                        }
                    };
                    return window.addEventListener("keydown", e, {
                        capture: !0
                    }), () => window.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [m, l, i, r, n, t, o, a, c]), {
                    stickersNavigator: m
                }
            }({
                editorRef: n,
                hasStickerResults: ei,
                shouldRenderSuggestions: ea,
                focusedSuggestionType: _,
                setFocusedSuggestionType: y,
                setHasDismissed: U,
                setFocusedStickerListItem: G,
                setTextInputValue: K
            }),
            er = (e, t) => {
                if (ea) {
                    if (O.default.track(L.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: W
                        }), t === S.StickerSendability.SENDABLE) U(!0), r(e, T.StickerSelectLocation.EXPRESSION_SUGGESTIONS), et.cancel(), K("");
                    else if ((0, v.isStandardSticker)(e)) {
                        let t = C.default.getStickerPack(e.pack_id);
                        null != t && (0, N.default)({
                            stickerPack: t,
                            analyticsLocations: Q
                        })
                    }
                    I.emit("sticker-suggestions-hidden")
                }
            },
            eo = s.useRef([]),
            eu = s.useRef(!1);
        s.useEffect(() => {
            ea && (eo.current = X), ea !== eu.current && (I.emit(ea ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), ea && ((0, M.throttledTrackExpressionSuggestionDisplayed)(V), Y(V))), eu.current = ea
        }, [I, ea, X, V]);
        let ed = !ea,
            ec = ea ? X : eo.current;
        return (0, a.jsx)($, {
            children: (0, a.jsxs)(m.Clickable, {
                tabIndex: ed ? -1 : 0,
                "aria-hidden": ed,
                className: o(b.container, {
                    [b.hidden]: ed,
                    [b.submitButtonOffset]: f,
                    [b.stickerIconOffset]: c
                }),
                innerRef: H,
                style: {
                    minWidth: k
                },
                onClick: () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
                },
                children: [(0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(u.ListNavigatorProvider, {
                        navigator: es,
                        children: (0, a.jsx)(u.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    tabIndex: n,
                                    ...l
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: b.stickerResults,
                                    ref: e => {
                                        t.current = e
                                    },
                                    onMouseLeave: () => {
                                        null == _ && G(null)
                                    },
                                    tabIndex: ed ? -1 : n,
                                    ...l,
                                    children: ec.map((e, t) => {
                                        let {
                                            sticker: n,
                                            sendability: l
                                        } = e;
                                        return (0, a.jsx)(F, {
                                            isFocused: D === "".concat(t),
                                            isHidden: ed,
                                            sendability: l,
                                            listIndex: t,
                                            onMouseOver: () => {
                                                es.setFocus("".concat(t)), G("".concat(t))
                                            },
                                            onSelectSticker: er,
                                            sticker: n
                                        }, n.id)
                                    })
                                })
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: b.bottomInformationTextContainer,
                        children: [(0, a.jsx)("div", {
                            className: b.textDivider
                        }), (0, a.jsxs)("div", {
                            className: b.bottomInformationLayout,
                            children: [(0, a.jsx)(m.Text, {
                                className: b.descriptionText,
                                style: {
                                    maxWidth: k
                                },
                                variant: "text-sm/normal",
                                children: null != D ? P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                    stickerName: null === (t = X[+D]) || void 0 === t ? void 0 : t.sticker.name
                                }) : P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                    upHook: (e, t) => (0, a.jsx)(m.KeyCombo, {
                                        shortcut: "up",
                                        className: b.keybind
                                    }, t)
                                })
                            }), (0, a.jsx)(m.Clickable, {
                                onClick: () => {
                                    O.default.track(L.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !1,
                                        location: {
                                            section: L.AnalyticsSections.EXPRESSION_PICKER
                                        }
                                    }), A.ExpressionSuggestionsEnabled.updateSetting(!1)
                                },
                                children: (0, a.jsx)(m.Tooltip, {
                                    text: P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                    children: e => (0, a.jsx)(x.default, {
                                        ...e,
                                        className: b.closeIcon
                                    })
                                })
                            })]
                        })]
                    })]
                }), (0, a.jsx)("div", {
                    className: b.containerBackground
                })]
            })
        })
    })
}