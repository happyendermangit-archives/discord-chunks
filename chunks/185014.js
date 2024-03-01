function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FEED_FETCH_LIMIT: function() {
            return S
        },
        LoadingStatus: function() {
            return d
        },
        default: function() {
            return J
        }
    }), n("424973"), n("222007");
    var d, i, l = n("446674"),
        r = n("407846"),
        u = n("913144"),
        s = n("692038"),
        a = n("432173"),
        E = n("271938"),
        o = n("299039"),
        c = n("886484"),
        _ = n("60036"),
        I = n("145708"),
        f = n("2804"),
        m = n("515631"),
        F = n("724210");
    let S = 10;
    (i = d || (d = {}))[i.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", i[i.LOADING_PAGE = 1] = "LOADING_PAGE", i[i.NONE = 2] = "NONE";
    let T = {
            loading: 2,
            error: null
        },
        g = {
            offset: null,
            hasMoreItems: null
        },
        G = {},
        A = {},
        D = {},
        M = {},
        p = {},
        v = {},
        h = {},
        y = {};

    function R(e) {
        let t = y[e];
        return null == t && (t = new r.default(N, L), y[e] = t), t
    }

    function L(e) {
        let {
            featured: t,
            sortIndex: n
        } = e;
        return "".concat(t ? "\x00" : "\x01").concat(n.toString().padStart(5, "0"))
    }

    function N(e) {
        let {
            seen: t,
            highlighted: n
        } = e, d = [m.GuildFeedSectionTypes.ALL];
        return n ? d.push(m.GuildFeedSectionTypes.HIGHLIGHTED) : t ? d.push(m.GuildFeedSectionTypes.READ) : d.push(m.GuildFeedSectionTypes.UNREAD), d
    }
    let O = {},
        U = {},
        C = {},
        H = {};

    function P(e, t, n) {
        var d, i;
        return null === (i = h[e]) || void 0 === i ? void 0 : null === (d = i[t]) || void 0 === d ? void 0 : d[n]
    }

    function w(e, t) {
        var n;
        return null === (n = v[e]) || void 0 === n ? void 0 : n[t]
    }

    function b(e) {
        let t = (0, _.default)(e);
        return w(t.channel_id, t.id)
    }

    function V(e, t, n) {
        if (null == e || null == t) return !1;
        let d = w(e, t);
        if (null == d) return !1;
        let i = P(d, e, t);
        if (null == i) return !1;
        let l = n(i);
        return h[d][e][t] = l, !0
    }

    function k(e, t) {
        (0, _.getAllMessagesFromFeedItem)(t).forEach(t => B(e, t))
    }

    function B(e, t) {
        var n, d;
        (null === (n = h[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (h[e] = null !== (d = h[e]) && void 0 !== d ? d : {}, h[e][t.channel_id] = {}), h[e][t.channel_id][t.id] = t, null == v[t.channel_id] && (v[t.channel_id] = {}), v[t.channel_id][t.id] = e
    }

    function Y(e, t) {
        let n = R(e),
            d = n.values(m.GuildFeedSectionTypes.ALL);
        for (let e of d)
            if ((0, _.getAllMessageIdsFromFeedItem)(e).has(t)) return e
    }

    function x(e, t) {
        var n, d, i;
        let l = w(e, t);
        return null != l && (null === (d = h[l]) || void 0 === d || null === (n = d[e]) || void 0 === n || delete n[t], null === (i = v[e]) || void 0 === i || delete i[t], ! function(e, t) {
            let n = Y(e, t);
            if (null == n) return;
            let d = (0, f.default)(n),
                i = R(e),
                l = Array.from((0, _.getAllMessagesFromFeedItem)(n));
            !(l.filter(t => P(e, t.channel_id, t.id)).length > 0) && i.delete(d)
        }(l, t), !0)
    }

    function K(e) {
        let {
            type: t,
            channelId: n,
            messageId: d,
            userId: i,
            emoji: l
        } = e;
        if (!(0, a.shouldApplyReaction)(e)) return !1;
        let r = E.default.getId() === i;
        return V(n, d, n => {
            let {
                reactionType: d
            } = e;
            return "MESSAGE_REACTION_ADD" === t ? n.addReaction(l, r, e.colors, d) : n.removeReaction(l, r, d)
        })
    }

    function W(e) {
        let {
            channel: t
        } = e;
        return X(t)
    }

    function X(e) {
        var t;
        let n = e.guild_id;
        if (null == n) return !1;
        delete v[e.id], null === (t = h[n]) || void 0 === t || delete t[e.id]
    }
    class j extends l.default.Store {
        getLastFetchedMillis(e) {
            return G[e]
        }
        getFeedItemsForGuild(e) {
            let t = R(e);
            return t.values()
        }
        getFeedItemSection(e, t) {
            let n = R(e);
            return n.values(t)
        }
        getItem(e, t) {
            return R(e).get(t)
        }
        getItemForMessageId(e, t) {
            return Y(e, t)
        }
        getMessageItem(e, t) {
            return this.getItem(e, (0, f.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
        }
        getLoadId(e) {
            var t;
            return null === (t = p[e]) || void 0 === t ? void 0 : t.load_id
        }
        getCachedMessage(e, t, n) {
            return P(e, t, n)
        }
        getFetchStatus(e) {
            var t;
            return null !== (t = A[e]) && void 0 !== t ? t : T
        }
        getFeaturedItemsFetchStatus(e) {
            var t;
            return null !== (t = M[e]) && void 0 !== t ? t : T
        }
        getPaginationStatus(e) {
            var t;
            return null !== (t = D[e]) && void 0 !== t ? t : g
        }
        getIsItemHiding(e, t) {
            var n;
            return !!(null === (n = O[e]) || void 0 === n ? void 0 : n.has(t))
        }
        getIsItemHidden(e, t) {
            var n;
            return !!(null === (n = U[e]) || void 0 === n ? void 0 : n.has(t))
        }
        getIsItemFeatured(e) {
            var t;
            let n = (0, f.getGuildFeedItemIdFromFeatureableItem)(e),
                {
                    guildId: d
                } = e;
            return !!(null === (t = C[d]) || void 0 === t ? void 0 : t.has(n))
        }
        getFeaturedItems(e) {
            var t;
            return Object.values(null !== (t = H[e]) && void 0 !== t ? t : [])
        }
        getFeaturedItemByMessageId(e, t) {
            var n;
            return Object.values(null !== (n = H[e]) && void 0 !== n ? n : []).find(e => "message" in e && e.message.id === t)
        }
    }
    j.displayName = "GuildFeedStore";
    var J = new j(u.default, {
        GUILD_FEED_FETCH_FRESH_START: function(e) {
            let {
                guildId: t
            } = e;
            A[t] = {
                loading: 0,
                error: null
            }, delete y[t], delete p[t], delete D[t], O[t] = new Set, U[t] = new Set, C[t] = new Set, h[t] = {}
        },
        GUILD_FEED_FETCH_PAGE_START: function(e) {
            let {
                guildId: t
            } = e;
            A[t] = {
                loading: 1,
                error: null
            }
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t, n, d, i, l;
            let {
                guildId: r,
                data: u
            } = e;
            if (G[r] = Date.now(), A[r] = {
                    loading: 2,
                    error: null
                }, r in p && p[r].load_id !== u.load_id) return;
            let s = null !== (i = null === (n = p[r]) || void 0 === n ? void 0 : null === (t = n.results) || void 0 === t ? void 0 : t.items) && void 0 !== i ? i : [];
            p[r] = {
                load_id: u.load_id,
                results: {
                    items: s.concat(u.results.items)
                }
            };
            let a = R(r),
                E = a.values().length,
                o = E;
            for (let e of u.results.items) {
                let t = (0, c.createGuildFeedItemFromServer)(e, o);
                if (null != t) o += 1, null == a.get(t.id) && (t.featured && C[r].add(t.id), k(r, t), a.set(t.id, t))
            }
            let _ = null !== (l = null === (d = D[r]) || void 0 === d ? void 0 : d.offset) && void 0 !== l ? l : 0;
            D[r] = {
                offset: _ + S,
                hasMoreItems: E !== a.values().length
            }
        },
        GUILD_FEED_FETCH_FAILURE: function(e) {
            let {
                guildId: t,
                error: n
            } = e;
            A[t] = {
                loading: 2,
                error: n
            }
        },
        GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
            let {
                guildId: t,
                data: n
            } = e;
            M[t] = {
                loading: 2,
                error: null
            };
            let d = {};
            for (let [e, i] of n.results.entries()) {
                let n = (0, c.createGuildFeedItemFromServer)(i, e);
                null != n && (0, c.isGuildFeedFeaturedItem)(n) && (n.featured && C[t].add(n.id), k(t, n), d[n.id] = n)
            }
            H[t] = d
        },
        GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
            let {
                guildId: t,
                error: n
            } = e;
            M[t] = {
                loading: 2,
                error: n
            }
        },
        GUILD_FEED_ITEM_REMOVE: function(e) {
            let {
                item: t
            } = e;
            (0, _.getAllMessagesFromFeedItem)(t).forEach(e => x(e.channel_id, e.id))
        },
        GUILD_FEED_ITEM_HIDE: function(e) {
            let {
                item: t
            } = e, n = (0, f.default)(t), d = b(t);
            null != d && (!(d in O) && (O[d] = new Set), O[d].add(n))
        },
        GUILD_FEED_ITEM_UNHIDE: function(e) {
            let {
                item: t
            } = e, n = (0, f.default)(t), d = b(t);
            null != d && O[d].delete(n)
        },
        GUILD_FEED_FEATURE_ITEM: function(e) {
            var t, n, d;
            let {
                featureableItem: i,
                options: l
            } = e, {
                guildId: r
            } = i, u = (0, f.getGuildFeedItemIdFromFeatureableItem)(i);
            if (!(r in C) && (C[r] = new Set), C[r].add(u), !l.hoist) return;
            let s = R(r),
                a = null !== (d = s.get(u)) && void 0 !== d ? d : (0, I.createFakeGuildFeedItem)(i);
            null != a && (null != a.message && (null === (n = h[r]) || void 0 === n ? void 0 : null === (t = n[a.message.channel_id]) || void 0 === t ? void 0 : t[a.message.id]) == null && B(r, a.message), s.delete(a.id), a.featured = !0, a.seen = !1, s.set(a.id, a))
        },
        GUILD_FEED_UNFEATURE_ITEM: function(e) {
            var t, n, d, i;
            let {
                featureableItem: l
            } = e, {
                guildId: r
            } = l, u = (0, f.getGuildFeedItemIdFromFeatureableItem)(l);
            t = r, n = u, null === (d = C[t]) || void 0 === d || d.delete(n), null === (i = H[t]) || void 0 === i || delete i[n]
        },
        CHANNEL_SELECT: function() {
            for (let e of o.default.keys(O)) null == U[e] && (U[e] = new Set), U[e] = new Set([...Array.from(U[e]), ...Array.from(O[e])]), delete O[e]
        },
        CHANNEL_DELETE: W,
        THREAD_DELETE: W,
        GUILD_DELETE: function(e) {
            var t;
            let {
                guild: n
            } = e;
            if (null == G[n.id]) return !1;
            for (let e in delete G[n.id], delete p[n.id], null !== (t = h[n.id]) && void 0 !== t ? t : {}) delete v[e];
            delete h[n.id], delete y[n.id]
        },
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t)
                if (null == e ? void 0 : e.hasFlag(F.ChannelFlags.GUILD_FEED_REMOVED)) return X(e)
        },
        LOGOUT: function() {
            G = {}, p = {}, v = {}, h = {}, y = {}, O = {}, U = {}, C = {}, H = {}
        },
        MESSAGE_UPDATE: function(e) {
            let {
                message: t
            } = e;
            return V(t.channel_id, t.id, e => (0, s.updateMessageRecord)(e, t))
        },
        MESSAGE_DELETE: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            return x(n, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            let {
                ids: t,
                channelId: n
            } = e, d = !1;
            for (let e of t) d = x(n, e) || d;
            return d
        },
        MESSAGE_REACTION_ADD: K,
        MESSAGE_REACTION_ADD_MANY: function(e) {
            let {
                channelId: t,
                messageId: n,
                reactions: d
            } = e, i = E.default.getId();
            return V(t, n, e => e.addReactionBatch(d, i))
        },
        MESSAGE_REACTION_REMOVE: K,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            let {
                channelId: t,
                messageId: n
            } = e;
            return V(t, n, e => e.set("reactions", []))
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            let {
                channelId: t,
                messageId: n,
                emoji: d
            } = e;
            return V(t, n, e => e.removeReactionsForEmoji(d))
        }
    })
}