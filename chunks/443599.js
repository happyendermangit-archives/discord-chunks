function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModal: function() {
            return o
        }
    }), n("653041");
    var i = n("735250");
    n("470079");
    var r = n("481060"),
        a = n("185625"),
        s = n("186023");
    async function o(e, t, n, o) {
        let l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
            u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
            d = arguments.length > 6 ? arguments[6] : void 0,
            _ = (0, r.getInteractingModalContext)();
        try {
            let c, E = u ? await (0, a.getReportMenu)(e, t) : await (0, a.getUnauthenticatedReportMenu)(e, t),
                I = [];
            let T = e => {
                    I.push(e)
                },
                f = e => {
                    c = e, null == n || n()
                };
            (0, r.openModal)(t => (0, i.jsx)(s.default, {
                menu: E,
                reportType: e,
                modalProps: t,
                onNavigate: T,
                onSubmit: f,
                isAuthenticated: u,
                emailToken: d
            }), {
                onCloseCallback: () => {
                    (0, a.trackCloseReportModalAnalytics)(e, I, c), null == o || o(), l && (0, a.showInAppReportsFeedbackModal)(e, null != c ? c : null)
                }
            }, _)
        } catch {}
    }
}