function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("788307"),
        s = n("833858"),
        a = n("981631");
    t.default = e => {
        var t;
        let {
            className: n,
            hangStatusActivity: o,
            animate: l = !0
        } = e;
        if ((null == o ? void 0 : o.state) === a.HangStatusTypes.CUSTOM) return null != o.emoji ? (0, i.jsx)(r.ActivityEmoji, {
            emoji: o.emoji,
            className: n,
            hideTooltip: !0,
            animate: l
        }) : null;
        let u = null === (t = (0, s.getHangStatusDetails)(o)) || void 0 === t ? void 0 : t.icon;
        return null != u ? (0, i.jsx)("img", {
            src: u,
            alt: "",
            className: null != n ? n : void 0
        }) : null
    }
}