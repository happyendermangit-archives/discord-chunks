function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    }), n("222007");
    var s = n("37983"),
        a = n("884691"),
        l = n("446674"),
        r = n("77078"),
        i = n("437822"),
        u = n("327037"),
        o = n("457108"),
        d = n("965153"),
        c = n("105029"),
        f = n("970366"),
        E = n("271938"),
        _ = n("760190"),
        I = n("124969"),
        h = n("49111"),
        p = n("782340"),
        T = n("890957");
    l.default.initialize();
    var m = e => {
        let {
            location: t
        } = e, n = (0, l.useStateFromStores)([E.default], () => E.default.isAuthenticated()), m = (0, l.useStateFromStores)([_.default], () => _.default.hasLoadedExperiments), N = (0, c.useIsUnauthenticatedReportFormEnabled)("RSL - Landing Page"), [g, A] = a.useState(!1), [S, C] = a.useState(p.default.Messages.AUTHORIZING), [v, O] = a.useState(!0), R = e => {
            switch (e) {
                case h.AbortCodes.INVALID_FORM_BODY:
                case h.AbortCodes.DSA_RSL_REPORT_NOT_FOUND:
                    C(p.default.Messages.REPORT_SECOND_LOOK_NOT_FOUND_ERROR);
                    break;
                case h.AbortCodes.DSA_RSL_ALREADY_REQUESTED:
                    C(p.default.Messages.REPORT_SECOND_LOOK_ALREADY_REQUESTED_ERROR);
                    break;
                case h.AbortCodes.DSA_RSL_LIMITED_TIME:
                    C(p.default.Messages.REPORT_SECOND_LOOK_LIMITED_TIME_ERROR);
                    break;
                case h.AbortCodes.DSA_RSL_REPORT_INELIGIBLE:
                    C(p.default.Messages.REPORT_SECOND_LOOK_INELIGIBLE_ERROR);
                    break;
                default:
                    C(p.default.Messages.REPORT_SECOND_LOOK_UNKNOWN_ERROR)
            }
        };
        return a.useEffect(() => {
            n ? (O(!0), u.fetchCurrentUser({
                withAnalyticsToken: !0
            }).then(() => O(!1)).catch(() => O(!1))) : O(!1)
        }, [n]), a.useEffect(() => {
            !m && !N && i.default.getExperiments()
        }, [m, N]), a.useEffect(() => {
            let e = async e => {
                var t, n;
                try {
                    let n = null != e ? await (0, d.submitReportSecondLook)(e) : void 0;
                    null != n ? C(p.default.Messages.REPORT_SECOND_LOOK_SUCCESS_TITLE) : R(null === (t = n.body) || void 0 === t ? void 0 : t.code)
                } catch (e) {
                    R(null === (n = e.body) || void 0 === n ? void 0 : n.code)
                } finally {
                    A(!1)
                }
            };
            A(!0);
            let n = (0, o.default)(t);
            e(n), (0, f.trackAppUIViewed)("report_second_look")
        }, [t]), N && !v && (0, s.jsxs)(I.default, {
            children: [(0, s.jsx)(I.Title, {
                className: T.marginBottom8,
                children: S
            }), g && (0, s.jsx)(r.Spinner, {})]
        })
    }
}