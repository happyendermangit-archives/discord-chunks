function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isHookModuleTooOld: function() {
            return m
        },
        attachToProcess: function() {
            return S
        },
        cancelAttachToProcess: function() {
            return v
        }
    }), n("70102");
    var i, s, r = n("913144"),
        a = n("363658"),
        o = n("115718"),
        l = n("161454"),
        u = n("546463"),
        d = n("697218"),
        c = n("599110"),
        _ = n("773336"),
        f = n("50885"),
        E = n("688225"),
        h = n("49111");
    let g = {
        development: [0, 0, 0, 0],
        canary: [1, 0, 30, 10],
        ptb: [1, 0, 1005, 2],
        stable: [1, 0, 9001, 2]
    };

    function m() {
        var e;
        return !(null === f.default || void 0 === f.default ? void 0 : null === (e = f.default.isModuleVersionAtLeast) || void 0 === e ? void 0 : e.call(f.default, "discord_hook", g))
    }
    async function p() {
        if (!(0, _.isWindows)()) return Promise.reject(Error("Hook is only available on Windows"));
        if (m()) return Promise.reject(Error("Hook module is too old"));
        await f.default.ensureModule("discord_hook");
        let e = await f.default.requireModule("discord_hook");
        return function(e) {
            if (null == e.setFlags) return;
            let t = 0,
                n = E.default.getCurrentConfig({
                    location: "edd7d3_1"
                }, {
                    autoTrackExposure: !1
                });
            n.enableCrashReporting && (console.log("Hook: Enabling crash reporting."), t |= 1);
            let i = d.default.getCurrentUser();
            null != i && (i.isStaff() || n.enableCrashTrigger) && (console.log("Hook: Enabling crash trigger."), t |= 2), e.setFlags(t)
        }(e), e
    }(s = i || (i = {}))[s.None = 0] = "None", s[s.EnableCrashReporting = 1] = "EnableCrashReporting", s[s.EnableCrashTrigger = 2] = "EnableCrashTrigger";

    function S(e, t) {
        return p().then(n => {
            var i;
            let s = null === (i = l.default.getGameForPID(e)) || void 0 === i ? void 0 : i.name,
                d = u.default.getGameByName(s),
                _ = null;
            return new Promise(i => {
                let u = (e, n) => {
                        c.default.track(h.AnalyticEvents.HOOK_RESULT, {
                            game_name: s,
                            game_id: null == d ? null : d.id,
                            success: n,
                            error: e,
                            ...t
                        }), null != _ && (clearTimeout(_), _ = null), n ? i() : i(e = null != e ? e : "Unknown hook error")
                    },
                    f = l.default.getOverlayOptionsForPID(e),
                    E = {
                        ...o.DEFAULT_OVERLAY_OPTIONS,
                        ...f,
                        elevate: l.default.shouldElevateProcessForPID(e)
                    };
                null == E.allowHook || E.allowHook ? (_ = setTimeout(() => {
                    n.cancelAttachToProcess(e), u("Timed out waiting for hook response", !1)
                }, 12e4), n.attachToProcess(e, E, u), r.default.wait(() => a.default.clearElevatedProcess())) : i("Hook is disabled for this game")
            })
        })
    }

    function v(e) {
        return p().then(t => {
            t.cancelAttachToProcess(e)
        })
    }
}