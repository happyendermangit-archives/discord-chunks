function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("740078"),
        i = n("343713"),
        a = n("49691"),
        o = n("285363"),
        s = n("874900"),
        u = n("126387"),
        c = n("632471"),
        l = n("894417"),
        d = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

    function f(e) {
        var t, n, u, c, f, p, h, m = e.popper,
            g = e.popperRect,
            _ = e.placement,
            b = e.variation,
            v = e.offsets,
            y = e.position,
            E = e.gpuAcceleration,
            S = e.adaptive,
            x = e.roundOffsets,
            w = e.isFixed,
            T = v.x,
            C = void 0 === T ? 0 : T,
            D = v.y,
            O = void 0 === D ? 0 : D,
            M = "function" == typeof x ? x({
                x: C,
                y: O
            }) : {
                x: C,
                y: O
            };
        C = M.x, O = M.y;
        var A = v.hasOwnProperty("x"),
            k = v.hasOwnProperty("y"),
            R = r.left,
            N = r.top,
            I = window;
        if (S) {
            var L = (0, i.default)(m),
                P = "clientHeight",
                F = "clientWidth";
            L === (0, a.default)(m) && (L = (0, o.default)(m), "static" !== (0, s.default)(L).position && "absolute" === y && (P = "scrollHeight", F = "scrollWidth")), (_ === r.top || (_ === r.left || _ === r.right) && b === r.end) && (N = r.bottom, O -= (w && L === I && I.visualViewport ? I.visualViewport.height : L[P]) - g.height, O *= E ? 1 : -1), (_ === r.left || (_ === r.top || _ === r.bottom) && b === r.end) && (R = r.right, C -= (w && L === I && I.visualViewport ? I.visualViewport.width : L[F]) - g.width, C *= E ? 1 : -1)
        }
        var B = Object.assign({
            position: y
        }, S && d);
        var U = !0 === x ? (t = {
            x: C,
            y: O
        }, n = (0, a.default)(m), u = t.x, c = t.y, f = n.devicePixelRatio || 1, {
            x: (0, l.round)(u * f) / f || 0,
            y: (0, l.round)(c * f) / f || 0
        }) : {
            x: C,
            y: O
        };
        return (C = U.x, O = U.y, E) ? Object.assign({}, B, ((h = {})[N] = k ? "0" : "", h[R] = A ? "0" : "", h.transform = 1 >= (I.devicePixelRatio || 1) ? "translate(" + C + "px, " + O + "px)" : "translate3d(" + C + "px, " + O + "px, 0)", h)) : Object.assign({}, B, ((p = {})[N] = k ? O + "px" : "", p[R] = A ? C + "px" : "", p.transform = "", p))
    }
    t.default = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state,
                n = e.options,
                r = n.gpuAcceleration,
                i = n.adaptive,
                a = n.roundOffsets,
                o = void 0 === a || a,
                s = {
                    placement: (0, u.default)(t.placement),
                    variation: (0, c.default)(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: void 0 === r || r,
                    isFixed: "fixed" === t.options.strategy
                };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, f(Object.assign({}, s, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: void 0 === i || i,
                roundOffsets: o
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, f(Object.assign({}, s, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: o
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    }
}