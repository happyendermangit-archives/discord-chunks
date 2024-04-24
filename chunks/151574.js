function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("924826"),
        d = n("536895"),
        _ = n("468194"),
        c = n("477690"),
        E = n("481060"),
        I = n("100527"),
        T = n("906732"),
        f = n("570220"),
        S = n("28546"),
        h = n("285651"),
        A = n("926491"),
        m = n("373228"),
        N = n("378233"),
        p = n("419922"),
        O = n("490095"),
        R = n("652136"),
        C = n("695346"),
        g = n("465670"),
        L = n("806519"),
        D = n("626135"),
        v = n("280930"),
        M = n("606301"),
        y = n("981631"),
        P = n("689938"),
        U = n("894041");
    let b = (0, _.cssValueToNumber)(c.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
        G = (0, _.cssValueToNumber)(c.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
        w = 2 * G + (0, _.cssValueToNumber)(c.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * b,
        k = () => Promise.resolve();

    function B(e) {
        let {
            isFocused: t,
            isHidden: n,
            sendability: i,
            listIndex: r,
            sticker: a,
            onMouseOver: o,
            onSelectSticker: d
        } = e, {
            tabIndex: _,
            ...c
        } = (0, u.useListItem)("".concat(r));
        return (0, s.jsxs)(E.Clickable, {
            ...c,
            tabIndex: n ? -1 : _,
            className: l()(U.suggestedExpression, {
                [U.suggestedExpressionFocused]: t
            }),
            focusProps: {
                enabled: !1
            },
            onClick: () => d(a, i),
            onMouseOver: o,
            children: [(0, s.jsx)(L.default, {
                mask: L.default.Masks.STICKER_ROUNDED_RECT,
                width: G + 4,
                height: G + 4,
                className: U.mask,
                children: (0, s.jsx)("div", {
                    className: U.maskBackground
                })
            }), (0, s.jsx)(p.default, {
                maskAsset: !0,
                size: G,
                sticker: a,
                className: U.__invalid_sticker
            }), i !== h.StickerSendability.SENDABLE && (0, s.jsx)(O.default, {
                size: 14
            })]
        })
    }(r = i || (i = {}))[r.STICKER = 0] = "STICKER";
    t.default = a.memo(function(e) {
        var t;
        let {
            editorRef: n,
            channel: i,
            isEditorFocused: r,
            onSelectSticker: o,
            stickerIconVisible: _ = !1,
            submitButtonVisible: c = !1
        } = e, p = a.useContext(f.default), [O, L] = a.useState(null), [b, G] = a.useState(!1), [V, x] = a.useState(null), F = (0, S.useExpressionPickerStore)(e => null != e.activeView), H = a.useRef(null), [Y, j] = a.useState(""), [W, K] = a.useState(""), [z, X] = a.useState(!1), [Q, q] = a.useState(!1), Z = (0, v.useStickerSuggestionResults)(Y, b, i), {
            analyticsLocations: J
        } = (0, T.default)(I.default.EXPRESSION_SUGGESTIONS), {
            handleTextChange: $,
            debouncedSetTextInputValue: ee
        } = (0, v.useTextChangeHandler)({
            setTextInputValue: j,
            setHasDismissed: G,
            setHasSelection: q,
            setFocusedSuggestionType: L
        });
        a.useEffect(() => {
            let e = e => {
                    X(e)
                },
                t = e => {
                    let t = "" !== e && null != e;
                    if (q(t), t) {
                        var i;
                        L(null), null === (i = n.current) || void 0 === i || i.focus()
                    }
                };
            return p.addListener("text-changed", $), p.addListener("autocomplete-visibility-change", e), p.addListener("selection-changed", t), () => {
                p.removeListener("text-changed", $), p.removeListener("autocomplete-visibility-change", e), p.removeListener("selection-changed", t)
            }
        }, [$, n, p]), a.useLayoutEffect(() => {
            null == O && x(null)
        }, [O]);
        let [et, en] = a.useState(!1);
        a.useLayoutEffect(() => {
            requestAnimationFrame(() => {
                let e = H.current;
                en(r || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
            })
        }, [r]);
        let ei = Z.length > 0,
            er = et && !F && !z && !b && !Q && ei,
            {
                stickersNavigator: es
            } = function(e) {
                let {
                    editorRef: t,
                    hasStickerResults: n,
                    shouldRenderSuggestions: i,
                    focusedSuggestionType: r,
                    setFocusedStickerListItem: s,
                    setFocusedSuggestionType: o,
                    setHasDismissed: l,
                    setTextInputValue: _
                } = e, c = a.useCallback((e, t) => {
                    s(t)
                }, [s]), E = (0, u.default)({
                    id: "expression-suggestions-stickers",
                    isEnabled: !0,
                    scrollToStart: k,
                    scrollToEnd: k,
                    orientation: d.Orientations.HORIZONTAL,
                    setFocus: c,
                    useVirtualFocus: !0
                });
                return a.useEffect(() => {
                    let e = e => {
                        var s, a;
                        if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            switch (e.key) {
                                case "ArrowUp":
                                    e.preventDefault(), null == r && n && (E.focusFirstVisibleItem(), o(0));
                                    break;
                                case "ArrowDown":
                                    o(null), null === (s = t.current) || void 0 === s || s.focus();
                                    break;
                                case "Escape":
                                    o(null), l(!0), _(""), null === (a = t.current) || void 0 === a || a.focus()
                            }
                            0 === r && E.containerProps.onKeyDown(e)
                        }
                    };
                    return window.addEventListener("keydown", e, {
                        capture: !0
                    }), () => window.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [E, i, r, o, n, t, l, s, _]), {
                    stickersNavigator: E
                }
            }({
                editorRef: n,
                hasStickerResults: ei,
                shouldRenderSuggestions: er,
                focusedSuggestionType: O,
                setFocusedSuggestionType: L,
                setHasDismissed: G,
                setFocusedStickerListItem: x,
                setTextInputValue: j
            }),
            ea = (e, t) => {
                if (er) {
                    if (D.default.track(y.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: W
                        }), t === h.StickerSendability.SENDABLE) G(!0), o(e, m.StickerSelectLocation.EXPRESSION_SUGGESTIONS), ee.cancel(), j("");
                    else if ((0, N.isStandardSticker)(e)) {
                        let t = A.default.getStickerPack(e.pack_id);
                        null != t && (0, R.default)({
                            stickerPack: t,
                            analyticsLocations: J
                        })
                    }
                    p.emit("sticker-suggestions-hidden")
                }
            },
            eo = a.useRef([]),
            el = a.useRef(!1);
        a.useEffect(() => {
            er && (eo.current = Z), er !== el.current && (p.emit(er ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), er && ((0, M.throttledTrackExpressionSuggestionDisplayed)(Y), K(Y))), el.current = er
        }, [p, er, Z, Y]);
        let eu = !er,
            ed = er ? Z : eo.current;
        return (0, s.jsx)(T.AnalyticsLocationProvider, {
            value: J,
            children: (0, s.jsxs)(E.Clickable, {
                tabIndex: eu ? -1 : 0,
                "aria-hidden": eu,
                className: l()(U.container, {
                    [U.hidden]: eu,
                    [U.submitButtonOffset]: c,
                    [U.stickerIconOffset]: _
                }),
                innerRef: H,
                style: {
                    minWidth: w
                },
                onClick: () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
                },
                children: [(0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(u.ListNavigatorProvider, {
                        navigator: es,
                        children: (0, s.jsx)(u.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    tabIndex: n,
                                    ...i
                                } = e;
                                return (0, s.jsx)("div", {
                                    className: U.stickerResults,
                                    ref: e => {
                                        t.current = e
                                    },
                                    onMouseLeave: () => {
                                        null == O && x(null)
                                    },
                                    tabIndex: eu ? -1 : n,
                                    ...i,
                                    children: ed.map((e, t) => {
                                        let {
                                            sticker: n,
                                            sendability: i
                                        } = e;
                                        return (0, s.jsx)(B, {
                                            isFocused: V === "".concat(t),
                                            isHidden: eu,
                                            sendability: i,
                                            listIndex: t,
                                            onMouseOver: () => {
                                                es.setFocus("".concat(t)), x("".concat(t))
                                            },
                                            onSelectSticker: ea,
                                            sticker: n
                                        }, n.id)
                                    })
                                })
                            }
                        })
                    }), (0, s.jsxs)("div", {
                        className: U.bottomInformationTextContainer,
                        children: [(0, s.jsx)("div", {
                            className: U.textDivider
                        }), (0, s.jsxs)("div", {
                            className: U.bottomInformationLayout,
                            children: [(0, s.jsx)(E.Text, {
                                className: U.descriptionText,
                                style: {
                                    maxWidth: w
                                },
                                variant: "text-sm/normal",
                                children: null != V ? P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                    stickerName: null === (t = Z[+V]) || void 0 === t ? void 0 : t.sticker.name
                                }) : P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                    upHook: (e, t) => (0, s.jsx)(E.KeyCombo, {
                                        shortcut: "up",
                                        className: U.keybind
                                    }, t)
                                })
                            }), (0, s.jsx)(E.Clickable, {
                                onClick: () => {
                                    D.default.track(y.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !1,
                                        location: {
                                            section: y.AnalyticsSections.EXPRESSION_PICKER
                                        }
                                    }), C.ExpressionSuggestionsEnabled.updateSetting(!1)
                                },
                                children: (0, s.jsx)(E.Tooltip, {
                                    text: P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                    children: e => (0, s.jsx)(g.default, {
                                        ...e,
                                        className: U.closeIcon
                                    })
                                })
                            })]
                        })]
                    })]
                }), (0, s.jsx)("div", {
                    className: U.containerBackground
                })]
            })
        })
    })
}