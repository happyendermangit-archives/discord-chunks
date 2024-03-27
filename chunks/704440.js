function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("773603"), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
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
        O = n("74097"),
        p = n("751599"),
        R = n("397293"),
        C = n("352175"),
        g = n("90351");
    let L = async (e, t, n) => {
        n(!0), await (0, S.createReferralTrial)(e).then(() => {
            t(), (0, _.popAllLayers)()
        }).finally(() => {
            n(!1)
        })
    }, D = e => {
        let {
            onClose: t,
            referralsRemaining: n,
            recipient: s,
            analyticsLocations: o,
            shouldShowBirthdayUX: l
        } = e, [u, _] = r.useState(!1), c = n - 1;
        return (0, i.jsxs)("div", {
            className: O.confirmationContainer,
            children: [(0, i.jsxs)("div", {
                className: a()({
                    [O.confirmationBody]: !l,
                    [O.confirmationBirthdayBody]: l
                }),
                children: [(0, i.jsx)(d.ModalCloseButton, {
                    onClick: t,
                    className: O.closeButton
                }), (0, i.jsx)("img", {
                    alt: "",
                    src: l ? R : C,
                    className: O.confirmationImage
                }), (0, i.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "interactive-active",
                    className: O.confirmationHeading,
                    children: N.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                }), (0, i.jsx)(d.Text, {
                    className: O.confirmationBodyCopy,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: c > 0 ? N.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                        count: c
                    }) : N.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                }), (0, i.jsx)("hr", {
                    className: O.confirmationBodySeparator
                })]
            }), (0, i.jsxs)("div", {
                className: O.confirmationButtonContainer,
                children: [(0, i.jsx)(d.Button, {
                    className: O.confirmationShareButton,
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
                    className: O.confirmationCancelButtonContainer,
                    children: (0, i.jsx)(d.Clickable, {
                        onClick: t,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: O.confirmationCancelCopy,
                            children: N.default.Messages.CANCEL
                        })
                    })
                })]
            })]
        })
    };

    function v(e) {
        let {
            referralsRemaining: t,
            channel: n,
            onClose: s,
            isResending: o
        } = e, [u, _] = r.useState(!1), [S, C] = r.useState(!1), v = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
            analyticsLocations: M
        } = (0, E.default)(c.default.REFERRAL_TRIALS_POPOUT), {
            enabled: y
        } = h.default.useExperiment({
            location: "200c24_1"
        }, {
            autoTrackExposure: !0
        }), P = new Date("2023-06-15T08:00:00-08:00");
        return null == v ? null : u ? (0, i.jsx)(D, {
            onClose: s,
            referralsRemaining: t,
            recipient: v,
            analyticsLocations: M,
            shouldShowBirthdayUX: y
        }) : (0, i.jsxs)("div", {
            className: O.generalContainer,
            children: [(0, i.jsxs)("div", {
                className: O.generalBodyContainer,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    src: y ? R : g,
                    className: O.generalBodyImage
                }), (0, i.jsxs)("div", {
                    className: O.innerContent,
                    children: [(0, i.jsx)(d.ModalCloseButton, {
                        onClick: s,
                        className: O.closeButton
                    }), (0, i.jsx)(d.Heading, {
                        className: O.generalHeading,
                        variant: "heading-xl/bold",
                        children: o ? N.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : N.default.Messages.SHARE_NITRO_MODAL_HEADER
                    }), (0, i.jsxs)(d.Text, {
                        className: O.generalBodyCopy,
                        variant: "text-md/normal",
                        children: [(0, i.jsx)(d.Anchor, {
                            className: a()(O.learnMore, {
                                [O.learnMoreResendUnderlinedText]: o
                            }),
                            href: f.default.getArticleURL(m.HelpdeskArticles.SHARE_NITRO_FAQ),
                            children: o ? N.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : N.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
                                count: t
                            })
                        }), o ? (0, i.jsx)("div", {
                            className: O.shareNitroResendCopySuffix,
                            children: N.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                        }) : (0, i.jsx)("div", {
                            children: N.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
                                date: (0, T.dateFormat)(l()(P), "LL")
                            })
                        })]
                    })]
                }), y && (0, i.jsx)("img", {
                    alt: "",
                    src: p,
                    className: O.birthdayBackgroundImage
                })]
            }), (0, i.jsx)("div", {
                className: O.generalButtonContainer,
                children: (0, i.jsx)(d.Button, {
                    className: O.generalShareButton,
                    submitting: S,
                    onClick: () => {
                        o ? L(v, s, C) : (_(!0), I.default.track(m.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: M,
                            step: A.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                            other_user_id: Number(v)
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
                renderPopout: e => (0, i.jsx)(v, {
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
                    className: O.popoutTarget
                })
            })
        }) : null
    }
}