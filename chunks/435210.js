function(e, t, n) {
    var r = n("444675"),
        i = Object.getOwnPropertyDescriptors || function(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n
        },
        a = /%[sdj%]/g;
    t.format = function(e) {
        if (!v(e)) {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(c(arguments[n]));
            return t.join(" ")
        }
        for (var n = 1, r = arguments, i = r.length, o = String(e).replace(a, function(e) {
                if ("%%" === e) return "%";
                if (n >= i) return e;
                switch (e) {
                    case "%s":
                        return String(r[n++]);
                    case "%d":
                        return Number(r[n++]);
                    case "%j":
                        try {
                            return JSON.stringify(r[n++])
                        } catch (e) {
                            return "[Circular]"
                        }
                    default:
                        return e
                }
            }), s = r[n]; n < i; s = r[++n]) _(s) || !S(s) ? o += " " + s : o += " " + c(s);
        return o
    }, t.deprecate = function(e, n) {
        if (void 0 !== r && !0 === r.noDeprecation) return e;
        if (void 0 === r) return function() {
            return t.deprecate(e, n).apply(this, arguments)
        };
        var i = !1;
        return function() {
            if (!i) {
                if (r.throwDeprecation) throw Error(n);
                r.traceDeprecation ? console.trace(n) : console.error(n);
                i = !0
            }
            return e.apply(this, arguments)
        }
    };
    var o = {},
        s = /^$/;
    if (r.env.NODE_DEBUG) {
        var u = r.env.NODE_DEBUG;
        s = RegExp("^" + (u = u.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase()) + "$", "i")
    }

    function c(e, n) {
        var r = {
            seen: [],
            stylize: d
        };
        return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), g(n) ? r.showHidden = n : n && t._extend(r, n), y(r.showHidden) && (r.showHidden = !1), y(r.depth) && (r.depth = 2), y(r.colors) && (r.colors = !1), y(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = l), f(r, e, r.depth)
    }

    function l(e, t) {
        var n = c.styles[t];
        return n ? "\x1b[" + c.colors[n][0] + "m" + e + "\x1b[" + c.colors[n][1] + "m" : e
    }

    function d(e, t) {
        return e
    }
    t.debuglog = function(e) {
        if (!o[e = e.toUpperCase()]) {
            if (s.test(e)) {
                var n = r.pid;
                o[e] = function() {
                    var r = t.format.apply(t, arguments);
                    console.error("%s %d: %s", e, n, r)
                }
            } else o[e] = function() {}
        }
        return o[e]
    }, t.inspect = c, c.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }, c.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
    };

    function f(e, n, r) {
        if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && !(n.constructor && n.constructor.prototype === n)) {
            var i, a, o = n.inspect(r, e);
            return !v(o) && (o = f(e, o, r)), o
        }
        var s = function(e, t) {
            if (y(t)) return e.stylize("undefined", "undefined");
            if (v(t)) {
                var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e.stylize(n, "string")
            }
            return b(t) ? e.stylize("" + t, "number") : g(t) ? e.stylize("" + t, "boolean") : _(t) ? e.stylize("null", "null") : void 0
        }(e, n);
        if (s) return s;
        var u = Object.keys(n);
        var c = (i = {}, u.forEach(function(e, t) {
            i[e] = !0
        }), i);
        if (e.showHidden && (u = Object.getOwnPropertyNames(n)), w(n) && (u.indexOf("message") >= 0 || u.indexOf("description") >= 0)) return p(n);
        if (0 === u.length) {
            if (T(n)) {
                var l = n.name ? ": " + n.name : "";
                return e.stylize("[Function" + l + "]", "special")
            }
            if (E(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
            if (x(n)) return e.stylize(Date.prototype.toString.call(n), "date");
            if (w(n)) return p(n)
        }
        var d = "",
            S = !1,
            C = ["{", "}"];
        if (m(n) && (S = !0, C = ["[", "]"]), T(n) && (d = " [Function" + (n.name ? ": " + n.name : "") + "]"), E(n) && (d = " " + RegExp.prototype.toString.call(n)), x(n) && (d = " " + Date.prototype.toUTCString.call(n)), w(n) && (d = " " + p(n)), 0 === u.length && (!S || 0 == n.length)) return C[0] + d + C[1];
        if (r < 0) return E(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
        return e.seen.push(n), a = S ? function(e, t, n, r, i) {
                for (var a = [], o = 0, s = t.length; o < s; ++o) M(t, String(o)) ? a.push(h(e, t, n, r, String(o), !0)) : a.push("");
                return i.forEach(function(i) {
                    !i.match(/^\d+$/) && a.push(h(e, t, n, r, i, !0))
                }), a
            }(e, n, r, c, u) : u.map(function(t) {
                return h(e, n, r, c, t, S)
            }), e.seen.pop(),
            function(e, t, n) {
                var r = 0;
                return e.reduce(function(e, t) {
                    return r++, t.indexOf("\n") >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
            }(a, d, C)
    }

    function p(e) {
        return "[" + Error.prototype.toString.call(e) + "]"
    }

    function h(e, t, n, r, i, a) {
        var o, s, u;
        if ((u = Object.getOwnPropertyDescriptor(t, i) || {
                value: t[i]
            }).get ? s = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (s = e.stylize("[Setter]", "special")), !M(r, i) && (o = "[" + i + "]"), !s && (0 > e.seen.indexOf(u.value) ? (s = _(n) ? f(e, u.value, null) : f(e, u.value, n - 1)).indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
                return "  " + e
            }).join("\n").slice(2) : "\n" + s.split("\n").map(function(e) {
                return "   " + e
            }).join("\n")) : s = e.stylize("[Circular]", "special")), y(o)) {
            if (a && i.match(/^\d+$/)) return s;
            (o = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.slice(1, -1), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
        }
        return o + ": " + s
    }

    function m(e) {
        return Array.isArray(e)
    }

    function g(e) {
        return "boolean" == typeof e
    }

    function _(e) {
        return null === e
    }
    t.types = n("842406"), t.isArray = m, t.isBoolean = g, t.isNull = _;

    function b(e) {
        return "number" == typeof e
    }

    function v(e) {
        return "string" == typeof e
    }
    t.isNullOrUndefined = function(e) {
        return null == e
    }, t.isNumber = b, t.isString = v;

    function y(e) {
        return void 0 === e
    }

    function E(e) {
        return S(e) && "[object RegExp]" === C(e)
    }

    function S(e) {
        return "object" == typeof e && null !== e
    }

    function x(e) {
        return S(e) && "[object Date]" === C(e)
    }

    function w(e) {
        return S(e) && ("[object Error]" === C(e) || e instanceof Error)
    }

    function T(e) {
        return "function" == typeof e
    }
    t.isSymbol = function(e) {
        return "symbol" == typeof e
    }, t.isUndefined = y, t.isRegExp = E, t.types.isRegExp = E, t.isObject = S, t.isDate = x, t.types.isDate = x, t.isError = w, t.types.isNativeError = w, t.isFunction = T;

    function C(e) {
        return Object.prototype.toString.call(e)
    }

    function D(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10)
    }
    t.isPrimitive = function(e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
    }, t.isBuffer = n("102439");
    var O = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    function M(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    t.log = function() {
        var e, n;
        console.log("%s - %s", (n = [D((e = new Date).getHours()), D(e.getMinutes()), D(e.getSeconds())].join(":"), [e.getDate(), O[e.getMonth()], n].join(" ")), t.format.apply(t, arguments))
    }, t.inherits = n("689118"), t._extend = function(e, t) {
        if (!t || !S(t)) return e;
        for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
        return e
    };
    var A = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

    function k(e, t) {
        if (!e) {
            var n = Error("Promise was rejected with a falsy value");
            n.reason = e, e = n
        }
        return t(e)
    }
    t.promisify = function(e) {
        if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');
        if (A && e[A]) {
            var t = e[A];
            if ("function" != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
            return Object.defineProperty(t, A, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }), t
        }

        function t() {
            for (var t, n, r = new Promise(function(e, r) {
                    t = e, n = r
                }), i = [], a = 0; a < arguments.length; a++) i.push(arguments[a]);
            i.push(function(e, r) {
                e ? n(e) : t(r)
            });
            try {
                e.apply(this, i)
            } catch (e) {
                n(e)
            }
            return r
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), A && Object.defineProperty(t, A, {
            value: t,
            enumerable: !1,
            writable: !1,
            configurable: !0
        }), Object.defineProperties(t, i(e))
    }, t.promisify.custom = A;
    t.callbackify = function(e) {
        if ("function" != typeof e) throw TypeError('The "original" argument must be of type Function');

        function t() {
            for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
            var i = t.pop();
            if ("function" != typeof i) throw TypeError("The last argument must be of type Function");
            var a = this,
                o = function() {
                    return i.apply(a, arguments)
                };
            e.apply(this, t).then(function(e) {
                r.nextTick(o.bind(null, null, e))
            }, function(e) {
                r.nextTick(k.bind(null, e, o))
            })
        }
        return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t
    }
}