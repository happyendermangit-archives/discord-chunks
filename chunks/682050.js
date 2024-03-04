function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getNodeClientOffset: function() {
            return o
        },
        getEventClientOffset: function() {
            return s
        },
        getDragPreviewOffset: function() {
            return a
        }
    });
    var r = n("219999"),
        i = n("908834");

    function o(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
            r = n.top;
        return {
            x: n.left,
            y: r
        }
    }

    function s(e) {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }

    function a(e, t, n, s, a) {
        var c, u, d, l, f, p, h, v, g, b = "IMG" === (c = t).nodeName && ((0, r.isFirefox)() || !(null !== (u = document.documentElement) && void 0 !== u && u.contains(c))),
            m = o(b ? e : t),
            y = {
                x: n.x - m.x,
                y: n.y - m.y
            },
            x = e.offsetWidth,
            w = e.offsetHeight,
            S = s.anchorX,
            k = s.anchorY;
        var E = (d = b, l = t, f = x, p = w, h = d ? l.width : f, v = d ? l.height : p, (0, r.isSafari)() && d && (v /= window.devicePixelRatio, h /= window.devicePixelRatio), {
                dragPreviewWidth: h,
                dragPreviewHeight: v
            }),
            _ = E.dragPreviewWidth,
            M = E.dragPreviewHeight,
            D = a.offsetX,
            C = a.offsetY;
        return {
            x: 0 === D || D ? D : new i.MonotonicInterpolant([0, .5, 1], [y.x, y.x / x * _, y.x + _ - x]).interpolate(S),
            y: 0 === C || C ? C : (g = new i.MonotonicInterpolant([0, .5, 1], [y.y, y.y / w * M, y.y + M - w]).interpolate(k), (0, r.isSafari)() && b && (g += (window.devicePixelRatio - 1) * M), g)
        }
    }
}