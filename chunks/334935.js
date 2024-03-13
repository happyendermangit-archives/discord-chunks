function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        calculateBoxSize: function() {
            return C
        },
        calculateBoxSizes: function() {
            return p
        }
    }), r("222007");
    var n = r("252089"),
        u = r("235583"),
        a = r("358806"),
        o = r("467980"),
        i = r("26098"),
        s = r("344502"),
        l = new WeakMap,
        c = /auto|scroll/,
        f = /^tb|vertical/,
        d = /msie|trident/i.test(s.global.navigator && s.global.navigator.userAgent),
        D = function(e) {
            return parseFloat(e || "0")
        },
        h = function(e, t, r) {
            return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), new u.ResizeObserverSize((r ? t : e) || 0, (r ? e : t) || 0)
        },
        v = (0, i.freeze)({
            devicePixelContentBoxSize: h(),
            borderBoxSize: h(),
            contentBoxSize: h(),
            contentRect: new a.DOMRectReadOnly(0, 0, 0, 0)
        }),
        p = function(e, t) {
            if (void 0 === t && (t = !1), l.has(e) && !t) return l.get(e);
            if ((0, o.isHidden)(e)) return l.set(e, v), v;
            var r = getComputedStyle(e),
                n = (0, o.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
                u = !d && "border-box" === r.boxSizing,
                s = f.test(r.writingMode || ""),
                p = !n && c.test(r.overflowY || ""),
                C = !n && c.test(r.overflowX || ""),
                g = n ? 0 : D(r.paddingTop),
                B = n ? 0 : D(r.paddingRight),
                E = n ? 0 : D(r.paddingBottom),
                m = n ? 0 : D(r.paddingLeft),
                A = n ? 0 : D(r.borderTopWidth),
                F = n ? 0 : D(r.borderRightWidth),
                b = n ? 0 : D(r.borderBottomWidth),
                y = n ? 0 : D(r.borderLeftWidth),
                w = m + B,
                O = g + E,
                x = y + F,
                k = A + b,
                P = C ? e.offsetHeight - k - e.clientHeight : 0,
                j = p ? e.offsetWidth - x - e.clientWidth : 0,
                S = n ? n.width : D(r.width) - (u ? w + x : 0) - j,
                R = n ? n.height : D(r.height) - (u ? O + k : 0) - P,
                T = S + w + j + x,
                M = R + O + P + k,
                N = (0, i.freeze)({
                    devicePixelContentBoxSize: h(Math.round(S * devicePixelRatio), Math.round(R * devicePixelRatio), s),
                    borderBoxSize: h(T, M, s),
                    contentBoxSize: h(S, R, s),
                    contentRect: new a.DOMRectReadOnly(m, g, S, R)
                });
            return l.set(e, N), N
        },
        C = function(e, t, r) {
            var u = p(e, r),
                a = u.borderBoxSize,
                o = u.contentBoxSize,
                i = u.devicePixelContentBoxSize;
            switch (t) {
                case n.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                    return i;
                case n.ResizeObserverBoxOptions.BORDER_BOX:
                    return a;
                default:
                    return o
            }
        }
}