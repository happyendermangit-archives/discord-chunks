function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("693566"),
        a = n.n(s),
        l = n("446674"),
        r = n("913144"),
        i = n("718517");
    let o = {
            taken: null,
            error: void 0,
            rateLimited: !0
        },
        u = {
            validations: new a({
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
    class d extends l.default.Store {
        isRateLimited() {
            return null != u.retryAfterTime && Date.now() < u.retryAfterTime
        }
        validate(e) {
            let t = u.validations.get(e);
            return this.isRateLimited() && (null == t || t.rateLimited) ? o : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
        }
        registrationUsernameSuggestion() {
            return u.suggestions.registration.suggestion.username
        }
        usernameSuggestion() {
            return u.suggestions.migration.suggestion.username
        }
        usernameSuggestionLoading() {
            return u.suggestions.migration.usernameSuggestionLoading
        }
        isCurrentUsernameInvalid() {
            return u.currentUsernameInvalid
        }
        wasRegistrationSuggestionFetched(e) {
            return u.suggestions.registration.source === e && u.suggestions.registration.fetched
        }
        wasSuggestionsFetched() {
            return u.suggestions.migration.fetched
        }
    }
    d.displayName = "PomeloStore";
    var c = new d(r.default, {
        POMELO_ATTEMPT_SUCCESS: function(e) {
            let {
                username: t,
                taken: n
            } = e;
            u.validations.set(t, {
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
            429 === s ? u.validations.set(t, {
                taken: null,
                error: n,
                rateLimited: !0
            }, (null != a ? a : 7) * i.default.Millis.SECOND) : u.validations.set(t, {
                taken: null,
                error: n
            }), null != a && (u.retryAfterTime = Date.now() + a * i.default.Millis.SECOND)
        },
        POMELO_SUGGESTIONS_RESET: function() {
            u.suggestions.migration = {
                suggestion: {
                    username: void 0
                },
                fetched: !1,
                usernameSuggestionLoading: !1
            }, u.suggestions.registration = {
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
            u.suggestions.migration = {
                suggestion: t,
                fetched: !0,
                usernameSuggestionLoading: !1
            }, (null == t ? void 0 : t.invalid_current_username) === !0 && (u.currentUsernameInvalid = !0)
        },
        POMELO_SUGGESTIONS_FETCH: function(e) {
            let {
                usernameSuggestionLoading: t
            } = e;
            u.suggestions.migration.usernameSuggestionLoading = t
        },
        POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
            let {
                suggestion: t,
                source: n
            } = e;
            u.suggestions.registration = {
                suggestion: t,
                source: n,
                fetched: !0
            }, (null == t ? void 0 : t.username) != null && u.validations.set(t.username, {
                taken: !1
            })
        }
    })
}