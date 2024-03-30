function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("35523"),
        o = n("931983");

    function i(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var u = new r.default("GuildStickers"),
        s = function() {
            var e, t, n;

            function r() {
                var e, t, n, o = this;
                ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, r), e = this, t = "actions", n = {
                    BACKGROUND_SYNC: function(e, t) {
                        return o.handleBackgroundSync(e, t)
                    },
                    CONNECTION_OPEN: function(e, t) {
                        return o.handleConnectionOpen(e, t)
                    },
                    GUILD_CREATE: function(e, t) {
                        return o.handleGuildCreate(e, t)
                    },
                    GUILD_DELETE: function(e, t) {
                        return o.handleGuildDelete(e, t)
                    },
                    GUILD_STICKERS_UPDATE: function(e, t) {
                        return o.handleGuildStickersUpdate(e, t)
                    },
                    GUILD_UPDATE: function(e, t) {
                        return o.handleGuildUpdate(e, t)
                    }
                }, t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }
            return e = r, t = [{
                key: "getAsync",
                value: function(e) {
                    var t;
                    return (t = function() {
                        var t, n, r;
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
                        }(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = performance.now(), [4, o.default.stickers(e).getMapEntries()];
                                case 1:
                                    return n = i.sent(), r = performance.now(), u.log("asynchronously loaded in ".concat(r - t, "ms (guilds: ").concat(n.length, ")")), [2, n]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var a = t.apply(e, n);

                            function u(e) {
                                i(a, r, o, u, s, "next", e)
                            }

                            function s(e) {
                                i(a, r, o, u, s, "throw", e)
                            }
                            u(void 0)
                        })
                    })()
                }
            }, {
                key: "handleConnectionOpen",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = e.guilds[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value;
                            this.handleOneGuildCreate(u, t)
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
                key: "handleGuildCreate",
                value: function(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
            }, {
                key: "handleGuildUpdate",
                value: function(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
            }, {
                key: "handleGuildDelete",
                value: function(e, t) {
                    this.delete(e.guild.id, t)
                }
            }, {
                key: "handleGuildStickersUpdate",
                value: function(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
            }, {
                key: "handleBackgroundSync",
                value: function(e, t) {
                    var n = this;
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(function(e) {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (u.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), n.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (u.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), n.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
            }, {
                key: "handleOneGuildCreate",
                value: function(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
            }, {
                key: "resetInMemoryState",
                value: function() {}
            }, {
                key: "replace",
                value: function(e, t, n) {
                    o.default.stickersTransaction(n).replaceAll(e, t)
                }
            }, {
                key: "delete",
                value: function(e, t) {
                    o.default.stickersTransaction(t).delete(e)
                }
            }, {
                key: "update",
                value: function(e, t, n, r) {
                    var i = o.default.stickersTransaction(r);
                    i.putAll(e, t);
                    var a = !0,
                        u = !1,
                        s = void 0;
                    try {
                        for (var l, c = n[Symbol.iterator](); !(a = (l = c.next()).done); a = !0) {
                            var f = l.value;
                            i.delete(e, f)
                        }
                    } catch (e) {
                        u = !0, s = e
                    } finally {
                        try {
                            !a && null != c.return && c.return()
                        } finally {
                            if (u) throw s
                        }
                    }
                }
            }], a(e.prototype, t), n && a(e, n), r
        }();
    t.default = new s
}