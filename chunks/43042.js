function(e, t, n) {
    "use strict";
    n.r(t), n("978713");
    var r, o, i = n("967888"),
        a = n("887840"),
        u = n("204685"),
        s = n("997642"),
        l = n("127159"),
        c = n("637052");
    n("374550");
    var f = n("285910"),
        d = n("822853"),
        _ = n("444623"),
        E = n("281767");

    function p(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function y(e, t) {
        if (e) {
            if ("string" == typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return p(e, t)
        }
    }
    var I = ["https://cdn.discordapp.com/bad-domains/updated_hashes.json", "https://cdn.discordapp.com/bad-domains/hashes.json"],
        h = new _.IdGenerator,
        O = /\/api(\/v\d+)?\/science/;
    (0, i.setRequestPatch)({
        prepareRequest: function(e) {
            var t = n("217014").default,
                r = n("306191").default,
                o = n("225098").default,
                u = n("208454").default,
                s = n("870331").default,
                l = n("374550").isPlatformEmbedded;
            if ("/" === e.url[0]) {
                e.url = (0, i.getAPIBaseURL)() + e.url, !("Authorization" in e.header) && !("authorization" in e.header) && e.set("Authorization", t.getToken());
                var c = s.getSuperPropertiesBase64();
                null != c && e.set("X-Super-Properties", c);
                var _ = t.getFingerprint();
                if (null != _ && "" !== _ && e.set("X-Fingerprint", _), l) {
                    var E, m, T, S = [];
                    if (null != navigator) {
                        ;
                        S = null !== (T = function(e) {
                            if (Array.isArray(e)) return p(e)
                        }(E = navigator.languages) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                        }(E) || y(E) || function() {
                            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()) && void 0 !== T ? T : []
                    }
                    var v = (m = 10, S.reduce(function(e, t) {
                        return 10 === m ? e.push(t) : e.push("".concat(t, ";q=0.").concat(m)), m = Math.max(m - 1, 1), e
                    }, []).join(","));
                    e.set("Accept-Language", v)
                }
                e.set("X-Discord-Locale", o.locale);
                var g = function() {
                    if (null == Intl.DateTimeFormat) return null;
                    var e = Intl.DateTimeFormat();
                    return null == e.resolvedOptions ? null : e.resolvedOptions().timeZone
                }();
                null != g && e.set("X-Discord-Timezone", g);
                var A = r.getDebugOptionsHeaderValue();
                if (null != A && "" !== A && e.set("X-Debug-Options", A), r.isTracingRequests) {
                    var b, N = u.getCurrentUser(),
                        R = h.generate(null !== (b = null == N ? void 0 : N.id) && void 0 !== b ? b : "0");
                    e.set("x-client-trace-id", R);
                    try {
                        var C = new URL(e.url).pathname;
                        if (!O.test(C)) {
                            var P, D, L, M = (P = R, (D = new URLSearchParams).append("query", '@guid.x-client-trace-id:"'.concat(P, '"')), D.append("showAllSpans", "true"), L = d.default.toURLSafe("traces?".concat(D.toString()), "https://datadog.discord.tools/apm/"), null == L ? null : L.toString());
                            null !== M && console.debug("%c[tracing]%c %s %s\n%s", "font-weight: bold", "", e.method, C, M)
                        }
                    } catch (e) {
                        console.error("error while printing Lightstep log", e)
                    }
                }
            }
            a.report("Network", "Sending ".concat(e.method, " to ").concat(e.url)), e.on("response", function(t) {
                var n = null != t && t.status >= 400 ? t.text : null;
                a.report("Network", "Completed ".concat(e.method, " to ").concat(e.url, " with status: ").concat(null == t ? void 0 : t.status, " ").concat(null == n ? "" : "and body: ".concat(n)))
            }), e.on("error", function(t, n) {
                if (a.report("Network", "Failed ".concat(e.method, " to ").concat(e.url, " with status ").concat(null == t ? void 0 : t.status, " and body: ").concat(null == n ? void 0 : n.text)), null != t && "parse" in t && t.parse) {
                    var r, o, i = "[FILTERED]";
                    I.includes(e.url) && (i = null === (o = e.xhr) || void 0 === o ? void 0 : null === (r = o.responseText) || void 0 === r ? void 0 : r.slice(0, 1e3)), f.default.addBreadcrumb({
                        category: "superagent",
                        message: "Failed to parse HTTP response.",
                        data: {
                            method: e.method,
                            url: e.url,
                            responseText: i,
                            status: t.status
                        }
                    })
                }
            })
        },
        interceptResponse: function(e, t, r) {
            var o, i, a, c, f;
            return 400 === e.statusCode && (null === (o = e.body) || void 0 === o ? void 0 : o.captcha_key) ? (Promise.all([n.e("8428").then(n.bind(n, "531089")), n.e("9675").then(n.bind(n, "104410"))]).then(function(t) {
                var n, r, o = (r = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(n = t) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(n, r) || y(n, r) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    i = o[0].default,
                    a = o[1].extractCaptchaPropsFromResponseBody;
                return i.showCaptchaAsync(a(e.body))
            }).then(function(e) {
                var n = e.captcha_key,
                    r = e.captcha_rqtoken,
                    o = {
                        "X-Captcha-Key": n
                    };
                null != r && (o["X-Captcha-Rqtoken"] = r), t(o)
            }).catch(r), !0) : 401 === e.statusCode && (null === (i = e.body) || void 0 === i ? void 0 : i.code) === E.AbortCodes.MFA_REQUIRED && (null === (a = e.body) || void 0 === a ? void 0 : a.mfa) ? (Promise.all([n.e("99387"), n.e("92599"), n.e("60984")]).then(n.bind(n, "502023")).then(function(n) {
                (0, n.openMFAModal)(e.body.mfa, t, r)
            }).catch(r), !0) : (0, l.isLimitedAccessErrorCode)(e.statusCode, null === (c = e.body) || void 0 === c ? void 0 : c.code) ? (Promise.resolve().then(n.bind(n, "770755")).then(function(e) {
                (0, e.default)()
            }), !1) : (0, u.isLimitedAccessErrorCode)(e.statusCode, null === (f = e.body) || void 0 === f ? void 0 : f.code) ? (n.e("21694").then(n.bind(n, "912511")).then(function(t) {
                var n;
                (0, t.default)(null === (n = e.body) || void 0 === n ? void 0 : n.guild_id)
            }), !1) : ((0, s.isBlockedByProxyErrorCode)(e) && n.e("81717").then(n.bind(n, "890960")).then(function(e) {
                (0, e.handleBlockedByProxy)()
            }), !1)
        }
    }), (0, i.setAwaitOnline)((o = (r = function(e) {
        return function(e, t) {
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
        }(this, function(t) {
            switch (t.label) {
                case 0:
                    if (a.report("Network", "Request to ".concat(e, " failed, will retry.")), !c.default.isOnline()) return [3, 1];
                    return [2];
                case 1:
                    return [4, c.default.awaitOnline()];
                case 2:
                    t.sent(), a.report("Network", "Network detected online, retrying ".concat(e)), t.label = 3;
                case 3:
                    return [2]
            }
        })
    }, function() {
        var e = this,
            t = arguments;
        return new Promise(function(n, o) {
            var i = r.apply(e, t);

            function a(e) {
                m(i, n, o, a, u, "next", e)
            }

            function u(e) {
                m(i, n, o, a, u, "throw", e)
            }
            a(void 0)
        })
    }), function(e) {
        return o.apply(this, arguments)
    }))
}