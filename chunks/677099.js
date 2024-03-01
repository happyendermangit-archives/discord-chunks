function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return b
        }
    }), n("70102"), n("222007");
    var r = n("714617"),
        s = n.n(r),
        a = n("627445"),
        o = n.n(a),
        l = n("674644"),
        u = n("267567"),
        c = n("374363"),
        d = n("117362"),
        f = n("449008"),
        E = n("341542"),
        p = n("26989"),
        h = n("305961"),
        _ = n("455079"),
        S = n("282109"),
        m = n("697218");
    let T = new l.GuildsTree;

    function g(e) {
        switch (e.type) {
            case l.GuildsNodeType.FOLDER:
                return {
                    folderId: e.id, folderName: e.name, folderColor: e.color, expanded: e.expanded, guildIds: e.children.map(e => e.id)
                };
            case l.GuildsNodeType.GUILD:
                return {
                    folderId: void 0, guildIds: [e.id]
                };
            default:
                throw Error("[SortedGuildStore] Unexpected guilds tree node type.")
        }
    }

    function I(e, t) {
        let n = T;
        if (T = new l.GuildsTree, 0 === e.length && t.length > 0)
            for (let e of t) T.addNode((0, l.createGuildNode)(e));
        else
            for (let t of e)
                if (0 !== t.guildIds.length) {
                    if (null == t.folderId) T.addNode((0, l.createGuildNode)(t.guildIds[0]));
                    else {
                        let e = (0, l.createFolderNode)(t);
                        for (let n of (T.addNode(e), t.guildIds)) T.addNode((0, l.createGuildNode)(n), e)
                    }
                } for (let e of T.allNodes()) e.type === l.GuildsNodeType.GUILD && (u.default.isLurking(e.id) || p.default.isCurrentUserGuest(e.id) || null == h.default.getGuild(e.id) && !E.default.isUnavailable(e.id)) && T.removeNode(e);
        for (let e of Object.values(T.nodes)) e.type === l.GuildsNodeType.FOLDER && 0 === e.children.length && T.removeNode(e);
        return ! function(e, t) {
            for (let n in h.default.getGuilds()) e(n) && !u.default.isLurking(n) && !p.default.isCurrentUserGuest(n) && t(n)
        }(e => null == T.nodes[e], e => T.addNode((0, l.createGuildNode)(e), T.root, !1)), !s(n, T)
    }

    function C() {
        var e, t, n;
        return I(null !== (t = c.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = c.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
    }

    function v() {
        var e, t;
        let n = c.default.getGuildFolders();
        return !(null != i && s(i, n)) && I(null != (i = n) ? i : [], null !== (t = null === (e = c.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
    }

    function A(e) {
        let {
            sourceId: t,
            targetId: n,
            moveToBelow: i,
            combine: r
        } = e, s = T.getNode(t), a = T.getNode(n);
        if (null == s || null == a) return !1;
        if (o(!(r && s.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, " with another guilds list item")), o(!(r && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), o(!(s.type === l.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, " to inside of another folder ").concat(a.parentId)), r) {
            let e = a.type !== l.GuildsNodeType.FOLDER ? T.convertToFolder(a) : a;
            T.moveInto(s, e, i)
        } else T.moveNextTo(s, a, i)
    }

    function R(e) {
        let {
            sourceIds: t,
            name: n
        } = e, i = t.shift();
        if (null == i) return !1;
        let r = T.getNode(i);
        if (null == r) return !1;
        let s = T.convertToFolder(r);
        s.name = n, t.forEach(e => {
            let t = T.getNode(e);
            null != t && T.moveInto(t, s, !0)
        })
    }

    function N(e) {
        let {
            targetId: t,
            sourceIds: n,
            ...i
        } = e, r = T.getNode(t);
        if (null == r || r.type !== l.GuildsNodeType.FOLDER) return !1;
        let s = "" === i.name ? void 0 : i.name;
        if (s !== r.name) {
            let e = T.cloneNode(r);
            o(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = s, T.replaceNode(r, e)
        }
        let a = T.getNode(t);
        if (null == a) return !1;
        let u = a.children.map(e => e.id).filter(f.isNotNullish),
            c = new Set(u),
            d = new Set(n),
            E = new Set([...u].filter(e => !d.has(e))),
            p = n.filter(e => !c.has(e));
        p.forEach(e => {
            let t = T.getNode(e);
            null != t && T.moveInto(t, a, !0)
        }), E.forEach(e => {
            let t = T.getNode(e);
            null != t && T.moveNextTo(t, a, !0)
        })
    }

    function O(e) {
        let {
            targetId: t
        } = e, n = T.getNode(t);
        if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
        let i = n.children.map(e => e.id).filter(f.isNotNullish);
        i.forEach(e => {
            let t = T.getNode(e);
            null != t && T.moveNextTo(t, n, !0)
        })
    }

    function D(e) {
        let {
            guildId: t,
            joinedAt: n,
            user: i
        } = e, r = m.default.getCurrentUser(), s = h.default.getGuild(t);
        if ((null == r ? void 0 : r.id) !== i.id || null == s) return !1;
        let a = "string" == typeof n ? new Date(n) : n;
        return a !== s.joinedAt && null != a && C()
    }
    let y = (0, d.cachedFunction)((e, t) => e.sortedGuildNodes().map(e => e.id)),
        P = (0, d.cachedFunction)((e, t) => e.getRoots().map(g));
    class L extends _.default {
        initialize() {
            this.waitFor(h.default, S.default, c.default, E.default, u.default)
        }
        getGuildsTree() {
            return T
        }
        getGuildFolders() {
            return P(T, T.version)
        }
        getGuildFolderById(e) {
            return this.getGuildFolders().find(t => t.folderId === e)
        }
        getFlattenedGuildIds() {
            return y(T, T.version)
        }
        getCompatibleGuildFolders() {
            return T.root.children.map(g)
        }
        takeSnapshot() {
            return {
                version: L.LATEST_SNAPSHOT_VERSION,
                data: {
                    tree: T.getSnapshot()
                }
            }
        }
        constructor() {
            super({
                CONNECTION_OPEN: C,
                OVERLAY_INITIALIZE: C,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: C,
                GUILD_DELETE: C,
                GUILD_MEMBER_ADD: D,
                USER_SETTINGS_PROTO_UPDATE: v,
                GUILD_MOVE_BY_ID: A,
                GUILD_FOLDER_CREATE_LOCAL: R,
                GUILD_FOLDER_EDIT_LOCAL: N,
                GUILD_FOLDER_DELETE_LOCAL: O
            }), this.loadCache = () => {
                let e = this.readSnapshot(L.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                null != t && (T = new l.GuildsTree).loadSnapshot(t)
            }
        }
    }
    L.displayName = "SortedGuildStore", L.LATEST_SNAPSHOT_VERSION = 1;
    var b = new L
}