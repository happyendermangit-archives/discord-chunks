function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("278074"),
        u = n("898511"),
        s = n("14782"),
        l = n("784184"),
        c = n("100064"),
        f = n("482644"),
        d = n("9010"),
        _ = n("622780"),
        E = n("649455"),
        p = n("396586"),
        m = n("844615"),
        y = n("742971"),
        I = n("118197"),
        h = n("208454"),
        O = n("437404"),
        T = n("870331"),
        S = n("830721"),
        v = n("872042"),
        g = n("15949"),
        A = n("706246"),
        b = n("186082"),
        N = n("281767"),
        R = n("348201"),
        C = n("868615"),
        P = n("941504"),
        D = n("802212");

    function L(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function M(e, t) {
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
                if ("string" == typeof e) return L(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var U = function() {
            return r.createElement("div", {
                className: D.editorHeader
            }, r.createElement("div", {
                className: D.bannerUpsell
            }, r.createElement(I.default, {
                className: D.premiumIcon
            }), r.createElement(l.Heading, {
                variant: "heading-md/bold",
                color: "always-white"
            }, P.default.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER)))
        },
        w = function(e) {
            var t = e.markAsDismissed,
                n = (0, A.useTrackClientThemePreviewEvent)();
            return r.createElement("div", {
                className: D.editorHeader
            }, r.createElement(l.Clickable, {
                className: D.closeCircleButton,
                onClick: function() {
                    null != t && t(R.ContentDismissActionType.DISMISS), n(N.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, v.closeEditor)()
                }
            }, r.createElement(O.default, {
                className: D.closeCircle
            })), r.createElement(l.Heading, {
                variant: "heading-lg/extrabold"
            }, P.default.Messages.CLIENT_THEMES_EDITOR_HEADER))
        },
        k = function(e) {
            var t, n, o, i = e.onSubscribeSuccess,
                a = e.markAsDismissed,
                f = (0, p.default)(E.default.CLIENT_THEMES_EDITOR).analyticsLocations,
                d = M((0, u.useStateFromStoresArray)([h.default, g.default], function() {
                    return [g.default.gradientPreset, S.default.isPremium(h.default.getCurrentUser())]
                }), 2),
                _ = d[0],
                I = d[1],
                O = (0, m.usePremiumTrialOffer)(),
                T = (0, S.formatTrialCtaIntervalDuration)({
                    intervalType: null == O ? void 0 : null === (t = O.subscription_trial) || void 0 === t ? void 0 : t.interval,
                    intervalCount: null == O ? void 0 : null === (n = O.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                });
            return r.createElement(y.default, {
                size: l.Button.Sizes.MEDIUM,
                buttonText: I ? P.default.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == O ? void 0 : null === (o = O.subscription_trial) || void 0 === o ? void 0 : o.sku_id) === C.PremiumSubscriptionSKUs.TIER_2 ? T : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
                subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
                onSubscribeModalClose: function(e) {
                    if (!!e) null == i || i(), null != a && a(R.ContentDismissActionType.PRIMARY), null != _ && ((0, b.trackClientThemeUpdated)({
                        isPersisted: !0,
                        themeName: s.BackgroundGradientPresetId[_.id],
                        analyticsLocations: f
                    }), (0, c.saveClientTheme)({
                        backgroundGradientPresetId: _.id,
                        theme: _.theme
                    }))
                }
            })
        },
        G = function(e) {
            var t = e.markAsDismissed,
                n = (0, u.useStateFromStoresObject)([g.default], function() {
                    return {
                        isPreview: g.default.isPreview,
                        isCoachmark: g.default.isCoachmark
                    }
                }),
                o = n.isPreview,
                i = n.isCoachmark,
                s = M(r.useState(!1), 2),
                c = s[0],
                d = s[1],
                _ = (0, A.useTrackClientThemePreviewEvent)(),
                E = (0, a.match)({
                    isPreview: o,
                    isCoachmark: i,
                    forceShowCloseButton: c
                }).with({
                    isCoachmark: !0
                }, {
                    forceShowCloseButton: !0
                }, function() {
                    return P.default.Messages.CLOSE
                }).with({
                    isPreview: !0
                }, function() {
                    return P.default.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW
                }).otherwise(function() {
                    return P.default.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
                });
            return r.createElement("div", {
                className: D.editorFooter
            }, o && r.createElement(k, {
                onSubscribeSuccess: function() {
                    d(!0)
                },
                markAsDismissed: t
            }), r.createElement(l.Button, {
                className: D.footerButton,
                onClick: function() {
                    null != t && t(R.ContentDismissActionType.DISMISS), _(N.AnalyticEvents.CLIENT_THEME_PREVIEW_CLOSED), (0, v.closeEditor)(), !i && f.default.open()
                },
                color: l.Button.Colors.PRIMARY,
                size: l.Button.Sizes.MEDIUM
            }, E))
        };

    function B(e) {
        var t = e.markAsDismissed,
            n = (0, p.default)(E.default.CLIENT_THEMES_EDITOR).analyticsLocations,
            o = (0, u.useStateFromStoresObject)([g.default, _.default], function() {
                return {
                    isPreview: g.default.isPreview,
                    isCoachmark: g.default.isCoachmark,
                    isEditorOpen: g.default.isEditorOpen,
                    shouldEditorAnimate: g.default.isCoachmark && !_.default.useReducedMotion
                }
            }),
            a = o.isPreview,
            s = o.isCoachmark,
            c = o.isEditorOpen,
            f = o.shouldEditorAnimate,
            m = (0, A.useTrackClientThemePreviewEvent)();
        r.useEffect(function() {
            return m(N.AnalyticEvents.CLIENT_THEME_PREVIEW_VIEWED)
        }, [m]), r.useEffect(function() {
            a && T.default.track(N.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                type: C.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
                location_stack: n
            })
        }, [a, n]);
        var y = (0, A.useResetClientThemePreview)(),
            I = (0, d.default)(null, a ? y : N.NOOP);
        return r.useEffect(function() {
            if (a && !c) return y
        }, [a, c, y]), r.createElement(p.AnalyticsLocationProvider, {
            value: n
        }, r.createElement("div", {
            ref: I,
            className: i()(D.themeEditor, f ? D.editorAnimate : null)
        }, r.createElement(l.HeadingLevel, null, s ? r.createElement(U, null) : r.createElement(w, {
            markAsDismissed: t
        }), r.createElement(l.Scroller, {
            className: D.editorBody
        }, r.createElement(b.default, {
            type: b.ThemeSelectionGroupType.EDITOR
        }, !a && r.createElement(b.default.Basic, {
            className: D.selectionGroup
        }), r.createElement(b.default.Gradient, {
            className: D.selectionGroup
        }))), r.createElement(G, {
            markAsDismissed: t
        }))))
    }
}