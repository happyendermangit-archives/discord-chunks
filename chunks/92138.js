function(e, t, n) {
    "use strict";
    n.r(t), n("319322"), n("743606");
    var i = n("960048");
    n("789876"), n("643191"), n("323716"), n("716578"), n("314897"), n("828695"), n("450795"), n("208258"), n("528224");
    var r = n("213919"),
        s = n("902866"),
        a = n("731965"),
        o = n("442837"),
        l = n("627420"),
        u = n("347016"),
        d = n("781272"),
        _ = n("579806"),
        c = n("627845"),
        E = n("675896");
    n("308765");
    var I = n("109117"),
        T = n("710845");
    n("729345");
    var f = n("981631"),
        S = n("689938");
    (0, l.setUpdateRules)(d.default), (0, s.UserDefenses)(S.default, r, _.default), o.default.Emitter.injectBatchEmitChanges(a.batchUpdates), o.default.PersistedStore.disableWrites = __OVERLAY__, o.default.initialize();
    let A = window.GLOBAL_ENV.RELEASE_CHANNEL;
    new T.default().log("[BUILD INFO] Release Channel: ".concat(A, ", Build Number: ").concat("282804", ", Version Hash: ").concat("234b7445b34b3200959dfdb64286cd6c1afe99e8")), i.default.setTags({
        appContext: f.CURRENT_APP_CONTEXT
    }), c.default.initBasic(), E.default.init(), u.FocusRingManager.init(), I.init()
}