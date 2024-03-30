function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LOGIN_REQUIRED_ACTIONS_MODAL_KEY: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("493174"),
        a = n("807471"),
        u = n("208454"),
        s = n("870331"),
        l = n("10132"),
        c = n("599978"),
        f = n("281767"),
        d = n("563090");

    function _(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY",
        O = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && I(e, t)
            }(g, e);
            var t, a, O, T, S, v = (t = g, a = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, r, o = y(t);
                if (a) {
                    var i = y(this).constructor;
                    r = Reflect.construct(o, arguments, i)
                } else r = o.apply(this, arguments);
                return e = this, (n = r) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : _(e)
            });

            function g() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, g), e = v.apply(this, arguments), m(_(e), "actions", {
                    POST_CONNECTION_OPEN: e.handleConnectionOpen
                }), e
            }
            return O = g, T = [{
                key: "handleConnectionOpen",
                value: function() {
                    var e = u.default.getCurrentUser();
                    if (null != e) {
                        if (!l.ProcessArgs.isDisallowPopupsSet()) {
                            var t, a = c.default.requiredActionsIncludes(e.id, [f.LoginRequiredActions.UPDATE_PASSWORD]);
                            if (c.default.wasLoginAttemptedInSession(e.id) && a) {
                                ;
                                (0, o.openModalLazy)((t = function() {
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
                                    }(this, function(t) {
                                        switch (t.label) {
                                            case 0:
                                                return [4, Promise.all([n.e("99387"), n.e("18385")]).then(n.bind(n, "158795"))];
                                            case 1:
                                                return e = t.sent().default, [2, function(t) {
                                                    var n, o;
                                                    return r.createElement(e, (n = function(e) {
                                                        for (var t = 1; t < arguments.length; t++) {
                                                            var n = null != arguments[t] ? arguments[t] : {},
                                                                r = Object.keys(n);
                                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                                            }))), r.forEach(function(t) {
                                                                m(e, t, n[t])
                                                            })
                                                        }
                                                        return e
                                                    }({}, t), o = (o = {
                                                        onSuccess: function() {
                                                            s.default.track(f.AnalyticEvents.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose()
                                                        },
                                                        onClose: function() {
                                                            t.onClose(), i.default.logout(f.Routes.LOGIN)
                                                        },
                                                        requirementsUpdated: !0
                                                    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                                        var n = Object.keys(e);
                                                        if (Object.getOwnPropertySymbols) {
                                                            var r = Object.getOwnPropertySymbols(e);
                                                            n.push.apply(n, r)
                                                        }
                                                        return n
                                                    })(Object(o)).forEach(function(e) {
                                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
                                                    }), n))
                                                }]
                                        }
                                    })
                                }, function() {
                                    var e = this,
                                        n = arguments;
                                    return new Promise(function(r, o) {
                                        var i = t.apply(e, n);

                                        function a(e) {
                                            E(i, r, o, a, u, "next", e)
                                        }

                                        function u(e) {
                                            E(i, r, o, a, u, "throw", e)
                                        }
                                        a(void 0)
                                    })
                                }), {
                                    modalKey: h,
                                    onCloseRequest: d.NOOP_NULL,
                                    instant: !0
                                })
                            } else a && i.default.logout(f.Routes.LOGIN)
                        }
                    }
                }
            }], p(O.prototype, T), S && p(O, S), g
        }(a.default);
    t.default = new O
}