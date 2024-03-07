function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return N
        }
    });
    var t = E("37983"),
        o = E("884691"),
        n = E("446674"),
        r = E("77078"),
        a = E("629109"),
        i = E("363658"),
        I = E("135230"),
        s = E("622785"),
        T = E("49111"),
        S = E("782340");

    function N() {
        let e = (0, n.useStateFromStores)([s.default], () => s.default.shouldShowWarning(), []),
            _ = o.useRef(null);

        function E() {
            null !== _.current && ((0, r.closeModal)(_.current), _.current = null)
        }

        function N() {
            i.default.clearVADWarning()
        }
        return o.useEffect(() => (e ? _.current = (0, r.openModal)(e => (0, t.jsx)(I.default, {
            title: S.default.Messages.VAD_PERMISSION_TITLE,
            body: S.default.Messages.VAD_PERMISSION_BODY,
            onCancel: N,
            cancelText: S.default.Messages.VAD_PERMISSION_OKAY,
            confirmText: S.default.Messages.VAD_PERMISSION_ENABLE_PTT,
            onConfirm: () => {
                a.default.setMode(T.InputModes.PUSH_TO_TALK), N()
            },
            ...e
        })) : E(), () => {
            E()
        }), [e]), null
    }
}