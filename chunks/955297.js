function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("661961"),
        u = n("560897"),
        s = n("333869"),
        l = n("403720"),
        c = n("306912"),
        f = n("335911"),
        d = n("208454"),
        _ = n("281767"),
        E = n("589280"),
        p = n("439386"),
        m = n("941504");

    function y(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function h(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
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

    function O(e, t) {
        var O = (0, o.useStateFromStoresObject)([l.default], function() {
                return l.default.getState()
            }),
            T = O.preset,
            S = O.resolution,
            v = O.fps,
            g = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getGoLiveSource()
            }),
            A = (0, o.useStateFromStores)([d.default], function() {
                return d.default.getCurrentUser()
            }),
            b = (0, o.useStateFromStores)([c.default], function() {
                var t;
                return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
            }),
            N = (0, u.useAnalyticsContext)().location,
            R = r.useCallback(function(e, o, u, s) {
                if (e) {
                    if (null != g) {
                        var l, c, f, d = {
                            qualityOptions: {
                                preset: E.ApplicationStreamPresets.PRESET_CUSTOM,
                                resolution: o,
                                frameRate: u
                            },
                            context: p.MediaEngineContextTypes.STREAM
                        };
                        null != g.desktopSource ? d.desktopSettings = {
                            sourceId: g.desktopSource.id,
                            sound: !0
                        } : null != g.cameraSource && (d.cameraSettings = {
                            videoDeviceGuid: g.cameraSource.videoDeviceGuid,
                            audioDeviceGuid: g.cameraSource.audioDeviceGuid
                        }), a.default.setGoLiveSource(d)
                    }
                } else {
                    ;
                    l = t, c = h(I({}, N), {
                        object: _.AnalyticsObjects.RADIO_ITEM,
                        objectType: s
                    }), (0, i.openModalLazy)((f = function() {
                        var e;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, n.e("77560").then(n.bind(n, "695428"))];
                                case 1:
                                    return e = t.sent().default, [2, function(t) {
                                        return r.createElement(e, h(I({}, t), {
                                            analyticsSource: c
                                        }))
                                    }]
                            }
                        })
                    }, function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, r) {
                            var o = f.apply(e, t);

                            function i(e) {
                                y(o, n, r, i, a, "next", e)
                            }

                            function a(e) {
                                y(o, n, r, i, a, "throw", e)
                            }
                            i(void 0)
                        })
                    }), {
                        contextKey: l === _.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                    })
                }
            }, [t, N, g]);
        if (null == e) return null;
        var C = T === E.ApplicationStreamPresets.PRESET_DOCUMENTS ? E.ApplicationStreamFPS.FPS_30 : v,
            P = E.ApplicationStreamFPSButtonsWithSuffixLabel.map(function(e) {
                var t = e.value,
                    n = e.label,
                    o = (0, s.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, S, t, A, b);
                return r.createElement(i.MenuRadioItem, {
                    group: "stream-settings-fps",
                    key: "stream-settings-fps-".concat(t),
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === v,
                    action: function() {
                        return R(o, S, t, _.AnalyticsObjectTypes.RESOLUTION)
                    }
                })
            }),
            D = E.ApplicationStreamResolutionButtonsWithSuffixLabel.map(function(e) {
                var t = e.value,
                    n = e.label,
                    o = (0, s.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, t, C, A, b);
                return r.createElement(i.MenuRadioItem, {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    key: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === S,
                    action: function() {
                        return R(o, t, C, _.AnalyticsObjectTypes.RESOLUTION)
                    }
                })
            });
        return r.createElement(r.Fragment, null, r.createElement(i.MenuGroup, {
            label: m.default.Messages.SCREENSHARE_FRAME_RATE
        }, P), r.createElement(i.MenuGroup, {
            label: m.default.Messages.STREAM_RESOLUTION
        }, D))
    }
}