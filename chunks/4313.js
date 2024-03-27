function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("175922"),
        i = n("759202"),
        a = n("316138"),
        o = n("882159"),
        s = n("977489"),
        u = n("285363"),
        c = n("538018"),
        l = n("894417");

    function d(e, t, n) {
        void 0 === n && (n = !1);
        var d, f, p, h, m = (0, o.isHTMLElement)(t);
        var g = (0, o.isHTMLElement)(t) && (f = (d = t).getBoundingClientRect(), p = (0, l.round)(f.width) / d.offsetWidth || 1, h = (0, l.round)(f.height) / d.offsetHeight || 1, 1 !== p || 1 !== h),
            _ = (0, u.default)(t),
            b = (0, r.default)(e, g, n),
            v = {
                scrollLeft: 0,
                scrollTop: 0
            },
            y = {
                x: 0,
                y: 0
            };
        return (m || !m && !n) && (("body" !== (0, a.default)(t) || (0, c.default)(_)) && (v = (0, i.default)(t)), (0, o.isHTMLElement)(t) ? (y = (0, r.default)(t, !0), y.x += t.clientLeft, y.y += t.clientTop) : _ && (y.x = (0, s.default)(_))), {
            x: b.left + v.scrollLeft - y.x,
            y: b.top + v.scrollTop - y.y,
            width: b.width,
            height: b.height
        }
    }
}