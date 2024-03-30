function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BaseConnectionEvent: function() {
            return a.BaseConnectionEvent
        },
        default: function() {
            return y
        }
    });
    var r = n("117806"),
        o = n.n(r),
        i = n("259020"),
        a = n("116254"),
        u = n("919468"),
        s = n("439386");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function f(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function E(e) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = 0,
        y = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(O, e);
            var t, r, i, y, I, h = (t = O, r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, n, o, i = E(t);
                if (r) {
                    var a = E(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (n = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(n) || "function" == typeof n) ? n : c(e)
            });

            function O(e, t) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, O), _(c(r = h.call(this)), "mediaEngineConnectionId", "WebRTC-".concat(m++)), _(c(r), "context", void 0), _(c(r), "ids", void 0), _(c(r), "streamUserId", void 0), _(c(r), "destroyed", !1), _(c(r), "audioSSRC", 0), _(c(r), "selfDeaf", !1), _(c(r), "localMutes", {}), _(c(r), "disabledLocalVideos", {}), _(c(r), "localVolumes", {}), _(c(r), "isActiveOutputSinksEnabled", !1), _(c(r), "activeOutputSinks", {}), _(c(r), "videoSupported", !1), _(c(r), "useElectronVideo", !1), _(c(r), "voiceBitrate", s.DEFAULT_VOICE_BITRATE), _(c(r), "remoteSinkWantsMaxFramerate", s.VIDEO_QUALITY_FRAMERATE), _(c(r), "videoQualityManager", void 0), _(c(r), "wantsPriority", new Set), _(c(r), "localSpeakingFlags", {}), _(c(r), "videoReady", !1), _(c(r), "videoStreamParameters", []), _(c(r), "remoteVideoSinkWants", {
                    any: 100
                }), _(c(r), "localVideoSinkWants", {
                    any: 100
                }), _(c(r), "connectionState", s.ConnectionStates.CONNECTING), _(c(r), "stats", void 0), _(c(r), "experimentFlags", new Set), _(c(r), "framerateReducer", void 0), r.context = e, r.ids = t, r.videoQualityManager = new u.VideoQualityManager(e, c(r));
                var r, o = n("995179").default;
                return r.framerateReducer = new o(c(r), r.videoQualityManager), r
            }
            return i = O, y = [{
                key: "destroy",
                value: function() {
                    this.destroyed = !0, this.framerateReducer.destroy(), this.setConnectionState(s.ConnectionStates.DISCONNECTED), this.emit(a.BaseConnectionEvent.Destroy, this), this.removeAllListeners()
                }
            }, {
                key: "getLocalMute",
                value: function(e) {
                    return this.localMutes[e] || !1
                }
            }, {
                key: "getLocalVideoDisabled",
                value: function(e) {
                    var t;
                    return null !== (t = this.disabledLocalVideos[e]) && void 0 !== t && t
                }
            }, {
                key: "setLocalVideoDisabled",
                value: function(e, t) {
                    this.disabledLocalVideos[e] = t, this.emit(a.BaseConnectionEvent.LocalVideoDisabled, e, t)
                }
            }, {
                key: "getHasActiveVideoOutputSink",
                value: function(e) {
                    var t;
                    return null !== (t = this.activeOutputSinks[e]) && void 0 !== t && t
                }
            }, {
                key: "setHasActiveVideoOutputSink",
                value: function(e, t) {
                    this.isActiveOutputSinksEnabled = !0, this.activeOutputSinks[e] = t, this.emit(a.BaseConnectionEvent.ActiveSinksChange, e, t)
                }
            }, {
                key: "getActiveOutputSinkTrackingEnabled",
                value: function() {
                    return this.isActiveOutputSinksEnabled
                }
            }, {
                key: "setUseElectronVideo",
                value: function(e) {
                    this.useElectronVideo = e
                }
            }, {
                key: "setClipRecordUser",
                value: function(e, t, n) {}
            }, {
                key: "setViewerSideClip",
                value: function(e) {}
            }, {
                key: "setClipsKeyFrameInterval",
                value: function(e) {}
            }, {
                key: "setQualityDecoupling",
                value: function(e) {}
            }, {
                key: "getStreamParameters",
                value: function() {
                    return o()(this.videoStreamParameters)
                }
            }, {
                key: "setExperimentFlag",
                value: function(e, t) {
                    t ? this.experimentFlags.add(e) : this.experimentFlags.delete(e)
                }
            }, {
                key: "setConnectionState",
                value: function(e) {
                    this.logger.info("Connection state change: ".concat(this.connectionState, " => ").concat(e)), this.connectionState = e, this.emit(a.BaseConnectionEvent.ConnectionStateChange, this.connectionState)
                }
            }, {
                key: "updateVideoQuality",
                value: function(e) {
                    var t, n, r = this.applyQualityConstraints({}, this.videoStreamParameters[0].ssrc),
                        i = r.quality,
                        a = r.constraints,
                        u = o()(this.videoStreamParameters);
                    null != i && (u[0].maxBitrate = i.bitrateMax, null != i.encode && (u[0].maxPixelCount = i.encode.pixelCount, u[0].maxFrameRate = i.encode.framerate)), this.videoStreamParameters = u;
                    for (var s = 1; s < this.videoStreamParameters.length; s++) {
                        var c = this.applyQualityConstraints({}, this.videoStreamParameters[s].ssrc),
                            f = c.quality,
                            d = c.constraints;
                        null != f && (this.videoStreamParameters[s].maxBitrate = f.bitrateMax, null != f.encode && (this.videoStreamParameters[s].maxPixelCount = f.encode.pixelCount, this.videoStreamParameters[s].maxFrameRate = f.encode.framerate)), 100 === this.videoStreamParameters[s].quality && (a = d, i = f)
                    }
                    a.streamParameters = o()(this.videoStreamParameters), a.remoteSinkWantsPixelCount = (n = Math).max.apply(n, function(e) {
                        if (Array.isArray(e)) return l(e)
                    }(t = this.videoStreamParameters.map(function(e) {
                        var t;
                        return null !== (t = e.maxPixelCount) && void 0 !== t ? t : 0
                    })) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return l(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
                        }
                    }(t) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }());
                    var _ = this.pickProperties(a, e);
                    this.logger.info("updateVideoQuality: ".concat(JSON.stringify(_, void 0, 4))), this.updateVideoQualityCore(_, i)
                }
            }, {
                key: "applyVideoQualityMode",
                value: function(e) {
                    if (this.context === s.MediaEngineContextTypes.DEFAULT) {
                        var t = u.VIDEO_QUALITY_MODES_TO_OVERWRITES[e];
                        this.videoQualityManager.setQuality(t), this.updateVideoQuality()
                    }
                }
            }, {
                key: "overwriteQualityForTesting",
                value: function(e) {
                    this.videoQualityManager.setQuality(e), this.updateVideoQuality()
                }
            }, {
                key: "applyQualityConstraints",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return this.videoQualityManager.applyQualityConstraints(e, t)
                }
            }, {
                key: "pickProperties",
                value: function(e, t) {
                    if (null == t || null == e) return e;
                    var n = {},
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            n[s] = e[s]
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
            }, {
                key: "initializeStreamParameters",
                value: function(e) {
                    var t = this.videoQualityManager.getQuality();
                    this.videoStreamParameters = e.filter(function(e) {
                        return (e.type === s.MediaTypes.VIDEO || e.type === s.MediaTypes.SCREEN) && "string" == typeof e.rid
                    }).map(function(e) {
                        var n, r, o, i;
                        return {
                            type: e.type,
                            active: e.active,
                            rid: e.rid,
                            ssrc: e.ssrc,
                            rtxSsrc: e.rtxSsrc,
                            quality: e.quality,
                            maxBitrate: (null !== (i = e.quality) && void 0 !== i ? i : 100) < 100 ? t.bitrateMax / 4 : t.bitrateMax,
                            maxFrameRate: null === (n = t.capture) || void 0 === n ? void 0 : n.framerate,
                            maxResolution: {
                                type: s.ResolutionTypes.FIXED,
                                width: null === (r = t.capture) || void 0 === r ? void 0 : r.width,
                                height: null === (o = t.capture) || void 0 === o ? void 0 : o.height
                            },
                            profile: e.profile
                        }
                    })
                }
            }, {
                key: "getLocalWant",
                value: function(e) {
                    var t, n, r = this.remoteVideoSinkWants[null !== (n = null != e ? e : null === (t = this.videoStreamParameters[0]) || void 0 === t ? void 0 : t.ssrc) && void 0 !== n ? n : 0];
                    if (null != r && r > 0) return r;
                    var o = this.remoteVideoSinkWants.any;
                    return null != o && o > 0 ? o : 100
                }
            }, {
                key: "emitStats",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        var e;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, t.getStats()];
                                case 1:
                                    return null != (e = n.sent()) && t.emit(a.BaseConnectionEvent.Stats, e), [2, e]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                f(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                f(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }], d(i.prototype, y), I && d(i, I), O
        }(i.default)
}