function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("753671"),
        a = n("757367"),
        o = n("320959"),
        i = n("383143");

    function s(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        var s = e.getBoundingClientRect(),
            u = 1,
            l = 1;
        t && (0, r.isHTMLElement)(e) && (u = e.offsetWidth > 0 && (0, a.round)(s.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && (0, a.round)(s.height) / e.offsetHeight || 1);
        var c = ((0, r.isElement)(e) ? (0, o.default)(e) : window).visualViewport,
            d = !(0, i.default)() && n,
            f = (s.left + (d && c ? c.offsetLeft : 0)) / u,
            p = (s.top + (d && c ? c.offsetTop : 0)) / l,
            m = s.width / u,
            h = s.height / l;
        return {
            width: m,
            height: h,
            top: p,
            right: f + m,
            bottom: p + h,
            left: f,
            x: f,
            y: p
        }
    }
}