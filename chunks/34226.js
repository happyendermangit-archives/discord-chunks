function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return A
        }
    }), E("222007");
    var t = E("862337"),
        o = E("689988"),
        n = E("546463"),
        r = E("945956"),
        a = E("599110"),
        i = E("718517"),
        I = E("963990"),
        s = E("161454"),
        T = E("161454"),
        S = E("49111");
    let N = 5 * i.default.Millis.MINUTE;
    class O extends o.default {
        _terminate() {
            this.stopHeartbeat()
        }
        maybeStartHeartbeat() {
            !this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(N, this.logRunningGameHeartbeats))
        }
        stopHeartbeat() {
            this.heartbeatInterval.stop(), this.runningGameKeys.clear()
        }
        handlePostConnectionOpen() {
            s.default.getRunningGames().length > 0 && this.maybeStartHeartbeat()
        }
        constructor(...e) {
            super(...e), this.heartbeatInterval = new t.Interval, this.runningGameKeys = new Set, this.actions = {
                RUNNING_GAMES_CHANGE: e => this.handleRunningGamesChanged(e),
                LOGOUT: () => this.stopHeartbeat(),
                CONNECTION_CLOSED: () => this.stopHeartbeat(),
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
            }, this.handleRunningGamesChanged = e => {
                let {
                    games: _
                } = e;
                if (0 === _.length) {
                    this.stopHeartbeat();
                    return
                }
                this.maybeStartHeartbeat()
            }, this.logRunningGameHeartbeats = () => {
                let e = s.default.getRunningGames(),
                    _ = {
                        rtc_connection_id: r.default.getRTCConnectionId(),
                        media_session_id: r.default.getMediaSessionId()
                    },
                    E = new Set;
                e.forEach(e => {
                    var t, o;
                    let r = (0, T.gameKey)(e),
                        i = !this.runningGameKeys.has(r),
                        s = null !== (o = e.id) && void 0 !== o ? o : null === (t = n.default.getGameByName(e.name)) || void 0 === t ? void 0 : t.id;
                    a.default.track(S.AnalyticEvents.RUNNING_GAME_HEARTBEAT, {
                        game_id: s,
                        game_name: e.name,
                        game_distributor: e.distributor,
                        game_executable: (0, I.removeExecutablePathPrefix)(e.exePath),
                        game_detection_enabled: (0, T.isDetectionEnabled)(e),
                        initial_heartbeat: i,
                        ..._
                    }), E.add((0, T.gameKey)(e))
                }), this.runningGameKeys = E
            }
        }
    }
    var A = new O
}