function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("470079"),
        i = n("803997"),
        a = n.n(i),
        u = n("945816"),
        s = n("143953"),
        l = n("426454");

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function p(e) {
        var t, n = e.percentage,
            r = e.isSingleLine;
        return o.createElement("div", {
            className: a()((d(t = {}, l.bar, r), d(t, l.barInMultiLine, !r), t))
        }, o.createElement("div", {
            className: l.barInner,
            style: {
                width: "".concat(100 * Math.max(Math.min(n, 1), 0), "%")
            }
        }))
    }

    function m(e) {
        return String(e).padStart(2, "0")
    }

    function y(e) {
        var t = e.time,
            n = e.padLargestUnit,
            r = Math.floor(t) % 60,
            o = Math.floor(t / 60) % 60,
            i = Math.floor(t / 3600);
        return 0 === i ? n ? "".concat(m(o), ":").concat(m(r)) : "".concat(o, ":").concat(m(r)) : n ? "".concat(m(i), ":").concat(m(o), ":").concat(m(r)) : "".concat(i, ":").concat(m(o), ":").concat(m(r))
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(h, e);
        var t, n, r, i, m, I = (t = h, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = _(t);
            if (n) {
                var a = _(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : c(e)
        });

        function h() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, h), e = I.apply(this, arguments), d(c(e), "timer", new u.Interval), d(c(e), "state", {
                now: Date.now()
            }), e
        }
        return r = h, i = [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                this.timer.start(500, function() {
                    e.setState({
                        now: Date.now()
                    })
                })
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.timer.stop()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props,
                    t = e.start,
                    n = e.end,
                    r = e.className,
                    i = e.themed,
                    u = e.singleLine,
                    c = this.state.now,
                    f = (n - t) / 1e3,
                    _ = Math.max(Math.min((c - t) / 1e3, f), 0);
                return void 0 !== u && u ? o.createElement("div", {
                    className: a()(r, d({}, l.themed, i), l.singleLineContainer)
                }, o.createElement("div", {
                    className: l.textLeftInSingleLine
                }, y({
                    time: _,
                    padLargestUnit: !0
                })), o.createElement("div", {
                    className: l.barInSingleLine
                }, o.createElement(p, {
                    percentage: _ / f,
                    isSingleLine: !0
                })), o.createElement("div", {
                    className: l.textRight
                }, y({
                    time: f,
                    padLargestUnit: !0
                }))) : o.createElement("div", {
                    className: a()(r, d({}, l.themed, i))
                }, o.createElement(p, {
                    percentage: _ / f,
                    isSingleLine: !1
                }), o.createElement(s.default, null, o.createElement(s.default.Child, {
                    grow: 1,
                    className: l.textLeft
                }, y({
                    time: _,
                    padLargestUnit: !1
                })), o.createElement(s.default.Child, {
                    grow: 0,
                    className: l.textRight
                }, y({
                    time: f,
                    padLargestUnit: !1
                }))))
            }
        }], f(r.prototype, i), m && f(r, m), h
    }(o.PureComponent);
    d(I, "defaultProps", {
        themed: !1
    }), t.default = I
}