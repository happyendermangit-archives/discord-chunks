function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("126387"),
        i = n("740078");
    t.default = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function(e) {
            var t = e.state,
                n = e.options,
                a = e.name,
                o = n.offset,
                s = void 0 === o ? [0, 0] : o,
                u = i.placements.reduce(function(e, n) {
                    var a, o, u, c, l, d, f, p;
                    return e[n] = (a = n, o = t.rects, u = s, c = (0, r.default)(a), l = [(0, i.left), (0, i.top)].indexOf(c) >= 0 ? -1 : 1, f = (d = "function" == typeof u ? u(Object.assign({}, o, {
                        placement: a
                    })) : u)[0], p = d[1], f = f || 0, p = (p || 0) * l, [(0, i.left), (0, i.right)].indexOf(c) >= 0 ? {
                        x: p,
                        y: f
                    } : {
                        x: f,
                        y: p
                    }), e
                }, {}),
                c = u[t.placement],
                l = c.x,
                d = c.y;
            null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[a] = u
        }
    }
}