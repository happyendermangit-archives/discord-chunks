function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("506083"), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("866227"),
        o = n.n(r),
        u = n("442761"),
        d = n("77078"),
        c = n("54239"),
        f = n("812204"),
        m = n("685665"),
        p = n("599110"),
        h = n("888400"),
        E = n("701909"),
        g = n("179935"),
        S = n("166960"),
        C = n("646718"),
        T = n("49111"),
        v = n("782340"),
        I = n("486433"),
        _ = n("278410"),
        N = n("410957"),
        A = n("730708"),
        x = n("754702");
    let y = async (e, t, n) => {
        n(!0), await (0, g.createReferralTrial)(e).then(() => {
            t(), (0, c.popAllLayers)()
        }).finally(() => {
            n(!1)
        })
    }, O = e => {
        let {
            onClose: t,
            referralsRemaining: n,
            recipient: a,
            analyticsLocations: r,
            shouldShowBirthdayUX: o
        } = e, [u, c] = i.useState(!1), f = n - 1;
        return (0, l.jsxs)("div", {
            className: I.confirmationContainer,
            children: [(0, l.jsxs)("div", {
                className: s({
                    [I.confirmationBody]: !o,
                    [I.confirmationBirthdayBody]: o
                }),
                children: [(0, l.jsx)(d.ModalCloseButton, {
                    onClick: t,
                    className: I.closeButton
                }), (0, l.jsx)("img", {
                    alt: "",
                    src: o ? N : A,
                    className: I.confirmationImage
                }), (0, l.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "interactive-active",
                    className: I.confirmationHeading,
                    children: v.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                }), (0, l.jsx)(d.Text, {
                    className: I.confirmationBodyCopy,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: f > 0 ? v.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                        count: f
                    }) : v.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                }), (0, l.jsx)("hr", {
                    className: I.confirmationBodySeparator
                })]
            }), (0, l.jsxs)("div", {
                className: I.confirmationButtonContainer,
                children: [(0, l.jsx)(d.Button, {
                    className: I.confirmationShareButton,
                    submitting: u,
                    onClick: () => {
                        y(a, t, c), p.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: r,
                            step: C.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
                            other_user_id: Number(a)
                        })
                    },
                    children: v.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                }), (0, l.jsx)("div", {
                    className: I.confirmationCancelButtonContainer,
                    children: (0, l.jsx)(d.Clickable, {
                        onClick: t,
                        children: (0, l.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: I.confirmationCancelCopy,
                            children: v.default.Messages.CANCEL
                        })
                    })
                })]
            })]
        })
    };

    function R(e) {
        let {
            referralsRemaining: t,
            channel: n,
            onClose: a,
            isResending: r
        } = e, [u, c] = i.useState(!1), [g, A] = i.useState(!1), R = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
            analyticsLocations: M
        } = (0, m.default)(f.default.REFERRAL_TRIALS_POPOUT), {
            enabled: L
        } = S.default.useExperiment({
            location: "200c24_1"
        }, {
            autoTrackExposure: !0
        }), P = new Date("2023-06-15T08:00:00-08:00");
        return null == R ? null : u ? (0, l.jsx)(O, {
            onClose: a,
            referralsRemaining: t,
            recipient: R,
            analyticsLocations: M,
            shouldShowBirthdayUX: L
        }) : (0, l.jsxs)("div", {
            className: I.generalContainer,
            children: [(0, l.jsxs)("div", {
                className: I.generalBodyContainer,
                children: [(0, l.jsx)("img", {
                    alt: "",
                    src: L ? N : x,
                    className: I.generalBodyImage
                }), (0, l.jsxs)("div", {
                    className: I.innerContent,
                    children: [(0, l.jsx)(d.ModalCloseButton, {
                        onClick: a,
                        className: I.closeButton
                    }), (0, l.jsx)(d.Heading, {
                        className: I.generalHeading,
                        variant: "heading-xl/bold",
                        children: r ? v.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : v.default.Messages.SHARE_NITRO_MODAL_HEADER
                    }), (0, l.jsxs)(d.Text, {
                        className: I.generalBodyCopy,
                        variant: "text-md/normal",
                        children: [(0, l.jsx)(d.Anchor, {
                            className: s(I.learnMore, {
                                [I.learnMoreResendUnderlinedText]: r
                            }),
                            href: E.default.getArticleURL(T.HelpdeskArticles.SHARE_NITRO_FAQ),
                            children: r ? v.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : v.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
                                count: t
                            })
                        }), r ? (0, l.jsx)("div", {
                            className: I.shareNitroResendCopySuffix,
                            children: v.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                        }) : (0, l.jsx)("div", {
                            children: v.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
                                date: (0, h.dateFormat)(o(P), "LL")
                            })
                        })]
                    })]
                }), L && (0, l.jsx)("img", {
                    alt: "",
                    src: _,
                    className: I.birthdayBackgroundImage
                })]
            }), (0, l.jsx)("div", {
                className: I.generalButtonContainer,
                children: (0, l.jsx)(d.Button, {
                    className: I.generalShareButton,
                    submitting: g,
                    onClick: () => {
                        r ? y(R, a, A) : (c(!0), p.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: M,
                            step: C.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                            other_user_id: Number(R)
                        }))
                    },
                    children: r ? v.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : v.default.Messages.SHARE_NITRO_BUTTON_TEXT
                })
            })]
        })
    }

    function M(e) {
        let {
            shouldShowPopout: t,
            referralsRemaining: n,
            channel: i,
            onClose: a,
            isResending: s
        } = e;
        return t ? (0, l.jsx)("div", {
            onMouseDown: e => e.stopPropagation(),
            children: (0, l.jsx)(u.Popout, {
                shouldShow: !0,
                position: "top",
                align: "center",
                renderPopout: e => (0, l.jsx)(R, {
                    ...e,
                    referralsRemaining: n,
                    channel: i,
                    onClose: a,
                    isResending: s
                }),
                onRequestClose: () => void 0,
                closeOnScroll: !1,
                ignoreModalClicks: !0,
                children: () => (0, l.jsx)("div", {
                    className: I.popoutTarget
                })
            })
        }) : null
    }
}