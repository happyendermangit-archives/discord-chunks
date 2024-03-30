function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EVERYONE_CHANNEL_ID: function() {
            return U
        },
        EVERYONE_ID: function() {
            return M
        },
        MemberListRowTypes: function() {
            return o
        }
    });
    var r, o, i, a = n("392711"),
        u = n.n(a),
        s = n("505578"),
        l = n.n(s),
        c = n("22287"),
        f = n("898511"),
        d = n("629815"),
        _ = n("359017"),
        E = n("73013"),
        p = n("217014"),
        m = n("935741"),
        y = n("382199"),
        I = n("957808"),
        h = n("306912"),
        O = n("868447"),
        T = n("575098"),
        S = n("208454"),
        v = n("281767"),
        g = n("941504");

    function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function b(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t && N(e.prototype, t), n && N(e, n), e
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function P(e) {
        return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function D(e, t) {
        return (D = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function L(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return A(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return A(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var M = "everyone",
        U = 0;

    function w(e, t, n, r) {
        switch (t) {
            case v.StatusTypes.ONLINE:
            case v.StatusTypes.OFFLINE:
            case v.StatusTypes.UNKNOWN:
                return {
                    type: "GROUP", key: t, id: t, get title() {
                        switch (t) {
                            case v.StatusTypes.ONLINE:
                                return g.default.Messages.STATUS_ONLINE;
                            case v.StatusTypes.OFFLINE:
                                return g.default.Messages.STATUS_OFFLINE;
                            default:
                                return g.default.Messages.STATUS_UNKNOWN
                        }
                    }, count: n, index: r
                };
            default:
                var o = h.default.getGuild(e),
                    i = null != o ? h.default.getRole(o.id, t) : null;
                return {
                    type: "GROUP", key: t, id: t, title: null != i ? i.name : "", count: n, index: r
                }
        }
    }

    function k(e, t, n) {
        var r, o, i = n === p.default.getId(),
            a = O.default.isMobileOnline(n),
            u = i ? T.default.getStatus() : O.default.getStatus(n, e),
            s = i ? T.default.getActivities() : O.default.getActivities(n, e),
            l = E.default.getStreamForUser(n, e),
            c = S.default.getUser(n);
        if (null == c) return null;
        return r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    C(e, t, n[t])
                })
            }
            return e
        }({
            type: "MEMBER"
        }, I.default.getMember(e, n)), o = (o = {
            user: c,
            status: u,
            activities: s,
            applicationStream: l,
            isOwner: t === n,
            isMobileOnline: a
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r
    }

    function G(e) {
        var t = m.default.getChannel(e);
        return null == t ? M : null == t.memberListId ? function(e) {
            return _.canEveryone(v.Permissions.VIEW_CHANNEL, e) ? M : l().v3(u()(e.permissionOverwrites).reduce(function(e, t) {
                var n = t.id,
                    r = t.allow,
                    o = t.deny;
                return c.has(r, v.Permissions.VIEW_CHANNEL) ? e.push("allow:".concat(n)) : c.has(o, v.Permissions.VIEW_CHANNEL) && e.push("deny:".concat(n)), e
            }, []).sort().join(",")).toString()
        }(t) : t.memberListId
    }(r = o || (o = {})).GROUP = "GROUP", r.MEMBER = "MEMBER", r.CONTENT_INVENTORY = "CONTENT_INVENTORY", r.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP", r.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY";
    var B = function() {
            function e(t, n) {
                b(this, e), C(this, "guildId", void 0), C(this, "listId", void 0), C(this, "ownerId", void 0), C(this, "rows", []), C(this, "groups", []), C(this, "members", {}), C(this, "version", 0), this.guildId = t, this.listId = n, this.updateOwnerId()
            }
            return R(e, [{
                key: "updateOwnerId",
                value: function() {
                    var e = h.default.getGuild(this.guildId);
                    if (null == e) return !1;
                    var t = _.getGuildVisualOwnerId(e);
                    return this.ownerId !== t && (this.ownerId = t, !0)
                }
            }, {
                key: "setGroups",
                value: function(e) {
                    var t = this,
                        n = 0;
                    this.groups = e.map(function(e) {
                        var r, o = n,
                            i = Math.max(0, null !== (r = e.count) && void 0 !== r ? r : 0);
                        return n += i + 1, w(t.guildId, e.id, i, o)
                    }), this.rows.length = n
                }
            }, {
                key: "sync",
                value: function(e, t) {
                    var n = this,
                        r = L(e, 1)[0];
                    t.forEach(function(e, t) {
                        return n.update(r + t, e)
                    })
                }
            }, {
                key: "invalidate",
                value: function(e) {
                    for (var t = L(e, 2), n = t[0], r = t[1], o = n; o <= r; o++) {
                        var i = this.rows[o];
                        if (null == i) break;
                        delete this.rows[o], "MEMBER" === i.type && delete this.members[i.user.id]
                    }
                    this.version++
                }
            }, {
                key: "insert",
                value: function(e, t) {
                    var n = t.group,
                        r = t.member;
                    if (null != n) this.rows.splice(e, 0, w(this.guildId, n.id, n.count));
                    else if (null != r) {
                        var o = k(this.guildId, this.ownerId, r.user.id);
                        if (null == o) return;
                        this.rows.splice(e, 0, o), this.members[r.user.id] = o
                    }
                    this.version++
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = t.group,
                        r = t.member,
                        o = this.rows[e];
                    if (null != o && "MEMBER" === o.type && delete this.members[o.user.id], null != n) this.rows[e] = w(this.guildId, n.id, n.count);
                    else if (null != r) {
                        var i = k(this.guildId, this.ownerId, r.user.id);
                        if (null == i) return;
                        this.rows[e] = i, this.members[r.user.id] = i
                    }
                    this.version++
                }
            }, {
                key: "delete",
                value: function(e) {
                    var t = this.rows[e];
                    null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++)
                }
            }, {
                key: "rebuildMember",
                value: function(e) {
                    var t = this.members[e];
                    null != t && (Object.assign(t, k(this.guildId, this.ownerId, e)), this.version++)
                }
            }, {
                key: "rebuildMembers",
                value: function() {
                    var e = this;
                    u().forEach(this.members, function(t, n) {
                        e.rebuildMember(n)
                    })
                }
            }]), e
        }(),
        j = new(function() {
            function e() {
                b(this, e), C(this, "_guildLists", {})
            }
            return R(e, [{
                key: "get",
                value: function(e, t) {
                    var n = this._guildLists[e];
                    null == n && (n = this._guildLists[e] = {});
                    var r = n[t];
                    return null == r && ((r = new B(e, t)).setGroups([{
                        id: v.StatusTypes.UNKNOWN,
                        count: 0
                    }]), n[t] = r), r
                }
            }, {
                key: "forEach",
                value: function(e, t) {
                    if (null == e) u().forEach(this._guildLists, function(e) {
                        u().forEach(e, t)
                    });
                    else {
                        var n = this._guildLists[e];
                        null != n && u().forEach(n, t)
                    }
                }
            }, {
                key: "delete",
                value: function(e) {
                    delete this._guildLists[e]
                }
            }, {
                key: "reset",
                value: function() {
                    this._guildLists = {}
                }
            }]), e
        }());

    function F() {
        j.reset()
    }
    var V = [];

    function H() {
        var e = E.default.getAllApplicationStreams(),
            t = V.concat(e);
        V = e, t.forEach(function(e) {
            j.forEach(null, function(t) {
                return t.rebuildMember(e.ownerId)
            })
        })
    }

    function x() {
        var e = p.default.getId();
        j.forEach(null, function(t) {
            return t.rebuildMember(e)
        })
    }
    var Y = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && D(e, t)
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
            var e, r, o, i = P(t);
            if (n) {
                var a = P(this).constructor;
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
            return b(this, o), r.apply(this, arguments)
        }
        return R(o, [{
            key: "initialize",
            value: function() {
                this.waitFor(S.default, h.default, m.default, I.default, O.default, T.default, p.default, y.default, E.default), this.syncWith([T.default], x), this.syncWith([E.default], H)
            }
        }, {
            key: "getProps",
            value: function(e, t) {
                var n = j.get(e, G(t));
                return {
                    listId: "".concat(n.guildId, ":").concat(n.listId),
                    groups: n.groups,
                    rows: n.rows,
                    version: n.version
                }
            }
        }, {
            key: "getRows",
            value: function(e, t) {
                return j.get(e, G(t)).rows
            }
        }]), o
    }(f.default.Store);
    C(Y, "displayName", "ChannelMemberStore"), t.default = new Y(d.default, {
        CONNECTION_OPEN: F,
        OVERLAY_INITIALIZE: F,
        GUILD_MEMBER_LIST_UPDATE: function(e) {
            var t = j.get(e.guildId, e.id);
            e.ops.forEach(function(e) {
                switch (e.op) {
                    case "SYNC":
                        t.sync(e.range, e.items);
                        break;
                    case "INVALIDATE":
                        t.invalidate(e.range);
                        break;
                    case "INSERT":
                        t.insert(e.index, e.item);
                        break;
                    case "UPDATE":
                        t.update(e.index, e.item);
                        break;
                    case "DELETE":
                        t.delete(e.index)
                }
            }), t.setGroups(e.groups)
        },
        GUILD_UPDATE: function(e) {
            var t = e.guild;
            j.forEach(t.id, function(e) {
                e.updateOwnerId() && e.rebuildMembers()
            })
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            j.delete(t.id)
        },
        GUILD_ROLE_UPDATE: function(e) {
            var t = e.guildId;
            j.forEach(t, function(e) {
                return e.rebuildMembers()
            })
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t = e.guildId,
                n = e.user;
            j.forEach(t, function(e) {
                return e.rebuildMember(n.id)
            })
        },
        CHANNEL_UPDATES: function() {
            return !0
        }
    })
}