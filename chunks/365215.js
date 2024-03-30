function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("35523"),
        o = n("306912"),
        i = n("931983");

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function u(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = new r.default("GuildVersions"),
        f = function() {
            var e, t, n;

            function r() {
                var e = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), l(this, "pending", new Map), l(this, "committed", new Map), l(this, "actions", {
                    BACKGROUND_SYNC: function(t, n) {
                        return e.handleBackgroundSync(t, n)
                    },
                    CHANNEL_CREATE: function(t, n) {
                        return e.handleChannelCreate(t, n)
                    },
                    CHANNEL_DELETE: function(t, n) {
                        return e.handleChannelDelete(t, n)
                    },
                    CHANNEL_UPDATES: function(t, n) {
                        return e.handleChannelUpdates(t, n)
                    },
                    CONNECTION_OPEN: function(t, n) {
                        return e.handleConnectionOpen(t, n)
                    },
                    GUILD_CREATE: function(t, n) {
                        return e.handleGuildCreate(t, n)
                    },
                    GUILD_DELETE: function(t, n) {
                        return e.handleGuildDelete(t, n)
                    },
                    GUILD_EMOJIS_UPDATE: function(t, n) {
                        return e.handleGuildEmojisUpdate(t, n)
                    },
                    GUILD_ROLE_CREATE: function(t, n) {
                        return e.handleGuildRoleChange(t, n)
                    },
                    GUILD_ROLE_DELETE: function(t, n) {
                        return e.handleGuildRoleDelete(t, n)
                    },
                    GUILD_ROLE_UPDATE: function(t, n) {
                        return e.handleGuildRoleChange(t, n)
                    },
                    GUILD_STICKERS_UPDATE: function(t, n) {
                        return e.handleGuildStickersUpdate(t, n)
                    },
                    GUILD_UPDATE: function(t, n) {
                        return e.handleGuildUpdate(t, n)
                    }
                })
            }
            return e = r, t = [{
                key: "getCommittedVersions",
                value: function() {
                    var e;
                    return (e = function() {
                        var e, t, n;
                        return function(e, t) {
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
                        }(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (r.trys.push([0, 2, , 3]), null == (e = i.default.guildVersions())) return [2, {}];
                                    return [4, e.getMany()];
                                case 1:
                                    return [2, Object.fromEntries(null != (t = r.sent().map(function(e) {
                                        return [e.id, e.version]
                                    })) ? t : [])];
                                case 2:
                                    return n = r.sent(), c.warn("couldn't load guild versions", n), [2, {}];
                                case 3:
                                    return [2]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                u(i, r, o, a, s, "next", e)
                            }

                            function s(e) {
                                u(i, r, o, a, s, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }, {
                key: "remove",
                value: function(e, t) {
                    this.deleteWith(e), this.commit(t)
                }
            }, {
                key: "handleBackgroundSync",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var a, u = e.guilds[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                            var s = a.value;
                            "unavailable" !== s.data_mode && this.updateWith(s.id, [s]), null == o.default.getGuild(s.id) && this.remove(s.id, t)
                        }
                    } catch (e) {
                        r = !0, i = e
                    } finally {
                        try {
                            !n && null != u.return && u.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    this.commit(t)
                }
            }, {
                key: "handleConnectionOpen",
                value: function(e, t) {
                    this.reset();
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.guilds[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            this.updateWith(u.id, [u])
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
                    this.commit(t)
                }
            }, {
                key: "handleGuildCreate",
                value: function(e, t) {
                    var n, r = e.guild,
                        o = e.guild.id;
                    this.updateWith(o, [r]), this.updateWith(o, r.emojis), this.updateWith(o, r.stickers), this.updateWith(o, r.channels), this.updateWith(o, null === (n = r.channelUpdates) || void 0 === n ? void 0 : n.writes), this.updateWith(o, Array.isArray(r.roles) ? r.roles : Object.values(r.roles)), this.commit(t)
                }
            }, {
                key: "handleGuildUpdate",
                value: function(e, t) {
                    var n = e.guild,
                        r = e.guild.id;
                    this.updateWith(r, [n]), this.updateWith(r, n.emojis), this.updateWith(r, n.stickers), this.updateWith(r, Array.isArray(n.roles) ? n.roles : Object.values(n.roles)), this.commit(t)
                }
            }, {
                key: "handleGuildDelete",
                value: function(e, t) {
                    this.deleteWith(e.guild.id), this.commit(t)
                }
            }, {
                key: "handleGuildRoleChange",
                value: function(e, t) {
                    this.updateWith(e.guildId, [e.role]), this.commit(t)
                }
            }, {
                key: "handleGuildRoleDelete",
                value: function(e, t) {
                    this.updateWith(e.guildId, [{
                        version: e.version
                    }]), this.commit(t)
                }
            }, {
                key: "handleGuildEmojisUpdate",
                value: function(e, t) {
                    this.updateWith(e.guildId, e.emojis), this.commit(t)
                }
            }, {
                key: "handleGuildStickersUpdate",
                value: function(e, t) {
                    this.updateWith(e.guildId, e.stickers), this.commit(t)
                }
            }, {
                key: "handleChannelCreate",
                value: function(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
                }
            }, {
                key: "handleChannelUpdates",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.channels[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            null != u.guild_id && this.updateWith(u.guild_id, [u])
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
                    this.commit(t)
                }
            }, {
                key: "handleChannelDelete",
                value: function(e, t) {
                    null != e.channel.guild_id && this.updateWith(e.channel.guild_id, [e.channel]), this.commit(t)
                }
            }, {
                key: "resetInMemoryState",
                value: function() {
                    this.reset()
                }
            }, {
                key: "reset",
                value: function() {
                    this.committed = new Map, this.pending = new Map
                }
            }, {
                key: "deleteWith",
                value: function(e) {
                    this.pending.set(e, null)
                }
            }, {
                key: "updateWith",
                value: function(e, t) {
                    if (null != t) {
                        var n, r, o = Math.max(null !== (n = this.committed.get(e)) && void 0 !== n ? n : 0, null !== (r = this.pending.get(e)) && void 0 !== r ? r : 0),
                            i = this.computeLatestVersion(o, t);
                        i > o && this.pending.set(e, i)
                    }
                }
            }, {
                key: "computeLatestVersion",
                value: function(e, t) {
                    var n = e,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s, l = a.value;
                            n = Math.max(n, null !== (s = l.version) && void 0 !== s ? s : 0)
                        }
                    } catch (e) {
                        o = !0, i = e
                    } finally {
                        try {
                            !r && null != u.return && u.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                    return n
                }
            }, {
                key: "commit",
                value: function(e) {
                    if (this.pending.size > 0) {
                        var t = i.default.guildVersionsTransaction(e),
                            n = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var u, s = this.pending[Symbol.iterator](); !(n = (u = s.next()).done); n = !0) {
                                var l, c, f = (l = u.value, c = 2, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(l) || function(e, t) {
                                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != o) {
                                            var i = [],
                                                a = !0,
                                                u = !1;
                                            try {
                                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                            } catch (e) {
                                                u = !0, r = e
                                            } finally {
                                                try {
                                                    !a && null != o.return && o.return()
                                                } finally {
                                                    if (u) throw r
                                                }
                                            }
                                            return i
                                        }
                                    }(l, c) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return a(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                                        }
                                    }(l, c) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    d = f[0],
                                    _ = f[1];
                                null != _ ? (t.put({
                                    id: d,
                                    version: _
                                }), this.committed.set(d, _)) : (t.delete(d), this.committed.delete(d))
                            }
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                !n && null != s.return && s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        this.pending.clear()
                    }
                }
            }], s(e.prototype, t), n && s(e, n), r
        }();
    t.default = new f
}