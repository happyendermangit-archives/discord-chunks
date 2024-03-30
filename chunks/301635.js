function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("51181"),
        u = n("13075"),
        s = n("624308"),
        l = n("437404"),
        c = n("333969"),
        f = n("941504"),
        d = n("414271");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = r.memo(function(e) {
        var t, n, E, p = e.channelId,
            m = e.chatInputType;
        var y = (t = r.useState(null), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = y[0],
            h = y[1],
            O = (0, o.useStateFromStores)([a.default], function() {
                return a.default.getStickerPreview(p, m.drafts.type)
            });
        return (null === (E = m.stickers) || void 0 === E ? void 0 : E.allowSending) && null != O && 0 !== O.length ? r.createElement(r.Fragment, null, r.createElement("div", {
            className: d.stickerPreviews
        }, O.map(function(e) {
            return r.createElement("div", {
                key: e.id,
                className: d.stickerPreviewContainer
            }, r.createElement(i.Clickable, {
                onFocus: function() {
                    return h(e.id)
                },
                onBlur: function() {
                    return h(null)
                },
                className: d.closeButton,
                "aria-label": f.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
                    name: e.name
                }),
                onClick: function() {
                    return (0, u.clearStickerPreview)(p, m.drafts.type)
                }
            }, r.createElement("div", {
                className: d.closeIconContainer
            }, r.createElement(l.default, {
                className: d.closeIcon
            }))), r.createElement(s.default, {
                isInteracting: I === e.id,
                className: d.stickerPreview,
                size: 48,
                sticker: e
            }))
        })), r.createElement(c.default, {
            className: d.stickerPreviewDivider
        })) : null
    })
}