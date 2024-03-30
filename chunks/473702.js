function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getComparator: function() {
            return M
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("898511"),
        u = n("727309"),
        s = n("629815"),
        l = n("428009"),
        c = n("217014"),
        f = n("935741"),
        d = n("957808"),
        _ = n("208454"),
        E = n("665863"),
        p = n("523018"),
        m = n("830567"),
        y = n("281767");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function T(e, t, n) {
        return t && O(e.prototype, t), n && O(e, n), e
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function A(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function N(e) {
        return function(e) {
            if (Array.isArray(e)) return I(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var R = Object.freeze([]),
        C = {};

    function P(e) {
        var t = C[e];
        return null == t && (t = new w(e), C[e] = t), t
    }

    function D(e, t) {
        return d.default.getMember(e, t.id)
    }

    function L(e, t, n) {
        var r, o = null !== (r = null == t ? void 0 : t.nick) && void 0 !== r ? r : m.default.getName(n);
        return {
            member: t,
            comparator: M(e, o)
        }
    }

    function M(e, t) {
        return "".concat(e.selfStream ? "\0" : "\x01").concat(t.toLowerCase(), "\0").concat(e.userId)
    }

    function U(e, t, n) {
        var r, o = _.default.getUser(n),
            i = null == o;
        null == o && (o = new l.default({
            id: n,
            username: "...",
            discriminator: n.slice(-5, -1)
        }));
        var a = L(e, D(t, r = o), r),
            u = a.member,
            s = {
                voiceState: e,
                user: o,
                member: u,
                comparator: a.comparator,
                nick: null == u ? void 0 : u.nick
            };
        return i && (s._isPlaceholder = !0), s
    }
    var w = function() {
        function e(t) {
            h(this, e), S(this, "guildId", void 0), S(this, "_pending", new Set), S(this, "_voiceStates", new u.SecondaryIndexMap(function(e) {
                var t = e.voiceState.channelId;
                return null != t ? [t] : []
            }, function(e) {
                return e.comparator
            })), this.guildId = t
        }
        return T(e, [{
            key: "updateVoiceState",
            value: function(e) {
                if (null != this._pending) return this._pending.add(e), !1;
                var t = E.default.getVoiceState(this.guildId, e),
                    n = this._voiceStates.get(e),
                    r = _.default.getUser(e);
                if (null != t && null != r) {
                    if (null == n) return this._voiceStates.set(e, U(t, this.guildId, e)), !0;
                    if (n.voiceState !== t) {
                        var o, i = D(this.guildId, r),
                            a = null !== (o = null == i ? void 0 : i.nick) && void 0 !== o ? o : m.default.getName(r);
                        return this._voiceStates.set(e, A(g({}, n), {
                            member: i,
                            comparator: M(t, a),
                            nick: a,
                            voiceState: t
                        })), !0
                    }
                } else if (null != n) return this._voiceStates.delete(e), !0;
                return !1
            }
        }, {
            key: "updateMember",
            value: function(e) {
                if (null != this._pending) return this._pending.add(e), !1;
                var t = this._voiceStates.get(e),
                    n = _.default.getUser(e);
                if (null != t && null != n) {
                    var r, o, i = D(this.guildId, n);
                    if ((null == i ? void 0 : i.nick) !== (null === (r = t.member) || void 0 === r ? void 0 : r.nick) || (null == i ? void 0 : i.avatar) !== (null === (o = t.member) || void 0 === o ? void 0 : o.avatar)) {
                        var a = L(t.voiceState, i, n).comparator;
                        return this._voiceStates.set(e, A(g({}, t), {
                            member: i,
                            comparator: a,
                            nick: null == i ? void 0 : i.nick
                        })), !0
                    }
                }
                return !1
            }
        }, {
            key: "updateUsers",
            value: function() {
                var e = this;
                return null == this._pending && this._voiceStates.values().reduce(function(t, n) {
                    var r = _.default.getUser(n.user.id);
                    return null != r && n.user !== r ? (e._voiceStates.set(r.id, U(n.voiceState, e.guildId, r.id)), !0) : t
                }, !1)
            }
        }, {
            key: "getUserIds",
            value: function() {
                return this.processPending(), this._voiceStates.keys()
            }
        }, {
            key: "getVoiceStates",
            value: function() {
                return this.processPending(), this._voiceStates.indexes()
            }
        }, {
            key: "getVoiceStatesForChannel",
            value: function(e) {
                this.processPending();
                var t = this._voiceStates.values(e);
                return 0 === t.length ? R : t
            }
        }, {
            key: "countVoiceStatesForChannel",
            value: function(e) {
                return this.processPending(), this._voiceStates.size(e)
            }
        }, {
            key: "getVersion",
            value: function() {
                return this.processPending(), this._voiceStates.version
            }
        }, {
            key: "processPending",
            value: function() {
                var e = this;
                if (null != this._pending) {
                    var t = this._pending;
                    this._pending = void 0, t.forEach(function(t) {
                        return e.updateVoiceState(t)
                    })
                }
            }
        }]), e
    }();

    function k() {
        return i().reduce(C, function(e, t) {
            return t.updateUsers() || e
        }, !1)
    }

    function G() {
        C = {};
        var e = E.default.getAllVoiceStates();
        p.default.keys(e).forEach(function(t) {
            Object.keys(e[t]).forEach(function(e) {
                P(null != t ? t : y.ME).updateVoiceState(e)
            })
        })
    }
    var B = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && b(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return h(this, o), r.apply(this, arguments)
        }
        return T(o, [{
            key: "initialize",
            value: function() {
                G(), this.waitFor(c.default, _.default, d.default, E.default), this.syncWith([_.default], k)
            }
        }, {
            key: "getVoiceStates",
            value: function(e) {
                return P(null != e ? e : y.ME).getVoiceStates()
            }
        }, {
            key: "getAllVoiceStates",
            value: function() {
                return C
            }
        }, {
            key: "getVoiceStatesForChannel",
            value: function(e) {
                var t = e.getGuildId(),
                    n = e.id;
                return P(null != t ? t : y.ME).getVoiceStatesForChannel(n)
            }
        }, {
            key: "getVoiceStatesForChannelAlt",
            value: function(e, t) {
                return P(null != t ? t : y.ME).getVoiceStatesForChannel(e)
            }
        }, {
            key: "countVoiceStatesForChannel",
            value: function(e) {
                var t = f.default.getChannel(e);
                if (null == t) return 0;
                var n = t.getGuildId();
                return P(null != n ? n : y.ME).countVoiceStatesForChannel(e)
            }
        }, {
            key: "getVoiceStateVersion",
            value: function(e) {
                return P(null != e ? e : y.ME).getVersion()
            }
        }]), o
    }(a.default.Store);
    S(B, "displayName", "SortedVoiceStateStore"), t.default = new B(s.default, {
        CONNECTION_OPEN: function() {
            C = {}
        },
        OVERLAY_INITIALIZE: function() {
            G()
        },
        VOICE_CHANNEL_SELECT: function(e) {
            var t = e.guildId,
                n = c.default.getId();
            return null != n && P(null != t ? t : y.ME).updateVoiceState(n)
        },
        VOICE_STATE_UPDATES: function(e) {
            return e.voiceStates.reduce(function(e, t) {
                var n = t.guildId,
                    r = t.userId;
                return P(null != n ? n : y.ME).updateVoiceState(r) || e
            }, !1)
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t = e.guildId,
                n = e.user;
            return P(t).updateMember(n.id)
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            delete C[t.id]
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            delete C[t.id]
        },
        PASSIVE_UPDATE_V1: function(e) {
            var t = !1,
                n = new Set(null === (s = C[e.guildId]) || void 0 === s ? void 0 : s.getUserIds()),
                r = new Set(null === (l = e.voiceStates) || void 0 === l ? void 0 : l.map(function(e) {
                    return e.userId
                })),
                o = new Set(N(n).concat(N(r))),
                i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l, c, f = o[Symbol.iterator](); !(i = (c = f.next()).done); i = !0) {
                    var d = c.value;
                    t = P(e.guildId).updateVoiceState(d) || t
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != f.return && f.return()
                } finally {
                    if (a) throw u
                }
            }
            var _ = !0,
                E = !1,
                p = void 0;
            try {
                for (var m, y = r[Symbol.iterator](); !(_ = (m = y.next()).done); _ = !0) {
                    var I = m.value;
                    n.has(I) && (t = P(e.guildId).updateMember(I) || t)
                }
            } catch (e) {
                E = !0, p = e
            } finally {
                try {
                    !_ && null != y.return && y.return()
                } finally {
                    if (E) throw p
                }
            }
            return t
        }
    })
}