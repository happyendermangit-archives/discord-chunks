function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        applyAggregateErrorsToEvent: function() {
            return r.applyAggregateErrorsToEvent
        },
        getDomElement: function() {
            return i.getDomElement
        },
        getLocationHref: function() {
            return i.getLocationHref
        },
        htmlTreeAsString: function() {
            return i.htmlTreeAsString
        },
        dsnFromString: function() {
            return a.dsnFromString
        },
        dsnToString: function() {
            return a.dsnToString
        },
        makeDsn: function() {
            return a.makeDsn
        },
        SentryError: function() {
            return s.SentryError
        },
        GLOBAL_OBJ: function() {
            return o.GLOBAL_OBJ
        },
        getGlobalSingleton: function() {
            return o.getGlobalSingleton
        },
        SENTRY_XHR_DATA_KEY: function() {
            return c.SENTRY_XHR_DATA_KEY
        },
        addInstrumentationHandler: function() {
            return c.addInstrumentationHandler
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
        isPlainObject: function() {
            return l.isPlainObject
        },
        isPrimitive: function() {
            return l.isPrimitive
        },
        isString: function() {
            return l.isString
        },
        isThenable: function() {
            return l.isThenable
        },
        consoleSandbox: function() {
            return u.consoleSandbox
        },
        logger: function() {
            return u.logger
        },
        addExceptionMechanism: function() {
            return d.addExceptionMechanism
        },
        addExceptionTypeValue: function() {
            return d.addExceptionTypeValue
        },
        arrayify: function() {
            return d.arrayify
        },
        checkOrSetAlreadyCaught: function() {
            return d.checkOrSetAlreadyCaught
        },
        getEventDescription: function() {
            return d.getEventDescription
        },
        uuid4: function() {
            return d.uuid4
        },
        isNodeEnv: function() {
            return h.isNodeEnv
        },
        normalize: function() {
            return f.normalize
        },
        normalizeToSize: function() {
            return f.normalizeToSize
        },
        addNonEnumerableProperty: function() {
            return p.addNonEnumerableProperty
        },
        dropUndefinedKeys: function() {
            return p.dropUndefinedKeys
        },
        extractExceptionKeysForMessage: function() {
            return p.extractExceptionKeysForMessage
        },
        fill: function() {
            return p.fill
        },
        getOriginalFunction: function() {
            return p.getOriginalFunction
        },
        markFunctionWrapped: function() {
            return p.markFunctionWrapped
        },
        urlEncode: function() {
            return p.urlEncode
        },
        makePromiseBuffer: function() {
            return _.makePromiseBuffer
        },
        severityLevelFromString: function() {
            return g.severityLevelFromString
        },
        createStackParser: function() {
            return m.createStackParser
        },
        getFunctionName: function() {
            return m.getFunctionName
        },
        stackParserFromStackParserOptions: function() {
            return m.stackParserFromStackParserOptions
        },
        safeJoin: function() {
            return y.safeJoin
        },
        stringMatchesSomePattern: function() {
            return y.stringMatchesSomePattern
        },
        truncate: function() {
            return y.truncate
        },
        isNativeFetch: function() {
            return v.isNativeFetch
        },
        supportsFetch: function() {
            return v.supportsFetch
        },
        SyncPromise: function() {
            return E.SyncPromise
        },
        rejectedSyncPromise: function() {
            return E.rejectedSyncPromise
        },
        resolvedSyncPromise: function() {
            return E.resolvedSyncPromise
        },
        browserPerformanceTimeOrigin: function() {
            return b.browserPerformanceTimeOrigin
        },
        dateTimestampInSeconds: function() {
            return b.dateTimestampInSeconds
        },
        timestampInSeconds: function() {
            return b.timestampInSeconds
        },
        extractTraceparentData: function() {
            return S.extractTraceparentData
        },
        generateSentryTraceHeader: function() {
            return S.generateSentryTraceHeader
        },
        tracingContextFromHeaders: function() {
            return S.tracingContextFromHeaders
        },
        getSDKSource: function() {
            return w.getSDKSource
        },
        addItemToEnvelope: function() {
            return T.addItemToEnvelope
        },
        createAttachmentEnvelopeItem: function() {
            return T.createAttachmentEnvelopeItem
        },
        createEnvelope: function() {
            return T.createEnvelope
        },
        createEventEnvelopeHeaders: function() {
            return T.createEventEnvelopeHeaders
        },
        envelopeContainsItemType: function() {
            return T.envelopeContainsItemType
        },
        envelopeItemTypeToDataCategory: function() {
            return T.envelopeItemTypeToDataCategory
        },
        forEachEnvelopeItem: function() {
            return T.forEachEnvelopeItem
        },
        getSdkMetadataForEnvelopeHeader: function() {
            return T.getSdkMetadataForEnvelopeHeader
        },
        parseEnvelope: function() {
            return T.parseEnvelope
        },
        serializeEnvelope: function() {
            return T.serializeEnvelope
        },
        createClientReportEnvelope: function() {
            return k.createClientReportEnvelope
        },
        isRateLimited: function() {
            return R.isRateLimited
        },
        parseRetryAfterHeader: function() {
            return R.parseRetryAfterHeader
        },
        updateRateLimits: function() {
            return R.updateRateLimits
        },
        BAGGAGE_HEADER_NAME: function() {
            return x.BAGGAGE_HEADER_NAME
        },
        dynamicSamplingContextToSentryBaggageHeader: function() {
            return x.dynamicSamplingContextToSentryBaggageHeader
        },
        parseUrl: function() {
            return D.parseUrl
        }
    });
    var r = n("198373"),
        i = n("315250"),
        a = n("704391"),
        s = n("933029"),
        o = n("232945"),
        c = n("78672"),
        l = n("825167"),
        u = n("587254"),
        d = n("648473"),
        h = n("365504"),
        f = n("696634"),
        p = n("654069"),
        _ = n("285696"),
        g = n("292441"),
        m = n("979605"),
        y = n("768538"),
        v = n("78634"),
        E = n("126806"),
        b = n("498736"),
        S = n("451533"),
        w = n("149473"),
        T = n("870322"),
        k = n("603970"),
        R = n("656714"),
        x = n("167875"),
        D = n("609090")
}