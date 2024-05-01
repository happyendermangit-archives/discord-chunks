function(e, t, n) {
    "use strict";
    let i, r, a;
    n.r(t), n("47120");
    var s = n("493683"),
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
        h = n("67212"),
        A = n("770471"),
        m = n("757454"),
        N = n("158631"),
        p = n("981631");
    let O = [];
    class R extends u.default {
        handleRunningGamesChange() {
            let e = d.default.getVisibleGame();
            if (null == e) return;
            let {
                canBroadcast: t
            } = A.default.getCurrentConfig({
                location: "handle_running_games_change"
            }, {
                autoTrackExposure: !1
            }), n = S.default.getBroadcast(), i = (0, h.getGameName)(e), r = null != T.default.getGameByName(i), a = (0, N.getIsBroadcastingToAnyone)();
            if (!t || null != n || !c.BroadcastAutoBroadcast.getSetting() || !r || !a || null != O.find(t => t.pid === e.pid)) return;
            if (O = d.default.getRunningGames(), !(0, m.getCanStartBroadcast)()) return;
            let s = f.default.getVoiceChannelId();
            (0, l.createBroadcastChannelOrStartStream)({
                pid: e.pid,
                channelId: s
            })
        }
        handleStreamCreate(e) {
            let {
                streamKey: t
            } = e;
            (0, h.startBroadcastForStream)(t, i)
        }
        handleStreamStop(e) {
            let {
                streamKey: t
            } = e;
            if (null == i) return;
            let {
                ownerId: n,
                channelId: s
            } = (0, _.decodeStreamKey)(t);
            if (null == n || null == s || n !== E.default.getId()) return;
            let o = I.default.getChannel(s),
                l = null != o && o.isBroadcastChannel();
            null != o && n === o.ownerId && l && (i = null, r = null, a = null, (0, h.stopBroadcast)())
        }
        handleStartBroadcastStream(e) {
            let {
                options: t
            } = e;
            i = t.pid, r = t.sourceId, a = t.sourceName
        }
        handleCallCreate(e) {
            let {
                channelId: t
            } = e;
            if (null == t || null == i && null == r && null == a) return;
            let n = E.default.getId(),
                s = I.default.getChannel(t);
            null != s && n === s.ownerId && s.isBroadcastChannel() && (0, l.startStream)(null, t, {
                pid: i,
                sourceId: r,
                sourceName: a
            })
        }
        handleRTCConnectionState(e) {
            let {
                channelId: t,
                state: n
            } = e;
            if (n !== p.RTCConnectionStates.DISCONNECTED) return;
            let i = f.default.getChannelId(),
                r = I.default.getChannel(t);
            if (null == r || !r.isBroadcastChannel()) return;
            s.default.closePrivateChannel(t, i === t, !0);
            let a = S.default.getBroadcast();
            null != a && r.id === a.channelId && (0, h.stopBroadcast)()
        }
        handleChannelDelete(e) {
            let {
                channel: t
            } = e, n = S.default.getBroadcast();
            null != n && t.id === n.channelId && (0, h.stopBroadcast)()
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