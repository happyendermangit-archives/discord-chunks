function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("451962"),
        u = n("20585");
    t.default = function(e) {
        var t = e.glowOpacity,
            n = e.className;
        return r.createElement("div", {
            className: i()(u.nitroTopDividerContainer, n)
        }, r.createElement("div", {
            className: u.nitroTopDividerUpper
        }), r.createElement("div", {
            style: {
                opacity: t
            },
            className: u.nitroTopDividerShadow
        }), r.createElement("div", {
            className: i()(u.nitroTopDividerLockContainer)
        }, r.createElement("div", {
            className: u.nitroTopDividerLockBorder
        }), r.createElement("div", {
            className: u.nitroTopDividerLockCircle
        }, r.createElement(a.default, {
            width: 16,
            height: 16,
            color: "white"
        })), r.createElement("div", {
            className: u.nitroTopDividerLockBorderReversed
        })), r.createElement("div", {
            className: u.nitroTopDividerLower
        }))
    }
}