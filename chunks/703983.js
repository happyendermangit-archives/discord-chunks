function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TransitionGroup: function() {
            return c
        },
        TransitionStates: function() {
            return o
        }
    });
    var r, o, i = n("470079");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t) {
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
                if ("string" == typeof e) return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }(r = o || (o = {}))[r.MOUNTED = 0] = "MOUNTED", r[r.ENTERED = 1] = "ENTERED", r[r.YEETED = 2] = "YEETED";
    var s = {};

    function l(e) {
        return e
    }

    function c(e) {
        var t = e.items,
            n = e.renderItem,
            r = e.getItemKey,
            o = e.wrapChildren,
            a = e.lazyCleanUpDelay,
            c = i.useRef(-1);
        i.useLayoutEffect(function() {
            return function() {
                return clearTimeout(c.current)
            }
        });
        var f = u(i.useState(s), 2)[1],
            d = i.useRef(null),
            _ = i.useMemo(function() {
                var e = new Set(null === (l = d.current) || void 0 === l ? void 0 : l.keys()),
                    o = new Map(d.current),
                    i = !0,
                    u = !1,
                    s = void 0;
                try {
                    for (var l, _, E = t[Symbol.iterator](); !(i = (_ = E.next()).done); i = !0) ! function() {
                        var t = _.value,
                            i = r(t),
                            u = o.get(i);
                        if (null == u) {
                            var s = null != d.current ? 1 : 0,
                                l = function() {
                                    var e, t, n = null === (e = d.current) || void 0 === e ? void 0 : e.get(i);
                                    null == n || (2 === n.state ? (null === (t = d.current) || void 0 === t || t.delete(i), null != a ? (clearTimeout(c.current), c.current = setTimeout(function() {
                                        return f({})
                                    }, a)) : f({})) : __DEV__ && console.warn("SimpleTransitionGroup.cleanUp: Attempted to remove an item that isn't yeetable: ".concat(i)))
                                },
                                E = n(i, t, s, l);
                            u = {
                                item: t,
                                children: E,
                                state: s,
                                cleanUp: l,
                                renderItem: n
                            }
                        } else if (u.item !== t || u.renderItem !== n || 2 === u.state) {
                            var p = u.cleanUp,
                                m = 2 === u.state ? 1 : u.state,
                                y = n(i, t, m, u.cleanUp);
                            u = {
                                item: t,
                                children: y,
                                state: m,
                                cleanUp: p,
                                renderItem: n
                            }
                        }
                        o.set(i, u), e.delete(i)
                    }()
                } catch (e) {
                    u = !0, s = e
                } finally {
                    try {
                        !i && null != E.return && E.return()
                    } finally {
                        if (u) throw s
                    }
                }
                var p = !0,
                    m = !1,
                    y = void 0;
                try {
                    for (var I, h = e[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                        var O = I.value,
                            T = o.get(O);
                        if (null != T) {
                            if (2 !== T.state || T.renderItem !== n) {
                                var S = T.item,
                                    v = T.cleanUp,
                                    g = n(O, T.item, 2, T.cleanUp);
                                T = {
                                    item: S,
                                    children: g,
                                    state: 2,
                                    cleanUp: v,
                                    renderItem: n
                                }, null != T.children ? o.set(O, T) : o.delete(O)
                            } else o.set(O, T)
                        }
                    }
                } catch (e) {
                    m = !0, y = e
                } finally {
                    try {
                        !p && null != h.return && h.return()
                    } finally {
                        if (m) throw y
                    }
                }
                return o
            }, [t, r, n, a]);
        i.useInsertionEffect(function() {
            return d.current = _,
                function() {
                    var e;
                    return null === (e = d.current) || void 0 === e ? void 0 : e.clear()
                }
        }, [_]);
        var E = [],
            p = !0,
            m = !1,
            y = void 0;
        try {
            for (var I, h = _[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                var O = u(I.value, 2)[1];
                E.push(O.children)
            }
        } catch (e) {
            m = !0, y = e
        } finally {
            try {
                !p && null != h.return && h.return()
            } finally {
                if (m) throw y
            }
        }
        return i.createElement(i.Fragment, null, E.length > 0 ? (void 0 === o ? l : o)(E) : null)
    }
}