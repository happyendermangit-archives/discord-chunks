function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("864842"),
        a = n("947248"),
        u = n("338140"),
        s = n("281767");

    function l(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = ["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"],
        p = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(y, e);
            var t, n, r, i, p, m = (t = y, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : l(e)
            });

            function y(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, y), f(l(t = m.call(this)), "id", void 0), f(l(t), "type", void 0), f(l(t), "applicationId", void 0), f(l(t), "application", void 0), f(l(t), "productLine", void 0), f(l(t), "name", void 0), f(l(t), "releaseDate", void 0), f(l(t), "preorderReleaseAt", void 0), f(l(t), "preorderApproximateReleaseDate", void 0), f(l(t), "summary", void 0), f(l(t), "features", void 0), f(l(t), "genres", void 0), f(l(t), "dependentSkuId", void 0), f(l(t), "manifests", void 0), f(l(t), "availableRegions", void 0), f(l(t), "accessType", void 0), f(l(t), "systemRequirements", void 0), f(l(t), "contentRating", void 0), f(l(t), "contentRatingAgency", void 0), f(l(t), "legalNotice", void 0), f(l(t), "price", void 0), f(l(t), "premium", void 0), f(l(t), "showAgeGate", void 0), f(l(t), "restricted", void 0), f(l(t), "slug", void 0), f(l(t), "exclusive", void 0), f(l(t), "locales", void 0), f(l(t), "flags", void 0), f(l(t), "externalPurchaseUrl", void 0), f(l(t), "deleted", void 0), t.id = e.id, t.type = e.type, t.applicationId = e.applicationId, t.application = e.application, t.productLine = e.productLine, t.name = e.name, t.preorderReleaseAt = e.preorderReleaseAt, t.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate, t.releaseDate = e.releaseDate, t.summary = e.summary, t.features = e.features, t.genres = e.genres, t.dependentSkuId = e.dependentSkuId, t.manifests = e.manifests, t.availableRegions = e.availableRegions, t.accessType = e.accessType, t.systemRequirements = e.systemRequirements, t.contentRating = e.contentRating, t.contentRatingAgency = e.contentRatingAgency, t.legalNotice = e.legalNotice, t.price = e.price, t.premium = e.premium, t.showAgeGate = e.showAgeGate, t.restricted = e.restricted, t.slug = e.slug, t.exclusive = e.exclusive, t.locales = e.locales, t.flags = e.flags, t.externalPurchaseUrl = e.externalPurchaseUrl || null, t.deleted = e.deleted, t
            }
            return r = y, i = [{
                key: "supportedOperatingSystems",
                get: function() {
                    var e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
                    return e.length > 0 ? e : [s.OperatingSystems.WINDOWS]
                }
            }, {
                key: "isOnSale",
                get: function() {
                    return null != this.price && null != this.price.saleAmount
                }
            }, {
                key: "isGiftable",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
                    return this.type === s.SKUTypes.DURABLE_PRIMARY && this.available && this.requiresPayment && null != e && s.GIFTABLE_CURRENCIES.has(e.currency) && null == this.externalPurchaseUrl
                }
            }, {
                key: "getPrice",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = this.price;
                    if (null == n) return null;
                    if (null != e) {
                        var r, o = null === (r = n.premium) || void 0 === r ? void 0 : r[e];
                        if (null != o) return {
                            amount: o.amount,
                            currency: n.currency
                        }
                    }
                    return t && null != n.saleAmount ? {
                        amount: n.saleAmount,
                        currency: n.currency
                    } : {
                        amount: n.amount,
                        currency: n.currency
                    }
                }
            }, {
                key: "getDisplaySalePercentage",
                value: function() {
                    return null == this.price || null == this.price.salePercentage ? null : "-".concat(this.price.salePercentage, "%")
                }
            }, {
                key: "requiresPayment",
                get: function() {
                    var e = this.getPrice();
                    return !this.premium && null != e && e.amount > 0
                }
            }, {
                key: "isTheGameAwardsWinner",
                get: function() {
                    return E.includes(this.id)
                }
            }, {
                key: "available",
                get: function() {
                    return (0, a.hasFlag)(this.flags, s.SKUFlags.AVAILABLE) || null != this.externalPurchaseUrl
                }
            }, {
                key: "isAvailableForDistribution",
                value: function() {
                    return this.available && null != this.getPrice() && null == this.externalPurchaseUrl && (!this.premium || (0, a.hasFlag)(this.flags, s.SKUFlags.PREMIUM_AND_DISTRIBUTION))
                }
            }, {
                key: "isAvailable",
                value: function() {
                    return (0, a.hasFlag)(this.flags, s.SKUFlags.AVAILABLE)
                }
            }, {
                key: "isPremiumPerk",
                value: function() {
                    return this.premium && ((0, a.hasFlag)(this.flags, s.SKUFlags.PREMIUM_PURCHASE) || (0, a.hasFlag)(this.flags, s.SKUFlags.PREMIUM_AND_DISTRIBUTION))
                }
            }, {
                key: "hasFeature",
                value: function(e) {
                    return this.features.has(e)
                }
            }, {
                key: "isPreorder",
                value: function() {
                    return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate
                }
            }], p = [{
                key: "createFromServer",
                value: function(e) {
                    var t, n, r, i, a, s = e.price;
                    return new y({
                        id: e.id,
                        type: e.type,
                        applicationId: e.application_id,
                        application: null != e.application ? u.default.createFromServer(e.application) : null,
                        productLine: e.product_line,
                        name: null !== (t = e.name) && void 0 !== t ? t : "",
                        releaseDate: null != e.release_date ? o()(e.release_date) : null,
                        preorderReleaseAt: null != e.preorder_release_at ? o()(e.preorder_release_at) : null,
                        preorderApproximateReleaseDate: e.preorder_approximate_release_date,
                        summary: e.summary,
                        features: new Set(e.features),
                        genres: new Set(e.genres),
                        dependentSkuId: e.dependent_sku_id,
                        manifests: e.manifests,
                        availableRegions: e.available_regions,
                        accessType: e.access_type,
                        systemRequirements: e.system_requirements,
                        contentRating: e.content_rating,
                        contentRatingAgency: e.content_rating_agency,
                        legalNotice: e.legal_notice,
                        price: null != s ? {
                            amount: s.amount,
                            currency: s.currency,
                            saleAmount: s.sale_amount,
                            salePercentage: s.sale_percentage,
                            premium: s.premium
                        } : null,
                        premium: null !== (n = e.premium) && void 0 !== n && n,
                        showAgeGate: e.show_age_gate || !1,
                        restricted: e.restricted || !1,
                        slug: null !== (r = e.slug) && void 0 !== r ? r : "",
                        exclusive: e.exclusive || !1,
                        locales: null !== (i = e.locales) && void 0 !== i ? i : ["en-US"],
                        flags: e.flags,
                        externalPurchaseUrl: e.external_purchase_url,
                        deleted: null !== (a = e.deleted) && void 0 !== a && a
                    })
                }
            }], i && c(r.prototype, i), p && c(r, p), y
        }(i.default)
}