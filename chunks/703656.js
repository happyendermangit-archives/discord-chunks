function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n.d(t, {
        back: function() {
            return L
        },
        currentRouteHasBackNavigation: function() {
            return A
        },
        forward: function() {
            return D
        },
        getFingerprintLocation: function() {
            return C
        },
        getHistory: function() {
            return N
        },
        getLastRouteChangeSource: function() {
            return p
        },
        getLastRouteChangeSourceLocationStack: function() {
            return O
        },
        hasNavigated: function() {
            return g
        },
        isValidFingerprintRoute: function() {
            return R
        },
        replaceWith: function() {
            return m
        },
        transitionTo: function() {
            return S
        },
        transitionToGuild: function() {
            return h
        }
    }), n("653041"), n("757143");
    var a = n("539528"),
        o = n("710845"),
        l = n("585483"),
        u = n("143816"),
        d = n("981631");
    let _ = new o.default("Routing/Utils"),
        c = [d.RelativeMarketingURLs.DEVELOPER_PORTAL];
    i = __OVERLAY__ ? (0, a.createMemoryHistory)() : (0, a.createBrowserHistory)();
    let E = !1,
        I = i.listen((e, t) => {
            "REPLACE" !== t && (E = !0, I())
        });

    function T() {
        return !l.ComponentDispatch.hasSubscribers(d.ComponentActions.MODAL_CLOSE) && (n("574254").default.close(), !0)
    }

    function f(e, t) {
        return !!("string" == typeof e && c.some(t => e.startsWith(t))) && (_.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
    }

    function S(e, t, n, a) {
        !f(e, "assign") && (_.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
            source: n
        } : t.source = n), null == t ? i.push(e) : i.push({
            pathname: e,
            ...t
        }), r = n, s = a)
    }

    function h(e, t, n, i, r) {
        _.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
            guildId: e,
            channelId: t,
            messageId: n
        }))), S(d.Routes.CHANNEL(e, t, n), null != r ? r : null, i)
    }

    function A() {
        return null != r && u.ChannelBackNavigationSources.has(r)
    }

    function m(e, t, n) {
        !f(e, "replace") && (_.log("Replacing route with ".concat(e)), "string" == typeof e ? i.replace(e, t) : i.replace(e), r = n)
    }

    function N() {
        return i
    }

    function p() {
        return r
    }

    function O() {
        return s
    }

    function R(e) {
        if (null == e) {
            var t;
            e = null !== (t = i.location.pathname) && void 0 !== t ? t : ""
        }
        return !e.startsWith(d.Routes.HANDOFF) && !0
    }

    function C(e) {
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

    function g() {
        return E
    }

    function L() {
        T() && (r = null, i.goBack())
    }

    function D() {
        T() && (r = null, i.goForward())
    }
}