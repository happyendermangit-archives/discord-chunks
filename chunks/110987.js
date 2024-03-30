function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StackedProgress: function() {
            return E
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("392711"),
        l = n.n(s),
        c = n("447515"),
        f = n("379241");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        var t = e.className,
            n = e.percents,
            r = e.size,
            o = void 0 === r ? "small" : r,
            a = e.foregroundColors,
            s = void 0 === a ? [c.default.unsafe_rawColors.BRAND_500.css] : a,
            E = e.backgroundColor,
            p = e.animate,
            m = void 0 === p || p,
            y = l().zip(n, s).map(function(e, t) {
                var n, r, a, s = (r = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(n = e) || function(e, t) {
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
                    }(n, r) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return d(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                        }
                    }(n, r) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    l = s[0],
                    c = s[1];
                return a = Array.isArray(c) ? {
                    background: "linear-gradient(to right, ".concat(c[0], ", ").concat(c[1], ")")
                } : {
                    backgroundColor: c
                }, i.createElement("div", {
                    key: t,
                    className: u()(f.progressBar, f[o], _({}, f.animating, m)),
                    style: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                _(e, t, n[t])
                            })
                        }
                        return e
                    }({
                        transform: "translate3d(".concat(Math.min(Math.max(0, l), 100) - 100, "%, 0, 0)")
                    }, a)
                })
            }).reverse();
        return i.createElement("div", {
            className: u()(t, f.progress, f[o]),
            style: {
                backgroundColor: void 0 === E ? "var(--background-modifier-active)" : E
            }
        }, y)
    }(r = o || (o = {})).XSMALL = "xsmall", r.SMALL = "small", r.LARGE = "large", E.Sizes = o
}