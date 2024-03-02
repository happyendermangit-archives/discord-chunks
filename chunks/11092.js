function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getChildMapping: function() {
            return r
        },
        getInitialChildMapping: function() {
            return s
        },
        getNextChildMapping: function() {
            return o
        }
    }), n("424973");
    var i = n("884691");

    function r(t, e) {
        var n = Object.create(null);
        return t && i.Children.map(t, function(t) {
            return t
        }).forEach(function(t) {
            var r;
            n[t.key] = (r = t, e && (0, i.isValidElement)(r) ? e(r) : r)
        }), n
    }

    function a(t, e, n) {
        return null != n[e] ? n[e] : t.props[e]
    }

    function s(t, e) {
        return r(t.children, function(n) {
            return (0, i.cloneElement)(n, {
                onExited: e.bind(null, n),
                in: !0,
                appear: a(n, "appear", t),
                enter: a(n, "enter", t),
                exit: a(n, "exit", t)
            })
        })
    }

    function o(t, e, n) {
        var s = r(t.children),
            o = function(t, e) {
                function n(n) {
                    return n in e ? e[n] : t[n]
                }
                t = t || {}, e = e || {};
                var i, r = Object.create(null),
                    a = [];
                for (var s in t) s in e ? a.length && (r[s] = a, a = []) : a.push(s);
                var o = {};
                for (var l in e) {
                    if (r[l])
                        for (i = 0; i < r[l].length; i++) {
                            var u = r[l][i];
                            o[r[l][i]] = n(u)
                        }
                    o[l] = n(l)
                }
                for (i = 0; i < a.length; i++) o[a[i]] = n(a[i]);
                return o
            }(e, s);
        return Object.keys(o).forEach(function(r) {
            var l = o[r];
            if ((0, i.isValidElement)(l)) {
                var u = r in e,
                    c = r in s,
                    p = e[r],
                    d = (0, i.isValidElement)(p) && !p.props.in;
                c && (!u || d) ? o[r] = (0, i.cloneElement)(l, {
                    onExited: n.bind(null, l),
                    in: !0,
                    exit: a(l, "exit", t),
                    enter: a(l, "enter", t)
                }) : c || !u || d ? c && u && (0, i.isValidElement)(p) && (o[r] = (0, i.cloneElement)(l, {
                    onExited: n.bind(null, l),
                    in: p.props.in,
                    exit: a(l, "exit", t),
                    enter: a(l, "enter", t)
                })) : o[r] = (0, i.cloneElement)(l, {
                    in: !1
                })
            }
        }), o
    }
}