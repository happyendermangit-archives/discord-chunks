function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r, a = n("735250"),
        s = n("470079"),
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
        v = n("626135"),
        D = n("280930"),
        M = n("606301"),
        y = n("981631"),
        P = n("689938"),
        U = n("629599");
    let b = (0, _.cssValueToNumber)(c.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
        G = (0, _.cssValueToNumber)(c.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
        w = 2 * G + (0, _.cssValueToNumber)(c.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * b,
        B = () => Promise.resolve();

    function k(e) {
        let {
            isFocused: t,
            isHidden: n,
            sendability: i,
            listIndex: r,
            sticker: s,
            onMouseOver: o,
            onSelectSticker: d
        } = e, {
            tabIndex: _,
            ...c
        } = (0, u.useListItem)("".concat(r));
        return (0, a.jsxs)(E.Clickable, {
            ...c,
            tabIndex: n ? -1 : _,
            className: l()(U.suggestedExpression, {
                [U.suggestedExpressionFocused]: t
            }),
            focusProps: {
                enabled: !1
            },
            onClick: () => d(s, i),
            onMouseOver: o,
            children: [(0, a.jsx)(L.default, {
                mask: L.default.Masks.STICKER_ROUNDED_RECT,
                width: G + 4,
                height: G + 4,
                className: U.mask,
                children: (0, a.jsx)("div", {
                    className: U.maskBackground
                })
            }), (0, a.jsx)(p.default, {
                maskAsset: !0,
                size: G,
                sticker: s,
                className: U.__invalid_sticker
            }), i !== h.StickerSendability.SENDABLE && (0, a.jsx)(O.default, {
                size: 14
            })]
        })
    }(r = i || (i = {}))[r.STICKER = 0] = "STICKER";
    t.default = s.memo(function(e) {
        var t;
        let {
            editorRef: n,
            channel: i,
            isEditorFocused: r,
            onSelectSticker: o,
            stickerIconVisible: _ = !1,
            submitButtonVisible: c = !1
        } = e, p = s.useContext(f.default), [O, L] = s.useState(null), [b, G] = s.useState(!1), [V, x] = s.useState(null), F = (0, S.useExpressionPickerStore)(e => null != e.activeView), H = s.useRef(null), [Y, j] = s.useState(""), [W, K] = s.useState(""), [z, Z] = s.useState(!1), [X, Q] = s.useState(!1), q = (0, D.useStickerSuggestionResults)(Y, b, i), {
            analyticsLocations: J
        } = (0, T.default)(I.default.EXPRESSION_SUGGESTIONS), {
            handleTextChange: $,
            debouncedSetTextInputValue: ee
        } = (0, D.useTextChangeHandler)({
            setTextInputValue: j,
            setHasDismissed: G,
            setHasSelection: Q,
            setFocusedSuggestionType: L
        });
        s.useEffect(() => {
            let e = e => {
                    Z(e)
                },
                t = e => {
                    let t = "" !== e && null != e;
                    if (Q(t), t) {
                        var i;
                        L(null), null === (i = n.current) || void 0 === i || i.focus()
                    }
                };
            return p.addListener("text-changed", $), p.addListener("autocomplete-visibility-change", e), p.addListener("selection-changed", t), () => {
                p.removeListener("text-changed", $), p.removeListener("autocomplete-visibility-change", e), p.removeListener("selection-changed", t)
            }
        }, [$, n, p]), s.useLayoutEffect(() => {
            null == O && x(null)
        }, [O]);
        let [et, en] = s.useState(!1);
        s.useLayoutEffect(() => {
            requestAnimationFrame(() => {
                let e = H.current;
                en(r || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
            })
        }, [r]);
        let ei = q.length > 0,
            er = et && !F && !z && !b && !X && ei,
            {
                stickersNavigator: ea
            } = function(e) {
                let {
                    editorRef: t,
                    hasStickerResults: n,
                    shouldRenderSuggestions: i,
                    focusedSuggestionType: r,
                    setFocusedStickerListItem: a,
                    setFocusedSuggestionType: o,
                    setHasDismissed: l,
                    setTextInputValue: _
                } = e, c = s.useCallback((e, t) => {
                    a(t)
                }, [a]), E = (0, u.default)({
                    id: "expression-suggestions-stickers",
                    isEnabled: !0,
                    scrollToStart: B,
                    scrollToEnd: B,
                    orientation: d.Orientations.HORIZONTAL,
                    setFocus: c,
                    useVirtualFocus: !0
                });
                return s.useEffect(() => {
                    let e = e => {
                        var a, s;
                        if (i && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            switch (e.key) {
                                case "ArrowUp":
                                    e.preventDefault(), null == r && n && (E.focusFirstVisibleItem(), o(0));
                                    break;
                                case "ArrowDown":
                                    o(null), null === (a = t.current) || void 0 === a || a.focus();
                                    break;
                                case "Escape":
                                    o(null), l(!0), _(""), null === (s = t.current) || void 0 === s || s.focus()
                            }
                            0 === r && E.containerProps.onKeyDown(e)
                        }
                    };
                    return window.addEventListener("keydown", e, {
                        capture: !0
                    }), () => window.removeEventListener("keydown", e, {
                        capture: !0
                    })
                }, [E, i, r, o, n, t, l, a, _]), {
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
            es = (e, t) => {
                if (er) {
                    if (v.default.track(y.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
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
            eo = s.useRef([]),
            el = s.useRef(!1);
        s.useEffect(() => {
            er && (eo.current = q), er !== el.current && (p.emit(er ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), er && ((0, M.throttledTrackExpressionSuggestionDisplayed)(Y), K(Y))), el.current = er
        }, [p, er, q, Y]);
        let eu = !er,
            ed = er ? q : eo.current;
        return (0, a.jsx)(T.AnalyticsLocationProvider, {
            value: J,
            children: (0, a.jsxs)(E.Clickable, {
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
                                        return (0, a.jsx)(k, {
                                            isFocused: V === "".concat(t),
                                            isHidden: eu,
                                            sendability: i,
                                            listIndex: t,
                                            onMouseOver: () => {
                                                ea.setFocus("".concat(t)), x("".concat(t))
                                            },
                                            onSelectSticker: es,
                                            sticker: n
                                        }, n.id)
                                    })
                                })
                            }
                        })
                    }), (0, a.jsxs)("div", {
                        className: U.bottomInformationTextContainer,
                        children: [(0, a.jsx)("div", {
                            className: U.textDivider
                        }), (0, a.jsxs)("div", {
                            className: U.bottomInformationLayout,
                            children: [(0, a.jsx)(E.Text, {
                                className: U.descriptionText,
                                style: {
                                    maxWidth: w
                                },
                                variant: "text-sm/normal",
                                children: null != V ? P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                    stickerName: null === (t = q[+V]) || void 0 === t ? void 0 : t.sticker.name
                                }) : P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                    upHook: (e, t) => (0, a.jsx)(E.KeyCombo, {
                                        shortcut: "up",
                                        className: U.keybind
                                    }, t)
                                })
                            }), (0, a.jsx)(E.Clickable, {
                                onClick: () => {
                                    v.default.track(y.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                        enabled: !1,
                                        location: {
                                            section: y.AnalyticsSections.EXPRESSION_PICKER
                                        }
                                    }), C.ExpressionSuggestionsEnabled.updateSetting(!1)
                                },
                                children: (0, a.jsx)(E.Tooltip, {
                                    text: P.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                    children: e => (0, a.jsx)(g.default, {
                                        ...e,
                                        className: U.closeIcon
                                    })
                                })
                            })]
                        })]
                    })]
                }), (0, a.jsx)("div", {
                    className: U.containerBackground
                })]
            })
        })
    })
}