function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        i = n("442837"),
        l = n("481060"),
        r = n("893776"),
        u = n("232567"),
        o = n("129293"),
        d = n("185625"),
        c = n("551549"),
        f = n("108427"),
        E = n("314897"),
        I = n("828695"),
        h = n("819570"),
        _ = n("981631"),
        p = n("689938"),
        T = n("794711");
    i.default.initialize();
    t.default = e => {
        let {
            location: t
        } = e, n = (0, i.useStateFromStores)([E.default], () => E.default.isAuthenticated()), m = (0, i.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), N = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [g, A] = a.useState(!1), [S, v] = a.useState(p.default.Messages.AUTHORIZING), [O, C] = a.useState(!0), R = e => {
            switch (e) {
                case _.AbortCodes.INVALID_FORM_BODY:
                case _.AbortCodes.DSA_RSL_REPORT_NOT_FOUND:
                    v(p.default.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                    break;
                case _.AbortCodes.DSA_RSL_ALREADY_REQUESTED:
                    v(p.default.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                    break;
                case _.AbortCodes.DSA_RSL_LIMITED_TIME:
                    v(p.default.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                    break;
                case _.AbortCodes.DSA_RSL_REPORT_INELIGIBLE:
                    v(p.default.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                    break;
                default:
                    v(p.default.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
            }
        };
        return a.useEffect(() => {
            n ? (C(!0), u.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => C(!1)).catch(() => C(!1))) : C(!1)
        }, [n]), a.useEffect(() => {
            !m && !N && r.default.getExperiments()
        }, [m, N]), a.useEffect(() => {
            let e = async e => {
                var t, n;
                try {
                    let n = null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
                    null != n ? v(p.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : R(null === (t = n.body) || void 0 === t ? void 0 : t.code)
                } catch (e) {
                    R(null === (n = e.body) || void 0 === n ? void 0 : n.code)
                } finally {
                    A(!1)
                }
            };
            A(!0), e((0, o.default)(t)), (0, f.trackAppUIViewed)("report_second_look")
        }, [t]), N && !O && (0, s.jsxs)(h.default, {
            children: [(0, s.jsx)(h.Title, {
                className: T.marginBottom8,
                children: S
            }), g && (0, s.jsx)(l.Spinner, {})]
        })
    }
}