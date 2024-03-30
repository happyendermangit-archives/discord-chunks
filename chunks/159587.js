function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("849680"),
        o = n("945816"),
        i = n("403720"),
        a = n("281767");

    function u(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return null != e ? Math.round(e) : t
    }
    var c = function() {
        var e, t, n;

        function c(e, t) {
            var n = this;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, c), s(this, "_statInterval", void 0), s(this, "_isSender", void 0), s(this, "_streamEnd", void 0), s(this, "_targetResolution", 0), s(this, "_targetFPS", 0), s(this, "_streamSettingsChanged", !1), s(this, "_lastLayout", void 0), s(this, "_lastLayoutChanged", 0), s(this, "_layoutChanges", 0), s(this, "_layoutBuckets", void 0), s(this, "_incrementLayout", function(e, t) {
                null == n._layoutBuckets[e] && (n._layoutBuckets[e] = 0), n._layoutBuckets[e] += t
            }), s(this, "_sampleStats", function() {
                var e = i.default.getState(),
                    t = e.resolution,
                    r = e.fps;
                n._streamSettingsChanged = t !== n._targetResolution || r !== n._targetFPS
            }), this._isSender = t, this._statInterval = new o.Interval, this._lastLayout = e, this._layoutBuckets = {}
        }
        return e = c, t = [{
            key: "start",
            value: function() {
                var e = i.default.getState(),
                    t = e.resolution,
                    n = e.fps;
                this._targetResolution = t, this._targetFPS = n, this._statInterval.start(1e3, this._sampleStats), this._lastLayoutChanged = (0, r.now)()
            }
        }, {
            key: "stop",
            value: function() {
                this._statInterval.stop(), this._streamEnd = (0, r.now)(), this._incrementLayout(this._lastLayout, (this._streamEnd - this._lastLayoutChanged) / 1e3)
            }
        }, {
            key: "layoutChange",
            value: function(e) {
                if (e !== this._lastLayout && null == this._streamEnd) {
                    var t = (0, r.now)();
                    this._incrementLayout(this._lastLayout, (t - this._lastLayoutChanged) / 1e3), this._layoutChanges++, this._lastLayout = e, this._lastLayoutChanged = t
                }
            }
        }, {
            key: "getLayout",
            value: function() {
                return this._lastLayout
            }
        }, {
            key: "getStats",
            value: function() {
                var e, t, n = {
                    num_layout_changes: this._layoutChanges,
                    duration_layout_fullscreen: l(this._layoutBuckets[a.StreamLayouts.FULL_SCREEN]),
                    duration_layout_theatre: l(this._layoutBuckets[a.StreamLayouts.THEATRE]),
                    duration_layout_pip: l(this._layoutBuckets[a.StreamLayouts.PIP]),
                    duration_layout_popout: l(this._layoutBuckets[a.StreamLayouts.POPOUT]),
                    duration_layout_portrait: l(this._layoutBuckets[a.StreamLayouts.PORTRAIT]),
                    duration_layout_landscape: l(this._layoutBuckets[a.StreamLayouts.LANDSCAPE]),
                    duration_layout_minimized: l(this._layoutBuckets[a.StreamLayouts.MINIMIZED])
                };
                if (this._isSender) {
                    ;
                    return e = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                s(e, t, n[t])
                            })
                        }
                        return e
                    }({}, n), t = (t = {
                        target_fps: this._targetFPS,
                        target_resolution_height: this._targetResolution,
                        stream_settings_changed: this._streamSettingsChanged
                    }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e
                }
                return n
            }
        }], u(e.prototype, t), n && u(e, n), c
    }()
}