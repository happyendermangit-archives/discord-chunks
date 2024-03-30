function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GiftExperience: function() {
            return o
        },
        findGiftCodes: function() {
            return H
        },
        firstLibraryApplicationForGiftCode: function() {
            return Z
        },
        getBodyText: function() {
            return Q
        },
        getButtonText: function() {
            return q
        },
        getErrorMessage: function() {
            return J
        },
        getGiftCodeURL: function() {
            return x
        },
        getGiftExperience: function() {
            return k
        },
        getHeaderText: function() {
            return X
        },
        getStep: function() {
            return z
        },
        isGiftCodeEmbed: function() {
            return V
        },
        makeComboId: function() {
            return B
        },
        parseComboId: function() {
            return j
        },
        processGiftCodeInput: function() {
            return $
        },
        resolveGiftCode: function() {
            return Y
        },
        shouldShowCustomGiftExperience: function() {
            return G
        },
        trackGiftCodeCopy: function() {
            return K
        },
        useGetGiftCode: function() {
            return ee
        }
    });
    var r, o, i = n("278074"),
        a = n("56300"),
        u = n("898511"),
        s = n("445515"),
        l = n("284804"),
        c = n("408363"),
        f = n("208454"),
        d = n("870331"),
        _ = n("162677"),
        E = n("374550"),
        p = n("830721"),
        m = n("949011"),
        y = n("329903"),
        I = n("281767"),
        h = n("868615"),
        O = n("941504");

    function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function S(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function v(e, t) {
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
        }(e, t) || A(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        return function(e) {
            if (Array.isArray(e)) return T(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || A(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(e, t) {
        if (e) {
            if ("string" == typeof e) return T(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return T(e, t)
        }
    }
    var b = [m.default.escape(window.GLOBAL_ENV.GIFT_CODE_HOST)].concat(g(["discordapp.com/gifts", "discord.com/gifts"].map(function(e) {
            return m.default.escape(e)
        }))).join("|"),
        N = RegExp("(?: |^|https?://)(?:".concat(b, ")/([a-z0-9-]+)"), "gi"),
        R = g(["discord.com/billing/promotions", "promos.discord.gg"].map(function(e) {
            return m.default.escape(e)
        })).join("|"),
        C = RegExp("(?: |^|https?://)(?:".concat(R, ")/([a-z0-9-]+)"), "gi"),
        P = function(e, t) {
            return Array(t).fill(void 0).map(function() {
                return "[".concat("abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ23456789", "]{").concat(e, "}")
            }).join("-?")
        },
        D = P(4, 4),
        L = P(4, 6),
        M = P(5, 3),
        U = [D, L, M, "[a-zA-Z]{4}-?[0-9a-zA-Z]{4}-?[a-zA-Z]{4}"].join("|"),
        w = new RegExp("^(".concat("WUMP-?", ")?(").concat(U, ")$"));
    (r = o || (o = {}))[r.DEFAULT = 0] = "DEFAULT", r[r.CUSTOM_STYLE = 1] = "CUSTOM_STYLE", r[r.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD = 2] = "CUSTOM_MESSAGE_EMOJI_SOUNDBOARD";
    var k = function(e, t) {
            return a.isMobile || a.isTablet ? 0 : null != e || t ? 2 : 1
        },
        G = function(e) {
            return 0 !== k(e)
        };

    function B(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 ? arguments[2] : void 0;
        return "".concat(e, ":").concat(null != t ? t : "", ":").concat(null != n ? n : "")
    }

    function j(e) {
        var t = v(e.split(":"), 3),
            n = t[0],
            r = t[1],
            o = t[2];
        return {
            skuId: n,
            subscriptionPlanId: "" === r ? null : r,
            giftStyle: "" !== o && null != o ? Number.parseInt(o) : void 0
        }
    }

    function F(e) {
        return e.replace(/[^A-Za-z0-9]/g, "")
    }
    var V = function(e) {
            return (null == e ? void 0 : e.type) === I.MessageTypes.CUSTOM_GIFT && (null == e ? void 0 : e.embeds.length) === 1 && (null == e ? void 0 : e.embeds[0].type) === I.MessageEmbedTypes.GIFT
        },
        H = function(e) {
            if (null == e) return [];
            for (var t, n = new Set; null != (t = N.exec(e)) && n.size < 3;) n.add(F(t[1]));
            for (; null != (t = C.exec(e)) && n.size < 3;) n.add(F(t[1]));
            return Array.from(n)
        };

    function x() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = window.GLOBAL_ENV.GIFT_CODE_HOST;
        return null == n || (0, E.isAndroid)() ? (n = location.host, e = "/gifts/".concat(t)) : e = "/".concat(t), "".concat(location.protocol, "//").concat(n).concat(e)
    }

    function Y(e) {
        return W.apply(this, arguments)
    }

    function W() {
        var e;
        return e = function(e) {
            var t, n, r, o, i = arguments;
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
            }(this, function(a) {
                switch (a.label) {
                    case 0:
                        t = i.length > 1 && void 0 !== i[1] && i[1], n = i.length > 2 && void 0 !== i[2] && i[2], a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, (0, y.httpGetWithCountryCodeQuery)({
                            url: I.Endpoints.GIFT_CODE_RESOLVE(e),
                            query: {
                                with_application: t,
                                with_subscription_plan: n
                            },
                            oldFormErrors: !0
                        })];
                    case 2:
                        return r = a.sent().body, d.default.track(I.AnalyticEvents.GIFT_CODE_RESOLVED, {
                            resolved: !0,
                            gift_code: r.code,
                            gift_code_max_uses: r.max_uses,
                            sku_id: r.store_listing.sku.id,
                            sku_type: r.store_listing.sku.type,
                            application_id: r.store_listing.sku.application_id,
                            store_title: r.store_listing.sku.name
                        }, {
                            flush: !0
                        }), [2, r];
                    case 3:
                        throw o = a.sent(), d.default.track(I.AnalyticEvents.GIFT_CODE_RESOLVED, {
                            resolved: !1,
                            gift_code: e
                        }), new s.default(o);
                    case 4:
                        return [2]
                }
            })
        }, (W = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    S(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    S(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }

    function K(e, t) {
        d.default.track(I.AnalyticEvents.GIFT_CODE_COPIED, function(e) {
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
        }({}, (0, l.default)(t, !1, !1), e.analyticsData))
    }

    function z(e, t, n, r, o, i, a) {
        return null == n && (r || o || null == e) ? !a || i || r || o ? r && (t.isSubscription || null != e) ? I.GiftCodeModalStates.SUCCESS : I.GiftCodeModalStates.CONFIRM : I.GiftCodeModalStates.OPEN : I.GiftCodeModalStates.ERROR
    }

    function X(e, t, n) {
        switch (e) {
            case I.GiftCodeModalStates.ERROR:
                return O.default.Messages.GIFT_CONFIRMATION_HEADER_FAIL;
            case I.GiftCodeModalStates.SUCCESS:
                return t.isSubscription ? O.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS_NITRO.format({
                    skuName: n.name
                }) : O.default.Messages.GIFT_CONFIRMATION_HEADER_SUCCESS;
            case I.GiftCodeModalStates.CONFIRM:
            default:
                return t.isSubscription ? O.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM_NITRO.format({
                    skuName: n.name
                }) : O.default.Messages.GIFT_CONFIRMATION_HEADER_CONFIRM
        }
    }

    function q(e, t, n) {
        switch (e) {
            case I.GiftCodeModalStates.ERROR:
                return O.default.Messages.GIFT_CONFIRMATION_BUTTON_FAIL;
            case I.GiftCodeModalStates.SUCCESS:
                if (__OVERLAY__) return O.default.Messages.GIFT_CONFIRMATION_BUTTON_NOICE;
                if (t.isSubscription) return O.default.Messages.GIFT_CONFIRMATION_BUTTON_SUBSCRIPTION_SUCCESS;
                return O.default.Messages.GIFT_CONFIRMATION_BUTTON_GO_TO_LIBRARY;
            case I.GiftCodeModalStates.OPEN:
                return O.default.Messages.GIFT_OPEN_PROMPT;
            case I.GiftCodeModalStates.CONFIRM:
            default:
                if (null != n && n) return O.default.Messages.GIFT_CODE_AUTH_ACCEPT;
                if (null != t.giftStyle) return t.isClaimed ? O.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM : O.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_MOBILE;
                return t.isSubscription ? O.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM_SUBSCRIPTION : O.default.Messages.GIFT_CONFIRMATION_BUTTON_CONFIRM
        }
    }

    function Q(e) {
        var t, n = e.step,
            r = e.sku,
            o = e.libraryApplication,
            a = e.error,
            u = e.accepted,
            s = e.accepting,
            l = e.onGoToLibrary,
            c = e.subscriptionPlan,
            f = void 0 === c ? null : c;
        switch (n) {
            case I.GiftCodeModalStates.ERROR:
                return J(o, a, u, s, l);
            case I.GiftCodeModalStates.SUCCESS:
                if (null != f) {
                    ;
                    return t = f, (0, i.match)(t).with({
                        interval: h.SubscriptionIntervalTypes.MONTH,
                        premiumSubscriptionType: h.PremiumTypes.TIER_2
                    }, function() {
                        return O.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                            timeInterval: O.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                        })
                    }).with({
                        interval: h.SubscriptionIntervalTypes.YEAR,
                        premiumSubscriptionType: h.PremiumTypes.TIER_2
                    }, function() {
                        return O.default.Messages.PREMIUM_FEATURES_TIER_2.format({
                            timeInterval: O.default.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_YEAR
                        })
                    }).with({
                        interval: h.SubscriptionIntervalTypes.MONTH,
                        premiumSubscriptionType: h.PremiumTypes.TIER_1
                    }, function() {
                        return O.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_MONTHLY.format({
                            intervalCount: t.intervalCount
                        })
                    }).with({
                        interval: h.SubscriptionIntervalTypes.YEAR,
                        premiumSubscriptionType: h.PremiumTypes.TIER_1
                    }, function() {
                        return O.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_PREMIUM_TIER_1_YEARLY.format({
                            intervalCount: t.intervalCount
                        })
                    }).otherwise(function() {
                        return O.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS_GENERIC
                    })
                }
                return O.default.Messages.GIFT_CONFIRMATION_BODY_SUCCESS.format({
                    skuName: r.name
                });
            case I.GiftCodeModalStates.CONFIRM:
            default:
                if (null != f) return (f.interval === h.SubscriptionIntervalTypes.MONTH ? O.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_MONTHLY_CONFIRM : O.default.Messages.GIFT_CONFIRMATION_BODY_SUBSCRIPTION_YEARLY_CONFIRM).format({
                    skuName: r.name,
                    intervalCount: f.intervalCount
                });
                return O.default.Messages.GIFT_CONFIRMATION_BODY_CONFIRM.format({
                    skuName: r.name
                })
        }
    }

    function J(e, t, n, r, o) {
        var i = O.default.Messages.GIFT_CONFIRMATION_BODY_OWNED.format({
            onGoToLibrary: o
        });
        return null != (n || r ? void 0 : e) ? i : null == t ? null : function(e, t) {
            switch (e.code) {
                case I.AbortCodes.INVALID_GIFT_SELF_REDEMPTION:
                    return O.default.Messages.GIFT_CONFIRMATION_BODY_SELF_GIFT_NO_PAYMENT;
                case I.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                    return O.default.Messages.GIFT_CONFIRMATION_BODY_CLAIMED;
                case I.AbortCodes.INVALID_GIFT_REDEMPTION_OWNED:
                    return O.default.Messages.GIFT_ERROR_OWNED;
                case I.AbortCodes.UNKNOWN_GIFT_CODE:
                    return O.default.Messages.GIFT_CONFIRMATION_BODY_INVALID;
                case I.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_INCOMPATIBLE:
                    return O.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_MISMATCH.format({
                        planName: (0, p.isPremiumExactly)(t, h.PremiumTypes.TIER_2) ? O.default.Messages.PREMIUM_TIER_2 : O.default.Messages.PREMIUM_TIER_1
                    });
                case I.AbortCodes.INVALID_GIFT_REDEMPTION_SUBSCRIPTION_MANAGED:
                    return O.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_SUBSCRIPTION_MANAGED;
                case I.AbortCodes.INVALID_GIFT_REDEMPTION_INVOICE_OPEN:
                    return O.default.Messages.GIFT_CONFIRMATION_BODY_ERROR_INVOICE_OPEN;
                case I.AbortCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED:
                    return O.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT;
                case I.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE:
                    return O.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID;
                default:
                    return O.default.Messages.GIFT_CONFIRMATION_BODY_UNKNOWN_ERROR
            }
        }(t, f.default.getCurrentUser())
    }

    function Z(e, t, n) {
        var r = t.applicationId,
            o = e.length > 0 ? e : [r],
            i = o.map(function(e) {
                return n.getLibraryApplication(r, e, !0)
            }).filter(_.isNotNullish);
        return i.length === o.length ? i[0] : null
    }

    function $(e) {
        var t = e.trim().split("/").pop().match(w);
        if (null == t) return null;
        var n = v(t, 3),
            r = (n[0], n[1], n[2]);
        return null == r ? null : r.replace(/-/g, "")
    }
    var ee = function(e, t) {
        return (0, u.useStateFromStores)([c.default], function() {
            if (null == e || !t) return null;
            var n = c.default.getGiftCode(e);
            return null == n || "" === n ? null : n
        })
    }
}