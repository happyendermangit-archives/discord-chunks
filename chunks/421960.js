function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsContexts: function() {
            return o
        },
        MINIMUM_MEMBER_COUNT: function() {
            return h
        },
        getDiscoverableGuild: function() {
            return L
        },
        makeDiscoverableGuild: function() {
            return g
        },
        startLurking: function() {
            return O
        },
        trackDiscoveryExited: function() {
            return b
        },
        trackDiscoveryViewed: function() {
            return A
        },
        trackGuildJoinClicked: function() {
            return D
        },
        trackSearchClosed: function() {
            return N
        },
        trackSearchResultsViewed: function() {
            return P
        },
        trackSearchStarted: function() {
            return R
        },
        trackTagSearchStarted: function() {
            return C
        },
        viewGuild: function() {
            return S
        }
    });
    var r, o, i = n("664751"),
        a = n("967888"),
        u = n("322997"),
        s = n("368995"),
        l = n("163291"),
        c = n("909080"),
        f = n("382199"),
        d = n("306912"),
        _ = n("870331"),
        E = n("281767");

    function p(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function m(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    p(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    p(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function y(e) {
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

    function I(e, t) {
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
    }(r = o || (o = {})).SEARCH = "Search", r.RECOMMENDED = "Recommended", r.POPULAR = "Popular", r.RECOMMENDED_E3 = "Recommended - E3", r.HEADER = "Header";
    var h = ">200";

    function O(e, t) {
        return T.apply(this, arguments)
    }

    function T() {
        return (T = m(function(e, t) {
            var n, r, o, i, a, f, _, E, p, m, h = arguments;
            return I(this, function(I) {
                switch (I.label) {
                    case 0:
                        if (r = (n = h.length > 2 && void 0 !== h[2] ? h[2] : {}).channelId, o = n.onSuccess, i = n.joinSource, a = n.loadId, _ = void 0 === (f = n.setsHistorySnapshot) || f, E = (0, l.getHistory)(), _ && s.default.setHistorySnapshot(y({}, E)), p = d.default.getGuild(e), m = {
                                state: {
                                    analyticsSource: t
                                }
                            }, !(null != p && null != p.joinedAt)) return [3, 1];
                        return (0, c.transitionToGuild)(e, m), [3, 4];
                    case 1:
                        return [4, u.default.joinGuild(e, {
                            lurker: !0,
                            source: i,
                            loadId: a,
                            lurkLocation: null == t ? void 0 : t.page
                        })];
                    case 2:
                        var O, T;
                        return I.sent(), [4, u.default.transitionToGuildSync(e, (O = y({}, m), T = (T = {
                            welcomeModalChannelId: r,
                            search: E.location.search
                        }, T), Object.getOwnPropertyDescriptors ? Object.defineProperties(O, Object.getOwnPropertyDescriptors(T)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(T)).forEach(function(e) {
                            Object.defineProperty(O, e, Object.getOwnPropertyDescriptor(T, e))
                        }), O), r)];
                    case 3:
                        I.sent(), I.label = 4;
                    case 4:
                        return null == o || o(), [2]
                }
            })
        })).apply(this, arguments)
    }

    function S(e) {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = m(function(e) {
            var t, n, r, i, a, u, s;
            return I(this, function(l) {
                switch (l.label) {
                    case 0:
                        return t = e.loadId, n = e.guildId, r = e.index, i = e.analyticsContext, a = e.categoryId, "string" == typeof i && i in o && (u = i), s = {
                            page: E.AnalyticsPages.GUILD_DISCOVERY,
                            object: E.AnalyticsObjects.CARD,
                            section: u
                        }, [4, O(n, s, {
                            loadId: t
                        })];
                    case 1:
                        return l.sent(),
                            function(e) {
                                var t = e.loadId,
                                    n = e.guildId,
                                    r = e.index,
                                    o = e.analyticsContext,
                                    i = e.categoryId,
                                    a = {
                                        page: E.AnalyticsPages.GUILD_DISCOVERY,
                                        section: o
                                    };
                                "string" != typeof o && null != o.location && (a = o.location), _.default.track(E.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                                    location: a,
                                    guild_id: n,
                                    load_id: t,
                                    card_index: r,
                                    location_object: E.AnalyticsObjects.CARD,
                                    category_id: i
                                })
                            }({
                                loadId: t,
                                guildId: n,
                                index: r,
                                analyticsContext: i,
                                categoryId: a
                            }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function g(e) {
        return {
            id: e.id,
            name: e.name,
            description: e.description,
            splash: e.splash,
            banner: e.banner,
            icon: e.icon,
            features: new Set(e.features),
            presenceCount: e.approximate_presence_count,
            memberCount: e.approximate_member_count,
            premiumSubscriptionCount: e.premium_subscription_count,
            preferredLocale: e.preferred_locale,
            discoverySplash: e.discovery_splash,
            emojis: e.emojis,
            emojiCount: e.emoji_count,
            stickers: e.stickers,
            stickerCount: e.sticker_count,
            keywords: e.keywords
        }
    }

    function A(e) {
        var t = e.loadId,
            n = e.gamesYouPlayGuilds,
            r = e.allGuilds,
            o = e.categoryId,
            i = e.recommendationsSource,
            a = n.length,
            u = r.length;
        _.default.track(E.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
            load_id: t,
            num_guilds: a + u,
            num_guilds_recommended: a,
            num_guilds_popular: u,
            recommended_guild_ids: n.map(function(e) {
                return e.id
            }),
            category_id: o,
            recommendations_source: void 0 === i ? null : i
        })
    }

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        _.default.track(E.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
            load_id: e,
            guild_ids_viewed: t,
            recommendations_source: n
        })
    }

    function N(e) {
        _.default.track(E.AnalyticEvents.SEARCH_CLOSED, {
            load_id: e
        })
    }

    function R(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        _.default.track(E.AnalyticEvents.SEARCH_STARTED, {
            search_type: E.SearchTypes.GUILD_DISCOVERY,
            load_id: e,
            location: n.location,
            category_id: t
        })
    }

    function C(e, t, n, r) {
        _.default.track(E.AnalyticEvents.SEARCH_STARTED, {
            search_type: E.SearchTypes.GUILD_DISCOVERY_TAG,
            load_id: e,
            location: {
                page: E.AnalyticsPages.GUILD_DISCOVERY,
                section: n
            },
            category_id: t,
            guild_id: r
        })
    }

    function P(e) {
        var t = e.loadId,
            n = e.searchId,
            r = e.query,
            o = e.guildResults,
            i = e.analyticsContext,
            a = e.categoryId,
            u = e.isTagSearch;
        _.default.track(E.AnalyticEvents.SEARCH_RESULT_VIEWED, {
            search_type: u ? E.SearchTypes.GUILD_DISCOVERY_TAG : E.SearchTypes.GUILD_DISCOVERY,
            load_id: t,
            search_id: n,
            total_results: void 0 !== o ? o.length : null,
            guild_ids: void 0 !== o ? o.map(function(e) {
                return e.id
            }) : null,
            query: r,
            location: i.location,
            category_id: a
        })
    }

    function D(e) {
        var t = s.default.getLoadId(e);
        _.default.track(E.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
            guild_id: e,
            load_id: t,
            guild_size: f.default.getMemberCount(e)
        })
    }

    function L(e) {
        return M.apply(this, arguments)
    }

    function M() {
        return (M = m(function(e) {
            var t, n, r, o;
            return I(this, function(o) {
                switch (o.label) {
                    case 0:
                        return o.trys.push([0, 2, , 3]), [4, a.HTTP.get({
                            url: E.Endpoints.GUILD_DISCOVERY,
                            query: i.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        })];
                    case 1:
                        if (null == (r = null === (n = o.sent().body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0])) return [2, r];
                        return [2, g(r)];
                    case 2:
                        return o.sent(), [2, null];
                    case 3:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
}