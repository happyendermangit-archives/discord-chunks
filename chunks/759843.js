function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        analyticsTrackingStoreMaker: function() {
            return m.analyticsTrackingStoreMaker
        },
        AnalyticsActionHandlers: function() {
            return m.AnalyticsActionHandlers
        },
        ImpressionTypes: function() {
            return p.ImpressionTypes
        },
        ImpressionGroups: function() {
            return p.ImpressionGroups
        },
        ImpressionNames: function() {
            return S.ImpressionNames
        },
        NetworkActionNames: function() {
            return S.NetworkActionNames
        },
        getCampaignParams: function() {
            return O
        },
        trackMaker: function() {
            return P
        },
        default: function() {
            return M
        }
    }), n("781738"), n("222007");
    var o, s = n("714617"),
        l = n.n(s),
        a = n("627445"),
        u = n.n(a),
        c = n("383536"),
        d = n.n(c),
        _ = n("429030"),
        f = n("95410"),
        E = n("444095"),
        S = n("33112"),
        g = n("375492"),
        h = n("612481"),
        m = n("615582"),
        p = n("660516");
    let I = "deviceProperties",
        T = "referralProperties",
        v = {},
        A = {},
        N = window.DiscordNative;
    if (null != N) {
        let e;
        let t = N.remoteApp.getVersion(),
            n = N.process.platform,
            r = N.os.release,
            s = N.os.arch,
            l = N.os.appArch,
            a = N.remoteApp.getReleaseChannel(),
            u = (0, _.getSystemLocale)();
        switch (n) {
            case "win32":
                e = "Windows";
                break;
            case "darwin":
                e = "Mac OS X";
                break;
            case "linux":
                e = "Linux";
                break;
            default:
                e = n
        }
        if (i = {
                os: e,
                browser: "Discord Client",
                release_channel: a || "unknown",
                client_version: t,
                os_version: r,
                os_arch: s,
                app_arch: l,
                system_locale: u
            }, (null === (o = d.name) || void 0 === o ? void 0 : o.toLocaleLowerCase()) === "electron" && (i.browser_user_agent = d.ua || "", i.browser_version = d.version || ""), "linux" === n) {
            let e = N.crashReporter.getMetadata();
            i.window_manager = e.wm, i.distro = e.distro
        }
    }
    let C = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

    function R(e, t) {
        if (null == e) return "";
        t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")),
            i = n.exec(e);
        return null === i || "string" != typeof i[1] && i[1].length ? "" : decodeURIComponent(i[1]).replace(/\+/g, " ")
    }

    function O(e) {
        let t = {};
        return C.forEach(n => {
            let i = R(e, n);
            i.length > 0 && (t[n] = i)
        }), t
    }

    function L() {
        let e = {};
        return e.referrer = document.referrer, e.referring_domain = function() {
            let e = document.referrer.split("/");
            return e.length >= 3 ? e[2] : ""
        }(), e = {
            ...e,
            ...O(window.location.href),
            ... function() {
                let e = {},
                    t = document.referrer,
                    n = function() {
                        let e = document.referrer;
                        if (0 === e.search("https?://(.*)google.([^/?]*)")) return "google";
                        if (0 === e.search("https?://(.*)bing.com")) return "bing";
                        if (0 === e.search("https?://(.*)yahoo.com")) return "yahoo";
                        else if (0 === e.search("https?://(.*)duckduckgo.com")) return "duckduckgo";
                        else return null
                    }();
                if (null != n) {
                    e.search_engine = n;
                    let i = R(t, "yahoo" !== n ? "q" : "p");
                    i.length > 0 && (e.mp_keyword = i)
                }
                return e
            }()
        }
    }

    function y(e) {
        return null != v[e] && v[e] > Date.now()
    }
    if (null == i) try {
        let e, t, n;
        e = f.default.get(I), null == e && (e = function() {
            let e = {},
                t = function() {
                    let {
                        userAgent: e
                    } = window.navigator;
                    if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
                    if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
                    if (/Android/.test(e)) return "Android";
                    else if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                    else if (/Mac/i.test(e)) return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
                    else if (/Linux/i.test(e)) return "Linux";
                    else return ""
                }();
            return e.os = t, e.browser = function() {
                let {
                    userAgent: e,
                    vendor: t = ""
                } = window.navigator, {
                    opera: n
                } = window;
                if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                if (/FBIOS/.test(e)) return "Facebook Mobile";
                else if (/CriOS/.test(e)) return "Chrome iOS";
                else if (/Apple/.test(t)) return /Mobile/.test(e) || null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "Mobile Safari" : "Safari";
                else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
                else if (/Edge/.test(e)) return "Edge";
                else if (/Chrome/.test(e)) return "Chrome";
                else if (/Konqueror/.test(e)) return "Konqueror";
                else if (/Firefox/.test(e)) return "Firefox";
                else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                else if (/Gecko/.test(e)) return "Mozilla";
                else return ""
            }(), e.device = function() {
                let {
                    userAgent: e
                } = window.navigator;
                if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                if (/Windows Phone/i.test(e)) return "Windows Phone";
                if (/Android/.test(e)) return "Android";
                else if (/iPhone/.test(e)) return "iPhone";
                else if (/iPad/.test(e)) return "iPad";
                else return ""
            }(), e.system_locale = (0, _.getSystemLocale)(), e
        }(), f.default.set(I, e)), t = f.default.get(T), null == t && (t = L(), f.default.set(T, t)), n = E.default.get(T), null == n && (n = function(e, t) {
            let n = {};
            return Object.keys(e).map(i => n["".concat(i).concat(t)] = e[i]), n
        }(L(), "_current"), E.default.set(T, n)), i = {
            ...e,
            ... function() {
                var e, t;
                let n = {
                    browser_user_agent: window.navigator.userAgent || "",
                    browser_version: d.version || ""
                };
                return {
                    ...n,
                    os_version: null !== (t = null == d ? void 0 : null === (e = d.os) || void 0 === e ? void 0 : e.version) && void 0 !== t ? t : ""
                }
            }(),
            ...t,
            ...n
        }
    } catch (e) {
        i = {}
    }

    function D(e) {
        i = {
            ...i,
            ...e
        }, r = (0, h.default)(i)
    }
    D(function() {
        var e, t, n;
        let i = {},
            r = window.GLOBAL_ENV.RELEASE_CHANNEL;
        r && (i.release_channel = r.split("-")[0]);
        let o = parseInt((n = "272982", "272982"), 10);
        !isNaN(o) && (i.client_build_number = o);
        let s = null == N ? void 0 : null === (e = (t = N.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
        return !isNaN(s) && (i.native_build_number = s), i.client_event_source = function() {
            try {
                if (__OVERLAY__) return "OVERLAY"
            } catch (e) {}
            return null
        }(), i
    }());
    let P = e => {
        let {
            analyticEventConfigs: t,
            dispatcher: i,
            TRACK_ACTION_NAME: r
        } = e, o = (0, g.default)(i, r);
        return function(e, i) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
            let s = null != i ? i : {},
                a = t[e];
            if (null != a) {
                if ("throttlePeriod" in a) {
                    let t = [e, ...a.throttleKeys(s)].join("_");
                    if (y(t)) return Promise.resolve();
                    if ("number" == typeof a.throttlePercent && Math.random() > a.throttlePercent) return Promise.resolve();
                    if (a.deduplicate) {
                        let e = A[t];
                        if (l(e, s)) return Promise.resolve();
                        A[t] = s
                    }
                    v[t] = Date.now() + a.throttlePeriod
                } else if ("throttlePercent" in a) {
                    if (Math.random() > a.throttlePercent) return Promise.resolve()
                } else u(!1, "Unsupported analytics event config: ".concat(a))
            }
            return o(e, i, r)
        }
    };
    var M = {
        isThrottled: y,
        encodeProperties: h.default,
        getSuperProperties: () => i,
        getSuperPropertiesBase64: () => r,
        extendSuperProperties: D
    }
}