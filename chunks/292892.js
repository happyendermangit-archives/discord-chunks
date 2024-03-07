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
        f = n("373469"),
        _ = n("42203"),
        h = n("42887"),
        E = n("590401"),
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
            let _ = (0, o.default)(h.default),
                E = (0, r.areClipsEnabled)() && a.default.getSettings().clipsEnabled && ((null === (e = f.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === m.ApplicationStreamStates.ACTIVE || (null === (t = f.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === m.ApplicationStreamStates.PAUSED),
                {
                    enableDecoupledGameClipping: p
                } = u.default.getCurrentConfig({
                    location: "computeVoiceFlags"
                }),
                S = _ && a.default.getSettings().decoupledClipsEnabled && (null === (n = l.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && p;
            i = (0, g.setFlag)(i, m.VoiceFlags.CLIPS_ENABLED, E || S);
            let {
                enableViewerClipping: v
            } = d.default.getCurrentConfig({
                location: "computeVoiceFlags"
            }, {
                autoTrackExposure: !1
            }), T = v && _ && a.default.getSettings().viewerClipsEnabled;
            return i = (0, g.setFlag)(i, m.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, T)
        }
        getInitialState() {
            return {
                guildId: null,
                channelId: null,
                selfMute: h.default.isSelfMute(),
                selfDeaf: h.default.isSelfDeaf(),
                selfVideo: h.default.isVideoEnabled(),
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
                selfMute: h.default.isSelfMute(),
                selfDeaf: h.default.isSelfDeaf(),
                selfVideo: h.default.isVideoEnabled(),
                preferredRegion: E.default.getPreferredRegion(),
                preferredRegions: E.default.getPreferredRegions(),
                videoStreamParameters: h.default.getVideoStreamParameters(),
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
            a && (null === (t = _.default.getChannel(i)) || void 0 === t ? void 0 : t.type) === m.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
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