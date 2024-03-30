function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("898511"),
        s = n("629815"),
        l = n("92118"),
        c = n("53867"),
        f = n("851285"),
        d = n("620205");

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

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {
            applicationId: null,
            originURL: null
        },
        I = y,
        h = new Set,
        O = !1;

    function T() {
        i = null
    }

    function S() {
        r = null, o = null, h = new Set, I.applicationId = null, I.originURL = null, T()
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
            }), t && m(e, t)
        }(S, e);
        var t, n, a, u, s, T = (t = S, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function S() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, S), T.apply(this, arguments)
        }
        return a = S, u = [{
            key: "initialize",
            value: function(e) {
                r = (I = function(e) {
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
                }({}, null != e ? e : y)).applicationId, o = I.originURL, this.waitFor(f.default, l.default), this.syncWith([f.default, l.default], function() {
                    return !0
                }), d.default.whenInitialized(function() {
                    O = !0
                })
            }
        }, {
            key: "inTestModeForApplication",
            value: function(e) {
                return r === e
            }
        }, {
            key: "inTestModeForEmbeddedApplication",
            value: function(e) {
                return r === e && null != o
            }
        }, {
            key: "shouldDisplayTestMode",
            value: function(e) {
                return c.DeveloperMode.getSetting() && this.inTestModeForApplication(e)
            }
        }, {
            key: "getState",
            value: function() {
                return I
            }
        }, {
            key: "isTestMode",
            get: function() {
                return null != r
            }
        }, {
            key: "isFetchingAuthorization",
            get: function() {
                return h.size > 0
            }
        }, {
            key: "testModeEmbeddedApplicationId",
            get: function() {
                return null != o ? r : null
            }
        }, {
            key: "testModeApplicationId",
            get: function() {
                return r
            }
        }, {
            key: "testModeOriginURL",
            get: function() {
                return o
            }
        }, {
            key: "error",
            get: function() {
                return i
            }
        }, {
            key: "whenInitialized",
            value: function(e) {
                this.addConditionalChangeListener(function() {
                    if (O) return setImmediate(e), !1
                })
            }
        }], _(a.prototype, u), s && _(a, s), S
    }(u.default.PersistedStore);
    E(v, "displayName", "TestModeStore"), E(v, "persistKey", "TestModeStore"), t.default = new v(s.default, {
        DEVELOPER_TEST_MODE_AUTHORIZATION_START: function(e) {
            var t = e.applicationId;
            h.add(t), i = null
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: function(e) {
            var t = e.applicationId,
                n = e.originURL;
            r = t, o = n, h.delete(t), i = null, I.applicationId = t, I.originURL = n
        },
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: function(e) {
            var t = e.applicationId,
                n = e.error;
            h.delete(t), i = n
        },
        OVERLAY_INITIALIZE: function(e) {
            r = e.testModeApplicationId
        },
        DEVELOPER_TEST_MODE_RESET_ERROR: T,
        LOGOUT: S,
        DEVELOPER_TEST_MODE_RESET: S
    })
}