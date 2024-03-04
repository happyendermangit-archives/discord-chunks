function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return O
        }
    }), t("222007");
    var s = t("714617"),
        d = t.n(s),
        n = t("917351"),
        i = t.n(n),
        c = t("913144"),
        r = t("629109"),
        o = t("987317"),
        l = t("316272"),
        f = t("830210"),
        u = t("289180"),
        b = t("289656"),
        p = t("727284"),
        h = t("42203"),
        j = t("42887"),
        m = t("18494"),
        _ = t("773336"),
        E = t("50885"),
        g = t("49111"),
        I = t("782340");
    class T extends l.default {
        _initialize() {
            this.isSupported && (c.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), c.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), c.default.subscribe("START_SESSION", this.handleViewUpdate), c.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), c.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), c.default.subscribe("CALL_CREATE", this.handleViewUpdate), c.default.subscribe("CALL_UPDATE", this.handleViewUpdate), c.default.subscribe("CALL_DELETE", this.handleViewUpdate), c.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), c.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), c.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), c.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), c.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), c.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), E.default.on("THUMBAR_BUTTONS_CLICKED", (e, a) => this.buttonClicked(a)))
        }
        _terminate() {
            this.isSupported && (c.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), c.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), c.default.unsubscribe("START_SESSION", this.handleViewUpdate), c.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), c.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), c.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), c.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), c.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), c.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), c.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), c.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), c.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), c.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), c.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
        }
        setThumbarButtons(e) {
            !d(this.prevButtons, e) && (this.prevButtons = e, E.default.setThumbarButtons(e))
        }
        constructor(...e) {
            super(...e), this.callbackActions = {
                [E.ThumbarButtonName.VIDEO]: () => {
                    j.default.isVideoEnabled() ? r.default.setVideoEnabled(!1) : (0, p.default)(() => r.default.setVideoEnabled(!0), g.AppContext.APP)
                },
                [E.ThumbarButtonName.MUTE]: () => r.default.toggleSelfMute(),
                [E.ThumbarButtonName.DEAFEN]: () => r.default.toggleSelfDeaf(),
                [E.ThumbarButtonName.DISCONNECT]: () => o.default.disconnect()
            }, this.isSupported = (0, _.isMac)() || (0, _.isWindows)(), this.prevButtons = [], this.buttonClicked = e => {
                if (!(e.buttonName in this.callbackActions)) {
                    console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
                    return
                }
                this.callbackActions[e.buttonName]()
            }, this.handleViewUpdate = i.debounce(() => {
                let e = m.default.getVoiceChannelId();
                if (null == e) {
                    this.setThumbarButtons([]);
                    return
                }
                let a = j.default.isSelfMute(),
                    t = j.default.isSelfDeaf(),
                    s = j.default.isVideoEnabled(),
                    d = j.default.isVideoAvailable(),
                    n = h.default.getChannel(e),
                    i = null == n || (0, u.getVideoPermission)(n),
                    {
                        reachedLimit: c,
                        limit: r
                    } = null != n ? (0, f.getChannelVideoLimit)(n) : {
                        reachedLimit: void 0,
                        limit: void 0
                    },
                    o = (0, b.getVideoButtonLabel)({
                        enabled: s,
                        join: !1,
                        channel: n,
                        cameraUnavailable: !d,
                        hasPermission: i,
                        channelLimit: r,
                        channelLimitReached: c
                    });
                this.setThumbarButtons([{
                    name: E.ThumbarButtonName.VIDEO,
                    active: !s,
                    tooltip: o,
                    flags: d ? [] : ["disabled"]
                }, {
                    name: E.ThumbarButtonName.MUTE,
                    active: a,
                    tooltip: a ? I.default.Messages.UNMUTE : I.default.Messages.MUTE
                }, {
                    name: E.ThumbarButtonName.DEAFEN,
                    active: t,
                    tooltip: t ? I.default.Messages.UNDEAFEN : I.default.Messages.DEAFEN
                }, {
                    name: E.ThumbarButtonName.DISCONNECT,
                    active: !0,
                    tooltip: I.default.Messages.DISCONNECT_SELF
                }])
            }, 100)
        }
    }
    var O = new T
}