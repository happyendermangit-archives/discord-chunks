function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("702976");
    var i, s = n("201876"),
        r = n("56947"),
        a = n("386045"),
        o = n("18346"),
        l = n("161454"),
        u = n("584687"),
        d = n("103979"),
        c = n("845579"),
        _ = n("373469"),
        f = n("42203"),
        E = n("42887"),
        h = n("590401"),
        g = n("568734"),
        m = n("49111");
    i = class extends s.default {
        get guildId() {
            return this.getState().guildId
        }
        get channelId() {
            return this.getState().channelId
        }
        computeVoiceFlags() {
            var e, t, n;
            let i = 0,
                s = c.ClipsAllowVoiceRecording.getSetting();
            i = (0, g.setFlag)(i, m.VoiceFlags.ALLOW_VOICE_RECORDING, s);
            let f = (0, o.default)(E.default),
                h = (0, r.areClipsEnabled)() && a.default.getSettings().clipsEnabled && ((null === (e = _.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === m.ApplicationStreamStates.ACTIVE || (null === (t = _.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === m.ApplicationStreamStates.PAUSED),
                {
                    enableDecoupledGameClipping: p
                } = u.default.getCurrentConfig({
                    location: "computeVoiceFlags"
                }),
                S = f && a.default.getSettings().decoupledClipsEnabled && (null === (n = l.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && p;
            i = (0, g.setFlag)(i, m.VoiceFlags.CLIPS_ENABLED, h || S);
            let {
                enableViewerClipping: v
            } = d.default.getCurrentConfig({
                location: "computeVoiceFlags"
            }, {
                autoTrackExposure: !1
            }), T = v && f && a.default.getSettings().viewerClipsEnabled;
            return i = (0, g.setFlag)(i, m.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, T)
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
                preferredRegion: h.default.getPreferredRegion(),
                preferredRegions: h.default.getPreferredRegions(),
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
                selfMute: s,
                selfDeaf: r,
                selfVideo: a,
                preferredRegion: o,
                preferredRegions: l,
                videoStreamParameters: u,
                flags: d = 0
            } = e;
            a && (null === (t = f.default.getChannel(i)) || void 0 === t ? void 0 : t.type) === m.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                guildId: n,
                channelId: i,
                selfMute: s,
                selfDeaf: r,
                selfVideo: a,
                preferredRegion: o,
                preferredRegions: l,
                videoStreamParameters: u,
                flags: d
            }) : this.socket.voiceStateUpdate({
                guildId: n,
                channelId: i,
                selfMute: s,
                selfDeaf: r,
                selfVideo: a,
                preferredRegion: o,
                preferredRegions: l,
                flags: d
            })
        }
        constructor(e) {
            super(), this.socket = e
        }
    }
}