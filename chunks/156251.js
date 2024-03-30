function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        featureGuildFeedItem: function() {
            return F
        },
        fetchGuildFeed: function() {
            return P
        },
        fetchGuildFeedFeaturedItems: function() {
            return B
        },
        hideItemFromGuildFeed: function() {
            return k
        },
        markGuildFeedItemAsSeen: function() {
            return L
        },
        markGuildFeedItemAsUnseen: function() {
            return M
        },
        removeItemFromGuildFeed: function() {
            return U
        },
        sendFeedShownAnalytics: function() {
            return C
        },
        setFeedItemPreference: function() {
            return K
        },
        trackFeedItemInteracted: function() {
            return X
        },
        unfeatureGuildFeedItem: function() {
            return H
        },
        unhideItemFromGuildFeed: function() {
            return Y
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("193695"),
        a = n("882418"),
        u = n("670083"),
        s = n("967888"),
        l = n("629815"),
        c = n("375314"),
        f = n("759850"),
        d = n("776982"),
        _ = n("242364"),
        E = n("499525"),
        p = n("870331"),
        m = n("162677"),
        y = n("148500"),
        I = n("98406"),
        h = n("466861"),
        O = n("496714"),
        T = n("159109"),
        S = n("539835"),
        v = n("281767");

    function g(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function A(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    g(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    g(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function b(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function N(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function R(e, t) {
        return t.map(function(t) {
            return I.default.getItem(e, t)
        }).filter(function(e) {
            var t = null == e ? null : (0, h.default)(e);
            return null != t && !d.default.isBlocked(t.author.id)
        }).filter(m.isNotNullish).map(function(e) {
            return (0, T.default)(e)
        })
    }

    function C(e) {
        p.default.track(v.AnalyticEvents.FEED_SHOWN, {
            guild_id: e,
            load_id: I.default.getLoadId(e),
            home_session_id: f.default.getHomeSessionId(e)
        })
    }

    function P(e) {
        return D.apply(this, arguments)
    }

    function D() {
        return (D = A(function(e) {
            var t, n, r, a, u, d, _, E, m, y, h, O, T, g, A, C, P, D, L, M;
            return N(this, function(N) {
                switch (N.label) {
                    case 0:
                        t = e.guildId, n = e.refresh, r = e.flushSeenItems, a = e.highlightedItemData, u = e.limit, d = Date.now(), E = null == (_ = n ? 0 : I.default.getPaginationStatus(t).offset) || 0 === _, l.default.dispatch({
                            type: E ? "GUILD_FEED_FETCH_FRESH_START" : "GUILD_FEED_FETCH_PAGE_START",
                            guildId: t
                        }), m = f.default.getHomeSessionId(t), N.label = 1;
                    case 1:
                        return N.trys.push([1, 5, , 6]), [4, null == r ? void 0 : r()];
                    case 2:
                        return N.sent(), y = b({
                            limit: null != u ? u : I.GUILD_FEED_FETCH_LIMIT,
                            offset: E ? 0 : _,
                            load_id: E ? null : I.default.getLoadId(t)
                        }, null != a && E && {
                            highlight_channel_id: a.channelId,
                            highlight_message_id: a.messageId
                        }), [4, s.HTTP.get({
                            url: v.Endpoints.GUILD_FEED(t),
                            query: y
                        })];
                    case 3:
                        return h = N.sent().body, O = I.default.getFeedItemSection(t, S.GuildFeedSectionTypes.READ).map(function(e) {
                            return e.id
                        }), T = I.default.getFeedItemSection(t, S.GuildFeedSectionTypes.UNREAD).map(function(e) {
                            return e.id
                        }), g = I.default.getFeedItemsForGuild(t).filter(function(e) {
                            return e.featured
                        }).map(function(e) {
                            return e.id
                        }), [4, l.default.dispatch({
                            type: "GUILD_FEED_FETCH_SUCCESS",
                            guildId: t,
                            data: h,
                            fresh: E
                        })];
                    case 4:
                        var U, w, k, G, B, j, F, V, H, x;
                        return N.sent(), A = I.default.getFeedItemSection(t, S.GuildFeedSectionTypes.READ).map(function(e) {
                            return e.id
                        }), C = I.default.getFeedItemSection(t, S.GuildFeedSectionTypes.UNREAD).map(function(e) {
                            return e.id
                        }), P = I.default.getFeedItemsForGuild(t).filter(function(e) {
                            return e.featured
                        }).map(function(e) {
                            return e.id
                        }), D = Date.now() - d, L = (null != _ ? _ : 0) / I.GUILD_FEED_FETCH_LIMIT, w = (U = {
                            guildId: t,
                            loadTime: D,
                            startHomeSessionId: m,
                            page: L,
                            newReadFeedItemIds: o().difference(A, O),
                            newUnreadFeedItemIds: o().difference(C, T),
                            newFeaturedItemIds: o().difference(P, g)
                        }).guildId, k = U.loadTime, G = U.startHomeSessionId, B = U.page, j = U.newUnreadFeedItemIds, F = U.newReadFeedItemIds, V = U.newFeaturedItemIds, p.default.track(v.AnalyticEvents.FEED_LOADED, {
                            guild_id: w,
                            load_id: I.default.getLoadId(w),
                            unread_feed_item_ids: R(w, j),
                            read_feed_item_ids: R(w, F),
                            load_time_millis: k,
                            home_session_id: f.default.getHomeSessionId(w),
                            start_home_session_id: G,
                            featured_item_ids: R(w, V),
                            page: B
                        }), H = t, (x = h.results.items.filter(function(e) {
                            return e.type === i.GuildFeedItemTypes.FORUM_POST
                        })).length > 0 && l.default.dispatch({
                            type: "LOAD_THREADS_SUCCESS",
                            threads: x.map(function(e) {
                                return e.thread
                            }),
                            firstMessages: x.map(function(e) {
                                return e.message
                            }),
                            guildId: H
                        }), [3, 6];
                    case 5:
                        throw M = N.sent(), l.default.dispatch({
                            type: "GUILD_FEED_FETCH_FAILURE",
                            guildId: t,
                            error: new c.default(M)
                        }), M;
                    case 6:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function L(e, t, n) {
        (0, _.markAnalyticsFeedItemSeen)((0, y.getGuildFeedSeenManagerId)(e), t, n)
    }

    function M(e, t, n) {
        (0, _.markAnalyticsFeedItemUnseen)((0, y.getGuildFeedSeenManagerId)(e), t, n)
    }

    function U(e) {
        return w.apply(this, arguments)
    }

    function w() {
        return (w = A(function(e) {
            var t, n;
            return N(this, function(r) {
                switch (r.label) {
                    case 0:
                        return t = (0, h.default)(e), [4, s.HTTP.post({
                            url: v.Endpoints.GUILD_FEED_MESSAGE_REMOVE(t.channel_id, t.id)
                        })];
                    case 1:
                        return n = r.sent(), l.default.dispatch({
                            type: "GUILD_FEED_ITEM_REMOVE",
                            item: e
                        }), [2, n]
                }
            })
        })).apply(this, arguments)
    }

    function k(e, t) {
        return G.apply(this, arguments)
    }

    function G() {
        return (G = A(function(e, t) {
            var n, r;
            return N(this, function(o) {
                switch (o.label) {
                    case 0:
                        return n = (0, h.default)(e), [4, s.HTTP.put({
                            url: v.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                            body: {
                                channel_id: n.channel_id,
                                message_id: n.id,
                                load_id: I.default.getLoadId(t),
                                preference: u.GuildFeedPreferenceOptions.HIDDEN,
                                entity_type: a.GuildFeedPreferenceEntityTypes.MESSAGE
                            }
                        })];
                    case 1:
                        return r = o.sent(), l.default.dispatch({
                            type: "GUILD_FEED_ITEM_HIDE",
                            item: e
                        }), [2, r]
                }
            })
        })).apply(this, arguments)
    }

    function B(e) {
        return j.apply(this, arguments)
    }

    function j() {
        return (j = A(function(e) {
            var t, n;
            return N(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), [4, s.HTTP.get({
                            url: v.Endpoints.GUILD_FEED_FEATURE_ITEM(e)
                        })];
                    case 1:
                        return t = r.sent().body, l.default.dispatch({
                            type: "GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS",
                            guildId: e,
                            data: t
                        }), [3, 3];
                    case 2:
                        throw n = r.sent(), l.default.dispatch({
                            type: "GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE",
                            guildId: e,
                            error: new c.default(n)
                        }), n;
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function F(e, t, n) {
        return V.apply(this, arguments)
    }

    function V() {
        return (V = A(function(e, t, n) {
            var r, o, i, a, u, c;
            return N(this, function(f) {
                switch (f.label) {
                    case 0:
                        o = (r = (0, O.default)(e)).entityId, i = r.details, a = r.guildId, u = r.entityType, f.label = 1;
                    case 1:
                        return f.trys.push([1, 3, , 4]), [4, s.HTTP.put({
                            url: v.Endpoints.GUILD_FEED_FEATURE_ITEM(a),
                            body: {
                                entity_id: o,
                                entity_type: u,
                                expires_at: t,
                                details: i
                            }
                        })];
                    case 2:
                        return c = f.sent(), l.default.dispatch({
                            type: "GUILD_FEED_FEATURE_ITEM",
                            featureableItem: e,
                            options: n
                        }), [2, c];
                    case 3:
                        throw f.sent();
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function H(e) {
        return x.apply(this, arguments)
    }

    function x() {
        return (x = A(function(e) {
            var t, n, r, o, i;
            return N(this, function(a) {
                switch (a.label) {
                    case 0:
                        n = (t = (0, O.default)(e)).entityId, r = t.guildId, o = t.entityType, a.label = 1;
                    case 1:
                        return a.trys.push([1, 3, , 4]), [4, s.HTTP.del({
                            url: v.Endpoints.GUILD_FEED_FEATURE_ITEM(r),
                            body: {
                                entity_id: n,
                                entity_type: o
                            }
                        })];
                    case 2:
                        return i = a.sent(), l.default.dispatch({
                            type: "GUILD_FEED_UNFEATURE_ITEM",
                            featureableItem: e
                        }), [2, i];
                    case 3:
                        throw a.sent();
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function Y(e, t) {
        return W.apply(this, arguments)
    }

    function W() {
        return (W = A(function(e, t) {
            var n, r;
            return N(this, function(o) {
                switch (o.label) {
                    case 0:
                        return n = (0, h.default)(e), [4, s.HTTP.del({
                            url: v.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(t),
                            body: {
                                channel_id: n.channel_id,
                                message_id: n.id,
                                load_id: I.default.getLoadId(t),
                                entity_type: a.GuildFeedPreferenceEntityTypes.MESSAGE
                            }
                        })];
                    case 1:
                        return r = o.sent(), l.default.dispatch({
                            type: "GUILD_FEED_ITEM_UNHIDE",
                            item: e
                        }), [2, r]
                }
            })
        })).apply(this, arguments)
    }

    function K(e, t) {
        return z.apply(this, arguments)
    }

    function z() {
        return (z = A(function(e, t) {
            return N(this, function(n) {
                switch (n.label) {
                    case 0:
                        var r, o;
                        return [4, s.HTTP.put({
                            url: v.Endpoints.GUILD_FEED_MESSAGE_SET_PREFERENCE(e),
                            body: (r = b({}, t), o = (o = {
                                load_id: I.default.getLoadId(e),
                                preference: u.GuildFeedPreferenceOptions.DEMOTED
                            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(o)).forEach(function(e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
                            }), r)
                        })];
                    case 1:
                        return [2, n.sent()]
                }
            })
        })).apply(this, arguments)
    }

    function X(e) {
        var t = e.guild_id;
        null != t && ! function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
            (0, _.flushAnalyticsFeedItems)((0, y.getGuildFeedSeenManagerId)(e), t)
        }(t), p.default.track(v.AnalyticEvents.FEED_ITEM_INTERACTED, e)
    }
}