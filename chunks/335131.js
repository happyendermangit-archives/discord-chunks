function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        claimPremiumCollectiblesProduct: function() {
            return S
        },
        closeCollectiblesShop: function() {
            return c
        },
        fetchCollectiblesCategories: function() {
            return I
        },
        fetchCollectiblesProduct: function() {
            return f
        },
        fetchCollectiblesPurchases: function() {
            return T
        },
        openCollectiblesShop: function() {
            return _
        },
        productDetailsOpened: function() {
            return E
        },
        setCollectiblesCategoryItemsViewed: function() {
            return A
        },
        validateCollectiblesRecipient: function() {
            return h
        }
    });
    var i = n("544891"),
        r = n("570140"),
        a = n("37234"),
        s = n("881052");
    n("777639");
    var o = n("549616"),
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
            }), t && (0, a.pushLayer)(d.Layers.COLLECTIBLES_SHOP)
        },
        c = () => {
            r.default.dispatch({
                type: "COLLECTIBLES_SHOP_CLOSE"
            }), (0, a.popLayer)()
        },
        E = e => {
            r.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
                item: e
            })
        },
        I = async e => {
            r.default.dispatch({
                type: "COLLECTIBLES_CATEGORIES_FETCH"
            });
            let t = {};
            null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
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
                }), new s.APIError(e)
            }
        }, T = async () => {
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
                }), new s.APIError(e)
            }
        }, f = async (e, t) => {
            r.default.dispatch({
                type: "COLLECTIBLES_PRODUCT_FETCH",
                skuId: e
            });
            try {
                let n = {};
                (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
                let a = await i.HTTP.get({
                    url: d.Endpoints.COLLECTIBLES_PRODUCTS(e),
                    query: n
                });
                r.default.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
                    skuId: e,
                    product: l.default.fromServer(a.body)
                })
            } catch (t) {
                throw r.default.dispatch({
                    type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
                    skuId: e,
                    error: t
                }), new s.APIError(t)
            }
        }, S = async e => {
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
                }), new s.APIError(t)
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
                throw new s.APIError(e)
            }
        }, A = e => {
            r.default.dispatch({
                type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
                ...e
            })
        }
}