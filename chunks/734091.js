function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("337905"),
        i = n("289917"),
        a = n("797056"),
        u = n("991264"),
        s = n("306912"),
        l = n("210295"),
        c = n("778513"),
        f = n("389712"),
        d = n("294463"),
        _ = n("443699"),
        E = n("624308"),
        p = n("941504"),
        m = n("261051"),
        y = (0, c.cssValueToNumber)(o.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
        I = (0, c.cssValueToNumber)(o.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
        h = function(e) {
            var t = null,
                n = null;
            if (!(0, _.isStandardSticker)(e) && !(0, _.isGuildSticker)(e) || (0, _.isGuildSticker)(e)) {
                var o = s.default.getGuild(e.guild_id);
                null != o && (t = p.default.Messages.STICKER_FROM_SOURCE.format({
                    source: o.name
                }), n = r.createElement(i.default, {
                    guild: o
                }))
            } else if ((0, _.isStandardSticker)(e)) {
                var a = f.default.getStickerPack(e.pack_id);
                null != a && (t = p.default.Messages.STICKER_FROM_SOURCE.format({
                    source: a.name
                }), n = r.createElement(E.default, {
                    size: I,
                    sticker: (0, _.getStickerPackPreviewSticker)(a),
                    disableAnimation: !0
                }))
            }
            return {
                title: t,
                graphic: n
            }
        },
        O = r.memo(function(e) {
            var t = e.stickersGrid,
                n = a.StickerPickerStore.useStore(function(e) {
                    return e.inspectedExpressionPosition
                }),
                o = r.useMemo(function() {
                    var e, r = n.rowIndex,
                        o = n.columnIndex,
                        i = null === (e = t[r]) || void 0 === e ? void 0 : e[o];
                    return (null == i ? void 0 : i.type) === d.StickerGridItemTypes.CREATE_STICKER ? {
                        guild_id: i.guild_id,
                        name: i.name
                    } : (null == i ? void 0 : i.type) !== d.StickerGridItemTypes.STICKER ? null : i.sticker
                }, [t, n]);
            if (null == o) return null;
            var i = h(o),
                s = i.graphic,
                c = i.title,
                f = (0, _.isStandardSticker)(o) || (0, _.isGuildSticker)(o) ? r.createElement(E.default, {
                    isInteracting: !0,
                    size: y,
                    sticker: o,
                    disableAnimation: !0
                }) : r.createElement("div", {
                    className: m.iconWrapper
                }, r.createElement(l.default, {
                    className: m.icon
                }));
            return r.createElement(u.default, {
                graphicPrimary: f,
                graphicSecondary: s,
                titlePrimary: o.name,
                titleSecondary: (0, _.isStandardSticker)(o) || (0, _.isGuildSticker)(o) ? c : null
            })
        });
    t.default = O
}