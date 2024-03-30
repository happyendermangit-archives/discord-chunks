function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("116254"),
        o = n("849680");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var u = function() {
        var e, t, n;

        function u(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.TimeStampProducer;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a(this, "userId", void 0), a(this, "connection", void 0), a(this, "timestampProducer", void 0), a(this, "listeningUsers", void 0), a(this, "listening", void 0), a(this, "speaking", void 0), a(this, "participation", void 0), a(this, "connected", void 0), this.userId = e, this.connection = t, this.timestampProducer = n, this.listeningUsers = new Set, this.listening = new o.StopWatch(this.timestampProducer), this.speaking = new o.StopWatch(this.timestampProducer), this.participation = new o.StopWatch(this.timestampProducer), this.connected = new o.StopWatch(this.timestampProducer)
        }
        return e = u, t = [{
            key: "start",
            value: function() {
                var e = this;
                this.listeningUsers.clear(), this.listening.reset(), this.speaking.reset(), this.participation.reset(), this.connected.reset(), this.connected.start(), this.connection.on(r.BaseConnectionEvent.Speaking, function(t, n, r) {
                    e.userId === t ? e.onSpeaking(0 !== n) : e.onListening(0 !== n, t)
                })
            }
        }, {
            key: "onSpeaking",
            value: function(e) {
                e ? (this.speaking.start(), this.participation.start()) : (this.speaking.stop(), !this.listening.isRunning() && this.participation.stop())
            }
        }, {
            key: "onListening",
            value: function(e, t) {
                e ? (this.listeningUsers.add(t), this.listening.start(), this.participation.start()) : this.listeningUsers.delete(t) && 0 === this.listeningUsers.size && (this.listening.stop(), !this.speaking.isRunning() && this.participation.stop())
            }
        }, {
            key: "stop",
            value: function() {
                this.speaking.stop(), this.listening.stop(), this.participation.stop(), this.connected.stop()
            }
        }, {
            key: "getDurationStats",
            value: function() {
                return {
                    duration_listening_ms: this.listening.elapsed().asMilliseconds(),
                    duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
                    duration_participation_ms: this.participation.elapsed().asMilliseconds(),
                    duration_connected_ms: this.connected.elapsed().asMilliseconds()
                }
            }
        }], i(e.prototype, t), n && i(e, n), u
    }()
}