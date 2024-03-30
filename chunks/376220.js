function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("590611"),
        i = n("663882"),
        a = n("281767");
    t.default = function(e) {
        var t, n = e.className,
            u = e.hangStatusActivity,
            s = e.animate;
        if ((null == u ? void 0 : u.state) === a.HangStatusTypes.CUSTOM) return null != u.emoji ? r.createElement(o.ActivityEmoji, {
            emoji: u.emoji,
            className: n,
            hideTooltip: !0,
            animate: void 0 === s || s
        }) : null;
        var l = null === (t = (0, i.getHangStatusDetails)(u)) || void 0 === t ? void 0 : t.icon;
        return null != l ? r.createElement("img", {
            src: l,
            alt: "",
            className: null != n ? n : void 0
        }) : null
    }
}