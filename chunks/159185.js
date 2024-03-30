function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("302454"),
        o = n.n(r),
        i = n("449275");

    function a(e, t, n, r, o) {
        var a;
        return !n && (t += "\n\n"), a = e(t, function(e) {
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
        }({
            inline: n
        }, r)), a = (0, i.flattenAst)(a), a = (0, i.constrainAst)(a), null != o && (a = o(a, n)), a
    }
    t.default = {
        reactParserFor: function(e) {
            var t = o().parserFor(e),
                n = o().reactFor(o().ruleOutput(e, "react"));
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return n(a(t, e, r, o, i), o)
            }
        },
        astParserFor: function(e) {
            var t = o().parserFor(e);
            return function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return a(t, e, n, r, o)
            }
        }
    }
}