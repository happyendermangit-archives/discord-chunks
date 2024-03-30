function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var i = function() {
        var e, t, n;

        function i() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i), o(this, "_report", void 0), o(this, "_pids", void 0), this._report = {
                soundshare_attach_requested_count: 0,
                soundshare_capturing_count: 0,
                soundshare_capture_stopped_count: 0,
                soundshare_hooked_count: 0,
                soundshare_recv_connect_count: 0,
                soundshare_recv_disconnect_count: 0,
                soundshare_recv_started_count: 0,
                soundshare_recv_stopped_count: 0,
                soundshare_recv_failed_count: 0,
                soundshare_recv_format_count: 0,
                soundshare_send_announce_count: 0,
                soundshare_send_start_count: 0,
                soundshare_send_stop_count: 0,
                soundshare_malformed_trace_count: 0,
                soundshare_audio_detected_count: 0,
                soundshare_state_transition_detached_count: 0,
                soundshare_state_transition_waiting_count: 0,
                soundshare_state_transition_attached_count: 0,
                soundshare_state_transition_started_count: 0,
                soundshare_state_transition_playing_count: 0,
                soundshare_state_transition_silence_count: 0,
                soundshare_unknown_event_count: 0,
                soundshare_first_pid: 0,
                soundshare_last_pid: 0,
                soundshare_unique_pids: 0,
                soundshare_first_session: null,
                soundshare_last_session: null
            }, this._pids = new Set
        }
        return e = i, t = [{
            key: "traceEvent",
            value: function(e, t) {
                var n, r = this._report;
                void 0 !== r[n = "soundshare_state_transition" === t.type ? "soundshare_state_transition_".concat(["detached", "waiting", "attached", "started", "playing", "silence"][t.newState], "_count") : "".concat(t.type, "_count")] ? r[n] < 32767 && r[n]++ : r.soundshare_unknown_event_count++, "pid" in t && (0 === r.soundshare_first_pid && (r.soundshare_first_pid = t.pid), r.soundshare_last_pid = t.pid, this._pids.add(t.pid)), null != e && (null == r.soundshare_first_session && (r.soundshare_first_session = e), r.soundshare_last_session = e)
            }
        }, {
            key: "getStats",
            value: function() {
                var e, t;
                return e = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            o(e, t, n[t])
                        })
                    }
                    return e
                }({}, this._report), t = (t = {
                    soundshare_unique_pids: this._pids.size
                }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(t)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }), e
            }
        }], r(e.prototype, t), n && r(e, n), i
    }()
}