function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ProgressCircle: function() {
            return _
        }
    });
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("182242");

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
    var d = Object.freeze({
            SMALL: 1,
            MEDIUM: 2,
            LARGE: 4
        }),
        _ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(_, e);
            var t, n, r, i, l, d = (t = _, n = function() {
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
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function _() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, _), d.apply(this, arguments)
            }
            return r = _, i = [{
                key: "renderCircle",
                value: function() {
                    var e = this.props,
                        t = e.strokeSize,
                        n = e.percent,
                        r = e.colorOverride,
                        i = e.background,
                        s = (20 - t) / 2,
                        l = s * Math.PI * 2;
                    return o.createElement("svg", {
                        viewBox: "0 0 ".concat(20, " ").concat(20),
                        className: u.circle
                    }, o.createElement("circle", {
                        className: u.circleBackgroundAlt,
                        cx: 10,
                        cy: 10,
                        r: 10
                    }), o.createElement("circle", {
                        className: a()(u.circleBackground, i),
                        cx: 10,
                        cy: 10,
                        r: (20 - 2 * t) / 2
                    }), o.createElement("circle", {
                        className: u.circleProgress,
                        cx: 10,
                        cy: 10,
                        r: s,
                        strokeWidth: "".concat(t, "px"),
                        strokeLinecap: "round",
                        transform: "rotate(-90 ".concat(10, " ").concat(10, ")"),
                        stroke: null != r ? r : "currentColor",
                        style: {
                            strokeDasharray: l,
                            strokeDashoffset: (1 - Math.min(Math.max(n, 0), 100) / 100) * l
                        }
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.className,
                        n = e.children;
                    return o.createElement("div", {
                        className: a()(u.progressCircle, t)
                    }, this.renderCircle(), null != n ? o.createElement("div", {
                        className: u.circleOverlay
                    }, n) : null)
                }
            }], s(r.prototype, i), l && s(r, l), _
        }(o.Component);
    l(_, "StrokeSizes", d), l(_, "defaultProps", {
        strokeSize: d.MEDIUM
    })
}