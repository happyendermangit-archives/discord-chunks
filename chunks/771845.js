function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("411104"), n("47120");
    var r = n("348327"),
        a = n.n(r),
        s = n("512722"),
        o = n.n(s),
        l = n("727258"),
        u = n("41776"),
        d = n("581883"),
        _ = n("251625"),
        c = n("823379"),
        E = n("486472"),
        I = n("271383"),
        T = n("430824"),
        f = n("412788"),
        S = n("9156"),
        h = n("594174");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = new l.GuildsTree;

    function N(e) {
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

    function p(e, t) {
        let n = m;
        if (m = new l.GuildsTree, 0 === e.length && t.length > 0)
            for (let e of t) m.addNode((0, l.createGuildNode)(e));
        else
            for (let t of e)
                if (0 !== t.guildIds.length) {
                    if (null == t.folderId) m.addNode((0, l.createGuildNode)(t.guildIds[0]));
                    else {
                        let e = (0, l.createFolderNode)(t);
                        for (let n of (m.addNode(e), t.guildIds)) m.addNode((0, l.createGuildNode)(n), e)
                    }
                } for (let e of m.allNodes()) e.type === l.GuildsNodeType.GUILD && (u.default.isLurking(e.id) || I.default.isCurrentUserGuest(e.id) || null == T.default.getGuild(e.id) && !E.default.isUnavailable(e.id)) && m.removeNode(e);
        for (let e of Object.values(m.nodes)) e.type === l.GuildsNodeType.FOLDER && 0 === e.children.length && m.removeNode(e);
        return ! function(e, t) {
            for (let n in T.default.getGuilds()) e(n) && !u.default.isLurking(n) && !I.default.isCurrentUserGuest(n) && t(n)
        }(e => null == m.nodes[e], e => m.addNode((0, l.createGuildNode)(e), m.root, !1)), !a()(n, m)
    }

    function O() {
        var e, t, n;
        return p(null !== (t = d.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
    }

    function R() {
        var e, t;
        let n = d.default.getGuildFolders();
        return !(null != i && a()(i, n)) && p(null != (i = n) ? i : [], null !== (t = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
    }

    function C(e) {
        let {
            sourceId: t,
            targetId: n,
            moveToBelow: i,
            combine: r
        } = e, a = m.getNode(t), s = m.getNode(n);
        if (null == a || null == s) return !1;
        if (o()(!(r && a.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(a.id, " with another guilds list item")), o()(!(r && null != s.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(s.id, " that's already inside of a folder")), o()(!(a.type === l.GuildsNodeType.FOLDER && null != s.parentId), "[SORTED GUILDS] Can't move a folder ".concat(a.id, " to inside of another folder ").concat(s.parentId)), r) {
            let e = s.type !== l.GuildsNodeType.FOLDER ? m.convertToFolder(s) : s;
            m.moveInto(a, e, i)
        } else m.moveNextTo(a, s, i)
    }

    function g(e) {
        let {
            sourceIds: t,
            name: n
        } = e, i = t.shift();
        if (null == i) return !1;
        let r = m.getNode(i);
        if (null == r) return !1;
        let a = m.convertToFolder(r);
        a.name = n, t.forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveInto(t, a, !0)
        })
    }

    function L(e) {
        let {
            targetId: t,
            sourceIds: n,
            ...i
        } = e, r = m.getNode(t);
        if (null == r || r.type !== l.GuildsNodeType.FOLDER) return !1;
        let a = "" === i.name ? void 0 : i.name;
        if (a !== r.name) {
            let e = m.cloneNode(r);
            o()(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = a, m.replaceNode(r, e)
        }
        let s = m.getNode(t);
        if (null == s) return !1;
        let u = s.children.map(e => e.id).filter(c.isNotNullish),
            d = new Set(u),
            _ = new Set(n),
            E = new Set([...u].filter(e => !_.has(e)));
        n.filter(e => !d.has(e)).forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveInto(t, s, !0)
        }), E.forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveNextTo(t, s, !0)
        })
    }

    function v(e) {
        let {
            targetId: t
        } = e, n = m.getNode(t);
        if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
        n.children.map(e => e.id).filter(c.isNotNullish).forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveNextTo(t, n, !0)
        })
    }

    function D(e) {
        let {
            guildId: t,
            joinedAt: n,
            user: i
        } = e, r = h.default.getCurrentUser(), a = T.default.getGuild(t);
        if ((null == r ? void 0 : r.id) !== i.id || null == a) return !1;
        let s = "string" == typeof n ? new Date(n) : n;
        return s !== a.joinedAt && null != s && O()
    }
    let M = (0, _.cachedFunction)((e, t) => e.sortedGuildNodes().map(e => e.id)),
        y = (0, _.cachedFunction)((e, t) => e.getRoots().map(N));
    class P extends f.default {
        initialize() {
            this.waitFor(T.default, S.default, d.default, E.default, u.default)
        }
        getGuildsTree() {
            return m
        }
        getGuildFolders() {
            return y(m, m.version)
        }
        getGuildFolderById(e) {
            return this.getGuildFolders().find(t => t.folderId === e)
        }
        getFlattenedGuildIds() {
            return M(m, m.version)
        }
        getCompatibleGuildFolders() {
            return m.root.children.map(N)
        }
        takeSnapshot() {
            return {
                version: P.LATEST_SNAPSHOT_VERSION,
                data: {
                    tree: m.getSnapshot()
                }
            }
        }
        constructor() {
            super({
                CONNECTION_OPEN: O,
                OVERLAY_INITIALIZE: O,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: O,
                GUILD_DELETE: O,
                GUILD_MEMBER_ADD: D,
                USER_SETTINGS_PROTO_UPDATE: R,
                GUILD_MOVE_BY_ID: C,
                GUILD_FOLDER_CREATE_LOCAL: g,
                GUILD_FOLDER_EDIT_LOCAL: L,
                GUILD_FOLDER_DELETE_LOCAL: v
            }), A(this, "loadCache", () => {
                let e = this.readSnapshot(P.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                null != t && (m = new l.GuildsTree).loadSnapshot(t)
            })
        }
    }
    A(P, "displayName", "SortedGuildStore"), A(P, "LATEST_SNAPSHOT_VERSION", 1), t.default = new P
}