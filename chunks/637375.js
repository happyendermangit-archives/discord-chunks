function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("392711"),
        i = n.n(o),
        a = n("346645"),
        u = n("291966"),
        s = n("767556"),
        l = n("898511"),
        c = n("784184"),
        f = n("317861"),
        d = n("106440"),
        _ = n("884876"),
        E = n("399039"),
        p = n("35911"),
        m = n("163291"),
        y = n("251552"),
        I = n("870331"),
        h = n("285910"),
        O = n("131900"),
        T = n("281767"),
        S = n("941504"),
        v = n("588483");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function b(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function C(e) {
        return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function P(e, t) {
        return (P = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function D() {
        var e, t, n, o, i = (e = r.useState(!1), t = 2, function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(e, t) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            a = i[0],
            u = i[1];
        if (null == (0, l.useStateFromStores)([d.default], function() {
                var e;
                return (0, _.probablyHasBuildOverride)() ? null === (e = d.default.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web : null
            })) return null;
        var s = (o = (n = function() {
            var e;
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(e) {
                switch (e.label) {
                    case 0:
                        return e.trys.push([0, 2, , 3]), u(!0), [4, (0, f.clearBuildOverride)()];
                    case 1:
                        return e.sent(), window.location.reload(!0), [3, 3];
                    case 2:
                        return e.sent(), u(!1), [3, 3];
                    case 3:
                        return [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(r, o) {
                var i = n.apply(e, t);

                function a(e) {
                    b(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    b(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function() {
            return o.apply(this, arguments)
        });
        return r.createElement(c.Button, {
            size: c.ButtonSizes.LARGE,
            onClick: s,
            submitting: a,
            className: v.clearOverrideButton
        }, S.default.Messages.CLEAR_BUILD_OVERRIDE)
    }
    var L = i().throttle(function(e) {
            p.default.increment({
                name: s.MetricEvents.APP_CRASHED,
                tags: ["reason:".concat(a.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(u.ErrorLevels.FATAL), "modded_client:".concat(e)]
            }, !0)
        }, 100, {
            trailing: !1
        }),
        M = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && P(e, t)
            }(s, e);
            var t, n, o, i, a, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = C(t);
                if (n) {
                    var a = C(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : A(e)
            });

            function s() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = u.apply(this, arguments), R(A(e), "state", {
                    error: null,
                    info: null
                }), R(A(e), "discordErrorsSet", !1), e
            }
            return o = s, i = [{
                key: "componentDidCatch",
                value: function(e, t) {
                    this.triggerSoftCrash(e, t)
                }
            }, {
                key: "triggerSoftCrash",
                value: function(e, t) {
                    var n = (0, m.getHistory)().location;
                    this.setState({
                        error: e,
                        info: t
                    });
                    var r = (0, E.usesClientMods)(),
                        o = h.default.captureCrash(e, {
                            extra: t
                        });
                    I.default.track(T.AnalyticEvents.APP_CRASHED, {
                        path: n.pathname,
                        extra: t,
                        error_message: e.message,
                        error_stack: e.stack,
                        sentry_issue_id: o,
                        uses_client_mods: r
                    }), L(r), O.default.cleanupDisplaySleep()
                }
            }, {
                key: "_handleSubmitReport",
                value: function() {
                    location.reload(!0)
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    null == window.DiscordErrors && (window.DiscordErrors = {
                        softCrash: function(t) {
                            e.triggerSoftCrash(t)
                        }
                    }, this.discordErrorsSet = !0)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.discordErrorsSet && (window.DiscordErrors = null, this.discordErrorsSet = !1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.children,
                        n = e.renderCustomMessage;
                    if (null !== this.state.error) {
                        var o = r.createElement("div", null, r.createElement("p", null, S.default.Messages.ERRORS_UNEXPECTED_CRASH), r.createElement("p", null, S.default.Messages.ERRORS_ACTION_TO_TAKE)),
                            i = r.createElement("div", {
                                className: v.buttons
                            }, r.createElement(c.Button, {
                                size: c.ButtonSizes.LARGE,
                                onClick: this._handleSubmitReport
                            }, S.default.Messages.ERRORS_RELOAD), r.createElement(D, null));
                        return r.createElement(y.default, {
                            title: S.default.Messages.UNSUPPORTED_BROWSER_TITLE,
                            note: null != n ? n() : o,
                            action: i,
                            className: v.errorPage
                        })
                    }
                    return t
                }
            }], N(o.prototype, i), a && N(o, a), s
        }(r.PureComponent);
    t.default = M
}