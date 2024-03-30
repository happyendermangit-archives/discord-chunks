function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BrowserClient: function() {
            return c
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("590171"),
        o = n("643487"),
        s = n("124969"),
        u = n("184612");
    class c extends r.BaseClient {
        constructor(t) {
            let e = o.WINDOW.SENTRY_SDK_SOURCE || (0, i.getSDKSource)();
            t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                name: "sentry.javascript.browser",
                packages: [{
                    name: `${e}:@sentry/browser`,
                    version: r.SDK_VERSION
                }],
                version: r.SDK_VERSION
            }, super(t), t.sendClientReports && o.WINDOW.document && o.WINDOW.document.addEventListener("visibilitychange", () => {
                "hidden" === o.WINDOW.document.visibilityState && this._flushOutcomes()
            })
        }
        eventFromException(t, e) {
            return (0, a.eventFromException)(this._options.stackParser, t, e, this._options.attachStacktrace)
        }
        eventFromMessage(t, e = "info", n) {
            return (0, a.eventFromMessage)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
        }
        sendEvent(t, e) {
            let n = this.getIntegrationById(s.BREADCRUMB_INTEGRATION_ID);
            n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
        }
        captureUserFeedback(t) {
            if (!this._isEnabled()) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("SDK not enabled, will not capture user feedback.");
                return
            }
            let e = (0, u.createUserFeedbackEnvelope)(t, {
                metadata: this.getSdkMetadata(),
                dsn: this.getDsn(),
                tunnel: this.getOptions().tunnel
            });
            this._sendEnvelope(e)
        }
        _prepareEvent(t, e, n) {
            return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
        }
        _flushOutcomes() {
            let t = this._clearOutcomes();
            if (0 === t.length) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("No outcomes to send");
                return
            }
            if (!this._dsn) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("No dsn provided, will not send outcomes");
                return
            }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("Sending outcomes:", t);
            let e = (0, i.createClientReportEnvelope)(t, this._options.tunnel && (0, i.dsnToString)(this._dsn));
            this._sendEnvelope(e)
        }
    }
}