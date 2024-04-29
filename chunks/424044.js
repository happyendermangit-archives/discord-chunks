function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var s = n("735250"),
        a = n("470079"),
        l = n("442837"),
        i = n("481060"),
        r = n("893776"),
        u = n("232567"),
        o = n("129293"),
        d = n("185625"),
        c = n("551549"),
        f = n("108427"),
        E = n("314897"),
        _ = n("828695"),
        I = n("819570"),
        p = n("981631"),
        h = n("689938"),
        T = n("611273");
    l.default.initialize();
    t.default = e => {
        let {
            location: t
        } = e, n = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), N = (0, l.useStateFromStores)([_.default], () => _.default.hasLoadedExperiments), g = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [m, A] = a.useState(!1), [S, v] = a.useState(h.default.Messages.AUTHORIZING), [C, O] = a.useState(!0), R = e => {
            switch (e) {
                case p.AbortCodes.INVALID_FORM_BODY:
                case p.AbortCodes.DSA_RSL_REPORT_NOT_FOUND:
                    v(h.default.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                    break;
                case p.AbortCodes.DSA_RSL_ALREADY_REQUESTED:
                    v(h.default.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                    break;
                case p.AbortCodes.DSA_RSL_LIMITED_TIME:
                    v(h.default.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                    break;
                case p.AbortCodes.DSA_RSL_REPORT_INELIGIBLE:
                    v(h.default.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                    break;
                default:
                    v(h.default.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
            }
        };
        return a.useEffect(() => {
            n ? (O(!0), u.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => O(!1)).catch(() => O(!1))) : O(!1)
        }, [n]), a.useEffect(() => {
            !N && !g && r.default.getExperiments()
        }, [N, g]), a.useEffect(() => {
            let e = async e => {
                var t, n;
                try {
                    let n = null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
                    null != n ? v(h.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : R(null === (t = n.body) || void 0 === t ? void 0 : t.code)
                } catch (e) {
                    R(null === (n = e.body) || void 0 === n ? void 0 : n.code)
                } finally {
                    A(!1)
                }
            };
            A(!0), e((0, o.default)(t)), (0, f.trackAppUIViewed)("report_second_look")
        }, [t]), g && !C && (0, s.jsxs)(I.default, {
            children: [(0, s.jsx)(I.Title, {
                className: T.marginBottom8,
                children: S
            }), m && (0, s.jsx)(i.Spinner, {})]
        })
    }
}