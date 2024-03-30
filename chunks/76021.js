function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("872810"),
        a = n("451467"),
        o = n("174609"),
        l = n("928518"),
        u = n("430824"),
        d = n("131951"),
        _ = n("594174"),
        c = n("358085"),
        E = n("981631"),
        I = n("37113");

    function T(e, t, T) {
        let f = l.default.getWindowOpen(E.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? E.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
        if ((0, o.default)(f), c.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("88099")]).then(n.bind(n, "60594"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e,
                analyticsLocation: T
            })
        });
        else {
            var S;
            let n = (0, a.default)(I.ApplicationStreamPresets.PRESET_CUSTOM, I.ApplicationStreamResolutions.RESOLUTION_1080, I.ApplicationStreamFPS.FPS_30, _.default.getCurrentUser(), null === (S = u.default.getGuild(e)) || void 0 === S ? void 0 : S.premiumTier) ? {
                width: 1920,
                height: 1080
            } : {
                width: 1280,
                height: 720
            };
            d.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                (0, s.startStream)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                })
            })
        }
    }
}