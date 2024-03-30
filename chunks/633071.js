function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("921167"),
        l = n("208454"),
        c = n("304933"),
        f = n("830721"),
        d = n("532209"),
        _ = n("214803"),
        E = n("257132"),
        p = n("868615"),
        m = n("281767"),
        y = n("962972"),
        I = n("941504"),
        h = n("955617");

    function O(e) {
        var t, n = e.onClose,
            o = e.fileSize,
            O = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["onClose", "fileSize"]),
            T = null != o && p.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < o,
            S = (0, _.default)({
                autoTrackExposure: !T,
                experiment: d.default,
                location: p.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
            }),
            v = S.isLoading,
            g = S.suggestedPremiumType,
            A = !T && g === p.PremiumTypes.TIER_0,
            b = (0, a.useStateFromStores)([l.default], function() {
                return l.default.getCurrentUser()
            }),
            N = r.createElement(s.default, {
                icons: y.DEFAULT_FILE_UPLOAD_ICONS
            });
        t = A ? I.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
            premiumPlan: (0, f.getPremiumTypeDisplayName)(p.PremiumTypes.TIER_0),
            premiumMaxSize: I.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
        }) : I.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
        var R = r.useMemo(function() {
                var e = f.default.getUserMaxFileSize(b),
                    t = (0, c.formatSize)(e / 1024, {
                        useKibibytes: !0
                    }),
                    n = I.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                        maxSize: t
                    });
                switch (null == b ? void 0 : b.premiumType) {
                    case p.PremiumTypes.TIER_0:
                        n = I.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
                            maxSize: t
                        });
                        break;
                    case p.PremiumTypes.TIER_1:
                        n = I.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
                            maxSize: t
                        })
                }
                return n
            }, [b]),
            C = r.createElement("div", {
                className: h.body
            }, r.createElement("span", null, R), r.createElement(u.Text, {
                variant: "text-md/medium"
            }, t));
        return r.createElement(E.default, function(e) {
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
        }({
            artElement: N,
            artContainerClassName: i()(h.artContainer),
            enableArtBoxShadow: !1,
            type: p.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
            title: I.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
            body: C,
            context: I.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
                maxSize: I.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
            }),
            glowUp: t,
            analyticsLocation: {
                section: m.AnalyticsSections.FILE_UPLOAD_POPOUT
            },
            onClose: n,
            subscriptionTier: A ? p.PremiumSubscriptionSKUs.TIER_0 : p.PremiumSubscriptionSKUs.TIER_2,
            isLoading: v
        }, O))
    }
}