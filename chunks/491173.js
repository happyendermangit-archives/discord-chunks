function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250"),
        r = n("470079"),
        s = n("477690"),
        a = n("880949"),
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
        S = n("824620");
    let h = (0, _.cssValueToNumber)(s.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
        A = (0, _.cssValueToNumber)(s.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
        m = e => {
            let t = null,
                n = null;
            if (!(0, I.isStandardSticker)(e) && !(0, I.isGuildSticker)(e) || (0, I.isGuildSticker)(e)) {
                let r = u.default.getGuild(e.guild_id);
                null != r && (t = f.default.Messages.STICKER_FROM_SOURCE.format({
                    source: r.name
                }), n = (0, i.jsx)(a.default, {
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
            } = e, n = o.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), s = r.useMemo(() => {
                var e;
                let {
                    rowIndex: i,
                    columnIndex: r
                } = n, s = null === (e = t[i]) || void 0 === e ? void 0 : e[r];
                return (null == s ? void 0 : s.type) === E.StickerGridItemTypes.CREATE_STICKER ? {
                    guild_id: s.guild_id,
                    name: s.name
                } : (null == s ? void 0 : s.type) !== E.StickerGridItemTypes.STICKER ? null : s.sticker
            }, [t, n]);
            if (null == s) return null;
            let {
                graphic: a,
                title: u
            } = m(s), _ = (0, I.isStandardSticker)(s) || (0, I.isGuildSticker)(s) ? (0, i.jsx)(T.default, {
                isInteracting: !0,
                size: h,
                sticker: s,
                disableAnimation: !0
            }) : (0, i.jsx)("div", {
                className: S.iconWrapper,
                children: (0, i.jsx)(d.default, {
                    className: S.icon
                })
            });
            return (0, i.jsx)(l.default, {
                graphicPrimary: _,
                graphicSecondary: a,
                titlePrimary: s.name,
                titleSecondary: (0, I.isStandardSticker)(s) || (0, I.isGuildSticker)(s) ? u : null
            })
        });
    t.default = N
}