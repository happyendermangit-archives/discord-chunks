function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencedMessageState: function() {
            return s
        },
        default: function() {
            return O
        }
    }), n("222007"), n("424973");
    var s, i, r = n("693566"),
        a = n.n(r),
        o = n("446674"),
        d = n("913144"),
        u = n("447435"),
        l = n("560208"),
        f = n("692038"),
        _ = n("42203"),
        c = n("377253"),
        g = n("49111");
    (i = s || (s = {}))[i.LOADED = 0] = "LOADED", i[i.NOT_LOADED = 1] = "NOT_LOADED", i[i.DELETED = 2] = "DELETED";
    let m = Object.freeze({
            state: 1
        }),
        h = new Set;
    class v {
        handleCacheDisposed(e, t) {
            this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
        }
        set(e, t) {
            this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
        }
        has(e) {
            return this._cachedMessageIds.has(e)
        }
        get(e) {
            return this._cachedMessages.get(e)
        }
        getCachedMessageIds() {
            return this._cachedMessageIds
        }
        constructor() {
            this._cachedMessages = new a({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t)
            }), this._cachedMessageIds = new Set
        }
    }
    let E = new class e {
        has(e, t) {
            var n, s;
            return null !== (s = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== s && s
        }
        get(e, t) {
            var n;
            return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
        }
        set(e, t, n) {
            let s = this._channelCaches.get(e);
            null == s && (s = new v, this._channelCaches.set(e, s)), s.set(t, n)
        }
        updateExistingMessageIfCached(e) {
            let t = this._channelCaches.get(e.channel_id);
            return !!(null != t && t.has(e.id)) && (t.set(e.id, {
                state: 0,
                message: (0, f.createMessageRecord)(e)
            }), !0)
        }
        deleteChannelCache(e) {
            return this._channelCaches.delete(e)
        }
        retainWhere(e) {
            let t = [];
            for (let [n] of this._channelCaches) !e(n) && t.push(n);
            for (let e of t) this.deleteChannelCache(e);
            return t.length
        }
        getCachedMessageIdsForChannel(e) {
            let t = this._channelCaches.get(e);
            return null == t ? null : t.getCachedMessageIds()
        }
        clear() {
            this._channelCaches.clear()
        }
        constructor() {
            this._channelCaches = new Map
        }
    };

    function p(e) {
        let t = !1;
        if (E.updateExistingMessageIfCached(e) && (t = !0), g.MessageTypesWithLazyLoadedReferences.has(e.type)) {
            let n = e.message_reference;
            if (null == n) return t;
            let s = n.message_id;
            if (null == s) return t;
            if ("referenced_message" in e) {
                let t = e.referenced_message;
                null != t ? (E.set(t.channel_id, t.id, {
                    state: 0,
                    message: (0, f.createMessageRecord)(t)
                }), e.type === g.MessageTypes.THREAD_STARTER_MESSAGE && p(t)) : E.set(e.channel_id, s, {
                    state: 2
                })
            } else {
                let e = c.default.getMessage(n.channel_id, s);
                null != e ? E.set(n.channel_id, s, {
                    state: 0,
                    message: e
                }) : E.set(n.channel_id, s, m)
            }
            t = !0
        }
        return t
    }

    function y(e, t) {
        let n = !1;
        for (let s of e) n = !1 !== t(s) || n;
        return n
    }

    function T(e) {
        let {
            messages: t
        } = e;
        return y(t, e => p(e))
    }

    function C(e) {
        let {
            messages: t
        } = e;
        return y(t, e => y(e, e => p(e)))
    }

    function I(e) {
        return E.deleteChannelCache(e.channel.id)
    }

    function S(e, t) {
        if (!E.has(e, t)) return !1;
        E.set(e, t, {
            state: 2
        })
    }

    function A() {
        E.clear()
    }

    function D(e) {
        let {
            firstMessages: t
        } = e;
        return null != t && y(t, e => p(e))
    }
    class N extends o.default.Store {
        initialize() {
            this.waitFor(c.default, _.default)
        }
        getMessageByReference(e) {
            let t;
            return null != e && (t = E.get(e.channel_id, e.message_id)), null != t ? t : m
        }
        getMessage(e, t) {
            var n;
            return null !== (n = E.get(e, t)) && void 0 !== n ? n : m
        }
        getReplyIdsForChannel(e) {
            let t;
            return null != e && (t = E.getCachedMessageIdsForChannel(e)), null != t ? t : h
        }
    }
    N.displayName = "ReferencedMessageStore";
    var O = new N(d.default, {
        CACHE_LOADED: function(e) {
            let {
                messages: t
            } = e;
            return y(Object.values(t), e => y(Object.values(e), e => p(e)))
        },
        LOCAL_MESSAGES_LOADED: T,
        LOAD_MESSAGES_SUCCESS: T,
        LOAD_MESSAGES_AROUND_SUCCESS: T,
        SEARCH_FINISH: C,
        MOD_VIEW_SEARCH_FINISH: C,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = (0, l.getMessagesFromGuildFeedFetch)(t);
            return y(n, e => p(e))
        },
        LOAD_THREADS_SUCCESS: D,
        LOAD_ARCHIVED_THREADS_SUCCESS: D,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e;
            if (!E.has(n, t)) return !1;
            let s = E.get(n, t);
            if (null == s || 0 !== s.state) return !1;
            E.set(n, t, {
                state: 0,
                message: (0, u.handleExplicitMediaScanTimeoutForMessage)(s.message)
            })
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            return y(Object.values(t), e => {
                let {
                    first_message: t
                } = e;
                return null != t && p(t)
            })
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            return !!c.default.getMessages(t.channel_id).ready && p(t)
        },
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e, n = t.id, s = t.channel_id;
            if (!E.has(s, n)) return !1;
            let i = E.get(s, n);
            if (null == i || 0 !== i.state) return !1;
            E.set(s, n, {
                state: 0,
                message: (0, f.updateMessageRecord)(i.message, t)
            })
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            return S(n, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e;
            return y(t, e => S(n, e))
        },
        CREATE_PENDING_REPLY: function(e) {
            let {
                message: t
            } = e;
            E.set(t.channel_id, t.id, {
                state: 0,
                message: t
            })
        },
        CHANNEL_DELETE: I,
        THREAD_DELETE: I,
        GUILD_DELETE: function() {
            let e = E.retainWhere(e => null != _.default.getChannel(e));
            if (0 === e) return !1
        },
        CONNECTION_OPEN: A,
        LOGOUT: A
    })
}