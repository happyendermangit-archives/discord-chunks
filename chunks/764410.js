function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openMigrationModal: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("967888"),
        i = n("242880"),
        a = n("784184"),
        u = n("807471"),
        s = n("644779"),
        l = n("848957"),
        c = n("229411"),
        f = n("767249"),
        d = n("281767");

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

    function p(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    E(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    E(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                y(e, t, n[t])
            })
        }
        return e
    }

    function O(e, t) {
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

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function S(e, t) {
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
    }
    var v = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
        }(b, e);
        var t, u, E, v, g, A = (t = b, u = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, n, r, o = I(t);
            if (u) {
                var i = I(this).constructor;
                r = Reflect.construct(o, arguments, i)
            } else r = o.apply(this, arguments);
            return e = this, (n = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(n) || "function" == typeof n) ? n : _(e)
        });

        function b() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, b), e = A.apply(this, arguments), y(_(e), "actions", {
                POST_CONNECTION_OPEN: function() {
                    return e.handlePostConnectionOpen()
                }
            }), e
        }
        return E = b, v = [{
            key: "handlePostConnectionOpen",
            value: function() {
                if (!i.Storage.get("turnedOffNewNotifications") && !!s.default.hasConsented(d.Consents.PERSONALIZATION) && !!c.NotificationsExperiment.getCurrentConfig({
                        location: "NotificationMigrationManager"
                    }, {
                        autoTrackExposure: !1
                    }).enabled) !l.default.useNewNotifications && (this.checkOldUserExperiment(), this.checkNewUserExperiment())
            }
        }, {
            key: "checkOldUserExperiment",
            value: function() {
                return p(function() {
                    var e, t, i, u, s, l, d, _;
                    return S(this, function(E) {
                        switch (E.label) {
                            case 0:
                                if (t = (e = c.UnreadsEntryPointExperiment.getCurrentConfig({
                                        location: "NotificationMigrationManager"
                                    }, {
                                        autoTrackExposure: !1
                                    })).logExposure, i = e.autoOpen, !t) return [2];
                                return [4, o.HTTP.get("/users/@me/notification-migration-data2")];
                            case 1:
                                return s = (u = E.sent().body).guild_noise, l = u.usage, d = (0, f.transformUsageData)(l), [4, Promise.all([n.e("99387"), n.e("45276")]).then(n.bind(n, "557009"))];
                            case 2:
                                if (_ = E.sent().default, (0, a.hasAnyModalOpen)()) return [2];
                                if (c.UnreadsEntryPointExperiment.trackExposure({
                                        location: "NotificationMigrationManager"
                                    }), !i) return [2];
                                return (0, f.hasGoodCandidateServers)(s, d) ? (0, a.openModal)(function(e) {
                                    return r.createElement(_, O(h({}, e), {
                                        dismissable: !1,
                                        guildPain: s,
                                        myUsage: d
                                    }))
                                }, {
                                    onCloseRequest: function() {}
                                }) : (0, f.autoMigrateToNewSystem)(), [2]
                        }
                    })
                })()
            }
        }, {
            key: "checkNewUserExperiment",
            value: function() {
                var e = c.NewUserUnreadsEntryPointExperiment.getCurrentConfig({
                        location: "NotificationMigrationManager"
                    }, {
                        autoTrackExposure: !1
                    }),
                    t = e.logExposure,
                    n = e.enabled;
                t && (c.NewUserUnreadsEntryPointExperiment.trackExposure({
                    location: "NotificationMigrationManager"
                }), n && (0, f.autoMigrateToNewSystem)())
            }
        }], m(E.prototype, v), g && m(E, g), b
    }(u.default);

    function g(e) {
        return A.apply(this, arguments)
    }

    function A() {
        return (A = p(function(e) {
            var t, i, u, s;
            return S(this, function(l) {
                switch (l.label) {
                    case 0:
                        return [4, o.HTTP.get("/users/@me/notification-migration-data2")];
                    case 1:
                        return i = (t = l.sent().body).guild_noise, u = t.usage, s = (0, f.transformUsageData)(u), (0, a.openModalLazy)(p(function() {
                            var t;
                            return S(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("45276")]).then(n.bind(n, "557009"))];
                                    case 1:
                                        return t = o.sent().default, [2, function(n) {
                                            return r.createElement(t, O(h({}, n), {
                                                dismissable: e,
                                                guildPain: i,
                                                myUsage: s
                                            }))
                                        }]
                                }
                            })
                        })), [2]
                }
            })
        })).apply(this, arguments)
    }
    t.default = new v
}