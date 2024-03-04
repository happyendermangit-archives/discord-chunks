function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StateHistory: function() {
            return l
        }
    }), n("424973");
    var i = n("917351"),
        s = n.n(i),
        r = n("398183"),
        a = n("713725"),
        o = n("49111");
    class l {
        reset(e) {
            this.current = null, this.history = [], null != e && this.update(e)
        }
        update(e) {
            this.current !== e && (this.current = e, this.history.push({
                state: e,
                startTime: (0, r.now)()
            }))
        }
        getVoiceConnectionSuccessStats() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.now)(),
                t = this.getStateDurations(e),
                n = e => s.sumBy(t, t => t.state === e ? t.durationMs : 0);
            return {
                state_awaiting_endpoint_ms: n(o.RTCConnectionStates.AWAITING_ENDPOINT),
                state_authenticating_ms: n(o.RTCConnectionStates.AUTHENTICATING),
                state_connecting_ms: n(o.RTCConnectionStates.CONNECTING),
                state_disconnected_ms: n(o.RTCConnectionStates.DISCONNECTED),
                state_ice_checking_ms: n(o.RTCConnectionStates.ICE_CHECKING),
                state_no_route_ms: n(o.RTCConnectionStates.NO_ROUTE),
                state_rtc_connecting_ms: n(o.RTCConnectionStates.RTC_CONNECTING),
                state_rtc_disconnected_ms: n(o.RTCConnectionStates.RTC_DISCONNECTED)
            }
        }
        getStateDurations(e) {
            if (0 === this.history.length) return [];
            let t = (0, a.default)(this.history, (e, t) => ({
                state: e.state,
                durationMs: t.startTime - e.startTime
            }));
            return t.push((() => {
                let t = s.last(this.history);
                return {
                    state: t.state,
                    durationMs: e - t.startTime
                }
            })()), t
        }
        constructor(e) {
            this.current = null, this.history = [], null != e && this.update(e)
        }
    }
}