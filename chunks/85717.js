function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n("47120");
    var a = n("493683"),
        o = n("45114"),
        l = n("872810"),
        u = n("147913"),
        d = n("594190"),
        _ = n("569545"),
        c = n("695346"),
        E = n("314897"),
        I = n("592125"),
        T = n("77498"),
        f = n("944486"),
        S = n("885110"),
        A = n("67212"),
        h = n("770471"),
        m = n("757454"),
        N = n("158631"),
        O = n("981631");
    let p = [];
    class R extends u.default {
        handleRunningGamesChange() {
            let e = d.default.getVisibleGame();
            if (null == e) return;
            let {
                canBroadcast: t
            } = h.default.getCurrentConfig({
                location: "handle_running_games_change"
            }, {
                autoTrackExposure: !1
            }), n = S.default.getBroadcast(), i = (0, A.getGameName)(e), r = null != T.default.getGameByName(i), s = (0, N.getIsBroadcastingToAnyone)();
            if (!t || null != n || !c.BroadcastAutoBroadcast.getSetting() || !r || !s || null != p.find(t => t.pid === e.pid)) return;
            if (p = d.default.getRunningGames(), !(0, m.getCanStartBroadcast)()) return;
            let a = f.default.getVoiceChannelId();
            (0, l.createBroadcastChannelOrStartStream)({
                pid: e.pid,
                channelId: a
            })
        }
        handleStreamCreate(e) {
            let {
                streamKey: t
            } = e;
            (0, A.startBroadcastForStream)(t, i)
        }
        handleStreamStop(e) {
            let {
                streamKey: t
            } = e;
            if (null == i) return;
            let {
                ownerId: n,
                channelId: a
            } = (0, _.decodeStreamKey)(t);
            if (null == n || null == a || n !== E.default.getId()) return;
            let o = I.default.getChannel(a),
                l = null != o && o.isBroadcastChannel();
            null != o && n === o.ownerId && l && (i = null, r = null, s = null, (0, A.stopBroadcast)())
        }
        handleStartBroadcastStream(e) {
            let {
                options: t
            } = e;
            i = t.pid, r = t.sourceId, s = t.sourceName
        }
        handleCallCreate(e) {
            let {
                channelId: t
            } = e;
            if (null == t || null == i && null == r && null == s) return;
            let n = E.default.getId(),
                a = I.default.getChannel(t);
            null != a && n === a.ownerId && a.isBroadcastChannel() && (0, l.startStream)(null, t, {
                pid: i,
                sourceId: r,
                sourceName: s
            })
        }
        handleRTCConnectionState(e) {
            let {
                channelId: t,
                state: n
            } = e;
            if (n !== O.RTCConnectionStates.DISCONNECTED) return;
            let i = f.default.getChannelId(),
                r = I.default.getChannel(t);
            if (null == r || !r.isBroadcastChannel()) return;
            a.default.closePrivateChannel(t, i === t, !0);
            let s = S.default.getBroadcast();
            null != s && r.id === s.channelId && (0, A.stopBroadcast)()
        }
        handleChannelDelete(e) {
            let {
                channel: t
            } = e, n = S.default.getBroadcast();
            null != n && t.id === n.channelId && (0, A.stopBroadcast)()
        }
        handleMessageCreate(e) {
            let {
                channelId: t,
                guildId: n
            } = e;
            if (null != n) return;
            let i = I.default.getChannel(t);
            if (null != i && !!i.isBroadcastChannel()) f.default.getVoiceChannelId() !== i.id && (0, o.localAck)(t)
        }
        constructor(...e) {
            var t, n, i;
            super(...e), t = this, n = "actions", i = {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_STOP: this.handleStreamStop,
                START_BROADCAST_STREAM: this.handleStartBroadcastStream,
                CALL_CREATE: this.handleCallCreate,
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                CHANNEL_DELETE: this.handleChannelDelete,
                MESSAGE_CREATE: this.handleMessageCreate
            }, n in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i
        }
    }
    t.default = new R
}