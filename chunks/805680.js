function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("392711"),
        l = n.n(o),
        u = n("873546"),
        d = n("374470"),
        _ = n("442837"),
        c = n("952265"),
        E = n("481060"),
        I = n("153867"),
        T = n("410575"),
        f = n("347469"),
        S = n("40851"),
        h = n("367907"),
        A = n("907040"),
        m = n("455708"),
        N = n("315744"),
        p = n("603074"),
        O = n("453070"),
        R = n("926491"),
        C = n("457040"),
        g = n("740492"),
        L = n("153850"),
        D = n("585483"),
        v = n("5967"),
        M = n("28546"),
        y = n("957825"),
        P = n("981631"),
        U = n("149203"),
        b = n("185923"),
        G = n("611480"),
        w = n("689938"),
        k = n("371396");
    let B = y.MIN_EXPRESSION_PICKER_WIDTH + U.EmojiSize.MEDIUM,
        F = r.memo(function(e) {
            let {
                isActive: t,
                className: n,
                viewType: r,
                autoFocus: s = !1,
                "aria-controls": o,
                ...l
            } = e;
            return (0, i.jsx)(E.Button, {
                role: "tab",
                autoFocus: s,
                "aria-controls": t ? o : void 0,
                ...l,
                onClick: () => {
                    h.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                        tab: r,
                        badged: !1
                    }), (0, M.setExpressionPickerView)(r)
                },
                "aria-current": t ? "page" : void 0,
                className: a()(n, k.navButton, k.navItem, {
                    [k.navButtonActive]: t
                }),
                look: E.Button.Looks.BLANK,
                size: E.Button.Sizes.NONE
            })
        }),
        V = e => {
            let {
                positionContainerRef: t,
                drawerRef: n,
                orientation: i
            } = e, s = (0, _.useStateFromStores)([g.default], () => g.default.expressionPickerWidth), [a, o] = r.useState(window.innerWidth), [u, d] = r.useState(null != s ? s : y.ExpressionPickerWidths.MIN), c = r.useMemo(() => {
                switch (u) {
                    case y.ExpressionPickerWidths.MIN:
                        return y.MIN_EXPRESSION_PICKER_WIDTH;
                    case y.ExpressionPickerWidths.MAX:
                        return null;
                    default:
                        return u
                }
            }, [u]), E = r.useCallback(e => {
                let t = e >= a ? y.ExpressionPickerWidths.MAX : e <= y.MIN_EXPRESSION_PICKER_WIDTH ? y.ExpressionPickerWidths.MIN : e;
                null == t && null != n.current && (n.current.style.width = ""), I.default.updatedUnsyncedSettings({
                    expressionPickerWidth: t
                }), d(t)
            }, [n, a]), T = (0, f.default)({
                initialElementDimension: c,
                maxDimension: a,
                minDimension: y.MIN_EXPRESSION_PICKER_WIDTH,
                resizableDomNodeRef: n,
                onElementResize: E,
                orientation: i
            });
            return r.useEffect(() => {
                let e = l().debounce(() => {
                    null != t.current && o(t.current.offsetWidth)
                }, 500);
                return window.addEventListener("resize", e), () => {
                    window.removeEventListener("resize", e)
                }
            }, [t]), r.useLayoutEffect(() => {
                null != t.current && o(t.current.offsetWidth)
            }, [t]), {
                drawerWidth: c,
                handleDrawerResizeHandleMouseDown: r.useCallback(e => {
                    e.stopPropagation(), null != t.current && o(t.current.offsetWidth), T(e)
                }, [t, T])
            }
        };
    t.default = r.memo(function(e) {
        var t, n, s;
        let {
            positionTargetRef: o,
            hideGifFavorites: l,
            includeCreateEmojiButton: I,
            onSelectGIF: g,
            onSelectEmoji: x,
            onSelectSticker: H,
            onSelectSound: Y,
            channel: j,
            type: W,
            position: K,
            align: z,
            positionLayerClassName: X,
            closeOnModalOuterClick: q = !1,
            parentModalKey: Q
        } = e, Z = r.useRef(null), J = r.useRef(!1), $ = r.useRef(), ee = r.useRef(null), {
            drawerWidth: et,
            handleDrawerResizeHandleMouseDown: en
        } = V({
            positionContainerRef: Z,
            drawerRef: ee,
            orientation: "left" === z ? f.ResizeOrientation.HORIZONTAL_RIGHT : f.ResizeOrientation.HORIZONTAL_LEFT
        }), ei = (0, M.useExpressionPickerStore)(e => e.activeView), er = (0, O.useHasSendableSticker)(j), {
            renderWindow: es,
            windowDispatch: ea
        } = r.useContext(S.default), eo = (0, _.useStateFromStores)([R.default], () => !R.default.hasLoadedStickerPacks), el = (0, N.useSoundmojiExperiment)("expression_picker"), eu = null != Q, ed = (0, c.useIsModalAtTop)(null != Q ? Q : ""), e_ = r.useCallback(e => {
            var t;
            if (!eu && (0, c.hasAnyModalOpen)() || eu && !(ed && q)) return;
            let {
                target: n
            } = e;
            if ((0, d.isElement)(n) && null != n.closest("." + y.CHAT_INPUT_BUTTON_CLASSNAME)) return;
            for (;
                (0, d.isElement)(n);) {
                if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                n = n.parentNode
            }(0, M.closeExpressionPicker)();
            let i = null === (t = (0, v.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
            (null == i || "BODY" === i.tagName) && D.ComponentDispatch.dispatchToLastSubscribed(P.ComponentActions.TEXTAREA_FOCUS)
        }, [q, ed, eu]), ec = r.useCallback(() => {
            (0, M.closeExpressionPicker)()
        }, []);
        r.useLayoutEffect(() => {
            let e = () => {
                ei === y.ExpressionPickerViewType.GIF && (0, M.closeExpressionPicker)()
            };
            return es.addEventListener("mousedown", e_), es.addEventListener("contextmenu", e_), ea.subscribe(P.ComponentActions.POPOUT_CLOSE, ec), D.ComponentDispatch.subscribe(P.ComponentActions.CLOSE_GIF_PICKER, e), () => {
                es.removeEventListener("mousedown", e_), es.removeEventListener("contextmenu", e_), ea.unsubscribe(P.ComponentActions.POPOUT_CLOSE, ec), D.ComponentDispatch.unsubscribe(P.ComponentActions.CLOSE_GIF_PICKER, e)
            }
        }, [ei, ec, e_, es, ea]), (0, E.useFocusLock)(Z), r.useEffect(() => {
            (0, M.setSearchQuery)("")
        }, []), r.useEffect(() => {
            (!eu && (0, c.hasAnyModalOpen)() || eu && !ed) && (0, M.closeExpressionPicker)()
        }, [ed, eu]), r.useEffect(() => {
            if (null != ee.current && !J.current) {
                var e, t, n, i;
                ei === y.ExpressionPickerViewType.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), J.current = !0) : ei === y.ExpressionPickerViewType.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !eo && (null == $ || null === (i = $.current) || void 0 === i || i.onPickerOpen(), J.current = !0) : (h.default.trackWithMetadata(P.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                    width: ee.current.offsetWidth,
                    tab: ei,
                    badged: !1
                }), J.current = !0)
            }
        });
        let eE = (null === (t = W.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile && null != g,
            eI = (null === (n = W.stickers) || void 0 === n ? void 0 : n.allowSending) && null != H,
            eT = !(null === (s = W.expressionPicker) || void 0 === s ? void 0 : s.onlyEmojis) && (eE || eI),
            ef = "left" === z ? "right" : "left",
            eS = null != X ? X : "left" === z ? k.positionLayerDefaultAlignLeft : k.positionLayerDefaultAlignRight;
        return (0, i.jsx)(T.default, {
            section: P.AnalyticsSections.EXPRESSION_PICKER,
            children: (0, i.jsx)(L.AppReferencePositionLayer, {
                className: a()(k.positionLayer, eS),
                reference: o,
                position: K,
                align: z,
                spacing: 8,
                autoInvert: !0,
                children: e => {
                    let {
                        isPositioned: t
                    } = e;
                    return (0, i.jsx)("section", {
                        className: a()(k.positionContainer, {
                            [k.positionContainerOnlyEmoji]: !eT
                        }),
                        ref: Z,
                        role: "dialog",
                        "aria-label": w.default.Messages.EXPRESSION_PICKER,
                        children: t ? (0, i.jsxs)("div", {
                            className: k.drawerSizingWrapper,
                            style: {
                                width: null == et ? void 0 : et,
                                [z]: 0
                            },
                            ref: ee,
                            children: [(0, i.jsx)("div", {
                                className: k.resizeHandle,
                                onMouseDown: en,
                                style: {
                                    [ef]: -2
                                }
                            }), (0, i.jsxs)("div", {
                                className: k.contentWrapper,
                                children: [eT ? (0, i.jsx)("nav", {
                                    className: k.nav,
                                    children: (0, i.jsxs)("div", {
                                        className: k.navList,
                                        role: "tablist",
                                        "aria-label": w.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                        children: [eE ? (0, i.jsx)(F, {
                                            id: U.GIF_PICKER_TAB_ID,
                                            "aria-controls": U.GIF_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === y.ExpressionPickerViewType.GIF,
                                            isActive: ei === y.ExpressionPickerViewType.GIF,
                                            viewType: y.ExpressionPickerViewType.GIF,
                                            children: w.default.Messages.EXPRESSION_PICKER_GIF
                                        }) : null, eI ? (0, i.jsx)(F, {
                                            id: G.STICKER_PICKER_TAB_ID,
                                            "aria-controls": G.STICKER_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === y.ExpressionPickerViewType.STICKER,
                                            isActive: ei === y.ExpressionPickerViewType.STICKER,
                                            autoFocus: !er,
                                            viewType: y.ExpressionPickerViewType.STICKER,
                                            children: (0, i.jsx)("div", {
                                                className: k.stickersNavItem,
                                                children: w.default.Messages.EXPRESSION_PICKER_STICKER
                                            })
                                        }) : null, (0, i.jsx)(F, {
                                            id: U.EMOJI_PICKER_TAB_ID,
                                            "aria-controls": U.EMOJI_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === y.ExpressionPickerViewType.EMOJI,
                                            isActive: ei === y.ExpressionPickerViewType.EMOJI,
                                            viewType: y.ExpressionPickerViewType.EMOJI,
                                            children: w.default.Messages.EXPRESSION_PICKER_EMOJI
                                        }), el && null != Y && (0, i.jsx)(F, {
                                            id: U.SOUNDBOARD_PICKER_TAB_ID,
                                            "aria-controls": U.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                                            "aria-selected": ei === y.ExpressionPickerViewType.SOUNDBOARD,
                                            isActive: ei === y.ExpressionPickerViewType.SOUNDBOARD,
                                            viewType: y.ExpressionPickerViewType.SOUNDBOARD,
                                            children: "Sounds"
                                        })]
                                    })
                                }) : null, ei === y.ExpressionPickerViewType.STICKER && eI ? (0, i.jsx)(C.default, {
                                    isLoading: eo,
                                    channel: j,
                                    containerWidth: et,
                                    onSelectSticker: H,
                                    closePopout: ec,
                                    ref: e => {
                                        $.current = e
                                    }
                                }) : null, ei === y.ExpressionPickerViewType.GIF && eE ? (0, i.jsx)(m.default, {
                                    onSelectGIF: g,
                                    hideFavorites: l,
                                    persistSearch: !0
                                }) : null, ei === y.ExpressionPickerViewType.EMOJI ? (0, i.jsx)(A.default, {
                                    hasTabWrapper: !0,
                                    persistSearch: !0,
                                    channel: j,
                                    containerWidth: et,
                                    includeCreateEmojiButton: I,
                                    emojiSize: null != et && et < B ? U.EmojiSize.MEDIUM : U.EmojiSize.LARGE,
                                    pickerIntention: b.EmojiIntention.CHAT,
                                    closePopout: ec,
                                    onSelectEmoji: x,
                                    ref: e => {
                                        $.current = e
                                    }
                                }) : null, ei === y.ExpressionPickerViewType.SOUNDBOARD ? (0, i.jsx)("div", {
                                    className: k.soundboardContainer,
                                    children: (0, i.jsx)(p.default, {
                                        guildId: j.guild_id,
                                        channel: j,
                                        containerWidth: et,
                                        onClose: ec,
                                        onSelect: Y,
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