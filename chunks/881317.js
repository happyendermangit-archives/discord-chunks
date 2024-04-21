function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        l = n("990547"),
        i = n("442837"),
        r = n("481060"),
        u = n("893776"),
        o = n("232567"),
        d = n("82554"),
        c = n("726521"),
        f = n("185625"),
        E = n("314897"),
        _ = n("828695"),
        I = n("819570"),
        p = n("63063"),
        h = n("981631"),
        T = n("689938"),
        N = n("78019"),
        g = n("794711");
    i.default.initialize();
    let m = e => {
        let {
            title: t,
            menuType: a
        } = e, i = () => {
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
                } = await Promise.all([n.e("99387"), n.e("94566")]).then(n.bind(n, "965072"));
                return n => (0, s.jsx)(e, {
                    ...n,
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
        return (0, s.jsx)("div", {
            className: N.buttonColumn,
            children: (0, s.jsx)(r.Button, {
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
        let [e, t] = a.useState(!0), [n, l] = a.useState(!1), c = (0, i.useStateFromStores)([E.default], () => E.default.isAuthenticated()), A = (0, i.useStateFromStores)([_.default], () => _.default.hasLoadedExperiments), S = () => {
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
        }, [A]), e || !A ? (0, s.jsx)(I.default, {
            children: (0, s.jsx)(r.Spinner, {})
        }) : n && (0, s.jsxs)(I.default, {
            children: [(0, s.jsx)(I.Title, {
                className: g.marginBottom8,
                children: T.default.Messages.URF_LANDING_PAGE_TITLE
            }), (0, s.jsx)(I.SubTitle, {
                className: g.marginBottom8,
                children: T.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                    supportURL: p.default.getArticleURL(h.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
                })
            }), (0, s.jsxs)("div", {
                className: N.container,
                children: [(0, s.jsx)(m, {
                    title: T.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.MESSAGE
                }), (0, s.jsx)(m, {
                    title: T.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.USER
                })]
            })]
        })
    }
}