function(e, t, r) {
    "use strict";

    function n(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType
    }

    function i(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
    }

    function o(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            var r, n, o = getComputedStyle(e, null);
            return i(o.overflowY, t) || i(o.overflowX, t) || !!(n = function(e) {
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

    function a(e, t, r, n, i, o, a, u) {
        return o < e && a > t || o > e && a < t ? 0 : o <= e && u <= r || a >= t && u >= r ? o - e - n : a > t && u < r || o < e && u > r ? a - t + i : 0
    }
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    }), r("70102"), r("424973");
    var u = function(e, t) {
        var r = window,
            i = t.scrollMode,
            u = t.block,
            s = t.inline,
            l = t.boundary,
            c = t.skipOverflowHiddenElements,
            d = "function" == typeof l ? l : function(e) {
                return e !== l
            };
        if (!n(e)) throw TypeError("Invalid target");
        for (var f, h, p = document.scrollingElement || document.documentElement, v = [], D = e; n(D) && d(D);) {
            if ((D = null == (h = (f = D).parentElement) ? f.getRootNode().host || null : h) === p) {
                v.push(D);
                break
            }
            null != D && D === document.body && o(D) && !o(document.documentElement) || null != D && o(D, c) && v.push(D)
        }
        for (var g = r.visualViewport ? r.visualViewport.width : innerWidth, C = r.visualViewport ? r.visualViewport.height : innerHeight, m = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, E = e.getBoundingClientRect(), B = E.height, b = E.width, A = E.top, w = E.right, F = E.bottom, _ = E.left, O = "start" === u || "nearest" === u ? A : "end" === u ? F : A + B / 2, x = "center" === s ? _ + b / 2 : "end" === s ? w : _, k = [], P = 0; P < v.length; P++) {
            var S = v[P],
                T = S.getBoundingClientRect(),
                j = T.height,
                M = T.width,
                R = T.top,
                I = T.right,
                L = T.bottom,
                N = T.left;
            if ("if-needed" === i && A >= 0 && _ >= 0 && F <= C && w <= g && A >= R && F <= L && _ >= N && w <= I) break;
            var z = getComputedStyle(S),
                W = parseInt(z.borderLeftWidth, 10),
                q = parseInt(z.borderTopWidth, 10),
                V = parseInt(z.borderRightWidth, 10),
                U = parseInt(z.borderBottomWidth, 10),
                H = 0,
                J = 0,
                K = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - W - V : 0,
                $ = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - U : 0,
                X = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : M / S.offsetWidth : 0,
                Q = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : j / S.offsetHeight : 0;
            if (p === S) H = "start" === u ? O : "end" === u ? O - C : "nearest" === u ? a(y, y + C, C, q, U, y + O, y + O + B, B) : O - C / 2, J = "start" === s ? x : "center" === s ? x - g / 2 : "end" === s ? x - g : a(m, m + g, g, W, V, m + x, m + x + b, b), H = Math.max(0, H + y), J = Math.max(0, J + m);
            else {
                H = "start" === u ? O - R - q : "end" === u ? O - L + U + $ : "nearest" === u ? a(R, L, j, q, U + $, O, O + B, B) : O - (R + j / 2) + $ / 2, J = "start" === s ? x - N - W : "center" === s ? x - (N + M / 2) + K / 2 : "end" === s ? x - I + V + K : a(N, I, M, W, V + K, x, x + b, b);
                var G = S.scrollLeft,
                    Y = S.scrollTop;
                O += Y - (H = Math.max(0, Math.min(Y + H / Q, S.scrollHeight - j / Q + $))), x += G - (J = Math.max(0, Math.min(G + J / X, S.scrollWidth - M / X + K)))
            }
            k.push({
                el: S,
                top: H,
                left: J
            })
        }
        return k
    }
}