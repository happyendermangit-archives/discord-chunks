function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationStoreListingLocation: function() {
            return C
        },
        getAssetURL: function() {
            return g
        },
        getNonSocialRecommendationReasons: function() {
            return b
        },
        getPrimarySKUForApplication: function() {
            return M
        },
        getSocialRecommendationReasons: function() {
            return P
        },
        getStoreListingLocation: function() {
            return R
        },
        httpGetWithCountryCodeQuery: function() {
            return L
        },
        nativePlatformTypeToSKUOperatingSystem: function() {
            return D
        },
        skuOperatingSystemToText: function() {
            return v
        }
    }), n("653041"), n("998459"), n("47120"), n("411104"), n("789020");
    var i = n("392711"),
        r = n.n(i),
        s = n("913527"),
        a = n.n(s),
        o = n("991637"),
        l = n.n(o),
        u = n("873546"),
        d = n("544891"),
        _ = n("355467"),
        c = n("134432"),
        E = n("351402"),
        I = n("853872"),
        T = n("78839"),
        f = n("526167"),
        S = n("630388"),
        A = n("823379"),
        h = n("358085"),
        m = n("709054"),
        N = n("981631"),
        O = n("689938");
    l().shim();
    let p = !u.isMobile && !u.isTablet && -1 !== (0, f.getChromeVersion)();

    function R(e, t) {
        let {
            analyticsSource: n,
            analyticsProperties: i,
            storeListingId: r,
            slug: s,
            channelId: a,
            guildId: o
        } = t;
        return {
            pathname: null != a && null != o ? N.Routes.CHANNEL(o, a, e) : N.Routes.APPLICATION_STORE_LISTING_SKU(e, s),
            state: {
                analyticsSource: n,
                analyticsProperties: i
            },
            search: null != r ? "?store_listing_id=".concat(r) : ""
        }
    }

    function C(e, t) {
        let {
            analyticsSource: n,
            analyticsProperties: i,
            slug: r
        } = t;
        return {
            pathname: N.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, r),
            state: {
                analyticsSource: n,
                analyticsProperties: i
            }
        }
    }

    function g(e, t, n, i) {
        var r;
        let s;
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
        "webp" === i && !p && (i = "png");
        let o = "string" == typeof t ? t : t.id,
            l = (r = "https:", "https:");
        return s = null != a ? "".concat(l, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(o, ".").concat(i) : "".concat(l).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(N.Endpoints.STORE_ASSET(e, o, i)), null != n && (s += "?size=".concat((0, c.getBestMediaProxySize)(n * (0, c.getDevicePixelRatio)()))), s
    }
    async function L(e) {
        var t, n, i, r;
        let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        if (s) {
            let e = [];
            !I.default.hasFetchedPaymentSources && e.push(null !== (n = E.default.paymentSourcesFetchRequest) && void 0 !== n ? n : (0, _.fetchPaymentSources)()), !E.default.ipCountryCodeLoaded && e.push((0, _.fetchIpCountryCode)()), e.push(new Promise(async e => {
                if (T.default.hasFetchedSubscriptions()) e();
                else if (E.default.isSubscriptionFetching) {
                    let t = () => {
                        E.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                    };
                    t()
                } else await (0, _.fetchSubscriptions)(), e()
            })), await Promise.allSettled(e)
        }
        let a = I.default.getDefaultBillingCountryCode(),
            o = null !== (i = null === (t = I.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null,
            l = T.default.getPremiumTypeSubscription();
        null != l && null != l.paymentSourceId && (o = l.paymentSourceId), null === a && (a = null !== (r = E.default.ipCountryCode) && void 0 !== r ? r : null);
        let u = {};
        if (null != a && (u.country_code = a), null != o && (u.payment_source_id = o), null != a || null != o) {
            if ("string" == typeof e && (e = {
                    url: e,
                    oldFormErrors: !0
                }), "string" == typeof e.query) throw Error("string query not supported");
            e.query = {
                ...u,
                ...e.query
            }
        }
        return d.HTTP.get(e)
    }

    function D(e) {
        switch (e) {
            case h.PlatformTypes.WINDOWS:
                return N.OperatingSystems.WINDOWS;
            case h.PlatformTypes.OSX:
                return N.OperatingSystems.MACOS;
            case h.PlatformTypes.LINUX:
                return N.OperatingSystems.LINUX;
            default:
                return null
        }
    }

    function v(e) {
        switch (e) {
            case N.OperatingSystems.WINDOWS:
                return O.default.Messages.WINDOWS;
            case N.OperatingSystems.MACOS:
                return O.default.Messages.MACOS;
            case N.OperatingSystems.LINUX:
                return O.default.Messages.LINUX
        }
        throw Error("Unknown operating system value: ".concat(e))
    }

    function M(e, t, n) {
        let i = t.getApplication(e);
        return null == i || null == i.primarySkuId ? null : n.get(i.primarySkuId)
    }
    let y = [];

    function P(e, t, n, i, s) {
        let a = t.get(e);
        if (null == a) return y;
        let o = a.applicationId,
            l = [],
            u = [],
            d = function(e, t, n) {
                var i;
                let r = null !== (i = n.getNowPlaying(e)) && void 0 !== i ? i : {},
                    s = m.default.keys(r).map(e => {
                        let n = t.getUser(e);
                        return null == n ? null : {
                            user: n,
                            startTime: r[n.id].startedPlaying
                        }
                    }).filter(A.isNotNullish).sort((e, t) => t.startTime - e.startTime);
                return 0 === s.length ? null : {
                    type: N.StoreRecommendationTypes.NOW_PLAYING,
                    userInfo: s
                }
            }(o, n, i);
        null != d && (l.push(d), u = d.userInfo.map(e => {
            let {
                user: t
            } = e;
            return t.id
        }));
        let _ = s.getStatisticsForApplication(o);
        if (null != _) {
            let e = _.map(e => e.user_id);
            if (r().difference(e, u).length > 0) {
                let e = function(e, t, n) {
                    let i = n.getStatisticsForApplication(e);
                    if (null == i) return null;
                    let r = i.map(e => {
                        let n = t.getUser(e.user_id);
                        return null == n ? null : {
                            user: n,
                            endTime: Date.parse(e.last_played_at)
                        }
                    }).filter(A.isNotNullish).sort((e, t) => t.endTime - e.endTime);
                    return 0 === r.length ? null : {
                        type: N.StoreRecommendationTypes.EVER_PLAYED,
                        userInfo: r
                    }
                }(o, n, s);
                null != e && l.push(e)
            }
        }
        return l
    }
    let U = [];

    function b(e, t, n) {
        let i = t.get(e),
            r = n.getForSKU(e);
        if (null == i || null == r) return U;
        let s = [];
        (0, S.hasFlag)(i.flags, N.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && s.push({
            type: N.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
        });
        let o = i.releaseDate;
        return null != o && 3 > a()().diff(o, "months") && (i.accessType === N.SKUAccessTypes.EARLY_ACCESS ? s.push({
            type: N.StoreRecommendationTypes.EARLY_ACCESS,
            releaseDate: o
        }) : s.push({
            type: N.StoreRecommendationTypes.RECENT_RELEASE_DATE,
            releaseDate: o
        })), null != r.flavorText && s.push({
            type: N.StoreRecommendationTypes.FLAVOR_TEXT,
            flavorText: r.flavorText
        }), s
    }
}