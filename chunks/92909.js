function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("945816"),
        i = n("941504");

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

    function c(e) {
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
    }

    function f(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function d(e, t) {
        return (d = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function _(e) {
        return "".concat(e).length < 13 ? 1e3 * e : e
    }

    function E(e) {
        return function(t) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && d(e, t)
            }(h, t);
            var n, E, p, m, y, I = (n = h, E = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, t, r, o = l(n);
                if (E) {
                    var i = l(this).constructor;
                    r = Reflect.construct(o, arguments, i)
                } else r = o.apply(this, arguments);
                return e = this, (t = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(t) || "function" == typeof t) ? t : a(e)
            });

            function h(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, h), s(a(t = I.call(this, e)), "_interval", void 0), t._interval = new o.Interval, t.state = c({}, t.getUpdatedTime()), t
            }
            return p = h, m = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this._interval.start(1e3, function() {
                        return e.setState(e.getUpdatedTime())
                    })
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._interval.stop()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    (e.timestamps.end !== this.props.timestamps.end || e.timestamps.start !== this.props.timestamps.start) && this.setState(this.getUpdatedTime())
                }
            }, {
                key: "getUpdatedTime",
                value: function() {
                    var e = this.props.timestamps,
                        t = Date.now() / 1e3;
                    return null != e.end ? this.getDiff(t, _(e.end) / 1e3) : null != e.start ? this.getDiff(_(e.start) / 1e3, t) : {
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    }
                }
            }, {
                key: "renderTime",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return t && e <= 0 ? -1 : e < 10 ? "0".concat(e) : e
                }
            }, {
                key: "getDiff",
                value: function(e, t) {
                    var n = Math.max(t - e, 0);
                    return {
                        hours: Math.floor(n / 3600) % 24,
                        minutes: Math.floor(n / 60) % 60,
                        seconds: Math.floor(n) % 60
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props,
                        n = t.timestamps,
                        o = function(e, t) {
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
                        }(t, ["timestamps"]),
                        a = this.state,
                        u = a.hours,
                        s = a.minutes,
                        l = a.seconds,
                        d = {
                            hours: this.renderTime(u, !0),
                            minutes: this.renderTime(s),
                            seconds: this.renderTime(l)
                        };
                    return null != n.end ? r.createElement(e, f(c({}, o), {
                        message: i.default.Messages.USER_ACTIVITY_TIMESTAMP_END.format(d)
                    })) : null != n.start ? r.createElement(e, f(c({}, o), {
                        message: i.default.Messages.USER_ACTIVITY_TIMESTAMP_START.format(d)
                    })) : null
                }
            }], u(p.prototype, m), y && u(p, y), h
        }(r.PureComponent)
    }
}