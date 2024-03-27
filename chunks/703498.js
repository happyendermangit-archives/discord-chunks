function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Scope: function() {
            return a
        },
        addGlobalEventProcessor: function() {
            return s
        }
    });
    var r = n("648238"),
        i = n("741900");
    class a {
        constructor() {
            this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = u()
        }
        static clone(t) {
            let e = new a;
            return t && (e._breadcrumbs = [...t._breadcrumbs], e._tags = {
                ...t._tags
            }, e._extra = {
                ...t._extra
            }, e._contexts = {
                ...t._contexts
            }, e._user = t._user, e._level = t._level, e._span = t._span, e._session = t._session, e._transactionName = t._transactionName, e._fingerprint = t._fingerprint, e._eventProcessors = [...t._eventProcessors], e._requestSession = t._requestSession, e._attachments = [...t._attachments], e._sdkProcessingMetadata = {
                ...t._sdkProcessingMetadata
            }, e._propagationContext = {
                ...t._propagationContext
            }), e
        }
        addScopeListener(t) {
            this._scopeListeners.push(t)
        }
        addEventProcessor(t) {
            return this._eventProcessors.push(t), this
        }
        setUser(t) {
            return this._user = t || {}, this._session && (0, i.updateSession)(this._session, {
                user: t
            }), this._notifyScopeListeners(), this
        }
        getUser() {
            return this._user
        }
        getRequestSession() {
            return this._requestSession
        }
        setRequestSession(t) {
            return this._requestSession = t, this
        }
        setTags(t) {
            return this._tags = {
                ...this._tags,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setTag(t, e) {
            return this._tags = {
                ...this._tags,
                [t]: e
            }, this._notifyScopeListeners(), this
        }
        setExtras(t) {
            return this._extra = {
                ...this._extra,
                ...t
            }, this._notifyScopeListeners(), this
        }
        setExtra(t, e) {
            return this._extra = {
                ...this._extra,
                [t]: e
            }, this._notifyScopeListeners(), this
        }
        setFingerprint(t) {
            return this._fingerprint = t, this._notifyScopeListeners(), this
        }
        setLevel(t) {
            return this._level = t, this._notifyScopeListeners(), this
        }
        setTransactionName(t) {
            return this._transactionName = t, this._notifyScopeListeners(), this
        }
        setContext(t, e) {
            return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
        }
        setSpan(t) {
            return this._span = t, this._notifyScopeListeners(), this
        }
        getSpan() {
            return this._span
        }
        getTransaction() {
            let t = this.getSpan();
            return t && t.transaction
        }
        setSession(t) {
            return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
        }
        getSession() {
            return this._session
        }
        update(t) {
            if (!t) return this;
            if ("function" == typeof t) {
                let e = t(this);
                return e instanceof a ? e : this
            }
            return t instanceof a ? (this._tags = {
                ...this._tags,
                ...t._tags
            }, this._extra = {
                ...this._extra,
                ...t._extra
            }, this._contexts = {
                ...this._contexts,
                ...t._contexts
            }, t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint), t._requestSession && (this._requestSession = t._requestSession), t._propagationContext && (this._propagationContext = t._propagationContext)) : (0, r.isPlainObject)(t) && (this._tags = {
                ...this._tags,
                ...t.tags
            }, this._extra = {
                ...this._extra,
                ...t.extra
            }, this._contexts = {
                ...this._contexts,
                ...t.contexts
            }, t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint), t.requestSession && (this._requestSession = t.requestSession), t.propagationContext && (this._propagationContext = t.propagationContext)), this
        }
        clear() {
            return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = u(), this
        }
        addBreadcrumb(t, e) {
            let n = "number" == typeof e ? e : 100;
            if (n <= 0) return this;
            let i = {
                timestamp: (0, r.dateTimestampInSeconds)(),
                ...t
            };
            return this._breadcrumbs = [...this._breadcrumbs, i].slice(-n), this._notifyScopeListeners(), this
        }
        getLastBreadcrumb() {
            return this._breadcrumbs[this._breadcrumbs.length - 1]
        }
        clearBreadcrumbs() {
            return this._breadcrumbs = [], this._notifyScopeListeners(), this
        }
        addAttachment(t) {
            return this._attachments.push(t), this
        }
        getAttachments() {
            return this._attachments
        }
        clearAttachments() {
            return this._attachments = [], this
        }
        applyToEvent(t, e = {}) {
            if (this._extra && Object.keys(this._extra).length && (t.extra = {
                    ...this._extra,
                    ...t.extra
                }), this._tags && Object.keys(this._tags).length && (t.tags = {
                    ...this._tags,
                    ...t.tags
                }), this._user && Object.keys(this._user).length && (t.user = {
                    ...this._user,
                    ...t.user
                }), this._contexts && Object.keys(this._contexts).length && (t.contexts = {
                    ...this._contexts,
                    ...t.contexts
                }), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                t.contexts = {
                    trace: this._span.getTraceContext(),
                    ...t.contexts
                };
                let e = this._span.transaction;
                if (e) {
                    t.sdkProcessingMetadata = {
                        dynamicSamplingContext: e.getDynamicSamplingContext(),
                        ...t.sdkProcessingMetadata
                    };
                    let n = e.name;
                    n && (t.tags = {
                        transaction: n,
                        ...t.tags
                    })
                }
            }
            return this._applyFingerprint(t), t.breadcrumbs = [...t.breadcrumbs || [], ...this._breadcrumbs], t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, t.sdkProcessingMetadata = {
                ...t.sdkProcessingMetadata,
                ...this._sdkProcessingMetadata,
                propagationContext: this._propagationContext
            }, this._notifyEventProcessors([...o(), ...this._eventProcessors], t, e)
        }
        setSDKProcessingMetadata(t) {
            return this._sdkProcessingMetadata = {
                ...this._sdkProcessingMetadata,
                ...t
            }, this
        }
        setPropagationContext(t) {
            return this._propagationContext = t, this
        }
        getPropagationContext() {
            return this._propagationContext
        }
        _notifyEventProcessors(t, e, n, i = 0) {
            return new r.SyncPromise((a, o) => {
                let s = t[i];
                if (null === e || "function" != typeof s) a(e);
                else {
                    let u = s({
                        ...e
                    }, n);
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.id && null === u && r.logger.log(`Event processor "${s.id}" dropped event`), (0, r.isThenable)(u) ? u.then(e => this._notifyEventProcessors(t, e, n, i + 1).then(a)).then(null, o) : this._notifyEventProcessors(t, u, n, i + 1).then(a).then(null, o)
                }
            })
        }
        _notifyScopeListeners() {
            !this._notifyingListeners && (this._notifyingListeners = !0, this._scopeListeners.forEach(t => {
                t(this)
            }), this._notifyingListeners = !1)
        }
        _applyFingerprint(t) {
            t.fingerprint = t.fingerprint ? (0, r.arrayify)(t.fingerprint) : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
        }
    }

    function o() {
        return (0, r.getGlobalSingleton)("globalEventProcessors", () => [])
    }

    function s(t) {
        o().push(t)
    }

    function u() {
        return {
            traceId: (0, r.uuid4)(),
            spanId: (0, r.uuid4)().substring(16),
            sampled: !1
        }
    }
}