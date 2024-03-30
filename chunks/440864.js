function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("784184"),
        o = n("629815"),
        i = n("654370"),
        a = n("73013"),
        u = n("335911"),
        s = n("891387"),
        l = n("786840"),
        c = n("635243"),
        f = n("975628"),
        d = n("888248"),
        _ = n("945986"),
        E = n("941504");

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(T, e);
        var t, n, l, I, h, O = (t = T, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function T() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, T), O.apply(this, arguments)
        }
        return l = T, I = [{
            key: "showClipsToast",
            value: function() {
                (0, r.showToast)({
                    id: "CLIPS_IN_CALL_WARNING",
                    message: E.default.Messages.CLIPS_IN_CALL_WARNING,
                    type: r.ToastType.CLIP,
                    options: {
                        duration: _.CLIPS_TOAST_DURATION
                    }
                })
            }
        }, {
            key: "applyNativeClipsSettings",
            value: function(e) {
                if ((0, f.default)(u.default)) {
                    var t = (0, s.areClipsEnabled)(),
                        n = c.default.getSettings(),
                        r = (n.clipsEnabled || n.decoupledClipsEnabled) && t,
                        o = u.default.getMediaEngine();
                    if (o.setClipBufferLength(r ? n.clipsLength / 1e3 : 0), (null == e ? void 0 : e.settings.decoupledClipsEnabled) === !0 && this.fireClipsInitEvent(), null == e || (null == e ? void 0 : e.settings.clipsQuality) != null) {
                        var i = n.clipsQuality,
                            a = i.frameRate,
                            l = i.resolution;
                        !o.setClipsQualitySettings(l <= 480 ? l / 3 * 4 : l / 9 * 16, l, a) && null != e && this.fireClipsInitEvent()
                    }
                }
            }
        }, {
            key: "handleClipsInitOnToggleDetection",
            value: function(e) {
                var t = i.default.getVisibleGame();
                null != t && t.id === e.game.id && this.fireClipsInitEvent()
            }
        }, {
            key: "handleClipsInitOnGamesChange",
            value: function(e) {
                var t = this,
                    n = i.default.getVisibleGame();
                null != n && (e.added.find(function(e) {
                    return e.pid === n.pid
                }) ? setTimeout(function() {
                    return t.fireClipsInitEvent()
                }, _.CLIPS_RUNNING_GAME_CHANGE_CLIPS_INIT_DELAY) : this.fireClipsInitEvent())
            }
        }, {
            key: "fireClipsInitEvent",
            value: function() {
                if (!(0, f.default)(u.default)) return;
                var e = (0, s.areClipsEnabled)(),
                    t = c.default.getSettings();
                if (!!(t.clipsEnabled && e) && null == a.default.getCurrentUserActiveStream()) {
                    var n = i.default.getVisibleGame();
                    (null == n ? void 0 : n.pid) != null && (null == n ? void 0 : n.windowHandle) != null && null != n.name && "" !== n.name && o.default.dispatch({
                        type: "CLIPS_INIT",
                        sourceId: "window:".concat(null == n ? void 0 : n.windowHandle),
                        applicationName: n.name,
                        quality: t.clipsQuality
                    })
                }
            }
        }, {
            key: "handleMediaEngineSetHardwareH264",
            value: function(e) {
                !e.enabled && c.default.getSettings().clipsEnabled && d.updateClipsEnabled({
                    clipsEnabled: !1
                })
            }
        }, {
            key: "disableClips",
            value: function() {
                d.updateClipsEnabled({
                    clipsEnabled: !1,
                    trackAnalytics: !1
                })
            }
        }], p(l.prototype, I), h && p(l, h), T
    }(l.default);
    t.default = new I
}