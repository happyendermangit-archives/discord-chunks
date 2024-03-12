function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return f
        }
    }), t("222007");
    var s = t("316272"),
        d = t("599110"),
        n = t("773336"),
        c = t("50885"),
        i = t("889810"),
        r = t("49111");
    class o extends s.default {
        _initialize() {
            n.isPlatformEmbedded && (c.default.on("UPDATE_DOWNLOADED", () => this.processModuleEvents()), c.default.on("MODULE_INSTALLED", (e, a, t) => this.processModuleEvents()), c.default.on("UPDATER_HISTORY_RESPONSE", (e, a) => {
                this._handleHistoryResponse(a)
            }), this.processModuleEvents())
        }
        _terminate() {}
        processModuleEvents() {
            c.default.send("UPDATER_HISTORY_QUERY_AND_TRUNCATE")
        }
        _handleHistoryResponse(e) {
            null != e && (e.forEach(e => {
                "analytics" === e.type ? e.name === r.AnalyticEvents.UPDATER_METRICS_DOWNLOAD || e.name === r.AnalyticEvents.UPDATER_METRICS_INSTALL || e.name === r.AnalyticEvents.UPDATER_METRICS_COMBINED || e.name === r.AnalyticEvents.UPDATER_METRICS_TRANSITION_STATUS ? d.default.track(e.name, e.data) : console.warn("Unknown updater analytic event ".concat(e.name)) : this._tracker.trackEvent(e)
            }), this._tracker.submissionReady() && (d.default.track(r.AnalyticEvents.APP_MODULES_UPDATED, this._tracker.getStats()), this._tracker.reset()))
        }
        constructor(...e) {
            super(...e), this._tracker = new i.default
        }
    }
    var f = new o
}