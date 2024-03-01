function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        normalize: function() {
            return o
        },
        normalizeToSize: function() {
            return function t(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 102400,
                    i = o(e, n);
                return function(t) {
                    return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
                }(i) > r ? t(e, n - 1, r) : i
            }
        }
    }), n("222007"), n("781738"), n("274635");
    var r = n("825167"),
        i = n("719928"),
        a = n("654069"),
        s = n("979605");

    function o(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0;
        try {
            return function t(e, o) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                    u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : (0, i.memoBuilder)(),
                    [d, h] = u;
                if (null == o || ["number", "boolean", "string"].includes(typeof o) && !(0, r.isNaN)(o)) return o;
                let f = function(t, e) {
                    try {
                        if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                        if ("domainEmitter" === t) return "[DomainEmitter]";
                        if (void 0 !== n.g && e === n.g) return "[Global]";
                        if ("undefined" != typeof window && e === window) return "[Window]";
                        if ("undefined" != typeof document && e === document) return "[Document]";
                        if ((0, r.isSyntheticEvent)(e)) return "[SyntheticEvent]";
                        if ("number" == typeof e && e != e) return "[NaN]";
                        if ("function" == typeof e) return "[Function: ".concat((0, s.getFunctionName)(e), "]");
                        if ("symbol" == typeof e) return "[".concat(String(e), "]");
                        if ("bigint" == typeof e) return "[BigInt: ".concat(String(e), "]");
                        let i = function(t) {
                            let e = Object.getPrototypeOf(t);
                            return e ? e.constructor.name : "null prototype"
                        }(e);
                        if (/^HTML(\w*)Element$/.test(i)) return "[HTMLElement: ".concat(i, "]");
                        return "[object ".concat(i, "]")
                    } catch (t) {
                        return "**non-serializable** (".concat(t, ")")
                    }
                }(e, o);
                if (!f.startsWith("[object ")) return f;
                if (o.__sentry_skip_normalization__) return o;
                let p = "number" == typeof o.__sentry_override_normalization_depth__ ? o.__sentry_override_normalization_depth__ : c;
                if (0 === p) return f.replace("object ", "");
                if (d(o)) return "[Circular ~]";
                if (o && "function" == typeof o.toJSON) try {
                    let e = o.toJSON();
                    return t("", e, p - 1, l, u)
                } catch (t) {}
                let _ = Array.isArray(o) ? [] : {},
                    g = 0,
                    m = (0, a.convertToPlainObject)(o);
                for (let e in m) {
                    if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
                    if (g >= l) {
                        _[e] = "[MaxProperties ~]";
                        break
                    }
                    let n = m[e];
                    _[e] = t(e, n, p - 1, l, u), g++
                }
                return h(o), _
            }("", t, e, o)
        } catch (t) {
            return {
                ERROR: "**non-serializable** (".concat(t, ")")
            }
        }
    }
}