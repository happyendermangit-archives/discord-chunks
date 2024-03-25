function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414055"),
        s = n("819855"),
        r = n("206625"),
        o = n("841098"),
        u = n("812204"),
        d = n("685665"),
        c = n("166960"),
        f = n("488705"),
        p = n("551305"),
        m = n("433328"),
        h = n("599110"),
        x = n("49111"),
        E = n("646718"),
        y = n("782340"),
        g = n("350583"),
        S = l.memo(function(e) {
            let {
                disabled: t,
                referralsRemaining: n,
                channel: S,
                isResending: C
            } = e, {
                enabled: _
            } = c.default.useExperiment({
                location: "ec41f5_1"
            }, {
                autoTrackExposure: !0
            }), T = _ ? y.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : C ? y.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : y.default.Messages.SHARE_NITRO_TOOLTIP, I = _ ? y.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [v, A] = l.useState(!1), [N, R] = l.useState(!1), O = (0, r.default)(null, () => R(!1)), {
                analyticsLocations: M
            } = (0, d.default)(u.default.REFERRAL_TRIALS_COMPOSER_BUTTON), k = S.isDM() && void 0 !== S.recipients ? S.recipients[0] : null, L = (0, o.default)();
            return t ? null : (0, i.jsxs)("div", {
                ref: O,
                className: g.buttonContainer,
                children: [(0, i.jsx)(f.default, {
                    shouldShowPopout: N,
                    referralsRemaining: n,
                    channel: S,
                    onClose: () => R(!1),
                    isResending: C
                }), (0, i.jsx)(a.Tooltip, {
                    text: T,
                    shouldShow: !N,
                    "aria-label": null != I ? I : T,
                    children: e => (0, i.jsx)("div", {
                        onMouseEnter: () => {
                            !N && !v && (A(!0), h.default.track(x.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                location_stack: M,
                                step: E.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                                other_user_id: Number(k)
                            }))
                        },
                        onMouseLeave: () => {
                            A(!1)
                        },
                        children: (0, i.jsx)(p.default, {
                            ...e,
                            innerClassName: g.button,
                            isActive: N,
                            "aria-label": null != I ? I : T,
                            "aria-haspopup": "dialog",
                            onClick: () => {
                                R(e => !e), h.default.track(x.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                    location_stack: M,
                                    step: E.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                                    other_user_id: Number(k)
                                })
                            },
                            children: (0, i.jsx)(m.default, {
                                referralsRemaining: n,
                                hovered: v,
                                isResending: C,
                                shouldShowBirthdayUX: _,
                                isLightTheme: (0, s.isThemeLight)(L)
                            })
                        })
                    })
                })]
            })
        })
}