function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("506083"), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("866227"),
        o = n.n(r),
        u = n("442761"),
        d = n("77078"),
        c = n("54239"),
        f = n("812204"),
        p = n("685665"),
        m = n("599110"),
        h = n("888400"),
        x = n("701909"),
        E = n("179935"),
        y = n("166960"),
        g = n("646718"),
        S = n("49111"),
        C = n("782340"),
        T = n("486433"),
        _ = n("278410"),
        I = n("410957"),
        v = n("730708"),
        N = n("754702");
    let A = async (e, t, n) => {
        n(!0), await (0, E.createReferralTrial)(e).then(() => {
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
        } = e, [u, c] = l.useState(!1), f = n - 1;
        return (0, i.jsxs)("div", {
            className: T.confirmationContainer,
            children: [(0, i.jsxs)("div", {
                className: s({
                    [T.confirmationBody]: !o,
                    [T.confirmationBirthdayBody]: o
                }),
                children: [(0, i.jsx)(d.ModalCloseButton, {
                    onClick: t,
                    className: T.closeButton
                }), (0, i.jsx)("img", {
                    alt: "",
                    src: o ? I : v,
                    className: T.confirmationImage
                }), (0, i.jsx)(d.Heading, {
                    variant: "heading-xl/bold",
                    color: "interactive-active",
                    className: T.confirmationHeading,
                    children: C.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                }), (0, i.jsx)(d.Text, {
                    className: T.confirmationBodyCopy,
                    variant: "text-md/medium",
                    color: "header-primary",
                    children: f > 0 ? C.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                        count: f
                    }) : C.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                }), (0, i.jsx)("hr", {
                    className: T.confirmationBodySeparator
                })]
            }), (0, i.jsxs)("div", {
                className: T.confirmationButtonContainer,
                children: [(0, i.jsx)(d.Button, {
                    className: T.confirmationShareButton,
                    submitting: u,
                    onClick: () => {
                        A(a, t, c), m.default.track(S.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: r,
                            step: g.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
                            other_user_id: Number(a)
                        })
                    },
                    children: C.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                }), (0, i.jsx)("div", {
                    className: T.confirmationCancelButtonContainer,
                    children: (0, i.jsx)(d.Clickable, {
                        onClick: t,
                        children: (0, i.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: T.confirmationCancelCopy,
                            children: C.default.Messages.CANCEL
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
        } = e, [u, c] = l.useState(!1), [E, v] = l.useState(!1), R = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
            analyticsLocations: M
        } = (0, p.default)(f.default.REFERRAL_TRIALS_POPOUT), {
            enabled: k
        } = y.default.useExperiment({
            location: "200c24_1"
        }, {
            autoTrackExposure: !0
        }), L = new Date("2023-06-15T08:00:00-08:00");
        return null == R ? null : u ? (0, i.jsx)(O, {
            onClose: a,
            referralsRemaining: t,
            recipient: R,
            analyticsLocations: M,
            shouldShowBirthdayUX: k
        }) : (0, i.jsxs)("div", {
            className: T.generalContainer,
            children: [(0, i.jsxs)("div", {
                className: T.generalBodyContainer,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    src: k ? I : N,
                    className: T.generalBodyImage
                }), (0, i.jsxs)("div", {
                    className: T.innerContent,
                    children: [(0, i.jsx)(d.ModalCloseButton, {
                        onClick: a,
                        className: T.closeButton
                    }), (0, i.jsx)(d.Heading, {
                        className: T.generalHeading,
                        variant: "heading-xl/bold",
                        children: r ? C.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : C.default.Messages.SHARE_NITRO_MODAL_HEADER
                    }), (0, i.jsxs)(d.Text, {
                        className: T.generalBodyCopy,
                        variant: "text-md/normal",
                        children: [(0, i.jsx)(d.Anchor, {
                            className: s(T.learnMore, {
                                [T.learnMoreResendUnderlinedText]: r
                            }),
                            href: x.default.getArticleURL(S.HelpdeskArticles.SHARE_NITRO_FAQ),
                            children: r ? C.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : C.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
                                count: t
                            })
                        }), r ? (0, i.jsx)("div", {
                            className: T.shareNitroResendCopySuffix,
                            children: C.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                        }) : (0, i.jsx)("div", {
                            children: C.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
                                date: (0, h.dateFormat)(o(L), "LL")
                            })
                        })]
                    })]
                }), k && (0, i.jsx)("img", {
                    alt: "",
                    src: _,
                    className: T.birthdayBackgroundImage
                })]
            }), (0, i.jsx)("div", {
                className: T.generalButtonContainer,
                children: (0, i.jsx)(d.Button, {
                    className: T.generalShareButton,
                    submitting: E,
                    onClick: () => {
                        r ? A(R, a, v) : (c(!0), m.default.track(S.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                            location_stack: M,
                            step: g.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                            other_user_id: Number(R)
                        }))
                    },
                    children: r ? C.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : C.default.Messages.SHARE_NITRO_BUTTON_TEXT
                })
            })]
        })
    }

    function M(e) {
        let {
            shouldShowPopout: t,
            referralsRemaining: n,
            channel: l,
            onClose: a,
            isResending: s
        } = e;
        return t ? (0, i.jsx)("div", {
            onMouseDown: e => e.stopPropagation(),
            children: (0, i.jsx)(u.Popout, {
                shouldShow: !0,
                position: "top",
                align: "center",
                renderPopout: e => (0, i.jsx)(R, {
                    ...e,
                    referralsRemaining: n,
                    channel: l,
                    onClose: a,
                    isResending: s
                }),
                onRequestClose: () => void 0,
                closeOnScroll: !1,
                ignoreModalClicks: !0,
                children: () => (0, i.jsx)("div", {
                    className: T.popoutTarget
                })
            })
        }) : null
    }
}