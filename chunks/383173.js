function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("374363");
    let a = new Set;
    class o extends i.default.PersistedStore {
        initialize(e) {
            null != e && (a = new Set(e.expandedFolders)), this.waitFor(r.default)
        }
        getState() {
            return {
                expandedFolders: Array.from(a)
            }
        }
        getExpandedFolders() {
            return a
        }
        isFolderExpanded(e) {
            return a.has(e)
        }
    }
    o.displayName = "ExpandedGuildFolderStore", o.persistKey = "ExpandedGuildFolderStore";
    var l = new o(s.default, {
        TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
            let {
                folderId: t
            } = e;
            (a = new Set(a)).has(t) ? a.delete(t) : a.add(t)
        },
        SET_GUILD_FOLDER_EXPANDED: function(e) {
            let {
                folderId: t,
                expanded: n
            } = e;
            a = new Set(a), n ? a.add(t) : a.has(t) && a.delete(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function() {
            let e = r.default.getGuildFolders();
            if (null == e) return !1;
            let t = !1;
            for (let n of a) !e.some(e => e.folderId === n) && ((a = new Set(a)).delete(n), t = !0);
            return t
        },
        GUILD_FOLDER_COLLAPSE: function() {
            if (0 === a.size) return !1;
            a = new Set
        }
    })
}