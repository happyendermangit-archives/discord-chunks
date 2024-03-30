function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("913527"),
        l = n.n(s),
        c = n("726712"),
        f = n("784184"),
        d = n("78928"),
        _ = n("649455"),
        E = n("396586"),
        p = n("870331"),
        m = n("170030"),
        y = n("481971"),
        I = n("782653"),
        h = n("179647"),
        O = n("868615"),
        T = n("281767"),
        S = n("941504"),
        v = n("74097"),
        g = n("751599"),
        A = n("397293"),
        b = n("352175"),
        N = n("90351");

    function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function C(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return R(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return R(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var L = (o = (r = function(e, t, n) {
            return function(e, t) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = t.call(e, a)
                            } catch (e) {
                                i = [6, e], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }(this, function(r) {
                switch (r.label) {
                    case 0:
                        return n(!0), [4, (0, I.createReferralTrial)(e).then(function() {
                            t(), (0, d.popAllLayers)()
                        }).finally(function() {
                            n(!1)
                        })];
                    case 1:
                        return r.sent(), [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, o) {
                var i = r.apply(e, t);

                function a(e) {
                    C(i, n, o, a, u, "next", e)
                }

                function u(e) {
                    C(i, n, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function(e, t, n) {
            return o.apply(this, arguments)
        }),
        M = function(e) {
            var t, n = e.onClose,
                r = e.referralsRemaining,
                o = e.recipient,
                a = e.analyticsLocations,
                s = e.shouldShowBirthdayUX,
                l = D(i.useState(!1), 2),
                c = l[0],
                d = l[1],
                _ = r - 1;
            return i.createElement("div", {
                className: v.confirmationContainer
            }, i.createElement("div", {
                className: u()((P(t = {}, v.confirmationBody, !s), P(t, v.confirmationBirthdayBody, s), t))
            }, i.createElement(f.ModalCloseButton, {
                onClick: n,
                className: v.closeButton
            }), i.createElement("img", {
                alt: "",
                src: s ? A : b,
                className: v.confirmationImage
            }), i.createElement(f.Heading, {
                variant: "heading-xl/bold",
                color: "interactive-active",
                className: v.confirmationHeading
            }, S.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER), i.createElement(f.Text, {
                className: v.confirmationBodyCopy,
                variant: "text-md/medium",
                color: "header-primary"
            }, _ > 0 ? S.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                count: _
            }) : S.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL), i.createElement("hr", {
                className: v.confirmationBodySeparator
            })), i.createElement("div", {
                className: v.confirmationButtonContainer
            }, i.createElement(f.Button, {
                className: v.confirmationShareButton,
                submitting: c,
                onClick: function() {
                    L(o, n, d), p.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                        location_stack: a,
                        step: O.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
                        other_user_id: Number(o)
                    })
                }
            }, S.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT), i.createElement("div", {
                className: v.confirmationCancelButtonContainer
            }, i.createElement(f.Clickable, {
                onClick: n
            }, i.createElement(f.Text, {
                variant: "text-sm/medium",
                className: v.confirmationCancelCopy
            }, S.default.Messages.CANCEL)))))
        };

    function U(e) {
        var t = e.referralsRemaining,
            n = e.channel,
            r = e.onClose,
            o = e.isResending,
            a = D(i.useState(!1), 2),
            s = a[0],
            c = a[1],
            d = D(i.useState(!1), 2),
            I = d[0],
            b = d[1],
            R = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null,
            C = (0, E.default)(_.default.REFERRAL_TRIALS_POPOUT).analyticsLocations,
            U = h.default.useExperiment({
                location: "200c24_1"
            }, {
                autoTrackExposure: !0
            }).enabled,
            w = new Date("2023-06-15T08:00:00-08:00");
        return null == R ? null : s ? i.createElement(M, {
            onClose: r,
            referralsRemaining: t,
            recipient: R,
            analyticsLocations: C,
            shouldShowBirthdayUX: U
        }) : i.createElement("div", {
            className: v.generalContainer
        }, i.createElement("div", {
            className: v.generalBodyContainer
        }, i.createElement("img", {
            alt: "",
            src: U ? A : N,
            className: v.generalBodyImage
        }), i.createElement("div", {
            className: v.innerContent
        }, i.createElement(f.ModalCloseButton, {
            onClick: r,
            className: v.closeButton
        }), i.createElement(f.Heading, {
            className: v.generalHeading,
            variant: "heading-xl/bold"
        }, o ? S.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : S.default.Messages.SHARE_NITRO_MODAL_HEADER), i.createElement(f.Text, {
            className: v.generalBodyCopy,
            variant: "text-md/normal"
        }, i.createElement(f.Anchor, {
            className: u()(v.learnMore, P({}, v.learnMoreResendUnderlinedText, o)),
            href: y.default.getArticleURL(T.HelpdeskArticles.SHARE_NITRO_FAQ)
        }, o ? S.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : S.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
            count: t
        })), o ? i.createElement("div", {
            className: v.shareNitroResendCopySuffix
        }, S.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2) : i.createElement("div", null, S.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
            date: (0, m.dateFormat)(l()(w), "LL")
        })))), U && i.createElement("img", {
            alt: "",
            src: g,
            className: v.birthdayBackgroundImage
        })), i.createElement("div", {
            className: v.generalButtonContainer
        }, i.createElement(f.Button, {
            className: v.generalShareButton,
            submitting: I,
            onClick: function() {
                o ? L(R, r, b) : (c(!0), p.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                    location_stack: C,
                    step: O.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                    other_user_id: Number(R)
                }))
            }
        }, o ? S.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : S.default.Messages.SHARE_NITRO_BUTTON_TEXT)))
    }

    function w(e) {
        var t = e.shouldShowPopout,
            n = e.referralsRemaining,
            r = e.channel,
            o = e.onClose,
            a = e.isResending;
        return t ? i.createElement("div", {
            onMouseDown: function(e) {
                return e.stopPropagation()
            }
        }, i.createElement(c.Popout, {
            shouldShow: !0,
            position: "top",
            align: "center",
            renderPopout: function(e) {
                var t, u;
                return i.createElement(U, (t = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            P(e, t, n[t])
                        })
                    }
                    return e
                }({}, e), u = (u = {
                    referralsRemaining: n,
                    channel: r,
                    onClose: o,
                    isResending: a
                }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(u)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(u, e))
                }), t))
            },
            onRequestClose: function() {},
            closeOnScroll: !1,
            ignoreModalClicks: !0
        }, function() {
            return i.createElement("div", {
                className: v.__invalid_popoutTarget
            })
        })) : null
    }
}