function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BaseClient: function() {
            return p.BaseClient
        },
        DEFAULT_ENVIRONMENT: function() {
            return w.DEFAULT_ENVIRONMENT
        },
        FunctionToString: function() {
            return k.FunctionToString
        },
        Hub: function() {
            return c.Hub
        },
        InboundFilters: function() {
            return x.InboundFilters
        },
        Integrations: function() {
            return b
        },
        ModuleMetadata: function() {
            return T.ModuleMetadata
        },
        SDK_VERSION: function() {
            return y.SDK_VERSION
        },
        Scope: function() {
            return d.Scope
        },
        TRACING_DEFAULTS: function() {
            return i.TRACING_DEFAULTS
        },
        addBreadcrumb: function() {
            return l.addBreadcrumb
        },
        addGlobalEventProcessor: function() {
            return d.addGlobalEventProcessor
        },
        addTracingExtensions: function() {
            return r.addTracingExtensions
        },
        captureEvent: function() {
            return l.captureEvent
        },
        captureException: function() {
            return l.captureException
        },
        captureMessage: function() {
            return l.captureMessage
        },
        configureScope: function() {
            return l.configureScope
        },
        createTransport: function() {
            return _.createTransport
        },
        extractTraceparentData: function() {
            return R.extractTraceparentData
        },
        getActiveTransaction: function() {
            return o.getActiveTransaction
        },
        getCurrentHub: function() {
            return c.getCurrentHub
        },
        getDynamicSamplingContextFromClient: function() {
            return u.getDynamicSamplingContextFromClient
        },
        getHubFromCarrier: function() {
            return c.getHubFromCarrier
        },
        getIntegrationsToSetup: function() {
            return v.getIntegrationsToSetup
        },
        getReportDialogEndpoint: function() {
            return f.getReportDialogEndpoint
        },
        hasTracingEnabled: function() {
            return S.hasTracingEnabled
        },
        initAndBind: function() {
            return h.initAndBind
        },
        makeMain: function() {
            return c.makeMain
        },
        makeMultiplexedTransport: function() {
            return m.makeMultiplexedTransport
        },
        makeOfflineTransport: function() {
            return g.makeOfflineTransport
        },
        prepareEvent: function() {
            return E.prepareEvent
        },
        setContext: function() {
            return l.setContext
        },
        setExtra: function() {
            return l.setExtra
        },
        setExtras: function() {
            return l.setExtras
        },
        setTag: function() {
            return l.setTag
        },
        setTags: function() {
            return l.setTags
        },
        setUser: function() {
            return l.setUser
        },
        spanStatusfromHttpCode: function() {
            return a.spanStatusfromHttpCode
        },
        startIdleTransaction: function() {
            return r.startIdleTransaction
        },
        startTransaction: function() {
            return l.startTransaction
        },
        trace: function() {
            return s.trace
        },
        withScope: function() {
            return l.withScope
        }
    });
    var r = n("90668"),
        i = n("376097"),
        a = n("48950"),
        o = n("147816"),
        s = n("468174"),
        u = n("154405"),
        l = n("138122"),
        c = n("876122"),
        d = n("703498"),
        f = n("507506"),
        p = n("861579"),
        h = n("110575"),
        _ = n("347421"),
        g = n("499833"),
        m = n("449701"),
        y = n("139782"),
        v = n("595208"),
        b = n("89837"),
        E = n("392405"),
        S = n("633401"),
        w = n("28434"),
        T = n("333878"),
        k = n("740054"),
        x = n("344106"),
        R = n("648238")
}