function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        i = n("77078"),
        r = n("437822"),
        u = n("327037"),
        o = n("457108"),
        d = n("965153"),
        c = n("105029"),
        f = n("970366"),
        E = n("271938"),
        I = n("760190"),
        _ = n("124969"),
        h = n("49111"),
        p = n("782340"),
        T = n("890957");
    l.default.initialize();
    var N = e => {
        let {
            location: t
        } = e, n = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), N = (0, l.useStateFromStores)([I.default], () => I.default.hasLoadedExperiments), m = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [g, A] = a.useState(!1), [S, v] = a.useState(p.default.Messages.AUTHORIZING), [O, C] = a.useState(!0), R = e => {
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
            n ? (C(!0), u.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => C(!1)).catch(() => C(!1))) : C(!1)
        }, [n]), a.useEffect(() => {
            !N && !m && r.default.getExperiments()
        }, [N, m]), a.useEffect(() => {
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
            A(!0);
            let n = (0, o.default)(t);
            e(n), (0, f.trackAppUIViewed)("report_second_look")
        }, [t]), m && !O && (0, s.jsxs)(_.default, {
            children: [(0, s.jsx)(_.Title, {
                className: T.marginBottom8,
                children: S
            }), g && (0, s.jsx)(i.Spinner, {})]
        })
    }
}