function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("872810"),
        s = n("451467"),
        o = n("174609"),
        l = n("928518"),
        u = n("120522"),
        d = n("933843"),
        _ = n("614011"),
        c = n("430824"),
        E = n("131951"),
        I = n("594174"),
        T = n("358085"),
        f = n("981631"),
        S = n("37113");

    function h(e, t, h) {
        let A = l.default.getWindowOpen(f.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? f.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
        if ((0, o.default)(A), T.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("12977")]).then(n.bind(n, "60594"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e,
                analyticsLocation: h
            })
        }), (0, d.shouldFetchPerksDemos)() && ((0, u.fetchPerksDemos)(), (0, _.preloadPremiumStreamingEffectImage)());
        else {
            var m;
            let n = (0, s.default)(S.ApplicationStreamPresets.PRESET_CUSTOM, S.ApplicationStreamResolutions.RESOLUTION_1080, S.ApplicationStreamFPS.FPS_30, I.default.getCurrentUser(), null === (m = c.default.getGuild(e)) || void 0 === m ? void 0 : m.premiumTier) ? {
                width: 1920,
                height: 1080
            } : {
                width: 1280,
                height: 720
            };
            E.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                (0, a.startStream)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                })
            })
        }
    }
}