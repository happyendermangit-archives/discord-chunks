function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDragPreviewOffset: function() {
            return s
        },
        getEventClientOffset: function() {
            return o
        },
        getNodeClientOffset: function() {
            return a
        }
    });
    var r = n("868635"),
        i = n("816383");

    function a(e) {
        var t = 1 === e.nodeType ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
            r = n.top;
        return {
            x: n.left,
            y: r
        }
    }

    function o(e) {
        return {
            x: e.clientX,
            y: e.clientY
        }
    }

    function s(e, t, n, o, s) {
        var u, c, l, d, f, p, h, m, g, _ = "IMG" === (u = t).nodeName && ((0, r.isFirefox)() || !(null !== (c = document.documentElement) && void 0 !== c && c.contains(u))),
            b = a(_ ? e : t),
            v = {
                x: n.x - b.x,
                y: n.y - b.y
            },
            y = e.offsetWidth,
            E = e.offsetHeight,
            S = o.anchorX,
            x = o.anchorY;
        var w = (l = _, d = t, f = y, p = E, h = l ? d.width : f, m = l ? d.height : p, (0, r.isSafari)() && l && (m /= window.devicePixelRatio, h /= window.devicePixelRatio), {
                dragPreviewWidth: h,
                dragPreviewHeight: m
            }),
            T = w.dragPreviewWidth,
            C = w.dragPreviewHeight,
            D = s.offsetX,
            O = s.offsetY;
        return {
            x: 0 === D || D ? D : new i.MonotonicInterpolant([0, .5, 1], [v.x, v.x / y * T, v.x + T - y]).interpolate(S),
            y: 0 === O || O ? O : (g = new i.MonotonicInterpolant([0, .5, 1], [v.y, v.y / E * C, v.y + C - E]).interpolate(x), (0, r.isSafari)() && _ && (g += (window.devicePixelRatio - 1) * C), g)
        }
    }
}