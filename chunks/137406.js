function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007"), n("702976");
    var i, r = n("866227"),
        s = n.n(r),
        a = n("666038"),
        o = n("568734"),
        l = n("653047"),
        u = n("49111");
    let c = ["500428425362931713", "451550535720501248", "471376328319303681", "466696214818193408"];
    i = class e extends a.default {
        static createFromServer(t) {
            var n, i, r, a, o;
            let {
                price: u
            } = t;
            return new e({
                id: t.id,
                type: t.type,
                applicationId: t.application_id,
                application: null != t.application ? l.default.createFromServer(t.application) : null,
                productLine: t.product_line,
                name: null !== (n = t.name) && void 0 !== n ? n : "",
                releaseDate: null != t.release_date ? s(t.release_date) : null,
                preorderReleaseAt: null != t.preorder_release_at ? s(t.preorder_release_at) : null,
                preorderApproximateReleaseDate: t.preorder_approximate_release_date,
                summary: t.summary,
                features: new Set(t.features),
                genres: new Set(t.genres),
                dependentSkuId: t.dependent_sku_id,
                manifests: t.manifests,
                availableRegions: t.available_regions,
                accessType: t.access_type,
                systemRequirements: t.system_requirements,
                contentRating: t.content_rating,
                contentRatingAgency: t.content_rating_agency,
                legalNotice: t.legal_notice,
                price: null != u ? {
                    amount: u.amount,
                    currency: u.currency,
                    saleAmount: u.sale_amount,
                    salePercentage: u.sale_percentage,
                    premium: u.premium
                } : null,
                premium: null !== (i = t.premium) && void 0 !== i && i,
                showAgeGate: t.show_age_gate || !1,
                restricted: t.restricted || !1,
                slug: null !== (r = t.slug) && void 0 !== r ? r : "",
                exclusive: t.exclusive || !1,
                locales: null !== (a = t.locales) && void 0 !== a ? a : ["en-US"],
                flags: t.flags,
                externalPurchaseUrl: t.external_purchase_url,
                deleted: null !== (o = t.deleted) && void 0 !== o && o
            })
        }
        get supportedOperatingSystems() {
            let e = null != this.systemRequirements ? Object.keys(this.systemRequirements) : [];
            return e.length > 0 ? e : [u.OperatingSystems.WINDOWS]
        }
        get isOnSale() {
            return null != this.price && null != this.price.saleAmount
        }
        isGiftable() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.price;
            return this.type === u.SKUTypes.DURABLE_PRIMARY && this.available && this.requiresPayment && null != e && u.GIFTABLE_CURRENCIES.has(e.currency) && null == this.externalPurchaseUrl
        }
        getPrice() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                {
                    price: n
                } = this;
            if (null == n) return null;
            if (null != e) {
                var i;
                let t = null === (i = n.premium) || void 0 === i ? void 0 : i[e];
                if (null != t) return {
                    amount: t.amount,
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
        getDisplaySalePercentage() {
            return null == this.price || null == this.price.salePercentage ? null : "-".concat(this.price.salePercentage, "%")
        }
        get requiresPayment() {
            let e = this.getPrice();
            return !this.premium && null != e && e.amount > 0
        }
        get isTheGameAwardsWinner() {
            return c.includes(this.id)
        }
        get available() {
            return (0, o.hasFlag)(this.flags, u.SKUFlags.AVAILABLE) || null != this.externalPurchaseUrl
        }
        isAvailableForDistribution() {
            return this.available && null != this.getPrice() && null == this.externalPurchaseUrl && (!this.premium || (0, o.hasFlag)(this.flags, u.SKUFlags.PREMIUM_AND_DISTRIBUTION))
        }
        isAvailable() {
            return (0, o.hasFlag)(this.flags, u.SKUFlags.AVAILABLE)
        }
        isPremiumPerk() {
            return this.premium && ((0, o.hasFlag)(this.flags, u.SKUFlags.PREMIUM_PURCHASE) || (0, o.hasFlag)(this.flags, u.SKUFlags.PREMIUM_AND_DISTRIBUTION))
        }
        hasFeature(e) {
            return this.features.has(e)
        }
        isPreorder() {
            return null != this.preorderReleaseAt || null != this.preorderApproximateReleaseDate
        }
        constructor(e) {
            super(), this.id = e.id, this.type = e.type, this.applicationId = e.applicationId, this.application = e.application, this.productLine = e.productLine, this.name = e.name, this.preorderReleaseAt = e.preorderReleaseAt, this.preorderApproximateReleaseDate = e.preorderApproximateReleaseDate, this.releaseDate = e.releaseDate, this.summary = e.summary, this.features = e.features, this.genres = e.genres, this.dependentSkuId = e.dependentSkuId, this.manifests = e.manifests, this.availableRegions = e.availableRegions, this.accessType = e.accessType, this.systemRequirements = e.systemRequirements, this.contentRating = e.contentRating, this.contentRatingAgency = e.contentRatingAgency, this.legalNotice = e.legalNotice, this.price = e.price, this.premium = e.premium, this.showAgeGate = e.showAgeGate, this.restricted = e.restricted, this.slug = e.slug, this.exclusive = e.exclusive, this.locales = e.locales, this.flags = e.flags, this.externalPurchaseUrl = e.externalPurchaseUrl || null, this.deleted = e.deleted
        }
    }
}