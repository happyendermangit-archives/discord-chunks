function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i = n("392711"),
        a = n.n(i),
        u = n("898511"),
        s = n("242880"),
        l = n("629815"),
        c = n("505793"),
        f = n("992910"),
        d = n("709537"),
        _ = n("474821"),
        E = n("914535"),
        p = n("798206"),
        m = n("217014"),
        y = n("935741"),
        I = n("309944"),
        h = n("29604"),
        O = n("957808"),
        T = n("306912"),
        S = n("29884"),
        v = n("879547"),
        g = n("894288"),
        A = n("63116"),
        b = n("848957"),
        N = n("378309"),
        R = n("162677"),
        C = n("281767"),
        P = n("941504");

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function L(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function M(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function U(e) {
        return (U = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function w(e, t) {
        return (w = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function k(e) {
        return function(e) {
            if (Array.isArray(e)) return D(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return D(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return D(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var G = "seenQSTutorial",
        B = [c.AutocompleterResultTypes.USER, c.AutocompleterResultTypes.GROUP_DM, c.AutocompleterResultTypes.TEXT_CHANNEL, c.AutocompleterResultTypes.GUILD, c.AutocompleterResultTypes.APPLICATION, c.AutocompleterResultTypes.LINK],
        j = 0,
        F = !1,
        V = !1,
        H = null,
        x = [],
        Y = null,
        W = 0,
        K = [],
        z = [];

    function X() {
        V = T.default.getGuildCount() >= 3 || a().size(y.default.getMutablePrivateChannels()) >= 20, K = []
    }

    function q(e) {
        var t = (0, f.default)(e);
        return null == t || null != H && H !== t.type ? null : t
    }

    function Q(e) {
        var t, n = e.query,
            o = e.queryMode,
            i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = A.default.getGuildId()) && void 0 !== t ? t : void 0,
            a = new Set(["user:".concat(m.default.getId())]);
        null != i && a.add("guild:".concat(i)), r = null != r ? r : new c.default(J, B, null != o ? 100 : 5, {
            frecencyBoosters: !0,
            blacklist: a
        }), Y = null, W = n.length, H = o, r.search(n)
    }

    function J(e, t) {
        ! function(e, t) {
            if (e.length !== t.length) return !1;
            for (var n = 0; n < e.length; n++) {
                var r = e[n],
                    o = t[n];
                if (r.record.id !== o.record.id) return !1
            }
            return !0
        }(e = "" === (t = t.trim()).trim() ? function() {
            var e, t, n, r, o, i, u = null !== (n = A.default.getGuildId()) && void 0 !== n ? n : void 0,
                s = null !== (r = g.default.getChannelId()) && void 0 !== r ? r : void 0;
            switch (H) {
                case c.AutocompleterResultTypes.USER:
                    var l = m.default.getId();
                    return N.default.getRecentlyTalked(s, 100).filter(function(e) {
                        return e.record.id !== l
                    });
                case c.AutocompleterResultTypes.APPLICATION:
                    return N.default.queryApplications({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case c.AutocompleterResultTypes.GUILD:
                    return N.default.queryGuilds({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case c.AutocompleterResultTypes.TEXT_CHANNEL:
                    return N.default.queryChannels({
                        query: "",
                        guildId: A.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0
                    });
                case c.AutocompleterResultTypes.VOICE_CHANNEL:
                    return N.default.queryChannels({
                        query: "",
                        guildId: A.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0,
                        filter: function() {
                            return !0
                        },
                        type: h.GUILD_VOCAL_CHANNELS_KEY
                    })
            }
            for (var f = [], d = [], p = 1; p < z.length; p += 1) {
                var O = q(z[p]);
                if (null != O)(O.type !== c.AutocompleterResultTypes.TEXT_CHANNEL && O.type !== c.AutocompleterResultTypes.VOICE_CHANNEL || S.default.can(C.Permissions.VIEW_CHANNEL, O.record)) && d.push(O)
            }
            d.length > 0 && (o = f).push.apply(o, [(0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_LAST_CHANNEL)].concat(k(d)));
            var T = (e = function(e) {
                return e === s || z.includes(e)
            }, t = [], I.default.getRecentlyEditedDrafts(I.DraftType.ChannelMessage).forEach(function(n) {
                var r = n.channelId;
                if (!e(r)) {
                    var o = q(r);
                    null != o && t.push(o)
                }
            }), t);
            T.length > 0 && (i = f).push.apply(i, [(0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_DRAFTS)].concat(k(T)));
            var D = v.default.getMentionChannelIds().filter(function(e) {
                return e !== s && !z.includes(e)
            }).map(function(e) {
                return q(e)
            }).filter(R.isNotNullish).reverse();
            if (D.length > 0 && (f.push((0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_MENTIONS)), f = f.concat(D)), null != u) {
                var L = h.default.getSelectableChannelIds(u).filter(function(e) {
                    var t = y.default.getChannel(e);
                    return !(null == t || e === s || z.includes(e) || b.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && b.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, _.getHasImportantUnread)(t)
                }).map(function(e) {
                    return q(e)
                }).filter(function(e) {
                    return e
                });
                Object.values(E.default.getActiveJoinedUnreadThreadsForGuild(u)).forEach(function(e) {
                    for (var t in e) {
                        var n = q(t);
                        null != n && L.push(n)
                    }
                }), L.length > 0 && (f.push((0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), f = f.concat(L))
            }
            return a()(f).uniqBy(function(e) {
                return e.record.id
            }).value()
        }() : e, K) && (K = e, ! function(e, t) {
            switch (H) {
                case c.AutocompleterResultTypes.USER:
                    var n = T.default.getGuild(A.default.getGuildId());
                    e.unshift((0, c.createHeaderResult)(null != n ? P.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                        name: n.name
                    }) : P.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), x = e;
                    break;
                case c.AutocompleterResultTypes.TEXT_CHANNEL:
                    e.unshift((0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), x = e;
                    break;
                case c.AutocompleterResultTypes.VOICE_CHANNEL:
                    e.unshift((0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), x = e;
                    break;
                case c.AutocompleterResultTypes.GUILD:
                    e.unshift((0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), x = e;
                    break;
                case c.AutocompleterResultTypes.APPLICATION:
                    e.unshift((0, c.createHeaderResult)(P.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), x = e;
                    break;
                default:
                    x = e
            }
            if (t !== Y) Y = t, W = Math.max(t.length, W), j = (0, c.findNextSelectedResult)(c.FindResultDirections.DOWN, -1, x);
            else {
                var r = x[j];
                null != r && r.type === c.AutocompleterResultTypes.HEADER && (j = (0, c.findNextSelectedResult)(c.FindResultDirections.DOWN, j, x))
            }
            ee.emitChange()
        }(e, t))
    }

    function Z() {
        Y = null, W = 0, K = [], null != r && (r.destroy(), r = null)
    }
    var $ = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && w(e, t)
        }(l, e);
        var t, n, o, i, a, u = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = U(t);
            if (n) {
                var a = U(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), u.apply(this, arguments)
        }
        return o = l, i = [{
            key: "initialize",
            value: function(e) {
                var t;
                this.waitFor(O.default, T.default, y.default), this.syncWith([p.default], function() {
                    return !0
                }), F = s.Storage.get(G) || !1, z = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    channelHistory: z
                }
            }
        }, {
            key: "isOpen",
            value: function() {
                return null != r
            }
        }, {
            key: "getResultTotals",
            value: function(e) {
                return null == r ? 0 : null == e ? r.results.reduce(function(e, t) {
                    return t.type !== c.AutocompleterResultTypes.HEADER ? e + 1 : e
                }, 0) : r.results.reduce(function(t, n) {
                    return n.type === e ? t + 1 : t
                }, 0)
            }
        }, {
            key: "channelNoticePredicate",
            value: function(e, t) {
                var n = Date.now() - t >= C.CHANNEL_NOTICE_SHOW_DELAY;
                return V && n
            }
        }, {
            key: "getFrequentGuilds",
            value: function() {
                return null != r ? r.queryGuilds("", 100) : null
            }
        }, {
            key: "getFrequentGuildsLength",
            value: function() {
                return null != r ? r.queryGuilds("", 100).length : 0
            }
        }, {
            key: "getChannelHistory",
            value: function() {
                return z
            }
        }, {
            key: "getProps",
            value: function() {
                return {
                    theme: p.default.theme,
                    query: null != r ? r.query : "",
                    queryMode: H,
                    results: x,
                    selectedIndex: j,
                    seenTutorial: F,
                    maxQueryLength: W
                }
            }
        }], L(o.prototype, i), a && L(o, a), l
    }(u.default.PersistedStore);
    M($, "displayName", "QuickSwitcherStore"), M($, "persistKey", "QuickSwitcherStore");
    var ee = new $(l.default, {
        CONNECTION_OPEN: X,
        CONNECTION_OPEN_SUPPLEMENTAL: X,
        QUICKSWITCHER_SHOW: Q,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: Q,
        QUICKSWITCHER_HIDE: Z,
        OVERLAY_SET_INPUT_LOCKED: Z,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: Z,
        QUICKSWITCHER_SEARCH: function(e) {
            var t = e.query,
                n = e.queryMode;
            if (null == r) return !1;
            var o = null !== (i = A.default.getGuildId()) && void 0 !== i ? i : null;
            if (H !== n) {
                r.setResultTypes(null != n ? [n] : B), r.setLimit(null != n ? 100 : 5);
                var i, a, u = null !== (a = A.default.getGuildId()) && void 0 !== a ? a : void 0;
                n === c.AutocompleterResultTypes.USER && null != u ? r.setOptions({
                    userFilters: {
                        guild: u,
                        friends: !0
                    }
                }, !0) : n === c.AutocompleterResultTypes.VOICE_CHANNEL ? r.setOptions({
                    voiceChannelGuildFilter: null
                }, !0) : r.setOptions({
                    userFilters: null,
                    voiceChannelGuildFilter: void 0
                }, !0)
            }
            H = n, r.search(t, H === c.AutocompleterResultTypes.USER ? o : void 0)
        },
        QUICKSWITCHER_SELECT: function(e) {
            j = e.selectedIndex
        },
        QUICKSWITCHER_SWITCH_TO: function() {
            if (F) return !1;
            F = !0, s.Storage.set(G, !0)
        },
        CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            if (null == t) return !1;
            (z = z.filter(function(e) {
                return e !== t
            })).unshift(t), z.length > 4 && (z.length = 4)
        }
    });
    t.default = ee
}