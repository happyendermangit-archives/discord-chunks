function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildsNodeType: function() {
            return o
        },
        GuildsTree: function() {
            return _
        },
        createFolderNode: function() {
            return p
        },
        createGuildNode: function() {
            return E
        }
    });
    var r, o, i = n("512722"),
        a = n.n(i),
        u = n("392711");

    function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return function(e) {
            if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function d() {
        return Math.floor(4294967296 * Math.random())
    }(r = o || (o = {})).ROOT = "root", r.FOLDER = "folder", r.GUILD = "guild";
    var _ = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), c(this, "root", void 0), c(this, "nodes", void 0), c(this, "version", void 0), this.root = {
                type: "root",
                children: []
            }, this.nodes = {}, this.version = 0
        }
        return e = r, t = [{
            key: "getSnapshot",
            value: function() {
                return {
                    root: this.root,
                    nodes: this.nodes
                }
            }
        }, {
            key: "loadSnapshot",
            value: function(e) {
                this.root = e.root, this.nodes = e.nodes, this.version++
            }
        }, {
            key: "moveNextTo",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this._pluckNode(e);
                var r = null != t.parentId ? this.nodes[t.parentId] : this.root,
                    o = r.children.indexOf(t);
                return a()(!("folder" === e.type && "folder" === r.type), "[GUILDS TREE] Tried moving a folder (".concat(e.id, ") inside of another folder (").concat(r.id, ")")), a()(o >= 0, "[GUILDS TREE] target node (".concat(t.id, ") did not exist within its specified parent (").concat(t.parentId, ")")), r.children = f(r.children), r.children.splice(o + (n ? 1 : 0), 0, e), e.parentId = r.id, this.version++, this
            }
        }, {
            key: "moveInto",
            value: function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                this._pluckNode(e);
                var r = n ? t.children.length : 0;
                return t.children = f(t.children), t.children.splice(r, 0, e), e.parentId = t.id, this.version++, this
            }
        }, {
            key: "addNode",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return a()("root" !== e.type, "[GUILDS TREE] Tried adding another root node into the tree"), a()(null != e.id, "[GUILDS TREE] Tried adding a node without an id"), a()(null == this.nodes[e.id], "[GUILDS TREE] Tried adding a node that already exists (".concat(e.id, ")")), this.nodes[e.id] = e, this.version++, this.moveInto(e, t, n)
            }
        }, {
            key: "removeNode",
            value: function(e) {
                return a()(e !== this.root, "[GUILDS TREE] Tried removing the root node from the tree"), a()(null != e.id, "[GUILDS TREE] Tried removing a node without an id"), this._pluckNode(e), e.parentId = void 0, delete this.nodes[e.id], this.version++, this
            }
        }, {
            key: "replaceNode",
            value: function(e, t) {
                a()(e !== this.root, "[GUILDS TREE] Tried replacing the root node of the tree"), a()(null != e.id, "[GUILDS TREE] Tried replacing a node without an id"), a()(null != t.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id"), a()("root" !== t.type, "[GUILDS TREE] Tried adding another root node into the tree");
                var n = null != e.parentId ? this.nodes[e.parentId] : this.root,
                    r = n.children.indexOf(e);
                return a()(r >= 0, "[GUILDS TREE] existing node (".concat(e.id, ") did not exist within its specified parent (").concat(e.parentId, ")")), n.children = f(n.children), n.children.splice(r, 1, t), t.parentId = n.id, e.parentId = void 0, delete this.nodes[e.id], this.nodes[t.id] = t, this.version++, this
            }
        }, {
            key: "cloneNode",
            value: function(e) {
                return (0, u.clone)(e)
            }
        }, {
            key: "convertToFolder",
            value: function(e) {
                for (var t = d(); null != this.getNode(t);) t = d();
                var n = {
                    type: "folder",
                    id: t,
                    expanded: !1,
                    children: []
                };
                return this.replaceNode(e, n), this.removeNode(e), this.addNode(e, n, !1), this.version++, n
            }
        }, {
            key: "allNodes",
            value: function() {
                return Object.values(this.nodes)
            }
        }, {
            key: "getNode",
            value: function(e) {
                return this.nodes[e]
            }
        }, {
            key: "getRoots",
            value: function() {
                return this.root.children
            }
        }, {
            key: "size",
            get: function() {
                return this.allNodes().length
            }
        }, {
            key: "sortedGuildNodes",
            value: function() {
                return function e(t) {
                    return "guild" === t.type ? [t] : null == t.children ? [] : t.children.map(function(t) {
                        return e(t)
                    }).flat()
                }(this.root)
            }
        }, {
            key: "_pluckNode",
            value: function(e) {
                var t = null != e.parentId ? this.nodes[e.parentId] : this.root;
                a()(null != t, "[GUILDS TREE] source node (".concat(e.id, ") had a parent id (").concat(e.parentId, ") which doesn't exist in the tree"));
                var n = t.children;
                a()(null != n, "[GUILDS TREE] source node (".concat(e.id, ") had a parent id (").concat(e.parentId, ") which contains no children")), t.children = n.filter(function(t) {
                    return t !== e
                }), e.parentId = void 0, this.version++
            }
        }], l(e.prototype, t), n && l(e, n), r
    }();

    function E(e, t) {
        return {
            type: "guild",
            id: e,
            parentId: t,
            children: [],
            unavailable: !1
        }
    }

    function p(e, t) {
        var n, r, o;
        return {
            type: "folder",
            id: e.folderId,
            parentId: t,
            name: null !== (n = e.folderName) && void 0 !== n ? n : void 0,
            color: null !== (r = e.folderColor) && void 0 !== r ? r : void 0,
            expanded: null !== (o = e.expanded) && void 0 !== o && o,
            children: []
        }
    }
}