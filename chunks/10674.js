function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        normalize: function() {
            return s
        },
        normalizeToSize: function() {
            return function t(e, n = 3, r = 102400) {
                let i = s(e, n);
                return function(t) {
                    return ~-encodeURI(JSON.stringify(t)).split(/%..|./).length
                }(i) > r ? t(e, n - 1, r) : i
            }
        }
    });
    var r = n("46834"),
        i = n("537198"),
        a = n("442853"),
        o = n("432038");

    function s(t, e = 100, s = 1 / 0) {
        try {
            return function t(e, s, u = 1 / 0, c = 1 / 0, l = (0, i.memoBuilder)()) {
                let [d, f] = l;
                if (null == s || ["number", "boolean", "string"].includes(typeof s) && !(0, r.isNaN)(s)) return s;
                let p = function(t, e) {
                    try {
                        if ("domain" === t && e && "object" == typeof e && e._events) return "[Domain]";
                        if ("domainEmitter" === t) return "[DomainEmitter]";
                        if (void 0 !== n.g && e === n.g) return "[Global]";
                        if ("undefined" != typeof window && e === window) return "[Window]";
                        if ("undefined" != typeof document && e === document) return "[Document]";
                        if ((0, r.isSyntheticEvent)(e)) return "[SyntheticEvent]";
                        if ("number" == typeof e && e != e) return "[NaN]";
                        if ("function" == typeof e) return `[Function: ${(0,o.getFunctionName)(e)}]`;
                        if ("symbol" == typeof e) return `[${String(e)}]`;
                        if ("bigint" == typeof e) return `[BigInt: ${String(e)}]`;
                        let i = function(t) {
                            let e = Object.getPrototypeOf(t);
                            return e ? e.constructor.name : "null prototype"
                        }(e);
                        if (/^HTML(\w*)Element$/.test(i)) return `[HTMLElement: ${i}]`;
                        return `[object ${i}]`
                    } catch (t) {
                        return `**non-serializable** (${t})`
                    }
                }(e, s);
                if (!p.startsWith("[object ")) return p;
                if (s.__sentry_skip_normalization__) return s;
                let h = "number" == typeof s.__sentry_override_normalization_depth__ ? s.__sentry_override_normalization_depth__ : u;
                if (0 === h) return p.replace("object ", "");
                if (d(s)) return "[Circular ~]";
                if (s && "function" == typeof s.toJSON) try {
                    let e = s.toJSON();
                    return t("", e, h - 1, c, l)
                } catch (t) {}
                let _ = Array.isArray(s) ? [] : {},
                    g = 0,
                    m = (0, a.convertToPlainObject)(s);
                for (let e in m) {
                    if (!Object.prototype.hasOwnProperty.call(m, e)) continue;
                    if (g >= c) {
                        _[e] = "[MaxProperties ~]";
                        break
                    }
                    let n = m[e];
                    _[e] = t(e, n, h - 1, c, l), g++
                }
                return f(s), _
            }("", t, e, s)
        } catch (t) {
            return {
                ERROR: `**non-serializable** (${t})`
            }
        }
    }
}