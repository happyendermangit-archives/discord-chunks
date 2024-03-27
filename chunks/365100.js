function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("49691"),
        i = n("285363"),
        a = n("977489"),
        o = n("436857");

    function s(e, t) {
        var n = (0, r.default)(e),
            s = (0, i.default)(e),
            u = n.visualViewport,
            c = s.clientWidth,
            l = s.clientHeight,
            d = 0,
            f = 0;
        if (u) {
            c = u.width, l = u.height;
            var p = (0, o.default)();
            (p || !p && "fixed" === t) && (d = u.offsetLeft, f = u.offsetTop)
        }
        return {
            width: c,
            height: l,
            x: d + (0, a.default)(e),
            y: f
        }
    }
}