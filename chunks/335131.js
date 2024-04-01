function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        claimPremiumCollectiblesProduct: function() {
            return A
        },
        closeCollectiblesShop: function() {
            return c
        },
        fetchCollectiblesCategories: function() {
            return T
        },
        fetchCollectiblesProduct: function() {
            return S
        },
        fetchCollectiblesPurchases: function() {
            return f
        },
        openCollectiblesShop: function() {
            return _
        },
        productDetailsClosed: function() {
            return I
        },
        productDetailsOpened: function() {
            return E
        },
        setCollectiblesCategoryItemsViewed: function() {
            return m
        },
        validateCollectiblesRecipient: function() {
            return h
        }
    });
    var i = n("544891"),
        r = n("570140"),
        s = n("37234"),
        a = n("881052"),
        o = n("549616"),
        l = n("778787"),
        u = n("161226"),
        d = n("981631");
    n("597688"), n("574709"), n("1870"), n("328347");
    let _ = e => {
            let {
                openInLayer: t = !0,
                ...n
            } = e;
            r.default.dispatch({
                type: "COLLECTIBLES_SHOP_OPEN",
                ...n
            }), t && (0, s.pushLayer)(d.Layers.COLLECTIBLES_SHOP)
        },
        c = () => {
            r.default.dispatch({
                type: "COLLECTIBLES_SHOP_CLOSE"
            }), (0, s.popLayer)()
        },
        E = e => {
            r.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                item: e
            })
        },
        I = e => {
            r.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_DETAILS_CLOSE",
                item: e
            })
        },
        T = async e => {
            r.default.dispatch({
                type: "COLLECTIBLES_CATEGORIES_FETCH"
            });
            let t = {};
            null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), null != e.countryCode && (t.countryCode = e.countryCode));
            try {
                let e = await i.HTTP.get({
                    url: d.Endpoints.COLLECTIBLES_CATEGORIES,
                    query: t
                });
                r.default.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
                    categories: e.body.map(o.default.fromServer)
                })
            } catch (e) {
                throw r.default.dispatch({
                    type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
                    error: e
                }), new a.APIError(e)
            }
        }, f = async () => {
            r.default.dispatch({
                type: "COLLECTIBLES_PURCHASES_FETCH"
            });
            try {
                let e = await i.HTTP.get(d.Endpoints.COLLECTIBLES_PURCHASES);
                r.default.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
                    purchases: e.body.map(u.default.fromServer)
                })
            } catch (e) {
                throw r.default.dispatch({
                    type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
                    error: e
                }), new a.APIError(e)
            }
        }, S = async (e, t) => {
            r.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH"
            });
            try {
                let n = await i.HTTP.get({
                    url: d.Endpoints.COLLECTIBLES_PRODUCTS(e),
                    query: null != t ? {
                        country_code: t
                    } : {}
                });
                r.default.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                    product: l.default.fromServer(n.body)
                })
            } catch (e) {
                throw r.default.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    error: e
                }), new a.APIError(e)
            }
        }, A = async e => {
            r.default.dispatch({
                type: "COLLECTIBLES_CLAIM",
                skuId: e
            });
            try {
                var t;
                let n = await i.HTTP.put({
                    url: d.Endpoints.COLLECTIBLES_CLAIM,
                    body: {
                        sku_id: e
                    }
                });
                r.default.dispatch({
                    type: "COLLECTIBLES_CLAIM_SUCCESS",
                    skuId: e,
                    purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(u.default.fromServer)
                })
            } catch (t) {
                throw r.default.dispatch({
                    type: "COLLECTIBLES_CLAIM_FAILURE",
                    skuId: e,
                    error: t
                }), new a.APIError(t)
            }
        }, h = async (e, t) => {
            try {
                return (await i.HTTP.get({
                    url: d.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
                    query: {
                        sku_id: t,
                        recipient_id: e
                    }
                })).body.valid
            } catch (e) {
                throw new a.APIError(e)
            }
        }, m = e => {
            r.default.dispatch({
                type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                ...e
            })
        }
}