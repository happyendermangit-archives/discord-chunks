function(e, t, s) {
    "use strict";
    s.r(t), s("47120");
    var n = s("735250"),
        a = s("470079"),
        l = s("442837"),
        i = s("481060"),
        r = s("893776"),
        u = s("232567"),
        o = s("129293"),
        d = s("185625"),
        c = s("551549"),
        f = s("108427"),
        E = s("314897"),
        I = s("828695"),
        _ = s("819570"),
        h = s("981631"),
        p = s("689938"),
        T = s("794711");
    l.default.initialize();
    t.default = e => {
        let {
            location: t
        } = e, s = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), N = (0, l.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), g = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [m, A] = a.useState(!1), [S, v] = a.useState(p.default.Messages.AUTHORIZING), [C, O] = a.useState(!0), R = e => {
            switch (e) {
                case h.AbortCodes.INVALID_FORM_BODY:
                case h.AbortCodes.DSA_RSL_REPORT_NOT_FOUND:
                    v(p.default.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                    break;
                case h.AbortCodes.DSA_RSL_ALREADY_REQUESTED:
                    v(p.default.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                    break;
                case h.AbortCodes.DSA_RSL_LIMITED_TIME:
                    v(p.default.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                    break;
                case h.AbortCodes.DSA_RSL_REPORT_INELIGIBLE:
                    v(p.default.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                    break;
                default:
                    v(p.default.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
            }
        };
        return a.useEffect(() => {
            s ? (O(!0), u.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => O(!1)).catch(() => O(!1))) : O(!1)
        }, [s]), a.useEffect(() => {
            !N && !g && r.default.getExperiments()
        }, [N, g]), a.useEffect(() => {
            let e = async e => {
                var t, s;
                try {
                    let s = null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
                    null != s ? v(p.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : R(null === (t = s.body) || void 0 === t ? void 0 : t.code)
                } catch (e) {
                    R(null === (s = e.body) || void 0 === s ? void 0 : s.code)
                } finally {
                    A(!1)
                }
            };
            A(!0), e((0, o.default)(t)), (0, f.trackAppUIViewed)("report_second_look")
        }, [t]), g && !C && (0, n.jsxs)(_.default, {
            children: [(0, n.jsx)(_.Title, {
                className: T.marginBottom8,
                children: S
            }), m && (0, n.jsx)(i.Spinner, {})]
        })
    }
}