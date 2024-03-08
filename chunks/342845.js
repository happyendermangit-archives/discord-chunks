function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("943722"),
        a = n("808742"),
        s = n("49111"),
        r = e => {
            var t;
            let {
                className: n,
                hangStatusActivity: r,
                animate: o = !0
            } = e;
            if ((null == r ? void 0 : r.state) === s.HangStatusTypes.CUSTOM) return null != r.emoji ? (0, i.jsx)(l.ActivityEmoji, {
                emoji: r.emoji,
                className: n,
                hideTooltip: !0,
                animate: o
            }) : null;
            let u = null === (t = (0, a.getHangStatusDetails)(r)) || void 0 === t ? void 0 : t.icon;
            return null != u ? (0, i.jsx)("img", {
                src: u,
                alt: "",
                className: null != n ? n : void 0
            }) : null
        }
}