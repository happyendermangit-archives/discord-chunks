function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("759843"),
        i = n("446674"),
        r = n("77078"),
        u = n("437822"),
        o = n("327037"),
        d = n("143618"),
        c = n("377114"),
        f = n("965153"),
        E = n("105029"),
        _ = n("271938"),
        I = n("760190"),
        h = n("124969"),
        p = n("701909"),
        T = n("49111"),
        m = n("782340"),
        N = n("43434"),
        g = n("890957");
    i.default.initialize();
    let A = e => {
        let {
            title: t,
            menuType: a
        } = e, i = () => {
            (0, r.openModalLazy)(async () => {
                let {
                    default: e
                } = await n.el("650672").then(n.bind(n, "650672"));
                return t => (0, s.jsx)(e, {
                    ...t,
                    onSuccess: u,
                    headerText: m.default.Messages.ENTER_EMAIL,
                    confirmButtonText: m.default.Messages.NEXT,
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
                } = await n.el("644512").then(n.bind(n, "644512"));
                return n => (0, s.jsx)(e, {
                    ...n,
                    onFormSubmit: i,
                    onResend: t,
                    onSuccess: u,
                    headerText: m.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFICATION_EMAIL_SENT,
                    confirmButtonText: m.default.Messages.VERIFY,
                    confirmButtonColor: r.Button.Colors.BRAND_NEW,
                    impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
                })
            })
        };
        return (0, s.jsx)("div", {
            className: N.buttonColumn,
            children: (0, s.jsx)(r.Button, {
                className: g.reportButton,
                fullWidth: !0,
                color: r.Button.Colors.BRAND_NEW,
                hover: r.Button.Colors.BRAND_NEW,
                onClick: () => i(),
                children: t
            })
        })
    };
    var S = () => {
        let e = (0, i.useStateFromStores)([_.default], () => _.default.isAuthenticated()),
            t = (0, i.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments),
            n = (0, E.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"),
            [l, c] = a.useState(!0);
        return a.useEffect(() => {
            e ? (c(!0), o.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => c(!1)).catch(() => c(!1))) : c(!1)
        }, [e]), a.useEffect(() => {
            let e = async () => {
                !t && !n && (await u.default.getLocationMetadata(), u.default.getExperiments())
            };
            e()
        }, [t, n]), l ? (0, s.jsx)(h.default, {
            children: (0, s.jsx)(r.Spinner, {})
        }) : n && (0, s.jsxs)(h.default, {
            children: [(0, s.jsx)(h.Title, {
                className: g.marginBottom8,
                children: m.default.Messages.URF_LANDING_PAGE_TITLE
            }), (0, s.jsx)(h.SubTitle, {
                className: g.marginBottom8,
                children: m.default.Messages.URF_LANDING_PAGE_SUBTITLE.format({
                    supportURL: p.default.getArticleURL(T.HelpdeskArticles.COPYRIGHT_AND_IP_POLICY)
                })
            }), (0, s.jsxs)("div", {
                className: N.container,
                children: [(0, s.jsx)(A, {
                    title: m.default.Messages.URF_LANDING_PAGE_REPORT_MESSAGE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.MESSAGE
                }), (0, s.jsx)(A, {
                    title: m.default.Messages.URF_LANDING_PAGE_REPORT_USER_PROFILE_BUTTON,
                    menuType: d.UnauthenticatedReportNames.USER
                })]
            })]
        })
    }
}