function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });

    function o(e, t) {
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
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var i = [
            ["position", "absolute"],
            ["top", "-100px"],
            ["left", "-100px"],
            ["width", "100px"],
            ["height", "100px"],
            ["overflow", "scroll"]
        ],
        a = [
            ["width", "200px"],
            ["height", "200px"]
        ];

    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = document.createElement("div"),
            n = document.createElement("div"),
            r = !0,
            u = !1,
            s = void 0;
        try {
            for (var l, c = i[Symbol.iterator](); !(r = (l = c.next()).done); r = !0) {
                var f = o(l.value, 2),
                    d = f[0],
                    _ = f[1];
                t.style[d] = _
            }
        } catch (e) {
            u = !0, s = e
        } finally {
            try {
                !r && null != c.return && c.return()
            } finally {
                if (u) throw s
            }
        }
        var E = !0,
            p = !1,
            m = void 0;
        try {
            for (var y, I = a[Symbol.iterator](); !(E = (y = I.next()).done); E = !0) {
                var h = o(y.value, 2),
                    O = h[0],
                    T = h[1];
                n.style[O] = T
            }
        } catch (e) {
            p = !0, m = e
        } finally {
            try {
                !E && null != I.return && I.return()
            } finally {
                if (p) throw m
            }
        }
        t.appendChild(n), document.body.appendChild(t), t.className = e;
        var S = {
            width: t.offsetWidth - t.clientWidth,
            height: t.offsetHeight - t.clientHeight
        };
        return document.body.removeChild(t), S
    }
}