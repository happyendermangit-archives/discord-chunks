function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("411104"), n("47120");
    var r = n("348327"),
        s = n.n(r),
        a = n("512722"),
        o = n.n(a),
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
        A = n("594174");

    function h(e, t, n) {
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

    function O(e, t) {
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
        }(e => null == m.nodes[e], e => m.addNode((0, l.createGuildNode)(e), m.root, !1)), !s()(n, m)
    }

    function p() {
        var e, t, n;
        return O(null !== (t = d.default.getGuildFolders()) && void 0 !== t ? t : [], null !== (n = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== n ? n : [])
    }

    function R() {
        var e, t;
        let n = d.default.getGuildFolders();
        return !(null != i && s()(i, n)) && O(null != (i = n) ? i : [], null !== (t = null === (e = d.default.settings.guildFolders) || void 0 === e ? void 0 : e.guildPositions) && void 0 !== t ? t : [])
    }

    function C(e) {
        let {
            sourceId: t,
            targetId: n,
            moveToBelow: i,
            combine: r
        } = e, s = m.getNode(t), a = m.getNode(n);
        if (null == s || null == a) return !1;
        if (o()(!(r && s.type === l.GuildsNodeType.FOLDER), "[SORTED GUILDS] Can't combine a folder ".concat(s.id, " with another guilds list item")), o()(!(r && null != a.parentId), "[SORTED GUILDS] Can't combine with a guild ".concat(a.id, " that's already inside of a folder")), o()(!(s.type === l.GuildsNodeType.FOLDER && null != a.parentId), "[SORTED GUILDS] Can't move a folder ".concat(s.id, " to inside of another folder ").concat(a.parentId)), r) {
            let e = a.type !== l.GuildsNodeType.FOLDER ? m.convertToFolder(a) : a;
            m.moveInto(s, e, i)
        } else m.moveNextTo(s, a, i)
    }

    function g(e) {
        let {
            sourceIds: t,
            name: n
        } = e, i = t.shift();
        if (null == i) return !1;
        let r = m.getNode(i);
        if (null == r) return !1;
        let s = m.convertToFolder(r);
        s.name = n, t.forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveInto(t, s, !0)
        })
    }

    function L(e) {
        let {
            targetId: t,
            sourceIds: n,
            ...i
        } = e, r = m.getNode(t);
        if (null == r || r.type !== l.GuildsNodeType.FOLDER) return !1;
        let s = "" === i.name ? void 0 : i.name;
        if (s !== r.name) {
            let e = m.cloneNode(r);
            o()(e.id === r.id, "[SORTED GUILDS] Replacement folder node must have same id."), e.name = s, m.replaceNode(r, e)
        }
        let a = m.getNode(t);
        if (null == a) return !1;
        let u = a.children.map(e => e.id).filter(c.isNotNullish),
            d = new Set(u),
            _ = new Set(n),
            E = new Set([...u].filter(e => !_.has(e)));
        n.filter(e => !d.has(e)).forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveInto(t, a, !0)
        }), E.forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveNextTo(t, a, !0)
        })
    }

    function D(e) {
        let {
            targetId: t
        } = e, n = m.getNode(t);
        if (null == n || n.type !== l.GuildsNodeType.FOLDER) return !1;
        n.children.map(e => e.id).filter(c.isNotNullish).forEach(e => {
            let t = m.getNode(e);
            null != t && m.moveNextTo(t, n, !0)
        })
    }

    function v(e) {
        let {
            guildId: t,
            joinedAt: n,
            user: i
        } = e, r = A.default.getCurrentUser(), s = T.default.getGuild(t);
        if ((null == r ? void 0 : r.id) !== i.id || null == s) return !1;
        let a = "string" == typeof n ? new Date(n) : n;
        return a !== s.joinedAt && null != a && p()
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
                CONNECTION_OPEN: p,
                OVERLAY_INITIALIZE: p,
                CACHE_LOADED_LAZY: () => this.loadCache(),
                GUILD_CREATE: p,
                GUILD_DELETE: p,
                GUILD_MEMBER_ADD: v,
                USER_SETTINGS_PROTO_UPDATE: R,
                GUILD_MOVE_BY_ID: C,
                GUILD_FOLDER_CREATE_LOCAL: g,
                GUILD_FOLDER_EDIT_LOCAL: L,
                GUILD_FOLDER_DELETE_LOCAL: D
            }), h(this, "loadCache", () => {
                let e = this.readSnapshot(P.LATEST_SNAPSHOT_VERSION),
                    t = null == e ? void 0 : e.tree;
                null != t && (m = new l.GuildsTree).loadSnapshot(t)
            })
        }
    }
    h(P, "displayName", "SortedGuildStore"), h(P, "LATEST_SNAPSHOT_VERSION", 1), t.default = new P
}