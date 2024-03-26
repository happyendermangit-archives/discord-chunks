function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return _
        }
    });
    var i = r("37983"),
        n = r("884691"),
        s = r("414456"),
        a = r.n(s),
        l = r("917351"),
        c = r("617258"),
        u = r("77078"),
        d = r("272030"),
        o = r("997289"),
        f = r("246511"),
        S = r("151185"),
        k = r("599110"),
        E = r("866353"),
        p = r("161585"),
        I = r("24373"),
        h = r("41170"),
        m = r("591522"),
        y = r("49111"),
        g = r("782340"),
        T = r("677930");
    let C = (0, c.cssValueToNumber)(T.stickerPickerPreviewDimensions),
        v = (0, c.cssValueToNumber)(T.stickerPickerPreviewPadding),
        R = n.memo(function(e) {
            let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: s = !0,
                getStickerItemProps: c,
                getStickerRowProps: R,
                gutterWidth: _,
                inspectedStickerPosition: A,
                isScrolling: x,
                isUsingKeyboardNavigation: L,
                onInspect: N,
                onSelect: M,
                rowIndex: P,
                stickerClassName: F,
                stickerDescriptors: w,
                stickerPadding: b = v,
                stickerSize: j = C,
                ownedStickerPacks: U,
                enlargeOnInteraction: G = !1,
                channel: K,
                currentUser: O,
                checkSendability: D = !0
            } = e, {
                location: V
            } = (0, o.useAnalyticsContext)(), H = j + 2 * b, z = n.useMemo(() => ({
                gridColumnGap: _,
                gridTemplateColumns: "repeat(auto-fill, ".concat(H, "px)"),
                height: H,
                paddingRight: t ? void 0 : H
            }), [t, _, H]), W = n.useMemo(() => ({
                width: j,
                height: j,
                padding: b
            }), [b, j]);
            return (0, i.jsx)("div", {
                className: T.row,
                style: z,
                ...null == R ? void 0 : R(P),
                children: w.map(e => {
                    var o;
                    let C = e.visibleRowIndex === (null == A ? void 0 : A.rowIndex) && e.columnIndex === (null == A ? void 0 : A.columnIndex),
                        v = e.type === p.StickerGridItemTypes.STICKER && G && C,
                        R = (0, l.throttle)(() => {
                            (null == x ? void 0 : x.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && !C && (null == N || N(e))
                        }, 250),
                        {
                            ref: _,
                            tabIndex: w,
                            onFocus: b,
                            ...H
                        } = null !== (o = null == c ? void 0 : c(e.columnIndex, P)) && void 0 !== o ? o : {};
                    switch (e.type) {
                        case p.StickerGridItemTypes.CREATE_STICKER:
                            return (0, i.jsx)("div", {
                                ...H,
                                children: (0, i.jsxs)(u.Clickable, {
                                    "aria-label": e.name,
                                    className: a(T.createSticker, F, {
                                        [T.createInspected]: C
                                    }),
                                    innerRef: _,
                                    tabIndex: w,
                                    onFocus: null != b ? b : R,
                                    onMouseMove: R,
                                    onClick: () => {
                                        e.type === p.StickerGridItemTypes.CREATE_STICKER && (k.default.track(y.AnalyticEvents.OPEN_MODAL, {
                                            type: y.AnalyticsSections.CREATE_STICKER_MODAL,
                                            location: V
                                        }), (0, u.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await r.el("54666").then(r.bind(r, "54666"));
                                            return r => (0, i.jsx)(t, {
                                                guildId: e.guild_id,
                                                ...r
                                            })
                                        }))
                                    },
                                    style: W,
                                    children: [!G && (0, i.jsx)("div", {
                                        className: T.inspectedIndicator
                                    }), (0, i.jsx)("div", {
                                        className: T.iconWrapper,
                                        children: (0, i.jsx)(S.default, {
                                            className: T.icon
                                        })
                                    }), (0, i.jsx)(u.Text, {
                                        color: "interactive-active",
                                        variant: "text-xs/normal",
                                        children: g.default.Messages.STICKER_PICKER_CREATE_STICKER
                                    })]
                                })
                            }, e.guild_id);
                        case p.StickerGridItemTypes.STICKER: {
                            let l = t && null != U && (0, I.isStandardSticker)(e.sticker) && !U.has(e.sticker.pack_id);
                            return (0, n.createElement)("div", {
                                ...H,
                                key: e.sticker.id
                            }, (0, i.jsxs)(u.Clickable, {
                                className: a(T.sticker, F, {
                                    [T.stickerInspected]: C
                                }),
                                innerRef: _,
                                tabIndex: w,
                                onFocus: null != b ? b : R,
                                onMouseMove: R,
                                onClick: t => {
                                    (null == x ? void 0 : x.current) !== !0 && (null == L ? void 0 : L.current) !== !0 && (null == M || M(e, t))
                                },
                                onContextMenu: e => {
                                    (0, d.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await r.el("367343").then(r.bind(r, "367343"));
                                        return t => (0, i.jsx)(e, {
                                            ...t
                                        })
                                    })
                                },
                                style: W,
                                "data-type": f.PickerContextMenuDataTypes.STICKER,
                                "data-id": e.sticker.id,
                                children: [(0, i.jsx)(u.HiddenVisually, {
                                    children: (0, h.getStickerAltText)(e.sticker)
                                }), (0, i.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [!G && (0, i.jsx)("div", {
                                        className: T.inspectedIndicator
                                    }), (0, i.jsx)(h.default, {
                                        className: a(T.stickerNode, {
                                            [T.stickerNodeDimmed]: G && !C && null != A && -1 !== A.rowIndex && -1 !== A.columnIndex,
                                            [T.stickerNodeHidden]: v,
                                            [T.stickerUnsendable]: D && !(0, E.isSendableSticker)(e.sticker, O, K)
                                        }),
                                        disableAnimation: !C && !s,
                                        enlargeOnInteraction: G,
                                        isInteracting: C,
                                        maskAsset: C,
                                        sticker: e.sticker,
                                        size: j
                                    }), l ? (0, i.jsx)(m.default, {
                                        size: 20
                                    }) : null]
                                })]
                            }))
                        }
                    }
                })
            })
        });
    var _ = R
}