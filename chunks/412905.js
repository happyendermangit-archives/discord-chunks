function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isNotSupported: function() {
            return g
        },
        enable: function() {
            return A
        },
        trackToggleSelfMute: function() {
            return D
        }
    });
    var s = n("37983");
    n("884691");
    var u = n("77078"),
        a = n("913144"),
        i = n("605250"),
        o = n("42887"),
        d = n("227602"),
        c = n("471671"),
        p = n("599110"),
        r = n("360782"),
        l = n("49111"),
        f = n("180524"),
        _ = n("782340");
    let m = new i.default("AudioActionCreators");

    function E() {
        (0, u.openModalLazy)(async () => {
            let {
                default: e
            } = await n.el("649486").then(n.bind(n, "649486"));
            return t => (0, s.jsx)(e, {
                source: "Unsupported Browser",
                ...t
            })
        })
    }

    function g() {
        return !o.default.isSupported() && ((0, u.openModal)(e => (0, s.jsx)(u.ConfirmModal, {
            header: _.default.Messages.UNSUPPORTED_BROWSER,
            confirmText: _.default.Messages.DOWNLOAD_APP,
            cancelText: _.default.Messages.CANCEL,
            onConfirm: E,
            confirmButtonColor: u.Button.Colors.BRAND,
            ...e,
            children: (0, s.jsx)(u.Text, {
                variant: "text-md/normal",
                children: _.default.Messages.UNSUPPORTED_BROWSER_DETAILS
            })
        })), !0)
    }

    function S(e) {
        p.default.track(l.AnalyticEvents.PERMISSIONS_ACKED, {
            type: "audio",
            action: e
        })
    }

    function A() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return g() ? Promise.resolve(!1) : (p.default.track(l.AnalyticEvents.PERMISSIONS_REQUESTED, {
            type: "audio"
        }), o.default.getMediaEngine().enable().then(() => {
            a.default.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: e
            }), S(f.NativePermissionStates.ACCEPTED)
        }, e => {
            switch (e) {
                case l.UserMediaErrors.NO_DEVICES_FOUND:
                    S(f.NativePermissionStates.NO_DEVICES);
                    break;
                case l.UserMediaErrors.PERMISSION_DENIED:
                    S(f.NativePermissionStates.DENIED);
                    break;
                case l.UserMediaErrors.PERMISSION_DISMISSED:
                    S(f.NativePermissionStates.DISMISSED);
                    break;
                default:
                    S(f.NativePermissionStates.ERROR), m.warn("unknown getUserMedia error: ".concat(e))
            }
        }).then(() => !0))
    }

    function D(e) {
        let {
            usedKeybind: t = !1
        } = e, n = d.default.getKeybindForAction(l.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
        p.default.track(l.AnalyticEvents.INPUT_MUTE_TOGGLED, {
            enabled: !o.default.isSelfMute(),
            custom_keybind_assigned: null != n && n.id !== d.DEFAULT_MUTE_KEYBIND.id,
            used_keybind: t,
            app_in_focus: c.default.isFocused(),
            overlay_activated: null != (0, r.default)()
        })
    }
}