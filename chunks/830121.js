function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DEVLINK_REGEX: function() {
            return C
        },
        default: function() {
            return V
        },
        findCodedLink: function() {
            return H
        },
        parseQuestsEmbedCode: function() {
            return x
        },
        parseURLSafely: function() {
            return F
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
        p = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        O = /^\/channels\/([0-9]+)\/shop$/,
        R = /^\/quests\/([0-9-]+)\/?$/,
        C = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
        g = G(window.GLOBAL_ENV.INVITE_HOST),
        L = G(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
        v = G(null !== (i = window.GLOBAL_ENV.WEBAPP_ENDPOINT) && void 0 !== i ? i : "//canary.".concat(T.PRIMARY_DOMAIN)),
        D = G("//canary.".concat(T.PRIMARY_DOMAIN)),
        M = G("//ptb.".concat(T.PRIMARY_DOMAIN)),
        y = G("discordapp.com"),
        P = G("discord.com"),
        U = [c.default.escape(null !== (r = g.host) && void 0 !== r ? r : ""), c.default.escape(null !== (s = L.host) && void 0 !== s ? s : ""), c.default.escape(null !== (a = v.host) && void 0 !== a ? a : ""), c.default.escape(null !== (o = y.host) && void 0 !== o ? o : ""), c.default.escape(null !== (l = P.host) && void 0 !== l ? l : "")].filter(Boolean),
        b = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(U.join("|"), ")"), "g");

    function G(e) {
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

    function w(e, t) {
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
        return null !== (r = null !== (i = null !== (n = null !== (t = w(v, e)) && void 0 !== t ? t : w(D, e)) && void 0 !== n ? n : w(M, e)) && void 0 !== i ? i : w(y, e)) && void 0 !== r ? r : w(P, e)
    }

    function k(e) {
        var t, n, i, r;
        let s = F(e);
        if (null == s || null == s.pathname) return {
            url: null,
            inviteHostRemainingPath: null,
            templateHostRemainingPath: null,
            primaryHostRemainingPath: null
        };
        let a = w(g, s),
            o = w(L, s),
            l = null !== (r = null !== (i = null !== (n = null !== (t = w(v, s)) && void 0 !== t ? t : w(D, s)) && void 0 !== n ? n : w(M, s)) && void 0 !== i ? i : w(y, s)) && void 0 !== r ? r : w(P, s);
        return {
            url: s,
            inviteHostRemainingPath: a,
            templateHostRemainingPath: o,
            primaryHostRemainingPath: l
        }
    }

    function V(e) {
        if (null == e) return [];
        let t = new Set,
            n = [],
            i = (e = e.replace(b, (e, t, n, i) => null == n ? "".concat(t, "http://").concat(i) : e)).match(E.default.URL_REGEX),
            r = e.match(C);
        if (null == (i = (null != i ? i : []).concat(null != r ? r : [])) || 0 === i.length) return [];
        for (let e of i) {
            if (n.length >= 10) break;
            let {
                url: i,
                inviteHostRemainingPath: r,
                templateHostRemainingPath: s,
                primaryHostRemainingPath: a
            } = k(e);
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
            let E = null == a ? void 0 : a.match(N);
            if (null != E) {
                let e = E[1];
                o(I.CodedLinkType.ACTIVITY_BOOKMARK, e)
            }
            let T = null == a ? void 0 : a.match(p);
            null != T && o(I.CodedLinkType.GUILD_PRODUCT, "".concat(T[1], "-").concat(T[2]));
            let R = null == a ? void 0 : a.match(O);
            null != R && o(I.CodedLinkType.SERVER_SHOP, R[1]);
            let C = x(e);
            null != C && o(I.CodedLinkType.QUESTS_EMBED, C)
        }
        return n
    }

    function x(e) {
        var t, n;
        let i = k(e),
            r = null == i ? void 0 : null === (t = i.primaryHostRemainingPath) || void 0 === t ? void 0 : t.match(R);
        return null !== (n = null == r ? void 0 : r[1]) && void 0 !== n ? n : null
    }

    function F(e) {
        try {
            return (0, u.parse)(e)
        } catch (e) {
            return null
        }
    }

    function H(e) {
        return V(e)[0]
    }
}