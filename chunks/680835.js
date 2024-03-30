function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        Scope: function() {
            return o
        }
    });
    var r = n("109393"),
        i = n("524820"),
        o = function() {
            function t() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._context = {}
            }
            return t.prototype.addScopeListener = function(t) {
                this._scopeListeners.push(t)
            }, t.prototype.addEventProcessor = function(t) {
                return this._eventProcessors.push(t), this
            }, t.prototype._notifyScopeListeners = function() {
                var t = this;
                !this._notifyingListeners && (this._notifyingListeners = !0, setTimeout(function() {
                    t._scopeListeners.forEach(function(e) {
                        e(t)
                    }), t._notifyingListeners = !1
                }))
            }, t.prototype._notifyEventProcessors = function(t, e, n, o) {
                var s = this;
                return void 0 === o && (o = 0), new i.SyncPromise(function(c, a) {
                    var u = t[o];
                    if (null === e || "function" != typeof u) c(e);
                    else {
                        var _ = u(r.__assign({}, e), n);
                        (0, i.isThenable)(_) ? _.then(function(e) {
                            return s._notifyEventProcessors(t, e, n, o + 1).then(c)
                        }).then(null, a): s._notifyEventProcessors(t, _, n, o + 1).then(c).then(null, a)
                    }
                })
            }, t.prototype.setUser = function(t) {
                return this._user = t || {}, this._notifyScopeListeners(), this
            }, t.prototype.setTags = function(t) {
                return this._tags = r.__assign({}, this._tags, t), this._notifyScopeListeners(), this
            }, t.prototype.setTag = function(t, e) {
                var n;
                return this._tags = r.__assign({}, this._tags, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setExtras = function(t) {
                return this._extra = r.__assign({}, this._extra, t), this._notifyScopeListeners(), this
            }, t.prototype.setExtra = function(t, e) {
                var n;
                return this._extra = r.__assign({}, this._extra, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setFingerprint = function(t) {
                return this._fingerprint = t, this._notifyScopeListeners(), this
            }, t.prototype.setLevel = function(t) {
                return this._level = t, this._notifyScopeListeners(), this
            }, t.prototype.setTransaction = function(t) {
                return this._transaction = t, this._span && (this._span.transaction = t), this._notifyScopeListeners(), this
            }, t.prototype.setContext = function(t, e) {
                var n;
                return this._context = r.__assign({}, this._context, ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
            }, t.prototype.setSpan = function(t) {
                return this._span = t, this._notifyScopeListeners(), this
            }, t.prototype.getSpan = function() {
                return this._span
            }, t.clone = function(e) {
                var n = new t;
                return e && (n._breadcrumbs = r.__spread(e._breadcrumbs), n._tags = r.__assign({}, e._tags), n._extra = r.__assign({}, e._extra), n._context = r.__assign({}, e._context), n._user = e._user, n._level = e._level, n._span = e._span, n._transaction = e._transaction, n._fingerprint = e._fingerprint, n._eventProcessors = r.__spread(e._eventProcessors)), n
            }, t.prototype.clear = function() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._context = {}, this._level = void 0, this._transaction = void 0, this._fingerprint = void 0, this._span = void 0, this._notifyScopeListeners(), this
            }, t.prototype.addBreadcrumb = function(t, e) {
                var n = r.__assign({
                    timestamp: (0, i.timestampWithMs)()
                }, t);
                return this._breadcrumbs = void 0 !== e && e >= 0 ? r.__spread(this._breadcrumbs, [n]).slice(-e) : r.__spread(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
            }, t.prototype.clearBreadcrumbs = function() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }, t.prototype._applyFingerprint = function(t) {
                t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }, t.prototype.applyToEvent = function(t, e) {
                return this._extra && Object.keys(this._extra).length && (t.extra = r.__assign({}, this._extra, t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = r.__assign({}, this._tags, t.tags)), this._user && Object.keys(this._user).length && (t.user = r.__assign({}, this._user, t.user)), this._context && Object.keys(this._context).length && (t.contexts = r.__assign({}, this._context, t.contexts)), this._level && (t.level = this._level), this._transaction && (t.transaction = this._transaction), this._applyFingerprint(t), t.breadcrumbs = r.__spread(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(r.__spread(function() {
                    var t = (0, i.getGlobalObject)();
                    return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
                }(), this._eventProcessors), t, e)
            }, t
        }()
}