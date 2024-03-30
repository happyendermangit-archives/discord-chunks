function(t, n, e) {
    "use strict";
    e.r(n), e.d(n, {
        getCurrentHub: function() {
            return u
        }
    });
    var r = e("109393"),
        i = e("524820"),
        o = e("680835");
    t = e.hmd(t);
    var s = function() {
        function t(t, n, e) {
            void 0 === n && (n = new o.Scope), void 0 === e && (e = 3), this._version = e, this._stack = [], this._stack.push({
                client: t,
                scope: n
            })
        }
        return t.prototype._invokeClient = function(t) {
            for (var n, e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
            var o = this.getStackTop();
            o && o.client && o.client[t] && (n = o.client)[t].apply(n, r.__spread(e, [o.scope]))
        }, t.prototype.isOlderThan = function(t) {
            return this._version < t
        }, t.prototype.bindClient = function(t) {
            this.getStackTop().client = t
        }, t.prototype.pushScope = function() {
            var t = this.getStack(),
                n = t.length > 0 ? t[t.length - 1].scope : void 0,
                e = o.Scope.clone(n);
            return this.getStack().push({
                client: this.getClient(),
                scope: e
            }), e
        }, t.prototype.popScope = function() {
            return void 0 !== this.getStack().pop()
        }, t.prototype.withScope = function(t) {
            var n = this.pushScope();
            try {
                t(n)
            } finally {
                this.popScope()
            }
        }, t.prototype.getClient = function() {
            return this.getStackTop().client
        }, t.prototype.getScope = function() {
            return this.getStackTop().scope
        }, t.prototype.getStack = function() {
            return this._stack
        }, t.prototype.getStackTop = function() {
            return this._stack[this._stack.length - 1]
        }, t.prototype.captureException = function(t, n) {
            var e = this._lastEventId = (0, i.uuid4)(),
                o = n;
            if (!n) {
                var s = void 0;
                try {
                    throw Error("Sentry syntheticException")
                } catch (t) {
                    s = t
                }
                o = {
                    originalException: t,
                    syntheticException: s
                }
            }
            return this._invokeClient("captureException", t, r.__assign({}, o, {
                event_id: e
            })), e
        }, t.prototype.captureMessage = function(t, n, e) {
            var o = this._lastEventId = (0, i.uuid4)(),
                s = e;
            if (!e) {
                var c = void 0;
                try {
                    throw Error(t)
                } catch (t) {
                    c = t
                }
                s = {
                    originalException: t,
                    syntheticException: c
                }
            }
            return this._invokeClient("captureMessage", t, n, r.__assign({}, s, {
                event_id: o
            })), o
        }, t.prototype.captureEvent = function(t, n) {
            var e = this._lastEventId = (0, i.uuid4)();
            return this._invokeClient("captureEvent", t, r.__assign({}, n, {
                event_id: e
            })), e
        }, t.prototype.lastEventId = function() {
            return this._lastEventId
        }, t.prototype.addBreadcrumb = function(t, n) {
            var e = this.getStackTop();
            if (!e.scope || !e.client) return;
            var o = e.client.getOptions && e.client.getOptions() || {},
                s = o.beforeBreadcrumb,
                c = void 0 === s ? null : s,
                a = o.maxBreadcrumbs,
                u = void 0 === a ? 100 : a;
            if (!(u <= 0)) {
                var _ = (0, i.timestampWithMs)(),
                    p = r.__assign({
                        timestamp: _
                    }, t),
                    h = c ? (0, i.consoleSandbox)(function() {
                        return c(p, n)
                    }) : p;
                null !== h && e.scope.addBreadcrumb(h, Math.min(u, 100))
            }
        }, t.prototype.setUser = function(t) {
            var n = this.getStackTop();
            n.scope && n.scope.setUser(t)
        }, t.prototype.setTags = function(t) {
            var n = this.getStackTop();
            n.scope && n.scope.setTags(t)
        }, t.prototype.setExtras = function(t) {
            var n = this.getStackTop();
            n.scope && n.scope.setExtras(t)
        }, t.prototype.setTag = function(t, n) {
            var e = this.getStackTop();
            e.scope && e.scope.setTag(t, n)
        }, t.prototype.setExtra = function(t, n) {
            var e = this.getStackTop();
            e.scope && e.scope.setExtra(t, n)
        }, t.prototype.setContext = function(t, n) {
            var e = this.getStackTop();
            e.scope && e.scope.setContext(t, n)
        }, t.prototype.configureScope = function(t) {
            var n = this.getStackTop();
            n.scope && n.client && t(n.scope)
        }, t.prototype.run = function(t) {
            var n = a(this);
            try {
                t(this)
            } finally {
                a(n)
            }
        }, t.prototype.getIntegration = function(t) {
            var n = this.getClient();
            if (!n) return null;
            try {
                return n.getIntegration(t)
            } catch (n) {
                return i.logger.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
            }
        }, t.prototype.startSpan = function(t, n) {
            return void 0 === n && (n = !1), this._callExtensionMethod("startSpan", t, n)
        }, t.prototype.traceHeaders = function() {
            return this._callExtensionMethod("traceHeaders")
        }, t.prototype._callExtensionMethod = function(t) {
            for (var n = [], e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
            var r = c().__SENTRY__;
            if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, n);
            i.logger.warn("Extension method " + t + " couldn't be found, doing nothing.")
        }, t
    }();

    function c() {
        var t = (0, i.getGlobalObject)();
        return t.__SENTRY__ = t.__SENTRY__ || {
            extensions: {},
            hub: void 0
        }, t
    }

    function a(t) {
        var n = c(),
            e = p(n);
        return h(n, t), e
    }

    function u() {
        var n = c();
        return ((!_(n) || p(n).isOlderThan(3)) && h(n, new s), (0, i.isNodeEnv)()) ? function(n) {
            try {
                var e = (0, i.dynamicRequire)(t, "domain").active;
                if (!e) return p(n);
                if (!_(e) || p(e).isOlderThan(3)) {
                    var r = p(n).getStackTop();
                    h(e, new s(r.client, o.Scope.clone(r.scope)))
                }
                return p(e)
            } catch (t) {
                return p(n)
            }
        }(n) : p(n)
    }

    function _(t) {
        return !!t && !!t.__SENTRY__ && !!t.__SENTRY__.hub || !1
    }

    function p(t) {
        return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new s, t.__SENTRY__.hub)
    }

    function h(t, n) {
        return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = n, !0)
    }
}