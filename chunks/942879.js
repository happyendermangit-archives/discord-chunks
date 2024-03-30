function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamRTCAnalyticsContext: function() {
            return B
        },
        default: function() {
            return j
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("384433"),
        a = n("629815"),
        u = n("277933"),
        s = n("126844"),
        l = n("891387"),
        c = n("635243"),
        f = n("848312"),
        d = n("603463"),
        _ = n("654370"),
        E = n("53867"),
        p = n("217014"),
        m = n("935741"),
        y = n("335911"),
        I = n("649310"),
        h = n("545072"),
        O = n("97478"),
        T = n("250500"),
        S = n("870331"),
        v = n("159587"),
        g = n("736381"),
        A = n("206989"),
        b = n("281767"),
        N = n("439386");

    function R(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function C(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function P(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function D(e, t, n) {
        return t && P(e.prototype, t), n && P(e, n), e
    }

    function L(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function M(e, t, n) {
        return (M = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = U(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function U(e) {
        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                L(e, t, n[t])
            })
        }
        return e
    }

    function k(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
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

    function G(e, t) {
        return (G = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var B = function() {
            function e(t) {
                var n = t.streamRegion,
                    r = t.streamApplication,
                    o = t.streamSourceType,
                    i = t.actionContext,
                    a = t.numViewers,
                    u = t.isBroadcast;
                C(this, e), L(this, "streamRegion", void 0), L(this, "streamApplication", void 0), L(this, "streamSourceType", void 0), L(this, "actionContext", void 0), L(this, "maxViewers", void 0), L(this, "isBroadcast", void 0), this.streamRegion = n, this.streamApplication = r, this.streamSourceType = o, this.actionContext = i, this.maxViewers = a, this.isBroadcast = void 0 !== u && u
            }
            return D(e, [{
                key: "setActionContext",
                value: function(e) {
                    this.actionContext = e
                }
            }, {
                key: "trackViewerCount",
                value: function(e) {
                    this.maxViewers = Math.max(e, this.maxViewers)
                }
            }]), e
        }(),
        j = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && G(e, t)
            }(u, e);
            var t, n, r = (t = u, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = U(t);
                if (n) {
                    var a = U(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : R(e)
            });

            function u(e) {
                var t, n = e.sessionId,
                    i = e.streamKey,
                    s = e.serverId,
                    l = e.initialLayout,
                    c = e.analyticsContext,
                    f = e.isStreamer,
                    d = e.parentMediaSessionId;
                C(this, u);
                var _ = (0, g.decodeStreamKey)(i),
                    E = _.guildId,
                    m = _.channelId;
                return L(R(t = r.call(this, {
                    userId: p.default.getId(),
                    sessionId: n,
                    guildId: E,
                    channelId: m,
                    context: N.MediaEngineContextTypes.STREAM,
                    rtcServerId: s,
                    parentMediaSessionId: d
                })), "analyticsContext", void 0), L(R(t), "_videoStreamStats", void 0), L(R(t), "_streamContext", void 0), L(R(t), "_streamKey", void 0), L(R(t), "_isStreamer", void 0), L(R(t), "_updateVideoStreamId", void 0), t._streamContext = _, t._streamKey = i, t._isStreamer = f, t._videoStreamStats = new v.default(l, t.isOwner), t.analyticsContext = c, t._updateVideoStreamId = o().debounce(function(e, n) {
                    var r = (0, g.decodeStreamKey)(t._streamKey),
                        o = r.guildId,
                        i = r.channelId,
                        u = r.ownerId;
                    a.default.wait(function() {
                        return a.default.dispatch({
                            type: "RTC_CONNECTION_VIDEO",
                            guildId: o,
                            channelId: i,
                            userId: u,
                            streamId: e,
                            rtcServerId: n,
                            context: N.MediaEngineContextTypes.STREAM
                        })
                    })
                }, 200), t._videoStreamStats.start(), t._initializeEvents(), t
            }
            return D(u, [{
                key: "isOwner",
                get: function() {
                    var e = this._streamContext.ownerId;
                    return p.default.getId() === e
                }
            }, {
                key: "destroy",
                value: function(e) {
                    this._videoStreamStats.stop(), this._trackVideoEndStats(e), this._updateVideoStreamId.cancel(), this._updateVideoStreamId(null, null), this._updateVideoStreamId.flush(), M(U(u.prototype), "destroy", this).call(this)
                }
            }, {
                key: "streamUpdate",
                value: function(e) {
                    var t = this._videoQuality;
                    null != t && (e ? t.pause() : t.resume())
                }
            }, {
                key: "layoutChange",
                value: function(e) {
                    this._videoStreamStats.layoutChange(e)
                }
            }, {
                key: "getVideoStats",
                value: function() {
                    var e = this._streamContext.ownerId,
                        t = this._videoQuality;
                    if (null != t) {
                        var n, r = this.isOwner ? t.getOutboundStats()[0] : null !== (n = t.getInboundStats(e)) && void 0 !== n ? n : {};
                        return {
                            duration: r.duration,
                            avg_bitrate: r.avg_bitrate,
                            avg_fps: r.avg_fps,
                            avg_resolution: r.avg_resolution
                        }
                    }
                    return null
                }
            }, {
                key: "getRegion",
                value: function() {
                    return this.analyticsContext.streamRegion
                }
            }, {
                key: "getMaxViewers",
                value: function() {
                    return this.analyticsContext.maxViewers
                }
            }, {
                key: "_initializeEvents",
                value: function() {
                    var e = this,
                        t = !1;
                    this.on(s.RTCConnectionEvent.State, function(t, n, r) {
                        if (a.default.wait(function() {
                                return a.default.dispatch(k(w({
                                    type: "RTC_CONNECTION_STATE",
                                    state: t
                                }, n, r), {
                                    streamKey: e._streamKey
                                }))
                            }), t === b.RTCConnectionStates.RTC_CONNECTED) {
                            var o;
                            null === (o = e._connection) || void 0 === o || o.on(i.BaseConnectionEvent.ScreenshareFinish, function(t, n, r, o, i, a, u, s, l, c, f, E, p, m) {
                                var y = e.getMediaSessionId(),
                                    I = e.getRTCConnectionId(),
                                    h = e.getGoLiveSource();
                                (0, T.getSystemAnalyticsInfo)().then(function(e) {
                                    var O, T, v, g = null;
                                    null != e && (g = {
                                        cpu_brand: e.cpu_brand,
                                        cpu_vendor: e.cpu_vendor,
                                        cpu_memory: e.cpu_memory,
                                        gpu_brand: e.gpu_brand,
                                        gpu_memory: e.gpu_memory
                                    });
                                    var A = (null != t ? t : 0) + (null != n ? n : 0) + (null != r ? r : 0) + (null != o ? o : 0) + (null != i ? i : 0) + (null != a ? a : 0) + (null != s ? s : 0) + (null != m ? m : 0) + (null != p ? p : 0),
                                        R = (null == h ? void 0 : null === (O = h.desktopSource) || void 0 === O ? void 0 : O.sourcePid) != null ? _.default.getGameForPID(h.desktopSource.sourcePid) : null,
                                        C = (0, d.getRunningGameAnalytics)(R),
                                        P = C.gameName,
                                        D = C.gameId,
                                        L = C.exe,
                                        M = C.distributor;
                                    S.default.track(b.AnalyticEvents.SCREENSHARE_FINISHED, w({
                                        screenshare_frames: t,
                                        videohook_frames: n,
                                        hybrid_dxgi_frames: r,
                                        hybrid_gdi_frames: o,
                                        hybrid_videohook_frames: i,
                                        hybrid_graphics_capture_frames: a,
                                        hybrid_capture_method_switches: u,
                                        quartz_frames: s,
                                        screencapturekit_frames: m,
                                        go_live_camera_frames: p,
                                        total_frames: A,
                                        desktop_capturer_type: l,
                                        media_session_id: y,
                                        rtc_connection_id: I,
                                        context: N.MediaEngineContextTypes.STREAM,
                                        screens: c,
                                        windows: f,
                                        activity: E,
                                        soundshare_session: null !== (v = null == h ? void 0 : null === (T = h.desktopSource) || void 0 === T ? void 0 : T.soundshareSession) && void 0 !== v ? v : void 0,
                                        share_game_name: P,
                                        share_game_id: D,
                                        share_game_exe: L,
                                        share_game_distributor: M
                                    }, g))
                                })
                            })
                        }
                    }), this.on(s.RTCConnectionEvent.Video, function(n, r, o, i, a) {
                        var u = (0, g.decodeStreamKey)(e._streamKey);
                        u.guildId === n && u.channelId === r && u.ownerId === o && (null != e.getMediaSessionId() && !t && (e._trackVideoStartStats(), t = !0), e._updateVideoStreamId(i, a))
                    }), this.on(s.RTCConnectionEvent.VideoSourceQualityChanged, function(e, t, n, r, o, i) {
                        a.default.wait(function() {
                            return a.default.dispatch({
                                type: "MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED",
                                guildId: e,
                                channelId: t,
                                senderUserId: n,
                                maxResolution: r,
                                maxFrameRate: o,
                                context: i
                            })
                        })
                    })
                }
            }, {
                key: "_getStreamAnalyticsProperties",
                value: function() {
                    var e = this.analyticsContext,
                        t = e.streamRegion,
                        n = e.streamApplication,
                        r = e.streamSourceType,
                        o = e.actionContext,
                        i = e.isBroadcast,
                        a = this._streamContext,
                        u = a.ownerId,
                        s = a.guildId,
                        l = O.default.getRegion(h.default.getHostname()),
                        c = E.BroadcastAutoBroadcast.getSetting(),
                        f = (0, d.getRunningGameAnalytics)(n),
                        _ = f.gameName,
                        p = f.gameId,
                        m = f.exe,
                        y = f.distributor;
                    return {
                        channel_id: this.channelId,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: this.getMediaSessionId(),
                        parent_media_session_id: this.parentMediaSessionId,
                        sender_user_id: u,
                        context: N.MediaEngineContextTypes.STREAM,
                        guild_id: s,
                        stream_region: t,
                        stream_source_type: r,
                        guild_region: l,
                        participant_type: this.isOwner ? "streamer" : "receiver",
                        share_application_name: _,
                        share_application_id: p,
                        share_application_executable: m,
                        share_application_distributor: y,
                        video_layout: this._videoStreamStats.getLayout(),
                        client_event_source: o,
                        is_broadcast: i,
                        auto_broadcast_enabled: this.isOwner ? c : null
                    }
                }
            }, {
                key: "_trackVideoStartStats",
                value: function() {
                    var e = this.isOwner ? (0, A.default)() : null;
                    S.default.track(b.AnalyticEvents.VIDEO_STREAM_STARTED, k(w({}, this._getStreamAnalyticsProperties(), e), {
                        connection_type: I.default.getType(),
                        effective_connection_speed: I.default.getEffectiveConnectionSpeed(),
                        service_provider: I.default.getServiceProvider()
                    }))
                }
            }, {
                key: "_trackVideoEndStats",
                value: function(e) {
                    var t = m.default.getChannel(this.channelId),
                        n = null != t ? t.type : null,
                        r = this._streamContext.ownerId,
                        o = null,
                        i = null,
                        a = null,
                        u = this._videoQuality;
                    null != u && (o = this.isOwner ? u.getOutboundStats()[0] : u.getInboundStats(r), i = u.getNetworkStats(), a = this.isOwner ? u.getCodecUsageStats("streamer", this.userId) : u.getCodecUsageStats("receiver", r));
                    var s = (0, l.areClipsEnabled)(),
                        d = c.default.getSettings(),
                        _ = this.isOwner ? {
                            clips_enabled: d.clipsEnabled && s,
                            clips_buffer_length: d.clipsLength
                        } : {},
                        E = this.isOwner ? {
                            bandwidth_estimation_experiment: this.getBandwidthEstimationExperiment()
                        } : {};
                    S.default.track(b.AnalyticEvents.VIDEO_STREAM_ENDED, k(w({}, o, a, i, null, this._videoStreamStats.getStats(), this._soundshareStats.getStats(), this._getStreamAnalyticsProperties(), _, E), {
                        channel_type: n,
                        reason: e,
                        max_viewers: this.analyticsContext.maxViewers,
                        hostname: this.hostname,
                        hardware_enabled: y.default.getHardwareH264(),
                        device_performance_class: this.isOwner ? (0, f.getMediaPerformanceClass)() : null
                    }))
                }
            }, {
                key: "_getExtraConnectionOptions",
                value: function() {
                    return {
                        streamUserId: (0, g.decodeStreamKey)(this._streamKey).ownerId
                    }
                }
            }]), u
        }(u.default)
}