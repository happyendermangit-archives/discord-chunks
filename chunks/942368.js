function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Shaker: function() {
            return _
        }
    });
    var r, o = n("470079"),
        i = n("392711"),
        a = n.n(i),
        u = n("622780");

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

        function p() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, p), e = E.apply(this, arguments), c(s(e), "ref", o.createRef()), c(s(e), "animationFrame", void 0), c(s(e), "shouldRenderFrame", !0), c(s(e), "animate", function() {
                var t = e.props,
                    n = t.intensity;
                if (t.isShaking) {
                    var r = e.ref.current;
                    if (e.shouldRenderFrame && null != r) {
                        var o = a().random(-n, n, !0),
                            i = a().random(-n, n, !0);
                        r.style.transform = u.default.useReducedMotion ? "" : "translate3d(".concat(o, "px,").concat(i, "px,0px)")
                    }
                    e.shouldRenderFrame = !e.shouldRenderFrame, e.animationFrame = requestAnimationFrame(e.animate)
                }
            }), e
        }
        return r = p, i = [{
            key: "componentDidMount",
            value: function() {
                this.props.isShaking && this.startShaking()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                this.props.isShaking !== e.isShaking && this.setShaking(this.props.isShaking)
            }
        }, {
            key: "setShaking",
            value: function(e) {
                e ? this.startShaking() : this.stopShaking()
            }
        }, {
            key: "startShaking",
            value: function() {
                this.shouldRenderFrame = !0, this.animationFrame = requestAnimationFrame(this.animate)
            }
        }, {
            key: "stopShaking",
            value: function() {
                null != this.animationFrame && cancelAnimationFrame(this.animationFrame);
                var e = this.ref.current;
                null != e && (e.style.transform = "")
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.className,
                    n = e.children;
                return o.createElement("div", {
                    className: t,
                    ref: this.ref
                }, n)
            }
        }], l(r.prototype, i), _ && l(r, _), p
    }(o.Component);
    c(_, "defaultProps", {
        isShaking: !0,
        intensity: 5
    })
}