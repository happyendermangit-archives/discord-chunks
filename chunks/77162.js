function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return T
        }
    });
    var r = i("37983"),
        n = i("884691"),
        s = i("414456"),
        l = i.n(s),
        a = i("917351"),
        u = i("617258"),
        c = i("77078"),
        d = i("272030"),
        o = i("997289"),
        f = i("246511"),
        S = i("151185"),
        m = i("599110"),
        h = i("866353"),
        p = i("161585"),
        E = i("24373"),
        I = i("41170"),
        k = i("591522"),
        C = i("49111"),
        v = i("782340"),
        g = i("677930");
    let y = (0, u.cssValueToNumber)(g.stickerPickerPreviewDimensions),
        _ = (0, u.cssValueToNumber)(g.stickerPickerPreviewPadding),
        R = n.memo(function(e) {
            let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: s = !0,
                getStickerItemProps: u,
                getStickerRowProps: R,
                gutterWidth: T,
                inspectedStickerPosition: L,
                isScrolling: x,
                isUsingKeyboardNavigation: A,
                onInspect: P,
                onSelect: N,
                rowIndex: U,
                stickerClassName: M,
                stickerDescriptors: F,
                stickerPadding: b = _,
                stickerSize: w = y,
                ownedStickerPacks: K,
                enlargeOnInteraction: j = !1,
                channel: O,
                currentUser: G,
                checkSendability: D = !0
            } = e, {
                location: H
            } = (0, o.useAnalyticsContext)(), V = w + 2 * b, B = n.useMemo(() => ({
                gridColumnGap: T,
                gridTemplateColumns: "repeat(auto-fill, ".concat(V, "px)"),
                height: V,
                paddingRight: t ? void 0 : V
            }), [t, T, V]), z = n.useMemo(() => ({
                width: w,
                height: w,
                padding: b
            }), [b, w]);
            return (0, r.jsx)("div", {
                className: g.row,
                style: B,
                ...null == R ? void 0 : R(U),
                children: F.map(e => {
                    var o;
                    let y = e.visibleRowIndex === (null == L ? void 0 : L.rowIndex) && e.columnIndex === (null == L ? void 0 : L.columnIndex),
                        _ = e.type === p.StickerGridItemTypes.STICKER && j && y,
                        R = (0, a.throttle)(() => {
                            (null == x ? void 0 : x.current) !== !0 && (null == A ? void 0 : A.current) !== !0 && !y && (null == P || P(e))
                        }, 250),
                        {
                            ref: T,
                            tabIndex: F,
                            onFocus: b,
                            ...V
                        } = null !== (o = null == u ? void 0 : u(e.columnIndex, U)) && void 0 !== o ? o : {};
                    switch (e.type) {
                        case p.StickerGridItemTypes.CREATE_STICKER:
                            return (0, r.jsx)("div", {
                                ...V,
                                children: (0, r.jsxs)(c.Clickable, {
                                    "aria-label": e.name,
                                    className: l(g.createSticker, M, {
                                        [g.createInspected]: y
                                    }),
                                    innerRef: T,
                                    tabIndex: F,
                                    onFocus: null != b ? b : R,
                                    onMouseMove: R,
                                    onClick: () => {
                                        e.type === p.StickerGridItemTypes.CREATE_STICKER && (m.default.track(C.AnalyticEvents.OPEN_MODAL, {
                                            type: C.AnalyticsSections.CREATE_STICKER_MODAL,
                                            location: H
                                        }), (0, c.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await i.el("54666").then(i.bind(i, "54666"));
                                            return i => (0, r.jsx)(t, {
                                                guildId: e.guild_id,
                                                ...i
                                            })
                                        }))
                                    },
                                    style: z,
                                    children: [!j && (0, r.jsx)("div", {
                                        className: g.inspectedIndicator
                                    }), (0, r.jsx)("div", {
                                        className: g.iconWrapper,
                                        children: (0, r.jsx)(S.default, {
                                            className: g.icon
                                        })
                                    }), (0, r.jsx)(c.Text, {
                                        color: "interactive-active",
                                        variant: "text-xs/normal",
                                        children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                                    })]
                                })
                            }, e.guild_id);
                        case p.StickerGridItemTypes.STICKER: {
                            let a = t && null != K && (0, E.isStandardSticker)(e.sticker) && !K.has(e.sticker.pack_id);
                            return (0, n.createElement)("div", {
                                ...V,
                                key: e.sticker.id
                            }, (0, r.jsxs)(c.Clickable, {
                                className: l(g.sticker, M, {
                                    [g.stickerInspected]: y
                                }),
                                innerRef: T,
                                tabIndex: F,
                                onFocus: null != b ? b : R,
                                onMouseMove: R,
                                onClick: t => {
                                    (null == x ? void 0 : x.current) !== !0 && (null == A ? void 0 : A.current) !== !0 && (null == N || N(e, t))
                                },
                                onContextMenu: e => {
                                    (0, d.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await i.el("367343").then(i.bind(i, "367343"));
                                        return t => (0, r.jsx)(e, {
                                            ...t
                                        })
                                    })
                                },
                                style: z,
                                "data-type": f.PickerContextMenuDataTypes.STICKER,
                                "data-id": e.sticker.id,
                                children: [(0, r.jsx)(c.HiddenVisually, {
                                    children: (0, I.getStickerAltText)(e.sticker)
                                }), (0, r.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [!j && (0, r.jsx)("div", {
                                        className: g.inspectedIndicator
                                    }), (0, r.jsx)(I.default, {
                                        className: l(g.stickerNode, {
                                            [g.stickerNodeDimmed]: j && !y && null != L && -1 !== L.rowIndex && -1 !== L.columnIndex,
                                            [g.stickerNodeHidden]: _,
                                            [g.stickerUnsendable]: D && !(0, h.isSendableSticker)(e.sticker, G, O)
                                        }),
                                        disableAnimation: !y && !s,
                                        enlargeOnInteraction: j,
                                        isInteracting: y,
                                        maskAsset: y,
                                        sticker: e.sticker,
                                        size: w
                                    }), a ? (0, r.jsx)(k.default, {
                                        size: 20
                                    }) : null]
                                })]
                            }))
                        }
                    }
                })
            })
        });
    var T = R
}