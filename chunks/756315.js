function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("379649"),
        r = n("846519"),
        s = n("361291"),
        a = n("981631");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    class u {
        start() {
            let {
                resolution: e,
                fps: t
            } = s.default.getState();
            this._targetResolution = e, this._targetFPS = t, this._statInterval.start(1e3, this._sampleStats), this._lastLayoutChanged = (0, i.now)()
        }
        stop() {
            this._statInterval.stop(), this._streamEnd = (0, i.now)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
        }
        layoutChange(e) {
            if (e === this._lastLayout || null != this._streamEnd) return;
            let t = (0, i.now)();
            this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t
        }
        getLayout() {
            return this._lastLayout
        }
        getStats() {
            let e = {
                num_layout_changes: this._layoutChanges,
                duration_layout_fullscreen: l(this._layoutBuckets[a.StreamLayouts.FULL_SCREEN]),
                duration_layout_theatre: l(this._layoutBuckets[a.StreamLayouts.THEATRE]),
                duration_layout_pip: l(this._layoutBuckets[a.StreamLayouts.PIP]),
                duration_layout_popout: l(this._layoutBuckets[a.StreamLayouts.POPOUT]),
                duration_layout_portrait: l(this._layoutBuckets[a.StreamLayouts.PORTRAIT]),
                duration_layout_landscape: l(this._layoutBuckets[a.StreamLayouts.LANDSCAPE]),
                duration_layout_minimized: l(this._layoutBuckets[a.StreamLayouts.MINIMIZED])
            };
            return this._isSender ? {
                ...e,
                target_fps: this._targetFPS,
                target_resolution_height: this._targetResolution,
                stream_settings_changed: this._streamSettingsChanged
            } : e
        }
        constructor(e, t) {
            o(this, "_statInterval", void 0), o(this, "_isSender", void 0), o(this, "_streamEnd", void 0), o(this, "_targetResolution", 0), o(this, "_targetFPS", 0), o(this, "_streamSettingsChanged", !1), o(this, "_lastLayout", void 0), o(this, "_lastLayoutChanged", 0), o(this, "_layoutChanges", 0), o(this, "_layoutBuckets", void 0), o(this, "_incrementLayout", (e, t) => {
                null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), this._layoutBuckets[e] += t
            }), o(this, "_sampleStats", () => {
                let {
                    resolution: e,
                    fps: t
                } = s.default.getState();
                this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS
            }), this._isSender = t, this._statInterval = new r.Interval, this._lastLayout = e, this._layoutBuckets = {}
        }
    }
}