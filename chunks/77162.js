function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return x
        }
    });
    var n = r("37983"),
        i = r("884691"),
        s = r("414456"),
        l = r.n(s),
        a = r("917351"),
        u = r("617258"),
        c = r("77078"),
        d = r("272030"),
        o = r("997289"),
        f = r("246511"),
        S = r("151185"),
        k = r("599110"),
        p = r("866353"),
        y = r("161585"),
        m = r("24373"),
        E = r("41170"),
        h = r("591522"),
        I = r("49111"),
        v = r("782340"),
        g = r("677930");
    let C = (0, u.cssValueToNumber)(g.stickerPickerPreviewDimensions),
        T = (0, u.cssValueToNumber)(g.stickerPickerPreviewPadding),
        R = i.memo(function(e) {
            let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: s = !0,
                getStickerItemProps: u,
                getStickerRowProps: R,
                gutterWidth: x,
                inspectedStickerPosition: _,
                isScrolling: A,
                isUsingKeyboardNavigation: N,
                onInspect: L,
                onSelect: P,
                rowIndex: F,
                stickerClassName: M,
                stickerDescriptors: j,
                stickerPadding: w = T,
                stickerSize: b = C,
                ownedStickerPacks: U,
                enlargeOnInteraction: G = !1,
                channel: K,
                currentUser: O,
                checkSendability: D = !0
            } = e, {
                location: V
            } = (0, o.useAnalyticsContext)(), z = b + 2 * w, W = i.useMemo(() => ({
                gridColumnGap: x,
                gridTemplateColumns: "repeat(auto-fill, ".concat(z, "px)"),
                height: z,
                paddingRight: t ? void 0 : z
            }), [t, x, z]), H = i.useMemo(() => ({
                width: b,
                height: b,
                padding: w
            }), [w, b]);
            return (0, n.jsx)("div", {
                className: g.row,
                style: W,
                ...null == R ? void 0 : R(F),
                children: j.map(e => {
                    var o;
                    let C = e.visibleRowIndex === (null == _ ? void 0 : _.rowIndex) && e.columnIndex === (null == _ ? void 0 : _.columnIndex),
                        T = e.type === y.StickerGridItemTypes.STICKER && G && C,
                        R = (0, a.throttle)(() => {
                            (null == A ? void 0 : A.current) !== !0 && (null == N ? void 0 : N.current) !== !0 && !C && (null == L || L(e))
                        }, 250),
                        {
                            ref: x,
                            tabIndex: j,
                            onFocus: w,
                            ...z
                        } = null !== (o = null == u ? void 0 : u(e.columnIndex, F)) && void 0 !== o ? o : {};
                    switch (e.type) {
                        case y.StickerGridItemTypes.CREATE_STICKER:
                            return (0, n.jsx)("div", {
                                ...z,
                                children: (0, n.jsxs)(c.Clickable, {
                                    "aria-label": e.name,
                                    className: l(g.createSticker, M, {
                                        [g.createInspected]: C
                                    }),
                                    innerRef: x,
                                    tabIndex: j,
                                    onFocus: null != w ? w : R,
                                    onMouseMove: R,
                                    onClick: () => {
                                        e.type === y.StickerGridItemTypes.CREATE_STICKER && (k.default.track(I.AnalyticEvents.OPEN_MODAL, {
                                            type: I.AnalyticsSections.CREATE_STICKER_MODAL,
                                            location: V
                                        }), (0, c.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await r.el("54666").then(r.bind(r, "54666"));
                                            return r => (0, n.jsx)(t, {
                                                guildId: e.guild_id,
                                                ...r
                                            })
                                        }))
                                    },
                                    style: H,
                                    children: [!G && (0, n.jsx)("div", {
                                        className: g.inspectedIndicator
                                    }), (0, n.jsx)("div", {
                                        className: g.iconWrapper,
                                        children: (0, n.jsx)(S.default, {
                                            className: g.icon
                                        })
                                    }), (0, n.jsx)(c.Text, {
                                        color: "interactive-active",
                                        variant: "text-xs/normal",
                                        children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                                    })]
                                })
                            }, e.guild_id);
                        case y.StickerGridItemTypes.STICKER: {
                            let a = t && null != U && (0, m.isStandardSticker)(e.sticker) && !U.has(e.sticker.pack_id);
                            return (0, i.createElement)("div", {
                                ...z,
                                key: e.sticker.id
                            }, (0, n.jsxs)(c.Clickable, {
                                className: l(g.sticker, M, {
                                    [g.stickerInspected]: C
                                }),
                                innerRef: x,
                                tabIndex: j,
                                onFocus: null != w ? w : R,
                                onMouseMove: R,
                                onClick: t => {
                                    (null == A ? void 0 : A.current) !== !0 && (null == N ? void 0 : N.current) !== !0 && (null == P || P(e, t))
                                },
                                onContextMenu: e => {
                                    (0, d.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await r.el("367343").then(r.bind(r, "367343"));
                                        return t => (0, n.jsx)(e, {
                                            ...t
                                        })
                                    })
                                },
                                style: H,
                                "data-type": f.PickerContextMenuDataTypes.STICKER,
                                "data-id": e.sticker.id,
                                children: [(0, n.jsx)(c.HiddenVisually, {
                                    children: (0, E.getStickerAltText)(e.sticker)
                                }), (0, n.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [!G && (0, n.jsx)("div", {
                                        className: g.inspectedIndicator
                                    }), (0, n.jsx)(E.default, {
                                        className: l(g.stickerNode, {
                                            [g.stickerNodeDimmed]: G && !C && null != _ && -1 !== _.rowIndex && -1 !== _.columnIndex,
                                            [g.stickerNodeHidden]: T,
                                            [g.stickerUnsendable]: D && !(0, p.isSendableSticker)(e.sticker, O, K)
                                        }),
                                        disableAnimation: !C && !s,
                                        enlargeOnInteraction: G,
                                        isInteracting: C,
                                        maskAsset: C,
                                        sticker: e.sticker,
                                        size: b
                                    }), a ? (0, n.jsx)(h.default, {
                                        size: 20
                                    }) : null]
                                })]
                            }))
                        }
                    }
                })
            })
        });
    var x = R
}