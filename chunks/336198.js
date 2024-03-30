function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FocusBlock: function() {
            return u
        },
        useFocusBlock: function() {
            return a
        }
    });
    var r = n("470079");

    function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var i = 0;

    function a(e, t) {
        var n, a, u = (n = r.useState(function() {
                return i++
            }), a = 1, function(e) {
                if (Array.isArray(e)) return e
            }(n) || function(e, t) {
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
            }(n, a) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t)
                }
            }(n, a) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())[0],
            s = "".concat("data-focus-blocked", "-").concat(u);
        r.useLayoutEffect(function() {
            if (t) {
                var n = e.current;
                if (null != n) {
                    for (var r, o = (r = n, document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: function(e) {
                                return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            }
                        })), i = o.currentNode; null !== i;) {
                        var a = i,
                            u = a.tabIndex;
                        a.tabIndex = -1, a.setAttribute(s, String(u)), i = o.nextNode()
                    }
                    return function() {
                        n.querySelectorAll("[".concat(s, "]")).forEach(function(e) {
                            var t = e.getAttribute(s);
                            if (null != t) {
                                var n = parseInt(t, 10);
                                e.tabIndex = n
                            }
                        })
                    }
                }
            }
        }, [t])
    }

    function u(e) {
        var t = e.children,
            n = e.className,
            o = e.enabled,
            i = r.useRef(null);
        return a(i, void 0 === o || o), r.createElement("div", {
            ref: i,
            className: n
        }, t)
    }
}