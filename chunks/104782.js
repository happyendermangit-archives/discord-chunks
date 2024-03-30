function(e, t, n) {
    "use strict";
    n.r(t);
    var r, i, o, u, a = n("31775"),
        s = n.n(a),
        l = n("898511"),
        c = n("629815"),
        f = n("388990");

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = {
            taken: null,
            error: void 0,
            rateLimited: !0
        },
        p = {
            validations: new(s())({
                max: 100,
                maxAge: 6e4
            }),
            currentUsernameInvalid: !1,
            retryAfterTime: null,
            suggestions: {
                migration: {
                    suggestion: {
                        username: void 0
                    },
                    fetched: !1,
                    usernameSuggestionLoading: !1
                },
                registration: {
                    suggestion: {
                        username: void 0
                    },
                    source: void 0,
                    fetched: !1
                }
            }
        },
        v = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(a, e);
            var t, n, r, i, o, u = (t = a, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, i, o = g(t);
                if (n) {
                    var u = g(this).constructor;
                    i = Reflect.construct(o, arguments, u)
                } else i = o.apply(this, arguments);
                return e = this, (r = i) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function a() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, a), u.apply(this, arguments)
            }
            return r = a, i = [{
                key: "isRateLimited",
                value: function() {
                    return null != p.retryAfterTime && Date.now() < p.retryAfterTime
                }
            }, {
                key: "validate",
                value: function(e) {
                    var t = p.validations.get(e);
                    return this.isRateLimited() && (null == t || t.rateLimited) ? E : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
                }
            }, {
                key: "registrationUsernameSuggestion",
                value: function() {
                    return p.suggestions.registration.suggestion.username
                }
            }, {
                key: "usernameSuggestion",
                value: function() {
                    return p.suggestions.migration.suggestion.username
                }
            }, {
                key: "usernameSuggestionLoading",
                value: function() {
                    return p.suggestions.migration.usernameSuggestionLoading
                }
            }, {
                key: "isCurrentUsernameInvalid",
                value: function() {
                    return p.currentUsernameInvalid
                }
            }, {
                key: "wasRegistrationSuggestionFetched",
                value: function(e) {
                    return p.suggestions.registration.source === e && p.suggestions.registration.fetched
                }
            }, {
                key: "wasSuggestionsFetched",
                value: function() {
                    return p.suggestions.migration.fetched
                }
            }], d(r.prototype, i), o && d(r, o), a
        }(l.default.Store);
    o = "PomeloStore", (i = "displayName") in(r = v) ? Object.defineProperty(r, i, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[i] = o, t.default = new v(c.default, {
        POMELO_ATTEMPT_SUCCESS: function(e) {
            var t = e.username,
                n = e.taken;
            p.validations.set(t, {
                taken: n
            })
        },
        POMELO_ATTEMPT_FAILURE: function(e) {
            var t = e.username,
                n = e.error,
                r = e.statusCode,
                i = e.retryAfter;
            429 === r ? p.validations.set(t, {
                taken: null,
                error: n,
                rateLimited: !0
            }, (null != i ? i : 7) * f.default.Millis.SECOND) : p.validations.set(t, {
                taken: null,
                error: n
            }), null != i && (p.retryAfterTime = Date.now() + i * f.default.Millis.SECOND)
        },
        POMELO_SUGGESTIONS_RESET: function() {
            p.suggestions.migration = {
                suggestion: {
                    username: void 0
                },
                fetched: !1,
                usernameSuggestionLoading: !1
            }, p.suggestions.registration = {
                suggestion: {
                    username: void 0
                },
                source: void 0,
                fetched: !1
            }
        },
        POMELO_SUGGESTIONS_SUCCESS: function(e) {
            var t = e.suggestion;
            p.suggestions.migration = {
                suggestion: t,
                fetched: !0,
                usernameSuggestionLoading: !1
            }, (null == t ? void 0 : t.invalid_current_username) === !0 && (p.currentUsernameInvalid = !0)
        },
        POMELO_SUGGESTIONS_FETCH: function(e) {
            var t = e.usernameSuggestionLoading;
            p.suggestions.migration.usernameSuggestionLoading = t
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
            var t = e.suggestion,
                n = e.source;
            p.suggestions.registration = {
                suggestion: t,
                source: n,
                fetched: !0
            }, (null == t ? void 0 : t.username) != null && p.validations.set(t.username, {
                taken: !1
            })
        }
    })
}