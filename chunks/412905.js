function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isNotSupported: function() {
            return m
        },
        enable: function() {
            return S
        },
        trackToggleSelfMute: function() {
            return T
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("77078"),
        r = n("913144"),
        a = n("605250"),
        o = n("42887"),
        l = n("227602"),
        u = n("471671"),
        d = n("599110"),
        c = n("360782"),
        _ = n("49111"),
        f = n("180524"),
        E = n("782340");
    let h = new a.default("AudioActionCreators");

    function g() {
        (0, s.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("649486").then(n.bind(n, "649486"));
            return t => (0, i.jsx)(e, {
                source: "Unsupported Browser",
                ...t
            })
        })
    }

    function m() {
        return !o.default.isSupported() && ((0, s.openModal)(e => (0, i.jsx)(s.ConfirmModal, {
            header: E.default.Messages.UNSUPPORTED_BROWSER,
            confirmText: E.default.Messages.DOWNLOAD_APP,
            cancelText: E.default.Messages.CANCEL,
            onConfirm: g,
            confirmButtonColor: s.Button.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                children: E.default.Messages.UNSUPPORTED_BROWSER_DETAILS
            })
        })), !0)
    }

    function p(e) {
        d.default.track(_.AnalyticEvents.PERMISSIONS_ACKED, {
            type: "audio",
            action: e
        })
    }

    function S() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return m() ? Promise.resolve(!1) : (d.default.track(_.AnalyticEvents.PERMISSIONS_REQUESTED, {
            type: "audio"
        }), o.default.getMediaEngine().enable().then(() => {
            r.default.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: e
            }), p(f.NativePermissionStates.ACCEPTED)
        }, e => {
            switch (e) {
                case _.UserMediaErrors.NO_DEVICES_FOUND:
                    p(f.NativePermissionStates.NO_DEVICES);
                    break;
                case _.UserMediaErrors.PERMISSION_DENIED:
                    p(f.NativePermissionStates.DENIED);
                    break;
                case _.UserMediaErrors.PERMISSION_DISMISSED:
                    p(f.NativePermissionStates.DISMISSED);
                    break;
                default:
                    p(f.NativePermissionStates.ERROR), h.warn("unknown getUserMedia error: ".concat(e))
            }
        }).then(() => !0))
    }

    function T(e) {
        let {
            usedKeybind: t = !1
        } = e, n = l.default.getKeybindForAction(_.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
        d.default.track(_.AnalyticEvents.INPUT_MUTE_TOGGLED, {
            enabled: !o.default.isSelfMute(),
            custom_keybind_assigned: null != n && n.id !== l.DEFAULT_MUTE_KEYBIND.id,
            used_keybind: t,
            app_in_focus: u.default.isFocused(),
            overlay_activated: null != (0, c.default)()
        })
    }
}