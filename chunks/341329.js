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
        u = n("404118"),
        s = n("819689"),
        o = n("115718"),
        d = n("689988"),
        E = n("408062"),
        c = n("619443"),
        f = n("582713"),
        A = n("233069"),
        S = n("982108"),
        C = n("42203"),
        T = n("305961"),
        N = n("660478"),
        O = n("18494"),
        p = n("162771"),
        g = n("718517"),
        I = n("519841"),
        m = n("787336"),
        R = n("49111"),
        L = n("724210"),
        h = n("782340");
    let v = new i.default("MessageManager");

    function M(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: l,
            forceFetch: i,
            isPreload: r,
            jumpType: u,
            skipLocalFetch: d,
            logFailures: f
        } = e;
        if (null == n) {
            f && v.log("Skipping fetch because channelId is null");
            return
        }
        if ((0, L.isStaticChannelRoute)(n)) {
            f && v.log("Skipping fetch because channelId is a static route");
            return
        }
        let A = C.default.getChannel(n);
        if ((null == A ? void 0 : A.type) === R.ChannelTypes.GUILD_STORE || (null == A ? void 0 : A.type) != null && R.ChannelTypesSets.GUILD_THREADS_ONLY.has(A.type)) {
            f && v.log("Skipping fetch because channel is a forum/store");
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
        let O = i;
        if (!r || c.default.isConnected() || S.loadingMore ? S.loadingMore || S.ready && !S.cached ? null != l ? O = !0 : f && v.log("Skipping fetch because no other conditions matched") : null == t || null != T.default.getGuild(t) ? O = !0 : f && v.log("Skipping fetch we are connected and have loaded messages") : O = !0, O) {
            if (E.default.commit(S.mutate({
                    loadingMore: !0
                })), null != l) s.default.jumpToMessage({
                channelId: n,
                messageId: l,
                flash: !0,
                isPreload: r,
                skipLocalFetch: d,
                jumpType: u
            });
            else if ((null == A ? void 0 : A.isThread()) && function(e) {
                    if (N.default.hasOpenedThread(e)) return !1;
                    if (null == a) {
                        var t;
                        a = null !== (t = _.default.get(b, {})) && void 0 !== t ? t : {}
                    }
                    if (e in a) return !1;
                    a[e] = Date.now();
                    let n = Date.now() - D;
                    for (let e in a) a[e] < n && delete a[e];
                    return _.default.set(b, a), !0
                }(n)) v.log("Jumping to start of thread ".concat(A.id)), s.default.fetchMessages({
                channelId: n,
                limit: R.MAX_MESSAGES_PER_CHANNEL,
                jump: {
                    messageId: n,
                    flash: !1
                },
                isPreload: r,
                skipLocalFetch: d
            });
            else if ((null == A ? void 0 : A.isThread()) && N.default.hasTrackedUnread(A.id) && !S.ready) {
                let e = N.default.getTrackedAckMessageId(A.id);
                v.log("Jumping to most recent message in thread ".concat(A.id, " - ").concat(e)), s.default.fetchMessages({
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
            } else s.default.fetchMessages({
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
    let D = 90 * g.default.Millis.DAY,
        b = "viewedThreadIds";

    function y() {
        let e = O.default.getChannelId();
        if (null != e) {
            let n = C.default.getChannel(e);
            if (null != n) {
                var t;
                let e = (0, l.matchPath)(location.pathname, {
                    path: R.Routes.CHANNEL(":guild", ":channel", ":message"),
                    exact: !0
                });
                M({
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
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = O.default.getChannelId();
        if (null != a) {
            let l = C.default.getChannel(a);
            null != l ? ((0, A.isTextChannel)(l.type) ? M({
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
        M({
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
        M({
            guildId: t,
            channelId: n
        })
    }

    function P(e, t) {
        let n = S.default.getCurrentSidebarChannelId(t);
        if (null == n) return;
        let a = S.default.getCurrentSidebarMessageId(t);
        M({
            guildId: e,
            channelId: n,
            messageId: a
        })
    }

    function w() {
        let e = O.default.getChannelId(),
            t = p.default.getGuildId();
        if (null == t || null == e) return;
        let n = S.default.getSidebarState(e);
        (null == n ? void 0 : n.type) !== f.SidebarType.VIEW_CHANNEL && P(t, e)
    }

    function G(e) {
        let {
            guildId: t,
            channelId: n,
            context: a
        } = e;
        a === R.CURRENT_APP_CONTEXT && (M({
            guildId: t,
            channelId: n
        }), P(t, n))
    }

    function Y(e) {
        let {
            channel: t,
            messageId: n
        } = e, a = t.guild_id;
        null != a && O.default.getChannelId(a) === t.id && M({
            guildId: a,
            channelId: t.id,
            messageId: n
        })
    }

    function W(e) {
        let {
            channelId: t
        } = e;
        s.default.fetchMessages({
            channelId: t,
            limit: R.MAX_MESSAGES_PER_CHANNEL
        })
    }

    function H(e) {
        let {
            response: t
        } = e;
        if (null == t || null == t.body) return null;
        if (t.body.code === R.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
            let e = t.body.retry_after;
            null != e && u.default.show({
                title: h.default.Messages.RATE_LIMITED,
                body: h.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                    retryAfterMinutes: Math.ceil(e / 60)
                })
            })
        }
    }
    let V = {};

    function K(e) {
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
        let r = O.default.getChannelId(),
            u = S.default.getCurrentSidebarChannelId(r),
            o = n === r || n === u;
        l && c.default.isConnected() && o && s.default.fetchMessages({
            channelId: n,
            limit: R.MAX_MESSAGES_PER_CHANNEL,
            jump: a
        })
    }

    function B(e) {
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
        let n = O.default.getChannelId();
        if (null == n) return !1;
        s.default.fetchNewLocalMessages(n, R.MAX_MESSAGES_PER_CHANNEL)
    }
    class j extends d.default {
        _initialize() {
            r.default.subscribe("CONNECTION_OPEN", y)
        }
        _terminate() {
            r.default.unsubscribe("CONNECTION_OPEN", y)
        }
        constructor(...e) {
            super(...e), this.fetchMessages = M, this.loadSelectedChannelIfNecessary = U, this.stores = new Map().set(S.default, w), this.actions = {
                APP_STATE_UPDATE: x,
                OVERLAY_INITIALIZE: y,
                CHANNEL_SELECT: F,
                VOICE_CHANNEL_SELECT: k,
                THREAD_CREATE: Y,
                THREAD_LIST_SYNC: () => U(),
                CHANNEL_CREATE: Y,
                CHANNEL_PRELOAD: G,
                THREAD_CREATE_LOCAL: W,
                GUILD_CREATE: () => U(),
                MESSAGE_END_EDIT: H,
                LOAD_MESSAGES_SUCCESS: K,
                UPLOAD_FAIL: B,
                CHANNEL_DELETE: () => U(),
                THREAD_DELETE: () => U()
            }
        }
    }
    var X = new j
}