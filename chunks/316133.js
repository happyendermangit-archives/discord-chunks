function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComparator: function() {
            return I
        },
        default: function() {
            return O
        }
    }), n("222007"), n("808653");
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("407846"),
        o = n("913144"),
        l = n("766274"),
        u = n("271938"),
        d = n("42203"),
        c = n("26989"),
        f = n("697218"),
        _ = n("800762"),
        E = n("299039"),
        h = n("158998"),
        g = n("49111");
    let m = Object.freeze([]),
        p = {};

    function S(e) {
        let t = p[e];
        return null == t && (t = new A(e), p[e] = t), t
    }

    function v(e, t) {
        return c.default.getMember(e, t.id)
    }

    function T(e, t, n) {
        var i;
        let s = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : h.default.getName(n);
        return {
            member: t,
            comparator: I(e, s)
        }
    }

    function I(e, t) {
        return "".concat(e.selfStream ? "\x00" : "\x01").concat(t.toLowerCase(), "\x00").concat(e.userId)
    }

    function C(e, t, n) {
        let i = f.default.getUser(n),
            s = null == i;
        null == i && (i = new l.default({
            id: n,
            username: "...",
            discriminator: n.slice(-5, -1)
        }));
        let {
            member: r,
            comparator: a
        } = function(e, t, n) {
            let i = v(e, t);
            return T(n, i, t)
        }(t, i, e), o = {
            voiceState: e,
            user: i,
            member: r,
            comparator: a,
            nick: null == r ? void 0 : r.nick
        };
        return s && (o._isPlaceholder = !0), o
    }
    class A {
        updateVoiceState(e) {
            if (null != this._pending) return this._pending.add(e), !1;
            let t = _.default.getVoiceState(this.guildId, e),
                n = this._voiceStates.get(e),
                i = f.default.getUser(e);
            if (null != t && null != i) {
                if (null == n) return this._voiceStates.set(e, C(t, this.guildId, e)), !0;
                if (n.voiceState !== t) {
                    var s;
                    let r = v(this.guildId, i),
                        a = null !== (s = null == r ? void 0 : r.nick) && void 0 !== s ? s : h.default.getName(i);
                    return this._voiceStates.set(e, {
                        ...n,
                        member: r,
                        comparator: I(t, a),
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
                var i, s;
                let r = v(this.guildId, n);
                if ((null == r ? void 0 : r.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == r ? void 0 : r.avatar) !== (null === (s = t.member) || void 0 === s ? void 0 : s.avatar)) {
                    let {
                        comparator: i
                    } = T(t.voiceState, r, n);
                    return this._voiceStates.set(e, {
                        ...t,
                        member: r,
                        comparator: i,
                        nick: null == r ? void 0 : r.nick
                    }), !0
                }
            }
            return !1
        }
        updateUsers() {
            return null == this._pending && this._voiceStates.values().reduce((e, t) => {
                let n = f.default.getUser(t.user.id);
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
            return 0 === t.length ? m : t
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

    function y() {
        return s.reduce(p, (e, t) => t.updateUsers() || e, !1)
    }

    function N() {
        p = {};
        let e = _.default.getAllVoiceStates();
        E.default.keys(e).forEach(t => {
            Object.keys(e[t]).forEach(e => {
                S(null != t ? t : g.ME).updateVoiceState(e)
            })
        })
    }
    class R extends r.default.Store {
        initialize() {
            N(), this.waitFor(u.default, f.default, c.default, _.default), this.syncWith([f.default], y)
        }
        getVoiceStates(e) {
            return S(null != e ? e : g.ME).getVoiceStates()
        }
        getAllVoiceStates() {
            return p
        }
        getVoiceStatesForChannel(e) {
            let t = e.getGuildId(),
                n = e.id;
            return S(null != t ? t : g.ME).getVoiceStatesForChannel(n)
        }
        getVoiceStatesForChannelAlt(e, t) {
            return S(null != t ? t : g.ME).getVoiceStatesForChannel(e)
        }
        countVoiceStatesForChannel(e) {
            let t = d.default.getChannel(e);
            if (null == t) return 0;
            let n = t.getGuildId();
            return S(null != n ? n : g.ME).countVoiceStatesForChannel(e)
        }
        getVoiceStateVersion(e) {
            return S(null != e ? e : g.ME).getVersion()
        }
    }
    R.displayName = "SortedVoiceStateStore";
    var O = new R(o.default, {
        CONNECTION_OPEN: function() {
            p = {}
        },
        OVERLAY_INITIALIZE: function() {
            N()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            let {
                guildId: t
            } = e, n = u.default.getId();
            return null != n && S(null != t ? t : g.ME).updateVoiceState(n)
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
                return S(null != n ? n : g.ME).updateVoiceState(i) || e
            }, !1)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            let {
                guildId: t,
                user: n
            } = e;
            return S(t).updateMember(n.id)
        },
        GUILD_CREATE: function(e) {
            let {
                guild: t
            } = e;
            delete p[t.id]
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete p[t.id]
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t, n;
            let i = !1,
                s = new Set(null === (t = p[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
                r = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map(e => e.userId)),
                a = new Set([...s, ...r]);
            for (let t of a) i = S(e.guildId).updateVoiceState(t) || i;
            for (let t of r) s.has(t) && (i = S(e.guildId).updateMember(t) || i);
            return i
        }
    })
}