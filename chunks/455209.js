function(e, _, E) {
    "use strict";
    E.r(_), E("313619"), E("654714"), E("287168"), E("956660"), E("222007"), E("808653"), E("424973"), E("511434"), E("726581");
    var t = E("872717"),
        o = E("821316"),
        n = E("129966"),
        r = E("583340"),
        a = E("823348"),
        i = E("35468");
    E("773336");
    var I = E("286235"),
        s = E("253981"),
        T = E("900673"),
        S = E("49111");
    let N = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
        O = new T.default,
        A = /\/api(\/v\d+)?\/science/;
    (0, t.setRequestPatch)({
        prepareRequest(e) {
            let {
                default: _
            } = E("271938"), {
                default: n
            } = E("313915"), {
                default: r
            } = E("915639"), {
                default: a
            } = E("697218"), {
                default: i
            } = E("599110"), {
                isPlatformEmbedded: T
            } = E("773336");
            if ("/" === e.url[0]) {
                var S, R;
                e.url = (0, t.getAPIBaseURL)() + e.url, !("Authorization" in e.header) && !("authorization" in e.header) && e.set("Authorization", _.getToken());
                let E = i.getSuperPropertiesBase64();
                null != E && e.set("X-Super-Properties", E);
                let o = _.getFingerprint();
                if (null != o && "" !== o && e.set("X-Fingerprint", o), T) {
                    let _ = [];
                    null != navigator && (_ = (S = [...navigator.languages], S));
                    let E = function(e) {
                        let _ = 10,
                            E = e.reduce((e, E) => (10 === _ ? e.push(E) : e.push("".concat(E, ";q=0.").concat(_)), _ = Math.max(_ - 1, 1), e), []);
                        return E.join(",")
                    }(_);
                    e.set("Accept-Language", E)
                }
                e.set("X-Discord-Locale", r.locale);
                let I = function() {
                    if (null == Intl.DateTimeFormat) return null;
                    let e = Intl.DateTimeFormat();
                    if (null == e.resolvedOptions) return null;
                    let _ = e.resolvedOptions();
                    return _.timeZone
                }();
                null != I && e.set("X-Discord-Timezone", I);
                let N = n.getDebugOptionsHeaderValue();
                if (null != N && "" !== N && e.set("X-Debug-Options", N), n.isTracingRequests) {
                    let _ = a.getCurrentUser(),
                        E = O.generate(null !== (R = null == _ ? void 0 : _.id) && void 0 !== R ? R : "0");
                    e.set("x-client-trace-id", E);
                    try {
                        let _ = new URL(e.url).pathname;
                        if (!A.test(_)) {
                            let t = function(e) {
                                let _ = new URLSearchParams;
                                _.append("query", '@guid.x-client-trace-id:"'.concat(e, '"')), _.append("showAllSpans", "true");
                                let E = s.default.toURLSafe("traces?".concat(_.toString()), "https://datadog.discord.tools/apm/");
                                return null == E ? null : E.toString()
                            }(E);
                            null !== t && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, _, t)
                        }
                    } catch (e) {
                        console.error("error while printing Lightstep log", e)
                    }
                }
            }
            o.report("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", _ => {
                let E = null != _ && _.status >= 400 ? _.text : null;
                o.report("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == _ ? void 0 : _.status, " ").concat(null == E ? "" : "and body: ".concat(E)))
            }), e.on("error", (_, E) => {
                if (o.report("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == _ ? void 0 : _.status, " and body: ").concat(null == E ? void 0 : E.text)), null != _ && "parse" in _ && _.parse) {
                    let E = "[FILTERED]";
                    if (N.includes(e.url)) {
                        var t, n;
                        E = null === (n = e.xhr) || void 0 === n ? void 0 : null === (t = n.responseText) || void 0 === t ? void 0 : t.slice(0, 1e3)
                    }
                    I.default.addBreadcrumb({
                        category: "superagent",
                        message: "Failed to parse HTTP response.",
                        data: {
                            method: e.method,
                            url: e.url,
                            responseText: E,
                            status: _.status
                        }
                    })
                }
            })
        },
        interceptResponse(e, _, t) {
            var o, i, I, s, T;
            return 400 === e.statusCode && (null === (o = e.body) || void 0 === o ? void 0 : o.captcha_key) ? (Promise.all([E.el("417814").then(E.bind(E, "417814")), E.el("507445").then(E.bind(E, "507445"))]).then(_ => {
                let [{
                    default: E
                }, {
                    extractCaptchaPropsFromResponseBody: t
                }] = _;
                return E.showCaptchaAsync(t(e.body))
            }).then(e => {
                let {
                    captcha_key: E,
                    captcha_rqtoken: t
                } = e, o = {
                    "X-Captcha-Key": E
                };
                null != t && (o["X-Captcha-Rqtoken"] = t), _(o)
            }).catch(t), !0) : 401 === e.statusCode && (null === (i = e.body) || void 0 === i ? void 0 : i.code) === S.AbortCodes.MFA_REQUIRED && (null === (I = e.body) || void 0 === I ? void 0 : I.mfa) ? (E.el("776502").then(E.bind(E, "776502")).then(E => {
                let {
                    openMFAModal: o
                } = E;
                o(e.body.mfa, _, t)
            }).catch(t), !0) : (0, a.isLimitedAccessErrorCode)(e.statusCode, null === (s = e.body) || void 0 === s ? void 0 : s.code) ? (E.el("258158").then(E.bind(E, "258158")).then(e => {
                let {
                    default: _
                } = e;
                _()
            }), !1) : (0, n.isLimitedAccessErrorCode)(e.statusCode, null === (T = e.body) || void 0 === T ? void 0 : T.code) ? (E.el("772545").then(E.bind(E, "772545")).then(_ => {
                var E;
                let {
                    default: t
                } = _;
                t(null === (E = e.body) || void 0 === E ? void 0 : E.guild_id)
            }), !1) : ((0, r.isBlockedByProxyErrorCode)(e) && E.el("499946").then(E.bind(E, "499946")).then(e => {
                let {
                    handleBlockedByProxy: _
                } = e;
                _()
            }), !1)
        }
    }), (0, t.setAwaitOnline)(async e => {
        if (o.report("Network", "Request to ".concat(e, " failed, will retry.")), !i.default.isOnline()) await i.default.awaitOnline(), o.report("Network", "Network detected online, retrying ".concat(e))
    })
}