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
        _ = n("95410"),
        r = n("913144"),
        s = n("404118"),
        u = n("819689"),
        o = n("115718"),
        d = n("689988"),
        E = n("408062"),
        f = n("619443"),
        c = n("582713"),
        S = n("233069"),
        A = n("982108"),
        T = n("42203"),
        C = n("305961"),
        N = n("660478"),
        p = n("18494"),
        O = n("162771"),
        g = n("718517"),
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
            isPreload: r,
            jumpType: s,
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
        let S = T.default.getChannel(n);
        if ((null == S ? void 0 : S.type) === R.ChannelTypes.GUILD_STORE || (null == S ? void 0 : S.type) != null && R.ChannelTypesSets.GUILD_THREADS_ONLY.has(S.type)) {
            c && v.log("Skipping fetch because channel is a forum/store");
            return
        }
        let A = E.default.getOrCreate(n);
        I.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "fetch_messages"
        }).enabled && A.some(m.messageHasExpiredAttachmentUrl) && (v.log("Found expired attachment link, clearing messages"), E.default.clear(n), A = E.default.getOrCreate(n)), null != A.jumpTargetId && null == l && (A = A.mutate({
            jumpTargetId: null,
            jumped: !1,
            jumpType: o.JumpTypes.ANIMATED
        }), E.default.commit(A)), null != A.focusTargetId && null == l && (A = A.mutate({
            focusTargetId: null
        }), E.default.commit(A));
        let p = i;
        if (!r || f.default.isConnected() || A.loadingMore ? A.loadingMore || A.ready && !A.cached ? null != l ? p = !0 : c && v.log("Skipping fetch because no other conditions matched") : null == t || null != C.default.getGuild(t) ? p = !0 : c && v.log("Skipping fetch we are connected and have loaded messages") : p = !0, p) {
            if (E.default.commit(A.mutate({
                    loadingMore: !0
                })), null != l) u.default.jumpToMessage({
                channelId: n,
                messageId: l,
                flash: !0,
                isPreload: r,
                skipLocalFetch: d,
                jumpType: s
            });
            else if ((null == S ? void 0 : S.isThread()) && function(e) {
                    if (N.default.hasOpenedThread(e)) return !1;
                    if (null == a) {
                        var t;
                        a = null !== (t = _.default.get(M, {})) && void 0 !== t ? t : {}
                    }
                    if (e in a) return !1;
                    a[e] = Date.now();
                    let n = Date.now() - b;
                    for (let e in a) a[e] < n && delete a[e];
                    return _.default.set(M, a), !0
                }(n)) v.log("Jumping to start of thread ".concat(S.id)), u.default.fetchMessages({
                channelId: n,
                limit: R.MAX_MESSAGES_PER_CHANNEL,
                jump: {
                    messageId: n,
                    flash: !1
                },
                isPreload: r,
                skipLocalFetch: d
            });
            else if ((null == S ? void 0 : S.isThread()) && N.default.hasTrackedUnread(S.id) && !A.ready) {
                let e = N.default.getTrackedAckMessageId(S.id);
                v.log("Jumping to most recent message in thread ".concat(S.id, " - ").concat(e)), u.default.fetchMessages({
                    channelId: n,
                    limit: R.MAX_MESSAGES_PER_CHANNEL,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: r,
                    skipLocalFetch: d
                })
            } else u.default.fetchMessages({
                channelId: n,
                limit: R.MAX_MESSAGES_PER_CHANNEL,
                isPreload: r,
                skipLocalFetch: d,
                jump: {
                    jumpType: o.JumpTypes.ANIMATED
                }
            })
        }
    }
    let b = 90 * g.default.Millis.DAY,
        M = "viewedThreadIds";

    function D() {
        let e = p.default.getChannelId();
        if (null != e) {
            let n = T.default.getChannel(e);
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
            let l = T.default.getChannel(a);
            null != l ? ((0, S.isTextChannel)(l.type) ? y({
                guildId: l.getGuildId(),
                channelId: l.id,
                isPreload: e,
                skipLocalFetch: t,
                logFailures: n
            }) : n && v.log("Skipping fetch because the selected channel is not a text channel"), P(l.getGuildId(), l.id)) : n && v.log("Skipping fetch because channel is null")
        } else n && v.log("Skipping fetch because there is no selected channel")
    }

    function F(e) {
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

    function k(e) {
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
        let n = A.default.getCurrentSidebarChannelId(t);
        if (null == n) return;
        let a = A.default.getCurrentSidebarMessageId(t);
        y({
            guildId: e,
            channelId: n,
            messageId: a
        })
    }

    function w() {
        let e = p.default.getChannelId(),
            t = O.default.getGuildId();
        if (null == t || null == e) return;
        let n = A.default.getSidebarState(e);
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
            null != e && s.default.show({
                title: h.default.Messages.RATE_LIMITED,
                body: h.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                    retryAfterMinutes: Math.ceil(e / 60)
                })
            })
        }
    }
    let V = {};

    function H(e) {
        var t;
        let {
            channelId: n,
            jump: a,
            isStale: l,
            isPreview: i = !1
        } = e;
        if (i) return;
        let _ = null !== (t = V[n]) && void 0 !== t ? t : 0;
        if (Date.now() - _ < 10 * g.default.Millis.SECOND) return;
        V[n] = Date.now();
        let r = p.default.getChannelId(),
            s = A.default.getCurrentSidebarChannelId(r),
            o = n === r || n === s;
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
        null != n && r.default.dispatch({
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
            r.default.subscribe("CONNECTION_OPEN", D)
        }
        _terminate() {
            r.default.unsubscribe("CONNECTION_OPEN", D)
        }
        constructor(...e) {
            super(...e), this.fetchMessages = y, this.loadSelectedChannelIfNecessary = U, this.stores = new Map().set(A.default, w), this.actions = {
                APP_STATE_UPDATE: x,
                OVERLAY_INITIALIZE: D,
                CHANNEL_SELECT: F,
                VOICE_CHANNEL_SELECT: k,
                THREAD_CREATE: Y,
                THREAD_LIST_SYNC: () => U(),
                CHANNEL_CREATE: Y,
                CHANNEL_PRELOAD: G,
                THREAD_CREATE_LOCAL: W,
                GUILD_CREATE: () => U(),
                MESSAGE_END_EDIT: B,
                LOAD_MESSAGES_SUCCESS: H,
                UPLOAD_FAIL: K,
                CHANNEL_DELETE: () => U(),
                THREAD_DELETE: () => U()
            }
        }
    }
    var X = new j
}