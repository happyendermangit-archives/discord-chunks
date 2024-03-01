function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BrowserProfilingIntegration: function() {
            return s
        }
    }), n("424973"), n("222007");
    var r = n("103787"),
        i = n("127769"),
        a = n("959456");
    class s {
        __init() {
            this.name = "BrowserProfilingIntegration"
        }
        __init2() {
            this.getCurrentHub = void 0
        }
        setupOnce(t, e) {
            this.getCurrentHub = e;
            let n = this.getCurrentHub().getClient();
            n && "function" == typeof n.on ? (n.on("startTransaction", t => {
                (0, i.wrapTransactionWithProfiling)(t)
            }), n.on("beforeEnvelope", t => {
                if (!a.PROFILE_MAP.size) return;
                let e = (0, a.findProfiledTransactionsFromEnvelope)(t);
                if (!e.length) return;
                let n = [];
                for (let t of e) {
                    let e = t && t.contexts,
                        i = e && e.profile && e.profile.profile_id;
                    if (!i) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Profiling] cannot find profile for a transaction without a profile context");
                        continue
                    }
                    e && e.profile && delete e.profile;
                    let s = a.PROFILE_MAP.get(i);
                    if (!s) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Profiling] Could not retrieve profile for transaction: ".concat(i));
                        continue
                    }
                    a.PROFILE_MAP.delete(i);
                    let o = (0, a.createProfilingEvent)(i, s, t);
                    o && n.push(o)
                }(0, a.addProfilesToEnvelope)(t, n)
            })) : r.logger.warn("[Profiling] Client does not support hooks, profiling will be disabled")
        }
        constructor() {
            s.prototype.__init.call(this), s.prototype.__init2.call(this)
        }
    }
}