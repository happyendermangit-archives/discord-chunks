function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("762624"),
        l = n("639340"),
        c = n("805654"),
        f = n("337905"),
        d = n("784184"),
        _ = n("649455"),
        E = n("396586"),
        p = n("860897"),
        m = n("251384"),
        y = n("922747"),
        I = n("389712"),
        h = n("294463"),
        O = n("443699"),
        T = n("624308"),
        S = n("289398"),
        v = n("908278"),
        g = n("53867"),
        A = n("247164"),
        b = n("845265"),
        N = n("870331"),
        R = n("267688"),
        C = n("284404"),
        P = n("281767"),
        D = n("941504"),
        L = n("894041");

    function M(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function U(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function w(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                U(e, t, n[t])
            })
        }
        return e
    }

    function k(e, t) {
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

    function G(e, t) {
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

    function B(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return M(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return M(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var j = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
        F = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
        V = 2 * F + (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * j,
        H = function() {
            return Promise.resolve()
        };

    function x(e) {
        var t = e.isFocused,
            n = e.isHidden,
            r = e.sendability,
            o = e.listIndex,
            a = e.sticker,
            l = e.onMouseOver,
            c = e.onSelectSticker,
            f = (0, s.useListItem)("".concat(o)),
            _ = f.tabIndex,
            E = G(f, ["tabIndex"]);
        return i.createElement(d.Clickable, k(w({}, E), {
            tabIndex: n ? -1 : _,
            className: u()(L.suggestedExpression, U({}, L.suggestedExpressionFocused, t)),
            focusProps: {
                enabled: !1
            },
            onClick: function() {
                return c(a, r)
            },
            onMouseOver: l
        }), i.createElement(b.default, {
            mask: b.default.Masks.STICKER_ROUNDED_RECT,
            width: F + 4,
            height: F + 4,
            className: L.mask
        }, i.createElement("div", {
            className: L.maskBackground
        })), i.createElement(T.default, {
            maskAsset: !0,
            size: F,
            sticker: a,
            className: L.__invalid_sticker
        }), r !== y.StickerSendability.SENDABLE && i.createElement(S.default, {
            size: 14
        }))
    }(r = o || (o = {}))[r.STICKER = 0] = "STICKER";
    t.default = i.memo(function(e) {
        var t, n, r, o, a, c, f, T, S, b, M, j, F, Y = e.editorRef,
            W = e.channel,
            K = e.isEditorFocused,
            z = e.onSelectSticker,
            X = e.stickerIconVisible,
            q = e.submitButtonVisible,
            Q = i.useContext(p.default),
            J = B(i.useState(null), 2),
            Z = J[0],
            $ = J[1],
            ee = B(i.useState(!1), 2),
            et = ee[0],
            en = ee[1],
            er = B(i.useState(null), 2),
            eo = er[0],
            ei = er[1],
            ea = (0, m.useExpressionPickerStore)(function(e) {
                return null != e.activeView
            }),
            eu = i.useRef(null),
            es = B(i.useState(""), 2),
            el = es[0],
            ec = es[1],
            ef = B(i.useState(""), 2),
            ed = ef[0],
            e_ = ef[1],
            eE = B(i.useState(!1), 2),
            ep = eE[0],
            em = eE[1],
            ey = B(i.useState(!1), 2),
            eI = ey[0],
            eh = ey[1],
            eO = (0, R.useStickerSuggestionResults)(el, et, W),
            eT = (0, E.default)(_.default.EXPRESSION_SUGGESTIONS).analyticsLocations,
            eS = (0, R.useTextChangeHandler)({
                setTextInputValue: ec,
                setHasDismissed: en,
                setHasSelection: eh,
                setFocusedSuggestionType: $
            }),
            ev = eS.handleTextChange,
            eg = eS.debouncedSetTextInputValue;
        i.useEffect(function() {
            var e = function(e) {
                    em(e)
                },
                t = function(e) {
                    var t, n = "" !== e && null != e;
                    eh(n), n && ($(null), null === (t = Y.current) || void 0 === t || t.focus())
                };
            return Q.addListener("text-changed", ev), Q.addListener("autocomplete-visibility-change", e), Q.addListener("selection-changed", t),
                function() {
                    Q.removeListener("text-changed", ev), Q.removeListener("autocomplete-visibility-change", e), Q.removeListener("selection-changed", t)
                }
        }, [ev, Y, Q]), i.useLayoutEffect(function() {
            null == Z && ei(null)
        }, [Z]);
        var eA = B(i.useState(!1), 2),
            eb = eA[0],
            eN = eA[1];
        i.useLayoutEffect(function() {
            requestAnimationFrame(function() {
                var e = eu.current;
                eN(K || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
            })
        }, [K]);
        var eR = eO.length > 0,
            eC = eb && !ea && !ep && !et && !eI && eR;
        var eP = (n = (t = {
                editorRef: Y,
                hasStickerResults: eR,
                shouldRenderSuggestions: eC,
                focusedSuggestionType: Z,
                setFocusedSuggestionType: $,
                setHasDismissed: en,
                setFocusedStickerListItem: ei,
                setTextInputValue: ec
            }).editorRef, r = t.hasStickerResults, o = t.shouldRenderSuggestions, a = t.focusedSuggestionType, c = t.setFocusedStickerListItem, f = t.setFocusedSuggestionType, T = t.setHasDismissed, S = t.setTextInputValue, b = i.useCallback(function(e, t) {
                c(t)
            }, [c]), M = (0, s.default)({
                id: "expression-suggestions-stickers",
                isEnabled: !0,
                scrollToStart: H,
                scrollToEnd: H,
                orientation: l.Orientations.HORIZONTAL,
                setFocus: b,
                useVirtualFocus: !0
            }), i.useEffect(function() {
                var e = function(e) {
                    var t, i;
                    if (o && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                        switch (e.key) {
                            case "ArrowUp":
                                e.preventDefault(), null == a && r && (M.focusFirstVisibleItem(), f(0));
                                break;
                            case "ArrowDown":
                                f(null), null === (t = n.current) || void 0 === t || t.focus();
                                break;
                            case "Escape":
                                f(null), T(!0), S(""), null === (i = n.current) || void 0 === i || i.focus()
                        }
                        0 === a && M.containerProps.onKeyDown(e)
                    }
                };
                return window.addEventListener("keydown", e, {
                        capture: !0
                    }),
                    function() {
                        return window.removeEventListener("keydown", e, {
                            capture: !0
                        })
                    }
            }, [M, o, a, f, r, n, T, c, S]), {
                stickersNavigator: M
            }).stickersNavigator,
            eD = function(e, t) {
                if (eC) {
                    if (N.default.track(P.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: ed
                        }), t === y.StickerSendability.SENDABLE) en(!0), z(e, h.StickerSelectLocation.EXPRESSION_SUGGESTIONS), eg.cancel(), ec("");
                    else if ((0, O.isStandardSticker)(e)) {
                        var n = I.default.getStickerPack(e.pack_id);
                        null != n && (0, v.default)({
                            stickerPack: n,
                            analyticsLocations: eT
                        })
                    }
                    Q.emit("sticker-suggestions-hidden")
                }
            },
            eL = i.useRef([]),
            eM = i.useRef(!1);
        i.useEffect(function() {
            eC && (eL.current = eO), eC !== eM.current && (Q.emit(eC ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), eC && ((0, C.throttledTrackExpressionSuggestionDisplayed)(el), e_(el))), eM.current = eC
        }, [Q, eC, eO, el]);
        var eU = !eC,
            ew = eC ? eO : eL.current;
        return i.createElement(E.AnalyticsLocationProvider, {
            value: eT
        }, i.createElement(d.Clickable, {
            tabIndex: eU ? -1 : 0,
            "aria-hidden": eU,
            className: u()(L.container, (U(F = {}, L.hidden, eU), U(F, L.submitButtonOffset, void 0 !== q && q), U(F, L.stickerIconOffset, void 0 !== X && X), F)),
            innerRef: eu,
            style: {
                minWidth: V
            },
            onClick: function() {
                var e;
                return null === (e = Y.current) || void 0 === e ? void 0 : e.focus()
            }
        }, i.createElement(i.Fragment, null, i.createElement(s.ListNavigatorProvider, {
            navigator: eP
        }, i.createElement(s.ListNavigatorContainer, null, function(e) {
            var t = e.ref,
                n = e.tabIndex,
                r = G(e, ["ref", "tabIndex"]);
            return i.createElement("div", w({
                className: L.stickerResults,
                ref: function(e) {
                    t.current = e
                },
                onMouseLeave: function() {
                    null == Z && ei(null)
                },
                tabIndex: eU ? -1 : n
            }, r), ew.map(function(e, t) {
                var n = e.sticker,
                    r = e.sendability;
                return i.createElement(x, {
                    key: n.id,
                    isFocused: eo === "".concat(t),
                    isHidden: eU,
                    sendability: r,
                    listIndex: t,
                    onMouseOver: function() {
                        eP.setFocus("".concat(t)), ei("".concat(t))
                    },
                    onSelectSticker: eD,
                    sticker: n
                })
            }))
        })), i.createElement("div", {
            className: L.bottomInformationTextContainer
        }, i.createElement("div", {
            className: L.textDivider
        }), i.createElement("div", {
            className: L.bottomInformationLayout
        }, i.createElement(d.Text, {
            className: L.descriptionText,
            style: {
                maxWidth: V
            },
            variant: "text-sm/normal"
        }, null != eo ? D.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
            stickerName: null === (j = eO[+eo]) || void 0 === j ? void 0 : j.sticker.name
        }) : D.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
            upHook: function(e, t) {
                return i.createElement(d.KeyCombo, {
                    key: t,
                    shortcut: "up",
                    className: L.keybind
                })
            }
        })), i.createElement(d.Clickable, {
            onClick: function() {
                N.default.track(P.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                    enabled: !1,
                    location: {
                        section: P.AnalyticsSections.EXPRESSION_PICKER
                    }
                }), g.ExpressionSuggestionsEnabled.updateSetting(!1)
            }
        }, i.createElement(d.Tooltip, {
            text: D.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE
        }, function(e) {
            return i.createElement(A.default, k(w({}, e), {
                className: L.closeIcon
            }))
        }))))), i.createElement("div", {
            className: L.containerBackground
        })))
    })
}