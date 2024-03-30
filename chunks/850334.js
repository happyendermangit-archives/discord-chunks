function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("266067"),
        i = n("188129"),
        a = n("242880"),
        u = n("629815"),
        s = n("483587"),
        l = n("443458"),
        c = n("660939"),
        f = n("807471"),
        d = n("71578"),
        _ = n("950879"),
        E = n("75154"),
        p = n("569492"),
        m = n("248579"),
        y = n("935741"),
        I = n("306912"),
        h = n("879547"),
        O = n("894288"),
        T = n("63116"),
        S = n("388990"),
        v = n("704213"),
        g = n("396242"),
        A = n("281767"),
        b = n("928204"),
        N = n("941504");

    function R(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function C(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var M = new i.Logger("MessageManager");

    function U(e) {
        var t = e.guildId,
            n = e.channelId,
            o = e.messageId,
            i = e.forceFetch,
            u = e.isPreload,
            s = e.jumpType,
            f = e.skipLocalFetch,
            E = e.logFailures;
        if (null == n) {
            E && M.log("Skipping fetch because channelId is null");
            return
        }
        if ((0, b.isStaticChannelRoute)(n)) {
            E && M.log("Skipping fetch because channelId is a static route");
            return
        }
        var p = y.default.getChannel(n);
        if ((null == p ? void 0 : p.type) === A.ChannelTypes.GUILD_STORE || (null == p ? void 0 : p.type) != null && A.ChannelTypesSets.GUILD_THREADS_ONLY.has(p.type)) {
            E && M.log("Skipping fetch because channel is a forum/store");
            return
        }
        var m = d.default.getOrCreate(n);
        v.AttachmentLinkRefreshExperiment.getCurrentConfig({
            location: "fetch_messages"
        }).enabled && m.some(g.messageHasExpiredAttachmentUrl) && (M.log("Found expired attachment link, clearing messages"), d.default.clear(n), m = d.default.getOrCreate(n)), null != m.jumpTargetId && null == o && (m = m.mutate({
            jumpTargetId: null,
            jumped: !1,
            jumpType: c.JumpTypes.ANIMATED
        }), d.default.commit(m)), null != m.focusTargetId && null == o && (m = m.mutate({
            focusTargetId: null
        }), d.default.commit(m));
        var O = i;
        if (!u || _.default.isConnected() || m.loadingMore ? m.loadingMore || m.ready && !m.cached ? null != o ? O = !0 : E && M.log("Skipping fetch because no other conditions matched") : null == t || null != I.default.getGuild(t) ? O = !0 : E && M.log("Skipping fetch we are connected and have loaded messages") : O = !0, O) {
            if (d.default.commit(m.mutate({
                    loadingMore: !0
                })), null != o) l.default.jumpToMessage({
                channelId: n,
                messageId: o,
                flash: !0,
                isPreload: u,
                skipLocalFetch: f,
                jumpType: s
            });
            else if ((null == p ? void 0 : p.isThread()) && function(e) {
                    if (h.default.hasOpenedThread(e)) return !1;
                    if (null == r) {
                        var t;
                        r = null !== (t = a.Storage.get(k, {})) && void 0 !== t ? t : {}
                    }
                    if (e in r) return !1;
                    r[e] = Date.now();
                    var n = Date.now() - w;
                    for (var o in r) r[o] < n && delete r[o];
                    return a.Storage.set(k, r), !0
                }(n)) M.log("Jumping to start of thread ".concat(p.id)), l.default.fetchMessages({
                channelId: n,
                limit: A.MAX_MESSAGES_PER_CHANNEL,
                jump: {
                    messageId: n,
                    flash: !1
                },
                isPreload: u,
                skipLocalFetch: f
            });
            else if ((null == p ? void 0 : p.isThread()) && h.default.hasTrackedUnread(p.id) && !m.ready) {
                var T = h.default.getTrackedAckMessageId(p.id);
                M.log("Jumping to most recent message in thread ".concat(p.id, " - ").concat(T)), l.default.fetchMessages({
                    channelId: n,
                    limit: A.MAX_MESSAGES_PER_CHANNEL,
                    jump: {
                        messageId: T,
                        flash: !1,
                        offset: 1
                    },
                    isPreload: u,
                    skipLocalFetch: f
                })
            } else l.default.fetchMessages({
                channelId: n,
                limit: A.MAX_MESSAGES_PER_CHANNEL,
                isPreload: u,
                skipLocalFetch: f,
                jump: {
                    jumpType: c.JumpTypes.ANIMATED
                }
            })
        }
    }
    var w = 90 * S.default.Millis.DAY,
        k = "viewedThreadIds";

    function G() {
        var e = O.default.getChannelId();
        if (null != e) {
            var t = y.default.getChannel(e);
            if (null != t) {
                var n, r = (0, o.matchPath)(location.pathname, {
                    path: A.Routes.CHANNEL(":guild", ":channel", ":message"),
                    exact: !0
                });
                U({
                    guildId: t.getGuildId(),
                    channelId: t.id,
                    messageId: null == r ? void 0 : null === (n = r.params) || void 0 === n ? void 0 : n.message
                }), V(t.getGuildId(), t.id)
            }
        }
    }

    function B() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.isPreload,
            n = e.skipLocalFetch,
            r = e.logFailures,
            o = O.default.getChannelId();
        if (null != o) {
            var i = y.default.getChannel(o);
            null != i ? ((0, p.isTextChannel)(i.type) ? U({
                guildId: i.getGuildId(),
                channelId: i.id,
                isPreload: t,
                skipLocalFetch: n,
                logFailures: r
            }) : r && M.log("Skipping fetch because the selected channel is not a text channel"), V(i.getGuildId(), i.id)) : r && M.log("Skipping fetch because channel is null")
        } else r && M.log("Skipping fetch because there is no selected channel")
    }

    function j(e) {
        var t = e.guildId,
            n = e.channelId;
        U({
            guildId: t,
            channelId: n,
            messageId: e.messageId,
            jumpType: e.jumpType
        }), V(t, n)
    }

    function F(e) {
        U({
            guildId: e.guildId,
            channelId: e.channelId
        })
    }

    function V(e, t) {
        var n = m.default.getCurrentSidebarChannelId(t);
        null != n && U({
            guildId: e,
            channelId: n,
            messageId: m.default.getCurrentSidebarMessageId(t)
        })
    }

    function H() {
        var e = O.default.getChannelId(),
            t = T.default.getGuildId();
        if (null != t && null != e) {
            var n = m.default.getSidebarState(e);
            (null == n ? void 0 : n.type) !== E.SidebarType.VIEW_CHANNEL && V(t, e)
        }
    }

    function x(e) {
        var t = e.guildId,
            n = e.channelId;
        e.context === A.CURRENT_APP_CONTEXT && (U({
            guildId: t,
            channelId: n
        }), V(t, n))
    }

    function Y(e) {
        var t = e.channel,
            n = e.messageId,
            r = t.guild_id;
        null != r && O.default.getChannelId(r) === t.id && U({
            guildId: r,
            channelId: t.id,
            messageId: n
        })
    }

    function W(e) {
        var t = e.channelId;
        l.default.fetchMessages({
            channelId: t,
            limit: A.MAX_MESSAGES_PER_CHANNEL
        })
    }

    function K(e) {
        var t = e.response;
        if (null == t || null == t.body) return null;
        if (t.body.code === A.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
            var n = t.body.retry_after;
            null != n && s.default.show({
                title: N.default.Messages.RATE_LIMITED,
                body: N.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                    retryAfterMinutes: Math.ceil(n / 60)
                })
            })
        }
    }
    var z = {};

    function X(e) {
        var t, n = e.channelId,
            r = e.jump,
            o = e.isStale,
            i = e.isPreview;
        if (void 0 === i || !i) {
            var a = null !== (t = z[n]) && void 0 !== t ? t : 0;
            if (!(Date.now() - a < 10 * S.default.Millis.SECOND)) {
                z[n] = Date.now();
                var u = O.default.getChannelId(),
                    s = m.default.getCurrentSidebarChannelId(u),
                    c = n === u || n === s;
                o && _.default.isConnected() && c && l.default.fetchMessages({
                    channelId: n,
                    limit: A.MAX_MESSAGES_PER_CHANNEL,
                    jump: r
                })
            }
        }
    }

    function q(e) {
        var t = e.channelId,
            n = e.messageRecord,
            r = e.reason;
        null != n && u.default.dispatch({
            type: "MESSAGE_SEND_FAILED",
            channelId: t,
            messageId: n.id,
            reason: null != r ? r : null
        })
    }

    function Q(e) {
        if ("active" !== e.state) return !1;
        var t = O.default.getChannelId();
        if (null == t) return !1;
        l.default.fetchNewLocalMessages(t, A.MAX_MESSAGES_PER_CHANNEL)
    }
    var J = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = D(t);
            if (n) {
                var a = D(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : R(e)
        });

        function s() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), e = a.apply(this, arguments), P(R(e), "fetchMessages", U), P(R(e), "loadSelectedChannelIfNecessary", B), P(R(e), "stores", new Map().set(m.default, H)), P(R(e), "actions", {
                APP_STATE_UPDATE: Q,
                OVERLAY_INITIALIZE: G,
                CHANNEL_SELECT: j,
                VOICE_CHANNEL_SELECT: F,
                THREAD_CREATE: Y,
                THREAD_LIST_SYNC: function() {
                    return B()
                },
                CHANNEL_CREATE: Y,
                CHANNEL_PRELOAD: x,
                THREAD_CREATE_LOCAL: W,
                GUILD_CREATE: function() {
                    return B()
                },
                MESSAGE_END_EDIT: K,
                LOAD_MESSAGES_SUCCESS: X,
                UPLOAD_FAIL: q,
                CHANNEL_DELETE: function() {
                    return B()
                },
                THREAD_DELETE: function() {
                    return B()
                }
            }), e
        }
        return r = s, o = [{
            key: "_initialize",
            value: function() {
                u.default.subscribe("CONNECTION_OPEN", G)
            }
        }, {
            key: "_terminate",
            value: function() {
                u.default.unsubscribe("CONNECTION_OPEN", G)
            }
        }], C(r.prototype, o), i && C(r, i), s
    }(f.default);
    t.default = new J
}