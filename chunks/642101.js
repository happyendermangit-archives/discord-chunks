function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FEED_FETCH_LIMIT: function() {
            return O
        },
        LoadingStatus: function() {
            return i
        }
    }), n("653041"), n("47120");
    var i, r, s, a, o, l, u = n("442837"),
        d = n("759174"),
        _ = n("570140"),
        c = n("786761"),
        E = n("995774"),
        I = n("314897"),
        T = n("709054"),
        f = n("971930"),
        S = n("330249"),
        A = n("853147"),
        h = n("313531"),
        m = n("369701"),
        N = n("176505");
    let O = 10;
    (s = i || (i = {}))[s.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", s[s.LOADING_PAGE = 1] = "LOADING_PAGE", s[s.NONE = 2] = "NONE";
    let p = {
            loading: 2,
            error: null
        },
        R = {
            offset: null,
            hasMoreItems: null
        },
        C = {},
        g = {},
        L = {},
        D = {},
        v = {},
        M = {},
        y = {},
        P = {};

    function U(e) {
        let t = P[e];
        return null == t && (t = new d.SecondaryIndexMap(G, b), P[e] = t), t
    }

    function b(e) {
        let {
            featured: t,
            sortIndex: n
        } = e;
        return "".concat(t ? "\0" : "\x01").concat(n.toString().padStart(5, "0"))
    }

    function G(e) {
        let {
            seen: t,
            highlighted: n
        } = e, i = [m.GuildFeedSectionTypes.ALL];
        return n ? i.push(m.GuildFeedSectionTypes.HIGHLIGHTED) : t ? i.push(m.GuildFeedSectionTypes.READ) : i.push(m.GuildFeedSectionTypes.UNREAD), i
    }
    let w = {},
        B = {},
        k = {},
        V = {};

    function F(e, t, n) {
        var i, r;
        return null === (r = y[e]) || void 0 === r ? void 0 : null === (i = r[t]) || void 0 === i ? void 0 : i[n]
    }

    function x(e, t) {
        var n;
        return null === (n = M[e]) || void 0 === n ? void 0 : n[t]
    }

    function H(e) {
        let t = (0, S.default)(e);
        return x(t.channel_id, t.id)
    }

    function Y(e, t, n) {
        if (null == e || null == t) return !1;
        let i = x(e, t);
        if (null == i) return !1;
        let r = F(i, e, t);
        if (null == r) return !1;
        let s = n(r);
        return y[i][e][t] = s, !0
    }

    function j(e, t) {
        (0, S.getAllMessagesFromFeedItem)(t).forEach(t => W(e, t))
    }

    function W(e, t) {
        var n, i;
        (null === (n = y[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (y[e] = null !== (i = y[e]) && void 0 !== i ? i : {}, y[e][t.channel_id] = {}), y[e][t.channel_id][t.id] = t, null == M[t.channel_id] && (M[t.channel_id] = {}), M[t.channel_id][t.id] = e
    }

    function K(e, t) {
        for (let n of U(e).values(m.GuildFeedSectionTypes.ALL))
            if ((0, S.getAllMessageIdsFromFeedItem)(n).has(t)) return n
    }

    function z(e, t) {
        var n, i, r;
        let s = x(e, t);
        return null != s && (null === (i = y[s]) || void 0 === i || null === (n = i[e]) || void 0 === n || delete n[t], null === (r = M[e]) || void 0 === r || delete r[t], ! function(e, t) {
            let n = K(e, t);
            if (null == n) return;
            let i = (0, h.default)(n),
                r = U(e);
            !(Array.from((0, S.getAllMessagesFromFeedItem)(n)).filter(t => F(e, t.channel_id, t.id)).length > 0) && r.delete(i)
        }(s, t), !0)
    }

    function X(e) {
        let {
            type: t,
            channelId: n,
            messageId: i,
            userId: r,
            emoji: s
        } = e;
        if (!(0, E.shouldApplyReaction)(e)) return !1;
        let a = I.default.getId() === r;
        return Y(n, i, n => {
            let {
                reactionType: i
            } = e;
            return "MESSAGE_REACTION_ADD" === t ? n.addReaction(s, a, e.colors, i) : n.removeReaction(s, a, i)
        })
    }

    function Q(e) {
        let {
            channel: t
        } = e;
        return q(t)
    }

    function q(e) {
        var t;
        let n = e.guild_id;
        if (null == n) return !1;
        delete M[e.id], null === (t = y[n]) || void 0 === t || delete t[e.id]
    }
    class Z extends(r = u.default.Store) {
        getLastFetchedMillis(e) {
            return C[e]
        }
        getFeedItemsForGuild(e) {
            return U(e).values()
        }
        getFeedItemSection(e, t) {
            return U(e).values(t)
        }
        getItem(e, t) {
            return U(e).get(t)
        }
        getItemForMessageId(e, t) {
            return K(e, t)
        }
        getMessageItem(e, t) {
            return this.getItem(e, (0, h.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
        }
        getLoadId(e) {
            var t;
            return null === (t = v[e]) || void 0 === t ? void 0 : t.load_id
        }
        getCachedMessage(e, t, n) {
            return F(e, t, n)
        }
        getFetchStatus(e) {
            var t;
            return null !== (t = g[e]) && void 0 !== t ? t : p
        }
        getFeaturedItemsFetchStatus(e) {
            var t;
            return null !== (t = D[e]) && void 0 !== t ? t : p
        }
        getPaginationStatus(e) {
            var t;
            return null !== (t = L[e]) && void 0 !== t ? t : R
        }
        getIsItemHiding(e, t) {
            var n;
            return !!(null === (n = w[e]) || void 0 === n ? void 0 : n.has(t))
        }
        getIsItemHidden(e, t) {
            var n;
            return !!(null === (n = B[e]) || void 0 === n ? void 0 : n.has(t))
        }
        getIsItemFeatured(e) {
            var t;
            let n = (0, h.getGuildFeedItemIdFromFeatureableItem)(e),
                {
                    guildId: i
                } = e;
            return !!(null === (t = k[i]) || void 0 === t ? void 0 : t.has(n))
        }
        getFeaturedItems(e) {
            var t;
            return Object.values(null !== (t = V[e]) && void 0 !== t ? t : [])
        }
        getFeaturedItemByMessageId(e, t) {
            var n;
            return Object.values(null !== (n = V[e]) && void 0 !== n ? n : []).find(e => "message" in e && e.message.id === t)
        }
    }
    l = "GuildFeedStore", (o = "displayName") in(a = Z) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new Z(_.default, {
        GUILD_FEED_FETCH_FRESH_START: function(e) {
            let {
                guildId: t
            } = e;
            g[t] = {
                loading: 0,
                error: null
            }, delete P[t], delete v[t], delete L[t], w[t] = new Set, B[t] = new Set, k[t] = new Set, y[t] = {}
        },
        GUILD_FEED_FETCH_PAGE_START: function(e) {
            let {
                guildId: t
            } = e;
            g[t] = {
                loading: 1,
                error: null
            }
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t, n, i, r, s;
            let {
                guildId: a,
                data: o
            } = e;
            if (C[a] = Date.now(), g[a] = {
                    loading: 2,
                    error: null
                }, a in v && v[a].load_id !== o.load_id) return;
            let l = null !== (r = null === (n = v[a]) || void 0 === n ? void 0 : null === (t = n.results) || void 0 === t ? void 0 : t.items) && void 0 !== r ? r : [];
            v[a] = {
                load_id: o.load_id,
                results: {
                    items: l.concat(o.results.items)
                }
            };
            let u = U(a),
                d = u.values().length,
                _ = d;
            for (let e of o.results.items) {
                let t = (0, f.createGuildFeedItemFromServer)(e, _);
                if (null != t) _ += 1, null == u.get(t.id) && (t.featured && k[a].add(t.id), j(a, t), u.set(t.id, t))
            }
            let c = null !== (s = null === (i = L[a]) || void 0 === i ? void 0 : i.offset) && void 0 !== s ? s : 0;
            L[a] = {
                offset: c + O,
                hasMoreItems: d !== u.values().length
            }
        },
        GUILD_FEED_FETCH_FAILURE: function(e) {
            let {
                guildId: t,
                error: n
            } = e;
            g[t] = {
                loading: 2,
                error: n
            }
        },
        GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                data: n
            } = e;
            D[t] = {
                loading: 2,
                error: null
            };
            let i = {};
            for (let [e, r] of n.results.entries()) {
                let n = (0, f.createGuildFeedItemFromServer)(r, e);
                null != n && (0, f.isGuildFeedFeaturedItem)(n) && (n.featured && k[t].add(n.id), j(t, n), i[n.id] = n)
            }
            V[t] = i
        },
        GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
            let {
                guildId: t,
                error: n
            } = e;
            D[t] = {
                loading: 2,
                error: n
            }
        },
        GUILD_FEED_ITEM_REMOVE: function(e) {
            let {
                item: t
            } = e;
            (0, S.getAllMessagesFromFeedItem)(t).forEach(e => z(e.channel_id, e.id))
        },
        GUILD_FEED_ITEM_HIDE: function(e) {
            let {
                item: t
            } = e, n = (0, h.default)(t), i = H(t);
            null != i && (!(i in w) && (w[i] = new Set), w[i].add(n))
        },
        GUILD_FEED_ITEM_UNHIDE: function(e) {
            let {
                item: t
            } = e, n = (0, h.default)(t), i = H(t);
            null != i && w[i].delete(n)
        },
        GUILD_FEED_FEATURE_ITEM: function(e) {
            var t, n, i;
            let {
                featureableItem: r,
                options: s
            } = e, {
                guildId: a
            } = r, o = (0, h.getGuildFeedItemIdFromFeatureableItem)(r);
            if (!(a in k) && (k[a] = new Set), k[a].add(o), !s.hoist) return;
            let l = U(a),
                u = null !== (i = l.get(o)) && void 0 !== i ? i : (0, A.createFakeGuildFeedItem)(r);
            null != u && (null != u.message && (null === (n = y[a]) || void 0 === n ? void 0 : null === (t = n[u.message.channel_id]) || void 0 === t ? void 0 : t[u.message.id]) == null && W(a, u.message), l.delete(u.id), u.featured = !0, u.seen = !1, l.set(u.id, u))
        },
        GUILD_FEED_UNFEATURE_ITEM: function(e) {
            var t, n, i, r;
            let {
                featureableItem: s
            } = e, {
                guildId: a
            } = s, o = (0, h.getGuildFeedItemIdFromFeatureableItem)(s);
            t = a, n = o, null === (i = k[t]) || void 0 === i || i.delete(n), null === (r = V[t]) || void 0 === r || delete r[n]
        },
        CHANNEL_SELECT: function() {
            for (let e of T.default.keys(w)) null == B[e] && (B[e] = new Set), B[e] = new Set([...Array.from(B[e]), ...Array.from(w[e])]), delete w[e]
        },
        CHANNEL_DELETE: Q,
        THREAD_DELETE: Q,
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            if (null == C[n.id]) return !1;
            for (let e in delete C[n.id], delete v[n.id], null !== (t = y[n.id]) && void 0 !== t ? t : {}) delete M[e];
            delete y[n.id], delete P[n.id]
        },
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t)
                if (null == e ? void 0 : e.hasFlag(N.ChannelFlags.GUILD_FEED_REMOVED)) return q(e)
        },
        LOGOUT: function() {
            C = {}, v = {}, M = {}, y = {}, P = {}, w = {}, B = {}, k = {}, V = {}
        },
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e;
            return Y(t.channel_id, t.id, e => (0, c.updateMessageRecord)(e, t))
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            return z(n, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e, i = !1;
            for (let e of t) i = z(n, e) || i;
            return i
        },
        MESSAGE_REACTION_ADD: X,
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: i
            } = e, r = I.default.getId();
            return Y(t, n, e => e.addReactionBatch(i, r))
        },
        MESSAGE_REACTION_REMOVE: X,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e;
            return Y(t, n, e => e.set("reactions", []))
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: i
            } = e;
            return Y(t, n, e => e.removeReactionsForEmoji(i))
        }
    })
}