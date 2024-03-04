function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("949337"),
        a = n("837052"),
        o = n("130670"),
        i = n("794040"),
        s = n("483165"),
        u = n("697309"),
        l = n("753671"),
        c = n("796752"),
        d = n("192693");

    function f(e, t) {
        void 0 === t && (t = {});
        var n = t,
            f = n.placement,
            p = void 0 === f ? e.placement : f,
            m = n.strategy,
            h = void 0 === m ? e.strategy : m,
            y = n.boundary,
            _ = void 0 === y ? u.clippingParents : y,
            g = n.rootBoundary,
            v = void 0 === g ? u.viewport : g,
            b = n.elementContext,
            M = void 0 === b ? u.popper : b,
            w = n.altBoundary,
            k = n.padding,
            L = void 0 === k ? 0 : k,
            D = (0, c.default)("number" != typeof L ? L : (0, d.default)(L, u.basePlacements)),
            T = M === u.popper ? u.reference : u.popper,
            S = e.rects.popper,
            Y = e.elements[void 0 !== w && w ? T : M],
            O = (0, r.default)((0, l.isElement)(Y) ? Y : Y.contextElement || (0, a.default)(e.elements.popper), _, v, h),
            x = (0, o.default)(e.elements.reference),
            E = (0, i.default)({
                reference: x,
                element: S,
                strategy: "absolute",
                placement: p
            }),
            P = (0, s.default)(Object.assign({}, S, E)),
            j = M === u.popper ? P : x,
            C = {
                top: O.top - j.top + D.top,
                bottom: j.bottom - O.bottom + D.bottom,
                left: O.left - j.left + D.left,
                right: j.right - O.right + D.right
            },
            H = e.modifiersData.offset;
        if (M === u.popper && H) {
            var F = H[p];
            Object.keys(C).forEach(function(e) {
                var t = [(0, u.right), (0, u.bottom)].indexOf(e) >= 0 ? 1 : -1,
                    n = [(0, u.top), (0, u.bottom)].indexOf(e) >= 0 ? "y" : "x";
                C[e] += F[n] * t
            })
        }
        return C
    }
}