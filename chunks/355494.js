function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("769846"),
        s = n("917764"),
        r = n("986632"),
        o = n("562323"),
        u = n("305961"),
        d = n("151185"),
        c = n("159885"),
        f = n("364685"),
        m = n("161585"),
        p = n("24373"),
        h = n("41170"),
        E = n("782340"),
        g = n("498563");
    let C = (0, c.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
        S = (0, c.cssValueToNumber)(a.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
        T = e => {
            let t = null,
                n = null;
            if (!(0, p.isStandardSticker)(e) && !(0, p.isGuildSticker)(e) || (0, p.isGuildSticker)(e)) {
                let i = u.default.getGuild(e.guild_id);
                null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
                    source: i.name
                }), n = (0, l.jsx)(s.default, {
                    guild: i
                }))
            } else if ((0, p.isStandardSticker)(e)) {
                let i = f.default.getStickerPack(e.pack_id);
                null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
                    source: i.name
                }), n = (0, l.jsx)(h.default, {
                    size: S,
                    sticker: (0, p.getStickerPackPreviewSticker)(i),
                    disableAnimation: !0
                }))
            }
            return {
                title: t,
                graphic: n
            }
        },
        v = i.memo(function(e) {
            let {
                stickersGrid: t
            } = e, n = r.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), a = i.useMemo(() => {
                var e;
                let {
                    rowIndex: l,
                    columnIndex: i
                } = n, a = null === (e = t[l]) || void 0 === e ? void 0 : e[i];
                return (null == a ? void 0 : a.type) === m.StickerGridItemTypes.CREATE_STICKER ? {
                    guild_id: a.guild_id,
                    name: a.name
                } : (null == a ? void 0 : a.type) !== m.StickerGridItemTypes.STICKER ? null : a.sticker
            }, [t, n]);
            if (null == a) return null;
            let {
                graphic: s,
                title: u
            } = T(a), c = (0, p.isStandardSticker)(a) || (0, p.isGuildSticker)(a) ? (0, l.jsx)(h.default, {
                isInteracting: !0,
                size: C,
                sticker: a,
                disableAnimation: !0
            }) : (0, l.jsx)("div", {
                className: g.iconWrapper,
                children: (0, l.jsx)(d.default, {
                    className: g.icon
                })
            });
            return (0, l.jsx)(o.default, {
                graphicPrimary: c,
                graphicSecondary: s,
                titlePrimary: a.name,
                titleSecondary: (0, p.isStandardSticker)(a) || (0, p.isGuildSticker)(a) ? u : null
            })
        });
    var I = v
}