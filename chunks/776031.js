function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("442837"),
        a = n("481060"),
        o = n("846027"),
        l = n("2052"),
        u = n("451467"),
        d = n("361291"),
        _ = n("430824"),
        c = n("131951"),
        E = n("594174"),
        I = n("981631"),
        T = n("37113"),
        f = n("65154"),
        S = n("689938");

    function h(e, t) {
        let {
            preset: h,
            resolution: A,
            fps: m
        } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), N = (0, s.useStateFromStores)([c.default], () => c.default.getGoLiveSource()), p = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), O = (0, s.useStateFromStores)([_.default], () => {
            var t;
            return null === (t = _.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
        }), {
            location: R
        } = (0, l.useAnalyticsContext)(), C = r.useCallback((e, r, s, l) => {
            if (e) {
                if (null != N) {
                    let e = {
                        qualityOptions: {
                            preset: T.ApplicationStreamPresets.PRESET_CUSTOM,
                            resolution: r,
                            frameRate: s
                        },
                        context: f.MediaEngineContextTypes.STREAM
                    };
                    null != N.desktopSource ? e.desktopSettings = {
                        sourceId: N.desktopSource.id,
                        sound: !0
                    } : null != N.cameraSource && (e.cameraSettings = {
                        videoDeviceGuid: N.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: N.cameraSource.audioDeviceGuid
                    }), o.default.setGoLiveSource(e)
                }
            } else {
                var u, d;
                u = t, d = {
                    ...R,
                    object: I.AnalyticsObjects.RADIO_ITEM,
                    objectType: l
                }, (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.e("41549").then(n.bind(n, "78865"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        analyticsSource: d
                    })
                }, {
                    contextKey: u === I.AppContext.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
                })
            }
        }, [t, R, N]);
        if (null == e) return null;
        let g = h === T.ApplicationStreamPresets.PRESET_DOCUMENTS ? T.ApplicationStreamFPS.FPS_30 : m,
            L = T.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                let {
                    value: t,
                    label: n
                } = e, r = (0, u.default)(T.ApplicationStreamPresets.PRESET_CUSTOM, A, t, p, O);
                return (0, i.jsx)(a.MenuRadioItem, {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === m,
                    action: () => C(r, A, t, I.AnalyticsObjectTypes.RESOLUTION)
                }, "stream-settings-fps-".concat(t))
            }),
            D = T.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                let {
                    value: t,
                    label: n
                } = e, r = (0, u.default)(T.ApplicationStreamPresets.PRESET_CUSTOM, t, g, p, O);
                return (0, i.jsx)(a.MenuRadioItem, {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === A,
                    action: () => C(r, t, g, I.AnalyticsObjectTypes.RESOLUTION)
                }, "stream-settings-resolution-".concat(t))
            });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.MenuGroup, {
                label: S.default.Messages.SCREENSHARE_FRAME_RATE,
                children: L
            }), (0, i.jsx)(a.MenuGroup, {
                label: S.default.Messages.STREAM_RESOLUTION,
                children: D
            })]
        })
    }
}