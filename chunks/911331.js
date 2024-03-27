function(e, t, n) {
    "use strict";

    function r(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType
    }

    function i(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
    }

    function a(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
            var n, r, a = getComputedStyle(e, null);
            return i(a.overflowY, t) || i(a.overflowX, t) || !!(r = function(e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement
                } catch (e) {
                    return null
                }
            }(n = e)) && (r.clientHeight < n.scrollHeight || r.clientWidth < n.scrollWidth)
        }
        return !1
    }

    function o(e, t, n, r, i, a, o, s) {
        return a < e && o > t || a > e && o < t ? 0 : a <= e && s <= n || o >= t && s >= n ? a - e - r : o > t && s < n || a < e && s > n ? o - t + i : 0
    }
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var s = function(e, t) {
        var n = window,
            i = t.scrollMode,
            s = t.block,
            u = t.inline,
            c = t.boundary,
            l = t.skipOverflowHiddenElements,
            d = "function" == typeof c ? c : function(e) {
                return e !== c
            };
        if (!r(e)) throw TypeError("Invalid target");
        for (var f, p, h = document.scrollingElement || document.documentElement, m = [], g = e; r(g) && d(g);) {
            if ((g = null == (p = (f = g).parentElement) ? f.getRootNode().host || null : p) === h) {
                m.push(g);
                break
            }
            null != g && g === document.body && a(g) && !a(document.documentElement) || null != g && a(g, l) && m.push(g)
        }
        for (var _ = n.visualViewport ? n.visualViewport.width : innerWidth, b = n.visualViewport ? n.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, E = e.getBoundingClientRect(), S = E.height, x = E.width, w = E.top, T = E.right, C = E.bottom, D = E.left, O = "start" === s || "nearest" === s ? w : "end" === s ? C : w + S / 2, M = "center" === u ? D + x / 2 : "end" === u ? T : D, A = [], k = 0; k < m.length; k++) {
            var R = m[k],
                N = R.getBoundingClientRect(),
                I = N.height,
                L = N.width,
                P = N.top,
                F = N.right,
                B = N.bottom,
                U = N.left;
            if ("if-needed" === i && w >= 0 && D >= 0 && C <= b && T <= _ && w >= P && C <= B && D >= U && T <= F) break;
            var Y = getComputedStyle(R),
                j = parseInt(Y.borderLeftWidth, 10),
                z = parseInt(Y.borderTopWidth, 10),
                H = parseInt(Y.borderRightWidth, 10),
                G = parseInt(Y.borderBottomWidth, 10),
                V = 0,
                $ = 0,
                W = "offsetWidth" in R ? R.offsetWidth - R.clientWidth - j - H : 0,
                K = "offsetHeight" in R ? R.offsetHeight - R.clientHeight - z - G : 0,
                q = "offsetWidth" in R ? 0 === R.offsetWidth ? 0 : L / R.offsetWidth : 0,
                Q = "offsetHeight" in R ? 0 === R.offsetHeight ? 0 : I / R.offsetHeight : 0;
            if (h === R) V = "start" === s ? O : "end" === s ? O - b : "nearest" === s ? o(y, y + b, b, z, G, y + O, y + O + S, S) : O - b / 2, $ = "start" === u ? M : "center" === u ? M - _ / 2 : "end" === u ? M - _ : o(v, v + _, _, j, H, v + M, v + M + x, x), V = Math.max(0, V + y), $ = Math.max(0, $ + v);
            else {
                V = "start" === s ? O - P - z : "end" === s ? O - B + G + K : "nearest" === s ? o(P, B, I, z, G + K, O, O + S, S) : O - (P + I / 2) + K / 2, $ = "start" === u ? M - U - j : "center" === u ? M - (U + L / 2) + W / 2 : "end" === u ? M - F + H + W : o(U, F, L, j, H + W, M, M + x, x);
                var Z = R.scrollLeft,
                    X = R.scrollTop;
                O += X - (V = Math.max(0, Math.min(X + V / Q, R.scrollHeight - I / Q + K))), M += Z - ($ = Math.max(0, Math.min(Z + $ / q, R.scrollWidth - L / q + W)))
            }
            A.push({
                el: R,
                top: V,
                left: $
            })
        }
        return A
    }
}