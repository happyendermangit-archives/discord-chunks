function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        captureUserFeedback: function() {
            return x
        },
        close: function() {
            return w
        },
        defaultIntegrations: function() {
            return g
        },
        flush: function() {
            return S
        },
        forceLoad: function() {
            return b
        },
        init: function() {
            return m
        },
        lastEventId: function() {
            return v
        },
        onLoad: function() {
            return E
        },
        showReportDialog: function() {
            return y
        },
        wrap: function() {
            return T
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("903204"),
        o = n("643487"),
        s = n("297280"),
        u = n("382078"),
        c = n("124969"),
        l = n("140735"),
        d = n("612568"),
        f = n("683900"),
        p = n("202406"),
        h = n("393746"),
        _ = n("975927");
    let g = [new r.Integrations.InboundFilters, new r.Integrations.FunctionToString, new u.TryCatch, new c.Breadcrumbs, new s.GlobalHandlers, new l.LinkedErrors, new f.Dedupe, new d.HttpContext];

    function m(t = {}) {
        void 0 === t.defaultIntegrations && (t.defaultIntegrations = g), void 0 === t.release && ("string" == typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), o.WINDOW.SENTRY_RELEASE && o.WINDOW.SENTRY_RELEASE.id && (t.release = o.WINDOW.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
        let e = {
            ...t,
            stackParser: (0, i.stackParserFromStackParserOptions)(t.stackParser || p.defaultStackParser),
            integrations: (0, r.getIntegrationsToSetup)(t),
            transport: t.transport || ((0, i.supportsFetch)() ? h.makeFetchTransport : _.makeXHRTransport)
        };
        (0, r.initAndBind)(a.BrowserClient, e), t.autoSessionTracking && function() {
            if (void 0 === o.WINDOW.document) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                return
            }
            let t = (0, r.getCurrentHub)();
            t.captureSession && (k(t), (0, i.addInstrumentationHandler)("history", ({
                from: t,
                to: e
            }) => {
                !(void 0 === t || t === e) && k((0, r.getCurrentHub)())
            }))
        }()
    }

    function y(t = {}, e = (0, r.getCurrentHub)()) {
        if (!o.WINDOW.document) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Global document not defined in showReportDialog call");
            return
        }
        let {
            client: n,
            scope: a
        } = e.getStackTop(), s = t.dsn || n && n.getDsn();
        if (!s) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("DSN not configured for showReportDialog call");
            return
        }
        a && (t.user = {
            ...a.getUser(),
            ...t.user
        }), !t.eventId && (t.eventId = e.lastEventId());
        let u = o.WINDOW.document.createElement("script");
        u.async = !0, u.crossOrigin = "anonymous", u.src = (0, r.getReportDialogEndpoint)(s, t), t.onLoad && (u.onload = t.onLoad);
        let c = o.WINDOW.document.head || o.WINDOW.document.body;
        c ? c.appendChild(u) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.error("Not injecting report dialog. No injection point found in HTML")
    }

    function v() {
        return (0, r.getCurrentHub)().lastEventId()
    }

    function b() {}

    function E(t) {
        t()
    }

    function S(t) {
        let e = (0, r.getCurrentHub)().getClient();
        return e ? e.flush(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events. No client defined."), (0, i.resolvedSyncPromise)(!1))
    }

    function w(t) {
        let e = (0, r.getCurrentHub)().getClient();
        return e ? e.close(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("Cannot flush events and disable SDK. No client defined."), (0, i.resolvedSyncPromise)(!1))
    }

    function T(t) {
        return (0, o.wrap)(t)()
    }

    function k(t) {
        t.startSession({
            ignoreDuration: !0
        }), t.captureSession()
    }

    function x(t) {
        let e = (0, r.getCurrentHub)().getClient();
        e && e.captureUserFeedback(t)
    }
}