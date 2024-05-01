function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("846027"),
        l = n("923928"),
        u = n("468026"),
        d = n("269647"),
        _ = n("981631"),
        c = n("689938");

    function E() {
        let e = (0, a.useStateFromStores)([d.default], () => d.default.shouldShowWarning(), []),
            t = r.useRef(null);

        function n() {
            null !== t.current && ((0, s.closeModal)(t.current), t.current = null)
        }

        function E() {
            l.default.clearVADWarning()
        }
        return r.useEffect(() => (e ? t.current = (0, s.openModal)(e => (0, i.jsx)(u.default, {
            title: c.default.Messages.VAD_PERMISSION_TITLE,
            body: c.default.Messages.VAD_PERMISSION_BODY,
            onCancel: E,
            cancelText: c.default.Messages.VAD_PERMISSION_OKAY,
            confirmText: c.default.Messages.VAD_PERMISSION_ENABLE_PTT,
            onConfirm: () => {
                o.default.setMode(_.InputModes.PUSH_TO_TALK), E()
            },
            ...e
        })) : n(), () => {
            n()
        }), [e]), null
    }
}