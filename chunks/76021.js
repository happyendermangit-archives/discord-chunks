function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        s = n("872810"),
        a = n("451467"),
        o = n("174609"),
        l = n("928518"),
        u = n("120522"),
        d = n("933843"),
        _ = n("430824"),
        c = n("131951"),
        E = n("594174"),
        I = n("358085"),
        T = n("981631"),
        f = n("37113");

    function S(e, t, S) {
        let A = l.default.getWindowOpen(T.PopoutWindowKeys.CHANNEL_CALL_POPOUT) ? T.PopoutWindowKeys.CHANNEL_CALL_POPOUT : null;
        if ((0, o.default)(A), I.isPlatformEmbedded)(0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("79477"), n.e("95499")]).then(n.bind(n, "60594"));
            return n => (0, i.jsx)(t, {
                ...n,
                guildId: e,
                analyticsLocation: S
            })
        }), (0, d.shouldFetchPerksDemos)() && (0, u.fetchPerksDemos)();
        else {
            var h;
            let n = (0, a.default)(f.ApplicationStreamPresets.PRESET_CUSTOM, f.ApplicationStreamResolutions.RESOLUTION_1080, f.ApplicationStreamFPS.FPS_30, E.default.getCurrentUser(), null === (h = _.default.getGuild(e)) || void 0 === h ? void 0 : h.premiumTier) ? {
                width: 1920,
                height: 1080
            } : {
                width: 1280,
                height: 720
            };
            c.default.getMediaEngine().getDesktopSource(n, !0).then(n => {
                (0, s.startStream)(e, t, {
                    pid: null,
                    sourceId: n,
                    sourceName: null
                })
            })
        }
    }
}