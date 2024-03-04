function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateBoxSize: function() {
            return h
        },
        calculateBoxSizes: function() {
            return m
        }
    }), n("222007");
    var r = n("209488"),
        a = n("839347"),
        o = n("925691"),
        i = n("355070"),
        s = new WeakMap,
        u = /auto|scroll/,
        l = /^tb|vertical/,
        c = /msie|trident/i.test(i.global.navigator && i.global.navigator.userAgent),
        d = function(e) {
            return parseFloat(e || "0")
        },
        f = function(e, t, n) {
            return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), Object.freeze({
                inlineSize: (n ? t : e) || 0,
                blockSize: (n ? e : t) || 0
            })
        },
        p = Object.freeze({
            devicePixelContentBoxSize: f(),
            borderBoxSize: f(),
            contentBoxSize: f(),
            contentRect: new a.DOMRectReadOnly(0, 0, 0, 0)
        }),
        m = function(e, t) {
            if (void 0 === t && (t = !1), s.has(e) && !t) return s.get(e);
            if ((0, o.isHidden)(e)) return s.set(e, p), p;
            var n = getComputedStyle(e),
                r = (0, o.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
                i = !c && "border-box" === n.boxSizing,
                m = l.test(n.writingMode || ""),
                h = !r && u.test(n.overflowY || ""),
                y = !r && u.test(n.overflowX || ""),
                _ = r ? 0 : d(n.paddingTop),
                g = r ? 0 : d(n.paddingRight),
                v = r ? 0 : d(n.paddingBottom),
                b = r ? 0 : d(n.paddingLeft),
                M = r ? 0 : d(n.borderTopWidth),
                w = r ? 0 : d(n.borderRightWidth),
                k = r ? 0 : d(n.borderBottomWidth),
                L = r ? 0 : d(n.borderLeftWidth),
                D = b + g,
                T = _ + v,
                S = L + w,
                Y = M + k,
                O = y ? e.offsetHeight - Y - e.clientHeight : 0,
                x = h ? e.offsetWidth - S - e.clientWidth : 0,
                E = r ? r.width : d(n.width) - (i ? D + S : 0) - x,
                P = r ? r.height : d(n.height) - (i ? T + Y : 0) - O,
                j = E + D + x + S,
                C = P + T + O + Y,
                H = Object.freeze({
                    devicePixelContentBoxSize: f(Math.round(E * devicePixelRatio), Math.round(P * devicePixelRatio), m),
                    borderBoxSize: f(j, C, m),
                    contentBoxSize: f(E, P, m),
                    contentRect: new a.DOMRectReadOnly(b, _, E, P)
                });
            return s.set(e, H), H
        },
        h = function(e, t, n) {
            var a = m(e, n),
                o = a.borderBoxSize,
                i = a.contentBoxSize,
                s = a.devicePixelContentBoxSize;
            switch (t) {
                case r.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                    return s;
                case r.ResizeObserverBoxOptions.BORDER_BOX:
                    return o;
                default:
                    return i
            }
        }
}