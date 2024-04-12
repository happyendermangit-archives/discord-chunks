function(e, t, a) {
    "use strict";
    a.r(t), a("47120");
    var d = a("317770"),
        n = a("626135"),
        c = a("358085"),
        i = a("998502"),
        r = a("801814"),
        o = a("981631");
    class f extends d.default {
        _initialize() {
            c.isPlatformEmbedded && (i.default.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), i.default.on("MODULE_INSTALLED", (e, t, a) => this.processModuleEvents()), i.default.on("UPDATER_HISTORY_RESPONSE", (e, t) => {
                this._handleHistoryResponse(t)
            }), this.processModuleEvents())
        }
        _terminate() {}
        processModuleEvents() {
            i.default.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
        }
        _handleHistoryResponse(e) {
            null != e && (e.forEach(e => {
                "analytics" === e.type ? e.name === o.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === o.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === o.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === o.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? n.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
            }), this._tracker.submissionReady() && (n.default.track(o.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset()))
        }
        constructor(...e) {
            var t, a, d;
            super(...e), t = this, a = "_tracker", d = new r.default, a in t ? Object.defineProperty(t, a, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[a] = d
        }
    }
    t.default = new f
}