function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("943722"),
        r = n("157384");

    function o(e) {
        let {
            activity: t,
            className: n,
            emojiClassName: l,
            textClassName: o,
            placeholderText: u,
            soloEmojiClassName: d,
            animate: c = !0,
            hideTooltip: f = !1,
            hideEmoji: p = !1,
            children: m
        } = e;
        if (null == t) return null;
        let {
            emoji: h
        } = t, x = null != t.state && "" !== t.state ? t.state : u;
        return (0, i.jsxs)("div", {
            className: a(r.container, n),
            children: [p || null == h ? null : (0, i.jsx)(s.ActivityEmoji, {
                emoji: h,
                className: a(r.emoji, l, null != d ? {
                    [d]: null == x || "" === x
                } : null),
                animate: c,
                hideTooltip: f
            }), null != x && x.length > 0 ? (0, i.jsx)("span", {
                className: o,
                children: x
            }) : null, m]
        })
    }
}