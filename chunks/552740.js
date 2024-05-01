function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openStartBroadcastConfirmModal: function() {
            return l
        },
        openStopBroadcastConfirmModal: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("67212"),
        s = n("689938");

    function o(e) {
        (0, r.openModal)(t => (0, i.jsx)(r.ConfirmModal, {
            header: s.default.Messages.STOP_STREAMING,
            confirmText: s.default.Messages.STOP_STREAMING,
            cancelText: s.default.Messages.CANCEL,
            onConfirm: () => {
                (0, a.stopBroadcast)(), e()
            },
            ...t,
            children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                children: s.default.Messages.BROADCASTING_STOP_STREAM_CONFIRM_BODY
            })
        }))
    }

    function l(e) {
        (0, r.openModal)(t => (0, i.jsx)(r.ConfirmModal, {
            header: s.default.Messages.START_STREAMING,
            confirmText: s.default.Messages.START_STREAMING,
            cancelText: s.default.Messages.CANCEL,
            onConfirm: e,
            confirmButtonColor: r.Button.Colors.BRAND,
            ...t,
            children: (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                children: s.default.Messages.BROADCASTING_START_STREAM_CONFIRM_BODY
            })
        }))
    }
}