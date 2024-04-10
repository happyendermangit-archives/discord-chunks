function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("789020");
    var i = n("928801"),
        r = n("924557"),
        s = n("435064"),
        a = n("779618"),
        o = n("594190"),
        l = n("836157"),
        u = n("441167"),
        d = n("695346"),
        _ = n("199902"),
        c = n("592125"),
        E = n("131951"),
        I = n("936349"),
        T = n("630388"),
        f = n("981631");
    class S extends i.default {
        get guildId() {
            return this.getState().guildId
        }
        get channelId() {
            return this.getState().channelId
        }
        computeVoiceFlags() {
            var e, t, n;
            let i = 0,
                c = d.ClipsAllowVoiceRecording.getSetting();
            i = (0, T.setFlag)(i, f.VoiceFlags.ALLOW_VOICE_RECORDING, c);
            let I = (0, a.default)(E.default),
                S = (0, r.areClipsEnabled)() && s.default.getSettings().clipsEnabled && ((null === (e = _.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === f.ApplicationStreamStates.ACTIVE || (null === (t = _.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === f.ApplicationStreamStates.PAUSED),
                {
                    enableDecoupledGameClipping: A
                } = l.default.getCurrentConfig({
                    location: "computeVoiceFlags"
                }),
                h = I && s.default.getSettings().decoupledClipsEnabled && (null === (n = o.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && A;
            i = (0, T.setFlag)(i, f.VoiceFlags.CLIPS_ENABLED, S || h);
            let {
                enableViewerClipping: m
            } = u.default.getCurrentConfig({
                location: "computeVoiceFlags"
            }, {
                autoTrackExposure: !1
            }), N = m && I && s.default.getSettings().viewerClipsEnabled;
            return i = (0, T.setFlag)(i, f.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, N)
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: E.default.isSelfMute(),
                selfDeaf: E.default.isSelfDeaf(),
                selfVideo: E.default.isVideoEnabled(),
                preferredRegion: null,
                preferredRegions: null,
                videoStreamParameters: null,
                flags: 0
            }
        }
        getNextState(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            return {
                guildId: t,
                channelId: n,
                selfMute: E.default.isSelfMute(),
                selfDeaf: E.default.isSelfDeaf(),
                selfVideo: E.default.isVideoEnabled(),
                preferredRegion: I.default.getPreferredRegion(),
                preferredRegions: I.default.getPreferredRegions(),
                videoStreamParameters: E.default.getVideoStreamParameters(),
                flags: this.computeVoiceFlags()
            }
        }
        shouldCommit() {
            return this.socket.isSessionEstablished()
        }
        didCommit(e) {
            var t;
            let {
                guildId: n,
                channelId: i,
                selfMute: r,
                selfDeaf: s,
                selfVideo: a,
                preferredRegion: o,
                preferredRegions: l,
                videoStreamParameters: u,
                flags: d = 0
            } = e;
            a && (null === (t = c.default.getChannel(i)) || void 0 === t ? void 0 : t.type) === f.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                guildId: n,
                channelId: i,
                selfMute: r,
                selfDeaf: s,
                selfVideo: a,
                preferredRegion: o,
                preferredRegions: l,
                videoStreamParameters: u,
                flags: d
            }) : this.socket.voiceStateUpdate({
                guildId: n,
                channelId: i,
                selfMute: r,
                selfDeaf: s,
                selfVideo: a,
                preferredRegion: o,
                preferredRegions: l,
                flags: d
            })
        }
        constructor(e) {
            var t, n, i;
            super(), t = this, i = void 0, (n = "socket") in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, this.socket = e
        }
    }
}