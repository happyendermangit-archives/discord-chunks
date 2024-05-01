function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        QuestsRewardModalUnverified: function() {
            return I
        },
        openRewardModalUnverified: function() {
            return T
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("481060"),
        o = n("893776"),
        l = n("594174"),
        u = n("41542"),
        d = n("918701"),
        _ = n("689938"),
        c = n("297796"),
        E = n("800010");

    function I(e) {
        let {
            transitionState: t,
            onClose: n
        } = e, I = (0, a.useStateFromStores)([l.default], () => {
            var e;
            return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.email
        }), [T, f] = r.useState({
            status: "unknown"
        });
        r.useEffect(() => {
            f({
                status: "loading"
            }), o.default.verifyResend().then(() => f({
                status: "success"
            }), e => {
                f({
                    status: "error"
                }), (0, d.captureQuestsException)(e, {
                    tags: {
                        location: "QuestsRewardModalUnverified"
                    }
                })
            })
        }, []);
        let S = () => (0, i.jsx)(s.ModalFooter, {
            className: c.modalFooter,
            children: (0, i.jsx)(s.Button, {
                color: s.Button.Colors.BRAND,
                size: s.Button.Sizes.MEDIUM,
                onClick: n,
                children: _.default.Messages.CLOSE
            })
        });
        return (0, i.jsxs)(s.ModalRoot, {
            transitionState: t,
            disableTrack: !0,
            children: [(0, i.jsx)("img", {
                alt: "",
                className: c.headerImage,
                src: E
            }), (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: c.header,
                children: [(0, i.jsx)(s.Heading, {
                    className: c.title,
                    variant: "heading-xl/bold",
                    children: _.default.Messages.QUESTS_REWARD_VERIFICATION_TITLE
                }), (0, i.jsx)(s.ModalCloseButton, {
                    onClick: n,
                    className: c.modalCloseButton
                })]
            }), "loading" === T.status && (0, i.jsx)(s.ModalContent, {
                className: c.content,
                children: (0, i.jsx)(s.Spinner, {})
            }), "error" === T.status && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(s.ModalContent, {
                    className: c.content,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: _.default.Messages.QUESTS_REWARD_VERIFICATION_ERROR
                    })
                }), S()]
            }), "success" === T.status && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(s.ModalContent, {
                    className: c.content,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: _.default.Messages.QUESTS_REWARD_VERIFICATION_BODY.format({
                            emailAddress: I,
                            emailAddressLink: "mailto:".concat(I)
                        })
                    })
                }), (0, i.jsx)(s.ModalContent, {
                    className: c.content,
                    children: (0, i.jsxs)("div", {
                        className: c.tooltip,
                        children: [(0, i.jsx)(u.default, {
                            className: c.infoFilledIcon
                        }), (0, i.jsx)(s.Text, {
                            className: c.tooltipText,
                            variant: "text-sm/normal",
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CHECK_SPAM
                        })]
                    })
                }), S()]
            })]
        })
    }

    function T() {
        (0, s.openModalLazy)(async () => {
            let {
                QuestsRewardModalUnverified: e
            } = await Promise.resolve().then(n.bind(n, "669041"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        })
    }
}