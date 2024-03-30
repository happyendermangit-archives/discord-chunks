function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return v
        },
        analyticsTrackingStoreMaker: function() {
            return b
        }
    }), n("179870");
    var r, o, i, a, u = n("732268"),
        s = n("898511"),
        l = n("967888"),
        c = n("32445");

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                E(e, t, n[t])
            })
        }
        return e
    }

    function y(e, t) {
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

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function h(e) {
        return function(e) {
            if (Array.isArray(e)) return f(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return f(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var O = 1500,
        T = null !== (r = window.requestIdleCallback) && void 0 !== r ? r : function(e) {
            return setImmediate(function() {
                return e()
            })
        },
        S = new c.IdGenerator,
        v = {
            handleConnectionOpen: function() {},
            handleConnectionClosed: function() {},
            handleFingerprint: function() {},
            handleTrack: function() {}
        },
        g = [],
        A = function() {
            return Promise.resolve({
                sessionId: void 0
            })
        },
        b = function(e) {
            var t = e.dispatcher,
                n = e.actionHandler,
                r = e.getFingerprint,
                c = e.getSessionId,
                f = void 0 === c ? A : c,
                b = e.TRACKING_URL,
                N = e.drainTimeoutOverride,
                R = e.waitFor,
                C = function(e) {
                    if (null != i) return i;
                    var t = e.fingerprint || r();
                    return null != t ? (0, u.extractId)(t) : null
                },
                P = function() {
                    return 0 !== g.length && (null != i ? null != o : null != r())
                },
                D = function() {
                    null == a && P() && (a = T(L, {
                        timeout: O
                    }))
                },
                L = function() {
                    if (a = null, P()) {
                        var e = g.slice();
                        g = [], M(e).then(function() {
                            e.forEach(function(e) {
                                var t;
                                null === (t = e.resolve) || void 0 === t || t.call(e)
                            })
                        }, function(t) {
                            var n;
                            (n = g).unshift.apply(n, h(e)), console.warn("[AnalyticsTrackingStore] Track:", (t.body || t).message)
                        })
                    }
                },
                M = function(e) {
                    var t = Date.now(),
                        n = e.map(function(e) {
                            return y(m({}, e), {
                                properties: y(m({}, e.properties), {
                                    client_send_timestamp: t
                                })
                            })
                        });
                    return l.HTTP.post({
                        url: b,
                        body: {
                            token: o,
                            events: n
                        },
                        retries: 3
                    })
                };
            O = null != N ? N : 1500, v.handleConnectionOpen = function(e) {
                var t = e.analyticsToken,
                    n = e.user;
                return null != t && (o = t), null != n.id && (i = n.id), D(), !1
            }, v.handleConnectionClosed = function() {
                return L(), o = null, i = null, !1
            }, v.handleFingerprint = function() {
                return L(), !1
            }, v.handleTrack = function(e) {
                var t = e.event,
                    n = e.properties,
                    r = e.flush,
                    o = e.fingerprint,
                    i = e.resolve;
                return f().then(function(e) {
                    var a = e.sessionId,
                        u = {
                            type: t,
                            fingerprint: o,
                            properties: m({
                                client_track_timestamp: Date.now(),
                                client_heartbeat_session_id: a
                            }, n),
                            resolve: i
                        },
                        s = C(u);
                    null != s && (u.properties.client_uuid = S.generate(s)), g.push(u), g.length > 1e4 && (g = g.slice(-1e4)), r ? L() : D()
                }), !1
            };
            var U = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && I(e, t)
                }(u, e);
                var t, n, r, o, i, a = (t = u, n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, r, o, i = p(t);
                    if (n) {
                        var a = p(this).constructor;
                        o = Reflect.construct(i, arguments, a)
                    } else o = i.apply(this, arguments);
                    return e = this, (r = o) && ("object" === function(e) {
                        return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                    }(r) || "function" == typeof r) ? r : d(e)
                });

                function u() {
                    var e;
                    return ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, u), e = a.apply(this, arguments), E(d(e), "submitEventsImmediately", M), e
                }
                return r = u, o = [{
                    key: "initialize",
                    value: function() {
                        null != R && this.waitFor.apply(this, h(R))
                    }
                }], _(r.prototype, o), i && _(r, i), u
            }(s.Store);
            return E(U, "displayName", "AnalyticsTrackingStore"), new U(t, n)
        }
}