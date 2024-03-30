function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        attachToProcess: function() {
            return A
        },
        cancelAttachToProcess: function() {
            return m
        },
        isHookModuleTooOld: function() {
            return S
        }
    }), n("411104");
    var i, r, s = n("570140"),
        a = n("923928"),
        o = n("593472"),
        l = n("594190"),
        u = n("77498"),
        d = n("594174"),
        _ = n("626135"),
        c = n("358085"),
        E = n("998502"),
        I = n("96592"),
        T = n("981631");
    let f = {
        development: [0, 0, 0, 0],
        canary: [1, 0, 30, 10],
        ptb: [1, 0, 1005, 2],
        stable: [1, 0, 9001, 2]
    };

    function S() {
        var e;
        return !(null === E.default || void 0 === E.default ? void 0 : null === (e = E.default.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(E.default, "discord_hook", f))
    }
    async function h() {
        if (!(0, c.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
        if (S()) return Promise.reject(Error("Hook module is too old"));
        await E.default.ensureModule("discord_hook");
        let e = await E.default.requireModule("discord_hook");
        return function(e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = I.default.getCurrentConfig({
                    location: "edd7d3_1"
                }, {
                    autoTrackExposure: !1
                });
            n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
            let i = d.default.getCurrentUser();
            null != i && (i.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
        }(e), e
    }(r = i || (i = {}))[r.None = 0] = "None", r[r.EnableCrashReporting = 1] = "EnableCrashReporting", r[r.EnableCrashTrigger = 2] = "EnableCrashTrigger";

    function A(e, t) {
        return h().then(n => {
            var i;
            let r = null === (i = l.default.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
                d = u.default.getGameByName(r),
                c = null;
            return new Promise(i => {
                let u = (e, n) => {
                        _.default.track(T.AnalyticEvents.HOOK_RESULT, {
                            game_name: r,
                            game_id: null == d ? null : d.id,
                            success: n,
                            error: e,
                            ...t
                        }), null != c && (clearTimeout(c), c = null), n ? i() : i(e = null != e ? e : "Unknown hook error")
                    },
                    E = l.default.getOverlayOptionsForPID(e),
                    I = {
                        ...o.DEFAULT_OVERLAY_OPTIONS,
                        ...E,
                        elevate: l.default.shouldElevateProcessForPID(e)
                    };
                null == I.allowHook || I.allowHook ? (c = setTimeout(() => {
                    n.cancelAttachToProcess(e), u("Timed out waiting for hook response", !1)
                }, 12e4), n.attachToProcess(e, I, u), s.default.wait(() => a.default.clearElevatedProcess())) : i("Hook is disabled for this game")
            })
        })
    }

    function m(e) {
        return h().then(t => {
            t.cancelAttachToProcess(e)
        })
    }
}