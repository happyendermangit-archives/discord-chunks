function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("740078"),
        i = n("126387"),
        a = n("205208"),
        o = n("792278"),
        s = n("464826"),
        u = n("493623"),
        c = n("343713"),
        l = n("510104"),
        d = n("632471"),
        f = n("607033"),
        p = n("894417");
    t.default = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                h = e.name,
                m = n.mainAxis,
                g = n.altAxis,
                _ = n.boundary,
                b = n.rootBoundary,
                v = n.altBoundary,
                y = n.padding,
                E = n.tether,
                S = void 0 === E || E,
                x = n.tetherOffset,
                w = void 0 === x ? 0 : x,
                T = (0, l.default)(t, {
                    boundary: _,
                    rootBoundary: b,
                    padding: y,
                    altBoundary: v
                }),
                C = (0, i.default)(t.placement),
                D = (0, d.default)(t.placement),
                O = !D,
                M = (0, a.default)(C),
                A = (0, o.default)(M),
                k = t.modifiersData.popperOffsets,
                R = t.rects.reference,
                N = t.rects.popper,
                I = "function" == typeof w ? w(Object.assign({}, t.rects, {
                    placement: t.placement
                })) : w,
                L = "number" == typeof I ? {
                    mainAxis: I,
                    altAxis: I
                } : Object.assign({
                    mainAxis: 0,
                    altAxis: 0
                }, I),
                P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                F = {
                    x: 0,
                    y: 0
                };
            if (k) {
                if (void 0 === m || m) {
                    var B, U = "y" === M ? r.top : r.left,
                        Y = "y" === M ? r.bottom : r.right,
                        j = "y" === M ? "height" : "width",
                        z = k[M],
                        H = z + T[U],
                        G = z - T[Y],
                        V = S ? -N[j] / 2 : 0,
                        $ = D === r.start ? R[j] : N[j],
                        W = D === r.start ? -N[j] : -R[j],
                        K = t.elements.arrow,
                        q = S && K ? (0, u.default)(K) : {
                            width: 0,
                            height: 0
                        },
                        Q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : (0, f.default)(),
                        Z = Q[U],
                        X = Q[Y],
                        J = (0, s.within)(0, R[j], q[j]),
                        ee = O ? R[j] / 2 - V - J - Z - L.mainAxis : $ - J - Z - L.mainAxis,
                        et = O ? -R[j] / 2 + V + J + X + L.mainAxis : W + J + X + L.mainAxis,
                        en = t.elements.arrow && (0, c.default)(t.elements.arrow),
                        er = en ? "y" === M ? en.clientTop || 0 : en.clientLeft || 0 : 0,
                        ei = null != (B = null == P ? void 0 : P[M]) ? B : 0,
                        ea = (0, s.within)(S ? (0, p.min)(H, z + ee - ei - er) : H, z, S ? (0, p.max)(G, z + et - ei) : G);
                    k[M] = ea, F[M] = ea - z
                }
                if (void 0 !== g && g) {
                    var eo, es = "x" === M ? r.top : r.left,
                        eu = "x" === M ? r.bottom : r.right,
                        ec = k[A],
                        el = "y" === A ? "height" : "width",
                        ed = ec + T[es],
                        ef = ec - T[eu],
                        ep = -1 !== [(0, r.top), (0, r.left)].indexOf(C),
                        eh = null != (eo = null == P ? void 0 : P[A]) ? eo : 0,
                        em = ep ? ed : ec - R[el] - N[el] - eh + L.altAxis,
                        eg = ep ? ec + R[el] + N[el] - eh - L.altAxis : ef,
                        e_ = S && ep ? (0, s.withinMaxClamp)(em, ec, eg) : (0, s.within)(S ? em : ed, ec, S ? eg : ef);
                    k[A] = e_, F[A] = e_ - ec
                }
                t.modifiersData[h] = F
            }
        },
        requiresIfExists: ["offset"]
    }
}