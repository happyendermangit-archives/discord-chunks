function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isHookModuleTooOld: function() {
            return S
        },
        attachToProcess: function() {
            return T
        },
        cancelAttachToProcess: function() {
            return g
        }
    }), n("70102");
    var i, r, s = n("913144"),
        a = n("363658"),
        o = n("115718"),
        l = n("161454"),
        u = n("546463"),
        c = n("697218"),
        d = n("599110"),
        f = n("773336"),
        E = n("50885"),
        p = n("688225"),
        h = n("49111");
    let _ = {
        development: [0, 0, 0, 0],
        canary: [1, 0, 30, 10],
        ptb: [1, 0, 1005, 2],
        stable: [1, 0, 9001, 2]
    };

    function S() {
        var e;
        return !(null === E.default || void 0 === E.default ? void 0 : null === (e = E.default.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(E.default, "discord_hook", _))
    }
    async function m() {
        if (!(0, f.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
        if (S()) return Promise.reject(Error("Hook module is too old"));
        await E.default.ensureModule("discord_hook");
        let e = await E.default.requireModule("discord_hook");
        return function(e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = p.default.getCurrentConfig({
                    location: "edd7d3_1"
                }, {
                    autoTrackExposure: !1
                });
            n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
            let i = c.default.getCurrentUser();
            null != i && (i.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
        }(e), e
    }(r = i || (i = {}))[r.None = 0] = "None", r[r.EnableCrashReporting = 1] = "EnableCrashReporting", r[r.EnableCrashTrigger = 2] = "EnableCrashTrigger";

    function T(e, t) {
        return m().then(n => {
            var i;
            let r = null === (i = l.default.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
                c = u.default.getGameByName(r),
                f = null;
            return new Promise(i => {
                let u = (e, n) => {
                        d.default.track(h.AnalyticEvents.HOOK_RESULT, {
                            game_name: r,
                            game_id: null == c ? null : c.id,
                            success: n,
                            error: e,
                            ...t
                        }), null != f && (clearTimeout(f), f = null), n ? i() : i(e = null != e ? e : "Unknown hook error")
                    },
                    E = l.default.getOverlayOptionsForPID(e),
                    p = {
                        ...o.DEFAULT_OVERLAY_OPTIONS,
                        ...E,
                        elevate: l.default.shouldElevateProcessForPID(e)
                    };
                null == p.allowHook || p.allowHook ? (f = setTimeout(() => {
                    n.cancelAttachToProcess(e), u("Timed out waiting for hook response", !1)
                }, 12e4), n.attachToProcess(e, p, u), s.default.wait(() => a.default.clearElevatedProcess())) : i("Hook is disabled for this game")
            })
        })
    }

    function g(e) {
        return m().then(t => {
            t.cancelAttachToProcess(e)
        })
    }
}