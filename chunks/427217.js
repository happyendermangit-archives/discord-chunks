function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("803997"),
        s = n.n(r),
        a = n("788307"),
        o = n("247975");

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
            className: s()(o.container, n),
            children: [E || null == T ? null : (0, i.jsx)(a.ActivityEmoji, {
                emoji: T,
                className: s()(o.emoji, r, null != d ? {
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