function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n.d(t, {
        AnalyticsActionHandlers: function() {
            return A.AnalyticsActionHandlers
        },
        Impression: function() {
            return m.Impression
        },
        ImpressionGroups: function() {
            return m.ImpressionGroups
        },
        ImpressionNames: function() {
            return N.ImpressionNames
        },
        ImpressionSchema: function() {
            return N.ImpressionSchema
        },
        ImpressionTypes: function() {
            return m.ImpressionTypes
        },
        NetworkActionNames: function() {
            return N.NetworkActionNames
        },
        StandardAnalyticsLocation: function() {
            return m.StandardAnalyticsLocation
        },
        StandardAnalyticsSchemaNameMap: function() {
            return N.StandardAnalyticsSchemaNameMap
        },
        TypedEventProperties: function() {
            return m.TypedEventProperties
        },
        analyticsTrackingStoreMaker: function() {
            return A.analyticsTrackingStoreMaker
        },
        encodeProperties: function() {
            return h.encodeProperties
        },
        extendSuperProperties: function() {
            return b
        },
        getCampaignParams: function() {
            return v
        },
        getDevice: function() {
            return y
        },
        getOS: function() {
            return M
        },
        getSuperProperties: function() {
            return w
        },
        getSuperPropertiesBase64: function() {
            return B
        },
        isThrottled: function() {
            return U
        },
        trackMaker: function() {
            return G
        }
    }), n("757143"), n("47120");
    var s, a, o, l = n("348327"),
        u = n.n(l),
        d = n("512722"),
        _ = n.n(d),
        c = n("264344"),
        E = n.n(c),
        I = n("627420"),
        T = n("433517"),
        f = n("298444"),
        S = n("979675"),
        h = n("947486"),
        A = n("699407"),
        m = n("20281"),
        N = n("525769");
    let p = "deviceProperties",
        O = "referralProperties",
        R = {},
        C = {},
        g = window.DiscordNative;
    if (null != g) {
        let e;
        let t = g.remoteApp.getVersion(),
            n = g.process.platform,
            r = g.os.release,
            a = g.os.arch,
            o = g.os.appArch,
            l = g.remoteApp.getReleaseChannel(),
            u = (0, I.getSystemLocale)();
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
                release_channel: l || "unknown",
                client_version: t,
                os_version: r,
                os_arch: a,
                app_arch: o,
                system_locale: u
            }, (null === (s = E().name) || void 0 === s ? void 0 : s.toLocaleLowerCase()) === "electron" && (i.browser_user_agent = E().ua || "", i.browser_version = E().version || ""), "linux" === n) {
            let e = g.crashReporter.getMetadata();
            i.window_manager = e.wm, i.distro = e.distro
        }
    }
    let L = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");

    function D(e, t) {
        if (null == e) return "";
        t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(e);
        return null === n || "string" != typeof n[1] && n[1].length ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ")
    }

    function v(e) {
        let t = {};
        return L.forEach(n => {
            let i = D(e, n);
            i.length > 0 && (t[n] = i)
        }), t
    }

    function M() {
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
    }

    function y() {
        let {
            userAgent: e
        } = window.navigator;
        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
        if (/Windows Phone/i.test(e)) return "Windows Phone";
        if (/Android/.test(e)) return "Android";
        else if (/iPhone/.test(e)) return "iPhone";
        else if (/iPad/.test(e)) return "iPad";
        else return ""
    }

    function P() {
        let e = {};
        return e.referrer = document.referrer, e.referring_domain = function() {
            let e = document.referrer.split("/");
            return e.length >= 3 ? e[2] : ""
        }(), e = {
            ...e,
            ...v(window.location.href),
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
                    let i = D(t, "yahoo" !== n ? "q" : "p");
                    i.length > 0 && (e.mp_keyword = i)
                }
                return e
            }()
        }
    }

    function U(e) {
        return null != R[e] && R[e] > Date.now()
    }
    if (null == i) try {
        ;
        let e, t, n;
        e = T.Storage.get(p), null == e && (e = function() {
            let e = {},
                t = M();
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
            }(), e.device = y(), e.system_locale = (0, I.getSystemLocale)(), e
        }(), T.Storage.set(p, e)), t = T.Storage.get(O), null == t && (t = P(), T.Storage.set(O, t)), n = f.SessionStorage.get(O), null == n && (n = function(e, t) {
            let n = {};
            return Object.keys(e).map(i => n["".concat(i).concat(t)] = e[i]), n
        }(P(), "_current"), f.SessionStorage.set(O, n)), i = {
            ...e,
            browser_user_agent: window.navigator.userAgent || "",
            browser_version: E().version || "",
            os_version: null !== (o = null === E() || void 0 === E() ? void 0 : null === (a = E().os) || void 0 === a ? void 0 : a.version) && void 0 !== o ? o : "",
            ...t,
            ...n
        }
    } catch (e) {
        i = {}
    }

    function b(e) {
        i = {
            ...i,
            ...e
        }, r = (0, h.encodeProperties)(i)
    }
    b(function() {
        var e, t, n;
        let i = {},
            r = window.GLOBAL_ENV.RELEASE_CHANNEL;
        r && (i.release_channel = r.split("-")[0]);
        let s = parseInt((n = "289193", "289193"), 10);
        !isNaN(s) && (i.client_build_number = s);
        let a = null == g ? void 0 : null === (e = (t = g.remoteApp).getBuildNumber) || void 0 === e ? void 0 : e.call(t);
        return !isNaN(a) && (i.native_build_number = a), i.client_event_source = function() {
            try {
                if (__OVERLAY__) return "OVERLAY"
            } catch (e) {}
            return null
        }(), i
    }());
    let G = e => {
        let {
            analyticEventConfigs: t,
            dispatcher: i,
            TRACK_ACTION_NAME: r
        } = e, s = (0, S.queueTrackingEventMaker)(i, r);
        return function(e, i) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (null != n.g.isServerRendering && !0 === n.g.isServerRendering) return Promise.resolve();
            let a = null != i ? i : {},
                o = t[e];
            if (null != o) {
                if ("throttlePeriod" in o) {
                    let t = [e, ...o.throttleKeys(a)].join("_");
                    if (U(t)) return Promise.resolve();
                    if ("number" == typeof o.throttlePercent && Math.random() > o.throttlePercent) return Promise.resolve();
                    if (o.deduplicate) {
                        let e = C[t];
                        if (u()(e, a)) return Promise.resolve();
                        C[t] = a
                    }
                    R[t] = Date.now() + o.throttlePeriod
                } else if ("throttlePercent" in o) {
                    if (Math.random() > o.throttlePercent) return Promise.resolve()
                } else _()(!1, "Unsupported analytics event config: ".concat(o))
            }
            return s(e, i, r)
        }
    };

    function w() {
        return i
    }

    function B() {
        return r
    }
}