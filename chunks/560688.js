function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("131951"),
        s = n("65154"),
        o = n("689938");

    function l(e) {
        a.default.supports(s.Features.VIDEO) ? (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("67753")]).then(n.bind(n, "873809"));
            return n => (0, i.jsx)(t, {
                ...n,
                header: o.default.Messages.CAMERA_UNAVAILABLE,
                body: o.default.Messages.CAMERA_NO_DEVICE,
                confirmText: o.default.Messages.OKAY,
                onConfirm: e
            })
        }) : (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("67753")]).then(n.bind(n, "873809"));
            return a => (0, i.jsx)(t, {
                ...a,
                header: o.default.Messages.VIDEO_UNSUPPORTED_BROWSER_TITLE,
                body: o.default.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                confirmText: o.default.Messages.DOWNLOAD_APP,
                onConfirm: () => {
                    null == e || e(), (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await Promise.all([n.e("99387"), n.e("61418")]).then(n.bind(n, "431583"));
                        return t => (0, i.jsx)(e, {
                            source: "Video unsupported browser",
                            ...t
                        })
                    })
                }
            })
        })
    }
}