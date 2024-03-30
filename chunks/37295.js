function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        statesWillNeverBeEqual: function() {
            return s
        },
        useStateFromStores: function() {
            return l
        },
        useStateFromStoresArray: function() {
            return f
        },
        useStateFromStoresObject: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("252546"),
        i = n("483424");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
        return e === t
    }

    function s(e, t) {
        return !1
    }

    function l(e, t, n) {
        var s, l, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u,
            f = (0, r.useRef)({
                stores: e,
                areStatesEqual: c,
                getStateFromStores: t,
                prevDeps: void 0,
                state: void 0
            }).current,
            d = f.state;
        if (null == n || !(0, o.areArraysShallowEqual)(n, f.prevDeps)) {
            var _ = t();
            (null == d || !c(d, _)) && (d = _)
        }(0, r.useLayoutEffect)(function() {
            f.getStateFromStores = t, f.prevDeps = n, f.state = d
        });
        var E = (s = (0, r.useState)(null), l = 2, function(e) {
            if (Array.isArray(e)) return e
        }(s) || function(e, t) {
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
        }(s, l) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(s, l) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }())[1];
        return (0, r.useLayoutEffect)(function() {
            var t = function() {
                var e = f.getStateFromStores();
                !c(f.state, e) && (f.state = e, E({}))
            };
            t();
            var n = new i.BatchedStoreListener(e, t);
            return n.attach("useStateFromStores"),
                function() {
                    return n.detach()
                }
        }, []), d
    }

    function c(e, t, n) {
        return l(e, t, n, o.default)
    }

    function f(e, t, n) {
        return l(e, t, n, o.areArraysShallowEqual)
    }
}