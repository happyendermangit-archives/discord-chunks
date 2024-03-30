function(e, t, n) {
    "use strict";

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });

    function o(e) {
        return function(e) {
            if (Array.isArray(e)) return r(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || i(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function i(e, t) {
        if (e) {
            if ("string" == typeof e) return r(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t)
        }
    }
    var a = {
            1: "bold",
            4: "underline"
        },
        u = {
            30: "black",
            31: "red",
            32: "green",
            33: "yellow",
            34: "blue",
            35: "magenta",
            36: "cyan",
            37: "white"
        },
        s = {
            40: "black",
            41: "red",
            42: "green",
            43: "yellow",
            44: "blue",
            45: "magenta",
            46: "cyan",
            47: "white"
        },
        l = /\x1B\[(\d+(?:[:;]\d+)*)m/,
        c = new RegExp("(?=".concat(l.source, ")"));

    function f() {
        var e = o(d("foreground", u, ["38", "39"], !0)).concat(o(d("background", s, ["48", "49"], !0)), o(d("style", a, [], !1)), [{
            className: "ansi-control-sequence",
            begin: l,
            starts: {
                end: c,
                endsParent: !0
            }
        }]);
        return function(e) {
            for (var t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1)
        }(e), {
            contains: [{
                begin: c,
                contains: e
            }]
        }
    }

    function d(e, t, n, r) {
        var a = ["0"].concat(o(n));
        return r && a.push.apply(a, o(Object.keys(t))), Object.entries(t).map(function(t) {
            var n, r, o, u, s, l, f = (r = 2, function(e) {
                    if (Array.isArray(e)) return e
                }(n = t) || function(e, t) {
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
                }(n, r) || i(n, r) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()),
                d = f[0],
                _ = f[1];
            return o = e, u = _, s = d, l = a, {
                className: "ansi-".concat(o, "-").concat(u),
                endsParent: !0,
                begin: c,
                "on:begin": function(e, t) {
                    var n = e[1].split(";");
                    void 0 === t.data.isOn && (t.data.isOn = !1);
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var c = a.value;
                            c === s ? t.data.isOn = !0 : l.includes(c) && (t.data.isOn = !1)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }!t.data.isOn && t.ignoreMatch()
                }
            }
        })
    }
}