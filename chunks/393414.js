function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n.d(t, {
        transitionTo: function() {
            return S
        },
        transitionToGuild: function() {
            return m
        },
        currentRouteHasBackNavigation: function() {
            return T
        },
        replaceWith: function() {
            return g
        },
        getHistory: function() {
            return I
        },
        getLastRouteChangeSource: function() {
            return C
        },
        getLastRouteChangeSourceLocationStack: function() {
            return v
        },
        isValidFingerprintRoute: function() {
            return A
        },
        getFingerprintLocation: function() {
            return R
        },
        hasNavigated: function() {
            return N
        },
        back: function() {
            return O
        },
        forward: function() {
            return D
        }
    }), n("424973"), n("781738");
    var a = n("294094"),
        o = n("605250"),
        l = n("659500"),
        u = n("877275"),
        c = n("49111");
    let d = new o.default("Routing/Utils"),
        f = [c.RelativeMarketingURLs.DEVELOPER_PORTAL];
    i = __OVERLAY__ ? (0, a.createMemoryHistory)() : (0, a.createBrowserHistory)();
    let E = !1,
        p = i.listen((e, t) => {
            "REPLACE" !== t && (E = !0, p())
        });

    function h() {
        return !l.ComponentDispatch.hasSubscribers(c.ComponentActions.MODAL_CLOSE) && (n("144747").default.close(), !0)
    }

    function _(e, t) {
        return !!("string" == typeof e && f.some(t => e.startsWith(t))) && (d.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
    }

    function S(e, t, n, a) {
        !_(e, "assign") && (d.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
            source: n
        } : t.source = n), null == t ? i.push(e) : i.push({
            pathname: e,
            ...t
        }), r = n, s = a)
    }

    function m(e, t, n, i, r) {
        d.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
            guildId: e,
            channelId: t,
            messageId: n
        }))), S(c.Routes.CHANNEL(e, t, n), null != r ? r : null, i)
    }

    function T() {
        return null != r && u.ChannelBackNavigationSources.has(r)
    }

    function g(e, t, n) {
        !_(e, "replace") && (d.log("Replacing route with ".concat(e)), "string" == typeof e ? i.replace(e, t) : i.replace(e), r = n)
    }

    function I() {
        return i
    }

    function C() {
        return r
    }

    function v() {
        return s
    }

    function A(e) {
        if (null == e) {
            var t;
            e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
        }
        return !e.startsWith(c.Routes.HANDOFF) && !0
    }

    function R(e) {
        if (null == e) {
            var t;
            e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
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

    function N() {
        return E
    }

    function O() {
        h() && (r = null, i.goBack())
    }

    function D() {
        h() && (r = null, i.goForward())
    }
}