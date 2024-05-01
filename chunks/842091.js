function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i),
        a = n("840498");

    function s(e, t, n, i, r) {
        let s;
        return !n && (t += "\n\n"), s = e(t, {
            inline: n,
            ...i
        }), s = (0, a.flattenAst)(s), s = (0, a.constrainAst)(s), null != r && (s = r(s, n)), s
    }
    t.default = {
        reactParserFor(e) {
            let t = r().parserFor(e),
                n = r().reactFor(r().ruleOutput(e, "react"));
            return function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return n(s(t, e, i, r, a), r)
            }
        },
        astParserFor(e) {
            let t = r().parserFor(e);
            return function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return s(t, e, n, i, r)
            }
        }
    }
}