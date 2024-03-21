function(e, t, n) {
    "use strict";
    let a;
    n.r(t), n.d(t, {
        default: function() {
            return j
        }
    }), n("222007");
    var i = n("803182"),
        l = n("811022"),
        r = n("95410"),
        s = n("913144"),
        u = n("404118"),
        d = n("819689"),
        o = n("115718"),
        c = n("689988"),
        _ = n("408062"),
        f = n("619443"),
        E = n("582713"),
        g = n("233069"),
        p = n("982108"),
        S = n("42203"),
        m = n("305961"),
        A = n("660478"),
        h = n("18494"),
        C = n("162771"),
        T = n("718517"),
        I = n("519841"),
        v = n("787336"),
        N = n("49111"),
        y = n("724210"),
        R = n("782340");
    let O = new l.default("MessageManager");

    function D(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            forceFetch: l,
            isPreload: s,
            jumpType: u,
            skipLocalFetch: c,
            logFailures: E
        } = e;
        if (null == n) {
            E && O.log("Skipping fetch because channelId is null");
            return
        }
        if ((0, y.isStaticChannelRoute)(n)) {
            E && O.log("Skipping fetch because channelId is a static route");
            return
        }
        let g = S.default.getChannel(n);
        if ((null == g ? void 0 : g.type) === N.ChannelTypes.GUILD_STORE || (null == g ? void 0 : g.type) != null && N.ChannelTypesSets.GUILD_THREADS_ONLY.has(g.type)) {
            E && O.log("Skipping fetch because channel is a forum/store");
            return
        }
        let p = _.default.getOrCreate(n);
        I.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "fetch_messages"
        }).enabled && p.some(v.messageHasExpiredAttachmentUrl) && (O.log("Found expired attachment link, clearing messages"), _.default.clear(n), p = _.default.getOrCreate(n)), null != p.jumpTargetId && null == i && (p = p.mutate({
            jumpTargetId: null,
            jumped: !1,
            jumpType: o.JumpTypes.ANIMATED
        }), _.default.commit(p)), null != p.focusTargetId && null == i && (p = p.mutate({
            focusTargetId: null
        }), _.default.commit(p));
        let h = l;
        if (!s || f.default.isConnected() || p.loadingMore ? p.loadingMore || p.ready && !p.cached ? null != i ? h = !0 : E && O.log("Skipping fetch because no other conditions matched") : null == t || null != m.default.getGuild(t) ? h = !0 : E && O.log("Skipping fetch we are connected and have loaded messages") : h = !0, h) {
            if (_.default.commit(p.mutate({
                    loadingMore: !0
                })), null != i) d.default.jumpToMessage({
                channelId: n,
                messageId: i,
                flash: !0,
                isPreload: s,
                skipLocalFetch: c,
                jumpType: u
            });
            else if ((null == g ? void 0 : g.isThread()) && function(e) {
                    if (A.default.hasOpenedThread(e)) return !1;
                    if (null == a) {
                        var t;
                        a = null !== (t = r.default.get(M, {})) && void 0 !== t ? t : {}
                    }
                    if (e in a) return !1;
                    a[e] = Date.now();
                    let n = Date.now() - L;
                    for (let e in a) a[e] < n && delete a[e];
                    return r.default.set(M, a), !0
                }(n)) O.log("Jumping to start of thread ".concat(g.id)), d.default.fetchMessages({
                channelId: n,
                limit: N.MAX_MESSAGES_PER_CHANNEL,
                jump: {
                    messageId: n,
                    flash: !1
                },
                isPreload: s,
                skipLocalFetch: c
            });
            else if ((null == g ? void 0 : g.isThread()) && A.default.hasTrackedUnread(g.id) && !p.ready) {
                let e = A.default.getTrackedAckMessageId(g.id);
                O.log("Jumping to most recent message in thread ".concat(g.id, " - ").concat(e)), d.default.fetchMessages({
                    channelId: n,
                    limit: N.MAX_MESSAGES_PER_CHANNEL,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: s,
                    skipLocalFetch: c
                })
            } else d.default.fetchMessages({
                channelId: n,
                limit: N.MAX_MESSAGES_PER_CHANNEL,
                isPreload: s,
                skipLocalFetch: c,
                jump: {
                    jumpType: o.JumpTypes.ANIMATED
                }
            })
        }
    }
    let L = 90 * T.default.Millis.DAY,
        M = "viewedThreadIds";

    function b() {
        let e = h.default.getChannelId();
        if (null != e) {
            let n = S.default.getChannel(e);
            if (null != n) {
                var t;
                let e = (0, i.matchPath)(location.pathname, {
                    path: N.Routes.CHANNEL(":guild", ":channel", ":message"),
                    exact: !0
                });
                D({
                    guildId: n.getGuildId(),
                    channelId: n.id,
                    messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                }), F(n.getGuildId(), n.id)
            }
        }
    }

    function U() {
        let {
            isPreload: e,
            skipLocalFetch: t,
            logFailures: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = h.default.getChannelId();
        if (null != a) {
            let i = S.default.getChannel(a);
            null != i ? ((0, g.isTextChannel)(i.type) ? D({
                guildId: i.getGuildId(),
                channelId: i.id,
                isPreload: e,
                skipLocalFetch: t,
                logFailures: n
            }) : n && O.log("Skipping fetch because the selected channel is not a text channel"), F(i.getGuildId(), i.id)) : n && O.log("Skipping fetch because channel is null")
        } else n && O.log("Skipping fetch because there is no selected channel")
    }

    function P(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: a,
            jumpType: i
        } = e;
        D({
            guildId: t,
            channelId: n,
            messageId: a,
            jumpType: i
        }), F(t, n)
    }

    function w(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        D({
            guildId: t,
            channelId: n
        })
    }

    function F(e, t) {
        let n = p.default.getCurrentSidebarChannelId(t);
        if (null == n) return;
        let a = p.default.getCurrentSidebarMessageId(t);
        D({
            guildId: e,
            channelId: n,
            messageId: a
        })
    }

    function G() {
        let e = h.default.getChannelId(),
            t = C.default.getGuildId();
        if (null == t || null == e) return;
        let n = p.default.getSidebarState(e);
        (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && F(t, e)
    }

    function k(e) {
        let {
            guildId: t,
            channelId: n,
            context: a
        } = e;
        a === N.CURRENT_APP_CONTEXT && (D({
            guildId: t,
            channelId: n
        }), F(t, n))
    }

    function V(e) {
        let {
            channel: t,
            messageId: n
        } = e, a = t.guild_id;
        null != a && h.default.getChannelId(a) === t.id && D({
            guildId: a,
            channelId: t.id,
            messageId: n
        })
    }

    function x(e) {
        let {
            channelId: t
        } = e;
        d.default.fetchMessages({
            channelId: t,
            limit: N.MAX_MESSAGES_PER_CHANNEL
        })
    }

    function H(e) {
        let {
            response: t
        } = e;
        if (null == t || null == t.body) return null;
        if (t.body.code === N.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
            let e = t.body.retry_after;
            null != e && u.default.show({
                title: R.default.Messages.RATE_LIMITED,
                body: R.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                    retryAfterMinutes: Math.ceil(e / 60)
                })
            })
        }
    }
    let W = {};

    function K(e) {
        var t;
        let {
            channelId: n,
            jump: a,
            isStale: i,
            isPreview: l = !1
        } = e;
        if (l) return;
        let r = null !== (t = W[n]) && void 0 !== t ? t : 0;
        if (Date.now() - r < 10 * T.default.Millis.SECOND) return;
        W[n] = Date.now();
        let s = h.default.getChannelId(),
            u = p.default.getCurrentSidebarChannelId(s),
            o = n === s || n === u;
        i && f.default.isConnected() && o && d.default.fetchMessages({
            channelId: n,
            limit: N.MAX_MESSAGES_PER_CHANNEL,
            jump: a
        })
    }

    function B(e) {
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

    function Y(e) {
        let {
            state: t
        } = e;
        if ("active" !== t) return !1;
        let n = h.default.getChannelId();
        if (null == n) return !1;
        d.default.fetchNewLocalMessages(n, N.MAX_MESSAGES_PER_CHANNEL)
    }
    class q extends c.default {
        _initialize() {
            s.default.subscribe("CONNECTION_OPEN", b)
        }
        _terminate() {
            s.default.unsubscribe("CONNECTION_OPEN", b)
        }
        constructor(...e) {
            super(...e), this.fetchMessages = D, this.loadSelectedChannelIfNecessary = U, this.stores = new Map().set(p.default, G), this.actions = {
                APP_STATE_UPDATE: Y,
                OVERLAY_INITIALIZE: b,
                CHANNEL_SELECT: P,
                VOICE_CHANNEL_SELECT: w,
                THREAD_CREATE: V,
                THREAD_LIST_SYNC: () => U(),
                CHANNEL_CREATE: V,
                CHANNEL_PRELOAD: k,
                THREAD_CREATE_LOCAL: x,
                GUILD_CREATE: () => U(),
                MESSAGE_END_EDIT: H,
                LOAD_MESSAGES_SUCCESS: K,
                UPLOAD_FAIL: B,
                CHANNEL_DELETE: () => U(),
                THREAD_DELETE: () => U()
            }
        }
    }
    var j = new q
}