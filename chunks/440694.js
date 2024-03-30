function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("56300"),
        l = n("188104"),
        c = n("898511"),
        f = n("67381"),
        d = n("784184"),
        _ = n("100064"),
        E = n("286601"),
        p = n("10023"),
        m = n("813970"),
        y = n("140817"),
        I = n("329128"),
        h = n("257923"),
        O = n("988900"),
        T = n("129"),
        S = n("295030"),
        v = n("389712"),
        g = n("480512"),
        A = n("24039"),
        b = n("244749"),
        N = n("120447"),
        R = n("850168"),
        C = n("251384"),
        P = n("980671"),
        D = n("281767"),
        L = n("644037"),
        M = n("68735"),
        U = n("271172"),
        w = n("941504"),
        k = n("371396");

    function G(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function B(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function j(e, t) {
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
                if ("string" == typeof e) return G(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var F = P.MIN_EXPRESSION_PICKER_WIDTH + L.EmojiSize.MEDIUM,
        V = r.memo(function(e) {
            var t, n, o = e.isActive,
                a = e.className,
                u = e.viewType,
                s = e.autoFocus,
                l = e["aria-controls"],
                c = function(e, t) {
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
                }(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
            return r.createElement(d.Button, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        B(e, t, n[t])
                    })
                }
                return e
            }({
                role: "tab",
                autoFocus: void 0 !== s && s,
                "aria-controls": o ? l : void 0
            }, c), n = (n = {
                onClick: function() {
                    y.default.trackWithMetadata(D.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                        tab: u,
                        badged: !1
                    }), (0, C.setExpressionPickerView)(u)
                },
                "aria-current": o ? "page" : void 0,
                className: i()(a, k.navButton, k.navItem, B({}, k.navButtonActive, o)),
                look: d.Button.Looks.BLANK,
                size: d.Button.Sizes.NONE
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }),
        H = function(e) {
            var t = e.positionContainerRef,
                n = e.drawerRef,
                o = e.orientation,
                i = (0, c.useStateFromStores)([A.default], function() {
                    return A.default.expressionPickerWidth
                }),
                a = j(r.useState(window.innerWidth), 2),
                s = a[0],
                l = a[1],
                f = j(r.useState(null != i ? i : P.ExpressionPickerWidths.MIN), 2),
                d = f[0],
                E = f[1],
                m = r.useMemo(function() {
                    switch (d) {
                        case P.ExpressionPickerWidths.MIN:
                            return P.MIN_EXPRESSION_PICKER_WIDTH;
                        case P.ExpressionPickerWidths.MAX:
                            return null;
                        default:
                            return d
                    }
                }, [d]),
                y = r.useCallback(function(e) {
                    var t = e >= s ? P.ExpressionPickerWidths.MAX : e <= P.MIN_EXPRESSION_PICKER_WIDTH ? P.ExpressionPickerWidths.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""), _.default.updatedUnsyncedSettings({
                        expressionPickerWidth: t
                    }), E(t)
                }, [n, s]),
                I = (0, p.default)({
                    initialElementDimension: m,
                    maxDimension: s,
                    minDimension: P.MIN_EXPRESSION_PICKER_WIDTH,
                    resizableDomNodeRef: n,
                    onElementResize: y,
                    orientation: o
                });
            return r.useEffect(function() {
                var e = u().debounce(function() {
                    null != t.current && l(t.current.offsetWidth)
                }, 500);
                return window.addEventListener("resize", e),
                    function() {
                        window.removeEventListener("resize", e)
                    }
            }, [t]), r.useLayoutEffect(function() {
                null != t.current && l(t.current.offsetWidth)
            }, [t]), {
                drawerWidth: m,
                handleDrawerResizeHandleMouseDown: r.useCallback(function(e) {
                    e.stopPropagation(), null != t.current && l(t.current.offsetWidth), I(e)
                }, [t, I])
            }
        };
    t.default = r.memo(function(e) {
        var t, n, o, a = e.positionTargetRef,
            u = e.hideGifFavorites,
            _ = e.includeCreateEmojiButton,
            A = e.onSelectGIF,
            G = e.onSelectEmoji,
            j = e.onSelectSticker,
            x = e.onSelectSound,
            Y = e.channel,
            W = e.type,
            K = e.position,
            z = e.align,
            X = e.positionLayerClassName,
            q = e.closeOnModalOuterClick,
            Q = void 0 !== q && q,
            J = e.parentModalKey,
            Z = r.useRef(null),
            $ = r.useRef(!1),
            ee = r.useRef(),
            et = r.useRef(null),
            en = H({
                positionContainerRef: Z,
                drawerRef: et,
                orientation: "left" === z ? p.ResizeOrientation.HORIZONTAL_RIGHT : p.ResizeOrientation.HORIZONTAL_LEFT
            }),
            er = en.drawerWidth,
            eo = en.handleDrawerResizeHandleMouseDown,
            ei = (0, C.useExpressionPickerStore)(function(e) {
                return e.activeView
            }),
            ea = (0, S.useHasSendableSticker)(Y),
            eu = r.useContext(m.default),
            es = eu.renderWindow,
            el = eu.windowDispatch,
            ec = (0, c.useStateFromStores)([v.default], function() {
                return !v.default.hasLoadedStickerPacks
            }),
            ef = (0, O.useSoundmojiExperiment)("expression_picker"),
            ed = null != J,
            e_ = (0, f.useIsModalAtTop)(null != J ? J : ""),
            eE = r.useCallback(function(e) {
                if (!(!ed && (0, f.hasAnyModalOpen)()) && (!ed || !!(e_ && Q))) {
                    var t, n = e.target;
                    if (!(0, l.isElement)(n) || null == n.closest("." + P.CHAT_INPUT_BUTTON_CLASSNAME)) {
                        for (;
                            (0, l.isElement)(n);) {
                            if (n === et.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                            n = n.parentNode
                        }(0, C.closeExpressionPicker)();
                        var r = null === (t = (0, R.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                        (null == r || "BODY" === r.tagName) && N.ComponentDispatch.dispatchToLastSubscribed(D.ComponentActions.TEXTAREA_FOCUS)
                    }
                }
            }, [Q, e_, ed]),
            ep = r.useCallback(function() {
                (0, C.closeExpressionPicker)()
            }, []);
        r.useLayoutEffect(function() {
            var e = function() {
                ei === P.ExpressionPickerViewType.GIF && (0, C.closeExpressionPicker)()
            };
            return es.addEventListener("mousedown", eE), es.addEventListener("contextmenu", eE), el.subscribe(D.ComponentActions.POPOUT_CLOSE, ep), N.ComponentDispatch.subscribe(D.ComponentActions.CLOSE_GIF_PICKER, e),
                function() {
                    es.removeEventListener("mousedown", eE), es.removeEventListener("contextmenu", eE), el.unsubscribe(D.ComponentActions.POPOUT_CLOSE, ep), N.ComponentDispatch.unsubscribe(D.ComponentActions.CLOSE_GIF_PICKER, e)
                }
        }, [ei, ep, eE, es, el]), (0, d.useFocusLock)(Z), r.useEffect(function() {
            (0, C.setSearchQuery)("")
        }, []), r.useEffect(function() {
            (!ed && (0, f.hasAnyModalOpen)() || ed && !e_) && (0, C.closeExpressionPicker)()
        }, [e_, ed]), r.useEffect(function() {
            if (null != et.current && !$.current) {
                var e, t, n, r;
                ei === P.ExpressionPickerViewType.EMOJI ? (null == ee ? void 0 : null === (e = ee.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == ee || null === (t = ee.current) || void 0 === t || t.onPickerOpen(), $.current = !0) : ei === P.ExpressionPickerViewType.STICKER ? (null == ee ? void 0 : null === (n = ee.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ec && (null == ee || null === (r = ee.current) || void 0 === r || r.onPickerOpen(), $.current = !0) : (y.default.trackWithMetadata(D.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: et.current.offsetWidth,
                    tab: ei,
                    badged: !1
                }), $.current = !0)
            }
        });
        var em = (null === (t = W.gifs) || void 0 === t ? void 0 : t.allowSending) && !s.isMobile && null != A,
            ey = (null === (n = W.stickers) || void 0 === n ? void 0 : n.allowSending) && null != j,
            eI = !(null === (o = W.expressionPicker) || void 0 === o ? void 0 : o.onlyEmojis) && (em || ey),
            eh = "left" === z ? "right" : "left",
            eO = null != X ? X : "left" === z ? k.positionLayerDefaultAlignLeft : k.positionLayerDefaultAlignRight;
        return r.createElement(E.default, {
            section: D.AnalyticsSections.EXPRESSION_PICKER
        }, r.createElement(b.AppReferencePositionLayer, {
            className: i()(k.positionLayer, eO),
            reference: a,
            position: K,
            align: z,
            spacing: 8,
            autoInvert: !0
        }, function(e) {
            var t = e.isPositioned;
            return r.createElement("section", {
                className: i()(k.positionContainer, B({}, k.positionContainerOnlyEmoji, !eI)),
                ref: Z,
                role: "dialog",
                "aria-label": w.default.Messages.EXPRESSION_PICKER
            }, t ? r.createElement("div", {
                className: k.drawerSizingWrapper,
                style: B({
                    width: null == er ? void 0 : er
                }, z, 0),
                ref: et
            }, r.createElement("div", {
                className: k.resizeHandle,
                onMouseDown: eo,
                style: B({}, eh, -2)
            }), r.createElement("div", {
                className: k.contentWrapper
            }, eI ? r.createElement("nav", {
                className: k.nav
            }, r.createElement("div", {
                className: k.navList,
                role: "tablist",
                "aria-label": w.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL
            }, em ? r.createElement(V, {
                id: L.GIF_PICKER_TAB_ID,
                "aria-controls": L.GIF_PICKER_TAB_PANEL_ID,
                "aria-selected": ei === P.ExpressionPickerViewType.GIF,
                isActive: ei === P.ExpressionPickerViewType.GIF,
                viewType: P.ExpressionPickerViewType.GIF
            }, w.default.Messages.EXPRESSION_PICKER_GIF) : null, ey ? r.createElement(V, {
                id: U.STICKER_PICKER_TAB_ID,
                "aria-controls": U.STICKER_PICKER_TAB_PANEL_ID,
                "aria-selected": ei === P.ExpressionPickerViewType.STICKER,
                isActive: ei === P.ExpressionPickerViewType.STICKER,
                autoFocus: !ea,
                viewType: P.ExpressionPickerViewType.STICKER
            }, r.createElement("div", {
                className: k.stickersNavItem
            }, w.default.Messages.EXPRESSION_PICKER_STICKER)) : null, r.createElement(V, {
                id: L.EMOJI_PICKER_TAB_ID,
                "aria-controls": L.EMOJI_PICKER_TAB_PANEL_ID,
                "aria-selected": ei === P.ExpressionPickerViewType.EMOJI,
                isActive: ei === P.ExpressionPickerViewType.EMOJI,
                viewType: P.ExpressionPickerViewType.EMOJI
            }, w.default.Messages.EXPRESSION_PICKER_EMOJI), ef && null != x && r.createElement(V, {
                id: L.SOUNDBOARD_PICKER_TAB_ID,
                "aria-controls": L.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                "aria-selected": ei === P.ExpressionPickerViewType.SOUNDBOARD,
                isActive: ei === P.ExpressionPickerViewType.SOUNDBOARD,
                viewType: P.ExpressionPickerViewType.SOUNDBOARD
            }, "Sounds"))) : null, ei === P.ExpressionPickerViewType.STICKER && ey ? r.createElement(g.default, {
                isLoading: ec,
                channel: Y,
                containerWidth: er,
                onSelectSticker: j,
                closePopout: ep,
                ref: function(e) {
                    ee.current = e
                }
            }) : null, ei === P.ExpressionPickerViewType.GIF && em ? r.createElement(h.default, {
                onSelectGIF: A,
                hideFavorites: u,
                persistSearch: !0
            }) : null, ei === P.ExpressionPickerViewType.EMOJI ? r.createElement(I.default, {
                hasTabWrapper: !0,
                persistSearch: !0,
                channel: Y,
                containerWidth: er,
                includeCreateEmojiButton: _,
                emojiSize: null != er && er < F ? L.EmojiSize.MEDIUM : L.EmojiSize.LARGE,
                pickerIntention: M.EmojiIntention.CHAT,
                closePopout: ep,
                onSelectEmoji: G,
                ref: function(e) {
                    ee.current = e
                }
            }) : null, ei === P.ExpressionPickerViewType.SOUNDBOARD ? r.createElement("div", {
                className: k.soundboardContainer
            }, r.createElement(T.default, {
                guildId: Y.guild_id,
                channel: Y,
                containerWidth: er,
                onClose: ep,
                onSelect: x,
                analyticsSource: "expression-picker",
                autoWidth: !0
            })) : null)) : null)
        }))
    })
}