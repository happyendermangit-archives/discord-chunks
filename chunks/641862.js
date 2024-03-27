function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateBoxSize: function() {
            return _
        },
        calculateBoxSizes: function() {
            return g
        }
    });
    var r = n("175730"),
        i = n("878369"),
        a = n("670732"),
        o = n("839826"),
        s = n("721056"),
        u = n("388388"),
        c = new WeakMap,
        l = /auto|scroll/,
        d = /^tb|vertical/,
        f = /msie|trident/i.test(u.global.navigator && u.global.navigator.userAgent),
        p = function(e) {
            return parseFloat(e || "0")
        },
        h = function(e, t, n) {
            return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), new i.ResizeObserverSize((n ? t : e) || 0, (n ? e : t) || 0)
        },
        m = (0, s.freeze)({
            devicePixelContentBoxSize: h(),
            borderBoxSize: h(),
            contentBoxSize: h(),
            contentRect: new a.DOMRectReadOnly(0, 0, 0, 0)
        }),
        g = function(e, t) {
            if (void 0 === t && (t = !1), c.has(e) && !t) return c.get(e);
            if ((0, o.isHidden)(e)) return c.set(e, m), m;
            var n = getComputedStyle(e),
                r = (0, o.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
                i = !f && "border-box" === n.boxSizing,
                u = d.test(n.writingMode || ""),
                g = !r && l.test(n.overflowY || ""),
                _ = !r && l.test(n.overflowX || ""),
                b = r ? 0 : p(n.paddingTop),
                v = r ? 0 : p(n.paddingRight),
                y = r ? 0 : p(n.paddingBottom),
                E = r ? 0 : p(n.paddingLeft),
                S = r ? 0 : p(n.borderTopWidth),
                x = r ? 0 : p(n.borderRightWidth),
                w = r ? 0 : p(n.borderBottomWidth),
                T = r ? 0 : p(n.borderLeftWidth),
                C = E + v,
                D = b + y,
                O = T + x,
                M = S + w,
                A = _ ? e.offsetHeight - M - e.clientHeight : 0,
                k = g ? e.offsetWidth - O - e.clientWidth : 0,
                R = r ? r.width : p(n.width) - (i ? C + O : 0) - k,
                N = r ? r.height : p(n.height) - (i ? D + M : 0) - A,
                I = R + C + k + O,
                L = N + D + A + M,
                P = (0, s.freeze)({
                    devicePixelContentBoxSize: h(Math.round(R * devicePixelRatio), Math.round(N * devicePixelRatio), u),
                    borderBoxSize: h(I, L, u),
                    contentBoxSize: h(R, N, u),
                    contentRect: new a.DOMRectReadOnly(E, b, R, N)
                });
            return c.set(e, P), P
        },
        _ = function(e, t, n) {
            var i = g(e, n),
                a = i.borderBoxSize,
                o = i.contentBoxSize,
                s = i.devicePixelContentBoxSize;
            switch (t) {
                case r.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                    return s;
                case r.ResizeObserverBoxOptions.BORDER_BOX:
                    return a;
                default:
                    return o
            }
        }
}