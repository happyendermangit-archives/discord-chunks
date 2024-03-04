function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414055"),
        s = n("819855"),
        r = n("206625"),
        o = n("841098"),
        u = n("812204"),
        d = n("685665"),
        c = n("166960"),
        f = n("488705"),
        m = n("551305"),
        p = n("433328"),
        h = n("599110"),
        E = n("49111"),
        g = n("646718"),
        C = n("782340"),
        S = n("350583"),
        T = i.memo(function(e) {
            let {
                disabled: t,
                referralsRemaining: n,
                channel: T,
                isResending: v
            } = e, {
                enabled: I
            } = c.default.useExperiment({
                location: "ec41f5_1"
            }, {
                autoTrackExposure: !0
            }), _ = I ? C.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : v ? C.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : C.default.Messages.SHARE_NITRO_TOOLTIP, N = I ? C.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [A, x] = i.useState(!1), [y, O] = i.useState(!1), R = (0, r.default)(null, () => O(!1)), {
                analyticsLocations: M
            } = (0, d.default)(u.default.REFERRAL_TRIALS_COMPOSER_BUTTON), L = T.isDM() && void 0 !== T.recipients ? T.recipients[0] : null, P = (0, o.default)();
            return t ? null : (0, l.jsxs)("div", {
                ref: R,
                className: S.buttonContainer,
                children: [(0, l.jsx)(f.default, {
                    shouldShowPopout: y,
                    referralsRemaining: n,
                    channel: T,
                    onClose: () => O(!1),
                    isResending: v
                }), (0, l.jsx)(a.Tooltip, {
                    text: _,
                    shouldShow: !y,
                    "aria-label": null != N ? N : _,
                    children: e => (0, l.jsx)("div", {
                        onMouseEnter: () => {
                            !y && !A && (x(!0), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                location_stack: M,
                                step: g.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                                other_user_id: Number(L)
                            }))
                        },
                        onMouseLeave: () => {
                            x(!1)
                        },
                        children: (0, l.jsx)(m.default, {
                            ...e,
                            innerClassName: S.button,
                            isActive: y,
                            "aria-label": null != N ? N : _,
                            "aria-haspopup": "dialog",
                            onClick: () => {
                                O(e => !e), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                    location_stack: M,
                                    step: g.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                                    other_user_id: Number(L)
                                })
                            },
                            children: (0, l.jsx)(p.default, {
                                referralsRemaining: n,
                                hovered: A,
                                isResending: v,
                                shouldShowBirthdayUX: I,
                                isLightTheme: (0, s.isThemeLight)(P)
                            })
                        })
                    })
                })]
            })
        })
}