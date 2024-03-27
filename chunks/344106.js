function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        InboundFilters: function() {
            return o
        }
    });
    var r = n("648238");
    let i = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
        a = [/^.*healthcheck.*$/, /^.*healthy.*$/, /^.*live.*$/, /^.*ready.*$/, /^.*heartbeat.*$/, /^.*\/health$/, /^.*\/healthz$/];
    class o {
        static __initStatic() {
            this.id = "InboundFilters"
        }
        __init() {
            this.name = o.id
        }
        constructor(t = {}) {
            this._options = t, o.prototype.__init.call(this)
        }
        setupOnce(t, e) {
            let n = t => {
                let n = e();
                if (n) {
                    let e = n.getIntegration(o);
                    if (e) {
                        let o = n.getClient(),
                            u = o ? o.getOptions() : {};
                        return function(t, e) {
                            return e.ignoreInternal && function(t) {
                                try {
                                    return "SentryError" === t.exception.values[0].type
                                } catch (t) {}
                                return !1
                            }(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being internal Sentry Error.
Event: ${(0,r.getEventDescription)(t)}`), !0) : function(t, e) {
                                return !t.type && !!e && !!e.length && (function(t) {
                                    if (t.message) return [t.message];
                                    if (t.exception) {
                                        let {
                                            values: e
                                        } = t.exception;
                                        try {
                                            let {
                                                type: t = "",
                                                value: n = ""
                                            } = e && e[e.length - 1] || {};
                                            return [`${n}`, `${t}: ${n}`]
                                        } catch (e) {
                                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract message for event ${(0,r.getEventDescription)(t)}`)
                                        }
                                    }
                                    return []
                                })(t).some(t => (0, r.stringMatchesSomePattern)(t, e))
                            }(t, e.ignoreErrors) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${(0,r.getEventDescription)(t)}`), !0) : function(t, e) {
                                if ("transaction" !== t.type || !e || !e.length) return !1;
                                let n = t.transaction;
                                return !!n && (0, r.stringMatchesSomePattern)(n, e)
                            }(t, e.ignoreTransactions) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${(0,r.getEventDescription)(t)}`), !0) : function(t, e) {
                                if (!e || !e.length) return !1;
                                let n = s(t);
                                return !!n && (0, r.stringMatchesSomePattern)(n, e)
                            }(t, e.denyUrls) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${(0,r.getEventDescription)(t)}.
Url: ${s(t)}`), !0) : ! function(t, e) {
                                if (!e || !e.length) return !0;
                                let n = s(t);
                                return !n || (0, r.stringMatchesSomePattern)(n, e)
                            }(t, e.allowUrls) && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${(0,r.getEventDescription)(t)}.
Url: ${s(t)}`), !0)
                        }(t, function(t = {}, e = {}) {
                            return {
                                allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : i],
                                ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : a],
                                ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                            }
                        }(e._options, u)) ? null : t
                    }
                }
                return t
            };
            n.id = this.name, t(n)
        }
    }
    o.__initStatic();

    function s(t) {
        try {
            let e;
            try {
                e = t.exception.values[0].stacktrace.frames
            } catch (t) {}
            return e ? function(t = []) {
                for (let e = t.length - 1; e >= 0; e--) {
                    let n = t[e];
                    if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                }
                return null
            }(e) : null
        } catch (e) {
            return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`Cannot extract url for event ${(0,r.getEventDescription)(t)}`), null
        }
    }
}