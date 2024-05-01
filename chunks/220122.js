function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("481060"),
        r = n("570140"),
        a = n("594190"),
        s = n("199902"),
        o = n("131951"),
        l = n("924557"),
        u = n("474639"),
        d = n("435064"),
        _ = n("779618"),
        c = n("39604"),
        E = n("356659"),
        I = n("689938");
    class T extends u.default {
        showClipsToast() {
            (0, i.showToast)({
                id: "CLIPS_IN_CALL_WARNING",
                message: I.default.Messages.CLIPS_IN_CALL_WARNING,
                type: i.ToastType.CLIP,
                options: {
                    duration: E.CLIPS_TOAST_DURATION
                }
            })
        }
        applyNativeClipsSettings(e) {
            if (!(0, _.default)(o.default)) return;
            let t = (0, l.areClipsEnabled)(),
                n = d.default.getSettings(),
                i = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
                r = o.default.getMediaEngine();
            if (r.setClipBufferLength(i ? n.clipsLength / 1e3 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null) {
                let {
                    frameRate: t,
                    resolution: i
                } = n.clipsQuality;
                !r.setClipsQualitySettings(i <= 480 ? i / 3 * 4 : i / 9 * 16, i, t) && null != e && this.fireClipsInitEvent()
            }
        }
        handleClipsInitOnToggleDetection(e) {
            let t = a.default.getVisibleGame();
            null != t && t.id === e.game.id && this.fireClipsInitEvent()
        }
        handleClipsInitOnGamesChange(e) {
            let t = a.default.getVisibleGame();
            if (null != t) e.added.find(e => e.pid === t.pid) ? setTimeout(() => this.fireClipsInitEvent(), E.CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY) : this.fireClipsInitEvent()
        }
        fireClipsInitEvent() {
            if (!(0, _.default)(o.default)) return;
            let e = (0, l.areClipsEnabled)(),
                t = d.default.getSettings();
            if (!(t.clipsEnabled && e) || null != s.default.getCurrentUserActiveStream()) return;
            let n = a.default.getVisibleGame();
            (null == n ? void 0 : n.pid) != null && (null == n ? void 0 : n.windowHandle) != null && null != n.name && "" !== n.name && r.default.dispatch({
                type: "CLIPS_INIT",
                sourceId: "window:".concat(null == n ? void 0 : n.windowHandle),
                applicationName: n.name,
                quality: t.clipsQuality
            })
        }
        handleMediaEngineSetHardwareH264(e) {
            let {
                enabled: t
            } = e;
            if (!t) {
                let {
                    clipsEnabled: e
                } = d.default.getSettings();
                e && c.updateClipsEnabled({
                    clipsEnabled: !1
                })
            }
        }
        disableClips() {
            c.updateClipsEnabled({
                clipsEnabled: !1,
                trackAnalytics: !1
            })
        }
    }
    t.default = new T
}