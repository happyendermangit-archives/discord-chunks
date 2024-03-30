function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var r = n("839634"),
        o = n("891387"),
        i = n("635243"),
        a = n("975628"),
        u = n("654370"),
        s = n("354086"),
        l = n("602520"),
        c = n("53867"),
        f = n("73013"),
        d = n("935741"),
        _ = n("335911"),
        E = n("97478"),
        p = n("947248"),
        m = n("281767");

    function y(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var T = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(g, e);
        var t, n, r, T, S, v = (t = g, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : y(e)
        });

        function g(e) {
            var t, n, r, o;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, g), n = y(t = v.call(this)), o = void 0, (r = "socket") in n ? Object.defineProperty(n, r, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[r] = o, t.socket = e, t
        }
        return r = g, T = [{
            key: "guildId",
            get: function() {
                return this.getState().guildId
            }
        }, {
            key: "channelId",
            get: function() {
                return this.getState().channelId
            }
        }, {
            key: "computeVoiceFlags",
            value: function() {
                var e, t, n, r = 0,
                    d = c.ClipsAllowVoiceRecording.getSetting();
                r = (0, p.setFlag)(r, m.VoiceFlags.ALLOW_VOICE_RECORDING, d);
                var E = (0, a.default)(_.default),
                    y = (0, o.areClipsEnabled)() && i.default.getSettings().clipsEnabled && ((null === (e = f.default.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === m.ApplicationStreamStates.ACTIVE || (null === (t = f.default.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === m.ApplicationStreamStates.PAUSED),
                    I = s.default.getCurrentConfig({
                        location: "computeVoiceFlags"
                    }).enableDecoupledGameClipping,
                    h = E && i.default.getSettings().decoupledClipsEnabled && (null === (n = u.default.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && I;
                r = (0, p.setFlag)(r, m.VoiceFlags.CLIPS_ENABLED, y || h);
                var O = l.default.getCurrentConfig({
                    location: "computeVoiceFlags"
                }, {
                    autoTrackExposure: !1
                }).enableViewerClipping && E && i.default.getSettings().viewerClipsEnabled;
                return r = (0, p.setFlag)(r, m.VoiceFlags.ALLOW_ANY_VIEWER_CLIPS, O)
            }
        }, {
            key: "getInitialState",
            value: function() {
                return {
                    guildId: null,
                    channelId: null,
                    selfMute: _.default.isSelfMute(),
                    selfDeaf: _.default.isSelfDeaf(),
                    selfVideo: _.default.isVideoEnabled(),
                    preferredRegion: null,
                    preferredRegions: null,
                    videoStreamParameters: null,
                    flags: 0
                }
            }
        }, {
            key: "getNextState",
            value: function(e) {
                return {
                    guildId: e.guildId,
                    channelId: e.channelId,
                    selfMute: _.default.isSelfMute(),
                    selfDeaf: _.default.isSelfDeaf(),
                    selfVideo: _.default.isVideoEnabled(),
                    preferredRegion: E.default.getPreferredRegion(),
                    preferredRegions: E.default.getPreferredRegions(),
                    videoStreamParameters: _.default.getVideoStreamParameters(),
                    flags: this.computeVoiceFlags()
                }
            }
        }, {
            key: "shouldCommit",
            value: function() {
                return this.socket.isSessionEstablished()
            }
        }, {
            key: "didCommit",
            value: function(e) {
                var t, n = e.guildId,
                    r = e.channelId,
                    o = e.selfMute,
                    i = e.selfDeaf,
                    a = e.selfVideo,
                    u = e.preferredRegion,
                    s = e.preferredRegions,
                    l = e.videoStreamParameters,
                    c = e.flags,
                    f = void 0 === c ? 0 : c;
                a && (null === (t = d.default.getChannel(r)) || void 0 === t ? void 0 : t.type) === m.ChannelTypes.GUILD_STAGE_VOICE ? this.socket.voiceStateUpdate({
                    guildId: n,
                    channelId: r,
                    selfMute: o,
                    selfDeaf: i,
                    selfVideo: a,
                    preferredRegion: u,
                    preferredRegions: s,
                    videoStreamParameters: l,
                    flags: f
                }) : this.socket.voiceStateUpdate({
                    guildId: n,
                    channelId: r,
                    selfMute: o,
                    selfDeaf: i,
                    selfVideo: a,
                    preferredRegion: u,
                    preferredRegions: s,
                    flags: f
                })
            }
        }], I(r.prototype, T), S && I(r, S), g
    }(r.default)
}