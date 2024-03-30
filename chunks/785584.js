function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("784184"),
        i = n("224359"),
        a = n("333869"),
        u = n("63250"),
        s = n("423731"),
        l = n("306912"),
        c = n("335911"),
        f = n("208454"),
        d = n("374550"),
        _ = n("281767"),
        E = n("589280");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e, t, m) {
        var y = s.default.getWindowOpen(_.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? _.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
        if ((0, u.default)(y), d.isPlatformEmbedded) {
            ;
            (0, o.openModalLazy)((I = function() {
                var t;
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
                }(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return [4, Promise.all([n.e("49237"), n.e("99387"), n.e("99970"), n.e("83527"), n.e("9791")]).then(n.bind(n, "521300"))];
                        case 1:
                            return t = o.sent().default, [2, function(n) {
                                var o, i;
                                return r.createElement(t, (o = function(e) {
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
                                }({}, n), i = (i = {
                                    guildId: e,
                                    analyticsLocation: m
                                }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(i)).forEach(function(e) {
                                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                                }), o))
                            }]
                    }
                })
            }, function() {
                var e = this,
                    t = arguments;
                return new Promise(function(n, r) {
                    var o = I.apply(e, t);

                    function i(e) {
                        p(o, n, r, i, a, "next", e)
                    }

                    function a(e) {
                        p(o, n, r, i, a, "throw", e)
                    }
                    i(void 0)
                })
            }))
        } else {
            var I, h, O = (0, a.default)(E.ApplicationStreamPresets.PRESET_CUSTOM, E.ApplicationStreamResolutions.RESOLUTION_1080, E.ApplicationStreamFPS.FPS_30, f.default.getCurrentUser(), null === (h = l.default.getGuild(e)) || void 0 === h ? void 0 : h.premiumTier) ? {
                width: 1920,
                height: 1080
            } : {
                width: 1280,
                height: 720
            };
            c.default.getMediaEngine().getDesktopSource(O, !0).then(function(n) {
                (0, i.startStream)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                })
            })
        }
    }
}