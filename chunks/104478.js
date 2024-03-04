function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("398183"),
        r = n("862337"),
        a = n("268491"),
        o = n("49111");

    function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    i = class {
        start() {
            let {
                resolution: e,
                fps: t
            } = a.default.getState();
            this._targetResolution = e, this._targetFPS = t, this._statInterval.start(1e3, this._sampleStats), this._lastLayoutChanged = (0, s.now)()
        }
        stop() {
            this._statInterval.stop(), this._streamEnd = (0, s.now)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
        }
        layoutChange(e) {
            if (e === this._lastLayout || null != this._streamEnd) return;
            let t = (0, s.now)();
            this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t
        }
        getLayout() {
            return this._lastLayout
        }
        getStats() {
            let e = {
                num_layout_changes: this._layoutChanges,
                duration_layout_fullscreen: l(this._layoutBuckets[o.StreamLayouts.FULL_SCREEN]),
                duration_layout_theatre: l(this._layoutBuckets[o.StreamLayouts.THEATRE]),
                duration_layout_pip: l(this._layoutBuckets[o.StreamLayouts.PIP]),
                duration_layout_popout: l(this._layoutBuckets[o.StreamLayouts.POPOUT]),
                duration_layout_portrait: l(this._layoutBuckets[o.StreamLayouts.PORTRAIT]),
                duration_layout_landscape: l(this._layoutBuckets[o.StreamLayouts.LANDSCAPE]),
                duration_layout_minimized: l(this._layoutBuckets[o.StreamLayouts.MINIMIZED])
            };
            return this._isSender ? {
                ...e,
                target_fps: this._targetFPS,
                target_resolution_height: this._targetResolution,
                stream_settings_changed: this._streamSettingsChanged
            } : e
        }
        constructor(e, t) {
            this._targetResolution = 0, this._targetFPS = 0, this._streamSettingsChanged = !1, this._lastLayoutChanged = 0, this._layoutChanges = 0, this._incrementLayout = (e, t) => {
                null == this._layoutBuckets[e] && (this._layoutBuckets[e] = 0), this._layoutBuckets[e] += t
            }, this._sampleStats = () => {
                let {
                    resolution: e,
                    fps: t
                } = a.default.getState();
                this._streamSettingsChanged = e !== this._targetResolution || t !== this._targetFPS
            }, this._isSender = t, this._statInterval = new r.Interval, this._lastLayout = e, this._layoutBuckets = {}
        }
    }
}