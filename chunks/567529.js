function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("736336");

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
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
            }), t && d(e, t)
        }(p, e);
        var t, n, r, i, _, E = (t = p, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function p(e) {
            var t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), c(s(t = E.call(this, e)), "unmounting", !1), c(s(t), "state", {
                loaded: !1
            }), t.initialize(), t
        }
        return r = p, i = [{
            key: "componentDidUpdate",
            value: function(e) {
                var t = this;
                e.src !== this.props.src && this.setState({
                    loaded: !1
                }, function() {
                    return t.initialize()
                })
            }
        }, {
            key: "initialize",
            value: function() {
                var e, t = this;
                (e = this.props.src, new Promise(function(t, n) {
                    null == e && n(Error("No image src passed"));
                    var r = new Image;
                    r.src = e, r.onload = function() {
                        return t(r)
                    }, r.onerror = function(e) {
                        return n(e)
                    }
                })).then(function() {
                    !t.unmounting && t.setState({
                        loaded: !0
                    })
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.unmounting = !0
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n = this.props,
                    r = n.className,
                    i = n.src,
                    s = n.alt,
                    l = n.width,
                    f = n.height,
                    d = n.onLoad,
                    _ = n.style,
                    E = n.imageClassName,
                    p = this.state.loaded;
                return o.createElement("div", {
                    className: r,
                    style: (e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                c(e, t, n[t])
                            })
                        }
                        return e
                    }({}, _), t = (t = {
                        width: l,
                        height: f
                    }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e)
                }, o.createElement("img", {
                    className: a()(u.image, E, c({}, u.loaded, p)),
                    width: l,
                    height: f,
                    src: i,
                    alt: s,
                    onLoad: d
                }))
            }
        }], l(r.prototype, i), _ && l(r, _), p
    }(o.PureComponent);
    c(_, "defaultProps", {
        width: 0,
        height: 0,
        alt: ""
    }), t.default = _
}