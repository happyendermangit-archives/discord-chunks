function(e, t, r) {
    "use strict";

    function n(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType
    }

    function u(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
    }

    function a(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            var r, n, a = getComputedStyle(e, null);
            return u(a.overflowY, t) || u(a.overflowX, t) || !!(n = function(e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement
                } catch (e) {
                    return null
                }
            }(r = e)) && (n.clientHeight < r.scrollHeight || n.clientWidth < r.scrollWidth)
        }
        return !1
    }

    function o(e, t, r, n, u, a, o, i) {
        return a < e && o > t || a > e && o < t ? 0 : a <= e && i <= r || o >= t && i >= r ? a - e - n : o > t && i < r || a < e && i > r ? o - t + u : 0
    }
    r.r(t), r.d(t, {
        default: function() {
            return i
        }
    }), r("70102"), r("424973");
    var i = function(e, t) {
        var r = window,
            u = t.scrollMode,
            i = t.block,
            s = t.inline,
            l = t.boundary,
            c = t.skipOverflowHiddenElements,
            f = "function" == typeof l ? l : function(e) {
                return e !== l
            };
        if (!n(e)) throw TypeError("Invalid target");
        for (var d, D, h = document.scrollingElement || document.documentElement, v = [], p = e; n(p) && f(p);) {
            if ((p = null == (D = (d = p).parentElement) ? d.getRootNode().host || null : D) === h) {
                v.push(p);
                break
            }
            null != p && p === document.body && a(p) && !a(document.documentElement) || null != p && a(p, c) && v.push(p)
        }
        for (var C = r.visualViewport ? r.visualViewport.width : innerWidth, g = r.visualViewport ? r.visualViewport.height : innerHeight, B = window.scrollX || pageXOffset, E = window.scrollY || pageYOffset, m = e.getBoundingClientRect(), A = m.height, F = m.width, b = m.top, y = m.right, w = m.bottom, x = m.left, O = "start" === i || "nearest" === i ? b : "end" === i ? w : b + A / 2, k = "center" === s ? x + F / 2 : "end" === s ? y : x, P = [], j = 0; j < v.length; j++) {
            var S = v[j],
                T = S.getBoundingClientRect(),
                R = T.height,
                M = T.width,
                N = T.top,
                z = T.right,
                I = T.bottom,
                W = T.left;
            if ("if-needed" === u && b >= 0 && x >= 0 && w <= g && y <= C && b >= N && w <= I && x >= W && y <= z) break;
            var L = getComputedStyle(S),
                _ = parseInt(L.borderLeftWidth, 10),
                q = parseInt(L.borderTopWidth, 10),
                V = parseInt(L.borderRightWidth, 10),
                U = parseInt(L.borderBottomWidth, 10),
                H = 0,
                K = 0,
                $ = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - _ - V : 0,
                X = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - U : 0,
                J = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : M / S.offsetWidth : 0,
                Q = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : R / S.offsetHeight : 0;
            if (h === S) H = "start" === i ? O : "end" === i ? O - g : "nearest" === i ? o(E, E + g, g, q, U, E + O, E + O + A, A) : O - g / 2, K = "start" === s ? k : "center" === s ? k - C / 2 : "end" === s ? k - C : o(B, B + C, C, _, V, B + k, B + k + F, F), H = Math.max(0, H + E), K = Math.max(0, K + B);
            else {
                H = "start" === i ? O - N - q : "end" === i ? O - I + U + X : "nearest" === i ? o(N, I, R, q, U + X, O, O + A, A) : O - (N + R / 2) + X / 2, K = "start" === s ? k - W - _ : "center" === s ? k - (W + M / 2) + $ / 2 : "end" === s ? k - z + V + $ : o(W, z, M, _, V + $, k, k + F, F);
                var Y = S.scrollLeft,
                    G = S.scrollTop;
                O += G - (H = Math.max(0, Math.min(G + H / Q, S.scrollHeight - R / Q + X))), k += Y - (K = Math.max(0, Math.min(Y + K / J, S.scrollWidth - M / J + $)))
            }
            P.push({
                el: S,
                top: H,
                left: K
            })
        }
        return P
    }
}