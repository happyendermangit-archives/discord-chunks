function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function i(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || a(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        if (e) {
            if ("string" == typeof e) return o(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
        }
    }

    function u() {
        for (var e, t = arguments.length, n = Array(t), u = 0; u < t; u++) n[u] = arguments[u];
        var s = i(r.useState(void 0), 2),
            l = s[0],
            c = s[1],
            f = i(r.useState(void 0), 2),
            d = f[0],
            _ = f[1],
            E = r.useRef(null);
        return r.useLayoutEffect(function() {
            var e = E.current,
                t = null == e ? void 0 : e.ownerDocument.defaultView;
            if (null != e && null != t) {
                var n = new t.ResizeObserver(function(e) {
                    var t = e[0],
                        n = null == t ? void 0 : null === (a = t.borderBoxSize) || void 0 === a ? void 0 : null === (i = a[0]) || void 0 === i ? void 0 : i.inlineSize,
                        r = null == t ? void 0 : null === (s = t.borderBoxSize) || void 0 === s ? void 0 : null === (u = s[0]) || void 0 === u ? void 0 : u.blockSize;
                    if (null == n || null == r) {
                        var o = E.current;
                        if (null != o) {
                            var i, a, u, s, l, f, d = window.getComputedStyle(o);
                            null == n && (n = parseFloat(null !== (l = d.width) && void 0 !== l ? l : "0")), null == r && (r = parseFloat(null !== (f = d.height) && void 0 !== f ? f : "0"))
                        }
                    }
                    c(n), _(r)
                });
                return n.observe(e),
                    function() {
                        return n.disconnect()
                    }
            }
        }, [E.current].concat(function(e) {
            if (Array.isArray(e)) return o(e)
        }(e = n) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || a(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())), {
            ref: E,
            width: l,
            height: d
        }
    }
}