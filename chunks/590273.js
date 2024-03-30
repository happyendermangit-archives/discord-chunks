function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("590611"),
        u = n("247975");

    function s(e) {
        var t, n, o, s = e.activity,
            l = e.className,
            c = e.emojiClassName,
            f = e.textClassName,
            d = e.placeholderText,
            _ = e.soloEmojiClassName,
            E = e.animate,
            p = e.hideTooltip,
            m = e.hideEmoji,
            y = e.children;
        if (null == s) return null;
        var I = s.emoji,
            h = null != s.state && "" !== s.state ? s.state : d;
        return r.createElement("div", {
            className: i()(u.__invalid_container, l)
        }, void 0 !== m && m || null == I ? null : r.createElement(a.ActivityEmoji, {
            emoji: I,
            className: i()(u.emoji, c, null != _ ? (t = {}, n = _, o = null == h || "" === h, n in t ? Object.defineProperty(t, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = o, t) : null),
            animate: void 0 === E || E,
            hideTooltip: void 0 !== p && p
        }), null != h && h.length > 0 ? r.createElement("span", {
            className: f
        }, h) : null, y)
    }
}