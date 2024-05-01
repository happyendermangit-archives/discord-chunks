function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i),
        s = n("840498");

    function a(e, t, n, i, r) {
        let a;
        return !n && (t += "\n\n"), a = e(t, {
            inline: n,
            ...i
        }), a = (0, s.flattenAst)(a), a = (0, s.constrainAst)(a), null != r && (a = r(a, n)), a
    }
    t.default = {
        reactParserFor(e) {
            let t = r().parserFor(e),
                n = r().reactFor(r().ruleOutput(e, "react"));
            return function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return n(a(t, e, i, r, s), r)
            }
        },
        astParserFor(e) {
            let t = r().parserFor(e);
            return function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return a(t, e, n, i, r)
            }
        }
    }
}