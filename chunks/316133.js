function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComparator: function() {
            return C
        },
        default: function() {
            return D
        }
    }), n("222007"), n("808653");
    var i = n("917351"),
        r = n.n(i),
        s = n("446674"),
        a = n("407846"),
        o = n("913144"),
        l = n("766274"),
        u = n("271938"),
        c = n("42203"),
        d = n("26989"),
        f = n("697218"),
        E = n("800762"),
        p = n("299039"),
        h = n("158998"),
        _ = n("49111");
    let S = Object.freeze([]),
        m = {};

    function T(e) {
        let t = m[e];
        return null == t && (t = new A(e), m[e] = t), t
    }

    function g(e, t) {
        return d.default.getMember(e, t.id)
    }

    function I(e, t, n) {
        var i;
        let r = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : h.default.getName(n);
        return {
            member: t,
            comparator: C(e, r)
        }
    }

    function C(e, t) {
        return "".concat(e.selfStream ? "\x00" : "\x01").concat(t.toLowerCase(), "\x00").concat(e.userId)
    }

    function v(e, t, n) {
        let i = f.default.getUser(n),
            r = null == i;
        null == i && (i = new l.default({
            id: n,
            username: "...",
            discriminator: n.slice(-5, -1)
        }));
        let {
            member: s,
            comparator: a
        } = function(e, t, n) {
            let i = g(e, t);
            return I(n, i, t)
        }(t, i, e), o = {
            voiceState: e,
            user: i,
            member: s,
            comparator: a,
            nick: null == s ? void 0 : s.nick
        };
        return r && (o._isPlaceholder = !0), o
    }
    class A {
        updateVoiceState(e) {
            if (null != this._pending) return this._pending.add(e), !1;
            let t = E.default.getVoiceState(this.guildId, e),
                n = this._voiceStates.get(e),
                i = f.default.getUser(e);
            if (null != t && null != i) {
                if (null == n) return this._voiceStates.set(e, v(t, this.guildId, e)), !0;
                if (n.voiceState !== t) {
                    var r;
                    let s = g(this.guildId, i),
                        a = null !== (r = null == s ? void 0 : s.nick) && void 0 !== r ? r : h.default.getName(i);
                    return this._voiceStates.set(e, {
                        ...n,
                        member: s,
                        comparator: C(t, a),
                        nick: a,
                        voiceState: t
                    }), !0
                }
            } else if (null != n) return this._voiceStates.delete(e), !0;
            return !1
        }
        updateMember(e) {
            if (null != this._pending) return this._pending.add(e), !1;
            let t = this._voiceStates.get(e),
                n = f.default.getUser(e);
            if (null != t && null != n) {
                var i, r;
                let s = g(this.guildId, n);
                if ((null == s ? void 0 : s.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == s ? void 0 : s.avatar) !== (null === (r = t.member) || void 0 === r ? void 0 : r.avatar)) {
                    let {
                        comparator: i
                    } = I(t.voiceState, s, n);
                    return this._voiceStates.set(e, {
                        ...t,
                        member: s,
                        comparator: i,
                        nick: null == s ? void 0 : s.nick
                    }), !0
                }
            }
            return !1
        }
        updateUsers() {
            return null == this._pending && this._voiceStates.values().reduce((e, t) => {
                let n = f.default.getUser(t.user.id);
                return null != n && t.user !== n ? (this._voiceStates.set(n.id, v(t.voiceState, this.guildId, n.id)), !0) : e
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
            return 0 === t.length ? S : t
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
            this._pending = new Set, this._voiceStates = new a.default(e => {
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
            }), this.guildId = e
        }
    }

    function R() {
        return r.reduce(m, (e, t) => t.updateUsers() || e, !1)
    }

    function N() {
        m = {};
        let e = E.default.getAllVoiceStates();
        p.default.keys(e).forEach(t => {
            Object.keys(e[t]).forEach(e => {
                T(null != t ? t : _.ME).updateVoiceState(e)
            })
        })
    }
    class O extends s.default.Store {
        initialize() {
            N(), this.waitFor(u.default, f.default, d.default, E.default), this.syncWith([f.default], R)
        }
        getVoiceStates(e) {
            return T(null != e ? e : _.ME).getVoiceStates()
        }
        getAllVoiceStates() {
            return m
        }
        getVoiceStatesForChannel(e) {
            let t = e.getGuildId(),
                n = e.id;
            return T(null != t ? t : _.ME).getVoiceStatesForChannel(n)
        }
        getVoiceStatesForChannelAlt(e, t) {
            return T(null != t ? t : _.ME).getVoiceStatesForChannel(e)
        }
        countVoiceStatesForChannel(e) {
            let t = c.default.getChannel(e);
            if (null == t) return 0;
            let n = t.getGuildId();
            return T(null != n ? n : _.ME).countVoiceStatesForChannel(e)
        }
        getVoiceStateVersion(e) {
            return T(null != e ? e : _.ME).getVersion()
        }
    }
    O.displayName = "SortedVoiceStateStore";
    var D = new O(o.default, {
        CONNECTION_OPEN: function() {
            m = {}
        },
        OVERLAY_INITIALIZE: function() {
            N()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e, n = u.default.getId();
            return null != n && T(null != t ? t : _.ME).updateVoiceState(n)
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
                return T(null != n ? n : _.ME).updateVoiceState(i) || e
            }, !1)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return T(t).updateMember(n.id)
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
                s = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map(e => e.userId)),
                a = new Set([...r, ...s]);
            for (let t of a) i = T(e.guildId).updateVoiceState(t) || i;
            for (let t of s) r.has(t) && (i = T(e.guildId).updateMember(t) || i);
            return i
        }
    })
}