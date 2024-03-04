function(e, t, n) {
    "use strict";

    function r(e) {
        return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
    }
    n.r(t), n.d(t, {
        createStore: function() {
            return a
        }
    }), n("781738"), n("70102"), n("424973"), n("808653"), n("466501");
    var i = "function" == typeof Symbol && Symbol.observable || "@@observable",
        o = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        },
        s = {
            INIT: "@@redux/INIT" + o(),
            REPLACE: "@@redux/REPLACE" + o(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + o()
            }
        };

    function a(e, t, n) {
        if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3]) throw Error(r(0));
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw Error(r(1));
            return n(a)(e, t)
        }
        if ("function" != typeof e) throw Error(r(2));
        var o, c = e,
            u = t,
            d = [],
            l = d,
            f = !1;

        function p() {
            l === d && (l = d.slice())
        }

        function h() {
            if (f) throw Error(r(3));
            return u
        }

        function v(e) {
            if ("function" != typeof e) throw Error(r(4));
            if (f) throw Error(r(5));
            var t = !0;
            return p(), l.push(e),
                function() {
                    if (t) {
                        if (f) throw Error(r(6));
                        t = !1, p();
                        var n = l.indexOf(e);
                        l.splice(n, 1), d = null
                    }
                }
        }

        function g(e) {
            if (! function(e) {
                    if ("object" != typeof e || null === e) return !1;
                    for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                    return Object.getPrototypeOf(e) === t
                }(e)) throw Error(r(7));
            if (void 0 === e.type) throw Error(r(8));
            if (f) throw Error(r(9));
            try {
                f = !0, u = c(u, e)
            } finally {
                f = !1
            }
            for (var t = d = l, n = 0; n < t.length; n++)(0, t[n])();
            return e
        }
        return g({
            type: s.INIT
        }), (o = {
            dispatch: g,
            subscribe: v,
            getState: h,
            replaceReducer: function(e) {
                if ("function" != typeof e) throw Error(r(10));
                c = e, g({
                    type: s.REPLACE
                })
            }
        })[i] = function() {
            var e;
            return (e = {
                subscribe: function(e) {
                    if ("object" != typeof e || null === e) throw Error(r(11));

                    function t() {
                        e.next && e.next(h())
                    }
                    return t(), {
                        unsubscribe: v(t)
                    }
                }
            })[i] = function() {
                return this
            }, e
        }, o
    }
}