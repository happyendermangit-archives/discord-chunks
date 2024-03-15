function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("70102"), n("222007");
    var s = n("714617"),
        r = n.n(s),
        a = n("627445"),
        o = n.n(a),
        l = n("674644"),
        u = n("267567"),
        d = n("374363"),
        c = n("117362"),
        f = n("449008"),
        _ = n("341542"),
        E = n("26989"),
        h = n("305961"),
        g = n("455079"),
        m = n("282109"),
        p = n("697218");
    let S = new l.GuildsTree;

    function v(e) {
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

    function T(e, t) {
        let n = S;
        if (S = new l.GuildsTree, 0 === e.length && t.length > 0)
            for (let e of t) S.addNode((0, l.createGuildNode)(e));
        else
            for (let t of e)
                if (0 !== t.guildIds.length) {
                    if (null == t.folderId) S.addNode((0, l.createGuildNode)(t.guildIds[0]));
                    else {
                        let e = (0, l.createFolderNode)(t);
                        for (let n of (S.addNode(e), t.guildIds)) S.addNode((0, l.createGuildNode)(n), e)
                    }
                } for (let e of S.allNodes()) e.type === l.GuildsNodeType.GUILD && (u.default.isLurking(e.id) || E.default.isCurrentUserGuest(e.id) || null == h.default.getGuild(e.id) && !_.default.isUnavailable(e.id)) && S.removeNode(e);
        for (let e of Object.values(S.nodes)) e.type === l.GuildsNodeType.FOLDER && 0 === e.children.length && S.removeNode(e);
        return ! function(e, t) {
            for (let n in h.default.getGuilds()) e(n) && !u.default.isLurking(n) && !E.default.isCurrentUserGuest(n) && t(n)
        }(e => null == S.nodes[e], e => S.addNode((0, l.createGuildNode)(e), S.root, !1)), !r(n, S)
    }

    function I() {
        var e, t, n;
        return T(null !== (t = d.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
    }

    function A() {
        var e, t;
        let n = d.default.getGuildFolders();
        return !(null != i && r(i, n)) && T(null != (i = n) ? i : [], null !== (t = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
    }

    function C(e) {
        let {
            sourceId: t,
            targetId: n,
            moveToBelow: i,
            combine: s
        } = e, r = S.getNode(t), a = S.getNode(n);
        if (null == r || null == a) return !1;
        if (o(!(s && r.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(r.id, " with another guilds list item")), o(!(s && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), o(!(r.type === l.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(r.id, " to inside of another folder ").concat(a.parentId)), s) {
            let e = a.type !== l.GuildsNodeType.FOLDER ? S.convertToFolder(a) : a;
            S.moveInto(r, e, i)
        } else S.moveNextTo(r, a, i)
    }

    function y(e) {
        let {
            sourceIds: t,
            name: n
        } = e, i = t.shift();
        if (null == i) return !1;
        let s = S.getNode(i);
        if (null == s) return !1;
        let r = S.convertToFolder(s);
        r.name = n, t.forEach(e => {
            let t = S.getNode(e);
            null != t && S.moveInto(t, r, !0)
        })
    }

    function N(e) {
        let {
            targetId: t,
            sourceIds: n,
            ...i
        } = e, s = S.getNode(t);
        if (null == s || s.type !== l.GuildsNodeType.FOLDER) return !1;
        let r = "" === i.name ? void 0 : i.name;
        if (r !== s.name) {
            let e = S.cloneNode(s);
            o(e.id === s.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = r, S.replaceNode(s, e)
        }
        let a = S.getNode(t);
        if (null == a) return !1;
        let u = a.children.map(e => e.id).filter(f.isNotNullish),
            d = new Set(u),
            c = new Set(n),
            _ = new Set([...u].filter(e => !c.has(e))),
            E = n.filter(e => !d.has(e));
        E.forEach(e => {
            let t = S.getNode(e);
            null != t && S.moveInto(t, a, !0)
        }), _.forEach(e => {
            let t = S.getNode(e);
            null != t && S.moveNextTo(t, a, !0)
        })
    }

    function R(e) {
        let {
            targetId: t
        } = e, n = S.getNode(t);
        if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
        let i = n.children.map(e => e.id).filter(f.isNotNullish);
        i.forEach(e => {
            let t = S.getNode(e);
            null != t && S.moveNextTo(t, n, !0)
        })
    }

    function O(e) {
        let {
            guildId: t,
            joinedAt: n,
            user: i
        } = e, s = p.default.getCurrentUser(), r = h.default.getGuild(t);
        if ((null == s ? void 0 : s.id) !== i.id || null == r) return !1;
        let a = "string" == typeof n ? new Date(n) : n;
        return a !== r.joinedAt && null != a && I()
    }
    let D = (0, c.cachedFunction)((e, t) => e.sortedGuildNodes().map(e => e.id)),
        P = (0, c.cachedFunction)((e, t) => e.getRoots().map(v));
    class L extends g.default {
        initialize() {
            this.waitFor(h.default, m.default, d.default, _.default, u.default)
        }
        getGuildsTree() {
            return S
        }
        getGuildFolders() {
            return P(S, S.version)
        }
        getGuildFolderById(e) {
            return this.getGuildFolders().find(t => t.folderId === e)
        }
        getFlattenedGuildIds() {
            return D(S, S.version)
        }
        getCompatibleGuildFolders() {
            return S.root.children.map(v)
        }
        takeSnapshot() {
            return {
                version: L.LATEST_SNAPSHOT_VERSION,
                data: {
                    tree: S.getSnapshot()
                }
            }
        }
        constructor() {
            super({
                CONNECTION_OPEN: I,
                OVERLAY_INITIALIZE: I,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: I,
                GUILD_DELETE: I,
                GUILD_MEMBER_ADD: O,
                USER_SETTINGS_PROTO_UPDATE: A,
                GUILD_MOVE_BY_ID: C,
                GUILD_FOLDER_CREATE_LOCAL: y,
                GUILD_FOLDER_EDIT_LOCAL: N,
                GUILD_FOLDER_DELETE_LOCAL: R
            }), this.loadCache = () => {
                let e = this.readSnapshot(L.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                null != t && (S = new l.GuildsTree).loadSnapshot(t)
            }
        }
    }
    L.displayName = "SortedGuildStore", L.LATEST_SNAPSHOT_VERSION = 1;
    var M = new L
}