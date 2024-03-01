function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fromSerializedGuildRole: function() {
            return a
        },
        fromServerRole: function() {
            return o
        },
        sortClientRoles: function() {
            return l
        },
        sortServerRoles: function() {
            return u
        }
    }), n("702976");
    var i = n("316693"),
        r = n("509043"),
        s = n("299039");

    function a(e) {
        e.permissions = i.default.deserialize(e.permissions)
    }

    function o(e) {
        var t;
        return {
            id: e.id,
            name: e.name,
            permissions: i.default.deserialize(e.permissions),
            mentionable: e.mentionable,
            position: e.position,
            originalPosition: e.position,
            color: e.color,
            colorString: null != e.color && 0 !== e.color ? (0, r.int2hex)(e.color) : null,
            hoist: e.hoist,
            managed: e.managed,
            tags: e.tags,
            icon: e.icon,
            unicodeEmoji: e.unicode_emoji,
            flags: null !== (t = e.flags) && void 0 !== t ? t : 0
        }
    }

    function l(e, t) {
        if (null == t) return {};
        let n = t.length - 1,
            i = {};
        return t.sort((t, n) => {
            var i, r;
            let a = e === t.id ? 1 / 0 : -(null !== (i = t.originalPosition) && void 0 !== i ? i : t.position),
                o = e === n.id ? 1 / 0 : -(null !== (r = n.originalPosition) && void 0 !== r ? r : n.position);
            return a === o ? s.default.compare(t.id, n.id) : a < o ? -1 : a === o ? 0 : 1
        }).forEach((e, t) => {
            e.position = n - t, i[e.id] = e
        }), i
    }

    function u(e, t) {
        return null == t ? {} : l(e, t.map(o))
    }
}