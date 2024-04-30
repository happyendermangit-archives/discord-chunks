function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("773603"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("913527"),
        l = n.n(o),
        u = n("235874"),
        d = n("481060"),
        _ = n("37234"),
        c = n("100527"),
        E = n("906732"),
        I = n("626135"),
        T = n("55935"),
        f = n("63063"),
        S = n("281494"),
        h = n("790368"),
        A = n("474936"),
        m = n("981631"),
        N = n("689938"),
        p = n("925573"),
        O = n("751599"),
        R = n("397293"),
        C = n("352175"),
        g = n("90351");
    let L = async (e, t, n) => {
        n(!0), await (0, S.createReferralTrial)(e).then(() => {
            t(), (0, _.popAllLayers)()
        }).finally(() => {
            n(!1)
        })
    }, v = e => {
        let {
            onClose: t,
            referralsRemaining: n,
            recipient: s,
            analyticsLocations: o,
            shouldShowBirthdayUX: l
        } = e, [u, _] = r.useState(!1), c = n - 1;
        return (0, i.jsxs)("div", {
            className: p.confirmationContainer,
            children: [(0, i.jsxs)("div", {
                className: a()({
                    [p.confirmationBody]: !l,
                    [p.confirmationBirthdayBody]: l
                }),
                children: [(0, i.jsx)(d.ModalCloseButton, {
                    onClick: t,
                    className: p.closeButton
                }), (0, i.jsx)("img", {
                    alt: "",
                    src: l ? R : C,
                    className: p.confirmationImage
                }), (0, i.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "interactive-active",
                    className: p.confirmationHeading,
                    children: N.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                }), (0, i.jsx)(d.Text, {
                    className: p.confirmationBodyCopy,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: c > 0 ? N.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                        count: c
                    }) : N.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                }), (0, i.jsx)("hr", {
                    className: p.confirmationBodySeparator
                })]
            }), (0, i.jsxs)("div", {
                className: p.confirmationButtonContainer,
                children: [(0, i.jsx)(d.Button, {
                    className: p.confirmationShareButton,
                    submitting: u,
                    onClick: () => {
                        L(s, t, _), I.default.track(m.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: o,
                            step: A.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
                            other_user_id: Number(s)
                        })
                    },
                    children: N.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                }), (0, i.jsx)("div", {
                    className: p.confirmationCancelButtonContainer,
                    children: (0, i.jsx)(d.Clickable, {
                        onClick: t,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: p.confirmationCancelCopy,
                            children: N.default.Messages.CANCEL
                        })
                    })
                })]
            })]
        })
    };

    function D(e) {
        let {
            referralsRemaining: t,
            channel: n,
            onClose: s,
            isResending: o
        } = e, [u, _] = r.useState(!1), [S, C] = r.useState(!1), D = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
            analyticsLocations: M
        } = (0, E.default)(c.default.REFERRAL_TRIALS_POPOUT), {
            enabled: y
        } = h.default.useExperiment({
            location: "200c24_1"
        }, {
            autoTrackExposure: !0
        }), P = new Date("2023-06-15T08:00:00-08:00");
        return null == D ? null : u ? (0, i.jsx)(v, {
            onClose: s,
            referralsRemaining: t,
            recipient: D,
            analyticsLocations: M,
            shouldShowBirthdayUX: y
        }) : (0, i.jsxs)("div", {
            className: p.generalContainer,
            children: [(0, i.jsxs)("div", {
                className: p.generalBodyContainer,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    src: y ? R : g,
                    className: p.generalBodyImage
                }), (0, i.jsxs)("div", {
                    className: p.innerContent,
                    children: [(0, i.jsx)(d.ModalCloseButton, {
                        onClick: s,
                        className: p.closeButton
                    }), (0, i.jsx)(d.Heading, {
                        className: p.generalHeading,
                        variant: "heading-xl/bold",
                        children: o ? N.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : N.default.Messages.SHARE_NITRO_MODAL_HEADER
                    }), (0, i.jsxs)(d.Text, {
                        className: p.generalBodyCopy,
                        variant: "text-md/normal",
                        children: [(0, i.jsx)(d.Anchor, {
                            className: a()(p.learnMore, {
                                [p.learnMoreResendUnderlinedText]: o
                            }),
                            href: f.default.getArticleURL(m.HelpdeskArticles.SHARE_NITRO_FAQ),
                            children: o ? N.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : N.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
                                count: t
                            })
                        }), o ? (0, i.jsx)("div", {
                            className: p.shareNitroResendCopySuffix,
                            children: N.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                        }) : (0, i.jsx)("div", {
                            children: N.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
                                date: (0, T.dateFormat)(l()(P), "LL")
                            })
                        })]
                    })]
                }), y && (0, i.jsx)("img", {
                    alt: "",
                    src: O,
                    className: p.birthdayBackgroundImage
                })]
            }), (0, i.jsx)("div", {
                className: p.generalButtonContainer,
                children: (0, i.jsx)(d.Button, {
                    className: p.generalShareButton,
                    submitting: S,
                    onClick: () => {
                        o ? L(D, s, C) : (_(!0), I.default.track(m.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: M,
                            step: A.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                            other_user_id: Number(D)
                        }))
                    },
                    children: o ? N.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : N.default.Messages.SHARE_NITRO_BUTTON_TEXT
                })
            })]
        })
    }

    function M(e) {
        let {
            shouldShowPopout: t,
            referralsRemaining: n,
            channel: r,
            onClose: s,
            isResending: a
        } = e;
        return t ? (0, i.jsx)("div", {
            onMouseDown: e => e.stopPropagation(),
            children: (0, i.jsx)(u.Popout, {
                shouldShow: !0,
                position: "top",
                align: "center",
                renderPopout: e => (0, i.jsx)(D, {
                    ...e,
                    referralsRemaining: n,
                    channel: r,
                    onClose: s,
                    isResending: a
                }),
                onRequestClose: () => void 0,
                closeOnScroll: !1,
                ignoreModalClicks: !0,
                children: () => (0, i.jsx)("div", {
                    className: p.__invalid_popoutTarget
                })
            })
        }) : null
    }
}