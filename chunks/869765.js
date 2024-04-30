function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ReferencedMessageState: function() {
            return i
        }
    }), n("47120"), n("653041");
    var i, r, s, a = n("31775"),
        o = n.n(a),
        l = n("442837"),
        u = n("570140"),
        d = n("163268"),
        _ = n("900489"),
        c = n("786761"),
        E = n("592125"),
        I = n("375954"),
        T = n("981631");

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(s = i || (i = {}))[s.LOADED = 0] = "LOADED", s[s.NOT_LOADED = 1] = "NOT_LOADED", s[s.DELETED = 2] = "DELETED";
    let S = Object.freeze({
            state: 1
        }),
        h = new Set;
    class A {
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
            f(this, "_cachedMessages", new(o())({
                max: 100,
                dispose: (e, t) => this.handleCacheDisposed(e, t)
            })), f(this, "_cachedMessageIds", new Set)
        }
    }
    let m = new class e {
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
            null == i && (i = new A, this._channelCaches.set(e, i)), i.set(t, n)
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
            f(this, "_channelCaches", new Map)
        }
    };

    function N(e) {
        let t = !1;
        if (m.updateExistingMessageIfCached(e) && (t = !0), T.MessageTypesWithLazyLoadedReferences.has(e.type)) {
            let n = e.message_reference;
            if (null == n) return t;
            let i = n.message_id;
            if (null == i) return t;
            if ("referenced_message" in e) {
                let t = e.referenced_message;
                null != t ? (m.set(t.channel_id, t.id, {
                    state: 0,
                    message: (0, c.createMessageRecord)(t)
                }), e.type === T.MessageTypes.THREAD_STARTER_MESSAGE && N(t)) : m.set(e.channel_id, i, {
                    state: 2
                })
            } else {
                let e = I.default.getMessage(n.channel_id, i);
                null != e ? m.set(n.channel_id, i, {
                    state: 0,
                    message: e
                }) : m.set(n.channel_id, i, S)
            }
            t = !0
        }
        return t
    }

    function p(e, t) {
        let n = !1;
        for (let i of e) n = !1 !== t(i) || n;
        return n
    }

    function O(e) {
        let {
            messages: t
        } = e;
        return p(t, e => N(e))
    }

    function R(e) {
        let {
            messages: t
        } = e;
        return p(t, e => p(e, e => N(e)))
    }

    function C(e) {
        return m.deleteChannelCache(e.channel.id)
    }

    function g(e, t) {
        if (!m.has(e, t)) return !1;
        m.set(e, t, {
            state: 2
        })
    }

    function L() {
        m.clear()
    }

    function v(e) {
        let {
            firstMessages: t
        } = e;
        return null != t && p(t, e => N(e))
    }
    class D extends(r = l.default.Store) {
        initialize() {
            this.waitFor(I.default, E.default)
        }
        getMessageByReference(e) {
            let t;
            return null != e && (t = m.get(e.channel_id, e.message_id)), null != t ? t : S
        }
        getMessage(e, t) {
            var n;
            return null !== (n = m.get(e, t)) && void 0 !== n ? n : S
        }
        getReplyIdsForChannel(e) {
            let t;
            return null != e && (t = m.getCachedMessageIdsForChannel(e)), null != t ? t : h
        }
    }
    f(D, "displayName", "ReferencedMessageStore"), t.default = new D(u.default, {
        CACHE_LOADED: function(e) {
            let {
                messages: t
            } = e;
            return p(Object.values(t), e => p(Object.values(e), e => N(e)))
        },
        LOCAL_MESSAGES_LOADED: O,
        LOAD_MESSAGES_SUCCESS: O,
        LOAD_MESSAGES_AROUND_SUCCESS: O,
        SEARCH_FINISH: R,
        MOD_VIEW_SEARCH_FINISH: R,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            let {
                data: t
            } = e;
            return p((0, _.getMessagesFromGuildFeedFetch)(t), e => N(e))
        },
        LOAD_THREADS_SUCCESS: v,
        LOAD_ARCHIVED_THREADS_SUCCESS: v,
        MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
            let {
                messageId: t,
                channelId: n
            } = e;
            if (!m.has(n, t)) return !1;
            let i = m.get(n, t);
            if (null == i || 0 !== i.state) return !1;
            m.set(n, t, {
                state: 0,
                message: (0, d.handleExplicitMediaScanTimeoutForMessage)(i.message)
            })
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            return p(Object.values(t), e => {
                let {
                    first_message: t
                } = e;
                return null != t && N(t)
            })
        },
        MESSAGE_CREATE: function(e) {
            let {
                message: t
            } = e;
            return !!I.default.getMessages(t.channel_id).ready && N(t)
        },
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e, n = t.id, i = t.channel_id;
            if (!m.has(i, n)) return !1;
            let r = m.get(i, n);
            if (null == r || 0 !== r.state) return !1;
            m.set(i, n, {
                state: 0,
                message: (0, c.updateMessageRecord)(r.message, t)
            })
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            return g(n, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e;
            return p(t, e => g(n, e))
        },
        CREATE_PENDING_REPLY: function(e) {
            let {
                message: t
            } = e;
            m.set(t.channel_id, t.id, {
                state: 0,
                message: t
            })
        },
        CHANNEL_DELETE: C,
        THREAD_DELETE: C,
        GUILD_DELETE: function() {
            if (0 === m.retainWhere(e => null != E.default.getChannel(e))) return !1
        },
        CONNECTION_OPEN: L,
        LOGOUT: L
    })
}