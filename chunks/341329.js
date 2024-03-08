function(e, t, n) {
    "use strict";
    let a;
    n.r(t), n.d(t, {
        default: function() {
            return X
        }
    }), n("222007");
    var l = n("803182"),
        i = n("811022"),
        r = n("95410"),
        s = n("913144"),
        _ = n("404118"),
        u = n("819689"),
        o = n("115718"),
        d = n("689988"),
        E = n("408062"),
        f = n("619443"),
        c = n("582713"),
        A = n("233069"),
        S = n("982108"),
        C = n("42203"),
        T = n("305961"),
        N = n("660478"),
        p = n("18494"),
        g = n("162771"),
        O = n("718517"),
        I = n("519841"),
        m = n("787336"),
        R = n("49111"),
        L = n("724210"),
        h = n("782340");
    let v = new i.default("MessageManager");

    function y(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: l,
            forceFetch: i,
            isPreload: s,
            jumpType: _,
            skipLocalFetch: d,
            logFailures: c
        } = e;
        if (null == n) {
            c && v.log("Skipping fetch because channelId is null");
            return
        }
        if ((0, L.isStaticChannelRoute)(n)) {
            c && v.log("Skipping fetch because channelId is a static route");
            return
        }
        let A = C.default.getChannel(n);
        if ((null == A ? void 0 : A.type) === R.ChannelTypes.GUILD_STORE || (null == A ? void 0 : A.type) != null && R.ChannelTypesSets.GUILD_THREADS_ONLY.has(A.type)) {
            c && v.log("Skipping fetch because channel is a forum/store");
            return
        }
        let S = E.default.getOrCreate(n);
        I.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "fetch_messages"
        }).enabled && S.some(m.messageHasExpiredAttachmentUrl) && (v.log("Found expired attachment link, clearing messages"), E.default.clear(n), S = E.default.getOrCreate(n)), null != S.jumpTargetId && null == l && (S = S.mutate({
            jumpTargetId: null,
            jumped: !1,
            jumpType: o.JumpTypes.ANIMATED
        }), E.default.commit(S)), null != S.focusTargetId && null == l && (S = S.mutate({
            focusTargetId: null
        }), E.default.commit(S));
        let p = i;
        if (!s || f.default.isConnected() || S.loadingMore ? S.loadingMore || S.ready && !S.cached ? null != l ? p = !0 : c && v.log("Skipping fetch because no other conditions matched") : null == t || null != T.default.getGuild(t) ? p = !0 : c && v.log("Skipping fetch we are connected and have loaded messages") : p = !0, p) {
            if (E.default.commit(S.mutate({
                    loadingMore: !0
                })), null != l) u.default.jumpToMessage({
                channelId: n,
                messageId: l,
                flash: !0,
                isPreload: s,
                skipLocalFetch: d,
                jumpType: _
            });
            else if ((null == A ? void 0 : A.isThread()) && function(e) {
                    if (N.default.hasOpenedThread(e)) return !1;
                    if (null == a) {
                        var t;
                        a = null !== (t = r.default.get(M, {})) && void 0 !== t ? t : {}
                    }
                    if (e in a) return !1;
                    a[e] = Date.now();
                    let n = Date.now() - b;
                    for (let e in a) a[e] < n && delete a[e];
                    return r.default.set(M, a), !0
                }(n)) v.log("Jumping to start of thread ".concat(A.id)), u.default.fetchMessages({
                channelId: n,
                limit: R.MAX_MESSAGES_PER_CHANNEL,
                jump: {
                    messageId: n,
                    flash: !1
                },
                isPreload: s,
                skipLocalFetch: d
            });
            else if ((null == A ? void 0 : A.isThread()) && N.default.hasTrackedUnread(A.id) && !S.ready) {
                let e = N.default.getTrackedAckMessageId(A.id);
                v.log("Jumping to most recent message in thread ".concat(A.id, " - ").concat(e)), u.default.fetchMessages({
                    channelId: n,
                    limit: R.MAX_MESSAGES_PER_CHANNEL,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: s,
                    skipLocalFetch: d
                })
            } else u.default.fetchMessages({
                channelId: n,
                limit: R.MAX_MESSAGES_PER_CHANNEL,
                isPreload: s,
                skipLocalFetch: d,
                jump: {
                    jumpType: o.JumpTypes.ANIMATED
                }
            })
        }
    }
    let b = 90 * O.default.Millis.DAY,
        M = "viewedThreadIds";

    function D() {
        let e = p.default.getChannelId();
        if (null != e) {
            let n = C.default.getChannel(e);
            if (null != n) {
                var t;
                let e = (0, l.matchPath)(location.pathname, {
                    path: R.Routes.CHANNEL(":guild", ":channel", ":message"),
                    exact: !0
                });
                y({
                    guildId: n.getGuildId(),
                    channelId: n.id,
                    messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                }), P(n.getGuildId(), n.id)
            }
        }
    }

    function U() {
        let {
            isPreload: e,
            skipLocalFetch: t,
            logFailures: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = p.default.getChannelId();
        if (null != a) {
            let l = C.default.getChannel(a);
            null != l ? ((0, A.isTextChannel)(l.type) ? y({
                guildId: l.getGuildId(),
                channelId: l.id,
                isPreload: e,
                skipLocalFetch: t,
                logFailures: n
            }) : n && v.log("Skipping fetch because the selected channel is not a text channel"), P(l.getGuildId(), l.id)) : n && v.log("Skipping fetch because channel is null")
        } else n && v.log("Skipping fetch because there is no selected channel")
    }

    function k(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: a,
            jumpType: l
        } = e;
        y({
            guildId: t,
            channelId: n,
            messageId: a,
            jumpType: l
        }), P(t, n)
    }

    function F(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        y({
            guildId: t,
            channelId: n
        })
    }

    function P(e, t) {
        let n = S.default.getCurrentSidebarChannelId(t);
        if (null == n) return;
        let a = S.default.getCurrentSidebarMessageId(t);
        y({
            guildId: e,
            channelId: n,
            messageId: a
        })
    }

    function w() {
        let e = p.default.getChannelId(),
            t = g.default.getGuildId();
        if (null == t || null == e) return;
        let n = S.default.getSidebarState(e);
        (null == n ? void 0 : n.type) !== c.SidebarType.VIEW_CHANNEL && P(t, e)
    }

    function G(e) {
        let {
            guildId: t,
            channelId: n,
            context: a
        } = e;
        a === R.CURRENT_APP_CONTEXT && (y({
            guildId: t,
            channelId: n
        }), P(t, n))
    }

    function Y(e) {
        let {
            channel: t,
            messageId: n
        } = e, a = t.guild_id;
        null != a && p.default.getChannelId(a) === t.id && y({
            guildId: a,
            channelId: t.id,
            messageId: n
        })
    }

    function W(e) {
        let {
            channelId: t
        } = e;
        u.default.fetchMessages({
            channelId: t,
            limit: R.MAX_MESSAGES_PER_CHANNEL
        })
    }

    function B(e) {
        let {
            response: t
        } = e;
        if (null == t || null == t.body) return null;
        if (t.body.code === R.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
            let e = t.body.retry_after;
            null != e && _.default.show({
                title: h.default.Messages.RATE_LIMITED,
                body: h.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                    retryAfterMinutes: Math.ceil(e / 60)
                })
            })
        }
    }
    let H = {};

    function V(e) {
        var t;
        let {
            channelId: n,
            jump: a,
            isStale: l,
            isPreview: i = !1
        } = e;
        if (i) return;
        let r = null !== (t = H[n]) && void 0 !== t ? t : 0;
        if (Date.now() - r < 10 * O.default.Millis.SECOND) return;
        H[n] = Date.now();
        let s = p.default.getChannelId(),
            _ = S.default.getCurrentSidebarChannelId(s),
            o = n === s || n === _;
        l && f.default.isConnected() && o && u.default.fetchMessages({
            channelId: n,
            limit: R.MAX_MESSAGES_PER_CHANNEL,
            jump: a
        })
    }

    function K(e) {
        let {
            channelId: t,
            messageRecord: n
        } = e;
        null != n && s.default.dispatch({
            type: "MESSAGE_SEND_FAILED",
            channelId: t,
            messageId: n.id
        })
    }

    function x(e) {
        let {
            state: t
        } = e;
        if ("active" !== t) return !1;
        let n = p.default.getChannelId();
        if (null == n) return !1;
        u.default.fetchNewLocalMessages(n, R.MAX_MESSAGES_PER_CHANNEL)
    }
    class j extends d.default {
        _initialize() {
            s.default.subscribe("CONNECTION_OPEN", D)
        }
        _terminate() {
            s.default.unsubscribe("CONNECTION_OPEN", D)
        }
        constructor(...e) {
            super(...e), this.fetchMessages = y, this.loadSelectedChannelIfNecessary = U, this.stores = new Map().set(S.default, w), this.actions = {
                APP_STATE_UPDATE: x,
                OVERLAY_INITIALIZE: D,
                CHANNEL_SELECT: k,
                VOICE_CHANNEL_SELECT: F,
                THREAD_CREATE: Y,
                THREAD_LIST_SYNC: () => U(),
                CHANNEL_CREATE: Y,
                CHANNEL_PRELOAD: G,
                THREAD_CREATE_LOCAL: W,
                GUILD_CREATE: () => U(),
                MESSAGE_END_EDIT: B,
                LOAD_MESSAGES_SUCCESS: V,
                UPLOAD_FAIL: K,
                CHANNEL_DELETE: () => U(),
                THREAD_DELETE: () => U()
            }
        }
    }
    var X = new j
}