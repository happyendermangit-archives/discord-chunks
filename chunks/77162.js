function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return R
        }
    });
    var r = i("37983"),
        n = i("884691"),
        s = i("414456"),
        a = i.n(s),
        l = i("917351"),
        u = i("617258"),
        c = i("77078"),
        o = i("272030"),
        d = i("997289"),
        f = i("246511"),
        S = i("151185"),
        m = i("599110"),
        h = i("866353"),
        E = i("161585"),
        I = i("24373"),
        p = i("41170"),
        k = i("591522"),
        C = i("49111"),
        g = i("782340"),
        T = i("677930");
    let v = (0, u.cssValueToNumber)(T.stickerPickerPreviewDimensions),
        y = (0, u.cssValueToNumber)(T.stickerPickerPreviewPadding),
        _ = n.memo(function(e) {
            let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: s = !0,
                getStickerItemProps: u,
                getStickerRowProps: _,
                gutterWidth: R,
                inspectedStickerPosition: L,
                isScrolling: x,
                isUsingKeyboardNavigation: A,
                onInspect: P,
                onSelect: U,
                rowIndex: M,
                stickerClassName: N,
                stickerDescriptors: F,
                stickerPadding: b = y,
                stickerSize: w = v,
                ownedStickerPacks: K,
                enlargeOnInteraction: O = !1,
                channel: j,
                currentUser: G,
                checkSendability: D = !0
            } = e, {
                location: H
            } = (0, d.useAnalyticsContext)(), V = w + 2 * b, B = n.useMemo(() => ({
                gridColumnGap: R,
                gridTemplateColumns: "repeat(auto-fill, ".concat(V, "px)"),
                height: V,
                paddingRight: t ? void 0 : V
            }), [t, R, V]), z = n.useMemo(() => ({
                width: w,
                height: w,
                padding: b
            }), [b, w]);
            return (0, r.jsx)("div", {
                className: T.row,
                style: B,
                ...null == _ ? void 0 : _(M),
                children: F.map(e => {
                    var d;
                    let v = e.visibleRowIndex === (null == L ? void 0 : L.rowIndex) && e.columnIndex === (null == L ? void 0 : L.columnIndex),
                        y = e.type === E.StickerGridItemTypes.STICKER && O && v,
                        _ = (0, l.throttle)(() => {
                            (null == x ? void 0 : x.current) !== !0 && (null == A ? void 0 : A.current) !== !0 && !v && (null == P || P(e))
                        }, 250),
                        {
                            ref: R,
                            tabIndex: F,
                            onFocus: b,
                            ...V
                        } = null !== (d = null == u ? void 0 : u(e.columnIndex, M)) && void 0 !== d ? d : {};
                    switch (e.type) {
                        case E.StickerGridItemTypes.CREATE_STICKER:
                            return (0, r.jsx)("div", {
                                ...V,
                                children: (0, r.jsxs)(c.Clickable, {
                                    "aria-label": e.name,
                                    className: a(T.createSticker, N, {
                                        [T.createInspected]: v
                                    }),
                                    innerRef: R,
                                    tabIndex: F,
                                    onFocus: null != b ? b : _,
                                    onMouseMove: _,
                                    onClick: () => {
                                        e.type === E.StickerGridItemTypes.CREATE_STICKER && (m.default.track(C.AnalyticEvents.OPEN_MODAL, {
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
                                    children: [!O && (0, r.jsx)("div", {
                                        className: T.inspectedIndicator
                                    }), (0, r.jsx)("div", {
                                        className: T.iconWrapper,
                                        children: (0, r.jsx)(S.default, {
                                            className: T.icon
                                        })
                                    }), (0, r.jsx)(c.Text, {
                                        color: "interactive-active",
                                        variant: "text-xs/normal",
                                        children: g.default.Messages.STICKER_PICKER_CREATE_STICKER
                                    })]
                                })
                            }, e.guild_id);
                        case E.StickerGridItemTypes.STICKER: {
                            let l = t && null != K && (0, I.isStandardSticker)(e.sticker) && !K.has(e.sticker.pack_id);
                            return (0, n.createElement)("div", {
                                ...V,
                                key: e.sticker.id
                            }, (0, r.jsxs)(c.Clickable, {
                                className: a(T.sticker, N, {
                                    [T.stickerInspected]: v
                                }),
                                innerRef: R,
                                tabIndex: F,
                                onFocus: null != b ? b : _,
                                onMouseMove: _,
                                onClick: t => {
                                    (null == x ? void 0 : x.current) !== !0 && (null == A ? void 0 : A.current) !== !0 && (null == U || U(e, t))
                                },
                                onContextMenu: e => {
                                    (0, o.openContextMenuLazy)(e, async () => {
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
                                    children: (0, p.getStickerAltText)(e.sticker)
                                }), (0, r.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [!O && (0, r.jsx)("div", {
                                        className: T.inspectedIndicator
                                    }), (0, r.jsx)(p.default, {
                                        className: a(T.stickerNode, {
                                            [T.stickerNodeDimmed]: O && !v && null != L && -1 !== L.rowIndex && -1 !== L.columnIndex,
                                            [T.stickerNodeHidden]: y,
                                            [T.stickerUnsendable]: D && !(0, h.isSendableSticker)(e.sticker, G, j)
                                        }),
                                        disableAnimation: !v && !s,
                                        enlargeOnInteraction: O,
                                        isInteracting: v,
                                        maskAsset: v,
                                        sticker: e.sticker,
                                        size: w
                                    }), l ? (0, r.jsx)(k.default, {
                                        size: 20
                                    }) : null]
                                })]
                            }))
                        }
                    }
                })
            })
        });
    var R = _
}