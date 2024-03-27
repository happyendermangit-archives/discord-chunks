function(e, t, n) {
    var r;
    r = function() {
        "use strict";
        var e, t, r, i, a = "undefined" != typeof window ? window : n.g,
            o = a.cancelRequestAnimationFrame && a.requestAnimationFrame || setTimeout,
            s = a.cancelRequestAnimationFrame || clearTimeout,
            u = [],
            c = 0,
            l = !1,
            d = 7,
            f = 35,
            p = 125,
            h = 0,
            m = 0,
            g = 0,
            _ = {
                get didTimeout() {
                    return !1
                },
                timeRemaining: function() {
                    var e = d - (Date.now() - m);
                    return e < 0 ? 0 : e
                }
            },
            b = function(e) {
                var t, n, r = function() {
                    var i = Date.now() - n;
                    i < 99 ? t = setTimeout(r, 99 - i) : (t = null, e())
                };
                return function() {
                    n = Date.now(), !t && (t = setTimeout(r, 99))
                }
            }(function() {
                d = 22, p = 66, f = 0
            });

        function v() {
            125 != p && (d = 7, p = 125, f = 35, l && (l && (i && s(i), r && clearTimeout(r), l = !1), S())), b()
        }

        function y() {
            i = null, r = setTimeout(x, 0)
        }

        function E() {
            r = null, o(y)
        }

        function S() {
            !l && (t = p - (Date.now() - m), e = Date.now(), l = !0, f && t < f && (t = f), t > 9 ? r = setTimeout(E, t) : (t = 0, E()))
        }

        function x() {
            var n, i, a, o = d > 9 ? 9 : 1;
            if (m = Date.now(), l = !1, r = null, c > 2 || m - t - 50 < e)
                for (i = 0, a = u.length; i < a && _.timeRemaining() > o; i++) n = u.shift(), g++, n && n(_);
            u.length ? S() : c = 0
        }

        function w(e) {
            return h++, u.push(e), S(), h
        }

        function T(e) {
            var t = e - 1 - g;
            u[t] && (u[t] = null)
        }
        if (a.requestIdleCallback && a.cancelIdleCallback) try {
            a.requestIdleCallback(function() {}, {
                timeout: 0
            })
        } catch (e) {
            ! function(e) {
                var t, n;
                if (a.requestIdleCallback = function(t, n) {
                        return n && "number" == typeof n.timeout ? e(t, n.timeout) : e(t)
                    }, a.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype)) {
                    if (!(n = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !n.configurable || !n.get) return;
                    Object.defineProperty(t, "timeRemaining", {
                        value: function() {
                            return n.get.call(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    })
                }
            }(a.requestIdleCallback)
        } else a.requestIdleCallback = w, a.cancelIdleCallback = T, a.document && document.addEventListener && (a.addEventListener("scroll", v, !0), a.addEventListener("resize", v), document.addEventListener("focus", v, !0), document.addEventListener("mouseover", v, !0), ["click", "keypress", "touchstart", "mousedown"].forEach(function(e) {
            document.addEventListener(e, v, {
                capture: !0,
                passive: !0
            })
        }), a.MutationObserver && new MutationObserver(v).observe(document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }));
        return {
            request: w,
            cancel: T
        }
    }, "function" == typeof define && define.amd ? define([], r) : e.exports ? e.exports = r() : window.idleCallbackShim = r()
}