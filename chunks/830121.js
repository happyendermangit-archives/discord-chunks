function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVLINK_REGEX: function() {
            return g
        },
        default: function() {
            return F
        },
        findCodedLink: function() {
            return Y
        },
        parseQuestsEmbedCode: function() {
            return x
        },
        parseURLSafely: function() {
            return H
        },
        remainingPathFromDiscordHostMatch: function() {
            return B
        }
    }), n("757143"), n("47120"), n("653041");
    var i, r, s, a, o, l, u = n("729594");
    n("865427");
    var d = n("264229");
    n("413605");
    var _ = n("701190"),
        c = n("226951"),
        E = n("591759"),
        I = n("960904"),
        T = n("981631");
    let f = /^\/([a-zA-Z0-9-]+)$/,
        S = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
        h = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?$/,
        A = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
        m = /^\/application-directory\/([0-9-]+)\/?$/,
        N = /^\/activities\/([0-9-]+)\/?$/,
        O = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        p = /^\/channels\/([0-9]+)\/shop$/,
        R = /^\/clyde-profiles\/([0-9-]+)\/?$/,
        C = /^\/quests\/([0-9-]+)\/?$/,
        g = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
        L = w(window.GLOBAL_ENV.INVITE_HOST),
        D = w(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
        v = w(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(T.PRIMARY_DOMAIN)),
        M = w("//canary.".concat(T.PRIMARY_DOMAIN)),
        y = w("//ptb.".concat(T.PRIMARY_DOMAIN)),
        P = w("discordapp.com"),
        U = w("discord.com"),
        b = [c.default.escape(null !== (r = L.host) && void 0 !== r ? r : ""), c.default.escape(null !== (s = D.host) && void 0 !== s ? s : ""), c.default.escape(null !== (a = v.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = P.host) && void 0 !== o ? o : ""), c.default.escape(null !== (l = U.host) && void 0 !== l ? l : "")].filter(Boolean),
        G = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(b.join("|"), ")"), "g");

    function w(e) {
        if (null == e) return {
            host: null,
            pathPrefix: null
        };
        if (e.indexOf("/") >= 0) {
            let t = (0, u.parse)(e, void 0, !0);
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

    function k(e, t) {
        var n, i, r;
        if ((null === (n = t.host) || void 0 === n ? void 0 : n.replace(/^www[.]/i, "")) !== e.host) return null;
        let s = null !== (i = t.pathname) && void 0 !== i ? i : "",
            a = null !== (r = e.pathPrefix) && void 0 !== r ? r : "";
        if (!s.startsWith(a)) return null;
        let o = s.substring(a.length);
        return "" === o ? null : o
    }

    function B(e) {
        var t, n, i, r;
        return null !== (r = null !== (i = null !== (n = null !== (t = k(v, e)) && void 0 !== t ? t : k(M, e)) && void 0 !== n ? n : k(y, e)) && void 0 !== i ? i : k(P, e)) && void 0 !== r ? r : k(U, e)
    }

    function V(e) {
        var t, n, i, r;
        let s = H(e);
        if (null == s || null == s.pathname) return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
        let a = k(L, s),
            o = k(D, s),
            l = null !== (r = null !== (i = null !== (n = null !== (t = k(v, s)) && void 0 !== t ? t : k(M, s)) && void 0 !== n ? n : k(y, s)) && void 0 !== i ? i : k(P, s)) && void 0 !== r ? r : k(U, s);
        return {
            url: s,
            inviteHostRemainingPath: a,
            templateHostRemainingPath: o,
            primaryHostRemainingPath: l
        }
    }

    function F(e) {
        if (null == e) return [];
        let t = new Set,
            n = [],
            i = (e = e.replace(G, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e)).match(E.default.URL_REGEX),
            r = e.match(g);
        if (null == (i = (null != i ? i : []).concat(null != r ? r : [])) || 0 === i.length) return [];
        for (let e of i) {
            if (n.length >= 10) break;
            let {
                url: i,
                inviteHostRemainingPath: r,
                templateHostRemainingPath: s,
                primaryHostRemainingPath: a
            } = V(e);
            if (null == i || null == i.pathname) continue;
            let o = (e, i) => {
                !t.has(i) && (t.add(i), n.push({
                    type: e,
                    code: i
                }))
            };
            if ((null == r ? void 0 : r.match(f)) != null) {
                let e = (0, d.generateInviteKeyFromUrlParams)(r.substring(1), i.search);
                _.default.getInvite(e), o(I.CodedLinkType.INVITE, e)
            }(null == s ? void 0 : s.match(f)) != null && o(I.CodedLinkType.TEMPLATE, s.substring(1));
            let l = null == a ? void 0 : a.match(h);
            if (null != l) {
                let e = l[1].toUpperCase();
                if (e === I.CodedLinkType.INVITE) {
                    let e = (0, d.generateInviteKeyFromUrlParams)(l[2], i.search);
                    o(I.CodedLinkType.INVITE, e)
                } else o(e, l[2])
            }(null == a ? void 0 : a.match(S)) != null && o(I.CodedLinkType.CHANNEL_LINK, a.replace("/channels/", ""));
            let u = function(e) {
                if (null == e) return null;
                let t = e.match(A);
                return null != t && t.length >= 4 ? {
                    guildId: t[1],
                    guildEventId: t[2],
                    recurrenceId: t[4]
                } : null
            }(i.pathname);
            null != u && o(I.CodedLinkType.EVENT, "".concat(u.guildId, "-").concat(u.guildEventId) + (null != u.recurrenceId ? "-".concat(u.recurrenceId) : ""));
            let c = null == a ? void 0 : a.match(m);
            if (null != c) {
                let e = c[1];
                o(I.CodedLinkType.APP_DIRECTORY_PROFILE, e)
            }
            let E = null == a ? void 0 : a.match(R);
            if (null != E) {
                let e = E[1];
                o(I.CodedLinkType.CLYDE_PROFILE, e)
            }
            let T = null == a ? void 0 : a.match(N);
            if (null != T) {
                let e = T[1];
                o(I.CodedLinkType.ACTIVITY_BOOKMARK, e)
            }
            let C = null == a ? void 0 : a.match(O);
            null != C && o(I.CodedLinkType.GUILD_PRODUCT, "".concat(C[1], "-").concat(C[2]));
            let g = null == a ? void 0 : a.match(p);
            null != g && o(I.CodedLinkType.SERVER_SHOP, g[1]);
            let L = x(e);
            null != L && o(I.CodedLinkType.QUESTS_EMBED, L)
        }
        return n
    }

    function x(e) {
        var t, n;
        let i = V(e),
            r = null == i ? void 0 : null === (t = i.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(C);
        return null !== (n = null == r ? void 0 : r[1]) && void 0 !== n ? n : null
    }

    function H(e) {
        try {
            return (0, u.parse)(e)
        } catch (e) {
            return null
        }
    }

    function Y(e) {
        return F(e)[0]
    }
}