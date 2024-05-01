function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        a = n("477690"),
        s = n("880949"),
        o = n("806966"),
        l = n("65029"),
        u = n("430824"),
        d = n("729285"),
        _ = n("624138"),
        c = n("926491"),
        E = n("373228"),
        I = n("378233"),
        T = n("419922"),
        f = n("689938"),
        S = n("753884");
    let h = (0, _.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
        A = (0, _.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
        m = e => {
            let t = null,
                n = null;
            if (!(0, I.isStandardSticker)(e) && !(0, I.isGuildSticker)(e) || (0, I.isGuildSticker)(e)) {
                let r = u.default.getGuild(e.guild_id);
                null != r && (t = f.default.Messages.STICKER_FROM_SOURCE.format({
                    source: r.name
                }), n = (0, i.jsx)(s.default, {
                    guild: r
                }))
            } else if ((0, I.isStandardSticker)(e)) {
                let r = c.default.getStickerPack(e.pack_id);
                null != r && (t = f.default.Messages.STICKER_FROM_SOURCE.format({
                    source: r.name
                }), n = (0, i.jsx)(T.default, {
                    size: A,
                    sticker: (0, I.getStickerPackPreviewSticker)(r),
                    disableAnimation: !0
                }))
            }
            return {
                title: t,
                graphic: n
            }
        },
        N = r.memo(function(e) {
            let {
                stickersGrid: t
            } = e, n = o.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), a = r.useMemo(() => {
                var e;
                let {
                    rowIndex: i,
                    columnIndex: r
                } = n, a = null === (e = t[i]) || void 0 === e ? void 0 : e[r];
                return (null == a ? void 0 : a.type) === E.StickerGridItemTypes.CREATE_STICKER ? {
                    guild_id: a.guild_id,
                    name: a.name
                } : (null == a ? void 0 : a.type) !== E.StickerGridItemTypes.STICKER ? null : a.sticker
            }, [t, n]);
            if (null == a) return null;
            let {
                graphic: s,
                title: u
            } = m(a), _ = (0, I.isStandardSticker)(a) || (0, I.isGuildSticker)(a) ? (0, i.jsx)(T.default, {
                isInteracting: !0,
                size: h,
                sticker: a,
                disableAnimation: !0
            }) : (0, i.jsx)("div", {
                className: S.iconWrapper,
                children: (0, i.jsx)(d.default, {
                    className: S.icon
                })
            });
            return (0, i.jsx)(l.default, {
                graphicPrimary: _,
                graphicSecondary: s,
                titlePrimary: a.name,
                titleSecondary: (0, I.isStandardSticker)(a) || (0, I.isGuildSticker)(a) ? u : null
            })
        });
    t.default = N
}