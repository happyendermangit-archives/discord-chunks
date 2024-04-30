function(e, t, n) {
    "use strict";
    n.r(t);
    var s, a, i, r, l = n("31775"),
        o = n.n(l),
        u = n("442837"),
        d = n("570140"),
        c = n("70956");
    let f = {
            taken: null,
            error: void 0,
            rateLimited: !0
        },
        h = {
            validations: new(o())({
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
        };
    class E extends(r = u.default.Store) {
        isRateLimited() {
            return null != h.retryAfterTime && Date.now() < h.retryAfterTime
        }
        validate(e) {
            let t = h.validations.get(e);
            return this.isRateLimited() && (null == t || t.rateLimited) ? f : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
        }
        registrationUsernameSuggestion() {
            return h.suggestions.registration.suggestion.username
        }
        usernameSuggestion() {
            return h.suggestions.migration.suggestion.username
        }
        usernameSuggestionLoading() {
            return h.suggestions.migration.usernameSuggestionLoading
        }
        isCurrentUsernameInvalid() {
            return h.currentUsernameInvalid
        }
        wasRegistrationSuggestionFetched(e) {
            return h.suggestions.registration.source === e && h.suggestions.registration.fetched
        }
        wasSuggestionsFetched() {
            return h.suggestions.migration.fetched
        }
    }
    i = "PomeloStore", (a = "displayName") in(s = E) ? Object.defineProperty(s, a, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : s[a] = i, t.default = new E(d.default, {
        POMELO_ATTEMPT_SUCCESS: function(e) {
            let {
                username: t,
                taken: n
            } = e;
            h.validations.set(t, {
                taken: n
            })
        },
        POMELO_ATTEMPT_FAILURE: function(e) {
            let {
                username: t,
                error: n,
                statusCode: s,
                retryAfter: a
            } = e;
            429 === s ? h.validations.set(t, {
                taken: null,
                error: n,
                rateLimited: !0
            }, (null != a ? a : 7) * c.default.Millis.SECOND) : h.validations.set(t, {
                taken: null,
                error: n
            }), null != a && (h.retryAfterTime = Date.now() + a * c.default.Millis.SECOND)
        },
        POMELO_SUGGESTIONS_RESET: function() {
            h.suggestions.migration = {
                suggestion: {
                    username: void 0
                },
                fetched: !1,
                usernameSuggestionLoading: !1
            }, h.suggestions.registration = {
                suggestion: {
                    username: void 0
                },
                source: void 0,
                fetched: !1
            }
        },
        POMELO_SUGGESTIONS_SUCCESS: function(e) {
            let {
                suggestion: t
            } = e;
            h.suggestions.migration = {
                suggestion: t,
                fetched: !0,
                usernameSuggestionLoading: !1
            }, (null == t ? void 0 : t.invalid_current_username) === !0 && (h.currentUsernameInvalid = !0)
        },
        POMELO_SUGGESTIONS_FETCH: function(e) {
            let {
                usernameSuggestionLoading: t
            } = e;
            h.suggestions.migration.usernameSuggestionLoading = t
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
            let {
                suggestion: t,
                source: n
            } = e;
            h.suggestions.registration = {
                suggestion: t,
                source: n,
                fetched: !0
            }, (null == t ? void 0 : t.username) != null && h.validations.set(t.username, {
                taken: !1
            })
        }
    })
}