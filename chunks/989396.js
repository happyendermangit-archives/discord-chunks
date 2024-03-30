function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        fromSerializedGuildRole: function() {
            return a
        },
        fromServerRole: function() {
            return u
        },
        sortClientRoles: function() {
            return s
        },
        sortServerRoles: function() {
            return l
        }
    });
    var r = n("22287"),
        o = n("194926"),
        i = n("523018");

    function a(e) {
        e.permissions = r.deserialize(e.permissions)
    }

    function u(e) {
        var t;
        return {
            id: e.id,
            name: e.name,
            permissions: r.deserialize(e.permissions),
            mentionable: e.mentionable,
            position: e.position,
            originalPosition: e.position,
            color: e.color,
            colorString: null != e.color && 0 !== e.color ? (0, o.int2hex)(e.color) : null,
            hoist: e.hoist,
            managed: e.managed,
            tags: e.tags,
            icon: e.icon,
            unicodeEmoji: e.unicode_emoji,
            flags: null !== (t = e.flags) && void 0 !== t ? t : 0
        }
    }

    function s(e, t) {
        if (null == t) return {};
        var n = t.length - 1,
            r = {};
        return t.sort(function(t, n) {
            var r, o, a = e === t.id ? 1 / 0 : -(null !== (r = t.originalPosition) && void 0 !== r ? r : t.position),
                u = e === n.id ? 1 / 0 : -(null !== (o = n.originalPosition) && void 0 !== o ? o : n.position);
            return a === u ? i.default.compare(t.id, n.id) : a < u ? -1 : a === u ? 0 : 1
        }).forEach(function(e, t) {
            e.position = n - t, r[e.id] = e
        }), r
    }

    function l(e, t) {
        return null == t ? {} : s(e, t.map(u))
    }
}