function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("36908");

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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return o(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t, n, o) {
        var a, u, s = (0, r.default)(e, t, o),
            l = function(e, t) {
                return n.computeScrollPosition(e, t)
            };
        return a = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, s), u = (u = {
            getScrollPosition: l,
            isItemVisible: function(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = i(l(e, n), 2),
                    a = o[0],
                    u = o[1],
                    s = t();
                return r ? a >= s.scrollTop && a + u <= s.scrollTop + s.offsetHeight : a + u >= s.scrollTop && a <= s.scrollTop + s.offsetHeight
            },
            scrollToIndex: function(e) {
                var t = e.section,
                    n = e.row,
                    r = e.animate,
                    o = e.callback,
                    a = e.padding,
                    u = i(l(t, n), 2),
                    c = u[0],
                    f = u[1];
                s.scrollIntoViewRect({
                    start: c,
                    end: c + f,
                    padding: void 0 === a ? 0 : a,
                    animate: r,
                    callback: o
                })
            }
        }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(u)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e))
        }), a
    }
}