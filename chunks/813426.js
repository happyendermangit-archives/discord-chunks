function(e, t, n) {
    var r = "function" == typeof Map && Map.prototype,
        i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
        a = r && i && "function" == typeof i.get ? i.get : null,
        o = r && Map.prototype.forEach,
        s = "function" == typeof Set && Set.prototype,
        u = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
        c = s && u && "function" == typeof u.get ? u.get : null,
        l = s && Set.prototype.forEach,
        d = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
        f = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
        p = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
        h = Boolean.prototype.valueOf,
        m = Object.prototype.toString,
        g = Function.prototype.toString,
        _ = String.prototype.match,
        b = String.prototype.slice,
        v = String.prototype.replace,
        y = String.prototype.toUpperCase,
        E = String.prototype.toLowerCase,
        S = RegExp.prototype.test,
        x = Array.prototype.concat,
        w = Array.prototype.join,
        T = Array.prototype.slice,
        C = Math.floor,
        D = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        O = Object.getOwnPropertySymbols,
        M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
        A = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        k = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === A ? "object" : "symbol") ? Symbol.toStringTag : null,
        R = Object.prototype.propertyIsEnumerable,
        N = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
            return e.__proto__
        } : null);

    function I(e, t) {
        if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || S.call(/e/, t)) return t;
        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof e) {
            var r = e < 0 ? -C(-e) : C(e);
            if (r !== e) {
                var i = String(r),
                    a = b.call(t, i.length + 1);
                return v.call(i, n, "$&_") + "." + v.call(v.call(a, /([0-9]{3})/g, "$&_"), /_$/, "")
            }
        }
        return v.call(t, n, "$&_")
    }
    var L = n("771673"),
        P = L.custom,
        F = j(P) ? P : null;

    function B(e, t, n) {
        var r = "double" === (n.quoteStyle || t) ? '"' : "'";
        return r + e + r
    }
    e.exports = function e(t, r, i, s) {
        var u = r || {};
        if (H(u, "quoteStyle") && "single" !== u.quoteStyle && "double" !== u.quoteStyle) throw TypeError('option "quoteStyle" must be "single" or "double"');
        if (H(u, "maxStringLength") && ("number" == typeof u.maxStringLength ? u.maxStringLength < 0 && u.maxStringLength !== 1 / 0 : null !== u.maxStringLength)) throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = !H(u, "customInspect") || u.customInspect;
        if ("boolean" != typeof m && "symbol" !== m) throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (H(u, "indent") && null !== u.indent && "	" !== u.indent && !(parseInt(u.indent, 10) === u.indent && u.indent > 0)) throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (H(u, "numericSeparator") && "boolean" != typeof u.numericSeparator) throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var y = u.numericSeparator;
        if (void 0 === t) return "undefined";
        if (null === t) return "null";
        if ("boolean" == typeof t) return t ? "true" : "false";
        if ("string" == typeof t) return function e(t, n) {
            if (t.length > n.maxStringLength) {
                var r = t.length - n.maxStringLength;
                return e(b.call(t, 0, n.maxStringLength), n) + ("... " + r + " more character") + (r > 1 ? "s" : "")
            }
            return B(v.call(v.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, $), "single", n)
        }(t, u);
        if ("number" == typeof t) {
            if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
            var S = String(t);
            return y ? I(t, S) : S
        }
        if ("bigint" == typeof t) {
            var C = String(t) + "n";
            return y ? I(t, C) : C
        }
        var O = void 0 === u.depth ? 5 : u.depth;
        if (void 0 === i && (i = 0), i >= O && O > 0 && "object" == typeof t) return U(t) ? "[Array]" : "[Object]";
        var P = function(e, t) {
            var n;
            if ("	" === e.indent) n = "	";
            else {
                if ("number" != typeof e.indent || !(e.indent > 0)) return null;
                n = w.call(Array(e.indent + 1), " ")
            }
            return {
                base: n,
                prev: w.call(Array(t + 1), n)
            }
        }(u, i);
        if (void 0 === s) s = [];
        else if (V(s, t) >= 0) return "[Circular]";

        function z(t, n, r) {
            if (n && (s = T.call(s)).push(n), r) {
                var a = {
                    depth: u.depth
                };
                return H(u, "quoteStyle") && (a.quoteStyle = u.quoteStyle), e(t, a, i + 1, s)
            }
            return e(t, u, i + 1, s)
        }
        if ("function" == typeof t && !Y(t)) {
            var X = function(e) {
                    if (e.name) return e.name;
                    var t = _.call(g.call(e), /^function\s*([\w$]+)/);
                    return t ? t[1] : null
                }(t),
                J = Z(t, z);
            return "[Function" + (X ? ": " + X : " (anonymous)") + "]" + (J.length > 0 ? " { " + w.call(J, ", ") + " }" : "")
        }
        if (j(t)) {
            var ee = A ? v.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : M.call(t);
            return "object" != typeof t || A ? ee : W(ee)
        }
        if (function(e) {
                return !!e && "object" == typeof e && (!!("undefined" != typeof HTMLElement && e instanceof HTMLElement) || "string" == typeof e.nodeName && "function" == typeof e.getAttribute)
            }(t)) {
            for (var et = "<" + E.call(String(t.nodeName)), en = t.attributes || [], er = 0; er < en.length; er++) et += " " + en[er].name + "=" + B(function(e) {
                return v.call(String(e), /"/g, "&quot;")
            }(en[er].value), "double", u);
            return et += ">", t.childNodes && t.childNodes.length && (et += "..."), et += "</" + E.call(String(t.nodeName)) + ">"
        }
        if (U(t)) {
            if (0 === t.length) return "[]";
            var ei = Z(t, z);
            return P && ! function(e) {
                for (var t = 0; t < e.length; t++)
                    if (V(e[t], "\n") >= 0) return !1;
                return !0
            }(ei) ? "[" + Q(ei, P) + "]" : "[ " + w.call(ei, ", ") + " ]"
        }
        if (function(e) {
                return "[object Error]" === G(e) && (!k || !("object" == typeof e && k in e))
            }(t)) {
            var ea = Z(t, z);
            return "cause" in Error.prototype || !("cause" in t) || R.call(t, "cause") ? 0 === ea.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + w.call(ea, ", ") + " }" : "{ [" + String(t) + "] " + w.call(x.call("[cause]: " + z(t.cause), ea), ", ") + " }"
        }
        if ("object" == typeof t && m) {
            if (F && "function" == typeof t[F] && L) return L(t, {
                depth: O - i
            });
            if ("symbol" !== m && "function" == typeof t.inspect) return t.inspect()
        }
        if (function(e) {
                if (!a || !e || "object" != typeof e) return !1;
                try {
                    a.call(e);
                    try {
                        c.call(e)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof Map
                } catch (e) {}
                return !1
            }(t)) {
            var eo = [];
            return o && o.call(t, function(e, n) {
                eo.push(z(n, t, !0) + " => " + z(e, t))
            }), q("Map", a.call(t), eo, P)
        }
        if (function(e) {
                if (!c || !e || "object" != typeof e) return !1;
                try {
                    c.call(e);
                    try {
                        a.call(e)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof Set
                } catch (e) {}
                return !1
            }(t)) {
            var es = [];
            return l && l.call(t, function(e) {
                es.push(z(e, t))
            }), q("Set", c.call(t), es, P)
        }
        if (function(e) {
                if (!d || !e || "object" != typeof e) return !1;
                try {
                    d.call(e, d);
                    try {
                        f.call(e, f)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof WeakMap
                } catch (e) {}
                return !1
            }(t)) return K("WeakMap");
        if (function(e) {
                if (!f || !e || "object" != typeof e) return !1;
                try {
                    f.call(e, f);
                    try {
                        d.call(e, d)
                    } catch (e) {
                        return !0
                    }
                    return e instanceof WeakSet
                } catch (e) {}
                return !1
            }(t)) return K("WeakSet");
        if (function(e) {
                if (!p || !e || "object" != typeof e) return !1;
                try {
                    return p.call(e), !0
                } catch (e) {}
                return !1
            }(t)) return K("WeakRef");
        if (function(e) {
                return "[object Number]" === G(e) && (!k || !("object" == typeof e && k in e))
            }(t)) return W(z(Number(t)));
        if (function(e) {
                if (!e || "object" != typeof e || !D) return !1;
                try {
                    return D.call(e), !0
                } catch (e) {}
                return !1
            }(t)) return W(z(D.call(t)));
        if (function(e) {
                return "[object Boolean]" === G(e) && (!k || !("object" == typeof e && k in e))
            }(t)) return W(h.call(t));
        if (function(e) {
                return "[object String]" === G(e) && (!k || !("object" == typeof e && k in e))
            }(t)) return W(z(String(t)));
        if ("undefined" != typeof window && t === window) return "{ [object Window] }";
        if (t === n.g) return "{ [object globalThis] }";
        if (! function(e) {
                return "[object Date]" === G(e) && (!k || !("object" == typeof e && k in e))
            }(t) && !Y(t)) {
            var eu = Z(t, z),
                ec = N ? N(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                el = t instanceof Object ? "" : "null prototype",
                ed = !ec && k && Object(t) === t && k in t ? b.call(G(t), 8, -1) : el ? "Object" : "",
                ef = (ec || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (ed || el ? "[" + w.call(x.call([], ed || [], el || []), ": ") + "] " : "");
            return 0 === eu.length ? ef + "{}" : P ? ef + "{" + Q(eu, P) + "}" : ef + "{ " + w.call(eu, ", ") + " }"
        }
        return String(t)
    };

    function U(e) {
        return "[object Array]" === G(e) && (!k || !("object" == typeof e && k in e))
    }

    function Y(e) {
        return "[object RegExp]" === G(e) && (!k || !("object" == typeof e && k in e))
    }

    function j(e) {
        if (A) return e && "object" == typeof e && e instanceof Symbol;
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || !M) return !1;
        try {
            return M.call(e), !0
        } catch (e) {}
        return !1
    }
    var z = Object.prototype.hasOwnProperty || function(e) {
        return e in this
    };

    function H(e, t) {
        return z.call(e, t)
    }

    function G(e) {
        return m.call(e)
    }

    function V(e, t) {
        if (e.indexOf) return e.indexOf(t);
        for (var n = 0, r = e.length; n < r; n++)
            if (e[n] === t) return n;
        return -1
    }

    function $(e) {
        var t = e.charCodeAt(0),
            n = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
            } [t];
        return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + y.call(t.toString(16))
    }

    function W(e) {
        return "Object(" + e + ")"
    }

    function K(e) {
        return e + " { ? }"
    }

    function q(e, t, n, r) {
        return e + " (" + t + ") {" + (r ? Q(n, r) : w.call(n, ", ")) + "}"
    }

    function Q(e, t) {
        if (0 === e.length) return "";
        var n = "\n" + t.prev + t.base;
        return n + w.call(e, "," + n) + "\n" + t.prev
    }

    function Z(e, t) {
        var n, r = U(e),
            i = [];
        if (r) {
            i.length = e.length;
            for (var a = 0; a < e.length; a++) i[a] = H(e, a) ? t(e[a], e) : ""
        }
        var o = "function" == typeof O ? O(e) : [];
        if (A) {
            n = {};
            for (var s = 0; s < o.length; s++) n["$" + o[s]] = o[s]
        }
        for (var u in e) {
            if (!!H(e, u)) {
                if (!r || String(Number(u)) !== u || !(u < e.length)) {
                    if (A && n["$" + u] instanceof Symbol) continue;
                    else S.call(/[^\w$]/, u) ? i.push(t(u, e) + ": " + t(e[u], e)) : i.push(u + ": " + t(e[u], e))
                }
            }
        }
        if ("function" == typeof O)
            for (var c = 0; c < o.length; c++) R.call(e, o[c]) && i.push("[" + t(o[c]) + "]: " + t(e[o[c]], e));
        return i
    }
}