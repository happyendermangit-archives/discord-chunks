function(e, t, n) {
    "use strict";
    let i, s, r;
    n.r(t), n.d(t, {
        transitionTo: function() {
            return m
        },
        transitionToGuild: function() {
            return p
        },
        currentRouteHasBackNavigation: function() {
            return S
        },
        replaceWith: function() {
            return v
        },
        getHistory: function() {
            return T
        },
        getLastRouteChangeSource: function() {
            return I
        },
        getLastRouteChangeSourceLocationStack: function() {
            return C
        },
        isValidFingerprintRoute: function() {
            return A
        },
        getFingerprintLocation: function() {
            return y
        },
        hasNavigated: function() {
            return N
        },
        back: function() {
            return R
        },
        forward: function() {
            return O
        }
    }), n("424973"), n("781738");
    var a = n("294094"),
        o = n("605250"),
        l = n("659500"),
        u = n("877275"),
        d = n("49111");
    let c = new o.default("Routing/Utils"),
        f = [d.RelativeMarketingURLs.DEVELOPER_PORTAL];
    i = __OVERLAY__ ? (0, a.createMemoryHistory)() : (0, a.createBrowserHistory)();
    let _ = !1,
        E = i.listen((e, t) => {
            "REPLACE" !== t && (_ = !0, E())
        });

    function h() {
        return !l.ComponentDispatch.hasSubscribers(d.ComponentActions.MODAL_CLOSE) && (n("144747").default.close(), !0)
    }

    function g(e, t) {
        return !!("string" == typeof e && f.some(t => e.startsWith(t))) && (c.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
    }

    function m(e, t, n, a) {
        !g(e, "assign") && (c.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
            source: n
        } : t.source = n), null == t ? i.push(e) : i.push({
            pathname: e,
            ...t
        }), s = n, r = a)
    }

    function p(e, t, n, i, s) {
        c.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
            guildId: e,
            channelId: t,
            messageId: n
        }))), m(d.Routes.CHANNEL(e, t, n), null != s ? s : null, i)
    }

    function S() {
        return null != s && u.ChannelBackNavigationSources.has(s)
    }

    function v(e, t, n) {
        !g(e, "replace") && (c.log("Replacing route with ".concat(e)), "string" == typeof e ? i.replace(e, t) : i.replace(e), s = n)
    }

    function T() {
        return i
    }

    function I() {
        return s
    }

    function C() {
        return r
    }

    function A(e) {
        if (null == e) {
            var t;
            e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
        }
        return !e.startsWith(d.Routes.HANDOFF) && !0
    }

    function y(e) {
        if (null == e) {
            var t;
            e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
        }
        if (e.startsWith(d.Routes.LOGIN)) return d.PageAnalyticsLocations.LOGIN;
        if (e.startsWith(d.Routes.REGISTER)) return d.PageAnalyticsLocations.REGISTER;
        if (e.startsWith(d.Routes.INVITE(""))) return d.PageAnalyticsLocations.INVITE;
        else if (e.startsWith(d.Routes.VERIFY)) return d.PageAnalyticsLocations.VERIFY;
        else if (e.startsWith(d.Routes.DISABLE_EMAIL_NOTIFICATIONS)) return d.PageAnalyticsLocations.DISABLE_EMAIL_NOTIFICATIONS;
        else if (e.startsWith(d.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return d.PageAnalyticsLocations.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
        else if (e.startsWith(d.Routes.REJECT_IP)) return d.PageAnalyticsLocations.REJECT_IP;
        else if (e.startsWith(d.Routes.REJECT_MFA)) return d.PageAnalyticsLocations.REJECT_MFA;
        else if (e.startsWith(d.Routes.AUTHORIZE_IP)) return d.PageAnalyticsLocations.AUTHORIZE_IP;
        else if (e.startsWith(d.Routes.AUTHORIZE_PAYMENT)) return d.PageAnalyticsLocations.AUTHORIZE_PAYMENT;
        else if (e.startsWith(d.Routes.RESET)) return d.PageAnalyticsLocations.RESET;
        else if (e.startsWith(d.Routes.REPORT)) return d.PageAnalyticsLocations.REPORT;
        else if (e.startsWith(d.Routes.REPORT_SECOND_LOOK)) return d.PageAnalyticsLocations.REPORT_SECOND_LOOK;
        return e
    }

    function N() {
        return _
    }

    function R() {
        h() && (s = null, i.goBack())
    }

    function O() {
        h() && (s = null, i.goForward())
    }
}