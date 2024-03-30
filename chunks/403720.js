function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("589280"),
        u = n("439386");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = a.ApplicationStreamPresets.PRESET_VIDEO,
        _ = a.ApplicationStreamResolutions.RESOLUTION_720,
        E = a.ApplicationStreamFPS.FPS_30,
        p = !0,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(l, e);
            var t, n, r, o, i, u = (t = l, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function l() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, l), u.apply(this, arguments)
            }
            return r = l, o = [{
                key: "initialize",
                value: function(e) {
                    if (null != e) {
                        var t, n;
                        d = null !== (t = e.preset) && void 0 !== t ? t : a.ApplicationStreamPresets.PRESET_VIDEO, _ = e.resolution, E = e.fps, p = null === (n = e.soundshareEnabled) || void 0 === n || n
                    }
                }
            }, {
                key: "getState",
                value: function() {
                    return {
                        preset: d,
                        resolution: _,
                        fps: E,
                        soundshareEnabled: p
                    }
                }
            }], s(r.prototype, o), i && s(r, i), l
        }(o.default.PersistedStore);
    l(m, "displayName", "ApplicationStreamingSettingsStore"), l(m, "persistKey", "ApplicationStreamingSettingStore"), t.default = new m(i.default, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
            var t = e.settings;
            if ((null == t ? void 0 : t.context) === u.MediaEngineContextTypes.STREAM) {
                if ((null == t ? void 0 : t.qualityOptions) == null || (null == t ? void 0 : t.qualityOptions.resolution) == null || (null == t ? void 0 : t.qualityOptions.frameRate) == null) return !1;
                _ = t.qualityOptions.resolution, E = t.qualityOptions.frameRate
            }
        },
        STREAM_UPDATE_SETTINGS: function(e) {
            var t = e.preset,
                n = e.resolution,
                r = e.frameRate,
                o = e.soundshareEnabled,
                i = !1;
            return null != t && (d = t, i = !0), null != n && (_ = n, i = !0), null != r && (E = r, i = !0), null != o && (p = o, i = !0), i
        }
    })
}