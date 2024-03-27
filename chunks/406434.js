function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("126387"),
        i = n("632471"),
        a = n("205208"),
        o = n("740078");

    function s(e) {
        var t, n = e.reference,
            s = e.element,
            u = e.placement,
            c = u ? (0, r.default)(u) : null,
            l = u ? (0, i.default)(u) : null,
            d = n.x + n.width / 2 - s.width / 2,
            f = n.y + n.height / 2 - s.height / 2;
        switch (c) {
            case o.top:
                t = {
                    x: d,
                    y: n.y - s.height
                };
                break;
            case o.bottom:
                t = {
                    x: d,
                    y: n.y + n.height
                };
                break;
            case o.right:
                t = {
                    x: n.x + n.width,
                    y: f
                };
                break;
            case o.left:
                t = {
                    x: n.x - s.width,
                    y: f
                };
                break;
            default:
                t = {
                    x: n.x,
                    y: n.y
                }
        }
        var p = c ? (0, a.default)(c) : null;
        if (null != p) {
            var h = "y" === p ? "height" : "width";
            switch (l) {
                case o.start:
                    t[p] = t[p] - (n[h] / 2 - s[h] / 2);
                    break;
                case o.end:
                    t[p] = t[p] + (n[h] / 2 - s[h] / 2)
            }
        }
        return t
    }
}