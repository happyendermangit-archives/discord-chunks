function(e, _, E) {
    "use strict";
    E.r(_), E("190709"), E("996763");
    var t = E("286235");
    E("792736"), E("279295"), E("455209"), E("619106"), E("271938"), E("760190"), E("407117"), E("668528"), E("322876");
    var o = E("171718"),
        n = E("404073"),
        r = E("503586"),
        i = E("446674"),
        a = E("429030"),
        I = E("688817"),
        s = E("767251"),
        T = E("49671"),
        S = E("951212"),
        N = E("424948");
    E("762017");
    var O = E("787006"),
        A = E("605250"),
        R = E("648387"),
        l = E("49111"),
        u = E("782340");
    (0, a.setUpdateRules)(s.default), (0, n.default)(u.default, o.default, T.default), i.default.Emitter.injectBatchEmitChanges(r.batchUpdates), i.default.PersistedStore.disableWrites = __OVERLAY__, i.default.initialize();
    let L = window.GLOBAL_ENV.RELEASE_CHANNEL;
    new(0, A.default)().log("[BUILD INFO] Release Channel: ".concat(L, ", Build Number: ").concat("271779", ", Version Hash: ").concat("15c2f3c047a674034c8e21eac062ef20558f3932")), t.default.setTags({
        appContext: l.CURRENT_APP_CONTEXT
    }), S.default.initBasic(), N.default.init(), I.FocusRingManager.init(), O.init(), (0, R.cleanupTempFiles)()
}