function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Hub: function() {
            return s
        },
        getCurrentHub: function() {
            return l
        },
        getHubFromCarrier: function() {
            return d
        },
        getMainCarrier: function() {
            return u
        },
        makeMain: function() {
            return c
        }
    });
    var r = n("648238"),
        i = n("28434"),
        a = n("703498"),
        o = n("741900");
    class s {
        constructor(t, e = new a.Scope, n = 4) {
            this._version = n, this._stack = [{
                scope: e
            }], t && this.bindClient(t)
        }
        isOlderThan(t) {
            return this._version < t
        }
        bindClient(t) {
            this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
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
            return this._withClient((r, o) => {
                r.captureMessage(t, e, {
                    originalException: t,
                    syntheticException: a,
                    ...n,
                    event_id: i
                }, o)
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
                maxBreadcrumbs: o = 100
            } = i.getOptions && i.getOptions() || {};
            if (o <= 0) return;
            let s = {
                    timestamp: (0, r.dateTimestampInSeconds)(),
                    ...t
                },
                u = a ? (0, r.consoleSandbox)(() => a(s, e)) : s;
            null !== u && (i.emit && i.emit("beforeAddBreadcrumb", u, e), n.addBreadcrumb(u, o))
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
            let e = c(this);
            try {
                t(this)
            } finally {
                c(e)
            }
        }
        getIntegration(t) {
            let e = this.getClient();
            if (!e) return null;
            try {
                return e.getIntegration(t)
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
            }
        }
        startTransaction(t, e) {
            let n = this._callExtensionMethod("startTransaction", t, e);
            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !n && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), n
        }
        traceHeaders() {
            return this._callExtensionMethod("traceHeaders")
        }
        captureSession(t = !1) {
            if (t) return this.endSession();
            this._sendSessionUpdate()
        }
        endSession() {
            let t = this.getStackTop().scope,
                e = t.getSession();
            e && (0, o.closeSession)(e), this._sendSessionUpdate(), t.setSession()
        }
        startSession(t) {
            let {
                scope: e,
                client: n
            } = this.getStackTop(), {
                release: a,
                environment: s = i.DEFAULT_ENVIRONMENT
            } = n && n.getOptions() || {}, {
                userAgent: u
            } = r.GLOBAL_OBJ.navigator || {}, c = (0, o.makeSession)({
                release: a,
                environment: s,
                user: e.getUser(),
                ...u && {
                    userAgent: u
                },
                ...t
            }), l = e.getSession && e.getSession();
            return l && "ok" === l.status && (0, o.updateSession)(l, {
                status: "exited"
            }), this.endSession(), e.setSession(c), c
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
        _callExtensionMethod(t, ...e) {
            let n = u().__SENTRY__;
            if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Extension method ${t} couldn't be found, doing nothing.`)
        }
    }

    function u() {
        return r.GLOBAL_OBJ.__SENTRY__ = r.GLOBAL_OBJ.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, r.GLOBAL_OBJ
    }

    function c(t) {
        let e = u(),
            n = d(e);
        return f(e, t), n
    }

    function l() {
        let t = u();
        if (t.__SENTRY__ && t.__SENTRY__.acs) {
            let e = t.__SENTRY__.acs.getCurrentHub();
            if (e) return e
        }
        return function(t = u()) {
            return (! function(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }(t) || d(t).isOlderThan(4)) && f(t, new s), d(t)
        }(t)
    }

    function d(t) {
        return (0, r.getGlobalSingleton)("hub", () => new s, t)
    }

    function f(t, e) {
        return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0)
    }
}