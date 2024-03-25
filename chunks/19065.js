function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("77078"),
        s = n("42887"),
        l = n("353927"),
        i = n("782340");

    function u(e) {
        s.default.supports(l.Features.VIDEO) ? (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("861054").then(n.bind(n, "861054"));
            return n => (0, a.jsx)(t, {
                ...n,
                header: i.default.Messages.CAMERA_UNAVAILABLE,
                body: i.default.Messages.CAMERA_NO_DEVICE,
                confirmText: i.default.Messages.OKAY,
                onConfirm: e
            })
        }) : (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("861054").then(n.bind(n, "861054"));
            return s => (0, a.jsx)(t, {
                ...s,
                header: i.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                body: i.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                confirmText: i.default.Messages.DOWNLOAD_APP,
                onConfirm: () => {
                    null == e || e(), (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("649486").then(n.bind(n, "649486"));
                        return t => (0, a.jsx)(e, {
                            source: "Video unsupported browser",
                            ...t
                        })
                    })
                }
            })
        })
    }
}