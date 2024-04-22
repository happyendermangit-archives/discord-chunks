function(e, t, n) {
    "use strict";
    let i, r, s, a, o, l, u;
    n.r(t), n.d(t, {
        findFirstVoiceChannelId: function() {
            return x
        }
    }), n("47120"), n("724458");
    var d, _, c, E, I = n("392711"),
        T = n.n(I),
        f = n("442837"),
        S = n("433517"),
        h = n("570140"),
        A = n("57132"),
        m = n("781157"),
        N = n("703656"),
        p = n("131704"),
        O = n("823379"),
        R = n("314897"),
        C = n("592125"),
        g = n("984933"),
        L = n("430824"),
        D = n("131951"),
        v = n("914010"),
        M = n("981631"),
        y = n("176505");
    let P = "SelectedChannelStore",
        U = {},
        b = {},
        G = {},
        w = new Set;

    function k(e) {
        return String(e)
    }

    function B() {
        !__OVERLAY__ && S.Storage.set(P, {
            selectedChannelId: s,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: U,
            mostRecentSelectedTextChannelIds: G,
            knownThreadIds: T()(U).values().concat(T().values(G)).filter(O.isNotNullish).uniq().filter(e => {
                let t = C.default.getBasicChannel(e);
                return w.has(e) || null != t && p.THREAD_CHANNEL_TYPES.has(t.type)
            }).value()
        })
    }

    function F(e) {
        if (null != e) {
            let t = g.default.getDefaultChannel(e);
            if (null != t) return t.id
        }
    }

    function V(e, t) {
        if (null == e || null == t || G[e] === t) return !1;
        let n = C.default.getChannel(t),
            i = null != n && (0, p.isGuildTextChannelType)(n.type),
            r = (null == n ? void 0 : n.getGuildId()) === e;
        return !!i && !!r && (G[e] = t, !0)
    }

    function x(e) {
        let t = C.default.getMutableBasicGuildChannelsForGuild(e),
            n = T().find(t, e => e.type === M.ChannelTypes.GUILD_VOICE);
        return null == n ? void 0 : n.id
    }

    function H() {
        let e = !1,
            t = L.default.getGuilds();
        return T().each(U, (t, n) => {
            (null == t || !C.default.hasChannel(t) && t !== s && !w.has(t) && !(0, y.isGuildHomeChannel)(t)) && (delete U[n], delete b[n], e = !0)
        }), T().each(G, (t, n) => {
            (null == t || !C.default.hasChannel(t) && !w.has(t)) && (delete G[n], e = !0)
        }), T().each(t, e => {
            let t = U[e.id];
            null == G[e.id] && V(e.id, t)
        }), null != l && Date.now() - l >= 3e5 && (o = null, e = !0), e
    }

    function Y(e, t) {
        if (w.delete(e), null == t) {
            let n = v.default.getGuildId();
            U[k(n)] === e && (t = n)
        }
        let n = null != L.default.getGuild(t) ? t : null,
            i = !1;
        o === e && (o = null, i = !0), !(0, A.isInMainTabsExperiment)() && (U[k(n)] === e && (U[k(n)] = F(k(n)), v.default.getGuildId() === n && (0, N.replaceWith)(M.Routes.CHANNEL(t, U[k(n)])), i = !0), null != n && G[n] === e && (delete G[n], i = !0)), i && B()
    }

    function j(e) {
        let {
            channel: {
                id: t,
                guild_id: n
            }
        } = e;
        Y(t, n)
    }
    class W extends(d = f.default.Store) {
        initialize() {
            if (!__OVERLAY__) {
                var e, t;
                let n = null !== (e = S.Storage.get(P)) && void 0 !== e ? e : {
                    selectedChannelId: s,
                    selectedVoiceChannelId: o,
                    lastChannelFollowingDestination: a,
                    lastConnectedTime: l,
                    selectedChannelIds: U,
                    mostRecentSelectedTextChannelIds: G
                };
                null != n.knownThreadIds && (w = new Set(n.knownThreadIds)), o = n.selectedVoiceChannelId, a = n.lastChannelFollowingDestination, l = n.lastConnectedTime, G = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (U = {
                    ...n.selectedChannelIds,
                    null: null
                })
            }
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(L.default, C.default, v.default, g.default, D.default)
        }
        getChannelId(e) {
            var t, n;
            let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = k(e === M.ME ? null : null !== (t = null != e ? e : v.default.getGuildId()) && void 0 !== t ? t : null);
            return i ? null !== (n = U[r]) && void 0 !== n ? n : F(r) : U[r]
        }
        getVoiceChannelId() {
            return D.default.isSupported() ? o : null
        }
        getMostRecentSelectedTextChannelId(e) {
            var t;
            return null == e ? null : null !== (t = G[e]) && void 0 !== t ? t : null
        }
        getCurrentlySelectedChannelId(e) {
            return null != e ? U[e] : s
        }
        getLastSelectedChannelId(e) {
            return null != e ? b[e] : r
        }
        getLastSelectedChannels(e) {
            return b[e]
        }
        getLastChannelFollowingDestination() {
            return a
        }
    }
    E = "SelectedChannelStore", (c = "displayName") in(_ = W) ? Object.defineProperty(_, c, {
        value: E,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : _[c] = E, t.default = new W(h.default, {
        CONNECTION_OPEN: function(e) {
            i = e.sessionId, null != o && null == C.default.getChannel(o) && (o = null), H() && B()
        },
        OVERLAY_INITIALIZE: function(e) {
            i = e.sessionId, o = e.selectedVoiceChannelId, U = {}, b = {}, s = e.selectedChannelId, U[e.selectedGuildId] = e.selectedChannelId, V(e.selectedGuildId, s), H()
        },
        CONNECTION_CLOSED: function() {
            i = null
        },
        CHANNEL_SELECT: function(e) {
            let {
                guildId: t,
                channelId: n
            } = e;
            if (void 0 === t) return !1;
            null == n && (!(0, A.isInMainTabsExperiment)() || (0, m.shouldHandleNewPanelsRoute)(t)) && (n = F(t)), null != s && n !== s && (r = s), s = n, V(t, n), U[k(t)] !== n && (b[k(t)] = U[k(t)], U[k(t)] = s), B()
        },
        CHANNEL_CREATE: function(e) {
            let {
                channel: t
            } = e;
            switch (t.type) {
                case M.ChannelTypes.GUILD_ANNOUNCEMENT:
                case M.ChannelTypes.GUILD_TEXT:
                    let n = t.guild_id;
                    if (null != n && null == G[n] && (G[n] = t.id), null != n && null == U[n]) return U[n] = F(n), !0
            }
            return !1
        },
        CHANNEL_DELETE: j,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t) e.isScheduledForDeletion() && Y(e.id, e.guild_id)
        },
        THREAD_DELETE: j,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            if (null == U[t.id]) {
                let e = F(t.id);
                U[t.id] = e, V(t.id, e), B()
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t,
                    unavailable: n
                }
            } = e;
            if (o === U[t] && (o = null), n) return !1;
            delete G[t], delete U[t], B()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) {
                let e = C.default.getChannel(o),
                    t = null == e ? void 0 : e.guild_id;
                null != t && t !== v.default.getGuildId() && U[t] === o && (U[t] = F(t))
            }
            o = t, B()
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n, r, s;
                if (t.sessionId === i) {
                    clearInterval(u);
                    let e = null === (n = C.default.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
                    t.guildId !== e && null == t.channelId || (o = t.channelId), l = Date.now(), null != o && (u = setInterval(() => {
                        l = Date.now(), B()
                    }, 6e4)), B()
                } else {
                    if (t.userId !== R.default.getId()) return e;
                    clearInterval(u), u = void 0, l = 0;
                    let n = null === (r = C.default.getChannel(o)) || void 0 === r ? void 0 : r.getGuildId(),
                        i = null === (s = C.default.getChannel(t.channelId)) || void 0 === s ? void 0 : s.getGuildId();
                    null != n && i === n && (o = null), B()
                }
                return !0
            }, !1)
        },
        CHANNEL_FOLLOWER_CREATED: function(e) {
            let {
                channelId: t,
                guildId: n
            } = e;
            (null == a || t !== a.channelId) && (a = {
                channelId: t,
                guildId: n
            }, B())
        },
        LOGOUT: function() {
            U = {}, s = null, r = void 0, G = {}, a = {}, o = null, S.Storage.remove(P)
        }
    })
}