function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("808653"), n("222007"), n("424973");
    var r = n("299192"),
        a = n("195548"),
        o = n("521289"),
        i = n("214725"),
        s = n("328679"),
        u = n("697309"),
        l = n("794230"),
        c = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    c = e.name;
                if (!t.modifiersData[c]._skip) {
                    for (var d = n.mainAxis, f = void 0 === d || d, p = n.altAxis, h = void 0 === p || p, m = n.fallbackPlacements, y = n.padding, _ = n.boundary, g = n.rootBoundary, v = n.altBoundary, b = n.flipVariations, M = void 0 === b || b, w = n.allowedAutoPlacements, k = t.options.placement, L = (0, a.default)(k) === k, D = m || (L || !M ? [(0, r.default)(k)] : function(e) {
                            if ((0, a.default)(e) === u.auto) return [];
                            var t = (0, r.default)(e);
                            return [(0, o.default)(e), t, (0, o.default)(t)]
                        }(k)), T = [k].concat(D).reduce(function(e, n) {
                            return e.concat((0, a.default)(n) === u.auto ? (0, s.default)(t, {
                                placement: n,
                                boundary: _,
                                rootBoundary: g,
                                padding: y,
                                flipVariations: M,
                                allowedAutoPlacements: w
                            }) : n)
                        }, []), S = t.rects.reference, Y = t.rects.popper, x = new Map, O = !0, E = T[0], P = 0; P < T.length; P++) {
                        var j = T[P],
                            C = (0, a.default)(j),
                            H = (0, l.default)(j) === u.start,
                            F = [(0, u.top), (0, u.bottom)].indexOf(C) >= 0,
                            A = F ? "width" : "height",
                            I = (0, i.default)(t, {
                                placement: j,
                                boundary: _,
                                rootBoundary: g,
                                altBoundary: v,
                                padding: y
                            }),
                            N = F ? H ? u.right : u.left : H ? u.bottom : u.top;
                        S[A] > Y[A] && (N = (0, r.default)(N));
                        var R = (0, r.default)(N),
                            z = [];
                        if (f && z.push(I[C] <= 0), h && z.push(I[N] <= 0, I[R] <= 0), z.every(function(e) {
                                return e
                            })) {
                            E = j, O = !1;
                            break
                        }
                        x.set(j, z)
                    }
                    if (O) {
                        for (var W = M ? 3 : 1, B = function(e) {
                                var t = T.find(function(t) {
                                    var n = x.get(t);
                                    if (n) return n.slice(0, e).every(function(e) {
                                        return e
                                    })
                                });
                                if (t) return E = t, "break"
                            }, U = W; U > 0 && "break" !== B(U); U--);
                    }
                    t.placement !== E && (t.modifiersData[c]._skip = !0, t.placement = E, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        }
}