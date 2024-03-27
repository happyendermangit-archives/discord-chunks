function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Breadcrumbs: function() {
            return b.Breadcrumbs
        },
        BrowserClient: function() {
            return a.BrowserClient
        },
        BrowserProfilingIntegration: function() {
            return m.BrowserProfilingIntegration
        },
        BrowserTracing: function() {
            return h.BrowserTracing
        },
        Dedupe: function() {
            return w.Dedupe
        },
        FunctionToString: function() {
            return r.FunctionToString
        },
        GlobalHandlers: function() {
            return y.GlobalHandlers
        },
        HttpContext: function() {
            return S.HttpContext
        },
        Hub: function() {
            return r.Hub
        },
        InboundFilters: function() {
            return r.InboundFilters
        },
        Integrations: function() {
            return k
        },
        LinkedErrors: function() {
            return E.LinkedErrors
        },
        ModuleMetadata: function() {
            return r.ModuleMetadata
        },
        Replay: function() {
            return p.Replay
        },
        SDK_VERSION: function() {
            return r.SDK_VERSION
        },
        Scope: function() {
            return r.Scope
        },
        TryCatch: function() {
            return v.TryCatch
        },
        WINDOW: function() {
            return i.WINDOW
        },
        addBreadcrumb: function() {
            return r.addBreadcrumb
        },
        addGlobalEventProcessor: function() {
            return r.addGlobalEventProcessor
        },
        addTracingExtensions: function() {
            return r.addTracingExtensions
        },
        captureEvent: function() {
            return r.captureEvent
        },
        captureException: function() {
            return r.captureException
        },
        captureMessage: function() {
            return r.captureMessage
        },
        captureUserFeedback: function() {
            return d.captureUserFeedback
        },
        chromeStackLineParser: function() {
            return u.chromeStackLineParser
        },
        close: function() {
            return d.close
        },
        configureScope: function() {
            return r.configureScope
        },
        createTransport: function() {
            return r.createTransport
        },
        createUserFeedbackEnvelope: function() {
            return l.createUserFeedbackEnvelope
        },
        defaultIntegrations: function() {
            return d.defaultIntegrations
        },
        defaultRequestInstrumentationOptions: function() {
            return h.defaultRequestInstrumentationOptions
        },
        defaultStackLineParsers: function() {
            return u.defaultStackLineParsers
        },
        defaultStackParser: function() {
            return u.defaultStackParser
        },
        eventFromException: function() {
            return c.eventFromException
        },
        eventFromMessage: function() {
            return c.eventFromMessage
        },
        extractTraceparentData: function() {
            return r.extractTraceparentData
        },
        flush: function() {
            return d.flush
        },
        forceLoad: function() {
            return d.forceLoad
        },
        geckoStackLineParser: function() {
            return u.geckoStackLineParser
        },
        getActiveTransaction: function() {
            return r.getActiveTransaction
        },
        getCurrentHub: function() {
            return r.getCurrentHub
        },
        getHubFromCarrier: function() {
            return r.getHubFromCarrier
        },
        init: function() {
            return d.init
        },
        instrumentOutgoingRequests: function() {
            return h.instrumentOutgoingRequests
        },
        lastEventId: function() {
            return d.lastEventId
        },
        makeBrowserOfflineTransport: function() {
            return _.makeBrowserOfflineTransport
        },
        makeFetchTransport: function() {
            return o.makeFetchTransport
        },
        makeMain: function() {
            return r.makeMain
        },
        makeMultiplexedTransport: function() {
            return r.makeMultiplexedTransport
        },
        makeXHRTransport: function() {
            return s.makeXHRTransport
        },
        onLoad: function() {
            return d.onLoad
        },
        onProfilingStartRouteTransaction: function() {
            return g.onProfilingStartRouteTransaction
        },
        opera10StackLineParser: function() {
            return u.opera10StackLineParser
        },
        opera11StackLineParser: function() {
            return u.opera11StackLineParser
        },
        setContext: function() {
            return r.setContext
        },
        setExtra: function() {
            return r.setExtra
        },
        setExtras: function() {
            return r.setExtras
        },
        setTag: function() {
            return r.setTag
        },
        setTags: function() {
            return r.setTags
        },
        setUser: function() {
            return r.setUser
        },
        showReportDialog: function() {
            return d.showReportDialog
        },
        spanStatusfromHttpCode: function() {
            return r.spanStatusfromHttpCode
        },
        startTransaction: function() {
            return r.startTransaction
        },
        trace: function() {
            return r.trace
        },
        winjsStackLineParser: function() {
            return u.winjsStackLineParser
        },
        withScope: function() {
            return r.withScope
        },
        wrap: function() {
            return d.wrap
        }
    });
    var r = n("91320"),
        i = n("643487"),
        a = n("903204"),
        o = n("393746"),
        s = n("975927"),
        u = n("202406"),
        c = n("590171"),
        l = n("184612"),
        d = n("846297"),
        f = n("53383"),
        p = n("438142"),
        h = n("752875"),
        _ = n("490753"),
        g = n("65534"),
        m = n("643714"),
        y = n("297280"),
        v = n("382078"),
        b = n("124969"),
        E = n("140735"),
        S = n("612568"),
        w = n("683900");
    let T = {};
    i.WINDOW.Sentry && i.WINDOW.Sentry.Integrations && (T = i.WINDOW.Sentry.Integrations);
    let k = {
        ...T,
        ...r.Integrations,
        ...f
    }
}