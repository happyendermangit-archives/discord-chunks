function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCommandQuery: function() {
            return l
        },
        getIconComponent: function() {
            return u
        },
        pxToRem: function() {
            return s
        }
    });
    var r = n("861272"),
        o = n("85240"),
        i = n("985152"),
        a = n("118891"),
        u = function(e) {
            return e.type === r.ApplicationCommandSectionType.BUILT_IN ? i.default : o.default
        };

    function s(e) {
        return "".concat(e / 16, "rem")
    }

    function l(e, t) {
        var n = t,
            r = !1,
            o = t.indexOf(":");
        if (o >= 0) {
            var i = t.lastIndexOf(" ", o);
            i >= 0 ? (t = t.substring(0, i), r = !0) : t = t.substring(0, o)
        } else t = t.substring(0, t.length);
        var u = t.split(" ", a.MAX_SUBCOMMAND_LEVEL + 1);
        return u.length > a.MAX_SUBCOMMAND_LEVEL && (r = !0, u.pop()), t = u.join(" "), (n.length > t.length || t.endsWith(" ")) && (r = !0, t = t.trimEnd()), {
            text: t,
            parts: u,
            hasSpaceTerminator: r
        }
    }
}