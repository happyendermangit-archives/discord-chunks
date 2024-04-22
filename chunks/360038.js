function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        JUMP_TO_GUILD: function() {
            return c
        }
    }), n("653041");
    var i = n("853856"),
        r = n("706590"),
        s = n("703656"),
        a = n("920440"),
        o = n("592125"),
        l = n("496675"),
        u = n("914010"),
        d = n("771845"),
        _ = n("981631");
    let c = {
        binds: (() => {
            let e = [];
            for (let t = 1; t < 10; t++) e.push("mod+".concat(t));
            return e
        })(),
        comboKeysBindGlobal: !0,
        action(e, t) {
            let n, c = parseInt(t.split("+")[1], 10);
            if (0 === c && (c = 10), !isNaN(c) && 0 !== c) {
                if (null != (n = 1 === c ? _.ME : (0, r.isFavoritesGuildVisible)(i.default, o.default, l.default) ? 2 === c ? _.FAVORITES : d.default.getFlattenedGuildIds()[c - 3] : d.default.getFlattenedGuildIds()[c - 2])) return n === _.ME && null == u.default.getGuildId() ? ((0, s.transitionTo)(_.Routes.CHANNEL(n)), !1) : ((0, a.transitionToGuild)(n), !1)
            }
        }
    }
}