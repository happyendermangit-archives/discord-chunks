function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("813970"),
        u = n("854106"),
        s = n("772662"),
        l = n("281767");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d() {
        var e = (0, i.useModalsStore)(function(e) {
                return !Object.entries(e).every(function(e) {
                    var t = f(e, 2);
                    return 0 === (t[0], t[1]).length
                })
            }),
            t = (0, o.useStateFromStores)([s.default], function() {
                return s.default.isOpen()
            }),
            n = (0, o.useStateFromStores)([u.default], function() {
                return u.default.hasLayers()
            }),
            c = f(r.useState(!1), 2),
            d = c[0],
            _ = c[1],
            E = (0, a.useWindowDispatch)();
        return r.useEffect(function() {
            var e = function() {
                    _(!0)
                },
                t = function() {
                    _(!1)
                };
            return E.subscribe(l.ComponentActions.POPOUT_SHOW, e), E.subscribe(l.ComponentActions.POPOUT_HIDE, t),
                function() {
                    E.unsubscribe(l.ComponentActions.POPOUT_SHOW, e), E.unsubscribe(l.ComponentActions.POPOUT_HIDE, t)
                }
        }, [E]), e || t || d || n
    }
}