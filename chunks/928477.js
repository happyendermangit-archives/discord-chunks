function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PrivateThreadMode: function() {
            return i
        },
        createThread: function() {
            return U
        },
        getDefaultThreadName: function() {
            return y
        },
        getIsPrivate: function() {
            return M
        },
        useCreateForumPostCommon: function() {
            return b
        },
        useCreateThreadCommon: function() {
            return P
        },
        usePrivateThreadMode: function() {
            return v
        }
    }), n("757143"), n("653041"), n("47120");
    var i, r, s = n("470079"),
        a = n("544891"),
        o = n("570140"),
        l = n("668781"),
        u = n("430742"),
        d = n("904245"),
        _ = n("166459"),
        c = n("238349"),
        E = n("228392"),
        I = n("957730"),
        T = n("467798"),
        f = n("592125"),
        S = n("703558"),
        h = n("375954"),
        A = n("300429"),
        m = n("70956"),
        N = n("630388"),
        p = n("709054"),
        O = n("968437"),
        R = n("665906"),
        C = n("456077"),
        g = n("124368"),
        L = n("981631"),
        D = n("689938");

    function v(e) {
        let t = (0, R.useCanStartPublicThread)(e);
        return (0, R.useCanStartPrivateThread)(e) ? t ? 2 : 3 : 1
    }

    function M(e, t) {
        var n;
        if (3 === t) return !0;
        return null !== (n = e.isPrivate) && void 0 !== n && n
    }

    function y(e, t) {
        var n, i, r, s;
        let a = null == t ? null : h.default.getMessage(e.id, t),
            o = null !== (r = null == a ? void 0 : null === (i = a.embeds) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.rawTitle) && void 0 !== r ? r : "";
        if ("" !== o) return o.length > 40 ? o.substring(0, 40) + "..." : o;
        {
            let t = I.default.unparse(null !== (s = null == a ? void 0 : a.content) && void 0 !== s ? s : "", e.id, !0),
                n = (0, C.default)(t.split("\n")[0], !0);
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
            let r = i[0];
            for (let e = 1; e < i.length; e++) {
                let t = r + i[e];
                if (t.length > 40) break;
                r = t
            }
            return r.length > 40 && (r = r.substring(0, 40) + "..."), r
        }
    }

    function P(e) {
        let {
            parentChannel: t,
            parentMessageId: n,
            threadSettings: i,
            privateThreadMode: r,
            location: o,
            onThreadCreated: l,
            useDefaultThreadName: c,
            uploadHandler: E
        } = e;
        return s.useCallback(async (e, s, T) => {
            var h;
            let A = null == n,
                m = M(i, r),
                N = null !== (h = i.name) && void 0 !== h ? h : "";
            if ("" === N && c) {
                let e = y(t, n);
                N = "" !== e ? e : D.default.Messages.THREAD
            }
            let R = (0, O.getAutoArchiveDuration)(t),
                C = f.default.getChannel(p.default.castMessageIdAsChannelId(n)),
                g = await G(t, () => {
                    let e = null != n ? L.Endpoints.CHANNEL_MESSAGE_THREADS(t.id, n) : L.Endpoints.CHANNEL_THREADS(t.id);
                    return a.HTTP.post({
                        url: e,
                        body: {
                            name: N,
                            type: m ? L.ChannelTypes.PRIVATE_THREAD : t.type === L.ChannelTypes.GUILD_ANNOUNCEMENT ? L.ChannelTypes.ANNOUNCEMENT_THREAD : L.ChannelTypes.PUBLIC_THREAD,
                            auto_archive_duration: R,
                            location: o
                        }
                    })
                });
            g !== C && (u.default.clearDraft(t.id, S.DraftType.ThreadSettings), u.default.clearDraft(t.id, S.DraftType.FirstThreadMessage), null == l || l(g), (A || e.length > 0 || null != s && s.length > 0 || null != T && T.length > 0) && function(e, t, n, i, r) {
                if (null != r && null != i && i.length > 0) r(e, i, t, n);
                else if (null != n && n.length > 0) d.default.sendStickers(e.id, n, t);
                else d.default.sendMessage(e.id, I.default.parse(e, t))
            }(g, e, s, T, E)), _.default.clearAll(t.id, S.DraftType.FirstThreadMessage)
        }, [t, n, i, l, r, o, c, E])
    }

    function U(e, t, n, i, r) {
        return G(e, () => a.HTTP.post({
            url: L.Endpoints.CHANNEL_THREADS(e.id),
            body: {
                name: t,
                type: n,
                auto_archive_duration: i,
                location: r
            }
        }))
    }

    function b(e) {
        let {
            parentChannel: t,
            name: n,
            appliedTags: i,
            onThreadCreated: r,
            upload: o
        } = e;
        return s.useCallback(async (e, s, l) => {
            let d = 0,
                [c, I] = (0, T.default)(e);
            c && (e = I, d = (0, N.addFlag)(d, L.MessageFlags.SUPPRESS_NOTIFICATIONS));
            let f = (0, O.getAutoArchiveDuration)(t, null),
                h = L.Endpoints.CHANNEL_THREADS(t.id) + "?use_nested_fields=true",
                A = {
                    name: n,
                    auto_archive_duration: f,
                    applied_tags: i,
                    message: {
                        content: e,
                        sticker_ids: s,
                        flags: 0 !== d ? d : void 0
                    }
                },
                m = await G(t, () => null != l && l.length > 0 ? o(h, A, l) : a.HTTP.post({
                    url: h,
                    body: A
                }));
            return u.default.clearDraft(t.id, S.DraftType.ThreadSettings), u.default.clearDraft(t.id, S.DraftType.FirstThreadMessage), _.default.clearAll(t.id, S.DraftType.FirstThreadMessage), (0, E.trackForumPostCreated)({
                guildId: t.guild_id,
                channelId: t.id,
                postId: m.id
            }), null == r || r(m), m
        }, [t, n, r, i, o])
    }(r = i || (i = {}))[r.Disabled = 1] = "Disabled", r[r.Enabled = 2] = "Enabled", r[r.PrivateOnly = 3] = "PrivateOnly";
    async function G(e, t) {
        let n;
        let i = e.isForumLikeChannel();
        try {
            n = await t(), null == n.body ? l.default.show({
                title: D.default.Messages.ERROR,
                body: D.default.Messages.ERROR_OCCURRED_TRY_AGAIN
            }) : (o.default.dispatch({
                type: "SLOWMODE_RESET_COOLDOWN",
                slowmodeType: A.SlowmodeType.CreateThread,
                channelId: e.id
            }), o.default.dispatch({
                type: "THREAD_CREATE_LOCAL",
                channelId: n.body.id
            }))
        } catch (t) {
            var r, s, a, u, d, _;
            if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === L.AbortCodes.TOO_MANY_THREADS) l.default.show({
                title: i ? D.default.Messages.CANNOT_CREATE_FORUM_POST : D.default.Messages.CANNOT_CREATE_THREAD,
                body: i ? D.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : D.default.Messages.TOO_MANY_THREADS_MESSAGE
            });
            else if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === L.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) l.default.show({
                title: D.default.Messages.CANNOT_CREATE_THREAD,
                body: D.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
            });
            else if ((null === (a = t.body) || void 0 === a ? void 0 : a.code) === L.AbortCodes.SLOWMODE_RATE_LIMITED) {
                let n = null !== (_ = t.body.retry_after) && void 0 !== _ ? _ : 0;
                n > 0 && o.default.dispatch({
                    type: "SLOWMODE_SET_COOLDOWN",
                    channelId: e.id,
                    slowmodeType: A.SlowmodeType.CreateThread,
                    cooldownMs: n * m.default.Millis.SECOND
                })
            } else if (429 === t.status) l.default.show({
                title: i ? D.default.Messages.CANNOT_CREATE_FORUM_POST : D.default.Messages.CANNOT_CREATE_THREAD,
                body: D.default.Messages.RATE_LIMITED
            });
            else if (g.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (u = t.body) || void 0 === u ? void 0 : u.code)) throw t;
            else {
                if (g.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (d = t.body) || void 0 === d ? void 0 : d.code)) return new Promise((e, n) => {
                    null == t.body && n(), c.default.addConditionalChangeListener(() => {
                        let t = c.default.getAndDeleteMostRecentUserCreatedThreadId();
                        if (null != t) {
                            let i = f.default.getChannel(t);
                            return o.default.wait(() => {
                                null == i ? n() : e(i)
                            }), !1
                        }
                    })
                });
                l.default.show({
                    title: D.default.Messages.ERROR,
                    body: D.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                })
            }
        }
        return new Promise((e, t) => {
            null == n.body && t(), f.default.addConditionalChangeListener(() => {
                let t = f.default.getChannel(n.body.id);
                if (null != t) return o.default.wait(() => {
                    e(t)
                }), !1
            })
        })
    }
}