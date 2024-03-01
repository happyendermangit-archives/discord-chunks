function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        calculateBoxSize: function() {
            return g
        },
        calculateBoxSizes: function() {
            return D
        }
    }), r("222007");
    var n = r("252089"),
        i = r("235583"),
        o = r("358806"),
        a = r("467980"),
        u = r("26098"),
        s = r("344502"),
        l = new WeakMap,
        c = /auto|scroll/,
        d = /^tb|vertical/,
        f = /msie|trident/i.test(s.global.navigator && s.global.navigator.userAgent),
        h = function(e) {
            return parseFloat(e || "0")
        },
        p = function(e, t, r) {
            return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), new i.ResizeObserverSize((r ? t : e) || 0, (r ? e : t) || 0)
        },
        v = (0, u.freeze)({
            devicePixelContentBoxSize: p(),
            borderBoxSize: p(),
            contentBoxSize: p(),
            contentRect: new o.DOMRectReadOnly(0, 0, 0, 0)
        }),
        D = function(e, t) {
            if (void 0 === t && (t = !1), l.has(e) && !t) return l.get(e);
            if ((0, a.isHidden)(e)) return l.set(e, v), v;
            var r = getComputedStyle(e),
                n = (0, a.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
                i = !f && "border-box" === r.boxSizing,
                s = d.test(r.writingMode || ""),
                D = !n && c.test(r.overflowY || ""),
                g = !n && c.test(r.overflowX || ""),
                C = n ? 0 : h(r.paddingTop),
                m = n ? 0 : h(r.paddingRight),
                y = n ? 0 : h(r.paddingBottom),
                E = n ? 0 : h(r.paddingLeft),
                B = n ? 0 : h(r.borderTopWidth),
                b = n ? 0 : h(r.borderRightWidth),
                A = n ? 0 : h(r.borderBottomWidth),
                w = n ? 0 : h(r.borderLeftWidth),
                F = E + m,
                _ = C + y,
                O = w + b,
                x = B + A,
                k = g ? e.offsetHeight - x - e.clientHeight : 0,
                P = D ? e.offsetWidth - O - e.clientWidth : 0,
                S = n ? n.width : h(r.width) - (i ? F + O : 0) - P,
                T = n ? n.height : h(r.height) - (i ? _ + x : 0) - k,
                j = S + F + P + O,
                M = T + _ + k + x,
                R = (0, u.freeze)({
                    devicePixelContentBoxSize: p(Math.round(S * devicePixelRatio), Math.round(T * devicePixelRatio), s),
                    borderBoxSize: p(j, M, s),
                    contentBoxSize: p(S, T, s),
                    contentRect: new o.DOMRectReadOnly(E, C, S, T)
                });
            return l.set(e, R), R
        },
        g = function(e, t, r) {
            var i = D(e, r),
                o = i.borderBoxSize,
                a = i.contentBoxSize,
                u = i.devicePixelContentBoxSize;
            switch (t) {
                case n.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                    return u;
                case n.ResizeObserverBoxOptions.BORDER_BOX:
                    return o;
                default:
                    return a
            }
        }
}