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
        E = s("551549"),
        I = s("314897"),
        _ = s("828695"),
        h = s("819570"),
        p = s("63063"),
        T = s("981631"),
        N = s("689938"),
        g = s("78019"),
        m = s("794711");
    i.default.initialize();
    let A = e => {
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
                    headerText: N.default.Messages.ENTER_EMAIL,
                    confirmButtonText: N.default.Messages.NEXT,
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
                    headerText: N.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
                    confirmButtonText: N.default.Messages.VERIFY,
                    confirmButtonColor: r.Button.Colors.BRAND_NEW,
                    impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                })
            })
        };
        return (0, n.jsx)("div", {
            className: g.buttonColumn,
            children: (0, n.jsx)(r.Button, {
                className: m.__invalid_reportButton,
                fullWidth: !0,
                color: r.Button.Colors.BRAND_NEW,
                hover: r.Button.Colors.BRAND_NEW,
                onClick: () => i(),
                children: t
            })
        })
    };
    t.default = () => {
        let e = (0, i.useStateFromStores)([I.default], () => I.default.isAuthenticated()),
            t = (0, i.useStateFromStores)([_.default], () => _.default.hasLoadedExperiments),
            s = (0, E.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"),
            [l, c] = a.useState(!0);
        return a.useEffect(() => {
            e ? (c(!0), o.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => c(!1)).catch(() => c(!1))) : c(!1)
        }, [e]), a.useEffect(() => {
            (async () => {
                !t && !s && (await u.default.getLocationMetadata(), u.default.getExperiments())
            })()
        }, [t, s]), l ? (0, n.jsx)(h.default, {
            children: (0, n.jsx)(r.Spinner, {})
        }) : s && (0, n.jsxs)(h.default, {
            children: [(0, n.jsx)(h.Title, {
                className: m.marginBottom8,
                children: N.default.Messages.URF_LANDING_PAGE_TITLE
            }), (0, n.jsx)(h.SubTitle, {
                className: m.marginBottom8,
                children: N.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                    supportURL: p.default.getArticleURL(T.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
                })
            }), (0, n.jsxs)("div", {
                className: g.container,
                children: [(0, n.jsx)(A, {
                    title: N.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.MESSAGE
                }), (0, n.jsx)(A, {
                    title: N.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.USER
                })]
            })]
        })
    }
}