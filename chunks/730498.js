function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PrivateThreadMode: function() {
            return i
        },
        usePrivateThreadMode: function() {
            return D
        },
        getIsPrivate: function() {
            return R
        },
        getDefaultThreadName: function() {
            return L
        },
        useCreateThreadCommon: function() {
            return P
        },
        createThread: function() {
            return U
        },
        useCreateForumPostCommon: function() {
            return b
        }
    }), n("781738"), n("424973"), n("222007");
    var i, l, a = n("884691"),
        o = n("872717"),
        s = n("913144"),
        r = n("404118"),
        u = n("295426"),
        d = n("819689"),
        c = n("81594"),
        p = n("670902"),
        f = n("867965"),
        m = n("884351"),
        _ = n("804888"),
        I = n("42203"),
        T = n("474643"),
        A = n("377253"),
        E = n("401848"),
        C = n("718517"),
        N = n("568734"),
        g = n("299039"),
        M = n("252862"),
        O = n("300322"),
        S = n("24337"),
        h = n("648564"),
        y = n("49111"),
        v = n("782340");

    function D(e) {
        let t = (0, O.useCanStartPublicThread)(e),
            n = (0, O.useCanStartPrivateThread)(e);
        return n ? t ? 2 : 3 : 1
    }

    function R(e, t) {
        var n;
        if (3 === t) return !0;
        return null !== (n = e.isPrivate) && void 0 !== n && n
    }

    function L(e, t) {
        var n, i, l, a;
        let o = null == t ? null : A.default.getMessage(e.id, t),
            s = null !== (l = null == o ? void 0 : null === (i = o.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== l ? l : "";
        if ("" !== s) return s.length > 40 ? s.substring(0, 40) + "..." : s;
        {
            let t = m.default.unparse(null !== (a = null == o ? void 0 : o.content) && void 0 !== a ? a : "", e.id, !0),
                n = (0, S.default)(t.split("\n")[0], !0);
            n = n.replace(/^[ #-]+/, "");
            let i = [];
            for (;;) {
                let e = n.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
                if (null == e || null == e.index) {
                    i.push(n);
                    break
                }
                i.push(n.substring(0, e.index)), i.push(e[0]), n = n.substring(e.index + e[0].length)
            }
            let l = i[0];
            for (let e = 1; e < i.length; e++) {
                let t = l + i[e];
                if (t.length > 40) break;
                l = t
            }
            return l.length > 40 && (l = l.substring(0, 40) + "..."), l
        }
    }

    function P(e) {
        let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            privateThreadMode: l,
            location: s,
            onThreadCreated: r,
            useDefaultThreadName: p,
            uploadHandler: f
        } = e;
        return a.useCallback(async (e, a, _) => {
            var A;
            let E = null == n,
                C = R(i, l),
                N = null !== (A = i.name) && void 0 !== A ? A : "";
            if ("" === N && p) {
                let e = L(t, n);
                N = "" !== e ? e : v.default.Messages.THREAD
            }
            let O = (0, M.getAutoArchiveDuration)(t),
                S = I.default.getChannel(g.default.castMessageIdAsChannelId(n)),
                h = await B(t, () => {
                    let e = null != n ? y.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : y.Endpoints.CHANNEL_THREADS(t.id);
                    return o.default.post({
                        url: e,
                        body: {
                            name: N,
                            type: C ? y.ChannelTypes.PRIVATE_THREAD : t.type === y.ChannelTypes.GUILD_ANNOUNCEMENT ? y.ChannelTypes.ANNOUNCEMENT_THREAD : y.ChannelTypes.PUBLIC_THREAD,
                            auto_archive_duration: O,
                            location: s
                        }
                    })
                });
            h !== S && (u.default.clearDraft(t.id, T.DraftType.ThreadSettings), u.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), null == r || r(h), (E || e.length > 0 || null != a && a.length > 0 || null != _ && _.length > 0) && function(e, t, n, i, l) {
                if (null != l && null != i && i.length > 0) l(e, i, t, n);
                else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                else d.default.sendMessage(e.id, m.default.parse(e, t))
            }(h, e, a, _, f)), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage)
        }, [t, n, i, r, l, s, p, f])
    }

    function U(e, t, n, i, l) {
        return B(e, () => o.default.post({
            url: y.Endpoints.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: i,
                location: l
            }
        }))
    }

    function b(e) {
        let {
            parentChannel: t,
            name: n,
            appliedTags: i,
            onThreadCreated: l,
            upload: s
        } = e;
        return a.useCallback(async (e, a, r) => {
            let d = 0,
                [p, m] = (0, _.default)(e);
            p && (e = m, d = (0, N.addFlag)(d, y.MessageFlags.SUPPRESS_NOTIFICATIONS));
            let I = (0, M.getAutoArchiveDuration)(t, null),
                A = y.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                E = {
                    name: n,
                    auto_archive_duration: I,
                    applied_tags: i,
                    message: {
                        content: e,
                        sticker_ids: a,
                        flags: 0 !== d ? d : void 0
                    }
                },
                C = await B(t, () => null != r && r.length > 0 ? s(A, E, r) : o.default.post({
                    url: A,
                    body: E
                }));
            return u.default.clearDraft(t.id, T.DraftType.ThreadSettings), u.default.clearDraft(t.id, T.DraftType.FirstThreadMessage), c.default.clearAll(t.id, T.DraftType.FirstThreadMessage), (0, f.trackForumPostCreated)({
                guildId: t.guild_id,
                channelId: t.id,
                postId: C.id
            }), null == l || l(C), C
        }, [t, n, l, i, s])
    }(l = i || (i = {}))[l.Disabled = 1] = "Disabled", l[l.Enabled = 2] = "Enabled", l[l.PrivateOnly = 3] = "PrivateOnly";
    async function B(e, t) {
        let n;
        let i = e.isForumLikeChannel();
        try {
            n = await t(), null == n.body ? r.default.show({
                title: v.default.Messages.ERROR,
                body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
            }) : (s.default.dispatch({
                type: "SLOWMODE_RESET_COOLDOWN",
                slowmodeType: E.SlowmodeType.CreateThread,
                channelId: e.id
            }), s.default.dispatch({
                type: "THREAD_CREATE_LOCAL",
                channelId: n.body.id
            }))
        } catch (t) {
            var l, a, o, u, d, c;
            if ((null === (l = t.body) || void 0 === l ? void 0 : l.code) === y.AbortCodes.TOO_MANY_THREADS) r.default.show({
                title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                body: i ? v.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : v.default.Messages.TOO_MANY_THREADS_MESSAGE
            });
            else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === y.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) r.default.show({
                title: v.default.Messages.CANNOT_CREATE_THREAD,
                body: v.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
            });
            else if ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === y.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let n = null !== (c = t.body.retry_after) && void 0 !== c ? c : 0;
                n > 0 && s.default.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: E.SlowmodeType.CreateThread,
                    cooldownMs: n * C.default.Millis.SECOND
                })
            } else if (429 === t.status) r.default.show({
                title: i ? v.default.Messages.CANNOT_CREATE_FORUM_POST : v.default.Messages.CANNOT_CREATE_THREAD,
                body: v.default.Messages.RATE_LIMITED
            });
            else if (h.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
            else {
                if (h.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                    null == t.body && n(), p.default.addConditionalChangeListener(() => {
                        let t = p.default.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != t) {
                            let i = I.default.getChannel(t);
                            return s.default.wait(() => {
                                null == i ? n() : e(i)
                            }), !1
                        }
                    })
                });
                r.default.show({
                    title: v.default.Messages.ERROR,
                    body: v.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                })
            }
        }
        return new Promise((e, t) => {
            null == n.body && t(), I.default.addConditionalChangeListener(() => {
                let t = I.default.getChannel(n.body.id);
                if (null != t) return s.default.wait(() => {
                    e(t)
                }), !1
            })
        })
    }
}