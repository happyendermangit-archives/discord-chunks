function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        astToString: function() {
            return o
        },
        constrainAst: function() {
            return function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    limit: 200
                };
                if (Array.isArray(t)) {
                    for (var o = t.length, i = 0; i < o; i++) {
                        var a = e(t[i], n);
                        if (a === r) {
                            t.length = i;
                            break
                        }
                        t[i] = a
                    }
                } else if ("text" !== t.type) {
                    if (n.limit -= 1, n.limit <= 0) return r;
                    Array.isArray(t.content) && (t.content = e(t.content, n))
                }
                return t
            }
        },
        flattenAst: function() {
            return function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (Array.isArray(t)) {
                    for (var r = t.length, o = [], i = 0; i < r; i++) ! function(e, t) {
                        if (Array.isArray(t)) {
                            for (var n = t.length, r = 0; r < n; r++) e.push(t[r]);
                            return
                        }
                        e.push(t)
                    }(o, e(t[i], n));
                    return o
                }
                return (null != t.content && (t.content = e(t.content, t)), null != n && t.type === n.type) ? t.content : t
            }
        }
    });
    var r = {};

    function o(e) {
        return (function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Array.isArray(t) ? t.forEach(function(t) {
                return e(t, n)
            }) : "string" == typeof t.content ? n.push(t.content) : null != t.content && e(t.content, n), n
        })(e).join("")
    }
}