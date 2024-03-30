function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BAGGAGE_HEADER_NAME: function() {
            return R.BAGGAGE_HEADER_NAME
        },
        GLOBAL_OBJ: function() {
            return s.GLOBAL_OBJ
        },
        SENTRY_XHR_DATA_KEY: function() {
            return u.SENTRY_XHR_DATA_KEY
        },
        SentryError: function() {
            return o.SentryError
        },
        SyncPromise: function() {
            return b.SyncPromise
        },
        addExceptionMechanism: function() {
            return d.addExceptionMechanism
        },
        addExceptionTypeValue: function() {
            return d.addExceptionTypeValue
        },
        addInstrumentationHandler: function() {
            return u.addInstrumentationHandler
        },
        addItemToEnvelope: function() {
            return T.addItemToEnvelope
        },
        addNonEnumerableProperty: function() {
            return h.addNonEnumerableProperty
        },
        applyAggregateErrorsToEvent: function() {
            return r.applyAggregateErrorsToEvent
        },
        arrayify: function() {
            return d.arrayify
        },
        browserPerformanceTimeOrigin: function() {
            return E.browserPerformanceTimeOrigin
        },
        checkOrSetAlreadyCaught: function() {
            return d.checkOrSetAlreadyCaught
        },
        consoleSandbox: function() {
            return c.consoleSandbox
        },
        createAttachmentEnvelopeItem: function() {
            return T.createAttachmentEnvelopeItem
        },
        createClientReportEnvelope: function() {
            return k.createClientReportEnvelope
        },
        createEnvelope: function() {
            return T.createEnvelope
        },
        createEventEnvelopeHeaders: function() {
            return T.createEventEnvelopeHeaders
        },
        createStackParser: function() {
            return m.createStackParser
        },
        dateTimestampInSeconds: function() {
            return E.dateTimestampInSeconds
        },
        dropUndefinedKeys: function() {
            return h.dropUndefinedKeys
        },
        dsnFromString: function() {
            return a.dsnFromString
        },
        dsnToString: function() {
            return a.dsnToString
        },
        dynamicSamplingContextToSentryBaggageHeader: function() {
            return R.dynamicSamplingContextToSentryBaggageHeader
        },
        envelopeContainsItemType: function() {
            return T.envelopeContainsItemType
        },
        envelopeItemTypeToDataCategory: function() {
            return T.envelopeItemTypeToDataCategory
        },
        extractExceptionKeysForMessage: function() {
            return h.extractExceptionKeysForMessage
        },
        extractTraceparentData: function() {
            return S.extractTraceparentData
        },
        fill: function() {
            return h.fill
        },
        forEachEnvelopeItem: function() {
            return T.forEachEnvelopeItem
        },
        generateSentryTraceHeader: function() {
            return S.generateSentryTraceHeader
        },
        getDomElement: function() {
            return i.getDomElement
        },
        getEventDescription: function() {
            return d.getEventDescription
        },
        getFunctionName: function() {
            return m.getFunctionName
        },
        getGlobalSingleton: function() {
            return s.getGlobalSingleton
        },
        getLocationHref: function() {
            return i.getLocationHref
        },
        getOriginalFunction: function() {
            return h.getOriginalFunction
        },
        getSDKSource: function() {
            return w.getSDKSource
        },
        getSdkMetadataForEnvelopeHeader: function() {
            return T.getSdkMetadataForEnvelopeHeader
        },
        htmlTreeAsString: function() {
            return i.htmlTreeAsString
        },
        isDOMError: function() {
            return l.isDOMError
        },
        isDOMException: function() {
            return l.isDOMException
        },
        isError: function() {
            return l.isError
        },
        isErrorEvent: function() {
            return l.isErrorEvent
        },
        isEvent: function() {
            return l.isEvent
        },
        isInstanceOf: function() {
            return l.isInstanceOf
        },
        isNaN: function() {
            return l.isNaN
        },
        isNativeFetch: function() {
            return v.isNativeFetch
        },
        isNodeEnv: function() {
            return f.isNodeEnv
        },
        isPlainObject: function() {
            return l.isPlainObject
        },
        isPrimitive: function() {
            return l.isPrimitive
        },
        isRateLimited: function() {
            return x.isRateLimited
        },
        isString: function() {
            return l.isString
        },
        isThenable: function() {
            return l.isThenable
        },
        logger: function() {
            return c.logger
        },
        makeDsn: function() {
            return a.makeDsn
        },
        makePromiseBuffer: function() {
            return _.makePromiseBuffer
        },
        markFunctionWrapped: function() {
            return h.markFunctionWrapped
        },
        normalize: function() {
            return p.normalize
        },
        normalizeToSize: function() {
            return p.normalizeToSize
        },
        parseEnvelope: function() {
            return T.parseEnvelope
        },
        parseRetryAfterHeader: function() {
            return x.parseRetryAfterHeader
        },
        parseUrl: function() {
            return N.parseUrl
        },
        rejectedSyncPromise: function() {
            return b.rejectedSyncPromise
        },
        resolvedSyncPromise: function() {
            return b.resolvedSyncPromise
        },
        safeJoin: function() {
            return y.safeJoin
        },
        serializeEnvelope: function() {
            return T.serializeEnvelope
        },
        severityLevelFromString: function() {
            return g.severityLevelFromString
        },
        stackParserFromStackParserOptions: function() {
            return m.stackParserFromStackParserOptions
        },
        stringMatchesSomePattern: function() {
            return y.stringMatchesSomePattern
        },
        supportsFetch: function() {
            return v.supportsFetch
        },
        timestampInSeconds: function() {
            return E.timestampInSeconds
        },
        tracingContextFromHeaders: function() {
            return S.tracingContextFromHeaders
        },
        truncate: function() {
            return y.truncate
        },
        updateRateLimits: function() {
            return x.updateRateLimits
        },
        urlEncode: function() {
            return h.urlEncode
        },
        uuid4: function() {
            return d.uuid4
        }
    });
    var r = n("147658"),
        i = n("829919"),
        a = n("177668"),
        o = n("303155"),
        s = n("24716"),
        u = n("793884"),
        l = n("46834"),
        c = n("529866"),
        d = n("862315"),
        f = n("635602"),
        p = n("10674"),
        h = n("442853"),
        _ = n("765497"),
        g = n("869139"),
        m = n("432038"),
        y = n("336344"),
        v = n("698892"),
        b = n("363517"),
        E = n("868145"),
        S = n("874230"),
        w = n("776914"),
        T = n("50074"),
        k = n("854569"),
        x = n("128603"),
        R = n("545459"),
        N = n("841866")
}