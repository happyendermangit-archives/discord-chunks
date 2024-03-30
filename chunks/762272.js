function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormattedMessage: function() {
            return p
        },
        getMessage: function() {
            return y
        },
        setUpdateRules: function() {
            return m
        }
    });
    var r, o, i = n("400053"),
        a = n.n(i),
        u = n("302454"),
        s = n.n(u),
        l = n("712126"),
        c = n("149467");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e, t) {
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
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var p = function() {
        var e, t, n;

        function i(e, t, n) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), _(this, "message", void 0), _(this, "hasMarkdown", void 0), _(this, "intlMessage", void 0), this.message = n ? e : e.replace(c.UNSAFE_RE_ALL, ""), this.hasMarkdown = n, this.intlMessage = new(a())(this.message, t)
        }
        return e = i, t = [{
            key: "format",
            value: function(e) {
                if (!this.hasMarkdown) return this.intlMessage.format(e);
                var t = E(this.getContext(e), 2),
                    n = t[0],
                    o = t[1];
                return r(this.intlMessage.format(n), n, o)
            }
        }, {
            key: "astFormat",
            value: function(e) {
                var t = E(this.getContext(e), 2),
                    n = t[0],
                    r = t[1];
                return o(this.intlMessage.format(n), n, r)
            }
        }, {
            key: "plainFormat",
            value: function(e) {
                return this.intlMessage.format(e)
            }
        }, {
            key: "getContext",
            value: function(e) {
                var t = c.UNSAFE_RE.test(this.message),
                    n = {};
                if (t) {
                    var r = 0,
                        o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var u, s = Object.entries(e)[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                            var l = E(u.value, 2),
                                f = l[0],
                                d = l[1];
                            this.message.includes("!!{".concat(f, "}!!")) && (n[++r] = d, e[f] = r)
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                }
                return [e, n]
            }
        }], d(e.prototype, t), n && d(e, n), i
    }();

    function m(e) {
        var t, n, i, a, u, c;
        t = l.rules, n = e, i = s().parserFor(n(t)), a = s().reactFor(s().ruleOutput(t, "react")), r = function(e, t, n) {
            var r = !e.includes("\n\n");
            return !r && (e += "\n\n"), a(i(e, {
                inline: r,
                context: t,
                unsafeContext: n
            }))
        }, u = l.rules, c = s().parserFor(u), o = function(e, t, n) {
            return c(e + "\n\n", {
                inline: !1,
                context: t,
                unsafeContext: n
            })
        }
    }

    function y(e, t) {
        if (null == e) return "";
        null == r && m(n("441369").default), e = e.replace(/^\n+|\n+$/g, "");
        var o = c.FORMAT_RE.test(e),
            i = c.MARKDOWN_RE.test(e);
        return o || i ? new p(e, t, i) : e
    }
}