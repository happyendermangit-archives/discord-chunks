function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i, r = n("442837"),
        a = n("570140"),
        s = n("581883");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let l = new Set;
    class u extends(i = r.default.PersistedStore) {
        initialize(e) {
            null != e && (l = new Set(e.expandedFolders)), this.waitFor(s.default)
        }
        getState() {
            return {
                expandedFolders: Array.from(l)
            }
        }
        getExpandedFolders() {
            return l
        }
        isFolderExpanded(e) {
            return l.has(e)
        }
    }
    o(u, "displayName", "ExpandedGuildFolderStore"), o(u, "persistKey", "ExpandedGuildFolderStore"), t.default = new u(a.default, {
        TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
            let {
                folderId: t
            } = e;
            (l = new Set(l)).has(t) ? l.delete(t) : l.add(t)
        },
        SET_GUILD_FOLDER_EXPANDED: function(e) {
            let {
                folderId: t,
                expanded: n
            } = e;
            l = new Set(l), n ? l.add(t) : l.has(t) && l.delete(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function() {
            let e = s.default.getGuildFolders();
            if (null == e) return !1;
            let t = !1;
            for (let n of l) !e.some(e => e.folderId === n) && ((l = new Set(l)).delete(n), t = !0);
            return t
        },
        GUILD_FOLDER_COLLAPSE: function() {
            if (0 === l.size) return !1;
            l = new Set
        }
    })
}