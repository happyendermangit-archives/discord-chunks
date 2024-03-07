function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        init: function() {
            return I
        }
    });
    var t = E("771281"),
        o = E("95410"),
        n = E("599110"),
        r = E("49111");
    let a = window.DiscordNative,
        i = "".concat(r.AnalyticEvents.APP_NATIVE_CRASH, "Storage");
    async function I() {
        var e;
        if (__OVERLAY__) return;
        let _ = null == a ? void 0 : null === (e = a.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
        if (null == _) {
            console.log("AppCrashedFatalReport: getLastCrash not supported.");
            return
        }
        let E = await _(),
            I = o.default.get(i, {}),
            T = function(e, _) {
                var E, o, n, r, a, i, I, T, s, S, N, O, A, R, l, u, L, C, D;
                let c = (null == e ? void 0 : e.lastId) !== (null == _ ? void 0 : _.id) && (null == _ ? void 0 : _.id) != null;

                function d(e) {
                    return (null == _ ? void 0 : _.storedInformation) != null && 1 === _.storedInformation[e]
                }

                function U(e) {
                    return (null == _ ? void 0 : _.storedInformation) == null || null == _.storedInformation[e] ? null : _.storedInformation[e]
                }
                let M = null !== (I = null == _ ? void 0 : _.rendererCrashExitCode) && void 0 !== I ? I : null,
                    h = {
                        did_crash: c || null != M && 0 !== M,
                        renderer_crash_reason: null !== (T = null == _ ? void 0 : _.rendererCrashReason) && void 0 !== T ? T : null,
                        renderer_crash_exit_code: M,
                        had_rtc_connection: d(t.StoredCrashInformation.HasRTCConnection),
                        was_sending_video: d(t.StoredCrashInformation.IsSendingVideo),
                        was_sending_stream: d(t.StoredCrashInformation.IsSendingStream),
                        was_receiving_video: d(t.StoredCrashInformation.IsReceivingVideo),
                        was_receiving_stream: d(t.StoredCrashInformation.IsReceivingStream),
                        video_media_session_id: U(t.StoredCrashInformation.VideoMediaSessionId),
                        stream_media_session_id: U(t.StoredCrashInformation.StreamMediaSessionId),
                        last_memory_usage_kb: null !== (s = null == _ ? void 0 : null === (E = _.lastMemoryInformation) || void 0 === E ? void 0 : E.memoryUsageKB) && void 0 !== s ? s : null,
                        last_used_js_heap_size_kb: null !== (S = null == _ ? void 0 : null === (o = _.lastMemoryInformation) || void 0 === o ? void 0 : o.usedJSHeapSizeKB) && void 0 !== S ? S : null,
                        last_memory_usage_uptime: null !== (N = null == _ ? void 0 : null === (n = _.lastMemoryInformation) || void 0 === n ? void 0 : n.uptimeSeconds) && void 0 !== N ? N : null,
                        highest_memory_usage_kb: null !== (O = null == _ ? void 0 : null === (r = _.highestMemoryInformation) || void 0 === r ? void 0 : r.memoryUsageKB) && void 0 !== O ? O : null,
                        highest_used_js_heap_size_kb: null !== (A = null == _ ? void 0 : null === (a = _.highestMemoryInformation) || void 0 === a ? void 0 : a.usedJSHeapSizeKB) && void 0 !== A ? A : null,
                        highest_memory_usage_uptime: null !== (R = null == _ ? void 0 : null === (i = _.highestMemoryInformation) || void 0 === i ? void 0 : i.uptimeSeconds) && void 0 !== R ? R : null
                    };
                if (!c || null == _) return {
                    electron_crash_reporter_did_crash: !1,
                    minidump_exception_type: null,
                    minidump_exception_module_name: null,
                    minidump_relative_crash_address: null,
                    minidump_exception_module_version: null,
                    minidump_exception_module_code_id: null,
                    ...h
                };
                console.log("AppCrashedFatalReport lastCrash:", _, c);
                let P = null == _ ? void 0 : _.minidumpInformation;
                return {
                    electron_crash_reporter_did_crash: c,
                    minidump_exception_type: null !== (l = null == P ? void 0 : P.exceptionString) && void 0 !== l ? l : null,
                    minidump_exception_module_name: null !== (u = null == P ? void 0 : P.exceptionModuleName) && void 0 !== u ? u : null,
                    minidump_relative_crash_address: null !== (L = null == P ? void 0 : P.relativeCrashAddress) && void 0 !== L ? L : null,
                    minidump_exception_module_version: null !== (C = null == P ? void 0 : P.exceptionModuleVersion) && void 0 !== C ? C : null,
                    minidump_exception_module_code_id: null !== (D = null == P ? void 0 : P.exceptionModuleCodeId) && void 0 !== D ? D : null,
                    ...h
                }
            }(I, E);
        n.default.track(r.AnalyticEvents.APP_NATIVE_CRASH, T), o.default.set(i, {
            lastId: null == E ? void 0 : E.id
        })
    }
}