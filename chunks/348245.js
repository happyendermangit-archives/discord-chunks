function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("47120");
    var r = n("266067"),
        s = n("259443"),
        a = n("433517"),
        o = n("570140"),
        l = n("668781"),
        u = n("904245"),
        d = n("593472"),
        _ = n("147913"),
        c = n("89892"),
        E = n("38618"),
        I = n("897473"),
        T = n("131704"),
        f = n("433355"),
        S = n("592125"),
        A = n("430824"),
        h = n("306680"),
        m = n("944486"),
        N = n("914010"),
        O = n("70956"),
        p = n("796798"),
        R = n("198620"),
        C = n("981631"),
        g = n("176505"),
        L = n("689938");

    function D(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let v = new s.Logger("MessageManager");

    function M(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: r,
            forceFetch: s,
            isPreload: o,
            jumpType: l,
            skipLocalFetch: _,
            logFailures: I
        } = e;
        if (null == n) {
            I && v.log("Skipping fetch because channelId is null");
            return
        }
        if ((0, g.isStaticChannelRoute)(n)) {
            I && v.log("Skipping fetch because channelId is a static route");
            return
        }
        let T = S.default.getChannel(n);
        if ((null == T ? void 0 : T.type) === C.ChannelTypes.GUILD_STORE || (null == T ? void 0 : T.type) != null && C.ChannelTypesSets.GUILD_THREADS_ONLY.has(T.type)) {
            I && v.log("Skipping fetch because channel is a forum/store");
            return
        }
        let f = c.default.getOrCreate(n);
        p.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "fetch_messages"
        }).enabled && f.some(R.messageHasExpiredAttachmentUrl) && (v.log("Found expired attachment link, clearing messages"), c.default.clear(n), f = c.default.getOrCreate(n)), null != f.jumpTargetId && null == r && (f = f.mutate({
            jumpTargetId: null,
            jumped: !1,
            jumpType: d.JumpTypes.ANIMATED
        }), c.default.commit(f)), null != f.focusTargetId && null == r && (f = f.mutate({
            focusTargetId: null
        }), c.default.commit(f));
        let m = s;
        if (!o || E.default.isConnected() || f.loadingMore ? f.loadingMore || f.ready && !f.cached ? null != r ? m = !0 : I && v.log("Skipping fetch because no other conditions matched") : null == t || null != A.default.getGuild(t) ? m = !0 : I && v.log("Skipping fetch we are connected and have loaded messages") : m = !0, m) {
            if (c.default.commit(f.mutate({
                    loadingMore: !0
                })), null != r) u.default.jumpToMessage({
                channelId: n,
                messageId: r,
                flash: !0,
                isPreload: o,
                skipLocalFetch: _,
                jumpType: l
            });
            else if ((null == T ? void 0 : T.isThread()) && function(e) {
                    if (h.default.hasOpenedThread(e)) return !1;
                    if (null == i) {
                        var t;
                        i = null !== (t = a.Storage.get(P, {})) && void 0 !== t ? t : {}
                    }
                    if (e in i) return !1;
                    i[e] = Date.now();
                    let n = Date.now() - y;
                    for (let e in i) i[e] < n && delete i[e];
                    return a.Storage.set(P, i), !0
                }(n)) v.log("Jumping to start of thread ".concat(T.id)), u.default.fetchMessages({
                channelId: n,
                limit: C.MAX_MESSAGES_PER_CHANNEL,
                jump: {
                    messageId: n,
                    flash: !1
                },
                isPreload: o,
                skipLocalFetch: _
            });
            else if ((null == T ? void 0 : T.isThread()) && h.default.hasTrackedUnread(T.id) && !f.ready) {
                let e = h.default.getTrackedAckMessageId(T.id);
                v.log("Jumping to most recent message in thread ".concat(T.id, " - ").concat(e)), u.default.fetchMessages({
                    channelId: n,
                    limit: C.MAX_MESSAGES_PER_CHANNEL,
                    jump: {
                        messageId: e,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: o,
                    skipLocalFetch: _
                })
            } else u.default.fetchMessages({
                channelId: n,
                limit: C.MAX_MESSAGES_PER_CHANNEL,
                isPreload: o,
                skipLocalFetch: _,
                jump: {
                    jumpType: d.JumpTypes.ANIMATED
                }
            })
        }
    }
    let y = 90 * O.default.Millis.DAY,
        P = "viewedThreadIds";

    function U() {
        let e = m.default.getChannelId();
        if (null != e) {
            let n = S.default.getChannel(e);
            if (null != n) {
                var t;
                let e = (0, r.matchPath)(location.pathname, {
                    path: C.Routes.CHANNEL(":guild", ":channel", ":message"),
                    exact: !0
                });
                M({
                    guildId: n.getGuildId(),
                    channelId: n.id,
                    messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                }), k(n.getGuildId(), n.id)
            }
        }
    }

    function b() {
        let {
            isPreload: e,
            skipLocalFetch: t,
            logFailures: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = m.default.getChannelId();
        if (null != i) {
            let r = S.default.getChannel(i);
            null != r ? ((0, T.isTextChannel)(r.type) ? M({
                guildId: r.getGuildId(),
                channelId: r.id,
                isPreload: e,
                skipLocalFetch: t,
                logFailures: n
            }) : n && v.log("Skipping fetch because the selected channel is not a text channel"), k(r.getGuildId(), r.id)) : n && v.log("Skipping fetch because channel is null")
        } else n && v.log("Skipping fetch because there is no selected channel")
    }

    function G(e) {
        let {
            guildId: t,
            channelId: n,
            messageId: i,
            jumpType: r
        } = e;
        M({
            guildId: t,
            channelId: n,
            messageId: i,
            jumpType: r
        }), k(t, n)
    }

    function w(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        M({
            guildId: t,
            channelId: n
        })
    }

    function k(e, t) {
        let n = f.default.getCurrentSidebarChannelId(t);
        if (null != n) M({
            guildId: e,
            channelId: n,
            messageId: f.default.getCurrentSidebarMessageId(t)
        })
    }

    function B() {
        let e = m.default.getChannelId(),
            t = N.default.getGuildId();
        if (null == t || null == e) return;
        let n = f.default.getSidebarState(e);
        (null == n ? void 0 : n.type) !== I.SidebarType.VIEW_CHANNEL && k(t, e)
    }

    function V(e) {
        let {
            guildId: t,
            channelId: n,
            context: i
        } = e;
        i === C.CURRENT_APP_CONTEXT && (M({
            guildId: t,
            channelId: n
        }), k(t, n))
    }

    function F(e) {
        let {
            channel: t,
            messageId: n
        } = e, i = t.guild_id;
        null != i && m.default.getChannelId(i) === t.id && M({
            guildId: i,
            channelId: t.id,
            messageId: n
        })
    }

    function x(e) {
        let {
            channelId: t
        } = e;
        u.default.fetchMessages({
            channelId: t,
            limit: C.MAX_MESSAGES_PER_CHANNEL
        })
    }

    function H(e) {
        let {
            response: t
        } = e;
        if (null == t || null == t.body) return null;
        if (t.body.code === C.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
            let e = t.body.retry_after;
            null != e && l.default.show({
                title: L.default.Messages.RATE_LIMITED,
                body: L.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                    retryAfterMinutes: Math.ceil(e / 60)
                })
            })
        }
    }
    let Y = {};

    function j(e) {
        var t;
        let {
            channelId: n,
            jump: i,
            isStale: r,
            isPreview: s = !1
        } = e;
        if (s) return;
        let a = null !== (t = Y[n]) && void 0 !== t ? t : 0;
        if (Date.now() - a < 10 * O.default.Millis.SECOND) return;
        Y[n] = Date.now();
        let o = m.default.getChannelId(),
            l = f.default.getCurrentSidebarChannelId(o),
            d = n === o || n === l;
        r && E.default.isConnected() && d && u.default.fetchMessages({
            channelId: n,
            limit: C.MAX_MESSAGES_PER_CHANNEL,
            jump: i
        })
    }

    function W(e) {
        let {
            channelId: t,
            messageRecord: n,
            reason: i
        } = e;
        null != n && o.default.dispatch({
            type: "MESSAGE_SEND_FAILED",
            channelId: t,
            messageId: n.id,
            reason: null != i ? i : null
        })
    }

    function K(e) {
        let {
            state: t
        } = e;
        if ("active" !== t) return !1;
        let n = m.default.getChannelId();
        if (null == n) return !1;
        u.default.fetchNewLocalMessages(n, C.MAX_MESSAGES_PER_CHANNEL)
    }
    class z extends _.default {
        _initialize() {
            o.default.subscribe("CONNECTION_OPEN", U)
        }
        _terminate() {
            o.default.unsubscribe("CONNECTION_OPEN", U)
        }
        constructor(...e) {
            super(...e), D(this, "fetchMessages", M), D(this, "loadSelectedChannelIfNecessary", b), D(this, "stores", new Map().set(f.default, B)), D(this, "actions", {
                APP_STATE_UPDATE: K,
                OVERLAY_INITIALIZE: U,
                CHANNEL_SELECT: G,
                VOICE_CHANNEL_SELECT: w,
                THREAD_CREATE: F,
                THREAD_LIST_SYNC: () => b(),
                CHANNEL_CREATE: F,
                CHANNEL_PRELOAD: V,
                THREAD_CREATE_LOCAL: x,
                GUILD_CREATE: () => b(),
                MESSAGE_END_EDIT: H,
                LOAD_MESSAGES_SUCCESS: j,
                UPLOAD_FAIL: W,
                CHANNEL_DELETE: () => b(),
                THREAD_DELETE: () => b()
            })
        }
    }
    t.default = new z
}