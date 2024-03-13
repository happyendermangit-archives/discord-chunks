function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getStoreListingLocation: function() {
            return A
        },
        getApplicationStoreListingLocation: function() {
            return y
        },
        getAssetURL: function() {
            return N
        },
        httpGetWithCountryCodeQuery: function() {
            return R
        },
        nativePlatformTypeToSKUOperatingSystem: function() {
            return O
        },
        skuOperatingSystemToText: function() {
            return D
        },
        getPrimarySKUForApplication: function() {
            return P
        },
        getSocialRecommendationReasons: function() {
            return L
        },
        getNonSocialRecommendationReasons: function() {
            return U
        }
    }), n("424973"), n("462568"), n("222007"), n("70102"), n("702976");
    var i = n("917351"),
        s = n.n(i),
        r = n("866227"),
        a = n.n(r),
        o = n("642852"),
        l = n.n(o),
        u = n("394846"),
        d = n("872717"),
        c = n("850068"),
        f = n("407063"),
        _ = n("160299"),
        h = n("357957"),
        E = n("521012"),
        g = n("560528"),
        m = n("568734"),
        p = n("449008"),
        S = n("773336"),
        v = n("299039"),
        T = n("49111"),
        I = n("782340");
    l.shim();
    let C = !u.isMobile && !u.isTablet && -1 !== (0, g.getChromeVersion)();

    function A(e, t) {
        let {
            analyticsSource: n,
            analyticsProperties: i,
            storeListingId: s,
            slug: r,
            channelId: a,
            guildId: o
        } = t;
        return {
            pathname: null != a && null != o ? T.Routes.CHANNEL(o, a, e) : T.Routes.APPLICATION_STORE_LISTING_SKU(e, r),
            state: {
                analyticsSource: n,
                analyticsProperties: i
            },
            search: null != s ? "?store_listing_id=".concat(s) : ""
        }
    }

    function y(e, t) {
        let {
            analyticsSource: n,
            analyticsProperties: i,
            slug: s
        } = t;
        return {
            pathname: T.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, s),
            state: {
                analyticsSource: n,
                analyticsProperties: i
            }
        }
    }

    function N(e, t, n, i) {
        var s;
        let r;
        let a = window.GLOBAL_ENV.CDN_HOST;
        if (null == i) switch (t.mimeType || t.mime_type) {
            case "video/quicktime":
            case "video/mp4":
                i = "mp4";
                break;
            case "image/gif":
                i = "gif";
                break;
            default:
                i = "webp"
        }
        "webp" === i && !C && (i = "png");
        let o = "string" == typeof t ? t : t.id,
            l = (s = "https:", "https:");
        return r = null != a ? "".concat(l, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(o, ".").concat(i) : "".concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(T.Endpoints.STORE_ASSET(e, o, i)), null != n && (r += "?size=".concat((0, f.getBestMediaProxySize)(n * (0, f.getDevicePixelRatio)()))), r
    }
    async function R(e) {
        var t, n, i, s;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (r) {
            let e = [];
            !h.default.hasFetchedPaymentSources && e.push(null !== (n = _.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, c.fetchPaymentSources)()), !_.default.ipCountryCodeLoaded && e.push((0, c.fetchIpCountryCode)()), e.push(new Promise(async e => {
                if (E.default.hasFetchedSubscriptions()) e();
                else if (_.default.isSubscriptionFetching) {
                    let t = () => {
                        _.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                    };
                    t()
                } else await (0, c.fetchSubscriptions)(), e()
            })), await Promise.allSettled(e)
        }
        let a = h.default.getDefaultBillingCountryCode(),
            o = null !== (i = null === (t = h.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
            l = E.default.getPremiumTypeSubscription();
        null != l && null != l.paymentSourceId && (o = l.paymentSourceId), null === a && (a = null !== (s = _.default.ipCountryCode) && void 0 !== s ? s : null);
        let u = {};
        if (null != a && (u.country_code = a), null != o && (u.payment_source_id = o), null != a || null != o) {
            if ("string" == typeof e) {
                let t = {
                    url: e,
                    oldFormErrors: !0
                };
                e = t
            }
            if ("string" == typeof e.query) throw Error("string query not supported");
            e.query = {
                ...u,
                ...e.query
            }
        }
        return d.default.get(e)
    }

    function O(e) {
        switch (e) {
            case S.PlatformTypes.WINDOWS:
                return T.OperatingSystems.WINDOWS;
            case S.PlatformTypes.OSX:
                return T.OperatingSystems.MACOS;
            case S.PlatformTypes.LINUX:
                return T.OperatingSystems.LINUX;
            default:
                return null
        }
    }

    function D(e) {
        switch (e) {
            case T.OperatingSystems.WINDOWS:
                return I.default.Messages.WINDOWS;
            case T.OperatingSystems.MACOS:
                return I.default.Messages.MACOS;
            case T.OperatingSystems.LINUX:
                return I.default.Messages.LINUX
        }
        throw Error("Unknown operating system value: ".concat(e))
    }

    function P(e, t, n) {
        let i = t.getApplication(e);
        return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId)
    }
    let M = [];

    function L(e, t, n, i, r) {
        let a = t.get(e);
        if (null == a) return M;
        let o = a.applicationId,
            l = [],
            u = [],
            d = function(e, t, n) {
                var i;
                let s = null !== (i = n.getNowPlaying(e)) && void 0 !== i ? i : {},
                    r = v.default.keys(s),
                    a = r.map(e => {
                        let n = t.getUser(e);
                        return null == n ? null : {
                            user: n,
                            startTime: s[n.id].startedPlaying
                        }
                    }).filter(p.isNotNullish).sort((e, t) => t.startTime - e.startTime);
                return 0 === a.length ? null : {
                    type: T.StoreRecommendationTypes.NOW_PLAYING,
                    userInfo: a
                }
            }(o, n, i);
        null != d && (l.push(d), u = d.userInfo.map(e => {
            let {
                user: t
            } = e;
            return t.id
        }));
        let c = r.getStatisticsForApplication(o);
        if (null != c) {
            let e = c.map(e => e.user_id);
            if (s.difference(e, u).length > 0) {
                let e = function(e, t, n) {
                    let i = n.getStatisticsForApplication(e);
                    if (null == i) return null;
                    let s = i.map(e => {
                        let n = t.getUser(e.user_id);
                        return null == n ? null : {
                            user: n,
                            endTime: Date.parse(e.last_played_at)
                        }
                    }).filter(p.isNotNullish).sort((e, t) => t.endTime - e.endTime);
                    return 0 === s.length ? null : {
                        type: T.StoreRecommendationTypes.EVER_PLAYED,
                        userInfo: s
                    }
                }(o, n, r);
                null != e && l.push(e)
            }
        }
        return l
    }
    let b = [];

    function U(e, t, n) {
        let i = t.get(e),
            s = n.getForSKU(e);
        if (null == i || null == s) return b;
        let r = [];
        (0, m.hasFlag)(i.flags, T.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && r.push({
            type: T.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
        });
        let o = i.releaseDate;
        return null != o && 3 > a().diff(o, "months") && (i.accessType === T.SKUAccessTypes.EARLY_ACCESS ? r.push({
            type: T.StoreRecommendationTypes.EARLY_ACCESS,
            releaseDate: o
        }) : r.push({
            type: T.StoreRecommendationTypes.RECENT_RELEASE_DATE,
            releaseDate: o
        })), null != s.flavorText && r.push({
            type: T.StoreRecommendationTypes.FLAVOR_TEXT,
            flavorText: s.flavorText
        }), r
    }
}