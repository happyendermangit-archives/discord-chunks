function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        shouldShowStageMusicMuteButton: function() {
            return g
        },
        useShowStageMusicMuteButton: function() {
            return v
        }
    });
    var r = n("898511"),
        o = n("807471"),
        i = n("935741"),
        a = n("335911"),
        u = n("894288"),
        s = n("665863"),
        l = n("423284"),
        c = n("711334"),
        f = n("406190"),
        d = n("991160"),
        _ = n("487181"),
        E = n("998993");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e, t) {
        return (I = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var h = function(e) {
            return e / 400
        },
        O = !1,
        T = (0, l.createSound)("stage_waiting", "stage_waiting", h(a.default.getOutputVolume()));

    function S() {
        var e = u.default.getVoiceChannelId();
        if (null == e) {
            T.stop(), O = !1;
            return
        }
        var t = i.default.getChannel(e);
        if (!(null == t ? void 0 : t.isGuildStageVoice()) || a.default.isSelfDeaf()) {
            T.stop(), O = !1;
            return
        }
        if (E.default.shouldPlay()) {
            T.volume = h(a.default.getOutputVolume()), T.loop(), O = !0;
            return
        }
        if (_.default.isLive(e)) {
            T.stop(), O = !1;
            return
        }
        if (E.default.isMuted()) {
            T.pause(), O = !1;
            return
        }
        var n = null != Object.values(s.default.getVoiceStatesForChannel(e)).find(function(e) {
            return !e.suppress && !e.isVoiceMuted()
        });
        n || O ? n && (T.pause(), O = !1) : (T.volume = h(a.default.getOutputVolume()), T.loop(), O = !0)
    }

    function v(e) {
        var t = (0, r.useStateFromStores)([u.default], function() {
                return u.default.getVoiceChannelId() === e
            }),
            n = null != (0, f.useStageParticipants)(e, d.StageChannelParticipantNamedIndex.SPEAKER).find(function(e) {
                return !e.voiceState.isVoiceMuted()
            }),
            o = (0, r.useStateFromStores)([_.default], function() {
                return _.default.getStageInstanceByChannel(e)
            });
        return t && null == o && !n
    }

    function g(e) {
        var t = u.default.getVoiceChannelId() === e,
            n = null != c.default.getMutableParticipants(e, d.StageChannelParticipantNamedIndex.SPEAKER).find(function(e) {
                return !e.voiceState.isVoiceMuted()
            }),
            r = _.default.getStageInstanceByChannel(e);
        return t && null == r && !n
    }
    var A = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && I(e, t)
        }(s, e);
        var t, n, r, o, a, u = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function s() {
            var e, t, n, r;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), e = u.apply(this, arguments), t = p(e), n = "actions", r = {
                VOICE_CHANNEL_SELECT: e.handleVoiceChannelSelect,
                LOGOUT: e.handleLogout,
                STAGE_MUSIC_MUTE: e.handleMute,
                STAGE_MUSIC_PLAY: e.handlePlay,
                VOICE_STATE_UPDATES: e.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: e.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: e.handleToggleSelfDeaf
            }, n in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, e
        }
        return r = s, o = [{
            key: "handleVoiceChannelSelect",
            value: function(e) {
                var t = e.channelId;
                if (null != t) {
                    var n = i.default.getChannel(t);
                    (null == n ? void 0 : n.isGuildStageVoice()) ? S(): (T.stop(), O = !1)
                } else T.stop(), O = !1
            }
        }, {
            key: "handleLogout",
            value: function() {
                T.stop(), O = !1
            }
        }, {
            key: "handlePlay",
            value: function(e) {
                e.play ? S() : (T.pause(), O = !1)
            }
        }, {
            key: "handleMute",
            value: function(e) {
                e.muted ? (T.pause(), O = !1) : S()
            }
        }, {
            key: "handleVoiceStateUpdates",
            value: function() {
                S()
            }
        }, {
            key: "handleSetOutputVolume",
            value: function(e) {
                var t = e.volume;
                T.volume = h(t)
            }
        }, {
            key: "handleToggleSelfDeaf",
            value: function() {
                S()
            }
        }], m(r.prototype, o), a && m(r, a), s
    }(o.default);
    t.default = new A
}