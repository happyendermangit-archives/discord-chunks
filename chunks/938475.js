function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComparator: function() {
            return R
        }
    }), n("47120"), n("724458");
    var i, r = n("392711"),
        a = n.n(r),
        s = n("442837"),
        o = n("759174"),
        l = n("570140"),
        u = n("598077"),
        d = n("314897"),
        _ = n("592125"),
        c = n("271383"),
        E = n("594174"),
        I = n("979651"),
        T = n("709054"),
        f = n("51144"),
        S = n("981631");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = Object.freeze([]),
        m = {};

    function N(e) {
        let t = m[e];
        return null == t && (t = new g(e), m[e] = t), t
    }

    function p(e, t) {
        return c.default.getMember(e, t.id)
    }

    function O(e, t, n) {
        var i;
        let r = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : f.default.getName(n);
        return {
            member: t,
            comparator: R(e, r)
        }
    }

    function R(e, t) {
        return "".concat(e.selfStream ? "\0" : "\x01").concat(t.toLowerCase(), "\0").concat(e.userId)
    }

    function C(e, t, n) {
        var i;
        let r = E.default.getUser(n),
            a = null == r;
        null == r && (r = new u.default({
            id: n,
            username: "...",
            discriminator: n.slice(-5, -1)
        }));
        let {
            member: s,
            comparator: o
        } = O(e, p(t, i = r), i), l = {
            voiceState: e,
            user: r,
            member: s,
            comparator: o,
            nick: null == s ? void 0 : s.nick
        };
        return a && (l._isPlaceholder = !0), l
    }
    class g {
        updateVoiceState(e) {
            if (null != this._pending) return this._pending.add(e), !1;
            let t = I.default.getVoiceState(this.guildId, e),
                n = this._voiceStates.get(e),
                i = E.default.getUser(e);
            if (null != t && null != i) {
                if (null == n) return this._voiceStates.set(e, C(t, this.guildId, e)), !0;
                if (n.voiceState !== t) {
                    var r;
                    let a = p(this.guildId, i),
                        s = null !== (r = null == a ? void 0 : a.nick) && void 0 !== r ? r : f.default.getName(i);
                    return this._voiceStates.set(e, {
                        ...n,
                        member: a,
                        comparator: R(t, s),
                        nick: s,
                        voiceState: t
                    }), !0
                }
            } else if (null != n) return this._voiceStates.delete(e), !0;
            return !1
        }
        updateMember(e) {
            if (null != this._pending) return this._pending.add(e), !1;
            let t = this._voiceStates.get(e),
                n = E.default.getUser(e);
            if (null != t && null != n) {
                var i, r;
                let a = p(this.guildId, n);
                if ((null == a ? void 0 : a.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == a ? void 0 : a.avatar) !== (null === (r = t.member) || void 0 === r ? void 0 : r.avatar)) {
                    let {
                        comparator: i
                    } = O(t.voiceState, a, n);
                    return this._voiceStates.set(e, {
                        ...t,
                        member: a,
                        comparator: i,
                        nick: null == a ? void 0 : a.nick
                    }), !0
                }
            }
            return !1
        }
        updateUsers() {
            return null == this._pending && this._voiceStates.values().reduce((e, t) => {
                let n = E.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, C(t.voiceState, this.guildId, n.id)), !0) : e
            }, !1)
        }
        getUserIds() {
            return this.processPending(), this._voiceStates.keys()
        }
        getVoiceStates() {
            return this.processPending(), this._voiceStates.indexes()
        }
        getVoiceStatesForChannel(e) {
            this.processPending();
            let t = this._voiceStates.values(e);
            return 0 === t.length ? A : t
        }
        countVoiceStatesForChannel(e) {
            return this.processPending(), this._voiceStates.size(e)
        }
        getVersion() {
            return this.processPending(), this._voiceStates.version
        }
        processPending() {
            if (null != this._pending) {
                let e = this._pending;
                this._pending = void 0, e.forEach(e => this.updateVoiceState(e))
            }
        }
        constructor(e) {
            h(this, "guildId", void 0), h(this, "_pending", new Set), h(this, "_voiceStates", new o.SecondaryIndexMap(e => {
                let {
                    voiceState: {
                        channelId: t
                    }
                } = e;
                return null != t ? [t] : []
            }, e => {
                let {
                    comparator: t
                } = e;
                return t
            })), this.guildId = e
        }
    }

    function L() {
        return a().reduce(m, (e, t) => t.updateUsers() || e, !1)
    }

    function v() {
        m = {};
        let e = I.default.getAllVoiceStates();
        T.default.keys(e).forEach(t => {
            Object.keys(e[t]).forEach(e => {
                N(null != t ? t : S.ME).updateVoiceState(e)
            })
        })
    }
    class D extends(i = s.default.Store) {
        initialize() {
            v(), this.waitFor(d.default, E.default, c.default, I.default), this.syncWith([E.default], L)
        }
        getVoiceStates(e) {
            return N(null != e ? e : S.ME).getVoiceStates()
        }
        getAllVoiceStates() {
            return m
        }
        getVoiceStatesForChannel(e) {
            let t = e.getGuildId(),
                n = e.id;
            return N(null != t ? t : S.ME).getVoiceStatesForChannel(n)
        }
        getVoiceStatesForChannelAlt(e, t) {
            return N(null != t ? t : S.ME).getVoiceStatesForChannel(e)
        }
        countVoiceStatesForChannel(e) {
            let t = _.default.getChannel(e);
            if (null == t) return 0;
            let n = t.getGuildId();
            return N(null != n ? n : S.ME).countVoiceStatesForChannel(e)
        }
        getVoiceStateVersion(e) {
            return N(null != e ? e : S.ME).getVersion()
        }
    }
    h(D, "displayName", "SortedVoiceStateStore"), t.default = new D(l.default, {
        CONNECTION_OPEN: function() {
            m = {}
        },
        OVERLAY_INITIALIZE: function() {
            v()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e, n = d.default.getId();
            return null != n && N(null != t ? t : S.ME).updateVoiceState(n)
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    guildId: n,
                    userId: i
                } = t;
                return N(null != n ? n : S.ME).updateVoiceState(i) || e
            }, !1)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return N(t).updateMember(n.id)
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            delete m[t.id]
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete m[t.id]
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t, n;
            let i = !1,
                r = new Set(null === (t = m[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
                a = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map(e => e.userId));
            for (let t of new Set([...r, ...a])) i = N(e.guildId).updateVoiceState(t) || i;
            for (let t of a) r.has(t) && (i = N(e.guildId).updateMember(t) || i);
            return i
        }
    })
}