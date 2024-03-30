function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("348327"),
        i = n.n(o),
        a = n("512722"),
        u = n.n(a),
        s = n("426494"),
        l = n("368995"),
        c = n("851285"),
        f = n("943959"),
        d = n("162677"),
        _ = n("489763"),
        E = n("957808"),
        p = n("306912"),
        m = n("837133"),
        y = n("848957"),
        I = n("208454");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
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

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var A = new s.GuildsTree;

    function b(e) {
        switch (e.type) {
            case s.GuildsNodeType.FOLDER:
                return {
                    folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(function(e) {
                        return e.id
                    })
                };
            case s.GuildsNodeType.GUILD:
                return {
                    folderId: void 0, guildIds: [e.id]
                };
            default:
                throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
        }
    }

    function N(e, t) {
        var n = A;
        if (A = new s.GuildsTree, 0 === e.length && t.length > 0) {
            var r = !0,
                o = !1,
                a = void 0;
            try {
                for (var u, c = t[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
                    var f = u.value;
                    A.addNode((0, s.createGuildNode)(f))
                }
            } catch (e) {
                o = !0, a = e
            } finally {
                try {
                    !r && null != c.return && c.return()
                } finally {
                    if (o) throw a
                }
            }
        } else {
            var d = !0,
                m = !1,
                y = void 0;
            try {
                for (var I, h = e[Symbol.iterator](); !(d = (I = h.next()).done); d = !0) {
                    var O = I.value;
                    if (0 !== O.guildIds.length) {
                        if (null == O.folderId) A.addNode((0, s.createGuildNode)(O.guildIds[0]));
                        else {
                            var T = (0, s.createFolderNode)(O);
                            A.addNode(T);
                            var S = !0,
                                v = !1,
                                g = void 0;
                            try {
                                for (var b, N = O.guildIds[Symbol.iterator](); !(S = (b = N.next()).done); S = !0) {
                                    var R = b.value;
                                    A.addNode((0, s.createGuildNode)(R), T)
                                }
                            } catch (e) {
                                v = !0, g = e
                            } finally {
                                try {
                                    !S && null != N.return && N.return()
                                } finally {
                                    if (v) throw g
                                }
                            }
                        }
                    }
                }
            } catch (e) {
                m = !0, y = e
            } finally {
                try {
                    !d && null != h.return && h.return()
                } finally {
                    if (m) throw y
                }
            }
        }
        var C = !0,
            P = !1,
            D = void 0;
        try {
            for (var L, M = A.allNodes()[Symbol.iterator](); !(C = (L = M.next()).done); C = !0) {
                var U = L.value;
                U.type === s.GuildsNodeType.GUILD && (l.default.isLurking(U.id) || E.default.isCurrentUserGuest(U.id) || null == p.default.getGuild(U.id) && !_.default.isUnavailable(U.id)) && A.removeNode(U)
            }
        } catch (e) {
            P = !0, D = e
        } finally {
            try {
                !C && null != M.return && M.return()
            } finally {
                if (P) throw D
            }
        }
        var w = !0,
            k = !1,
            G = void 0;
        try {
            for (var B, j = Object.values(A.nodes)[Symbol.iterator](); !(w = (B = j.next()).done); w = !0) {
                var F = B.value;
                F.type === s.GuildsNodeType.FOLDER && 0 === F.children.length && A.removeNode(F)
            }
        } catch (e) {
            k = !0, G = e
        } finally {
            try {
                !w && null != j.return && j.return()
            } finally {
                if (k) throw G
            }
        }
        return ! function(e, t) {
            for (var n in p.default.getGuilds()) e(n) && !l.default.isLurking(n) && !E.default.isCurrentUserGuest(n) && t(n)
        }(function(e) {
            return null == A.nodes[e]
        }, function(e) {
            return A.addNode((0, s.createGuildNode)(e), A.root, !1)
        }), !i()(n, A)
    }

    function R() {
        var e, t, n;
        return N(null !== (t = c.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = c.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
    }

    function C() {
        var e, t, n = c.default.getGuildFolders();
        return !(null != r && i()(r, n)) && N(null != (r = n) ? r : [], null !== (t = null === (e = c.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
    }

    function P(e) {
        var t = e.sourceId,
            n = e.targetId,
            r = e.moveToBelow,
            o = e.combine,
            i = A.getNode(t),
            a = A.getNode(n);
        if (null == i || null == a) return !1;
        if (u()(!(o && i.type === s.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(i.id, " with another guilds list item")), u()(!(o && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), u()(!(i.type === s.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(i.id, " to inside of another folder ").concat(a.parentId)), o) {
            var l = a.type !== s.GuildsNodeType.FOLDER ? A.convertToFolder(a) : a;
            A.moveInto(i, l, r)
        } else A.moveNextTo(i, a, r)
    }

    function D(e) {
        var t = e.sourceIds,
            n = e.name,
            r = t.shift();
        if (null == r) return !1;
        var o = A.getNode(r);
        if (null == o) return !1;
        var i = A.convertToFolder(o);
        i.name = n, t.forEach(function(e) {
            var t = A.getNode(e);
            null != t && A.moveInto(t, i, !0)
        })
    }

    function L(e) {
        var t, n = e.targetId,
            r = e.sourceIds,
            o = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["targetId", "sourceIds"]),
            i = A.getNode(n);
        if (null == i || i.type !== s.GuildsNodeType.FOLDER) return !1;
        var a = "" === o.name ? void 0 : o.name;
        if (a !== i.name) {
            var l = A.cloneNode(i);
            u()(l.id === i.id, "[SORTED GUILDS] Replacement folder node must have same id."), l.name = a, A.replaceNode(i, l)
        }
        var c = A.getNode(n);
        if (null == c) return !1;
        var f = c.children.map(function(e) {
                return e.id
            }).filter(d.isNotNullish),
            _ = new Set(f),
            E = new Set(r);
        var p = new Set(((function(e) {
            if (Array.isArray(e)) return h(e)
        })(t = f) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }
        }(t) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()).filter(function(e) {
            return !E.has(e)
        }));
        r.filter(function(e) {
            return !_.has(e)
        }).forEach(function(e) {
            var t = A.getNode(e);
            null != t && A.moveInto(t, c, !0)
        }), p.forEach(function(e) {
            var t = A.getNode(e);
            null != t && A.moveNextTo(t, c, !0)
        })
    }

    function M(e) {
        var t = e.targetId,
            n = A.getNode(t);
        if (null == n || n.type !== s.GuildsNodeType.FOLDER) return !1;
        n.children.map(function(e) {
            return e.id
        }).filter(d.isNotNullish).forEach(function(e) {
            var t = A.getNode(e);
            null != t && A.moveNextTo(t, n, !0)
        })
    }

    function U(e) {
        var t = e.guildId,
            n = e.joinedAt,
            r = e.user,
            o = I.default.getCurrentUser(),
            i = p.default.getGuild(t);
        if ((null == o ? void 0 : o.id) !== r.id || null == i) return !1;
        var a = "string" == typeof n ? new Date(n) : n;
        return a !== i.joinedAt && null != a && R()
    }
    var w = (0, f.cachedFunction)(function(e, t) {
            return e.sortedGuildNodes().map(function(e) {
                return e.id
            })
        }),
        k = (0, f.cachedFunction)(function(e, t) {
            return e.getRoots().map(b)
        }),
        G = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && g(e, t)
            }(u, e);
            var t, n, r, o, i, a = (t = u, n = function() {
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
                }(r) || "function" == typeof r) ? r : O(e)
            });

            function u() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, u), S(O(e = a.call(this, {
                    CONNECTION_OPEN: R,
                    OVERLAY_INITIALIZE: R,
                    CACHE_LOADED_LAZY: function() {
                        return e.loadCache()
                    },
                    GUILD_CREATE: R,
                    GUILD_DELETE: R,
                    GUILD_MEMBER_ADD: U,
                    USER_SETTINGS_PROTO_UPDATE: C,
                    GUILD_MOVE_BY_ID: P,
                    GUILD_FOLDER_CREATE_LOCAL: D,
                    GUILD_FOLDER_EDIT_LOCAL: L,
                    GUILD_FOLDER_DELETE_LOCAL: M
                })), "loadCache", function() {
                    var t = e.readSnapshot(u.LATEST_SNAPSHOT_VERSION),
                        n = null == t ? void 0 : t.tree;
                    null != n && (A = new s.GuildsTree).loadSnapshot(n)
                }), e
            }
            return r = u, o = [{
                key: "initialize",
                value: function() {
                    this.waitFor(p.default, y.default, c.default, _.default, l.default)
                }
            }, {
                key: "getGuildsTree",
                value: function() {
                    return A
                }
            }, {
                key: "getGuildFolders",
                value: function() {
                    return k(A, A.version)
                }
            }, {
                key: "getGuildFolderById",
                value: function(e) {
                    return this.getGuildFolders().find(function(t) {
                        return t.folderId === e
                    })
                }
            }, {
                key: "getFlattenedGuildIds",
                value: function() {
                    return w(A, A.version)
                }
            }, {
                key: "getCompatibleGuildFolders",
                value: function() {
                    return A.root.children.map(b)
                }
            }, {
                key: "takeSnapshot",
                value: function() {
                    return {
                        version: u.LATEST_SNAPSHOT_VERSION,
                        data: {
                            tree: A.getSnapshot()
                        }
                    }
                }
            }], T(r.prototype, o), i && T(r, i), u
        }(m.default);
    S(G, "displayName", "SortedGuildStore"), S(G, "LATEST_SNAPSHOT_VERSION", 1), t.default = new G
}