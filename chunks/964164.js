function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return F
        },
        findCodedLink: function() {
            return x
        },
        parseQuestsEmbedCode: function() {
            return V
        },
        parseURLSafely: function() {
            return H
        },
        remainingPathFromDiscordHostMatch: function() {
            return B
        }
    });
    var r, o, i, a, u, s, l = n("729594");
    n("884876");
    var c = n("54976");
    n("459678");
    var f = n("411778"),
        d = n("949011"),
        _ = n("822853"),
        E = n("420480"),
        p = n("281767"),
        m = /^\/([a-zA-Z0-9-]+)$/,
        y = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
        I = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
        h = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        O = /^\/application-directory\/([0-9-]+)\/?$/,
        T = /^\/activities\/([0-9-]+)\/?$/,
        S = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        v = /^\/channels\/([0-9]+)\/shop$/,
        g = /^\/clyde-profiles\/([0-9-]+)\/?$/,
        A = /^\/quests\/([0-9-]+)\/?$/,
        b = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
        N = k(window.GLOBAL_ENV.INVITE_HOST),
        R = k(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
        C = k(null !== (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== r ? r : "//canary.".concat(p.PRIMARY_DOMAIN)),
        P = k("//canary.".concat(p.PRIMARY_DOMAIN)),
        D = k("//ptb.".concat(p.PRIMARY_DOMAIN)),
        L = k("discordapp.com"),
        M = k("discord.com"),
        U = [d.default.escape(null !== (o = N.host) && void 0 !== o ? o : ""), d.default.escape(null !== (i = R.host) && void 0 !== i ? i : ""), d.default.escape(null !== (a = C.host) && void 0 !== a ? a : ""), d.default.escape(null !== (u = L.host) && void 0 !== u ? u : ""), d.default.escape(null !== (s = M.host) && void 0 !== s ? s : "")].filter(Boolean),
        w = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(U.join("|"), ")"), "g");

    function k(e) {
        if (null == e) return {
            host: null,
            pathPrefix: null
        };
        if (e.indexOf("/") >= 0) {
            var t = (0, l.parse)(e, void 0, !0);
            return {
                host: t.host,
                pathPrefix: t.pathname
            }
        }
        return {
            host: e,
            pathPrefix: null
        }
    }

    function G(e, t) {
        if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
        var n, r, o, i = null !== (r = t.pathname) && void 0 !== r ? r : "",
            a = null !== (o = e.pathPrefix) && void 0 !== o ? o : "";
        if (!i.startsWith(a)) return null;
        var u = i.substring(a.length);
        return "" === u ? null : u
    }

    function B(e) {
        var t, n, r, o;
        return null !== (o = null !== (r = null !== (n = null !== (t = G(C, e)) && void 0 !== t ? t : G(P, e)) && void 0 !== n ? n : G(D, e)) && void 0 !== r ? r : G(L, e)) && void 0 !== o ? o : G(M, e)
    }

    function j(e) {
        var t, n, r, o, i = H(e);
        if (null == i || null == i.pathname) return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
        var a = G(N, i),
            u = G(R, i),
            s = null !== (o = null !== (r = null !== (n = null !== (t = G(C, i)) && void 0 !== t ? t : G(P, i)) && void 0 !== n ? n : G(D, i)) && void 0 !== r ? r : G(L, i)) && void 0 !== o ? o : G(M, i);
        return {
            url: i,
            inviteHostRemainingPath: a,
            templateHostRemainingPath: u,
            primaryHostRemainingPath: s
        }
    }

    function F(e) {
        if (null == e) return [];
        var t = new Set,
            n = [],
            r = (e = e.replace(w, function(e, t, n, r) {
                return null == n ? "".concat(t, "http://").concat(r) : e
            })).match(_.default.URL_REGEX),
            o = e.match(b);
        if (null == (r = (null != r ? r : []).concat(null != o ? o : [])) || 0 === r.length) return [];
        var i = !0,
            a = !1,
            u = void 0;
        try {
            for (var s, l = r[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                var d = s.value;
                if (n.length >= 10) break;
                var p = j(d),
                    A = p.url,
                    N = p.inviteHostRemainingPath,
                    R = p.templateHostRemainingPath,
                    C = p.primaryHostRemainingPath;
                if (null != A && null != A.pathname) {
                    var P = function(e, r) {
                        !t.has(r) && (t.add(r), n.push({
                            type: e,
                            code: r
                        }))
                    };
                    if ((null == N ? void 0 : N.match(m)) != null) {
                        var D = (0, c.generateInviteKeyFromUrlParams)(N.substring(1), A.search);
                        f.default.getInvite(D), P(E.CodedLinkType.INVITE, D)
                    }(null == R ? void 0 : R.match(m)) != null && P(E.CodedLinkType.TEMPLATE, R.substring(1));
                    var L = null == C ? void 0 : C.match(I);
                    if (null != L) {
                        var M = L[1].toUpperCase();
                        if (M === E.CodedLinkType.INVITE) {
                            var U = (0, c.generateInviteKeyFromUrlParams)(L[2], A.search);
                            P(E.CodedLinkType.INVITE, U)
                        } else P(M, L[2])
                    }(null == C ? void 0 : C.match(y)) != null && P(E.CodedLinkType.CHANNEL_LINK, C.replace("/channels/", ""));
                    var k = function(e) {
                        if (null == e) return null;
                        var t = e.match(h);
                        return null != t && t.length >= 4 ? {
                            guildId: t[1],
                            guildEventId: t[2],
                            recurrenceId: t[4]
                        } : null
                    }(A.pathname);
                    null != k && P(E.CodedLinkType.EVENT, "".concat(k.guildId, "-").concat(k.guildEventId) + (null != k.recurrenceId ? "-".concat(k.recurrenceId) : ""));
                    var G = null == C ? void 0 : C.match(O);
                    if (null != G) {
                        var B = G[1];
                        P(E.CodedLinkType.APP_DIRECTORY_PROFILE, B)
                    }
                    var F = null == C ? void 0 : C.match(g);
                    if (null != F) {
                        var H = F[1];
                        P(E.CodedLinkType.CLYDE_PROFILE, H)
                    }
                    var x = null == C ? void 0 : C.match(T);
                    if (null != x) {
                        var Y = x[1];
                        P(E.CodedLinkType.ACTIVITY_BOOKMARK, Y)
                    }
                    var W = null == C ? void 0 : C.match(S);
                    null != W && P(E.CodedLinkType.GUILD_PRODUCT, "".concat(W[1], "-").concat(W[2]));
                    var K = null == C ? void 0 : C.match(v);
                    null != K && P(E.CodedLinkType.SERVER_SHOP, K[1]);
                    var z = V(d);
                    null != z && P(E.CodedLinkType.QUESTS_EMBED, z)
                }
            }
        } catch (e) {
            a = !0, u = e
        } finally {
            try {
                !i && null != l.return && l.return()
            } finally {
                if (a) throw u
            }
        }
        return n
    }

    function V(e) {
        var t, n, r = j(e),
            o = null == r ? void 0 : null === (t = r.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(A);
        return null !== (n = null == o ? void 0 : o[1]) && void 0 !== n ? n : null
    }

    function H(e) {
        try {
            return (0, l.parse)(e)
        } catch (e) {
            return null
        }
    }

    function x(e) {
        return F(e)[0]
    }
}