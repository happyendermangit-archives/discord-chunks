function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StateHistory: function() {
            return c
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("849680"),
        a = n("731830"),
        u = n("281767");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), l(this, "current", null), l(this, "history", []), null != e && this.update(e)
        }
        return e = r, t = [{
            key: "reset",
            value: function(e) {
                this.current = null, this.history = [], null != e && this.update(e)
            }
        }, {
            key: "update",
            value: function(e) {
                this.current !== e && (this.current = e, this.history.push({
                    state: e,
                    startTime: (0, i.now)()
                }))
            }
        }, {
            key: "getVoiceConnectionSuccessStats",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.now)(),
                    t = this.getStateDurations(e),
                    n = function(e) {
                        return o().sumBy(t, function(t) {
                            return t.state === e ? t.durationMs : 0
                        })
                    };
                return {
                    state_awaiting_endpoint_ms: n(u.RTCConnectionStates.AWAITING_ENDPOINT),
                    state_authenticating_ms: n(u.RTCConnectionStates.AUTHENTICATING),
                    state_connecting_ms: n(u.RTCConnectionStates.CONNECTING),
                    state_disconnected_ms: n(u.RTCConnectionStates.DISCONNECTED),
                    state_ice_checking_ms: n(u.RTCConnectionStates.ICE_CHECKING),
                    state_no_route_ms: n(u.RTCConnectionStates.NO_ROUTE),
                    state_rtc_connecting_ms: n(u.RTCConnectionStates.RTC_CONNECTING),
                    state_rtc_disconnected_ms: n(u.RTCConnectionStates.RTC_DISCONNECTED)
                }
            }
        }, {
            key: "getStateDurations",
            value: function(e) {
                var t, n = this;
                if (0 === this.history.length) return [];
                var r = (0, a.default)(this.history, function(e, t) {
                    return {
                        state: e.state,
                        durationMs: t.startTime - e.startTime
                    }
                });
                return r.push({
                    state: (t = o().last(n.history)).state,
                    durationMs: e - t.startTime
                }), r
            }
        }], s(e.prototype, t), n && s(e, n), r
    }()
}