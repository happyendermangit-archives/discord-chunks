function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftExperience: function() {
            return i
        },
        findGiftCodes: function() {
            return k
        },
        firstLibraryApplicationForGiftCode: function() {
            return z
        },
        getBodyText: function() {
            return W
        },
        getButtonText: function() {
            return j
        },
        getErrorMessage: function() {
            return K
        },
        getGiftCodeURL: function() {
            return V
        },
        getGiftExperience: function() {
            return P
        },
        getHeaderText: function() {
            return Y
        },
        getStep: function() {
            return H
        },
        isGiftCodeEmbed: function() {
            return B
        },
        makeComboId: function() {
            return b
        },
        parseComboId: function() {
            return G
        },
        processGiftCodeInput: function() {
            return X
        },
        resolveGiftCode: function() {
            return F
        },
        shouldShowCustomGiftExperience: function() {
            return U
        },
        trackGiftCodeCopy: function() {
            return x
        },
        useGetGiftCode: function() {
            return Q
        }
    }), n("47120"), n("757143"), n("627341");
    var i, r, s = n("278074"),
        a = n("873546"),
        o = n("442837"),
        l = n("34756"),
        u = n("100159"),
        d = n("912788"),
        _ = n("594174"),
        c = n("626135"),
        E = n("823379"),
        I = n("358085"),
        T = n("74538"),
        f = n("226951"),
        S = n("73346"),
        A = n("981631"),
        h = n("474936"),
        m = n("689938");
    let N = f.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        O = [N, ...["discordapp.com/gifts", "discord.com/gifts"].map(e => f.default.escape(e))].join("|"),
        p = RegExp("(?: |^|https?://)(?:".concat(O, ")/([a-z0-9-]+)"), "gi"),
        R = [...["discord.com/billing/promotions", "promos.discord.gg"].map(e => f.default.escape(e))].join("|"),
        C = RegExp("(?: |^|https?://)(?:".concat(R, ")/([a-z0-9-]+)"), "gi"),
        g = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
        L = g(4, 4),
        D = g(4, 6),
        v = g(5, 3),
        M = [L, D, v, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
        y = new RegExp("^(".concat("WUMP-?", ")?(").concat(M, ")$"));
    (r = i || (i = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", r[r.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD";
    let P = (e, t) => a.isMobile || a.isTablet ? 0 : null != e || t ? 2 : 1,
        U = e => 0 !== P(e);

    function b(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
    }

    function G(e) {
        let [t, n, i] = e.split(":");
        return {
            skuId: t,
            subscriptionPlanId: "" === n ? null : n,
            giftStyle: "" !== i && null != i ? Number.parseInt(i) : void 0
        }
    }

    function w(e) {
        return e.replace(/[^A-Za-z0-9]/g, "")
    }
    let B = e => (null == e ? void 0 : e.type) === A.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === A.MessageEmbedTypes.GIFT,
        k = e => {
            let t;
            if (null == e) return [];
            let n = new Set;
            for (; null != (t = p.exec(e)) && n.size < 3;) n.add(w(t[1]));
            for (; null != (t = C.exec(e)) && n.size < 3;) n.add(w(t[1]));
            return Array.from(n)
        };

    function V() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = window.GLOBAL_ENV.GIFT_CODE_HOST;
        return null == n || (0, I.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
    }
    async function F(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
            let i = (await (0, S.httpGetWithCountryCodeQuery)({
                url: A.Endpoints.GIFT_CODE_RESOLVE(e),
                query: {
                    with_application: t,
                    with_subscription_plan: n
                },
                oldFormErrors: !0
            })).body;
            return c.default.track(A.AnalyticEvents.GIFT_CODE_RESOLVED, {
                resolved: !0,
                gift_code: i.code,
                gift_code_max_uses: i.max_uses,
                sku_id: i.store_listing.sku.id,
                sku_type: i.store_listing.sku.type,
                application_id: i.store_listing.sku.application_id,
                store_title: i.store_listing.sku.name
            }, {
                flush: !0
            }), i
        } catch (t) {
            throw c.default.track(A.AnalyticEvents.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }), new l.default(t)
        }
    }

    function x(e, t) {
        c.default.track(A.AnalyticEvents.GIFT_CODE_COPIED, {
            ...(0, u.default)(t, !1, !1),
            ...e.analyticsData
        })
    }

    function H(e, t, n, i, r, s, a) {
        return null == n && (i || r || null == e) ? !a || s || i || r ? i && (t.isSubscription || null != e) ? A.GiftCodeModalStates.SUCCESS : A.GiftCodeModalStates.CONFIRM : A.GiftCodeModalStates.OPEN : A.GiftCodeModalStates.ERROR
    }

    function Y(e, t, n) {
        switch (e) {
            case A.GiftCodeModalStates.ERROR:
                return m.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
            case A.GiftCodeModalStates.SUCCESS:
                return t.isSubscription ? m.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                    skuName: n.name
                }) : m.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
            case A.GiftCodeModalStates.CONFIRM:
            default:
                return t.isSubscription ? m.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                    skuName: n.name
                }) : m.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
        }
    }

    function j(e, t, n) {
        switch (e) {
            case A.GiftCodeModalStates.ERROR:
                return m.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
            case A.GiftCodeModalStates.SUCCESS:
                if (__OVERLAY__) return m.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
                if (t.isSubscription) return m.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
                return m.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
            case A.GiftCodeModalStates.OPEN:
                return m.default.Messages.GIFT_OPEN_PROMPT;
            case A.GiftCodeModalStates.CONFIRM:
            default:
                if (null != n && n) return m.default.Messages.GIFT_CODE_AUTH_ACCEPT;
                if (null != t.giftStyle) return t.isClaimed ? m.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : m.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
                return t.isSubscription ? m.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : m.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
        }
    }

    function W(e) {
        let {
            step: t,
            sku: n,
            libraryApplication: i,
            error: r,
            accepted: a,
            accepting: o,
            onGoToLibrary: l,
            subscriptionPlan: u = null
        } = e;
        switch (t) {
            case A.GiftCodeModalStates.ERROR:
                return K(i, r, a, o, l);
            case A.GiftCodeModalStates.SUCCESS:
                if (null != u) {
                    var d;
                    return d = u, (0, s.match)(d).with({
                        interval: h.SubscriptionIntervalTypes.MONTH,
                        premiumSubscriptionType: h.PremiumTypes.TIER_2
                    }, () => m.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                        timeInterval: m.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                    })).with({
                        interval: h.SubscriptionIntervalTypes.YEAR,
                        premiumSubscriptionType: h.PremiumTypes.TIER_2
                    }, () => m.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                        timeInterval: m.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                    })).with({
                        interval: h.SubscriptionIntervalTypes.MONTH,
                        premiumSubscriptionType: h.PremiumTypes.TIER_1
                    }, () => m.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
                        intervalCount: d.intervalCount
                    })).with({
                        interval: h.SubscriptionIntervalTypes.YEAR,
                        premiumSubscriptionType: h.PremiumTypes.TIER_1
                    }, () => m.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
                        intervalCount: d.intervalCount
                    })).otherwise(() => m.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
                }
                return m.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                    skuName: n.name
                });
            case A.GiftCodeModalStates.CONFIRM:
            default:
                if (null != u) return (u.interval === h.SubscriptionIntervalTypes.MONTH ? m.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : m.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                    skuName: n.name,
                    intervalCount: u.intervalCount
                });
                return m.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                    skuName: n.name
                })
        }
    }

    function K(e, t, n, i, r) {
        let s = m.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
            onGoToLibrary: r
        });
        return null != (n || i ? void 0 : e) ? s : null == t ? null : function(e, t) {
            switch (e.code) {
                case A.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
                    return m.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                case A.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    return m.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                case A.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
                    return m.default.Messages.GIFT_ERROR_OWNED;
                case A.AbortCodes.UNKNOWN_GIFT_CODE:
                    return m.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                case A.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                    return m.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                        planName: (0, T.isPremiumExactly)(t, h.PremiumTypes.TIER_2) ? m.default.Messages.PREMIUM_TIER_2 : m.default.Messages.PREMIUM_TIER_1
                    });
                case A.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                    return m.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                case A.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                    return m.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                case A.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                    return m.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                case A.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                    return m.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                default:
                    return m.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
            }
        }(t, _.default.getCurrentUser())
    }

    function z(e, t, n) {
        let i = t.applicationId,
            r = e.length > 0 ? e : [i],
            s = r.map(e => n.getLibraryApplication(i, e, !0)).filter(E.isNotNullish);
        return s.length === r.length ? s[0] : null
    }

    function X(e) {
        let t = e.trim().split("/").pop().match(y);
        if (null == t) return null;
        let [n, i, r] = t;
        return null == r ? null : r.replace(/-/g, "")
    }
    let Q = (e, t) => (0, o.useStateFromStores)([d.default], () => {
        if (null == e || !t) return null;
        let n = d.default.getGiftCode(e);
        return null == n || "" === n ? null : n
    })
}