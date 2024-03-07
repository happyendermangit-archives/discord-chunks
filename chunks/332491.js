function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return R
        }
    });
    var t = E("77078"),
        o = E("913144"),
        n = E("161454"),
        r = E("373469"),
        a = E("42887"),
        i = E("56947"),
        I = E("111177"),
        s = E("386045"),
        T = E("18346"),
        S = E("803725"),
        N = E("80028"),
        O = E("782340");
    class A extends I.default {
        showClipsToast() {
            (0, t.showToast)({
                id: "CLIPS_IN_CALL_WARNING",
                message: O.default.Messages.CLIPS_IN_CALL_WARNING,
                type: t.ToastType.CLIP,
                options: {
                    duration: N.CLIPS_TOAST_DURATION
                }
            })
        }
        applyNativeClipsSettings(e) {
            if (!(0, T.default)(a.default)) return;
            let _ = (0, i.areClipsEnabled)(),
                E = s.default.getSettings(),
                t = (E.clipsEnabled || E.decoupledClipsEnabled) && _,
                o = a.default.getMediaEngine();
            if (o.setClipBufferLength(t ? E.clipsLength / 1e3 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null) {
                let {
                    frameRate: _,
                    resolution: t
                } = E.clipsQuality;
                !o.setClipsQualitySettings(t <= 480 ? t / 3 * 4 : t / 9 * 16, t, _) && null != e && this.fireClipsInitEvent()
            }
        }
        handleClipsInitOnToggleDetection(e) {
            let _ = n.default.getVisibleGame();
            null != _ && _.id === e.game.id && this.fireClipsInitEvent()
        }
        handleClipsInitOnGamesChange(e) {
            let _ = n.default.getVisibleGame();
            if (null == _) return;
            let E = !!e.added.find(e => e.pid === _.pid);
            E ? setTimeout(() => this.fireClipsInitEvent(), N.CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY) : this.fireClipsInitEvent()
        }
        fireClipsInitEvent() {
            if (!(0, T.default)(a.default)) return;
            let e = (0, i.areClipsEnabled)(),
                _ = s.default.getSettings(),
                E = _.clipsEnabled && e;
            if (!E || null != r.default.getCurrentUserActiveStream()) return;
            let t = n.default.getVisibleGame();
            (null == t ? void 0 : t.pid) != null && (null == t ? void 0 : t.windowHandle) != null && null != t.name && "" !== t.name && o.default.dispatch({
                type: "CLIPS_INIT",
                sourceId: "window:".concat(null == t ? void 0 : t.windowHandle),
                applicationName: t.name,
                quality: _.clipsQuality
            })
        }
        handleMediaEngineSetHardwareH264(e) {
            let {
                enabled: _
            } = e;
            if (!_) {
                let {
                    clipsEnabled: e
                } = s.default.getSettings();
                e && S.updateClipsEnabled({
                    clipsEnabled: !1
                })
            }
        }
        disableClips() {
            S.updateClipsEnabled({
                clipsEnabled: !1,
                trackAnalytics: !1
            })
        }
    }
    var R = new A
}