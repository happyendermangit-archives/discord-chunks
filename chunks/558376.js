function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("285363"),
        i = n("874900"),
        a = n("977489"),
        o = n("636226"),
        s = n("894417");

    function u(e) {
        var t, n = (0, r.default)(e),
            u = (0, o.default)(e),
            c = null == (t = e.ownerDocument) ? void 0 : t.body,
            l = (0, s.max)(n.scrollWidth, n.clientWidth, c ? c.scrollWidth : 0, c ? c.clientWidth : 0),
            d = (0, s.max)(n.scrollHeight, n.clientHeight, c ? c.scrollHeight : 0, c ? c.clientHeight : 0),
            f = -u.scrollLeft + (0, a.default)(e),
            p = -u.scrollTop;
        return "rtl" === (0, i.default)(c || n).direction && (f += (0, s.max)(n.clientWidth, c ? c.clientWidth : 0) - l), {
            width: l,
            height: d,
            x: f,
            y: p
        }
    }
}