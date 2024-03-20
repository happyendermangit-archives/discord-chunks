function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        init: function() {
            return S
        }
    });
    var t = E("771281"),
        o = E("95410"),
        n = E("42887"),
        r = E("697218"),
        a = E("599110"),
        i = E("147746"),
        I = E("49111");
    let s = window.DiscordNative,
        T = "".concat(I.AnalyticEvents.APP_NATIVE_CRASH, "Storage");
    async function S() {
        var e;
        if (__OVERLAY__) return;
        let _ = null == s ? void 0 : null === (e = s.processUtils) || void 0 === e ? void 0 : e.getLastCrash;
        if (null == _) {
            console.log("AppCrashedFatalReport: getLastCrash not supported.");
            return
        }
        let E = await _(),
            n = o.default.get(T, {}),
            {
                didCrashReporterSeeCrash: r,
                didCrashOrUncleanExit: i
            } = function(e, _) {
                var E;
                let t = (null == e ? void 0 : e.lastId) !== (null == _ ? void 0 : _.id) && (null == _ ? void 0 : _.id) != null,
                    o = null !== (E = null == _ ? void 0 : _.rendererCrashExitCode) && void 0 !== E ? E : null;
                return {
                    didCrashReporterSeeCrash: t,
                    didCrashOrUncleanExit: t || null != o && 0 !== o
                }
            }(n, E),
            S = function(e, _, E) {
                var o, n, r, a, i, I, s, T, S, N, O, A, R, l, u, L, C, c, D;

                function d(e) {
                    return (null == E ? void 0 : E.storedInformation) != null && 1 === E.storedInformation[e]
                }

                function U(e) {
                    return (null == E ? void 0 : E.storedInformation) == null || null == E.storedInformation[e] ? null : E.storedInformation[e]
                }
                let M = {
                    did_crash: _,
                    renderer_crash_reason: null !== (s = null == E ? void 0 : E.rendererCrashReason) && void 0 !== s ? s : null,
                    renderer_crash_exit_code: null !== (T = null == E ? void 0 : E.rendererCrashExitCode) && void 0 !== T ? T : null,
                    had_rtc_connection: d(t.StoredCrashInformation.HasRTCConnection),
                    was_sending_video: d(t.StoredCrashInformation.IsSendingVideo),
                    was_sending_stream: d(t.StoredCrashInformation.IsSendingStream),
                    was_receiving_video: d(t.StoredCrashInformation.IsReceivingVideo),
                    was_receiving_stream: d(t.StoredCrashInformation.IsReceivingStream),
                    video_media_session_id: U(t.StoredCrashInformation.VideoMediaSessionId),
                    stream_media_session_id: U(t.StoredCrashInformation.StreamMediaSessionId),
                    last_memory_usage_kb: null !== (S = null == E ? void 0 : null === (o = E.lastMemoryInformation) || void 0 === o ? void 0 : o.memoryUsageKB) && void 0 !== S ? S : null,
                    last_used_js_heap_size_kb: null !== (N = null == E ? void 0 : null === (n = E.lastMemoryInformation) || void 0 === n ? void 0 : n.usedJSHeapSizeKB) && void 0 !== N ? N : null,
                    last_memory_usage_uptime: null !== (O = null == E ? void 0 : null === (r = E.lastMemoryInformation) || void 0 === r ? void 0 : r.uptimeSeconds) && void 0 !== O ? O : null,
                    highest_memory_usage_kb: null !== (A = null == E ? void 0 : null === (a = E.highestMemoryInformation) || void 0 === a ? void 0 : a.memoryUsageKB) && void 0 !== A ? A : null,
                    highest_used_js_heap_size_kb: null !== (R = null == E ? void 0 : null === (i = E.highestMemoryInformation) || void 0 === i ? void 0 : i.usedJSHeapSizeKB) && void 0 !== R ? R : null,
                    highest_memory_usage_uptime: null !== (l = null == E ? void 0 : null === (I = E.highestMemoryInformation) || void 0 === I ? void 0 : I.uptimeSeconds) && void 0 !== l ? l : null
                };
                if (!e || null == E) return {
                    electron_crash_reporter_did_crash: !1,
                    minidump_exception_type: null,
                    minidump_exception_module_name: null,
                    minidump_relative_crash_address: null,
                    minidump_exception_module_version: null,
                    minidump_exception_module_code_id: null,
                    ...M
                };
                console.log("AppCrashedFatalReport lastCrash:", E, e);
                let h = null == E ? void 0 : E.minidumpInformation;
                return {
                    electron_crash_reporter_did_crash: e,
                    minidump_exception_type: null !== (u = null == h ? void 0 : h.exceptionString) && void 0 !== u ? u : null,
                    minidump_exception_module_name: null !== (L = null == h ? void 0 : h.exceptionModuleName) && void 0 !== L ? L : null,
                    minidump_relative_crash_address: null !== (C = null == h ? void 0 : h.relativeCrashAddress) && void 0 !== C ? C : null,
                    minidump_exception_module_version: null !== (c = null == h ? void 0 : h.exceptionModuleVersion) && void 0 !== c ? c : null,
                    minidump_exception_module_code_id: null !== (D = null == h ? void 0 : h.exceptionModuleCodeId) && void 0 !== D ? D : null,
                    ...M
                }
            }(r, i, E);
        a.default.track(I.AnalyticEvents.APP_NATIVE_CRASH, S), o.default.set(T, {
            lastId: null == E ? void 0 : E.id
        }), i && setTimeout(async () => await N(), 1e4)
    }
    async function N() {
        var e, _;
        let E = null !== (_ = null === (e = r.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== _ && _;
        if (E) try {
            await n.default.getMediaEngine().writeAudioDebugState(), await (0, i.uploadDebugLogFiles)(I.DebugLogCategory.RTC), console.log("Successfully uploaded debug files")
        } catch (e) {
            console.log("Failed to upload debug files")
        }
    }
}