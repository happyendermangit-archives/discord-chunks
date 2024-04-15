function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("392711"),
        l = n("468194"),
        u = n("481060"),
        d = n("239091"),
        _ = n("2052"),
        c = n("691251"),
        E = n("729285"),
        I = n("626135"),
        T = n("285651"),
        f = n("373228"),
        S = n("378233"),
        A = n("419922"),
        h = n("490095"),
        m = n("981631"),
        N = n("689938"),
        O = n("900544");
    let p = (0, l.cssValueToNumber)(O.__invalid_stickerPickerPreviewDimensions),
        R = (0, l.cssValueToNumber)(O.__invalid_stickerPickerPreviewPadding),
        C = r.memo(function(e) {
            let {
                isDisplayingIndividualStickers: t = !1,
                preferAnimation: s = !0,
                getStickerItemProps: l,
                getStickerRowProps: C,
                gutterWidth: g,
                inspectedStickerPosition: L,
                isScrolling: D,
                isUsingKeyboardNavigation: v,
                onInspect: M,
                onSelect: y,
                rowIndex: P,
                stickerClassName: U,
                stickerDescriptors: b,
                stickerPadding: G = R,
                stickerSize: w = p,
                ownedStickerPacks: B,
                enlargeOnInteraction: k = !1,
                channel: F,
                currentUser: V,
                checkSendability: x = !0
            } = e, {
                location: H
            } = (0, _.useAnalyticsContext)(), Y = w + 2 * G, j = r.useMemo(() => ({
                gridColumnGap: g,
                gridTemplateColumns: "repeat(auto-fill, ".concat(Y, "px)"),
                height: Y,
                paddingRight: t ? void 0 : Y
            }), [t, g, Y]), W = r.useMemo(() => ({
                width: w,
                height: w,
                padding: G
            }), [G, w]);
            return (0, i.jsx)("div", {
                className: O.row,
                style: j,
                ...null == C ? void 0 : C(P),
                children: b.map(e => {
                    var _;
                    let p = e.visibleRowIndex === (null == L ? void 0 : L.rowIndex) && e.columnIndex === (null == L ? void 0 : L.columnIndex),
                        R = e.type === f.StickerGridItemTypes.STICKER && k && p,
                        C = (0, o.throttle)(() => {
                            (null == D ? void 0 : D.current) !== !0 && (null == v ? void 0 : v.current) !== !0 && !p && (null == M || M(e))
                        }, 250),
                        {
                            ref: g,
                            tabIndex: b,
                            onFocus: G,
                            ...Y
                        } = null !== (_ = null == l ? void 0 : l(e.columnIndex, P)) && void 0 !== _ ? _ : {};
                    switch (e.type) {
                        case f.StickerGridItemTypes.CREATE_STICKER:
                            return (0, i.jsx)("div", {
                                ...Y,
                                children: (0, i.jsxs)(u.Clickable, {
                                    "aria-label": e.name,
                                    className: a()(O.createSticker, U, {
                                        [O.createInspected]: p
                                    }),
                                    innerRef: g,
                                    tabIndex: b,
                                    onFocus: null != G ? G : C,
                                    onMouseMove: C,
                                    onClick: () => {
                                        e.type === f.StickerGridItemTypes.CREATE_STICKER && (I.default.track(m.AnalyticEvents.OPEN_MODAL, {
                                            type: m.AnalyticsSections.CREATE_STICKER_MODAL,
                                            location: H
                                        }), (0, u.openModalLazy)(async () => {
                                            let {
                                                default: t
                                            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("93626"), n.e("84482")]).then(n.bind(n, "136735"));
                                            return n => (0, i.jsx)(t, {
                                                guildId: e.guild_id,
                                                ...n
                                            })
                                        }))
                                    },
                                    style: W,
                                    children: [!k && (0, i.jsx)("div", {
                                        className: O.inspectedIndicator
                                    }), (0, i.jsx)("div", {
                                        className: O.iconWrapper,
                                        children: (0, i.jsx)(E.default, {
                                            className: O.icon
                                        })
                                    }), (0, i.jsx)(u.Text, {
                                        color: "interactive-active",
                                        variant: "text-xs/normal",
                                        children: N.default.Messages.STICKER_PICKER_CREATE_STICKER
                                    })]
                                })
                            }, e.guild_id);
                        case f.StickerGridItemTypes.STICKER: {
                            let o = t && null != B && (0, S.isStandardSticker)(e.sticker) && !B.has(e.sticker.pack_id);
                            return (0, r.createElement)("div", {
                                ...Y,
                                key: e.sticker.id
                            }, (0, i.jsxs)(u.Clickable, {
                                className: a()(O.sticker, U, {
                                    [O.stickerInspected]: p
                                }),
                                innerRef: g,
                                tabIndex: b,
                                onFocus: null != G ? G : C,
                                onMouseMove: C,
                                onClick: t => {
                                    (null == D ? void 0 : D.current) !== !0 && (null == v ? void 0 : v.current) !== !0 && (null == y || y(e, t))
                                },
                                onContextMenu: e => {
                                    (0, d.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await n.e("39010").then(n.bind(n, "269254"));
                                        return t => (0, i.jsx)(e, {
                                            ...t
                                        })
                                    })
                                },
                                style: W,
                                "data-type": c.PickerContextMenuDataTypes.STICKER,
                                "data-id": e.sticker.id,
                                children: [(0, i.jsx)(u.HiddenVisually, {
                                    children: (0, A.getStickerAltText)(e.sticker)
                                }), (0, i.jsxs)("div", {
                                    "aria-hidden": !0,
                                    children: [!k && (0, i.jsx)("div", {
                                        className: O.inspectedIndicator
                                    }), (0, i.jsx)(A.default, {
                                        className: a()(O.stickerNode, {
                                            [O.stickerNodeDimmed]: k && !p && null != L && -1 !== L.rowIndex && -1 !== L.columnIndex,
                                            [O.stickerNodeHidden]: R,
                                            [O.stickerUnsendable]: x && !(0, T.isSendableSticker)(e.sticker, V, F)
                                        }),
                                        disableAnimation: !p && !s,
                                        enlargeOnInteraction: k,
                                        isInteracting: p,
                                        maskAsset: p,
                                        sticker: e.sticker,
                                        size: w
                                    }), o ? (0, i.jsx)(h.default, {
                                        size: 20
                                    }) : null]
                                })]
                            }))
                        }
                    }
                })
            })
        });
    t.default = C
}