function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencedMessageState: function() {
            return i
        },
        default: function() {
            return O
        }
    }), n("222007"), n("424973");
    var i, s, r = n("693566"),
        a = n.n(r),
        o = n("446674"),
        l = n("913144"),
        u = n("447435"),
        d = n("560208"),
        c = n("692038"),
        f = n("42203"),
        _ = n("377253"),
        E = n("49111");
    (s = i || (i = {}))[s.LOADED = 0] = "LOADED", s[s.NOT_LOADED = 1] = "NOT_LOADED", s[s.DELETED = 2] = "DELETED";
    let h = Object.freeze({
            state: 1
        }),
        g = new Set;
    class m {
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
    let p = new class e {
        has(e, t) {
            var n, i;
            return null !== (i = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== i && i
        }
        get(e, t) {
            var n;
            return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
        }
        set(e, t, n) {
            let i = this._channelCaches.get(e);
            null == i && (i = new m, this._channelCaches.set(e, i)), i.set(t, n)
        }
        updateExistingMessageIfCached(e) {
            let t = this._channelCaches.get(e.channel_id);
            return !!(null != t && t.has(e.id)) && (t.set(e.id, {
                state: 0,
                message: (0, c.createMessageRecord)(e)
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

    function S(e) {
        let t = !1;
        if (p.updateExistingMessageIfCached(e) && (t = !0), E.MessageTypesWithLazyLoadedReferences.has(e.type)) {
            let n = e.message_reference;
            if (null == n) return t;
            let i = n.message_id;
            if (null == i) return t;
            if ("referenced_message" in e) {
                let t = e.referenced_message;
                null != t ? (p.set(t.channel_id, t.id, {
                    state: 0,
                    message: (0, c.createMessageRecord)(t)
                }), e.type === E.MessageTypes.THREAD_STARTER_MESSAGE && S(t)) : p.set(e.channel_id, i, {
                    state: 2
                })
            } else {
                let e = _.default.getMessage(n.channel_id, i);
                null != e ? p.set(n.channel_id, i, {
                    state: 0,
                    message: e
                }) : p.set(n.channel_id, i, h)
            }
            t = !0
        }
        return t
    }

    function v(e, t) {
        let n = !1;
        for (let i of e) n = !1 !== t(i) || n;
        return n
    }

    function T(e) {
        let {
            messages: t
        } = e;
        return v(t, e => S(e))
    }

    function I(e) {
        let {
            messages: t
        } = e;
        return v(t, e => v(e, e => S(e)))
    }

    function A(e) {
        return p.deleteChannelCache(e.channel.id)
    }

    function C(e, t) {
        if (!p.has(e, t)) return !1;
        p.set(e, t, {
            state: 2
        })
    }

    function y() {
        p.clear()
    }

    function N(e) {
        let {
            firstMessages: t
        } = e;
        return null != t && v(t, e => S(e))
    }
    class R extends o.default.Store {
        initialize() {
            this.waitFor(_.default, f.default)
        }
        getMessageByReference(e) {
            let t;
            return null != e && (t = p.get(e.channel_id, e.message_id)), null != t ? t : h
        }
        getMessage(e, t) {
            var n;
            return null !== (n = p.get(e, t)) && void 0 !== n ? n : h
        }
        getReplyIdsForChannel(e) {
            let t;
            return null != e && (t = p.getCachedMessageIdsForChannel(e)), null != t ? t : g
        }
    }
    R.displayName = "ReferencedMessageStore";
    var O = new R(l.default, {
        CACHE_LOADED: function(e) {
            let {
                messages: t
            } = e;
            return v(Object.values(t), e => v(Object.values(e), e => S(e)))
        },
        LOCAL_MESSAGES_LOADED: T,
        LOAD_MESSAGES_SUCCESS: T,
        LOAD_MESSAGES_AROUND_SUCCESS: T,
        SEARCH_FINISH: I,
        MOD_VIEW_SEARCH_FINISH: I,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e, n = (0, d.getMessagesFromGuildFeedFetch)(t);
            return v(n, e => S(e))
        },
        LOAD_THREADS_SUCCESS: N,
        LOAD_ARCHIVED_THREADS_SUCCESS: N,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e;
            if (!p.has(n, t)) return !1;
            let i = p.get(n, t);
            if (null == i || 0 !== i.state) return !1;
            p.set(n, t, {
                state: 0,
                message: (0, u.handleExplicitMediaScanTimeoutForMessage)(i.message)
            })
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            return v(Object.values(t), e => {
                let {
                    first_message: t
                } = e;
                return null != t && S(t)
            })
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            return !!_.default.getMessages(t.channel_id).ready && S(t)
        },
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e, n = t.id, i = t.channel_id;
            if (!p.has(i, n)) return !1;
            let s = p.get(i, n);
            if (null == s || 0 !== s.state) return !1;
            p.set(i, n, {
                state: 0,
                message: (0, c.updateMessageRecord)(s.message, t)
            })
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            return C(n, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e;
            return v(t, e => C(n, e))
        },
        CREATE_PENDING_REPLY: function(e) {
            let {
                message: t
            } = e;
            p.set(t.channel_id, t.id, {
                state: 0,
                message: t
            })
        },
        CHANNEL_DELETE: A,
        THREAD_DELETE: A,
        GUILD_DELETE: function() {
            let e = p.retainWhere(e => null != f.default.getChannel(e));
            if (0 === e) return !1
        },
        CONNECTION_OPEN: y,
        LOGOUT: y
    })
}