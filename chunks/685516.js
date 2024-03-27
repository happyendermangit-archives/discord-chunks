function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    });
    var r = n("740078"),
        i = n("365100"),
        a = n("558376"),
        o = n("620720"),
        s = n("343713"),
        u = n("285363"),
        c = n("874900"),
        l = n("882159"),
        d = n("175922"),
        f = n("660027"),
        p = n("67966"),
        h = n("316138"),
        m = n("6138"),
        g = n("894417");

    function _(e, t, n) {
        var o, s, c;
        return t === r.viewport ? (0, m.default)((0, i.default)(e, n)) : (0, l.isElement)(t) ? (o = t, s = n, (c = (0, d.default)(o, !1, "fixed" === s)).top = c.top + o.clientTop, c.left = c.left + o.clientLeft, c.bottom = c.top + o.clientHeight, c.right = c.left + o.clientWidth, c.width = o.clientWidth, c.height = o.clientHeight, c.x = c.left, c.y = c.top, c) : (0, m.default)((0, a.default)((0, u.default)(e)))
    }

    function b(e, t, n, r) {
        var i, a, u, d = [].concat("clippingParents" === t ? (i = e, a = (0, o.default)((0, f.default)(i)), u = ["absolute", "fixed"].indexOf((0, c.default)(i).position) >= 0 && (0, l.isHTMLElement)(i) ? (0, s.default)(i) : i, (0, l.isElement)(u) ? a.filter(function(e) {
                return (0, l.isElement)(e) && (0, p.default)(e, u) && "body" !== (0, h.default)(e)
            }) : []) : [].concat(t), [n]),
            m = d[0],
            b = d.reduce(function(t, n) {
                var i = _(e, n, r);
                return t.top = (0, g.max)(i.top, t.top), t.right = (0, g.min)(i.right, t.right), t.bottom = (0, g.min)(i.bottom, t.bottom), t.left = (0, g.max)(i.left, t.left), t
            }, _(e, m, r));
        return b.width = b.right - b.left, b.height = b.bottom - b.top, b.x = b.left, b.y = b.top, b
    }
}