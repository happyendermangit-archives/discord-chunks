function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        back: function() {
            return N
        },
        currentRouteHasBackNavigation: function() {
            return h
        },
        forward: function() {
            return R
        },
        getFingerprintLocation: function() {
            return A
        },
        getHistory: function() {
            return T
        },
        getLastRouteChangeSource: function() {
            return S
        },
        getLastRouteChangeSourceLocationStack: function() {
            return v
        },
        hasNavigated: function() {
            return b
        },
        isValidFingerprintRoute: function() {
            return g
        },
        replaceWith: function() {
            return O
        },
        transitionTo: function() {
            return y
        },
        transitionToGuild: function() {
            return I
        }
    });
    var r, o, i, a = n("539528"),
        u = n("35523"),
        s = n("120447"),
        l = n("989635"),
        c = n("281767"),
        f = new u.default("Routing/Utils"),
        d = [c.RelativeMarketingURLs.DEVELOPER_PORTAL];
    r = __OVERLAY__ ? (0, a.createMemoryHistory)() : (0, a.createBrowserHistory)();
    var _ = !1,
        E = r.listen(function(e, t) {
            "REPLACE" !== t && (_ = !0, E())
        });

    function p() {
        return !s.ComponentDispatch.hasSubscribers(c.ComponentActions.MODAL_CLOSE) && (n("772662").default.close(), !0)
    }

    function m(e, t) {
        return !!("string" == typeof e && d.some(function(t) {
            return e.startsWith(t)
        })) && (f.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
    }

    function y(e, t, n, a) {
        !m(e, "assign") && (f.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
            source: n
        } : t.source = n), null == t ? r.push(e) : r.push(function(e) {
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
        }({
            pathname: e
        }, t)), o = n, i = a)
    }

    function I(e, t, n, r, o) {
        f.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
            guildId: e,
            channelId: t,
            messageId: n
        }))), y(c.Routes.CHANNEL(e, t, n), null != o ? o : null, r)
    }

    function h() {
        return null != o && l.ChannelBackNavigationSources.has(o)
    }

    function O(e, t, n) {
        !m(e, "replace") && (f.log("Replacing route with ".concat(e)), "string" == typeof e ? r.replace(e, t) : r.replace(e), o = n)
    }

    function T() {
        return r
    }

    function S() {
        return o
    }

    function v() {
        return i
    }

    function g(e) {
        if (null == e) {
            var t;
            e = null !== (t = r.location.pathname) && void 0 !== t ? t : ""
        }
        return !e.startsWith(c.Routes.HANDOFF) && !0
    }

    function A(e) {
        if (null == e) {
            var t;
            e = null !== (t = r.location.pathname) && void 0 !== t ? t : ""
        }
        if (e.startsWith(c.Routes.LOGIN)) return c.PageAnalyticsLocations.LOGIN;
        if (e.startsWith(c.Routes.REGISTER)) return c.PageAnalyticsLocations.REGISTER;
        if (e.startsWith(c.Routes.INVITE(""))) return c.PageAnalyticsLocations.INVITE;
        else if (e.startsWith(c.Routes.VERIFY)) return c.PageAnalyticsLocations.VERIFY;
        else if (e.startsWith(c.Routes.DISABLE_EMAIL_NOTIFICATIONS)) return c.PageAnalyticsLocations.DISABLE_EMAIL_NOTIFICATIONS;
        else if (e.startsWith(c.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return c.PageAnalyticsLocations.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
        else if (e.startsWith(c.Routes.REJECT_IP)) return c.PageAnalyticsLocations.REJECT_IP;
        else if (e.startsWith(c.Routes.REJECT_MFA)) return c.PageAnalyticsLocations.REJECT_MFA;
        else if (e.startsWith(c.Routes.AUTHORIZE_IP)) return c.PageAnalyticsLocations.AUTHORIZE_IP;
        else if (e.startsWith(c.Routes.AUTHORIZE_PAYMENT)) return c.PageAnalyticsLocations.AUTHORIZE_PAYMENT;
        else if (e.startsWith(c.Routes.RESET)) return c.PageAnalyticsLocations.RESET;
        else if (e.startsWith(c.Routes.REPORT)) return c.PageAnalyticsLocations.REPORT;
        else if (e.startsWith(c.Routes.REPORT_SECOND_LOOK)) return c.PageAnalyticsLocations.REPORT_SECOND_LOOK;
        return e
    }

    function b() {
        return _
    }

    function N() {
        p() && (o = null, r.goBack())
    }

    function R() {
        p() && (o = null, r.goForward())
    }
}