function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("848246"),
        a = n("442837"),
        o = n("481060"),
        l = n("846027"),
        u = n("2052"),
        d = n("451467"),
        _ = n("386542"),
        c = n("933843"),
        E = n("485731"),
        I = n("361291"),
        T = n("430824"),
        f = n("131951"),
        S = n("594174"),
        h = n("981631"),
        A = n("37113"),
        m = n("65154"),
        N = n("689938");

    function p(e, t) {
        let {
            preset: p,
            resolution: O,
            fps: R
        } = (0, a.useStateFromStoresObject)([I.default], () => I.default.getState()), C = (0, a.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), g = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentUser()), L = (0, a.useStateFromStores)([T.default], () => {
            var t;
            return null === (t = T.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
        }), {
            location: v
        } = (0, u.useAnalyticsContext)(), {
            available: D,
            activated: M
        } = (0, _.usePerksDemo)(s.EntitlementFeatureNames.STREAM_HIGH_QUALITY), y = r.useCallback((e, r, s, a) => {
            if (e) {
                if (null != C) {
                    let e = {
                        qualityOptions: {
                            preset: A.ApplicationStreamPresets.PRESET_CUSTOM,
                            resolution: r,
                            frameRate: s
                        },
                        context: m.MediaEngineContextTypes.STREAM
                    };
                    null != C.desktopSource ? e.desktopSettings = {
                        sourceId: C.desktopSource.id,
                        sound: !0
                    } : null != C.cameraSource && (e.cameraSettings = {
                        videoDeviceGuid: C.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: C.cameraSource.audioDeviceGuid
                    }), D && (0, E.hqStreamingSetEnabled)(!(0, c.ineligibleQualitySetting)(r, s)), l.default.setGoLiveSource(e)
                }
            } else {
                var u, d;
                u = t, d = {
                    ...v,
                    object: h.AnalyticsObjects.RADIO_ITEM,
                    objectType: a
                }, (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.e("41549").then(n.bind(n, "78865"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        analyticsSource: d
                    })
                }, {
                    contextKey: u === h.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
                })
            }
        }, [t, v, C, D]);
        if (null == e) return null;
        let P = p === A.ApplicationStreamPresets.PRESET_DOCUMENTS ? A.ApplicationStreamFPS.FPS_30 : R,
            U = A.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                let {
                    value: t,
                    label: n
                } = e, r = (0, d.default)(A.ApplicationStreamPresets.PRESET_CUSTOM, O, t, g, L);
                return D && !M && (r = !1), (0, i.jsx)(o.MenuRadioItem, {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === R,
                    action: () => y(r, O, t, h.AnalyticsObjectTypes.RESOLUTION)
                }, "stream-settings-fps-".concat(t))
            }),
            b = A.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                let {
                    value: t,
                    label: n
                } = e, r = (0, d.default)(A.ApplicationStreamPresets.PRESET_CUSTOM, t, P, g, L);
                return D && !M && (r = !1), (0, i.jsx)(o.MenuRadioItem, {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === O,
                    action: () => y(r, t, P, h.AnalyticsObjectTypes.RESOLUTION)
                }, "stream-settings-resolution-".concat(t))
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.MenuGroup, {
                label: N.default.Messages.SCREENSHARE_FRAME_RATE,
                children: U
            }), (0, i.jsx)(o.MenuGroup, {
                label: N.default.Messages.STREAM_RESOLUTION,
                children: b
            })]
        })
    }
}