function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("981729"),
        s = n("780384"),
        o = n("351773"),
        l = n("410030"),
        u = n("100527"),
        d = n("906732"),
        _ = n("790368"),
        c = n("704440"),
        E = n("147915"),
        I = n("632583"),
        T = n("626135"),
        f = n("981631"),
        S = n("474936"),
        h = n("689938"),
        A = n("414367");
    t.default = r.memo(function(e) {
        let {
            disabled: t,
            referralsRemaining: n,
            channel: m,
            isResending: N
        } = e, {
            enabled: p
        } = _.default.useExperiment({
            location: "ec41f5_1"
        }, {
            autoTrackExposure: !0
        }), O = p ? h.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : N ? h.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : h.default.Messages.SHARE_NITRO_TOOLTIP, R = p ? h.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [C, g] = r.useState(!1), [L, v] = r.useState(!1), D = (0, o.default)(null, () => v(!1)), {
            analyticsLocations: M
        } = (0, d.default)(u.default.REFERRAL_TRIALS_COMPOSER_BUTTON), y = m.isDM() && void 0 !== m.recipients ? m.recipients[0] : null, P = (0, l.default)();
        return t ? null : (0, i.jsxs)("div", {
            ref: D,
            className: A.buttonContainer,
            children: [(0, i.jsx)(c.default, {
                shouldShowPopout: L,
                referralsRemaining: n,
                channel: m,
                onClose: () => v(!1),
                isResending: N
            }), (0, i.jsx)(a.Tooltip, {
                text: O,
                shouldShow: !L,
                "aria-label": null != R ? R : O,
                children: e => (0, i.jsx)("div", {
                    onMouseEnter: () => {
                        !L && !C && (g(!0), T.default.track(f.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: M,
                            step: S.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                            other_user_id: Number(y)
                        }))
                    },
                    onMouseLeave: () => {
                        g(!1)
                    },
                    children: (0, i.jsx)(E.default, {
                        ...e,
                        innerClassName: A.button,
                        isActive: L,
                        "aria-label": null != R ? R : O,
                        "aria-haspopup": "dialog",
                        onClick: () => {
                            v(e => !e), T.default.track(f.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                location_stack: M,
                                step: S.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                                other_user_id: Number(y)
                            })
                        },
                        children: (0, i.jsx)(I.default, {
                            referralsRemaining: n,
                            hovered: C,
                            isResending: N,
                            shouldShowBirthdayUX: p,
                            isLightTheme: (0, s.isThemeLight)(P)
                        })
                    })
                })
            })]
        })
    })
}