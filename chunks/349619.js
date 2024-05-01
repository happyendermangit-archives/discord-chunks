function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("153867"),
        s = n("468026"),
        o = n("740492"),
        l = n("689938");

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
            n = () => {
                a.default.updatedUnsyncedSettings({
                    disableEmbeddedActivityPopOutAlert: !0
                }), e()
            };
        o.default.disableEmbeddedActivityPopOutAlert ? e() : (0, r.openModal)(r => (0, i.jsx)(s.default, {
            confirmText: l.default.Messages.EMBEDDED_ACTIVITIES_YEP,
            secondaryConfirmText: l.default.Messages.DONT_ASK_AGAIN,
            title: l.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
            cancelText: l.default.Messages.EMBEDDED_ACTIVITIES_NVM,
            onConfirm: e,
            onConfirmSecondary: n,
            onCancel: t,
            body: l.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
            ...r
        }))
    }
}