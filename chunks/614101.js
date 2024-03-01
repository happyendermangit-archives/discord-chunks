function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("320959"),
        a = n("837052"),
        o = n("209026"),
        i = n("383143");

    function s(e, t) {
        var n = (0, r.default)(e),
            s = (0, a.default)(e),
            u = n.visualViewport,
            l = s.clientWidth,
            c = s.clientHeight,
            d = 0,
            f = 0;
        if (u) {
            l = u.width, c = u.height;
            var p = (0, i.default)();
            (p || !p && "fixed" === t) && (d = u.offsetLeft, f = u.offsetTop)
        }
        return {
            width: l,
            height: c,
            x: d + (0, o.default)(e),
            y: f
        }
    }
}