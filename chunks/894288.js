function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findFirstVoiceChannelId: function() {
            return H
        }
    });
    var r, o, i, a, u, s, l, c, f = n("392711"),
        d = n.n(f),
        _ = n("898511"),
        E = n("242880"),
        p = n("629815"),
        m = n("895517"),
        y = n("709537"),
        I = n("163291"),
        h = n("569492"),
        O = n("162677"),
        T = n("217014"),
        S = n("935741"),
        v = n("29604"),
        g = n("306912"),
        A = n("335911"),
        b = n("63116"),
        N = n("281767"),
        R = n("928204");

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
    var M = "SelectedChannelStore",
        U = {},
        w = {},
        k = {},
        G = new Set;

    function B(e) {
        return String(e)
    }

    function j() {
        !__OVERLAY__ && E.Storage.set(M, {
            selectedChannelId: i,
            selectedVoiceChannelId: u,
            lastChannelFollowingDestination: a,
            lastConnectedTime: s,
            selectedChannelIds: U,
            mostRecentSelectedTextChannelIds: k,
            knownThreadIds: d()(U).values().concat(d().values(k)).filter(O.isNotNullish).uniq().filter(function(e) {
                var t = S.default.getBasicChannel(e);
                return G.has(e) || null != t && h.THREAD_CHANNEL_TYPES.has(t.type)
            }).value()
        })
    }

    function F(e) {
        if (null != e) {
            var t = v.default.getDefaultChannel(e);
            if (null != t) return t.id
        }
    }

    function V(e, t) {
        if (null == e || null == t || k[e] === t) return !1;
        var n = S.default.getChannel(t),
            r = null != n && (0, h.isGuildTextChannelType)(n.type),
            o = (null == n ? void 0 : n.getGuildId()) === e;
        return !!r && !!o && (k[e] = t, !0)
    }

    function H(e) {
        var t = S.default.getMutableBasicGuildChannelsForGuild(e),
            n = d().find(t, function(e) {
                return e.type === N.ChannelTypes.GUILD_VOICE
            });
        return null == n ? void 0 : n.id
    }

    function x() {
        var e = !1,
            t = g.default.getGuilds();
        return d().each(U, function(t, n) {
            (null == t || !S.default.hasChannel(t) && t !== i && !G.has(t) && !(0, R.isGuildHomeChannel)(t)) && (delete U[n], delete w[n], e = !0)
        }), d().each(k, function(t, n) {
            (null == t || !S.default.hasChannel(t) && !G.has(t)) && (delete k[n], e = !0)
        }), d().each(t, function(e) {
            var t = U[e.id];
            null == k[e.id] && V(e.id, t)
        }), null != s && Date.now() - s >= 3e5 && (u = null, e = !0), e
    }

    function Y(e, t) {
        if (G.delete(e), null == t) {
            var n = b.default.getGuildId();
            U[B(n)] === e && (t = n)
        }
        var r = null != g.default.getGuild(t) ? t : null,
            o = !1;
        u === e && (u = null, o = !0), !(0, m.isInMainTabsExperiment)() && (U[B(r)] === e && (U[B(r)] = F(B(r)), b.default.getGuildId() === r && (0, I.replaceWith)(N.Routes.CHANNEL(t, U[B(r)])), o = !0), null != r && k[r] === e && (delete k[r], o = !0)), o && j()
    }

    function W(e) {
        var t = e.channel;
        Y(t.id, t.guild_id)
    }
    var K = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
        }(d, e);
        var t, n, r, l, c, f = (t = d, n = function() {
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
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function d() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), f.apply(this, arguments)
        }
        return r = d, l = [{
            key: "initialize",
            value: function() {
                if (!__OVERLAY__) {
                    var e, t, n, r, o = null !== (n = E.Storage.get(M)) && void 0 !== n ? n : {
                        selectedChannelId: i,
                        selectedVoiceChannelId: u,
                        lastChannelFollowingDestination: a,
                        lastConnectedTime: s,
                        selectedChannelIds: U,
                        mostRecentSelectedTextChannelIds: k
                    };
                    if (null != o.knownThreadIds && (G = new Set(o.knownThreadIds)), u = o.selectedVoiceChannelId, a = o.lastChannelFollowingDestination, s = o.lastConnectedTime, k = null !== (r = o.mostRecentSelectedTextChannelIds) && void 0 !== r ? r : {}, null != o.selectedChannelIds) {
                        ;
                        e = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    P(e, t, n[t])
                                })
                            }
                            return e
                        }({}, o.selectedChannelIds), t = (t = {
                            null: null
                        }, t), Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(t)).forEach(function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }), U = e
                    }
                }
                this.mustEmitChanges(function(e) {
                    return "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type
                }), this.waitFor(g.default, S.default, b.default, v.default, A.default)
            }
        }, {
            key: "getChannelId",
            value: function(e) {
                var t, n, r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    o = B(e === N.ME ? null : null !== (t = null != e ? e : b.default.getGuildId()) && void 0 !== t ? t : null);
                return r ? null !== (n = U[o]) && void 0 !== n ? n : F(o) : U[o]
            }
        }, {
            key: "getVoiceChannelId",
            value: function() {
                return A.default.isSupported() ? u : null
            }
        }, {
            key: "getMostRecentSelectedTextChannelId",
            value: function(e) {
                var t;
                return null == e ? null : null !== (t = k[e]) && void 0 !== t ? t : null
            }
        }, {
            key: "getCurrentlySelectedChannelId",
            value: function(e) {
                return null != e ? U[e] : i
            }
        }, {
            key: "getLastSelectedChannelId",
            value: function(e) {
                return null != e ? w[e] : o
            }
        }, {
            key: "getLastSelectedChannels",
            value: function(e) {
                return w[e]
            }
        }, {
            key: "getLastChannelFollowingDestination",
            value: function() {
                return a
            }
        }], C(r.prototype, l), c && C(r, c), d
    }(_.default.Store);
    P(K, "displayName", "SelectedChannelStore"), t.default = new K(p.default, {
        CONNECTION_OPEN: function(e) {
            r = e.sessionId, null != u && null == S.default.getChannel(u) && (u = null), x() && j()
        },
        OVERLAY_INITIALIZE: function(e) {
            r = e.sessionId, u = e.selectedVoiceChannelId, U = {}, w = {}, i = e.selectedChannelId, U[e.selectedGuildId] = e.selectedChannelId, V(e.selectedGuildId, i), x()
        },
        CONNECTION_CLOSED: function() {
            r = null
        },
        CHANNEL_SELECT: function(e) {
            var t = e.guildId,
                n = e.channelId;
            if (void 0 === t) return !1;
            null == n && (!(0, m.isInMainTabsExperiment)() || (0, y.shouldHandleNewPanelsRoute)(t)) && (n = F(t)), null != i && n !== i && (o = i), i = n, V(t, n), U[B(t)] !== n && (w[B(t)] = U[B(t)], U[B(t)] = i), j()
        },
        CHANNEL_CREATE: function(e) {
            var t = e.channel;
            switch (t.type) {
                case N.ChannelTypes.GUILD_ANNOUNCEMENT:
                case N.ChannelTypes.GUILD_TEXT:
                    var n = t.guild_id;
                    if (null != n && null == k[n] && (k[n] = t.id), null != n && null == U[n]) return U[n] = F(n), !0
            }
            return !1
        },
        CHANNEL_DELETE: W,
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    u.isScheduledForDeletion() && Y(u.id, u.guild_id)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        THREAD_DELETE: W,
        GUILD_CREATE: function(e) {
            var t = e.guild;
            if (null == U[t.id]) {
                var n = F(t.id);
                U[t.id] = n, V(t.id, n), j()
            }
        },
        GUILD_DELETE: function(e) {
            var t = e.guild,
                n = t.id,
                r = t.unavailable;
            if (u === U[n] && (u = null), r) return !1;
            delete k[n], delete U[n], j()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.channelId;
            if (null == t) {
                var n = S.default.getChannel(u),
                    r = null == n ? void 0 : n.guild_id;
                null != r && r !== b.default.getGuildId() && U[r] === u && (U[r] = F(r))
            }
            u = t, j()
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                if (t.sessionId === r) {
                    clearInterval(l);
                    var n, o = null === (n = S.default.getChannel(u)) || void 0 === n ? void 0 : n.getGuildId();
                    t.guildId !== o && null == t.channelId || (u = t.channelId), s = Date.now(), null != u && (l = setInterval(function() {
                        s = Date.now(), j()
                    }, 6e4)), j()
                } else {
                    if (t.userId !== T.default.getId()) return e;
                    clearInterval(l), l = void 0, s = 0;
                    var i, a, c = null === (i = S.default.getChannel(u)) || void 0 === i ? void 0 : i.getGuildId(),
                        f = null === (a = S.default.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
                    null != c && f === c && (u = null), j()
                }
                return !0
            }, !1)
        },
        CHANNEL_FOLLOWER_CREATED: function(e) {
            var t = e.channelId,
                n = e.guildId;
            (null == a || t !== a.channelId) && (a = {
                channelId: t,
                guildId: n
            }, j())
        },
        LOGOUT: function() {
            U = {}, i = null, o = void 0, k = {}, a = {}, u = null, E.Storage.remove(M)
        }
    })
}