function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("126387"),
        i = n("493623"),
        a = n("67966"),
        o = n("343713"),
        s = n("205208"),
        u = n("464826"),
        c = n("544338"),
        l = n("581206"),
        d = n("740078");
    t.default = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, n = e.state,
                a = e.name,
                f = e.options,
                p = n.elements.arrow,
                h = n.modifiersData.popperOffsets,
                m = (0, r.default)(n.placement),
                g = (0, s.default)(m),
                _ = [(0, d.left), (0, d.right)].indexOf(m) >= 0 ? "height" : "width";
            if (p && h) {
                var b, v, y = (b = f.padding, v = n, b = "function" == typeof b ? b(Object.assign({}, v.rects, {
                        placement: v.placement
                    })) : b, (0, c.default)("number" != typeof b ? b : (0, l.default)(b, d.basePlacements))),
                    E = (0, i.default)(p),
                    S = "y" === g ? d.top : d.left,
                    x = "y" === g ? d.bottom : d.right,
                    w = n.rects.reference[_] + n.rects.reference[g] - h[g] - n.rects.popper[_],
                    T = h[g] - n.rects.reference[g],
                    C = (0, o.default)(p),
                    D = C ? "y" === g ? C.clientHeight || 0 : C.clientWidth || 0 : 0,
                    O = y[S],
                    M = D - E[_] - y[x],
                    A = D / 2 - E[_] / 2 + (w / 2 - T / 2),
                    k = (0, u.within)(O, A, M);
                n.modifiersData[a] = ((t = {})[g] = k, t.centerOffset = k - A, t)
            }
        },
        effect: function(e) {
            var t = e.state,
                n = e.options.element,
                r = void 0 === n ? "[data-popper-arrow]" : n;
            if (null != r && ("string" != typeof r || !!(r = t.elements.popper.querySelector(r))))(0, a.default)(t.elements.popper, r) && (t.elements.arrow = r)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    }
}