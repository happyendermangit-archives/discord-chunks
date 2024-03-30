function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("582444"),
        i = n("751848"),
        a = n("9010"),
        u = n("523263"),
        s = n("649455"),
        l = n("396586"),
        c = n("179647"),
        f = n("768410"),
        d = n("813571"),
        _ = n("392667"),
        E = n("870331"),
        p = n("281767"),
        m = n("868615"),
        y = n("941504"),
        I = n("23383");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t) {
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
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = r.memo(function(e) {
        var t = e.disabled,
            n = e.referralsRemaining,
            h = e.channel,
            T = e.isResending,
            S = c.default.useExperiment({
                location: "ec41f5_1"
            }, {
                autoTrackExposure: !0
            }).enabled,
            v = S ? y.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : T ? y.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : y.default.Messages.SHARE_NITRO_TOOLTIP,
            g = S ? y.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null,
            A = O(r.useState(!1), 2),
            b = A[0],
            N = A[1],
            R = O(r.useState(!1), 2),
            C = R[0],
            P = R[1],
            D = (0, a.default)(null, function() {
                return P(!1)
            }),
            L = (0, l.default)(s.default.REFERRAL_TRIALS_COMPOSER_BUTTON).analyticsLocations,
            M = h.isDM() && void 0 !== h.recipients ? h.recipients[0] : null,
            U = (0, u.default)();
        return t ? null : r.createElement("div", {
            ref: D,
            className: I.buttonContainer
        }, r.createElement(f.default, {
            shouldShowPopout: C,
            referralsRemaining: n,
            channel: h,
            onClose: function() {
                return P(!1)
            },
            isResending: T
        }), r.createElement(o.Tooltip, {
            text: v,
            shouldShow: !C,
            "aria-label": null != g ? g : v
        }, function(e) {
            var t, o;
            return r.createElement("div", {
                onMouseEnter: function() {
                    !C && !b && (N(!0), E.default.track(p.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                        location_stack: L,
                        step: m.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                        other_user_id: Number(M)
                    }))
                },
                onMouseLeave: function() {
                    N(!1)
                }
            }, r.createElement(d.default, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({}, e), o = (o = {
                innerClassName: I.button,
                isActive: C,
                "aria-label": null != g ? g : v,
                "aria-haspopup": "dialog",
                onClick: function() {
                    P(function(e) {
                        return !e
                    }), E.default.track(p.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                        location_stack: L,
                        step: m.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                        other_user_id: Number(M)
                    })
                }
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }), t), r.createElement(_.default, {
                referralsRemaining: n,
                hovered: b,
                isResending: T,
                shouldShowBirthdayUX: S,
                isLightTheme: (0, i.isThemeLight)(U)
            })))
        }))
    })
}