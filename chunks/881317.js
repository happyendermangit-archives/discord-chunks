function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("990547"),
        l = n("442837"),
        r = n("481060"),
        u = n("893776"),
        o = n("232567"),
        d = n("82554"),
        c = n("726521"),
        f = n("185625"),
        E = n("314897"),
        I = n("828695"),
        h = n("819570"),
        _ = n("63063"),
        p = n("981631"),
        T = n("689938"),
        m = n("78019"),
        N = n("794711");
    l.default.initialize();
    let g = e => {
        let {
            title: t,
            menuType: a
        } = e, l = () => {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("93288")]).then(n.bind(n, "396410"));
                return t => (0, s.jsx)(e, {
                    ...t,
                    onSuccess: u,
                    headerText: T.default.Messages.ENTER_EMAIL,
                    confirmButtonText: T.default.Messages.NEXT,
                    confirmButtonColor: r.Button.Colors.BRAND_NEW,
                    impressionName: i.ImpressionNames.URF_ENTER_EMAIL
                })
            })
        }, u = e => {
            let t = async () => {
                await (0, f.sendUnauthenticatedReportPincode)(a, e)
            }, l = async t => await (0, f.verifyUnauthenticatedReport)(a, e, t), u = e => {
                let t = null == e ? void 0 : e.token;
                a === d.UnauthenticatedReportNames.MESSAGE ? (0, c.showUnauthenticatedReportModalForMessage)(t) : a === d.UnauthenticatedReportNames.USER && (0, c.showUnauthenticatedReportModalForUser)(t)
            };
            t(), (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([n.e("99387"), n.e("94566")]).then(n.bind(n, "965072"));
                return n => (0, s.jsx)(e, {
                    ...n,
                    onFormSubmit: l,
                    onResend: t,
                    onSuccess: u,
                    headerText: T.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
                    confirmButtonText: T.default.Messages.VERIFY,
                    confirmButtonColor: r.Button.Colors.BRAND_NEW,
                    impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                })
            })
        };
        return (0, s.jsx)("div", {
            className: m.buttonColumn,
            children: (0, s.jsx)(r.Button, {
                className: N.__invalid_reportButton,
                fullWidth: !0,
                color: r.Button.Colors.BRAND_NEW,
                hover: r.Button.Colors.BRAND_NEW,
                onClick: () => l(),
                children: t
            })
        })
    };
    t.default = () => {
        let [e, t] = a.useState(!0), [n, i] = a.useState(!1), c = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), A = (0, l.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), S = () => {
            (0, f.getDsaExperiment)().then(() => {
                t(!1), i(!0)
            }).catch(() => {
                t(!1), i(!1)
            })
        };
        return a.useEffect(() => {
            c ? (t(!0), o.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => S()).catch(() => t(!1))) : S()
        }, [c]), a.useEffect(() => {
            (async () => {
                !A && (await u.default.getLocationMetadata(), u.default.getExperiments())
            })()
        }, [A]), e || !A ? (0, s.jsx)(h.default, {
            children: (0, s.jsx)(r.Spinner, {})
        }) : n && (0, s.jsxs)(h.default, {
            children: [(0, s.jsx)(h.Title, {
                className: N.marginBottom8,
                children: T.default.Messages.URF_LANDING_PAGE_TITLE
            }), (0, s.jsx)(h.SubTitle, {
                className: N.marginBottom8,
                children: T.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                    supportURL: _.default.getArticleURL(p.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
                })
            }), (0, s.jsxs)("div", {
                className: m.container,
                children: [(0, s.jsx)(g, {
                    title: T.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.MESSAGE
                }), (0, s.jsx)(g, {
                    title: T.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.USER
                })]
            })]
        })
    }
}