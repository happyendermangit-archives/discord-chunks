function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return S.AnalyticsActionHandlers
        },
        Impression: function() {
            return v.Impression
        },
        ImpressionGroups: function() {
            return v.ImpressionGroups
        },
        ImpressionNames: function() {
            return g.ImpressionNames
        },
        ImpressionSchema: function() {
            return g.ImpressionSchema
        },
        ImpressionTypes: function() {
            return v.ImpressionTypes
        },
        NetworkActionNames: function() {
            return g.NetworkActionNames
        },
        StandardAnalyticsLocation: function() {
            return v.StandardAnalyticsLocation
        },
        StandardAnalyticsSchemaNameMap: function() {
            return g.StandardAnalyticsSchemaNameMap
        },
        TypedEventProperties: function() {
            return v.TypedEventProperties
        },
        analyticsTrackingStoreMaker: function() {
            return S.analyticsTrackingStoreMaker
        },
        encodeProperties: function() {
            return T.encodeProperties
        },
        extendSuperProperties: function() {
            return Q
        },
        getCampaignParams: function() {
            return W
        },
        getDevice: function() {
            return z
        },
        getOS: function() {
            return K
        },
        getSuperProperties: function() {
            return Z
        },
        getSuperPropertiesBase64: function() {
            return $
        },
        isThrottled: function() {
            return q
        },
        trackMaker: function() {
            return J
        }
    });
    var r, o, i, a, u, s, l, c, f = n("348327"),
        d = n.n(f),
        _ = n("512722"),
        E = n.n(_),
        p = n("264344"),
        m = n.n(p),
        y = n("812497"),
        I = n("242880"),
        h = n("328778"),
        O = n("78946"),
        T = n("371441"),
        S = n("367239"),
        v = n("878192"),
        g = n("545525");

    function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function b(e) {
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
    var N = "deviceProperties",
        R = "referralProperties",
        C = {},
        P = {},
        D = window.DiscordNative;
    if (null != D) {
        var L, M, U, w = D.remoteApp.getVersion(),
            k = D.process.platform,
            G = D.os.release,
            B = D.os.arch,
            j = D.os.appArch,
            F = D.remoteApp.getReleaseChannel(),
            V = (0, y.getSystemLocale)();
        switch (k) {
            case "win32":
                U = "Windows";
                break;
            case "darwin":
                U = "Mac OS X";
                break;
            case "linux":
                U = "Linux";
                break;
            default:
                U = k
        }
        if (L = {
                os: U,
                browser: "Discord Client",
                release_channel: F || "unknown",
                client_version: w,
                os_version: G,
                os_arch: B,
                app_arch: j,
                system_locale: V
            }, (null === (M = m().name) || void 0 === M ? void 0 : M.toLocaleLowerCase()) === "electron" && (L.browser_user_agent = m().ua || "", L.browser_version = m().version || ""), "linux" === k) {
            var H = D.crashReporter.getMetadata();
            L.window_manager = H.wm, L.distro = H.distro
        }
    }
    var x = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

    function Y(e, t) {
        if (null == e) return "";
        t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        var n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(e);
        return null === n || "string" != typeof n[1] && n[1].length ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ")
    }

    function W(e) {
        var t = {};
        return x.forEach(function(n) {
            var r = Y(e, n);
            r.length > 0 && (t[n] = r)
        }), t
    }

    function K() {
        var e = window.navigator.userAgent;
        if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
        if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
        if (/Android/.test(e)) return "Android";
        else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
        else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
        else if (/Linux/i.test(e)) return "Linux";
        else return ""
    }

    function z() {
        var e = window.navigator.userAgent;
        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
        if (/Windows Phone/i.test(e)) return "Windows Phone";
        if (/Android/.test(e)) return "Android";
        else if (/iPhone/.test(e)) return "iPhone";
        else if (/iPad/.test(e)) return "iPad";
        else return ""
    }

    function X() {
        var e, t = {};
        return t.referrer = document.referrer, t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : "", t = b({}, t, W(window.location.href), function() {
            var e = {},
                t = document.referrer,
                n = function() {
                    var e = document.referrer;
                    if (0 === e.search("https?://(.*)google.([^/?]*)")) return "google";
                    if (0 === e.search("https?://(.*)bing.com")) return "bing";
                    if (0 === e.search("https?://(.*)yahoo.com")) return "yahoo";
                    else if (0 === e.search("https?://(.*)duckduckgo.com")) return "duckduckgo";
                    else return null
                }();
            if (null != n) {
                e.search_engine = n;
                var r = Y(t, "yahoo" !== n ? "q" : "p");
                r.length > 0 && (e.mp_keyword = r)
            }
            return e
        }())
    }

    function q(e) {
        return null != C[e] && C[e] > Date.now()
    }
    if (null == L) try {
        L = function() {
            var e, t, n, r, o, i, a, u, s, l = I.Storage.get(N);
            if (null == l) {
                ;
                e = {}, t = K(), e.os = t, e.browser = function() {
                    var e = window.navigator,
                        t = e.userAgent,
                        n = e.vendor;
                    if (window.opera) return /Mini/.test(t) ? "Opera Mini" : "Opera";
                    if (/(BlackBerry|PlayBook|BB10)/i.test(t)) return "BlackBerry";
                    if (/FBIOS/.test(t)) return "Facebook Mobile";
                    else if (/CriOS/.test(t)) return "Chrome iOS";
                    else if (/Apple/.test(void 0 === n ? "" : n)) return /Mobile/.test(t) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
                    else if (/Android/.test(t)) return /Chrome/.test(t) ? "Android Chrome" : "Android Mobile";
                    else if (/Edge/.test(t)) return "Edge";
                    else if (/Chrome/.test(t)) return "Chrome";
                    else if (/Konqueror/.test(t)) return "Konqueror";
                    else if (/Firefox/.test(t)) return "Firefox";
                    else if (/MSIE|Trident\//.test(t)) return "Internet Explorer";
                    else if (/Gecko/.test(t)) return "Mozilla";
                    else return ""
                }(), e.device = z(), e.system_locale = (0, y.getSystemLocale)(), l = e, I.Storage.set(N, l)
            }
            var c = I.Storage.get(R);
            null == c && (c = X(), I.Storage.set(R, c));
            var f = h.SessionStorage.get(R);
            if (null == f) {
                ;
                n = X(), r = "_current", o = {}, Object.keys(n).map(function(e) {
                    return o["".concat(e).concat(r)] = n[e]
                }), f = o, h.SessionStorage.set(R, f)
            }
            return b({}, l, (u = b({}, {
                browser_user_agent: window.navigator.userAgent || "",
                browser_version: m().version || ""
            }), s = (s = {
                os_version: null !== (a = null === m() || void 0 === m() ? void 0 : null === (i = m().os) || void 0 === i ? void 0 : i.version) && void 0 !== a ? a : ""
            }, s), Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(s)).forEach(function(e) {
                Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(s, e))
            }), u), c, f)
        }()
    } catch (e) {
        L = {}
    }

    function Q(e) {
        L = b({}, L, e), c = (0, T.encodeProperties)(L)
    }
    Q((a = {}, (u = window.GLOBAL_ENV.RELEASE_CHANNEL) && (a.release_channel = u.split("-")[0]), !isNaN(s = parseInt((i = "280219", "280219"), 10)) && (a.client_build_number = s), !isNaN(l = null == D ? void 0 : null === (r = (o = D.remoteApp).getBuildNumber) || void 0 === r ? void 0 : r.call(o)) && (a.native_build_number = l), a.client_event_source = function() {
        try {
            if (__OVERLAY__) return "OVERLAY"
        } catch (e) {}
        return null
    }(), a));
    var J = function(e) {
        var t = e.analyticEventConfigs,
            r = e.dispatcher,
            o = e.TRACK_ACTION_NAME,
            i = (0, O.queueTrackingEventMaker)(r, o);
        return function(e, r) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
            var a = null != r ? r : {},
                u = t[e];
            if (null != u) {
                if ("throttlePeriod" in u) {
                    var s, l = [e].concat(function(e) {
                        if (Array.isArray(e)) return A(e)
                    }(s = u.throttleKeys(a)) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(s) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return A(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
                        }
                    }(s) || function() {
                        throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()).join("_");
                    if (q(l)) return Promise.resolve();
                    if ("number" == typeof u.throttlePercent && Math.random() > u.throttlePercent) return Promise.resolve();
                    if (u.deduplicate) {
                        var c = P[l];
                        if (d()(c, a)) return Promise.resolve();
                        P[l] = a
                    }
                    C[l] = Date.now() + u.throttlePeriod
                } else if ("throttlePercent" in u) {
                    if (Math.random() > u.throttlePercent) return Promise.resolve()
                } else E()(!1, "Unsupported analytics event config: ".concat(u))
            }
            return i(e, r, o)
        }
    };

    function Z() {
        return L
    }

    function $() {
        return c
    }
}