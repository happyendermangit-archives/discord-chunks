function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n("348327"),
        r = n.n(a),
        c = n("392711"),
        o = n.n(c),
        i = n("629815"),
        f = n("661961"),
        d = n("585949"),
        u = n("241174"),
        l = n("218661"),
        s = n("241636"),
        b = n("381545"),
        p = n("262554"),
        h = n("935741"),
        m = n("335911"),
        v = n("894288"),
        y = n("374550"),
        E = n("131900"),
        _ = n("281767"),
        g = n("941504");

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function I(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
        }
    }

    function w(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e) {
        return (R = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function T(e, t) {
        return (T = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && T(e, t)
        }(P, e);
        var t, n, a, c, u, S = (t = P, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, a, r, c = R(t);
            if (n) {
                var o = R(this).constructor;
                r = Reflect.construct(c, arguments, o)
            } else r = c.apply(this, arguments);
            return e = this, (a = r) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(a) || "function" == typeof a) ? a : O(e)
        });

        function P() {
            var e, t;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, P), e = S.apply(this, arguments), w(O(e), "callbackActions", (w(t = {}, E.ThumbarButtonName.VIDEO, function() {
                m.default.isVideoEnabled() ? f.default.setVideoEnabled(!1) : (0, p.default)(function() {
                    return f.default.setVideoEnabled(!0)
                }, _.AppContext.APP)
            }), w(t, E.ThumbarButtonName.MUTE, function() {
                return f.default.toggleSelfMute()
            }), w(t, E.ThumbarButtonName.DEAFEN, function() {
                return f.default.toggleSelfDeaf()
            }), w(t, E.ThumbarButtonName.DISCONNECT, function() {
                return d.default.disconnect()
            }), t)), w(O(e), "isSupported", (0, y.isMac)() || (0, y.isWindows)()), w(O(e), "prevButtons", []), w(O(e), "buttonClicked", function(t) {
                if (!(t.buttonName in e.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(t.buttonName, '"'), t);
                    return
                }
                e.callbackActions[t.buttonName]()
            }), w(O(e), "handleViewUpdate", o().debounce(function() {
                var t = v.default.getVoiceChannelId();
                if (null == t) {
                    e.setThumbarButtons([]);
                    return
                }
                var n = m.default.isSelfMute(),
                    a = m.default.isSelfDeaf(),
                    r = m.default.isVideoEnabled(),
                    c = m.default.isVideoAvailable(),
                    o = h.default.getChannel(t),
                    i = null == o || (0, s.getVideoPermission)(o),
                    f = null != o ? (0, l.getChannelVideoLimit)(o) : {
                        reachedLimit: void 0,
                        limit: void 0
                    },
                    d = f.reachedLimit,
                    u = f.limit,
                    p = (0, b.getVideoButtonLabel)({
                        enabled: r,
                        join: !1,
                        channel: o,
                        cameraUnavailable: !c,
                        hasPermission: i,
                        channelLimit: u,
                        channelLimitReached: d
                    });
                e.setThumbarButtons([{
                    name: E.ThumbarButtonName.VIDEO,
                    active: !r,
                    tooltip: p,
                    flags: c ? [] : ["disabled"]
                }, {
                    name: E.ThumbarButtonName.MUTE,
                    active: n,
                    tooltip: n ? g.default.Messages.UNMUTE : g.default.Messages.MUTE
                }, {
                    name: E.ThumbarButtonName.DEAFEN,
                    active: a,
                    tooltip: a ? g.default.Messages.UNDEAFEN : g.default.Messages.DEAFEN
                }, {
                    name: E.ThumbarButtonName.DISCONNECT,
                    active: !0,
                    tooltip: g.default.Messages.DISCONNECT_SELF
                }])
            }, 100)), e
        }
        return a = P, c = [{
            key: "_initialize",
            value: function() {
                var e = this;
                this.isSupported && (i.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), i.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), i.default.subscribe("START_SESSION", this.handleViewUpdate), i.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), i.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), i.default.subscribe("CALL_CREATE", this.handleViewUpdate), i.default.subscribe("CALL_UPDATE", this.handleViewUpdate), i.default.subscribe("CALL_DELETE", this.handleViewUpdate), i.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), i.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), i.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), i.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), i.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), i.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), E.default.on("THUMBAR_BUTTONS_CLICKED", function(t, n) {
                    return e.buttonClicked(n)
                }))
            }
        }, {
            key: "_terminate",
            value: function() {
                this.isSupported && (i.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), i.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), i.default.unsubscribe("START_SESSION", this.handleViewUpdate), i.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), i.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), i.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), i.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), i.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), i.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), i.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), i.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), i.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), i.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), i.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
            }
        }, {
            key: "setThumbarButtons",
            value: function(e) {
                !r()(this.prevButtons, e) && (this.prevButtons = e, E.default.setThumbarButtons(e))
            }
        }], I(a.prototype, c), u && I(a, u), P
    }(u.default);
    t.default = new S
}