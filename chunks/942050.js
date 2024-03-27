function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChildMapping: function() {
            return i
        },
        getInitialChildMapping: function() {
            return o
        },
        getNextChildMapping: function() {
            return s
        }
    });
    var r = n("470079");

    function i(e, t) {
        var n = Object.create(null);
        return e && r.Children.map(e, function(e) {
            return e
        }).forEach(function(e) {
            var i;
            n[e.key] = (i = e, t && (0, r.isValidElement)(i) ? t(i) : i)
        }), n
    }

    function a(e, t, n) {
        return null != n[t] ? n[t] : e.props[t]
    }

    function o(e, t) {
        return i(e.children, function(n) {
            return (0, r.cloneElement)(n, {
                onExited: t.bind(null, n),
                in: !0,
                appear: a(n, "appear", e),
                enter: a(n, "enter", e),
                exit: a(n, "exit", e)
            })
        })
    }

    function s(e, t, n) {
        var o = i(e.children),
            s = function(e, t) {
                function n(n) {
                    return n in t ? t[n] : e[n]
                }
                e = e || {}, t = t || {};
                var r, i = Object.create(null),
                    a = [];
                for (var o in e) o in t ? a.length && (i[o] = a, a = []) : a.push(o);
                var s = {};
                for (var u in t) {
                    if (i[u])
                        for (r = 0; r < i[u].length; r++) {
                            var c = i[u][r];
                            s[i[u][r]] = n(c)
                        }
                    s[u] = n(u)
                }
                for (r = 0; r < a.length; r++) s[a[r]] = n(a[r]);
                return s
            }(t, o);
        return Object.keys(s).forEach(function(i) {
            var u = s[i];
            if ((0, r.isValidElement)(u)) {
                var c = i in t,
                    l = i in o,
                    d = t[i],
                    f = (0, r.isValidElement)(d) && !d.props.in;
                l && (!c || f) ? s[i] = (0, r.cloneElement)(u, {
                    onExited: n.bind(null, u),
                    in: !0,
                    exit: a(u, "exit", e),
                    enter: a(u, "enter", e)
                }) : l || !c || f ? l && c && (0, r.isValidElement)(d) && (s[i] = (0, r.cloneElement)(u, {
                    onExited: n.bind(null, u),
                    in: d.props.in,
                    exit: a(u, "exit", e),
                    enter: a(u, "enter", e)
                })) : s[i] = (0, r.cloneElement)(u, {
                    in: !1
                })
            }
        }), s
    }
}