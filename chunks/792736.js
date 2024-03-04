function(e, t, n) {
    var r;
    e = n.nmd(e), n("424973"), r = function() {
        "use strict";
        var e, t, r, a, o = "undefined" != typeof window ? window : n.g,
            i = o.cancelRequestAnimationFrame && o.requestAnimationFrame || setTimeout,
            s = o.cancelRequestAnimationFrame || clearTimeout,
            u = [],
            l = 0,
            c = !1,
            d = 7,
            f = 35,
            p = 125,
            m = 0,
            h = 0,
            y = 0,
            IdleDeadline = {
                get didTimeout() {
                    return !1
                },
                timeRemaining: function() {
                    var e = d - (Date.now() - h);
                    return e < 0 ? 0 : e
                }
            },
            _ = function(e) {
                var t, n, r = function() {
                    var a = Date.now() - n;
                    a < 99 ? t = setTimeout(r, 99 - a) : (t = null, e())
                };
                return function() {
                    n = Date.now(), !t && (t = setTimeout(r, 99))
                }
            }(function() {
                d = 22, p = 66, f = 0
            });

        function g() {
            125 != p && (d = 7, p = 125, f = 35, c && (c && (a && s(a), r && clearTimeout(r), c = !1), M())), _()
        }

        function v() {
            a = null, r = setTimeout(w, 0)
        }

        function b() {
            r = null, i(v)
        }

        function M() {
            !c && (t = p - (Date.now() - h), e = Date.now(), c = !0, f && t < f && (t = f), t > 9 ? r = setTimeout(b, t) : (t = 0, b()))
        }

        function w() {
            var n, a, o, i = d > 9 ? 9 : 1;
            if (h = Date.now(), c = !1, r = null, l > 2 || h - t - 50 < e)
                for (a = 0, o = u.length; a < o && IdleDeadline.timeRemaining() > i; a++) n = u.shift(), y++, n && n(IdleDeadline);
            u.length ? M() : l = 0
        }

        function k(e) {
            return m++, u.push(e), M(), m
        }

        function L(e) {
            var t = e - 1 - y;
            u[t] && (u[t] = null)
        }
        if (o.requestIdleCallback && o.cancelIdleCallback) try {
            o.requestIdleCallback(function() {}, {
                timeout: 0
            })
        } catch (e) {
            ! function(e) {
                var t, n;
                if (o.requestIdleCallback = function(t, n) {
                        return n && "number" == typeof n.timeout ? e(t, n.timeout) : e(t)
                    }, o.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype)) {
                    if (!(n = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !n.configurable || !n.get) return;
                    Object.defineProperty(t, "timeRemaining", {
                        value: function() {
                            return n.get.call(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }
            }(o.requestIdleCallback)
        } else o.requestIdleCallback = k, o.cancelIdleCallback = L, o.document && document.addEventListener && (o.addEventListener("scroll", g, !0), o.addEventListener("resize", g), document.addEventListener("focus", g, !0), document.addEventListener("mouseover", g, !0), ["click", "keypress", "touchstart", "mousedown"].forEach(function(e) {
            document.addEventListener(e, g, {
                capture: !0,
                passive: !0
            })
        }), o.MutationObserver && new MutationObserver(g).observe(document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }));
        return {
            request: k,
            cancel: L
        }
    }, "function" == typeof define && define.amd ? define([], r) : "object" == typeof e && e.exports ? e.exports = r() : window.idleCallbackShim = r()
}