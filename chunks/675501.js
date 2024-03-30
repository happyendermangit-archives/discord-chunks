function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        VisibilitySensor: function() {
            return p
        }
    });
    var r, o = n("470079"),
        i = n("153832"),
        a = n("168205");

    function u(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = (0, i.v4)(),
        _ = new Map,
        E = new Map,
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(I, e);
            var t, n, r, p, m, y = (t = I, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : u(e)
            });

            function I(e) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), l(u(t = y.call(this, e)), "elementId", void 0), l(u(t), "isVisible", !1);
                var t, n = e.root,
                    r = e.rootMargin,
                    o = e.threshold;
                n ? _.has(n) ? t.elementId = _.get(n) || "" : _.set(n, (0, i.v4)()) : t.elementId = d;
                var s = t.getVisibilityObserverId();
                return !E.has(s) && E.set(s, new a.VisibilityObserver({
                    root: n,
                    rootMargin: r,
                    threshold: o
                })), t
            }
            return r = I, p = [{
                key: "componentDidMount",
                value: function() {
                    if (this.props.active) {
                        var e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.getVisibilityObserver().unobserve(this)
                }
            }, {
                key: "getVisibilityObserverId",
                value: function() {
                    var e = this.props,
                        t = e.rootMargin,
                        n = e.threshold;
                    return "".concat(this.elementId, " ").concat(t, " ").concat(n)
                }
            }, {
                key: "getVisibilityObserver",
                value: function() {
                    var e = this.getVisibilityObserverId(),
                        t = E.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
            }, {
                key: "render",
                value: function() {
                    return o.Children.only(this.props.children)
                }
            }], s(r.prototype, p), m && s(r, m), I
        }(o.Component);
    l(p, "defaultProps", {
        active: !0,
        children: o.createElement("span"),
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, Number.MIN_VALUE]
    })
}