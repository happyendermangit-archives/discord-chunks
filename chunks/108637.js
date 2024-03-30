function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        init: function() {
            return m
        }
    });
    var r = n("719838"),
        o = n("242880"),
        i = n("335911"),
        a = n("208454"),
        u = n("870331"),
        s = n("653992"),
        l = n("281767");

    function c(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function f(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    c(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    c(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function d(e) {
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

    function _(e, t) {
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
    }
    var E = window.DiscordNative,
        p = "".concat(l.AnalyticEvents.APP_NATIVE_CRASH, "Storage");

    function m() {
        return y.apply(this, arguments)
    }

    function y() {
        return (y = f(function() {
            var e, t, n, i, a, s, c;
            return _(this, function(m) {
                switch (m.label) {
                    case 0:
                        if (__OVERLAY__) return [2];
                        if (null == (t = null == E ? void 0 : null === (e = E.processUtils) || void 0 === e ? void 0 : e.getLastCrash)) return console.log("AppCrashedFatalReport: getLastCrash not supported."), [2];
                        return [4, t()];
                    case 1:
                        return n = m.sent(), a = (i = function(e, t) {
                            var n, r = (null == e ? void 0 : e.lastId) !== (null == t ? void 0 : t.id) && (null == t ? void 0 : t.id) != null,
                                o = null !== (n = null == t ? void 0 : t.rendererCrashExitCode) && void 0 !== n ? n : null;
                            return {
                                didCrashReporterSeeCrash: r,
                                didCrashOrUncleanExit: r || null != o && 0 !== o
                            }
                        }(o.Storage.get(p, {}), n)).didCrashReporterSeeCrash, c = function(e, t, n) {
                            function o(e) {
                                return (null == n ? void 0 : n.storedInformation) != null && 1 === n.storedInformation[e]
                            }

                            function i(e) {
                                return (null == n ? void 0 : n.storedInformation) == null || null == n.storedInformation[e] ? null : n.storedInformation[e]
                            }
                            var a, u, s, l, c, f, _, E, p, m, y, I, h, O, T, S, v, g, A, b = {
                                did_crash: t,
                                renderer_crash_reason: null !== (_ = null == n ? void 0 : n.rendererCrashReason) && void 0 !== _ ? _ : null,
                                renderer_crash_exit_code: null !== (E = null == n ? void 0 : n.rendererCrashExitCode) && void 0 !== E ? E : null,
                                had_rtc_connection: o(r.StoredCrashInformation.HasRTCConnection),
                                was_sending_video: o(r.StoredCrashInformation.IsSendingVideo),
                                was_sending_stream: o(r.StoredCrashInformation.IsSendingStream),
                                was_receiving_video: o(r.StoredCrashInformation.IsReceivingVideo),
                                was_receiving_stream: o(r.StoredCrashInformation.IsReceivingStream),
                                video_media_session_id: i(r.StoredCrashInformation.VideoMediaSessionId),
                                stream_media_session_id: i(r.StoredCrashInformation.StreamMediaSessionId),
                                last_memory_usage_kb: null !== (p = null == n ? void 0 : null === (a = n.lastMemoryInformation) || void 0 === a ? void 0 : a.memoryUsageKB) && void 0 !== p ? p : null,
                                last_used_js_heap_size_kb: null !== (m = null == n ? void 0 : null === (u = n.lastMemoryInformation) || void 0 === u ? void 0 : u.usedJSHeapSizeKB) && void 0 !== m ? m : null,
                                last_memory_usage_uptime: null !== (y = null == n ? void 0 : null === (s = n.lastMemoryInformation) || void 0 === s ? void 0 : s.uptimeSeconds) && void 0 !== y ? y : null,
                                highest_memory_usage_kb: null !== (I = null == n ? void 0 : null === (l = n.highestMemoryInformation) || void 0 === l ? void 0 : l.memoryUsageKB) && void 0 !== I ? I : null,
                                highest_used_js_heap_size_kb: null !== (h = null == n ? void 0 : null === (c = n.highestMemoryInformation) || void 0 === c ? void 0 : c.usedJSHeapSizeKB) && void 0 !== h ? h : null,
                                highest_memory_usage_uptime: null !== (O = null == n ? void 0 : null === (f = n.highestMemoryInformation) || void 0 === f ? void 0 : f.uptimeSeconds) && void 0 !== O ? O : null
                            };
                            if (!e || null == n) return d({
                                electron_crash_reporter_did_crash: !1,
                                minidump_exception_type: null,
                                minidump_exception_module_name: null,
                                minidump_relative_crash_address: null,
                                minidump_exception_module_version: null,
                                minidump_exception_module_code_id: null
                            }, b);
                            console.log("AppCrashedFatalReport lastCrash:", n, e);
                            var N = null == n ? void 0 : n.minidumpInformation;
                            return d({
                                electron_crash_reporter_did_crash: e,
                                minidump_exception_type: null !== (T = null == N ? void 0 : N.exceptionString) && void 0 !== T ? T : null,
                                minidump_exception_module_name: null !== (S = null == N ? void 0 : N.exceptionModuleName) && void 0 !== S ? S : null,
                                minidump_relative_crash_address: null !== (v = null == N ? void 0 : N.relativeCrashAddress) && void 0 !== v ? v : null,
                                minidump_exception_module_version: null !== (g = null == N ? void 0 : N.exceptionModuleVersion) && void 0 !== g ? g : null,
                                minidump_exception_module_code_id: null !== (A = null == N ? void 0 : N.exceptionModuleCodeId) && void 0 !== A ? A : null
                            }, b)
                        }(a, s = i.didCrashOrUncleanExit, n), u.default.track(l.AnalyticEvents.APP_NATIVE_CRASH, c), o.Storage.set(p, {
                            lastId: null == n ? void 0 : n.id
                        }), s && setTimeout(f(function() {
                            return _(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, function() {
                                            return I.apply(this, arguments)
                                        }()];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            })
                        }), 1e4), [2]
                }
            })
        })).apply(this, arguments)
    }

    function I() {
        return (I = f(function() {
            var e, t, n;
            return _(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (!(null !== (t = null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t)) return [3, 5];
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 4, , 5]), [4, i.default.getMediaEngine().writeAudioDebugState()];
                    case 2:
                        return n.sent(), [4, (0, s.uploadDebugLogFiles)(l.DebugLogCategory.RTC)];
                    case 3:
                        return n.sent(), console.log("Successfully uploaded debug files"), [3, 5];
                    case 4:
                        return n.sent(), console.log("Failed to upload debug files"), [3, 5];
                    case 5:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}