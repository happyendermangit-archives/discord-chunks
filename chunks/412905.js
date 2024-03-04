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
            return v
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
        f = n("49111"),
        _ = n("180524"),
        h = n("782340");
    let E = new a.default("AudioActionCreators");

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
            header: h.default.Messages.UNSUPPORTED_BROWSER,
            confirmText: h.default.Messages.DOWNLOAD_APP,
            cancelText: h.default.Messages.CANCEL,
            onConfirm: g,
            confirmButtonColor: s.Button.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                children: h.default.Messages.UNSUPPORTED_BROWSER_DETAILS
            })
        })), !0)
    }

    function p(e) {
        d.default.track(f.AnalyticEvents.PERMISSIONS_ACKED, {
            type: "audio",
            action: e
        })
    }

    function S() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return m() ? Promise.resolve(!1) : (d.default.track(f.AnalyticEvents.PERMISSIONS_REQUESTED, {
            type: "audio"
        }), o.default.getMediaEngine().enable().then(() => {
            r.default.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: e
            }), p(_.NativePermissionStates.ACCEPTED)
        }, e => {
            switch (e) {
                case f.UserMediaErrors.NO_DEVICES_FOUND:
                    p(_.NativePermissionStates.NO_DEVICES);
                    break;
                case f.UserMediaErrors.PERMISSION_DENIED:
                    p(_.NativePermissionStates.DENIED);
                    break;
                case f.UserMediaErrors.PERMISSION_DISMISSED:
                    p(_.NativePermissionStates.DISMISSED);
                    break;
                default:
                    p(_.NativePermissionStates.ERROR), E.warn("unknown getUserMedia error: ".concat(e))
            }
        }).then(() => !0))
    }

    function v(e) {
        let {
            usedKeybind: t = !1
        } = e, n = l.default.getKeybindForAction(f.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
        d.default.track(f.AnalyticEvents.INPUT_MUTE_TOGGLED, {
            enabled: !o.default.isSelfMute(),
            custom_keybind_assigned: null != n && n.id !== l.DEFAULT_MUTE_KEYBIND.id,
            used_keybind: t,
            app_in_focus: u.default.isFocused(),
            overlay_activated: null != (0, c.default)()
        })
    }
}