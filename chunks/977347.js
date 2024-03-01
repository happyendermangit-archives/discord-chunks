function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var a = n("37983");
    n("884691");
    var r = n("77078"),
        s = n("782340");

    function l() {
        function e() {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.el("649486").then(n.bind(n, "649486"));
                return t => (0, a.jsx)(e, {
                    source: "Screenshare Unavailable",
                    ...t
                })
            })
        }(0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await n.el("861054").then(n.bind(n, "861054"));
            return n => (0, a.jsx)(t, {
                ...n,
                header: s.default.Messages.SCREENSHARE_UNAVAILABLE,
                body: s.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                confirmText: s.default.Messages.DOWNLOAD_APP,
                onConfirm: e
            })
        })
    }
}