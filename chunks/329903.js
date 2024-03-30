function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getApplicationStoreListingLocation: function() {
            return C
        },
        getAssetURL: function() {
            return P
        },
        getNonSocialRecommendationReasons: function() {
            return j
        },
        getPrimarySKUForApplication: function() {
            return w
        },
        getSocialRecommendationReasons: function() {
            return G
        },
        getStoreListingLocation: function() {
            return R
        },
        httpGetWithCountryCodeQuery: function() {
            return D
        },
        nativePlatformTypeToSKUOperatingSystem: function() {
            return M
        },
        skuOperatingSystemToText: function() {
            return U
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("913527"),
        a = n.n(i),
        u = n("991637"),
        s = n.n(u),
        l = n("56300"),
        c = n("967888"),
        f = n("950175"),
        d = n("896299"),
        _ = n("362108"),
        E = n("534154"),
        p = n("428920"),
        m = n("513741"),
        y = n("947248"),
        I = n("162677"),
        h = n("374550"),
        O = n("523018"),
        T = n("281767"),
        S = n("941504");

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    v(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    v(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function A(e) {
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
    }

    function b(e, t) {
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
    }
    s().shim();
    var N = !l.isMobile && !l.isTablet && -1 !== (0, m.getChromeVersion)();

    function R(e, t) {
        var n = t.analyticsSource,
            r = t.analyticsProperties,
            o = t.storeListingId,
            i = t.slug,
            a = t.channelId,
            u = t.guildId;
        return A({
            pathname: null != a && null != u ? T.Routes.CHANNEL(u, a, e) : T.Routes.APPLICATION_STORE_LISTING_SKU(e, i)
        }, {
            state: {
                analyticsSource: n,
                analyticsProperties: r
            },
            search: null != o ? "?store_listing_id=".concat(o) : ""
        })
    }

    function C(e, t) {
        var n = t.analyticsSource,
            r = t.analyticsProperties,
            o = t.slug;
        return A({
            pathname: T.Routes.APPLICATION_STORE_LISTING_APPLICATION(e, o)
        }, {
            state: {
                analyticsSource: n,
                analyticsProperties: r
            }
        })
    }

    function P(e, t, n, r) {
        var o, i, a = window.GLOBAL_ENV.CDN_HOST;
        if (null == r) switch (t.mimeType || t.mime_type) {
            case "video/quicktime":
            case "video/mp4":
                r = "mp4";
                break;
            case "image/gif":
                r = "gif";
                break;
            default:
                r = "webp"
        }
        "webp" === r && !N && (r = "png");
        var u = "string" == typeof t ? t : t.id,
            s = (i = "https:", "https:");
        return o = null != a ? "".concat(s, "//").concat(a, "/app-assets/").concat(e, "/store/").concat(u, ".").concat(r) : "".concat(s).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(T.Endpoints.STORE_ASSET(e, u, r)), null != n && (o += "?size=".concat((0, d.getBestMediaProxySize)(n * (0, d.getDevicePixelRatio)()))), o
    }

    function D(e) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = g(function(e) {
            var t, n, r, o, i, a, u, s, l, d = arguments;
            return b(this, function(m) {
                switch (m.label) {
                    case 0:
                        var y;
                        if (!(!(d.length > 1) || void 0 === d[1] || d[1])) return [3, 2];
                        return n = [], !E.default.hasFetchedPaymentSources && n.push(null !== (r = _.default.paymentSourcesFetchRequest) && void 0 !== r ? r : (0, f.fetchPaymentSources)()), !_.default.ipCountryCodeLoaded && n.push((0, f.fetchIpCountryCode)()), n.push(new Promise((y = g(function(e) {
                            var t;
                            return b(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (!p.default.hasFetchedSubscriptions()) return [3, 1];
                                        return e(), [3, 4];
                                    case 1:
                                        if (!_.default.isSubscriptionFetching) return [3, 2];
                                        return (t = function() {
                                            _.default.isSubscriptionFetching ? setTimeout(t, 50) : e()
                                        })(), [3, 4];
                                    case 2:
                                        return [4, (0, f.fetchSubscriptions)()];
                                    case 3:
                                        n.sent(), e(), n.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        }), function(e) {
                            return y.apply(this, arguments)
                        }))), [4, Promise.allSettled(n)];
                    case 1:
                        m.sent(), m.label = 2;
                    case 2:
                        if (o = E.default.getDefaultBillingCountryCode(), a = null !== (i = null === (t = E.default.defaultPaymentSource) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null, null != (u = p.default.getPremiumTypeSubscription()) && null != u.paymentSourceId && (a = u.paymentSourceId), null === o && (o = null !== (s = _.default.ipCountryCode) && void 0 !== s ? s : null), l = {}, null != o && (l.country_code = o), null != a && (l.payment_source_id = a), null != o || null != a) {
                            if ("string" == typeof e && (e = {
                                    url: e,
                                    oldFormErrors: !0
                                }), "string" == typeof e.query) throw Error("string query not supported");
                            e.query = A({}, l, e.query)
                        }
                        return [2, c.HTTP.get(e)]
                }
            })
        })).apply(this, arguments)
    }

    function M(e) {
        switch (e) {
            case h.PlatformTypes.WINDOWS:
                return T.OperatingSystems.WINDOWS;
            case h.PlatformTypes.OSX:
                return T.OperatingSystems.MACOS;
            case h.PlatformTypes.LINUX:
                return T.OperatingSystems.LINUX;
            default:
                return null
        }
    }

    function U(e) {
        switch (e) {
            case T.OperatingSystems.WINDOWS:
                return S.default.Messages.WINDOWS;
            case T.OperatingSystems.MACOS:
                return S.default.Messages.MACOS;
            case T.OperatingSystems.LINUX:
                return S.default.Messages.LINUX
        }
        throw Error("Unknown operating system value: ".concat(e))
    }

    function w(e, t, n) {
        var r = t.getApplication(e);
        return null == r || null == r.primarySkuId ? null : n.get(r.primarySkuId)
    }
    var k = [];

    function G(e, t, n, r, i) {
        var a, u, s, l, c, f = t.get(e);
        if (null == f) return k;
        var d = f.applicationId,
            _ = [],
            E = [];
        var p = (a = d, u = n, l = null !== (s = r.getNowPlaying(a)) && void 0 !== s ? s : {}, 0 === (c = O.default.keys(l).map(function(e) {
            var t = u.getUser(e);
            return null == t ? null : {
                user: t,
                startTime: l[t.id].startedPlaying
            }
        }).filter(I.isNotNullish).sort(function(e, t) {
            return t.startTime - e.startTime
        })).length ? null : {
            type: T.StoreRecommendationTypes.NOW_PLAYING,
            userInfo: c
        });
        null != p && (_.push(p), E = p.userInfo.map(function(e) {
            return e.user.id
        }));
        var m = i.getStatisticsForApplication(d);
        if (null != m) {
            var y = m.map(function(e) {
                return e.user_id
            });
            if (o().difference(y, E).length > 0) {
                var h = function(e, t, n) {
                    var r = n.getStatisticsForApplication(e);
                    if (null == r) return null;
                    var o = r.map(function(e) {
                        var n = t.getUser(e.user_id);
                        return null == n ? null : {
                            user: n,
                            endTime: Date.parse(e.last_played_at)
                        }
                    }).filter(I.isNotNullish).sort(function(e, t) {
                        return t.endTime - e.endTime
                    });
                    return 0 === o.length ? null : {
                        type: T.StoreRecommendationTypes.EVER_PLAYED,
                        userInfo: o
                    }
                }(d, n, i);
                null != h && _.push(h)
            }
        }
        return _
    }
    var B = [];

    function j(e, t, n) {
        var r = t.get(e),
            o = n.getForSKU(e);
        if (null == r || null == o) return B;
        var i = [];
        (0, y.hasFlag)(r.flags, T.SKUFlags.HAS_FREE_PREMIUM_CONTENT) && i.push({
            type: T.StoreRecommendationTypes.HAS_FREE_PREMIUM_CONTENT
        });
        var u = r.releaseDate;
        return null != u && 3 > a()().diff(u, "months") && (r.accessType === T.SKUAccessTypes.EARLY_ACCESS ? i.push({
            type: T.StoreRecommendationTypes.EARLY_ACCESS,
            releaseDate: u
        }) : i.push({
            type: T.StoreRecommendationTypes.RECENT_RELEASE_DATE,
            releaseDate: u
        })), null != o.flavorText && i.push({
            type: T.StoreRecommendationTypes.FLAVOR_TEXT,
            flavorText: o.flavorText
        }), i
    }
}