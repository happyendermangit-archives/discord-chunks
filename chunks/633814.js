function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        attachToProcess: function() {
            return S
        },
        cancelAttachToProcess: function() {
            return v
        },
        isHookModuleTooOld: function() {
            return h
        }
    });
    var r, o, i = n("629815"),
        a = n("961947"),
        u = n("660939"),
        s = n("654370"),
        l = n("950520"),
        c = n("208454"),
        f = n("870331"),
        d = n("374550"),
        _ = n("131900"),
        E = n("876548"),
        p = n("281767");

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e) {
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
    var I = {
        development: [0, 0, 0, 0],
        canary: [1, 0, 30, 10],
        ptb: [1, 0, 1005, 2],
        stable: [1, 0, 9001, 2]
    };

    function h() {
        var e;
        return !(null === _.default || void 0 === _.default ? void 0 : null === (e = _.default.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(_.default, "discord_hook", I))
    }

    function O() {
        return T.apply(this, arguments)
    }

    function T() {
        var e;
        return e = function() {
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
                        if (!(0, d.isWindows)()) return [2, Promise.reject(Error("Hook is only available on Windows"))];
                        if (h()) return [2, Promise.reject(Error("Hook module is too old"))];
                        return [4, _.default.ensureModule("discord_hook")];
                    case 1:
                        return t.sent(), [4, _.default.requireModule("discord_hook")];
                    case 2:
                        return function(e) {
                            if (null != e.setFlags) {
                                var t = 0,
                                    n = E.default.getCurrentConfig({
                                        location: "edd7d3_1"
                                    }, {
                                        autoTrackExposure: !1
                                    });
                                n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
                                var r = c.default.getCurrentUser();
                                null != r && (r.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
                            }
                        }(e = t.sent()), [2, e]
                }
            })
        }, (T = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    m(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    m(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }(r = o || (o = {}))[r.None = 0] = "None", r[r.EnableCrashReporting = 1] = "EnableCrashReporting", r[r.EnableCrashTrigger = 2] = "EnableCrashTrigger";

    function S(e, t) {
        return O().then(function(n) {
            var r, o = null === (r = s.default.getGameForPID(e)) || void 0 === r ? void 0 : r.name,
                c = l.default.getGameByName(o),
                d = null;
            return new Promise(function(r) {
                var l, _, E = function(e, n) {
                        f.default.track(p.AnalyticEvents.HOOK_RESULT, y({
                            game_name: o,
                            game_id: null == c ? null : c.id,
                            success: n,
                            error: e
                        }, t)), null != d && (clearTimeout(d), d = null), n ? r() : r(e = null != e ? e : "Unknown hook error")
                    },
                    m = s.default.getOverlayOptionsForPID(e);
                var I = (l = y({}, u.DEFAULT_OVERLAY_OPTIONS, m), _ = (_ = {
                    elevate: s.default.shouldElevateProcessForPID(e)
                }, _), Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(_)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(_)).forEach(function(e) {
                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(_, e))
                }), l);
                null == I.allowHook || I.allowHook ? (d = setTimeout(function() {
                    n.cancelAttachToProcess(e), E("Timed out waiting for hook response", !1)
                }, 12e4), n.attachToProcess(e, I, E), i.default.wait(function() {
                    return a.default.clearElevatedProcess()
                })) : r("Hook is disabled for this game")
            })
        })
    }

    function v(e) {
        return O().then(function(t) {
            t.cancelAttachToProcess(e)
        })
    }
}