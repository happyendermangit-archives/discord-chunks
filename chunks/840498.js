function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        astToString: function() {
            return r
        },
        constrainAst: function() {
            return function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(t)) {
                    let r = t.length;
                    for (let s = 0; s < r; s++) {
                        let r = e(t[s], n);
                        if (r === i) {
                            t.length = s;
                            break
                        }
                        t[s] = r
                    }
                } else if ("text" !== t.type) {
                    if (n.limit -= 1, n.limit <= 0) return i;
                    Array.isArray(t.content) && (t.content = e(t.content, n))
                }
                return t
            }
        },
        flattenAst: function() {
            return function e(t) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(t)) {
                    let i = t.length,
                        r = [];
                    for (let s = 0; s < i; s++) ! function(e, t) {
                        if (Array.isArray(t)) {
                            let {
                                length: n
                            } = t;
                            for (let i = 0; i < n; i++) e.push(t[i]);
                            return
                        }
                        e.push(t)
                    }(r, e(t[s], n));
                    return r
                }
                return (null != t.content && (t.content = e(t.content, t)), null != n && t.type === n.type) ? t.content : t
            }
        }
    }), n("653041");
    let i = {};

    function r(e) {
        return (function e(t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Array.isArray(t) ? t.forEach(t => e(t, n)) : "string" == typeof t.content ? n.push(t.content) : null != t.content && e(t.content, n), n
        })(e).join("")
    }
}