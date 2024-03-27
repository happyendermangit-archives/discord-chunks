function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("244287"),
        i = n("126387"),
        a = n("885952"),
        o = n("510104"),
        s = n("891734"),
        u = n("740078"),
        c = n("632471");
    t.default = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                l = e.name;
            if (!t.modifiersData[l]._skip) {
                for (var d = n.mainAxis, f = void 0 === d || d, p = n.altAxis, h = void 0 === p || p, m = n.fallbackPlacements, g = n.padding, _ = n.boundary, b = n.rootBoundary, v = n.altBoundary, y = n.flipVariations, E = void 0 === y || y, S = n.allowedAutoPlacements, x = t.options.placement, w = (0, i.default)(x) === x, T = m || (w || !E ? [(0, r.default)(x)] : function(e) {
                        if ((0, i.default)(e) === u.auto) return [];
                        var t = (0, r.default)(e);
                        return [(0, a.default)(e), t, (0, a.default)(t)]
                    }(x)), C = [x].concat(T).reduce(function(e, n) {
                        return e.concat((0, i.default)(n) === u.auto ? (0, s.default)(t, {
                            placement: n,
                            boundary: _,
                            rootBoundary: b,
                            padding: g,
                            flipVariations: E,
                            allowedAutoPlacements: S
                        }) : n)
                    }, []), D = t.rects.reference, O = t.rects.popper, M = new Map, A = !0, k = C[0], R = 0; R < C.length; R++) {
                    var N = C[R],
                        I = (0, i.default)(N),
                        L = (0, c.default)(N) === u.start,
                        P = [(0, u.top), (0, u.bottom)].indexOf(I) >= 0,
                        F = P ? "width" : "height",
                        B = (0, o.default)(t, {
                            placement: N,
                            boundary: _,
                            rootBoundary: b,
                            altBoundary: v,
                            padding: g
                        }),
                        U = P ? L ? u.right : u.left : L ? u.bottom : u.top;
                    D[F] > O[F] && (U = (0, r.default)(U));
                    var Y = (0, r.default)(U),
                        j = [];
                    if (f && j.push(B[I] <= 0), h && j.push(B[U] <= 0, B[Y] <= 0), j.every(function(e) {
                            return e
                        })) {
                        k = N, A = !1;
                        break
                    }
                    M.set(N, j)
                }
                if (A) {
                    for (var z = E ? 3 : 1, H = function(e) {
                            var t = C.find(function(t) {
                                var n = M.get(t);
                                if (n) return n.slice(0, e).every(function(e) {
                                    return e
                                })
                            });
                            if (t) return k = t, "break"
                        }, G = z; G > 0 && "break" !== H(G); G--);
                }
                t.placement !== k && (t.modifiersData[l]._skip = !0, t.placement = k, t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    }
}