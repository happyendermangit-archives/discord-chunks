function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TransitionGroup: function() {
            return _
        }
    });
    var r, o = n("470079"),
        i = n("37011");

    function a(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function c(e, t) {
        return (c = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function f(e) {
        var t = function(e, t) {
            if ("object" !== d(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" !== d(r)) return r;
                throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === d(t) ? t : String(t)
    }

    function d(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }
    var _ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && c(e, t)
        }(m, e);
        var t, n, r, _, E, p = (t = m, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = l(t);
            if (n) {
                var u = l(this).constructor;
                o = Reflect.construct(i, arguments, u)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === d(r) || "function" == typeof r) ? r : a(e)
        });

        function m(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, m), s(a(t = p.call(this, e)), "_currentlyTransitioningKeys", void 0), s(a(t), "_keysToEnter", void 0), s(a(t), "_keysToLeave", void 0), s(a(t), "_isMounted", void 0), s(a(t), "_keyChildMapping", {}), s(a(t), "addChildRef", function(e, n) {
                t._keyChildMapping[e] = n
            }), t.state = {
                children: (0, i.getChildMapping)(e.children),
                firstRender: !0
            }, t._currentlyTransitioningKeys = new Set, t._keysToEnter = [], t._keysToLeave = [], t._isMounted = !1, t
        }
        return r = m, _ = [{
            key: "componentDidMount",
            value: function() {
                this._isMounted = !0;
                var e = this.state.children;
                if (this.props.transitionAppear)
                    for (var t in e) e[t] && this.performAppear(t)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._isMounted = !1, this._keyChildMapping = {}, this.state.children = {}
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (e !== this.props) {
                    var n = (0, i.getChildMapping)(this.props.children),
                        r = t.children;
                    if (this.props.transitionEnter ? this._enqueueTransitions(n, r, this._keysToEnter) : this._keysToEnter.length && (this._keysToEnter = []), this.props.transitionLeave) this._enqueueTransitions(r, n, this._keysToLeave);
                    else {
                        var o = [];
                        this._enqueueTransitions(r, n, o);
                        for (var a = (0, i.mergeChildMappings)(r, n), u = 0, s = o.length; u < s; u++) delete a[o[u]];
                        this._isMounted && this.setState({
                            children: a
                        }), this._keysToLeave.length && (this._keysToLeave = [])
                    }
                }
                if (this._keysToEnter.length) {
                    var l = this._keysToEnter;
                    this._keysToEnter = [], l.forEach(this.performEnter, this)
                }
                if (this._keysToLeave.length) {
                    var c = this._keysToLeave;
                    this._keysToLeave = [], c.forEach(this.performLeave, this)
                }
            }
        }, {
            key: "_enqueueTransitions",
            value: function(e, t, n) {
                for (var r in e) {
                    var o = t && t.hasOwnProperty(r);
                    e[r] && !o && !this._currentlyTransitioningKeys.has(r) && n.push(r)
                }
            }
        }, {
            key: "_perform",
            value: function(e, t, n) {
                var r = this,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this._currentlyTransitioningKeys.add(e);
                var i = function() {
                        return r._handleDonePerform(e, n, o)
                    },
                    a = this._keyChildMapping[e];
                null != a && null != a[t] ? a[t](i) : i()
            }
        }, s({
            key: "_handleDonePerform"
        }, "value", function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = this._keyChildMapping[e];
            null != r && null != r[t] && r[t](), this._currentlyTransitioningKeys.delete(e);
            var o = (0, i.getChildMapping)(this.props.children);
            n ? null != o && o.hasOwnProperty(e) ? this.performEnter(e) : this.setState(function(t) {
                var n = t.children;
                return n[e], {
                    children: function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < i.length; r++) {
                                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                            }
                        }
                        return o
                    }(n, [e].map(f))
                }
            }) : (null == o || !o.hasOwnProperty(e)) && this.performLeave(e)
        }), {
            key: "performAppear",
            value: function(e) {
                this._perform(e, "componentWillAppear", "componentDidAppear")
            }
        }, {
            key: "performEnter",
            value: function(e) {
                this._perform(e, "componentWillEnter", "componentDidEnter")
            }
        }, {
            key: "performLeave",
            value: function(e) {
                this._perform(e, "componentWillLeave", "componentDidLeave", !0)
            }
        }, {
            key: "render",
            value: function() {
                var e = function(e) {
                        var n = a[e];
                        null != n && o.isValidElement(n) && u.push(o.cloneElement(null == r ? n : r(n), {
                            ref: function(n) {
                                return t.addChildRef(e, n)
                            },
                            key: e
                        }))
                    },
                    t = this,
                    n = this.props,
                    r = n.childFactory,
                    i = n.component,
                    a = this.state.children,
                    u = [];
                for (var l in a) e(l);
                var c = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            s(e, t, n[t])
                        })
                    }
                    return e
                }({}, this.props);
                return Object.keys(m.defaultProps).forEach(function(e) {
                    return delete c[e]
                }), o.createElement(i, c, u)
            }
        }], E = [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                var n = t.children,
                    r = t.firstRender,
                    o = (0, i.getChildMapping)(e.children);
                return {
                    children: r ? o : (0, i.mergeChildMappings)(n, o),
                    firstRender: !1
                }
            }
        }], _ && u(r.prototype, _), E && u(r, E), m
    }(o.Component);
    s(_, "defaultProps", {
        component: "span",
        transitionAppear: !0,
        transitionLeave: !0,
        transitionEnter: !0,
        childFactory: null
    })
}