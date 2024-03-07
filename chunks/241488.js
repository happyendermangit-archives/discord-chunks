function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("917351"),
        o = n.n(r),
        u = n("394846"),
        d = n("118810"),
        c = n("446674"),
        f = n("551042"),
        m = n("77078"),
        p = n("452804"),
        h = n("901582"),
        E = n("594203"),
        g = n("244201"),
        S = n("716241"),
        C = n("86678"),
        T = n("873622"),
        v = n("277855"),
        I = n("191191"),
        _ = n("256860"),
        N = n("364685"),
        A = n("889701"),
        x = n("168973"),
        y = n("983782"),
        O = n("659500"),
        R = n("791776"),
        M = n("538282"),
        L = n("13030"),
        P = n("49111"),
        b = n("115279"),
        j = n("958706"),
        U = n("560241"),
        D = n("782340"),
        k = n("213524");
    let w = L.MIN_EXPRESSION_PICKER_WIDTH + b.EmojiSize.MEDIUM,
        F = i.memo(function(e) {
            let {
                isActive: t,
                className: n,
                viewType: i,
                autoFocus: a = !1,
                "aria-controls": r,
                ...o
            } = e;
            return (0, l.jsx)(m.Button, {
                role: "tab",
                autoFocus: a,
                "aria-controls": t ? r : void 0,
                ...o,
                onClick: () => {
                    S.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                        tab: i,
                        badged: !1
                    }), (0, M.setExpressionPickerView)(i)
                },
                "aria-current": t ? "page" : void 0,
                className: s(n, k.navButton, k.navItem, {
                    [k.navButtonActive]: t
                }),
                look: m.Button.Looks.BLANK,
                size: m.Button.Sizes.NONE
            })
        }),
        G = e => {
            let {
                positionContainerRef: t,
                drawerRef: n,
                orientation: l
            } = e, a = (0, c.useStateFromStores)([x.default], () => x.default.expressionPickerWidth), [s, r] = i.useState(window.innerWidth), [u, d] = i.useState(null != a ? a : L.ExpressionPickerWidths.MIN), f = i.useMemo(() => {
                switch (u) {
                    case L.ExpressionPickerWidths.MIN:
                        return L.MIN_EXPRESSION_PICKER_WIDTH;
                    case L.ExpressionPickerWidths.MAX:
                        return null;
                    default:
                        return u
                }
            }, [u]), m = i.useCallback(e => {
                let t = e >= s ? L.ExpressionPickerWidths.MAX : e <= L.MIN_EXPRESSION_PICKER_WIDTH ? L.ExpressionPickerWidths.MIN : e;
                null == t && null != n.current && (n.current.style.width = ""), p.default.updatedUnsyncedSettings({
                    expressionPickerWidth: t
                }), d(t)
            }, [n, s]), h = (0, E.default)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: L.MIN_EXPRESSION_PICKER_WIDTH,
                resizableDomNodeRef: n,
                onElementResize: m,
                orientation: l
            });
            i.useEffect(() => {
                let e = o.debounce(() => {
                    null != t.current && r(t.current.offsetWidth)
                }, 500);
                return window.addEventListener("resize", e), () => {
                    window.removeEventListener("resize", e)
                }
            }, [t]), i.useLayoutEffect(() => {
                null != t.current && r(t.current.offsetWidth)
            }, [t]);
            let g = i.useCallback(e => {
                e.stopPropagation(), null != t.current && r(t.current.offsetWidth), h(e)
            }, [t, h]);
            return {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: g
            }
        };
    var B = i.memo(function(e) {
        var t, n, a;
        let {
            positionTargetRef: r,
            hideGifFavorites: o,
            includeCreateEmojiButton: p,
            onSelectGIF: x,
            onSelectEmoji: B,
            onSelectSticker: H,
            onSelectSound: V,
            channel: K,
            type: W,
            position: Y,
            align: z,
            positionLayerClassName: Z,
            closeOnModalOuterClick: J = !1,
            parentModalKey: q
        } = e, X = i.useRef(null), Q = i.useRef(!1), $ = i.useRef(), ee = i.useRef(null), et = "left" === z ? E.ResizeOrientation.HORIZONTAL_RIGHT : E.ResizeOrientation.HORIZONTAL_LEFT, {
            drawerWidth: en,
            handleDrawerResizeHandleMouseDown: el
        } = G({
            positionContainerRef: X,
            drawerRef: ee,
            orientation: et
        }), ei = (0, M.useExpressionPickerStore)(e => e.activeView), ea = (0, _.useHasSendableSticker)(K), {
            renderWindow: es,
            windowDispatch: er
        } = i.useContext(g.default), eo = (0, c.useStateFromStores)([N.default], () => !N.default.hasLoadedStickerPacks), eu = (0, v.useSoundmojiExperiment)("expression_picker"), ed = null != q, ec = (0, f.useIsModalAtTop)(null != q ? q : ""), ef = i.useCallback(e => {
            var t;
            if (!ed && (0, f.hasAnyModalOpen)() || ed && !(ec && J)) return;
            let {
                target: n
            } = e;
            if ((0, d.isElement)(n) && null != n.closest("." + L.CHAT_INPUT_BUTTON_CLASSNAME)) return;
            for (;
                (0, d.isElement)(n);) {
                if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                n = n.parentNode
            }(0, M.closeExpressionPicker)();
            let l = null === (t = (0, R.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
            (null == l || "BODY" === l.tagName) && O.ComponentDispatch.dispatchToLastSubscribed(P.ComponentActions.TEXTAREA_FOCUS)
        }, [J, ec, ed]), em = i.useCallback(() => {
            (0, M.closeExpressionPicker)()
        }, []);
        i.useLayoutEffect(() => {
            let e = () => {
                ei === L.ExpressionPickerViewType.GIF && (0, M.closeExpressionPicker)()
            };
            return es.addEventListener("mousedown", ef), es.addEventListener("contextmenu", ef), er.subscribe(P.ComponentActions.POPOUT_CLOSE, em), O.ComponentDispatch.subscribe(P.ComponentActions.CLOSE_GIF_PICKER, e), () => {
                es.removeEventListener("mousedown", ef), es.removeEventListener("contextmenu", ef), er.unsubscribe(P.ComponentActions.POPOUT_CLOSE, em), O.ComponentDispatch.unsubscribe(P.ComponentActions.CLOSE_GIF_PICKER, e)
            }
        }, [ei, em, ef, es, er]), (0, m.useFocusLock)(X), i.useEffect(() => {
            (0, M.setSearchQuery)("")
        }, []), i.useEffect(() => {
            (!ed && (0, f.hasAnyModalOpen)() || ed && !ec) && (0, M.closeExpressionPicker)()
        }, [ec, ed]), i.useEffect(() => {
            if (null != ee.current && !Q.current) {
                var e, t, n, l;
                ei === L.ExpressionPickerViewType.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), Q.current = !0) : ei === L.ExpressionPickerViewType.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !eo && (null == $ || null === (l = $.current) || void 0 === l || l.onPickerOpen(), Q.current = !0) : (S.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: ee.current.offsetWidth,
                    tab: ei,
                    badged: !1
                }), Q.current = !0)
            }
        });
        let ep = (null === (t = W.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile && null != x,
            eh = (null === (n = W.stickers) || void 0 === n ? void 0 : n.allowSending) && null != H,
            eE = !(null === (a = W.expressionPicker) || void 0 === a ? void 0 : a.onlyEmojis) && (ep || eh),
            eg = "left" === z ? "right" : "left",
            eS = null != Z ? Z : "left" === z ? k.positionLayerDefaultAlignLeft : k.positionLayerDefaultAlignRight;
        return (0, l.jsx)(h.default, {
            section: P.AnalyticsSections.EXPRESSION_PICKER,
            children: (0, l.jsx)(y.AppReferencePositionLayer, {
                className: s(k.positionLayer, eS),
                reference: r,
                position: Y,
                align: z,
                spacing: 8,
                autoInvert: !0,
                children: e => {
                    let {
                        isPositioned: t
                    } = e;
                    return (0, l.jsx)("section", {
                        className: s(k.positionContainer, {
                            [k.positionContainerOnlyEmoji]: !eE
                        }),
                        ref: X,
                        role: "dialog",
                        "aria-label": D.default.Messages.EXPRESSION_PICKER,
                        children: t ? (0, l.jsxs)("div", {
                            className: k.drawerSizingWrapper,
                            style: {
                                width: null == en ? void 0 : en,
                                [z]: 0
                            },
                            ref: ee,
                            children: [(0, l.jsx)("div", {
                                className: k.resizeHandle,
                                onMouseDown: el,
                                style: {
                                    [eg]: -2
                                }
                            }), (0, l.jsxs)("div", {
                                className: k.contentWrapper,
                                children: [eE ? (0, l.jsx)("nav", {
                                    className: k.nav,
                                    children: (0, l.jsxs)("div", {
                                        className: k.navList,
                                        role: "tablist",
                                        "aria-label": D.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                        children: [ep ? (0, l.jsx)(F, {
                                            id: b.GIF_PICKER_TAB_ID,
                                            "aria-controls": b.GIF_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === L.ExpressionPickerViewType.GIF,
                                            isActive: ei === L.ExpressionPickerViewType.GIF,
                                            viewType: L.ExpressionPickerViewType.GIF,
                                            children: D.default.Messages.EXPRESSION_PICKER_GIF
                                        }) : null, eh ? (0, l.jsx)(F, {
                                            id: U.STICKER_PICKER_TAB_ID,
                                            "aria-controls": U.STICKER_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === L.ExpressionPickerViewType.STICKER,
                                            isActive: ei === L.ExpressionPickerViewType.STICKER,
                                            autoFocus: !ea,
                                            viewType: L.ExpressionPickerViewType.STICKER,
                                            children: (0, l.jsx)("div", {
                                                className: k.stickersNavItem,
                                                children: D.default.Messages.EXPRESSION_PICKER_STICKER
                                            })
                                        }) : null, (0, l.jsx)(F, {
                                            id: b.EMOJI_PICKER_TAB_ID,
                                            "aria-controls": b.EMOJI_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === L.ExpressionPickerViewType.EMOJI,
                                            isActive: ei === L.ExpressionPickerViewType.EMOJI,
                                            viewType: L.ExpressionPickerViewType.EMOJI,
                                            children: D.default.Messages.EXPRESSION_PICKER_EMOJI
                                        }), eu && null != V && (0, l.jsx)(F, {
                                            id: b.SOUNDBOARD_PICKER_TAB_ID,
                                            "aria-controls": b.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === L.ExpressionPickerViewType.SOUNDBOARD,
                                            isActive: ei === L.ExpressionPickerViewType.SOUNDBOARD,
                                            viewType: L.ExpressionPickerViewType.SOUNDBOARD,
                                            children: "Sounds"
                                        })]
                                    })
                                }) : null, ei === L.ExpressionPickerViewType.STICKER && eh ? (0, l.jsx)(A.default, {
                                    isLoading: eo,
                                    channel: K,
                                    containerWidth: en,
                                    onSelectSticker: H,
                                    closePopout: em,
                                    ref: e => {
                                        $.current = e
                                    }
                                }) : null, ei === L.ExpressionPickerViewType.GIF && ep ? (0, l.jsx)(T.default, {
                                    onSelectGIF: x,
                                    hideFavorites: o,
                                    persistSearch: !0
                                }) : null, ei === L.ExpressionPickerViewType.EMOJI ? (0, l.jsx)(C.default, {
                                    hasTabWrapper: !0,
                                    persistSearch: !0,
                                    channel: K,
                                    containerWidth: en,
                                    includeCreateEmojiButton: p,
                                    emojiSize: null != en && en < w ? b.EmojiSize.MEDIUM : b.EmojiSize.LARGE,
                                    pickerIntention: j.EmojiIntention.CHAT,
                                    closePopout: em,
                                    onSelectEmoji: B,
                                    ref: e => {
                                        $.current = e
                                    }
                                }) : null, ei === L.ExpressionPickerViewType.SOUNDBOARD ? (0, l.jsx)("div", {
                                    className: k.soundboardContainer,
                                    children: (0, l.jsx)(I.default, {
                                        guildId: K.guild_id,
                                        channel: K,
                                        containerWidth: en,
                                        onClose: em,
                                        onSelect: V,
                                        analyticsSource: "expression-picker",
                                        autoWidth: !0
                                    })
                                }) : null]
                            })]
                        }) : null
                    })
                }
            })
        })
    })
}