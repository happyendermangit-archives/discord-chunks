function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("446674"),
        i = n("77078"),
        l = n("629109"),
        u = n("997289"),
        o = n("773356"),
        d = n("268491"),
        c = n("305961"),
        f = n("42887"),
        h = n("697218"),
        E = n("49111"),
        p = n("686298"),
        m = n("353927"),
        C = n("782340");

    function S(e, t) {
        let {
            preset: S,
            resolution: g,
            fps: _
        } = (0, s.useStateFromStoresObject)([d.default], () => d.default.getState()), v = (0, s.useStateFromStores)([f.default], () => f.default.getGoLiveSource()), T = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), I = (0, s.useStateFromStores)([c.default], () => {
            var t;
            return null === (t = c.default.getGuild(null == e ? void 0 : e.guildId)) || void 0 === t ? void 0 : t.premiumTier
        }), {
            location: A
        } = (0, u.useAnalyticsContext)(), M = r.useCallback((e, r, s, u) => {
            if (e) {
                if (null != v) {
                    let e = {
                        qualityOptions: {
                            preset: p.ApplicationStreamPresets.PRESET_CUSTOM,
                            resolution: r,
                            frameRate: s
                        },
                        context: m.MediaEngineContextTypes.STREAM
                    };
                    null != v.desktopSource ? e.desktopSettings = {
                        sourceId: v.desktopSource.id,
                        sound: !0
                    } : null != v.cameraSource && (e.cameraSettings = {
                        videoDeviceGuid: v.cameraSource.videoDeviceGuid,
                        audioDeviceGuid: v.cameraSource.audioDeviceGuid
                    }), l.default.setGoLiveSource(e)
                }
            } else {
                var o, d;
                o = t, d = {
                    ...A,
                    object: E.AnalyticsObjects.RADIO_ITEM,
                    objectType: u
                }, (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("754534").then(n.bind(n, "754534"));
                    return t => (0, a.jsx)(e, {
                        ...t,
                        analyticsSource: d
                    })
                }, {
                    contextKey: o === E.AppContext.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
                })
            }
        }, [t, A, v]);
        if (null == e) return null;
        let R = S === p.ApplicationStreamPresets.PRESET_DOCUMENTS ? p.ApplicationStreamFPS.FPS_30 : _,
            y = p.ApplicationStreamFPSButtonsWithSuffixLabel.map(e => {
                let {
                    value: t,
                    label: n
                } = e, r = (0, o.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, g, t, T, I);
                return (0, a.jsx)(i.MenuRadioItem, {
                    group: "stream-settings-fps",
                    id: "stream-settings-fps-".concat(t),
                    label: n,
                    checked: t === _,
                    action: () => M(r, g, t, E.AnalyticsObjectTypes.RESOLUTION)
                }, "stream-settings-fps-".concat(t))
            }),
            N = p.ApplicationStreamResolutionButtonsWithSuffixLabel.map(e => {
                let {
                    value: t,
                    label: n
                } = e, r = (0, o.default)(p.ApplicationStreamPresets.PRESET_CUSTOM, t, R, T, I);
                return (0, a.jsx)(i.MenuRadioItem, {
                    group: "stream-settings-resolution",
                    id: "stream-settings-resolution-".concat(t),
                    label: n,
                    checked: t === g,
                    action: () => M(r, t, R, E.AnalyticsObjectTypes.RESOLUTION)
                }, "stream-settings-resolution-".concat(t))
            });
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(i.MenuGroup, {
                label: C.default.Messages.SCREENSHARE_FRAME_RATE,
                children: y
            }), (0, a.jsx)(i.MenuGroup, {
                label: C.default.Messages.STREAM_RESOLUTION,
                children: N
            })]
        })
    }
}