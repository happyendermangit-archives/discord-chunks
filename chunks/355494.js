function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("769846"),
        s = n("917764"),
        r = n("986632"),
        o = n("562323"),
        u = n("305961"),
        d = n("151185"),
        c = n("159885"),
        f = n("364685"),
        p = n("161585"),
        m = n("24373"),
        h = n("41170"),
        x = n("782340"),
        E = n("498563");
    let y = (0, c.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
        g = (0, c.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
        S = e => {
            let t = null,
                n = null;
            if (!(0, m.isStandardSticker)(e) && !(0, m.isGuildSticker)(e) || (0, m.isGuildSticker)(e)) {
                let l = u.default.getGuild(e.guild_id);
                null != l && (t = x.default.Messages.STICKER_FROM_SOURCE.format({
                    source: l.name
                }), n = (0, i.jsx)(s.default, {
                    guild: l
                }))
            } else if ((0, m.isStandardSticker)(e)) {
                let l = f.default.getStickerPack(e.pack_id);
                null != l && (t = x.default.Messages.STICKER_FROM_SOURCE.format({
                    source: l.name
                }), n = (0, i.jsx)(h.default, {
                    size: g,
                    sticker: (0, m.getStickerPackPreviewSticker)(l),
                    disableAnimation: !0
                }))
            }
            return {
                title: t,
                graphic: n
            }
        },
        C = l.memo(function(e) {
            let {
                stickersGrid: t
            } = e, n = r.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), a = l.useMemo(() => {
                var e;
                let {
                    rowIndex: i,
                    columnIndex: l
                } = n, a = null === (e = t[i]) || void 0 === e ? void 0 : e[l];
                return (null == a ? void 0 : a.type) === p.StickerGridItemTypes.CREATE_STICKER ? {
                    guild_id: a.guild_id,
                    name: a.name
                } : (null == a ? void 0 : a.type) !== p.StickerGridItemTypes.STICKER ? null : a.sticker
            }, [t, n]);
            if (null == a) return null;
            let {
                graphic: s,
                title: u
            } = S(a), c = (0, m.isStandardSticker)(a) || (0, m.isGuildSticker)(a) ? (0, i.jsx)(h.default, {
                isInteracting: !0,
                size: y,
                sticker: a,
                disableAnimation: !0
            }) : (0, i.jsx)("div", {
                className: E.iconWrapper,
                children: (0, i.jsx)(d.default, {
                    className: E.icon
                })
            });
            return (0, i.jsx)(o.default, {
                graphicPrimary: c,
                graphicSecondary: s,
                titlePrimary: a.name,
                titleSecondary: (0, m.isStandardSticker)(a) || (0, m.isGuildSticker)(a) ? u : null
            })
        });
    var T = C
}