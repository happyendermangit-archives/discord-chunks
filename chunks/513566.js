function(e, t, a) {
    "use strict";
    a.r(t), a("47120");
    var d = a("348327"),
        n = a.n(d),
        c = a("392711"),
        i = a.n(c),
        r = a("570140"),
        o = a("846027"),
        f = a("287734"),
        l = a("317770"),
        s = a("829750"),
        u = a("189771"),
        b = a("67844"),
        h = a("173507"),
        p = a("592125"),
        m = a("131951"),
        _ = a("944486"),
        E = a("358085"),
        g = a("998502"),
        I = a("981631"),
        T = a("689938");

    function O(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }
    class R extends l.default {
        _initialize() {
            this.isSupported && (r.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), r.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), r.default.subscribe("START_SESSION", this.handleViewUpdate), r.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), r.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), r.default.subscribe("CALL_CREATE", this.handleViewUpdate), r.default.subscribe("CALL_UPDATE", this.handleViewUpdate), r.default.subscribe("CALL_DELETE", this.handleViewUpdate), r.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), r.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), r.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), r.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), r.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), r.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), g.default.on("THUMBAR_BUTTONS_CLICKED", (e, t) => this.buttonClicked(t)))
        }
        _terminate() {
            this.isSupported && (r.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), r.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), r.default.unsubscribe("START_SESSION", this.handleViewUpdate), r.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), r.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), r.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), r.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), r.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), r.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), r.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), r.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), r.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), r.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), r.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
        }
        setThumbarButtons(e) {
            !n()(this.prevButtons, e) && (this.prevButtons = e, g.default.setThumbarButtons(e))
        }
        constructor(...e) {
            super(...e), O(this, "callbackActions", {
                [g.ThumbarButtonName.VIDEO]: () => {
                    m.default.isVideoEnabled() ? o.default.setVideoEnabled(!1) : (0, h.default)(() => o.default.setVideoEnabled(!0), I.AppContext.APP)
                },
                [g.ThumbarButtonName.MUTE]: () => o.default.toggleSelfMute(),
                [g.ThumbarButtonName.DEAFEN]: () => o.default.toggleSelfDeaf(),
                [g.ThumbarButtonName.DISCONNECT]: () => f.default.disconnect()
            }), O(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), O(this, "prevButtons", []), O(this, "buttonClicked", e => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return
                }
                this.callbackActions[e.buttonName]()
            }), O(this, "handleViewUpdate", i().debounce(() => {
                let e = _.default.getVoiceChannelId();
                if (null == e) {
                    this.setThumbarButtons([]);
                    return
                }
                let t = m.default.isSelfMute(),
                    a = m.default.isSelfDeaf(),
                    d = m.default.isVideoEnabled(),
                    n = m.default.isVideoAvailable(),
                    c = p.default.getChannel(e),
                    i = null == c || (0, u.getVideoPermission)(c),
                    {
                        reachedLimit: r,
                        limit: o
                    } = null != c ? (0, s.getChannelVideoLimit)(c) : {
                        reachedLimit: void 0,
                        limit: void 0
                    },
                    f = (0, b.getVideoButtonLabel)({
                        enabled: d,
                        join: !1,
                        channel: c,
                        cameraUnavailable: !n,
                        hasPermission: i,
                        channelLimit: o,
                        channelLimitReached: r
                    });
                this.setThumbarButtons([{
                    name: g.ThumbarButtonName.VIDEO,
                    active: !d,
                    tooltip: f,
                    flags: n ? [] : ["disabled"]
                }, {
                    name: g.ThumbarButtonName.MUTE,
                    active: t,
                    tooltip: t ? T.default.Messages.UNMUTE : T.default.Messages.MUTE
                }, {
                    name: g.ThumbarButtonName.DEAFEN,
                    active: a,
                    tooltip: a ? T.default.Messages.UNDEAFEN : T.default.Messages.DEAFEN
                }, {
                    name: g.ThumbarButtonName.DISCONNECT,
                    active: !0,
                    tooltip: T.default.Messages.DISCONNECT_SELF
                }])
            }, 100))
        }
    }
    t.default = new R
}