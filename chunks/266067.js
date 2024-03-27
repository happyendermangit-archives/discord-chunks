function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Redirect: function() {
            return w
        },
        Route: function() {
            return O
        },
        Router: function() {
            return v
        },
        Switch: function() {
            return A
        },
        __RouterContext: function() {
            return b
        },
        matchPath: function() {
            return D
        },
        useHistory: function() {
            return N
        },
        useLocation: function() {
            return I
        },
        useParams: function() {
            return L
        },
        useRouteMatch: function() {
            return P
        },
        withRouter: function() {
            return k
        }
    });
    var r, i, a = n("782726"),
        o = n("470079"),
        s = n.n(o);
    n("476400");
    var u = n("539528"),
        c = n("177632"),
        l = n("568895"),
        d = n("194649"),
        f = n("33382"),
        p = n.n(f);
    n("165566");
    var h = n("226512"),
        m = n("26095"),
        g = n.n(m);
    var _ = ((r = (0, c.default)()).displayName = "Router-History", r);
    var b = ((i = (0, c.default)()).displayName = "Router", i),
        v = function(e) {
            function t(t) {
                var n;
                return (n = e.call(this, t) || this).state = {
                    location: t.history.location
                }, n._isMounted = !1, n._pendingLocation = null, !t.staticContext && (n.unlisten = t.history.listen(function(e) {
                    n._isMounted ? n.setState({
                        location: e
                    }) : n._pendingLocation = e
                })), n
            }(0, a.default)(t, e), t.computeRootMatch = function(e) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: "/" === e
                }
            };
            var n = t.prototype;
            return n.componentDidMount = function() {
                this._isMounted = !0, this._pendingLocation && this.setState({
                    location: this._pendingLocation
                })
            }, n.componentWillUnmount = function() {
                this.unlisten && this.unlisten()
            }, n.render = function() {
                return s().createElement(b.Provider, {
                    value: {
                        history: this.props.history,
                        location: this.state.location,
                        match: t.computeRootMatch(this.state.location.pathname),
                        staticContext: this.props.staticContext
                    }
                }, s().createElement(_.Provider, {
                    children: this.props.children || null,
                    value: this.props.history
                }))
            }, t
        }(s().Component);
    s().Component;
    var y = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }(0, a.default)(t, e);
            var n = t.prototype;
            return n.componentDidMount = function() {
                this.props.onMount && this.props.onMount.call(this, this)
            }, n.componentDidUpdate = function(e) {
                this.props.onUpdate && this.props.onUpdate.call(this, this, e)
            }, n.componentWillUnmount = function() {
                this.props.onUnmount && this.props.onUnmount.call(this, this)
            }, n.render = function() {
                return null
            }, t
        }(s().Component),
        E = {},
        S = 0;

    function x(e, t) {
        return void 0 === e && (e = "/"), void 0 === t && (t = {}), "/" === e ? e : (function(e) {
            if (E[e]) return E[e];
            var t = p().compile(e);
            return S < 1e4 && (E[e] = t, S++), t
        })(e)(t, {
            pretty: !0
        })
    }

    function w(e) {
        var t = e.computedMatch,
            n = e.to,
            r = e.push,
            i = void 0 !== r && r;
        return s().createElement(b.Consumer, null, function(e) {
            e || (0, l.default)(!1);
            var r = e.history,
                a = e.staticContext,
                o = i ? r.push : r.replace,
                c = (0, u.createLocation)(t ? "string" == typeof n ? x(n, t.params) : (0, d.default)({}, n, {
                    pathname: x(n.pathname, t.params)
                }) : n);
            return a ? (o(c), null) : s().createElement(y, {
                onMount: function() {
                    o(c)
                },
                onUpdate: function(e, t) {
                    var n = (0, u.createLocation)(t.to);
                    !(0, u.locationsAreEqual)(n, (0, d.default)({}, c, {
                        key: n.key
                    })) && o(c)
                },
                to: n
            })
        })
    }
    var T = {},
        C = 0;

    function D(e, t) {
        void 0 === t && (t = {}), ("string" == typeof t || Array.isArray(t)) && (t = {
            path: t
        });
        var n = t,
            r = n.path,
            i = n.exact,
            a = void 0 !== i && i,
            o = n.strict,
            s = void 0 !== o && o,
            u = n.sensitive,
            c = void 0 !== u && u;
        return [].concat(r).reduce(function(t, n) {
            if (!n && "" !== n) return null;
            if (t) return t;
            var r = function(e, t) {
                    var n = "" + t.end + t.strict + t.sensitive,
                        r = T[n] || (T[n] = {});
                    if (r[e]) return r[e];
                    var i = [],
                        a = {
                            regexp: p()(e, i, t),
                            keys: i
                        };
                    return C < 1e4 && (r[e] = a, C++), a
                }(n, {
                    end: a,
                    strict: s,
                    sensitive: c
                }),
                i = r.regexp,
                o = r.keys,
                u = i.exec(e);
            if (!u) return null;
            var l = u[0],
                d = u.slice(1),
                f = e === l;
            return a && !f ? null : {
                path: n,
                url: "/" === n && "" === l ? "/" : l,
                isExact: f,
                params: o.reduce(function(e, t, n) {
                    return e[t.name] = d[n], e
                }, {})
            }
        }, null)
    }
    var O = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return (0, a.default)(t, e), t.prototype.render = function() {
            var e = this;
            return s().createElement(b.Consumer, null, function(t) {
                t || (0, l.default)(!1);
                var n = e.props.location || t.location,
                    r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? D(n.pathname, e.props) : t.match,
                    i = (0, d.default)({}, t, {
                        location: n,
                        match: r
                    }),
                    a = e.props,
                    o = a.children,
                    u = a.component,
                    c = a.render;
                return Array.isArray(o) && 0 === o.length && (o = null), s().createElement(b.Provider, {
                    value: i
                }, i.match ? o ? "function" == typeof o ? o(i) : o : u ? s().createElement(u, i) : c ? c(i) : null : "function" == typeof o ? o(i) : null)
            })
        }, t
    }(s().Component);

    function M(e) {
        return "/" === e.charAt(0) ? e : "/" + e
    }
    s().Component;
    var A = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        return (0, a.default)(t, e), t.prototype.render = function() {
            var e = this;
            return s().createElement(b.Consumer, null, function(t) {
                t || (0, l.default)(!1);
                var n, r, i = e.props.location || t.location;
                return s().Children.forEach(e.props.children, function(e) {
                    if (null == r && s().isValidElement(e)) {
                        n = e;
                        var a = e.props.path || e.props.from;
                        r = a ? D(i.pathname, (0, d.default)({}, e.props, {
                            path: a
                        })) : t.match
                    }
                }), r ? s().cloneElement(n, {
                    location: i,
                    computedMatch: r
                }) : null
            })
        }, t
    }(s().Component);

    function k(e) {
        var t = "withRouter(" + (e.displayName || e.name) + ")",
            n = function(t) {
                var n = t.wrappedComponentRef,
                    r = (0, h.default)(t, ["wrappedComponentRef"]);
                return s().createElement(b.Consumer, null, function(t) {
                    return t || (0, l.default)(!1), s().createElement(e, (0, d.default)({}, r, t, {
                        ref: n
                    }))
                })
            };
        return n.displayName = t, n.WrappedComponent = e, g()(n, e)
    }
    var R = s().useContext;

    function N() {
        return R(_)
    }

    function I() {
        return R(b).location
    }

    function L() {
        var e = R(b).match;
        return e ? e.params : {}
    }

    function P(e) {
        var t = I(),
            n = R(b).match;
        return e ? D(t.pathname, e) : n
    }
}