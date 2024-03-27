function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("882159"),
        i = n("894417"),
        a = n("49691"),
        o = n("436857");

    function s(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var s = e.getBoundingClientRect(),
            u = 1,
            c = 1;
        t && (0, r.isHTMLElement)(e) && (u = e.offsetWidth > 0 && (0, i.round)(s.width) / e.offsetWidth || 1, c = e.offsetHeight > 0 && (0, i.round)(s.height) / e.offsetHeight || 1);
        var l = ((0, r.isElement)(e) ? (0, a.default)(e) : window).visualViewport,
            d = !(0, o.default)() && n,
            f = (s.left + (d && l ? l.offsetLeft : 0)) / u,
            p = (s.top + (d && l ? l.offsetTop : 0)) / c,
            h = s.width / u,
            m = s.height / c;
        return {
            width: h,
            height: m,
            top: p,
            right: f + h,
            bottom: p + m,
            left: f,
            x: f,
            y: p
        }
    }
}