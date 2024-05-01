function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("70780"),
        r = n("147913"),
        s = n("710845"),
        a = n("131951"),
        o = n("936349"),
        l = n("70956"),
        u = n("358085");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let _ = 1 * l.default.Millis.SECOND,
        c = 30 * l.default.Millis.SECOND,
        E = new s.default("RTCLatencyTestManager");
    class I extends r.default {
        _terminate() {
            null != this.refetchTimeout && clearTimeout(this.refetchTimeout)
        }
        constructor(...e) {
            super(...e), d(this, "refetchTimeout", void 0), d(this, "actions", {
                POST_CONNECTION_OPEN: () => this._handleConnectionOpen()
            }), d(this, "_handleTestRegionsResponse", e => {
                let t = e.map(e => e.region);
                o.default.shouldPerformLatencyTest(t) ? a.default.getMediaEngine().rankRtcRegions(e).then(e => {
                    E.verbose("RTC region latency test completed, ranked regions are: ", e), (0, i.completeRTCLatencyTest)(e, t)
                }).catch(e => E.warn(e)) : E.verbose("RTC cached ranked preferred regions are ".concat(o.default.getPreferredRegions()))
            }), d(this, "_fetchAndScheduleRefetch", () => {
                (0, i.fetchRTCLatencyTestRegions)().then(e => this._handleTestRegionsResponse(e.body)).catch(e => E.warn(e)), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, 360 * l.default.Millis.MINUTE)
            }), d(this, "_handleConnectionOpen", () => {
                u.isPlatformEmbedded && !__OVERLAY__ && (null != this.refetchTimeout && clearTimeout(this.refetchTimeout), this.refetchTimeout = setTimeout(this._fetchAndScheduleRefetch, Math.floor(_ + Math.random() * c)))
            })
        }
    }
    t.default = new I
}