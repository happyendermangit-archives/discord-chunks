function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("685516"),
        i = n("285363"),
        a = n("175922"),
        o = n("406434"),
        s = n("6138"),
        u = n("740078"),
        c = n("882159"),
        l = n("544338"),
        d = n("581206");

    function f(e, t) {
        void 0 === t && (t = {});
        var n = t,
            f = n.placement,
            p = void 0 === f ? e.placement : f,
            h = n.strategy,
            m = void 0 === h ? e.strategy : h,
            g = n.boundary,
            _ = void 0 === g ? u.clippingParents : g,
            b = n.rootBoundary,
            v = void 0 === b ? u.viewport : b,
            y = n.elementContext,
            E = void 0 === y ? u.popper : y,
            S = n.altBoundary,
            x = n.padding,
            w = void 0 === x ? 0 : x,
            T = (0, l.default)("number" != typeof w ? w : (0, d.default)(w, u.basePlacements)),
            C = E === u.popper ? u.reference : u.popper,
            D = e.rects.popper,
            O = e.elements[void 0 !== S && S ? C : E],
            M = (0, r.default)((0, c.isElement)(O) ? O : O.contextElement || (0, i.default)(e.elements.popper), _, v, m),
            A = (0, a.default)(e.elements.reference),
            k = (0, o.default)({
                reference: A,
                element: D,
                strategy: "absolute",
                placement: p
            }),
            R = (0, s.default)(Object.assign({}, D, k)),
            N = E === u.popper ? R : A,
            I = {
                top: M.top - N.top + T.top,
                bottom: N.bottom - M.bottom + T.bottom,
                left: M.left - N.left + T.left,
                right: N.right - M.right + T.right
            },
            L = e.modifiersData.offset;
        if (E === u.popper && L) {
            var P = L[p];
            Object.keys(I).forEach(function(e) {
                var t = [(0, u.right), (0, u.bottom)].indexOf(e) >= 0 ? 1 : -1,
                    n = [(0, u.top), (0, u.bottom)].indexOf(e) >= 0 ? "y" : "x";
                I[e] += P[n] * t
            })
        }
        return I
    }
}