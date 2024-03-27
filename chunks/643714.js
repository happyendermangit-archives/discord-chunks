function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BrowserProfilingIntegration: function() {
            return o
        }
    });
    var r = n("648238"),
        i = n("65534"),
        a = n("450436");
    class o {
        constructor() {
            o.prototype.__init.call(this), o.prototype.__init2.call(this)
        }
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
                    let o = a.PROFILE_MAP.get(i);
                    if (!o) {
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Profiling] Could not retrieve profile for transaction: ${i}`);
                        continue
                    }
                    a.PROFILE_MAP.delete(i);
                    let s = (0, a.createProfilingEvent)(i, o, t);
                    s && n.push(s)
                }(0, a.addProfilesToEnvelope)(t, n)
            })) : r.logger.warn("[Profiling] Client does not support hooks, profiling will be disabled")
        }
    }
}