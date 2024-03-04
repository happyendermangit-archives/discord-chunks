function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("697309"),
        a = n("195548"),
        o = n("774728"),
        i = n("632840"),
        s = n("903751"),
        u = n("31644"),
        l = n("986257"),
        c = n("214725"),
        d = n("794230"),
        f = n("576955"),
        p = n("757367"),
        m = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    n = e.options,
                    m = e.name,
                    h = n.mainAxis,
                    y = n.altAxis,
                    _ = n.boundary,
                    g = n.rootBoundary,
                    v = n.altBoundary,
                    b = n.padding,
                    M = n.tether,
                    w = void 0 === M || M,
                    k = n.tetherOffset,
                    L = void 0 === k ? 0 : k,
                    D = (0, c.default)(t, {
                        boundary: _,
                        rootBoundary: g,
                        padding: b,
                        altBoundary: v
                    }),
                    T = (0, a.default)(t.placement),
                    S = (0, d.default)(t.placement),
                    Y = !S,
                    O = (0, o.default)(T),
                    x = (0, i.default)(O),
                    E = t.modifiersData.popperOffsets,
                    P = t.rects.reference,
                    j = t.rects.popper,
                    C = "function" == typeof L ? L(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : L,
                    H = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C),
                    F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                    A = {
                        x: 0,
                        y: 0
                    };
                if (E) {
                    if (void 0 === h || h) {
                        var I, N = "y" === O ? r.top : r.left,
                            R = "y" === O ? r.bottom : r.right,
                            z = "y" === O ? "height" : "width",
                            W = E[O],
                            B = W + D[N],
                            U = W - D[R],
                            K = w ? -j[z] / 2 : 0,
                            V = S === r.start ? P[z] : j[z],
                            J = S === r.start ? -j[z] : -P[z],
                            q = t.elements.arrow,
                            G = w && q ? (0, u.default)(q) : {
                                width: 0,
                                height: 0
                            },
                            $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.default)(),
                            Q = $[N],
                            X = $[R],
                            Z = (0, s.within)(0, P[z], G[z]),
                            ee = Y ? P[z] / 2 - K - Z - Q - H.mainAxis : V - Z - Q - H.mainAxis,
                            et = Y ? -P[z] / 2 + K + Z + X + H.mainAxis : J + Z + X + H.mainAxis,
                            en = t.elements.arrow && (0, l.default)(t.elements.arrow),
                            er = en ? "y" === O ? en.clientTop || 0 : en.clientLeft || 0 : 0,
                            ea = null != (I = null == F ? void 0 : F[O]) ? I : 0,
                            eo = (0, s.within)(w ? (0, p.min)(B, W + ee - ea - er) : B, W, w ? (0, p.max)(U, W + et - ea) : U);
                        E[O] = eo, A[O] = eo - W
                    }
                    if (void 0 !== y && y) {
                        var ei, es = "x" === O ? r.top : r.left,
                            eu = "x" === O ? r.bottom : r.right,
                            el = E[x],
                            ec = "y" === x ? "height" : "width",
                            ed = el + D[es],
                            ef = el - D[eu],
                            ep = -1 !== [(0, r.top), (0, r.left)].indexOf(T),
                            em = null != (ei = null == F ? void 0 : F[x]) ? ei : 0,
                            eh = ep ? ed : el - P[ec] - j[ec] - em + H.altAxis,
                            ey = ep ? el + P[ec] + j[ec] - em - H.altAxis : ef,
                            e_ = w && ep ? (0, s.withinMaxClamp)(eh, el, ey) : (0, s.within)(w ? eh : ed, el, w ? ey : ef);
                        E[x] = e_, A[x] = e_ - el
                    }
                    t.modifiersData[m] = A
                }
            },
            requiresIfExists: ["offset"]
        }
}