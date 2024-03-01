function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftExperience: function() {
            return s
        },
        getGiftExperience: function() {
            return M
        },
        shouldShowCustomGiftExperience: function() {
            return w
        },
        makeComboId: function() {
            return L
        },
        parseComboId: function() {
            return U
        },
        isGiftCodeEmbed: function() {
            return F
        },
        findGiftCodes: function() {
            return H
        },
        getGiftCodeURL: function() {
            return B
        },
        resolveGiftCode: function() {
            return x
        },
        trackGiftCodeCopy: function() {
            return Y
        },
        getStep: function() {
            return j
        },
        getHeaderText: function() {
            return K
        },
        getButtonText: function() {
            return W
        },
        getBodyText: function() {
            return z
        },
        getErrorMessage: function() {
            return q
        },
        firstLibraryApplicationForGiftCode: function() {
            return X
        },
        processGiftCodeInput: function() {
            return Q
        },
        useGetGiftCode: function() {
            return Z
        }
    }), n("222007"), n("781738"), n("794252");
    var s, i, r = n("506838"),
        a = n("394846"),
        o = n("446674"),
        d = n("333805"),
        u = n("791160"),
        l = n("353365"),
        f = n("697218"),
        _ = n("599110"),
        c = n("449008"),
        g = n("773336"),
        m = n("719923"),
        h = n("655518"),
        v = n("271560"),
        E = n("49111"),
        p = n("646718"),
        y = n("782340");
    let T = h.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST),
        C = ["discordapp.com/gifts", "discord.com/gifts"].map(e => h.default.escape(e)),
        I = [T, ...C].join("|"),
        S = RegExp("(?: |^|https?://)(?:".concat(I, ")/([a-z0-9-]+)"), "gi"),
        A = ["discord.com/billing/promotions", "promos.discord.gg"].map(e => h.default.escape(e)),
        D = [...A].join("|"),
        N = RegExp("(?: |^|https?://)(?:".concat(D, ")/([a-z0-9-]+)"), "gi"),
        O = (e, t) => Array(t).fill(void 0).map(() => "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")).join("-?"),
        P = O(4, 4),
        b = O(4, 6),
        V = O(5, 3),
        R = [P, b, V, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
        k = new RegExp("^(".concat("WUMP-?", ")?(").concat(R, ")$"));
    (i = s || (s = {}))[i.DEFAULT = 0] = "DEFAULT", i[i.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", i[i.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD";
    let M = (e, t) => a.isMobile || a.isTablet ? 0 : null != e || t ? 2 : 1,
        w = e => 0 !== M(e);

    function L(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
    }

    function U(e) {
        let [t, n, s] = e.split(":");
        return {
            skuId: t,
            subscriptionPlanId: "" === n ? null : n,
            giftStyle: "" !== s && null != s ? Number.parseInt(s) : void 0
        }
    }

    function G(e) {
        return e.replace(/[^A-Za-z0-9]/g, "")
    }
    let F = e => (null == e ? void 0 : e.type) === E.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === E.MessageEmbedTypes.GIFT,
        H = e => {
            let t;
            if (null == e) return [];
            let n = new Set;
            for (; null != (t = S.exec(e)) && n.size < 3;) n.add(G(t[1]));
            for (; null != (t = N.exec(e)) && n.size < 3;) n.add(G(t[1]));
            return Array.from(n)
        };

    function B() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = window.GLOBAL_ENV.GIFT_CODE_HOST;
        return null == n || (0, g.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
    }
    async function x(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
            let s = await (0, v.httpGetWithCountryCodeQuery)({
                    url: E.Endpoints.GIFT_CODE_RESOLVE(e),
                    query: {
                        with_application: t,
                        with_subscription_plan: n
                    },
                    oldFormErrors: !0
                }),
                i = s.body;
            return _.default.track(E.AnalyticEvents.GIFT_CODE_RESOLVED, {
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
            throw _.default.track(E.AnalyticEvents.GIFT_CODE_RESOLVED, {
                resolved: !1,
                gift_code: e
            }), new d.default(t)
        }
    }

    function Y(e, t) {
        _.default.track(E.AnalyticEvents.GIFT_CODE_COPIED, {
            ...(0, u.default)(t, !1, !1),
            ...e.analyticsData
        })
    }

    function j(e, t, n, s, i, r, a) {
        return null == n && (s || i || null == e) ? !a || r || s || i ? s && (t.isSubscription || null != e) ? E.GiftCodeModalStates.SUCCESS : E.GiftCodeModalStates.CONFIRM : E.GiftCodeModalStates.OPEN : E.GiftCodeModalStates.ERROR
    }

    function K(e, t, n) {
        switch (e) {
            case E.GiftCodeModalStates.ERROR:
                return y.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
            case E.GiftCodeModalStates.SUCCESS:
                return t.isSubscription ? y.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                    skuName: n.name
                }) : y.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
            case E.GiftCodeModalStates.CONFIRM:
            default:
                return t.isSubscription ? y.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                    skuName: n.name
                }) : y.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
        }
    }

    function W(e, t, n) {
        switch (e) {
            case E.GiftCodeModalStates.ERROR:
                return y.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
            case E.GiftCodeModalStates.SUCCESS:
                if (__OVERLAY__) return y.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
                if (t.isSubscription) return y.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
                return y.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
            case E.GiftCodeModalStates.OPEN:
                return y.default.Messages.GIFT_OPEN_PROMPT;
            case E.GiftCodeModalStates.CONFIRM:
            default:
                if (null != n && n) return y.default.Messages.GIFT_CODE_AUTH_ACCEPT;
                if (null != t.giftStyle) return t.isClaimed ? y.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : y.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
                return t.isSubscription ? y.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : y.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
        }
    }

    function z(e) {
        let {
            step: t,
            sku: n,
            libraryApplication: s,
            error: i,
            accepted: a,
            accepting: o,
            onGoToLibrary: d,
            subscriptionPlan: u = null
        } = e;
        switch (t) {
            case E.GiftCodeModalStates.ERROR:
                return q(s, i, a, o, d);
            case E.GiftCodeModalStates.SUCCESS:
                if (null != u) {
                    var l;
                    return l = u, (0, r.match)(l).with({
                        interval: p.SubscriptionIntervalTypes.MONTH,
                        premiumSubscriptionType: p.PremiumTypes.TIER_2
                    }, () => y.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                        timeInterval: y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                    })).with({
                        interval: p.SubscriptionIntervalTypes.YEAR,
                        premiumSubscriptionType: p.PremiumTypes.TIER_2
                    }, () => y.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                        timeInterval: y.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                    })).with({
                        interval: p.SubscriptionIntervalTypes.MONTH,
                        premiumSubscriptionType: p.PremiumTypes.TIER_1
                    }, () => y.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
                        intervalCount: l.intervalCount
                    })).with({
                        interval: p.SubscriptionIntervalTypes.YEAR,
                        premiumSubscriptionType: p.PremiumTypes.TIER_1
                    }, () => y.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
                        intervalCount: l.intervalCount
                    })).otherwise(() => y.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC)
                }
                return y.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                    skuName: n.name
                });
            case E.GiftCodeModalStates.CONFIRM:
            default:
                if (null != u) {
                    let e = u.interval === p.SubscriptionIntervalTypes.MONTH ? y.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : y.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM;
                    return e.format({
                        skuName: n.name,
                        intervalCount: u.intervalCount
                    })
                }
                return y.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                    skuName: n.name
                })
        }
    }

    function q(e, t, n, s, i) {
        let r = y.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
            onGoToLibrary: i
        });
        if (null != (n || s ? void 0 : e)) return r;
        if (null == t) return null;
        let a = f.default.getCurrentUser();
        return function(e, t) {
            switch (e.code) {
                case E.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
                    return y.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                case E.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    return y.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                case E.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
                    return y.default.Messages.GIFT_ERROR_OWNED;
                case E.AbortCodes.UNKNOWN_GIFT_CODE:
                    return y.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                case E.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                    return y.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                        planName: (0, m.isPremiumExactly)(t, p.PremiumTypes.TIER_2) ? y.default.Messages.PREMIUM_TIER_2 : y.default.Messages.PREMIUM_TIER_1
                    });
                case E.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                    return y.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                case E.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                    return y.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                case E.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                    return y.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                case E.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                    return y.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                default:
                    return y.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
            }
        }(t, a)
    }

    function X(e, t, n) {
        let s = t.applicationId,
            i = e.length > 0 ? e : [s],
            r = i.map(e => n.getLibraryApplication(s, e, !0)).filter(c.isNotNullish);
        return r.length === i.length ? r[0] : null
    }

    function Q(e) {
        let t = e.trim().split("/").pop(),
            n = t.match(k);
        if (null == n) return null;
        let [s, i, r] = n;
        return null == r ? null : r.replace(/-/g, "")
    }
    let Z = (e, t) => (0, o.useStateFromStores)([l.default], () => {
        if (null == e || !t) return null;
        let n = l.default.getGiftCode(e);
        return null == n || "" === n ? null : n
    })
}