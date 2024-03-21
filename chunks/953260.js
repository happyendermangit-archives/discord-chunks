function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JUMP_TO_GUILD: function() {
            return _
        }
    }), n("424973");
    var i = n("379881"),
        s = n("15131"),
        r = n("393414"),
        a = n("239380"),
        o = n("42203"),
        l = n("957255"),
        u = n("162771"),
        d = n("677099"),
        c = n("49111");
    let _ = {
        binds: (() => {
            let e = [];
            for (let t = 1; t < 10; t++) e.push("mod+".concat(t));
            return e
        })(),
        comboKeysBindGlobal: !0,
        action(e, t) {
            let n, _ = parseInt(t.split("+")[1], 10);
            if (0 === _ && (_ = 10), !isNaN(_) && 0 !== _) {
                if (null != (n = 1 === _ ? c.ME : (0, s.isFavoritesGuildVisible)(i.default, o.default, l.default) ? 2 === _ ? c.FAVORITES : d.default.getFlattenedGuildIds()[_ - 3] : d.default.getFlattenedGuildIds()[_ - 2])) return n === c.ME && null == u.default.getGuildId() ? ((0, r.transitionTo)(c.Routes.CHANNEL(n)), !1) : ((0, a.transitionToGuild)(n), !1)
            }
        }
    }
}