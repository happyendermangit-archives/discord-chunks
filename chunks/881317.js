function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("990547"),
        i = s("442837"),
        r = s("481060"),
        u = s("893776"),
        o = s("232567"),
        d = s("82554"),
        c = s("726521"),
        f = s("185625"),
        E = s("314897"),
        I = s("828695"),
        _ = s("819570"),
        h = s("63063"),
        p = s("981631"),
        T = s("689938"),
        N = s("78019"),
        g = s("794711");
    i.default.initialize();
    let m = e => {
        let {
            title: t,
            menuType: a
        } = e, i = () => {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([s.e("99387"), s.e("93288")]).then(s.bind(s, "396410"));
                return t => (0, n.jsx)(e, {
                    ...t,
                    onSuccess: u,
                    headerText: T.default.Messages.ENTER_EMAIL,
                    confirmButtonText: T.default.Messages.NEXT,
                    confirmButtonColor: r.Button.Colors.BRAND_NEW,
                    impressionName: l.ImpressionNames.URF_ENTER_EMAIL
                })
            })
        }, u = e => {
            let t = async () => {
                await (0, f.sendUnauthenticatedReportPincode)(a, e)
            }, i = async t => await (0, f.verifyUnauthenticatedReport)(a, e, t), u = e => {
                let t = null == e ? void 0 : e.token;
                a === d.UnauthenticatedReportNames.MESSAGE ? (0, c.showUnauthenticatedReportModalForMessage)(t) : a === d.UnauthenticatedReportNames.USER && (0, c.showUnauthenticatedReportModalForUser)(t)
            };
            t(), (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await Promise.all([s.e("99387"), s.e("94566")]).then(s.bind(s, "965072"));
                return s => (0, n.jsx)(e, {
                    ...s,
                    onFormSubmit: i,
                    onResend: t,
                    onSuccess: u,
                    headerText: T.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
                    confirmButtonText: T.default.Messages.VERIFY,
                    confirmButtonColor: r.Button.Colors.BRAND_NEW,
                    impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                })
            })
        };
        return (0, n.jsx)("div", {
            className: N.buttonColumn,
            children: (0, n.jsx)(r.Button, {
                className: g.__invalid_reportButton,
                fullWidth: !0,
                color: r.Button.Colors.BRAND_NEW,
                hover: r.Button.Colors.BRAND_NEW,
                onClick: () => i(),
                children: t
            })
        })
    };
    t.default = () => {
        let [e, t] = a.useState(!0), [s, l] = a.useState(!1), c = (0, i.useStateFromStores)([E.default], () => E.default.isAuthenticated()), A = (0, i.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), S = () => {
            (0, f.getDsaExperiment)().then(() => {
                t(!1), l(!0)
            }).catch(() => {
                t(!1), l(!1)
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
        }, [A]), e || !A ? (0, n.jsx)(_.default, {
            children: (0, n.jsx)(r.Spinner, {})
        }) : s && (0, n.jsxs)(_.default, {
            children: [(0, n.jsx)(_.Title, {
                className: g.marginBottom8,
                children: T.default.Messages.URF_LANDING_PAGE_TITLE
            }), (0, n.jsx)(_.SubTitle, {
                className: g.marginBottom8,
                children: T.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                    supportURL: h.default.getArticleURL(p.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
                })
            }), (0, n.jsxs)("div", {
                className: N.container,
                children: [(0, n.jsx)(m, {
                    title: T.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.MESSAGE
                }), (0, n.jsx)(m, {
                    title: T.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.USER
                })]
            })]
        })
    }
}