function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JUMP_TO_GUILD: function() {
            return d
        }
    });
    var r = n("652709"),
        o = n("359270"),
        i = n("163291"),
        a = n("909080"),
        u = n("935741"),
        s = n("29884"),
        l = n("63116"),
        c = n("380512"),
        f = n("281767"),
        d = {
            binds: function() {
                for (var e = [], t = 1; t < 10; t++) e.push("mod+".concat(t));
                return e
            }(),
            comboKeysBindGlobal: !0,
            action: function(e, t) {
                var n, d = parseInt(t.split("+")[1], 10);
                if (0 === d && (d = 10), !isNaN(d) && 0 !== d) {
                    if (null != (n = 1 === d ? f.ME : (0, o.isFavoritesGuildVisible)(r.default, u.default, s.default) ? 2 === d ? f.FAVORITES : c.default.getFlattenedGuildIds()[d - 3] : c.default.getFlattenedGuildIds()[d - 2])) return n === f.ME && null == l.default.getGuildId() ? ((0, i.transitionTo)(f.Routes.CHANNEL(n)), !1) : ((0, a.transitionToGuild)(n), !1)
                }
            }
        }
}