function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return u
        }
    }), l("222007");
    var n = l("446674"),
        r = l("913144"),
        d = l("374363");
    let o = new Set;
    class a extends n.default.PersistedStore {
        initialize(e) {
            null != e && (o = new Set(e.expandedFolders)), this.waitFor(d.default)
        }
        getState() {
            return {
                expandedFolders: Array.from(o)
            }
        }
        getExpandedFolders() {
            return o
        }
        isFolderExpanded(e) {
            return o.has(e)
        }
    }
    a.displayName = "ExpandedGuildFolderStore", a.persistKey = "ExpandedGuildFolderStore";
    var u = new a(r.default, {
        TOGGLE_GUILD_FOLDER_EXPAND: function(e) {
            let {
                folderId: t
            } = e;
            (o = new Set(o)).has(t) ? o.delete(t) : o.add(t)
        },
        SET_GUILD_FOLDER_EXPANDED: function(e) {
            let {
                folderId: t,
                expanded: l
            } = e;
            o = new Set(o), l ? o.add(t) : o.has(t) && o.delete(t)
        },
        USER_SETTINGS_PROTO_UPDATE: function() {
            let e = d.default.getGuildFolders();
            if (null == e) return !1;
            let t = !1;
            for (let l of o) !e.some(e => e.folderId === l) && ((o = new Set(o)).delete(l), t = !0);
            return t
        },
        GUILD_FOLDER_COLLAPSE: function() {
            if (0 === o.size) return !1;
            o = new Set
        }
    })
}