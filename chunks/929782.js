function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        enable: function() {
            return A
        },
        isNotSupported: function() {
            return S
        },
        trackToggleSelfMute: function() {
            return m
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("570140"),
        s = n("710845"),
        o = n("131951"),
        l = n("556296"),
        u = n("451478"),
        d = n("626135"),
        _ = n("554174"),
        c = n("981631"),
        E = n("761274"),
        I = n("689938");
    let T = new s.default("AudioActionCreators");

    function f() {
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("99387"), n.e("61418")]).then(n.bind(n, "431583"));
            return t => (0, i.jsx)(e, {
                source: "Unsupported Browser",
                ...t
            })
        })
    }

    function S() {
        return !o.default.isSupported() && ((0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
            header: I.default.Messages.UNSUPPORTED_BROWSER,
            confirmText: I.default.Messages.DOWNLOAD_APP,
            cancelText: I.default.Messages.CANCEL,
            onConfirm: f,
            confirmButtonColor: r.Button.Colors.BRAND,
            ...e,
            children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                children: I.default.Messages.UNSUPPORTED_BROWSER_DETAILS
            })
        })), !0)
    }

    function h(e) {
        d.default.track(c.AnalyticEvents.PERMISSIONS_ACKED, {
            type: "audio",
            action: e
        })
    }

    function A() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return S() ? Promise.resolve(!1) : (d.default.track(c.AnalyticEvents.PERMISSIONS_REQUESTED, {
            type: "audio"
        }), o.default.getMediaEngine().enable().then(() => {
            a.default.dispatch({
                type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
                enabled: !0,
                unmute: e
            }), h(E.NativePermissionStates.ACCEPTED)
        }, e => {
            switch (e) {
                case c.UserMediaErrors.NO_DEVICES_FOUND:
                    h(E.NativePermissionStates.NO_DEVICES);
                    break;
                case c.UserMediaErrors.PERMISSION_DENIED:
                    h(E.NativePermissionStates.DENIED);
                    break;
                case c.UserMediaErrors.PERMISSION_DISMISSED:
                    h(E.NativePermissionStates.DISMISSED);
                    break;
                default:
                    h(E.NativePermissionStates.ERROR), T.warn("unknown getUserMedia error: ".concat(e))
            }
        }).then(() => !0))
    }

    function m(e) {
        let {
            usedKeybind: t = !1
        } = e, n = l.default.getKeybindForAction(c.GlobalKeybindActions.TOGGLE_MUTE, !1, !0);
        d.default.track(c.AnalyticEvents.INPUT_MUTE_TOGGLED, {
            enabled: !o.default.isSelfMute(),
            custom_keybind_assigned: null != n && n.id !== l.DEFAULT_MUTE_KEYBIND.id,
            used_keybind: t,
            app_in_focus: u.default.isFocused(),
            overlay_activated: null != (0, _.default)()
        })
    }
}