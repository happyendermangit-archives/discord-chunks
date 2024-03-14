function(e, t, n) {
    "use strict";
    let i, s, r, a, o, l, u;
    n.r(t), n.d(t, {
        findFirstVoiceChannelId: function() {
            return V
        },
        default: function() {
            return H
        }
    }), n("222007"), n("808653");
    var d = n("917351"),
        c = n.n(d),
        f = n("446674"),
        _ = n("95410"),
        E = n("913144"),
        h = n("21121"),
        g = n("934306"),
        m = n("393414"),
        p = n("233069"),
        S = n("449008"),
        v = n("271938"),
        T = n("42203"),
        I = n("923959"),
        C = n("305961"),
        A = n("42887"),
        y = n("162771"),
        N = n("49111"),
        R = n("724210");
    let O = "SelectedChannelStore",
        D = {},
        P = {},
        L = {},
        M = new Set;

    function b(e) {
        return String(e)
    }

    function U() {
        !__OVERLAY__ && _.default.set(O, {
            selectedChannelId: r,
            selectedVoiceChannelId: o,
            lastChannelFollowingDestination: a,
            lastConnectedTime: l,
            selectedChannelIds: D,
            mostRecentSelectedTextChannelIds: L,
            knownThreadIds: c(D).values().concat(c.values(L)).filter(S.isNotNullish).uniq().filter(e => {
                let t = T.default.getBasicChannel(e);
                return M.has(e) || null != t && p.THREAD_CHANNEL_TYPES.has(t.type)
            }).value()
        })
    }

    function w(e) {
        if (null != e) {
            let t = I.default.getDefaultChannel(e);
            if (null != t) return t.id
        }
    }

    function k(e, t) {
        if (null == e || null == t || L[e] === t) return !1;
        let n = T.default.getChannel(t),
            i = null != n && (0, p.isGuildTextChannelType)(n.type),
            s = (null == n ? void 0 : n.getGuildId()) === e;
        return !!i && !!s && (L[e] = t, !0)
    }

    function V(e) {
        let t = T.default.getMutableBasicGuildChannelsForGuild(e),
            n = c.find(t, e => e.type === N.ChannelTypes.GUILD_VOICE);
        return null == n ? void 0 : n.id
    }

    function G() {
        let e = !1,
            t = C.default.getGuilds();
        return c.each(D, (t, n) => {
            (null == t || !T.default.hasChannel(t) && t !== r && !M.has(t) && !(0, R.isGuildHomeChannel)(t)) && (delete D[n], delete P[n], e = !0)
        }), c.each(L, (t, n) => {
            (null == t || !T.default.hasChannel(t) && !M.has(t)) && (delete L[n], e = !0)
        }), c.each(t, e => {
            let t = D[e.id];
            null == L[e.id] && k(e.id, t)
        }), null != l && Date.now() - l >= 3e5 && (o = null, e = !0), e
    }

    function F(e, t) {
        if (M.delete(e), null == t) {
            let n = y.default.getGuildId();
            D[b(n)] === e && (t = n)
        }
        let n = null != C.default.getGuild(t) ? t : null,
            i = !1;
        o === e && (o = null, i = !0), !(0, h.isInMainTabsExperiment)() && (D[b(n)] === e && (D[b(n)] = w(b(n)), y.default.getGuildId() === n && (0, m.replaceWith)(N.Routes.CHANNEL(t, D[b(n)])), i = !0), null != n && L[n] === e && (delete L[n], i = !0)), i && U()
    }

    function x(e) {
        let {
            channel: {
                id: t,
                guild_id: n
            }
        } = e;
        F(t, n)
    }
    class B extends f.default.Store {
        initialize() {
            if (!__OVERLAY__) {
                var e, t;
                let n = null !== (e = _.default.get(O)) && void 0 !== e ? e : {
                    selectedChannelId: r,
                    selectedVoiceChannelId: o,
                    lastChannelFollowingDestination: a,
                    lastConnectedTime: l,
                    selectedChannelIds: D,
                    mostRecentSelectedTextChannelIds: L
                };
                null != n.knownThreadIds && (M = new Set(n.knownThreadIds)), o = n.selectedVoiceChannelId, a = n.lastChannelFollowingDestination, l = n.lastConnectedTime, L = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (D = {
                    ...n.selectedChannelIds,
                    null: null
                })
            }
            this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(C.default, T.default, y.default, I.default, A.default)
        }
        getChannelId(e) {
            var t, n;
            let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                s = b(e === N.ME ? null : null !== (t = null != e ? e : y.default.getGuildId()) && void 0 !== t ? t : null);
            return i ? null !== (n = D[s]) && void 0 !== n ? n : w(s) : D[s]
        }
        getVoiceChannelId() {
            return A.default.isSupported() ? o : null
        }
        getMostRecentSelectedTextChannelId(e) {
            var t;
            return null == e ? null : null !== (t = L[e]) && void 0 !== t ? t : null
        }
        getCurrentlySelectedChannelId(e) {
            return null != e ? D[e] : r
        }
        getLastSelectedChannelId(e) {
            return null != e ? P[e] : s
        }
        getLastSelectedChannels(e) {
            return P[e]
        }
        getLastChannelFollowingDestination() {
            return a
        }
    }
    B.displayName = "SelectedChannelStore";
    var H = new B(E.default, {
        CONNECTION_OPEN: function(e) {
            i = e.sessionId, null != o && null == T.default.getChannel(o) && (o = null);
            let t = G();
            t && U()
        },
        OVERLAY_INITIALIZE: function(e) {
            i = e.sessionId, o = e.selectedVoiceChannelId, D = {}, P = {}, r = e.selectedChannelId, D[e.selectedGuildId] = e.selectedChannelId, k(e.selectedGuildId, r), G()
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
            null == n && (!(0, h.isInMainTabsExperiment)() || (0, g.shouldHandleNewPanelsRoute)(t)) && (n = w(t)), null != r && n !== r && (s = r), r = n, k(t, n), D[b(t)] !== n && (P[b(t)] = D[b(t)], D[b(t)] = r), U()
        },
        CHANNEL_CREATE: function(e) {
            let {
                channel: t
            } = e;
            switch (t.type) {
                case N.ChannelTypes.GUILD_ANNOUNCEMENT:
                case N.ChannelTypes.GUILD_TEXT:
                    let n = t.guild_id;
                    if (null != n && null == L[n] && (L[n] = t.id), null != n && null == D[n]) return D[n] = w(n), !0
            }
            return !1
        },
        CHANNEL_DELETE: x,
        CHANNEL_UPDATES: function(e) {
            let {
                channels: t
            } = e;
            for (let e of t) e.isScheduledForDeletion() && F(e.id, e.guild_id)
        },
        THREAD_DELETE: x,
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            if (null == D[t.id]) {
                let e = w(t.id);
                D[t.id] = e, k(t.id, e), U()
            }
        },
        GUILD_DELETE: function(e) {
            let {
                guild: {
                    id: t,
                    unavailable: n
                }
            } = e;
            if (o === D[t] && (o = null), n) return !1;
            delete L[t], delete D[t], U()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) {
                let e = T.default.getChannel(o),
                    t = null == e ? void 0 : e.guild_id;
                null != t && t !== y.default.getGuildId() && D[t] === o && (D[t] = w(t))
            }
            o = t, U()
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                var n, s, r;
                if (t.sessionId === i) {
                    clearInterval(u);
                    let e = null === (n = T.default.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
                    t.guildId !== e && null == t.channelId || (o = t.channelId), l = Date.now(), null != o && (u = setInterval(() => {
                        l = Date.now(), U()
                    }, 6e4)), U()
                } else {
                    if (t.userId !== v.default.getId()) return e;
                    clearInterval(u), u = void 0, l = 0;
                    let n = null === (s = T.default.getChannel(o)) || void 0 === s ? void 0 : s.getGuildId(),
                        i = null === (r = T.default.getChannel(t.channelId)) || void 0 === r ? void 0 : r.getGuildId();
                    null != n && i === n && (o = null), U()
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
            }, U())
        },
        LOGOUT: function() {
            D = {}, r = null, s = void 0, L = {}, a = {}, o = null, _.default.remove(O)
        }
    })
}