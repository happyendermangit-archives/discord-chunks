function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("808653");
    var r = n("794230"),
        a = n("697309"),
        o = n("214725"),
        i = n("195548");

    function s(e, t) {
        void 0 === t && (t = {});
        var n = t,
            s = n.placement,
            u = n.boundary,
            l = n.rootBoundary,
            c = n.padding,
            d = n.flipVariations,
            f = n.allowedAutoPlacements,
            p = void 0 === f ? a.placements : f,
            h = (0, r.default)(s),
            m = h ? d ? a.variationPlacements : a.variationPlacements.filter(function(e) {
                return (0, r.default)(e) === h
            }) : a.basePlacements,
            y = m.filter(function(e) {
                return p.indexOf(e) >= 0
            });
        0 === y.length && (y = m);
        var _ = y.reduce(function(t, n) {
            return t[n] = (0, o.default)(e, {
                placement: n,
                boundary: u,
                rootBoundary: l,
                padding: c
            })[(0, i.default)(n)], t
        }, {});
        return Object.keys(_).sort(function(e, t) {
            return _[e] - _[t]
        })
    }
}