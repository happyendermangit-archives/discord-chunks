function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        openCollectiblesShop: function() {
            return a
        },
        closeCollectiblesShop: function() {
            return C
        },
        productDetailsOpened: function() {
            return _
        },
        fetchCollectiblesCategories: function() {
            return d
        },
        fetchCollectiblesPurchases: function() {
            return I
        },
        fetchCollectiblesProduct: function() {
            return A
        },
        claimPremiumCollectiblesProduct: function() {
            return S
        },
        validateCollectiblesRecipient: function() {
            return L
        },
        setCollectiblesCategoryItemsViewed: function() {
            return T
        }
    });
    var u = r("872717"),
        n = r("913144"),
        i = r("54239"),
        s = r("448993"),
        E = r("514296"),
        l = r("407788"),
        c = r("489134"),
        o = r("49111");
    r("853987"), r("426497"), r("775416"), r("216719");
    let a = e => {
            let {
                openInLayer: t = !0,
                ...r
            } = e;
            n.default.dispatch({
                type: "COLLECTIBLES_SHOP_OPEN",
                ...r
            }), t && (0, i.pushLayer)(o.Layers.COLLECTIBLES_SHOP)
        },
        C = () => {
            n.default.dispatch({
                type: "COLLECTIBLES_SHOP_CLOSE"
            }), (0, i.popLayer)()
        },
        _ = e => {
            n.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                item: e
            })
        },
        d = async e => {
            n.default.dispatch({
                type: "COLLECTIBLES_CATEGORIES_FETCH"
            });
            let t = {};
            null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), null != e.countryCode && (t.countryCode = e.countryCode));
            try {
                let e = await u.default.get({
                    url: o.Endpoints.COLLECTIBLES_CATEGORIES,
                    query: t
                });
                n.default.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: e.body.map(E.default.fromServer)
                })
            } catch (e) {
                throw n.default.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e
                }), new s.APIError(e)
            }
        }, I = async () => {
            n.default.dispatch({
                type: "COLLECTIBLES_PURCHASES_FETCH"
            });
            try {
                let e = await u.default.get(o.Endpoints.COLLECTIBLES_PURCHASES);
                n.default.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: e.body.map(c.default.fromServer)
                })
            } catch (e) {
                throw n.default.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e
                }), new s.APIError(e)
            }
        }, A = async (e, t) => {
            n.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH"
            });
            try {
                let r = await u.default.get({
                    url: o.Endpoints.COLLECTIBLES_PRODUCTS(e),
                    query: null != t ? {
                        country_code: t
                    } : {}
                });
                n.default.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                    product: l.default.fromServer(r.body)
                })
            } catch (e) {
                throw n.default.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    error: e
                }), new s.APIError(e)
            }
        }, S = async e => {
            n.default.dispatch({
                type: "COLLECTIBLES_CLAIM",
                skuId: e
            });
            try {
                var t;
                let r = await u.default.put({
                    url: o.Endpoints.COLLECTIBLES_CLAIM,
                    body: {
                        sku_id: e
                    }
                });
                n.default.dispatch({
                    type: "COLLECTIBLES_CLAIM_SUCCESS",
                    skuId: e,
                    purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(c.default.fromServer)
                })
            } catch (t) {
                throw n.default.dispatch({
                    type: "COLLECTIBLES_CLAIM_FAILURE",
                    skuId: e,
                    error: t
                }), new s.APIError(t)
            }
        }, L = async (e, t) => {
            try {
                let r = await u.default.get({
                    url: o.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    }
                });
                return r.body.valid
            } catch (e) {
                throw new s.APIError(e)
            }
        }, T = e => {
            n.default.dispatch({
                type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                ...e
            })
        }
}