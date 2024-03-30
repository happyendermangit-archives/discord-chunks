function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DSN: function() {
            return u
        }
    });
    var r = n("767349"),
        o = n("177688"),
        i = n("374550"),
        a = n("131900"),
        u = "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984";

    function s() {
        var e, t, n, r, o, u, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i.isPlatformEmbedded && a.default.updateCrashReporter({
            user_id: null !== (e = s.id) && void 0 !== e ? e : "",
            username: null !== (t = s.username) && void 0 !== t ? t : "",
            email: null !== (n = s.email) && void 0 !== n ? n : "",
            sentry: {
                user: {
                    id: null !== (r = s.id) && void 0 !== r ? r : "",
                    username: null !== (o = s.username) && void 0 !== o ? o : "",
                    email: null !== (u = s.email) && void 0 !== u ? u : ""
                }
            }
        })
    }
    t.default = {
        setUser: function(e, t, n, r) {
            var o = {
                id: e,
                username: t,
                email: n,
                staff: r
            };
            null != window.DiscordSentry && window.DiscordSentry.configureScope(function(e) {
                e.setUser(o)
            }), s(o)
        },
        clearUser: function() {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(function(e) {
                e.setUser(null)
            }), s()
        },
        setTags: function(e) {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(function(t) {
                t.setTags(e)
            })
        },
        setExtra: function(e) {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(function(t) {
                t.setExtras(e)
            })
        },
        captureException: function(e, t) {
            var n = (0, o.getUpdatedOptions)(t);
            null != window.DiscordSentry && window.DiscordSentry.withScope(function(t) {
                null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureException(e)
            })
        },
        captureCrash: function(e, t) {
            var n, r = (0, o.getUpdatedOptions)(t);
            return null != window.DiscordSentry && window.DiscordSentry.withScope(function(t) {
                t.setExtras(r.extra), t.setTag("crash", "true"), t.setLevel("fatal"), t.addEventProcessor(function(e) {
                    var t, n, r, o, i = null === (o = e.exception) || void 0 === o ? void 0 : null === (r = o.values) || void 0 === r ? void 0 : r[0];
                    if (null != i) {
                        ;
                        i.mechanism = (t = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r, o, i;
                                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[o] = i
                                })
                            }
                            return e
                        }({}, i.mechanism), n = (n = {
                            handled: !1
                        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(n)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }), t)
                    }
                    return e
                }), n = window.DiscordSentry.captureException(e)
            }), n
        },
        captureMessage: function(e, t) {
            var n = (0, o.getUpdatedOptions)(t);
            null != window.DiscordSentry && window.DiscordSentry.withScope(function(t) {
                null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureMessage(e)
            })
        },
        addBreadcrumb: function(e) {
            (0, r.default)(e)
        },
        profiledRootComponent: function(e) {
            return e
        },
        crash: function() {
            throw Error("crash")
        }
    }
}