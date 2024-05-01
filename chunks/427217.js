function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("788307"),
        o = n("490260");

    function l(e) {
        let {
            activity: t,
            className: n,
            emojiClassName: r,
            textClassName: l,
            placeholderText: u,
            soloEmojiClassName: d,
            animate: _ = !0,
            hideTooltip: c = !1,
            hideEmoji: E = !1,
            children: I
        } = e;
        if (null == t) return null;
        let {
            emoji: T
        } = t, f = null != t.state && "" !== t.state ? t.state : u;
        return (0, i.jsxs)("div", {
            className: a()(o.__invalid_container, n),
            children: [E || null == T ? null : (0, i.jsx)(s.ActivityEmoji, {
                emoji: T,
                className: a()(o.emoji, r, null != d ? {
                    [d]: null == f || "" === f
                } : null),
                animate: _,
                hideTooltip: c
            }), null != f && f.length > 0 ? (0, i.jsx)("span", {
                className: l,
                children: f
            }) : null, I]
        })
    }
}