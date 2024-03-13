function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseConnectionEvent: function() {
            return o.BaseConnectionEvent
        },
        default: function() {
            return i
        }
    }), n("222007");
    var i, s = n("464675"),
        r = n.n(s),
        a = n("595275"),
        o = n("614276"),
        l = n("685961"),
        u = n("353927");
    let d = 0;
    i = class extends a.default {
        destroy() {
            this.destroyed = !0, this.framerateReducer.destroy(), this.setConnectionState(u.ConnectionStates.DISCONNECTED), this.emit(o.BaseConnectionEvent.Destroy, this), this.removeAllListeners()
        }
        getLocalMute(e) {
            return this.localMutes[e] || !1
        }
        getLocalVideoDisabled(e) {
            var t;
            return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t
        }
        setLocalVideoDisabled(e, t) {
            this.disabledLocalVideos[e] = t, this.emit(o.BaseConnectionEvent.LocalVideoDisabled, e, t)
        }
        getHasActiveVideoOutputSink(e) {
            var t;
            return null !== (t = this.activeOutputSinks[e]) && void 0 !== t && t
        }
        setHasActiveVideoOutputSink(e, t) {
            this.isActiveOutputSinksEnabled = !0, this.activeOutputSinks[e] = t, this.emit(o.BaseConnectionEvent.ActiveSinksChange, e, t)
        }
        getActiveOutputSinkTrackingEnabled() {
            return this.isActiveOutputSinksEnabled
        }
        setUseElectronVideo(e) {
            this.useElectronVideo = e
        }
        setClipRecordUser(e, t, n) {}
        setViewerSideClip(e) {}
        setClipsKeyFrameInterval(e) {}
        setQualityDecoupling(e) {}
        getStreamParameters() {
            return r(this.videoStreamParameters)
        }
        setExperimentFlag(e, t) {
            t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e)
        }
        setConnectionState(e) {
            this.logger.info("Connection state change: ".concat(this.connectionState, " => ").concat(e)), this.connectionState = e, this.emit(o.BaseConnectionEvent.ConnectionStateChange, this.connectionState)
        }
        updateVideoQuality(e) {
            let {
                quality: t,
                constraints: n
            } = this.applyQualityConstraints({}, this.videoStreamParameters[0].ssrc), i = r(this.videoStreamParameters);
            null != t && (i[0].maxBitrate = t.bitrateMax, null != t.encode && (i[0].maxPixelCount = t.encode.pixelCount, i[0].maxFrameRate = t.encode.framerate)), this.videoStreamParameters = i;
            for (let e = 1; e < this.videoStreamParameters.length; e++) {
                let {
                    quality: i,
                    constraints: s
                } = this.applyQualityConstraints({}, this.videoStreamParameters[e].ssrc);
                null != i && (this.videoStreamParameters[e].maxBitrate = i.bitrateMax, null != i.encode && (this.videoStreamParameters[e].maxPixelCount = i.encode.pixelCount, this.videoStreamParameters[e].maxFrameRate = i.encode.framerate)), 100 === this.videoStreamParameters[e].quality && (n = s, t = i)
            }
            n.streamParameters = r(this.videoStreamParameters), n.remoteSinkWantsPixelCount = Math.max(...this.videoStreamParameters.map(e => {
                var t;
                return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0
            }));
            let s = this.pickProperties(n, e);
            this.logger.info("updateVideoQuality: ".concat(JSON.stringify(s, void 0, 4))), this.updateVideoQualityCore(s, t)
        }
        applyVideoQualityMode(e) {
            if (this.context !== u.MediaEngineContextTypes.DEFAULT) return;
            let t = l.VIDEO_QUALITY_MODES_TO_OVERWRITES[e];
            this.videoQualityManager.setQuality(t), this.updateVideoQuality()
        }
        overwriteQualityForTesting(e) {
            this.videoQualityManager.setQuality(e), this.updateVideoQuality()
        }
        applyQualityConstraints() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0;
            return this.videoQualityManager.applyQualityConstraints(e, t)
        }
        pickProperties(e, t) {
            if (null == t || null == e) return e;
            let n = {};
            for (let i of t) n[i] = e[i];
            return n
        }
        initializeStreamParameters(e) {
            let t = this.videoQualityManager.getQuality();
            this.videoStreamParameters = e.filter(e => (e.type === u.MediaTypes.VIDEO || e.type === u.MediaTypes.SCREEN) && "string" == typeof e.rid).map(e => {
                var n, i, s, r;
                return {
                    type: e.type,
                    active: e.active,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    maxBitrate: (null !== (r = e.quality) && void 0 !== r ? r : 100) < 100 ? t.bitrateMax / 4 : t.bitrateMax,
                    maxFrameRate: null === (n = t.capture) || void 0 === n ? void 0 : n.framerate,
                    maxResolution: {
                        type: u.ResolutionTypes.FIXED,
                        width: null === (i = t.capture) || void 0 === i ? void 0 : i.width,
                        height: null === (s = t.capture) || void 0 === s ? void 0 : s.height
                    },
                    profile: e.profile
                }
            })
        }
        getLocalWant(e) {
            var t, n;
            let i = this.remoteVideoSinkWants[null !== (n = null != e ? e : null === (t = this.videoStreamParameters[0]) || void 0 === t ? void 0 : t.ssrc) && void 0 !== n ? n : 0];
            if (null != i && i > 0) return i;
            let s = this.remoteVideoSinkWants.any;
            return null != s && s > 0 ? s : 100
        }
        async emitStats() {
            let e = await this.getStats();
            return null != e && this.emit(o.BaseConnectionEvent.Stats, e), e
        }
        constructor(e, t) {
            super(), this.mediaEngineConnectionId = "WebRTC-".concat(d++), this.destroyed = !1, this.audioSSRC = 0, this.selfDeaf = !1, this.localMutes = {}, this.disabledLocalVideos = {}, this.localVolumes = {}, this.isActiveOutputSinksEnabled = !1, this.activeOutputSinks = {}, this.videoSupported = !1, this.useElectronVideo = !1, this.voiceBitrate = u.DEFAULT_VOICE_BITRATE, this.remoteSinkWantsMaxFramerate = u.VIDEO_QUALITY_FRAMERATE, this.wantsPriority = new Set, this.localSpeakingFlags = {}, this.videoReady = !1, this.videoStreamParameters = [], this.remoteVideoSinkWants = {
                any: 100
            }, this.localVideoSinkWants = {
                any: 100
            }, this.connectionState = u.ConnectionStates.CONNECTING, this.experimentFlags = new Set, this.context = e, this.ids = t, this.videoQualityManager = new l.VideoQualityManager(e, this);
            let i = n("920363").default;
            this.framerateReducer = new i(this, this.videoQualityManager)
        }
    }
}