function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("664183"),
        s = n("784184"),
        l = n("281767"),
        c = n("750765");

    function f(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && p(e, t)
        }(y, e);
        var t, n, r, i, s, m = (t = y, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = E(t);
            if (n) {
                var a = E(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : f(e)
        });

        function y() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = m.apply(this, arguments), _(f(e), "anim", new u.default.Value(0)), _(f(e), "animate", function(t) {
                u.default.spring(e.anim, {
                    toValue: t,
                    friction: 10,
                    tension: 100
                }).start()
            }), e
        }
        return r = y, i = [{
            key: "componentDidMount",
            value: function() {
                this.props.show && this.animate(1)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                e.show !== this.props.show && this.animate(this.props.show ? 1 : 0)
            }
        }, {
            key: "getAnimatedStyle",
            value: function() {
                var e = this.anim;
                return {
                    opacity: e,
                    transform: this.context.reducedMotion.enabled ? void 0 : [{
                        translateY: e.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["-100px", "0px"]
                        })
                    }, {
                        translateZ: 0
                    }]
                }
            }
        }, {
            key: "render",
            value: function() {
                return o.createElement(u.default.a, {
                    href: l.Routes.INDEX,
                    target: "_blank",
                    rel: "noopener",
                    className: a()(c.logo, this.props.className),
                    style: this.getAnimatedStyle()
                })
            }
        }], d(r.prototype, i), s && d(r, s), y
    }(o.Component);
    _(m, "contextType", s.AccessibilityPreferencesContext)
}