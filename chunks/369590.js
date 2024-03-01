function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Hub: function() {
            return o
        },
        getCurrentHub: function() {
            return u
        },
        getHubFromCarrier: function() {
            return d
        },
        getMainCarrier: function() {
            return c
        },
        makeMain: function() {
            return l
        }
    }), n("424973"), n("70102");
    var r = n("103787"),
        i = n("958679"),
        a = n("321506"),
        s = n("353055");
    class o {
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            let e = this.getStackTop();
            e.client = t, t && t.setupIntegrations && t.setupIntegrations()
        }
        pushScope() {
            let t = a.Scope.clone(this.getScope());
            return this.getStack().push({
                client: this.getClient(),
                scope: t
            }), t
        }
        popScope() {
            return !(this.getStack().length <= 1) && !!this.getStack().pop()
        }
        withScope(t) {
            let e = this.pushScope();
            try {
                t(e)
            } finally {
                this.popScope()
            }
        }
        getClient() {
            return this.getStackTop().client
        }
        getScope() {
            return this.getStackTop().scope
        }
        getStack() {
            return this._stack
        }
        getStackTop() {
            return this._stack[this._stack.length - 1]
        }
        captureException(t, e) {
            let n = this._lastEventId = e && e.event_id ? e.event_id : (0, r.uuid4)(),
                i = Error("Sentry syntheticException");
            return this._withClient((r, a) => {
                r.captureException(t, {
                    originalException: t,
                    syntheticException: i,
                    ...e,
                    event_id: n
                }, a)
            }), n
        }
        captureMessage(t, e, n) {
            let i = this._lastEventId = n && n.event_id ? n.event_id : (0, r.uuid4)(),
                a = Error(t);
            return this._withClient((r, s) => {
                r.captureMessage(t, e, {
                    originalException: t,
                    syntheticException: a,
                    ...n,
                    event_id: i
                }, s)
            }), i
        }
        captureEvent(t, e) {
            let n = e && e.event_id ? e.event_id : (0, r.uuid4)();
            return !t.type && (this._lastEventId = n), this._withClient((r, i) => {
                r.captureEvent(t, {
                    ...e,
                    event_id: n
                }, i)
            }), n
        }
        lastEventId() {
            return this._lastEventId
        }
        addBreadcrumb(t, e) {
            let {
                scope: n,
                client: i
            } = this.getStackTop();
            if (!i) return;
            let {
                beforeBreadcrumb: a = null,
                maxBreadcrumbs: s = 100
            } = i.getOptions && i.getOptions() || {};
            if (s <= 0) return;
            let o = (0, r.dateTimestampInSeconds)(),
                c = {
                    timestamp: o,
                    ...t
                },
                l = a ? (0, r.consoleSandbox)(() => a(c, e)) : c;
            null !== l && (i.emit && i.emit("beforeAddBreadcrumb", l, e), n.addBreadcrumb(l, s))
        }
        setUser(t) {
            this.getScope().setUser(t)
        }
        setTags(t) {
            this.getScope().setTags(t)
        }
        setExtras(t) {
            this.getScope().setExtras(t)
        }
        setTag(t, e) {
            this.getScope().setTag(t, e)
        }
        setExtra(t, e) {
            this.getScope().setExtra(t, e)
        }
        setContext(t, e) {
            this.getScope().setContext(t, e)
        }
        configureScope(t) {
            let {
                scope: e,
                client: n
            } = this.getStackTop();
            n && t(e)
        }
        run(t) {
            let e = l(this);
            try {
                t(this)
            } finally {
                l(e)
            }
        }
        getIntegration(t) {
            let e = this.getClient();
            if (!e) return null;
            try {
                return e.getIntegration(t)
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Cannot retrieve integration ".concat(t.id, " from the current Hub")), null
            }
        }
        startTransaction(t, e) {
            let n = this._callExtensionMethod("startTransaction", t, e);
            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n && console.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n"), n
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (t) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            let t = this.getStackTop(),
                e = t.scope,
                n = e.getSession();
            n && (0, s.closeSession)(n), this._sendSessionUpdate(), e.setSession()
        }
        startSession(t) {
            let {
                scope: e,
                client: n
            } = this.getStackTop(), {
                release: a,
                environment: o = i.DEFAULT_ENVIRONMENT
            } = n && n.getOptions() || {}, {
                userAgent: c
            } = r.GLOBAL_OBJ.navigator || {}, l = (0, s.makeSession)({
                release: a,
                environment: o,
                user: e.getUser(),
                ...c && {
                    userAgent: c
                },
                ...t
            }), u = e.getSession && e.getSession();
            return u && "ok" === u.status && (0, s.updateSession)(u, {
                status: "exited"
            }), this.endSession(), e.setSession(l), l
        }
        shouldSendDefaultPii() {
            let t = this.getClient(),
                e = t && t.getOptions();
            return !!(e && e.sendDefaultPii)
        }
        _sendSessionUpdate() {
            let {
                scope: t,
                client: e
            } = this.getStackTop(), n = t.getSession();
            n && e && e.captureSession && e.captureSession(n)
        }
        _withClient(t) {
            let {
                scope: e,
                client: n
            } = this.getStackTop();
            n && t(n, e)
        }
        _callExtensionMethod(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
            let a = c(),
                s = a.__SENTRY__;
            if (s && s.extensions && "function" == typeof s.extensions[t]) return s.extensions[t].apply(this, n);
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Extension method ".concat(t, " couldn't be found, doing nothing."))
        }
        constructor(t, e = new a.Scope, n = 4) {
            this._version = n, this._stack = [{
                scope: e
            }], t && this.bindClient(t)
        }
    }

    function c() {
        return r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, r.GLOBAL_OBJ
    }

    function l(t) {
        let e = c(),
            n = d(e);
        return h(e, t), n
    }

    function u() {
        let t = c();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            let e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c();
            return (! function(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }(t) || d(t).isOlderThan(4)) && h(t, new o), d(t)
        }(t)
    }

    function d(t) {
        return (0, r.getGlobalSingleton)("hub", () => new o, t)
    }

    function h(t, e) {
        if (!t) return !1;
        let n = t.__SENTRY__ = t.__SENTRY__ || {};
        return n.hub = e, !0
    }
}