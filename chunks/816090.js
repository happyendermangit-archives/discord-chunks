function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showReportModal: function() {
            return i
        }
    }), n("424973");
    var a = n("37983");
    n("884691");
    var l = n("77078"),
        r = n("965153"),
        s = n("399515");
    async function i(e, t, n, i) {
        let d = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
            u = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5],
            o = arguments.length > 6 ? arguments[6] : void 0,
            c = (0, l.getInteractingModalContext)();
        try {
            let m, f = u ? await (0, r.getReportMenu)(e, t) : await (0, r.getUnauthenticatedReportMenu)(e, t),
                _ = [];
            let E = e => {
                    _.push(e)
                },
                h = e => {
                    m = e, null == n || n()
                };
            (0, l.openModal)(t => (0, a.jsx)(s.default, {
                menu: f,
                reportType: e,
                modalProps: t,
                onNavigate: E,
                onSubmit: h,
                isAuthenticated: u,
                emailToken: o
            }), {
                onCloseCallback: () => {
                    (0, r.trackCloseReportModalAnalytics)(e, _, m), null == i || i(), d && (0, r.showInAppReportsFeedbackModal)(e, null != m ? m : null)
                }
            }, c)
        } catch {}
    }
}