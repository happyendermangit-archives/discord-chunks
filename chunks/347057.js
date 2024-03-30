function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("560412"),
        o = n("35523"),
        i = n("950879"),
        a = n("935741"),
        u = n("931983"),
        s = n("408730"),
        l = n("695898"),
        c = n("991591"),
        f = n("925513");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function E(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    _(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    _(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function p(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t && m(e.prototype, t), n && m(e, n), e
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e, t) {
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
    }
    var O = new o.default("Messages"),
        T = function() {
            function e(t) {
                if (p(this, e), I(this, "connectionId", null), I(this, "users", []), I(this, "members", []), I(this, "messages", []), t.length > 0) {
                    var n, r, o, i = null === (o = t[0]) || void 0 === o ? void 0 : o.connectionId;
                    var a = (n = e.computeUsersAndMembers(t), r = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(n) || function(e, t) {
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
                        }(n, r) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return d(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
                            }
                        }(n, r) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        u = a[0],
                        s = a[1];
                    t.length > 0 && t.every(function(e) {
                        return e.connectionId === i
                    }) && (this.connectionId = i), this.users = u, this.members = s, this.messages = t.map(function(e) {
                        return e.message
                    })
                }
            }
            return y(e, null, [{
                key: "computeUsersAndMembers",
                value: function(e) {
                    (0, f.requireSortedDescending)(e);
                    var t = new Map,
                        n = new Map,
                        r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value;
                            this.addIntoMap(t, s.users, function(e) {
                                return e.id
                            }), this.addIntoMap(n, s.members, function(e) {
                                return e.userId
                            })
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
                    return [Array.from(t.values()), Array.from(n.values())]
                }
            }, {
                key: "addIntoMap",
                value: function(e, t, n) {
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value,
                                l = n(s),
                                c = e.get(l);
                            (null == c || c.incomplete && !s.incomplete) && e.set(l, s)
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
                }
            }]), e
        }(),
        S = function() {
            function e() {
                var t = this;
                p(this, e), I(this, "actions", {
                    CHANNEL_DELETE: function(e, n) {
                        return t.handleChannelDelete(e, n)
                    },
                    GUILD_DELETE: function(e, n) {
                        return t.handleGuildDelete(e, n)
                    },
                    LOAD_MESSAGES_SUCCESS: function(e, n) {
                        return t.handleLoadMessagesSuccess(e, n)
                    },
                    MESSAGE_CREATE: function(e, n) {
                        return t.handleMessageCreate(e, n)
                    },
                    MESSAGE_DELETE_BULK: function(e, n) {
                        return t.handleMessageDeleteBulk(e, n)
                    },
                    MESSAGE_DELETE: function(e, n) {
                        return t.handleMessageDelete(e, n)
                    },
                    MESSAGE_PREVIEWS_LOADED: function(e, n) {
                        return t.handleMessagePreviewsLoaded(e, n)
                    },
                    MESSAGE_UPDATE: function(e, n) {
                        return t.handleMessageUpdate(e, n)
                    }
                })
            }
            return y(e, [{
                key: "startupLoad",
                value: function(e, t, n, r) {
                    return E(function() {
                        return h(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, u.default.messages(e).getLatest(t, n, r)];
                                case 1:
                                    return [2, new T(o.sent())]
                            }
                        })
                    })()
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    return E(function() {
                        var r;
                        return h(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    if (r = a.default.getBasicChannel(t), !(null == t || null == r || !(0, c.isReadableChannel)(r))) return [3, 1];
                                    return [2, new T([])];
                                case 1:
                                    return [4, u.default.messages(e).getLatest(r.guild_id, t, n)];
                                case 2:
                                    return [2, new T(o.sent())];
                                case 3:
                                    return [2]
                            }
                        })
                    })()
                }
            }, {
                key: "handleMessageCreate",
                value: function(e, t) {
                    !e.optimistic && !e.isPushNotification && null == e.sendMessageOptions && (0, c.isReadableChannelId)(e.channelId) && this.upsertOne(e.guildId, e.channelId, e.message, t)
                }
            }, {
                key: "handleMessageUpdate",
                value: function(e, t) {
                    if (null != e.message.id && null != e.message.channel_id)(0, c.isReadableChannelId)(e.message.channel_id) && (function(e) {
                        return null != e.author && null != e.content && null != e.mentions && null != e.timestamp
                    }(e.message) ? this.upsertOne(e.guildId, e.message.channel_id, e.message, t) : this.updateOne(e.guildId, e.message.channel_id, e.message, t))
                }
            }, {
                key: "handleMessagePreviewsLoaded",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.messages[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            (0, c.isReadableChannelId)(u.channel_id) && this.insertStale(e.guildId, u.channel_id, u, t)
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
                }
            }, {
                key: "handleLoadMessagesSuccess",
                value: function(e, t) {
                    var n = a.default.getBasicChannel(e.channelId);
                    null != n && (0, c.isReadableChannelId)(e.channelId) && this.upsertMany(n.guild_id, e.channelId, e.messages, t)
                }
            }, {
                key: "handleMessageDelete",
                value: function(e, t) {
                    null != e.id && this.deleteOne(e.guildId, e.channelId, e.id, t)
                }
            }, {
                key: "handleMessageDeleteBulk",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.ids[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            this.deleteOne(e.guildId, e.channelId, u, t)
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
                }
            }, {
                key: "handleChannelDelete",
                value: function(e, t) {
                    this.deleteChannel(e.channel.guild_id, e.channel.id, t)
                }
            }, {
                key: "handleGuildDelete",
                value: function(e, t) {
                    !e.guild.unavailable && this.deleteGuild(e.guild.id, t)
                }
            }, {
                key: "resetInMemoryState",
                value: function() {}
            }, {
                key: "insertStale",
                value: function(e, t, n, o) {
                    var a = u.default.messagesTransaction(o),
                        l = i.default.lastTimeConnectedChanged();
                    a.put(e, t, s.KvMessage.fromMessage(e, t, n, l), r.ConflictOptions.Skip)
                }
            }, {
                key: "upsertOne",
                value: function(e, t, n, o) {
                    var a = u.default.messagesTransaction(o),
                        c = i.default.lastTimeConnectedChanged();
                    a.put(e, t, s.KvMessage.fromMessage(e, t, n, c), r.ConflictOptions.Replace), a.trimChannel(e, t, l.default.saveLimit(t))
                }
            }, {
                key: "upsertMany",
                value: function(e, t, n, r) {
                    var o = u.default.messagesTransaction(r),
                        a = i.default.lastTimeConnectedChanged(),
                        c = !0,
                        f = !1,
                        d = void 0;
                    try {
                        for (var _, E = n[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                            var p = _.value;
                            o.put(e, t, s.KvMessage.fromMessage(e, t, p, a))
                        }
                    } catch (e) {
                        f = !0, d = e
                    } finally {
                        try {
                            !c && null != E.return && E.return()
                        } finally {
                            if (f) throw d
                        }
                    }
                    o.trimChannel(e, t, l.default.saveLimit(t))
                }
            }, {
                key: "updateOne",
                value: function(e, t, n, r) {
                    return E(function() {
                        var o, a, l;
                        return h(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    if (null == n.id) return O.warn("updateOne: message.id is null; cannot update a message if we do not know its id."), [2];
                                    return [4, (o = u.default.messages(r.database)).get(e, t, n.id)];
                                case 1:
                                    return a = c.sent(), l = i.default.lastTimeConnectedChanged(), null != a && o.put(e, t, s.KvMessage.fromMessage(e, t, function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                                            }))), r.forEach(function(t) {
                                                I(e, t, n[t])
                                            })
                                        }
                                        return e
                                    }({}, a.message, n), l)), [2]
                            }
                        })
                    })()
                }
            }, {
                key: "deleteOne",
                value: function(e, t, n, r) {
                    u.default.messagesTransaction(r).deleteMessage(e, t, n)
                }
            }, {
                key: "deleteChannel",
                value: function(e, t, n) {
                    u.default.messagesTransaction(n).deleteChannel(e, t)
                }
            }, {
                key: "deleteGuild",
                value: function(e, t) {
                    u.default.messagesTransaction(t).deleteGuild(e)
                }
            }]), e
        }();
    t.default = new S
}