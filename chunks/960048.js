function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DSN: function() {
            return o
        }
    }), n("47120"), n("411104");
    var i = n("464847"),
        r = n("289182"),
        a = n("358085"),
        s = n("998502");
    let o = "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984";

    function l() {
        var e, t, n, i, r, o;
        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        a.isPlatformEmbedded && s.default.updateCrashReporter({
            user_id: null !== (e = l.id) && void 0 !== e ? e : "",
            username: null !== (t = l.username) && void 0 !== t ? t : "",
            email: null !== (n = l.email) && void 0 !== n ? n : "",
            sentry: {
                user: {
                    id: null !== (i = l.id) && void 0 !== i ? i : "",
                    username: null !== (r = l.username) && void 0 !== r ? r : "",
                    email: null !== (o = l.email) && void 0 !== o ? o : ""
                }
            }
        })
    }
    t.default = {
        setUser(e, t, n, i) {
            let r = {
                id: e,
                username: t,
                email: n,
                staff: i
            };
            null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
                e.setUser(r)
            }), l(r)
        },
        clearUser() {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
                e.setUser(null)
            }), l()
        },
        setTags(e) {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(t => {
                t.setTags(e)
            })
        },
        setExtra(e) {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(t => {
                t.setExtras(e)
            })
        },
        captureException(e, t) {
            let n = (0, r.getUpdatedOptions)(t);
            null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
                null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureException(e)
            })
        },
        captureCrash(e, t) {
            let n;
            let i = (0, r.getUpdatedOptions)(t);
            return null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
                t.setExtras(i.extra), t.setTag("crash", "true"), t.setLevel("fatal"), t.addEventProcessor(e => {
                    var t, n;
                    let i = null === (n = e.exception) || void 0 === n ? void 0 : null === (t = n.values) || void 0 === t ? void 0 : t[0];
                    return null != i && (i.mechanism = {
                        ...i.mechanism,
                        handled: !1
                    }), e
                }), n = window.DiscordSentry.captureException(e)
            }), n
        },
        captureMessage(e, t) {
            let n = (0, r.getUpdatedOptions)(t);
            null != window.DiscordSentry && window.DiscordSentry.withScope(t => {
                null != n.tags && t.setTags(n.tags), t.setExtras(n.extra), window.DiscordSentry.captureMessage(e)
            })
        },
        addBreadcrumb(e) {
            (0, i.default)(e)
        },
        profiledRootComponent: e => e,
        crash() {
            throw Error("crash")
        }
    }
}