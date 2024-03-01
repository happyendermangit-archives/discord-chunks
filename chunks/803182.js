function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Redirect: function() {
            return k
        },
        Route: function() {
            return C
        },
        Router: function() {
            return b
        },
        Switch: function() {
            return j
        },
        __RouterContext: function() {
            return g
        },
        matchPath: function() {
            return P
        },
        useHistory: function() {
            return M
        },
        useLocation: function() {
            return L
        },
        useParams: function() {
            return V
        },
        useRouteMatch: function() {
            return F
        },
        withRouter: function() {
            return R
        }
    }), n("854508"), n("424973"), n("781738"), n("808653"), n("222007"), n("70102");
    var r, i, o = n("728983"),
        a = n("884691"),
        u = n.n(a);
    n("416037");
    var s = n("294094"),
        c = n("714030"),
        l = n("927854"),
        f = n("261438"),
        h = n("736671"),
        p = n.n(h);
    n("868681");
    var d = n("59079"),
        v = n("204527"),
        y = n.n(v);
    var m = ((r = (0, c.default)()).displayName = "Router-History", r);
    var g = ((i = (0, c.default)()).displayName = "Router", i),
        b = function(t) {
            function e(e) {
                var n;
                return (n = t.call(this, e) || this).state = {
                    location: e.history.location
                }, n._isMounted = !1, n._pendingLocation = null, !e.staticContext && (n.unlisten = e.history.listen(function(t) {
                    n._isMounted ? n.setState({
                        location: t
                    }) : n._pendingLocation = t
                })), n
            }(0, o.default)(e, t), e.computeRootMatch = function(t) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === t
                }
            };
            var n = e.prototype;
            return n.componentDidMount = function() {
                this._isMounted = !0, this._pendingLocation && this.setState({
                    location: this._pendingLocation
                })
            }, n.componentWillUnmount = function() {
                this.unlisten && this.unlisten()
            }, n.render = function() {
                return u.createElement(g.Provider, {
                    value: {
                        history: this.props.history,
                        location: this.state.location,
                        match: e.computeRootMatch(this.state.location.pathname),
                        staticContext: this.props.staticContext
                    }
                }, u.createElement(m.Provider, {
                    children: this.props.children || null,
                    value: this.props.history
                }))
            }, e
        }(u.Component);
    u.Component;
    var _ = function(t) {
            function e() {
                return t.apply(this, arguments) || this
            }(0, o.default)(e, t);
            var n = e.prototype;
            return n.componentDidMount = function() {
                this.props.onMount && this.props.onMount.call(this, this)
            }, n.componentDidUpdate = function(t) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, t)
            }, n.componentWillUnmount = function() {
                this.props.onUnmount && this.props.onUnmount.call(this, this)
            }, n.render = function() {
                return null
            }, e
        }(u.Component),
        x = {},
        w = 0;

    function O(t, e) {
        return void 0 === t && (t = "/"), void 0 === e && (e = {}), "/" === t ? t : (function(t) {
            if (x[t]) return x[t];
            var e = p.compile(t);
            return w < 1e4 && (x[t] = e, w++), e
        })(t)(e, {
            pretty: !0
        })
    }

    function k(t) {
        var e = t.computedMatch,
            n = t.to,
            r = t.push,
            i = void 0 !== r && r;
        return u.createElement(g.Consumer, null, function(t) {
            t || (0, l.default)(!1);
            var r = t.history,
                o = t.staticContext,
                a = i ? r.push : r.replace,
                c = (0, s.createLocation)(e ? "string" == typeof n ? O(n, e.params) : (0, f.default)({}, n, {
                    pathname: O(n.pathname, e.params)
                }) : n);
            return o ? (a(c), null) : u.createElement(_, {
                onMount: function() {
                    a(c)
                },
                onUpdate: function(t, e) {
                    var n = (0, s.createLocation)(e.to);
                    !(0, s.locationsAreEqual)(n, (0, f.default)({}, c, {
                        key: n.key
                    })) && a(c)
                },
                to: n
            })
        })
    }
    var S = {},
        E = 0;

    function P(t, e) {
        void 0 === e && (e = {}), ("string" == typeof e || Array.isArray(e)) && (e = {
            path: e
        });
        var n = e,
            r = n.path,
            i = n.exact,
            o = void 0 !== i && i,
            a = n.strict,
            u = void 0 !== a && a,
            s = n.sensitive,
            c = void 0 !== s && s;
        return [].concat(r).reduce(function(e, n) {
            if (!n && "" !== n) return null;
            if (e) return e;
            var r = function(t, e) {
                    var n = "" + e.end + e.strict + e.sensitive,
                        r = S[n] || (S[n] = {});
                    if (r[t]) return r[t];
                    var i = [],
                        o = {
                            regexp: p(t, i, e),
                            keys: i
                        };
                    return E < 1e4 && (r[t] = o, E++), o
                }(n, {
                    end: o,
                    strict: u,
                    sensitive: c
                }),
                i = r.regexp,
                a = r.keys,
                s = i.exec(t);
            if (!s) return null;
            var l = s[0],
                f = s.slice(1),
                h = t === l;
            return o && !h ? null : {
                path: n,
                url: "/" === n && "" === l ? "/" : l,
                isExact: h,
                params: a.reduce(function(t, e, n) {
                    return t[e.name] = f[n], t
                }, {})
            }
        }, null)
    }
    var C = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return (0, o.default)(e, t), e.prototype.render = function() {
            var t = this;
            return u.createElement(g.Consumer, null, function(e) {
                e || (0, l.default)(!1);
                var n = t.props.location || e.location,
                    r = t.props.computedMatch ? t.props.computedMatch : t.props.path ? P(n.pathname, t.props) : e.match,
                    i = (0, f.default)({}, e, {
                        location: n,
                        match: r
                    }),
                    o = t.props,
                    a = o.children,
                    s = o.component,
                    c = o.render;
                return Array.isArray(a) && 0 === a.length && (a = null), u.createElement(g.Provider, {
                    value: i
                }, i.match ? a ? "function" == typeof a ? a(i) : a : s ? u.createElement(s, i) : c ? c(i) : null : "function" == typeof a ? a(i) : null)
            })
        }, e
    }(u.Component);

    function A(t) {
        return "/" === t.charAt(0) ? t : "/" + t
    }
    u.Component;
    var j = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return (0, o.default)(e, t), e.prototype.render = function() {
            var t = this;
            return u.createElement(g.Consumer, null, function(e) {
                e || (0, l.default)(!1);
                var n, r, i = t.props.location || e.location;
                return u.Children.forEach(t.props.children, function(t) {
                    if (null == r && u.isValidElement(t)) {
                        n = t;
                        var o = t.props.path || t.props.from;
                        r = o ? P(i.pathname, (0, f.default)({}, t.props, {
                            path: o
                        })) : e.match
                    }
                }), r ? u.cloneElement(n, {
                    location: i,
                    computedMatch: r
                }) : null
            })
        }, e
    }(u.Component);

    function R(t) {
        var e = "withRouter(" + (t.displayName || t.name) + ")",
            n = function(e) {
                var n = e.wrappedComponentRef,
                    r = (0, d.default)(e, ["wrappedComponentRef"]);
                return u.createElement(g.Consumer, null, function(e) {
                    return e || (0, l.default)(!1), u.createElement(t, (0, f.default)({}, r, e, {
                        ref: n
                    }))
                })
            };
        return n.displayName = e, n.WrappedComponent = t, y(n, t)
    }
    var T = u.useContext;

    function M() {
        return T(m)
    }

    function L() {
        return T(g).location
    }

    function V() {
        var t = T(g).match;
        return t ? t.params : {}
    }

    function F(t) {
        var e = L(),
            n = T(g).match;
        return t ? P(e.pathname, t) : n
    }
}