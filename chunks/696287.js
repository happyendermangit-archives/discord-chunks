function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("846519"),
        r = n("147913"),
        s = n("77498"),
        a = n("19780"),
        o = n("626135"),
        l = n("70956"),
        u = n("581567"),
        d = n("594190"),
        _ = n("981631");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = 5 * l.default.Millis.MINUTE;
    class I extends r.default {
        _terminate() {
            this.stopHeartbeat()
        }
        maybeStartHeartbeat() {
            !this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(E, this.logRunningGameHeartbeats))
        }
        stopHeartbeat() {
            this.heartbeatInterval.stop(), this.runningGameKeys.clear()
        }
        handlePostConnectionOpen() {
            d.default.getRunningGames().length > 0 && this.maybeStartHeartbeat()
        }
        constructor(...e) {
            super(...e), c(this, "heartbeatInterval", new i.Interval), c(this, "runningGameKeys", new Set), c(this, "actions", {
                RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
                LOGOUT: () => this.stopHeartbeat(),
                CONNECTION_CLOSED: () => this.stopHeartbeat(),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }), c(this, "handleRunningGamesChanged", e => {
                let {
                    games: t
                } = e;
                if (0 === t.length) {
                    this.stopHeartbeat();
                    return
                }
                this.maybeStartHeartbeat()
            }), c(this, "logRunningGameHeartbeats", () => {
                let e = d.default.getRunningGames(),
                    t = {
                        rtc_connection_id: a.default.getRTCConnectionId(),
                        media_session_id: a.default.getMediaSessionId()
                    },
                    n = new Set;
                e.forEach(e => {
                    var i, r;
                    let a = (0, d.gameKey)(e),
                        l = !this.runningGameKeys.has(a),
                        c = null !== (r = e.id) && void 0 !== r ? r : null === (i = s.default.getGameByName(e.name)) || void 0 === i ? void 0 : i.id;
                    o.default.track(_.AnalyticEvents.RUNNING_GAME_HEARTBEAT, {
                        game_id: c,
                        game_name: e.name,
                        game_distributor: e.distributor,
                        game_executable: (0, u.removeExecutablePathPrefix)(e.exePath),
                        game_detection_enabled: (0, d.isDetectionEnabled)(e),
                        initial_heartbeat: l,
                        ...t
                    }), n.add((0, d.gameKey)(e))
                }), this.runningGameKeys = n
            })
        }
    }
    t.default = new I
}