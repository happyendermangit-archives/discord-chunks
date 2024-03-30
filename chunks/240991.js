function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseBioReact: function() {
            return c
        },
        parseBioReactWithoutScrolling: function() {
            return E
        }
    });
    var i = n("392711"),
        r = n.n(i),
        s = n("31775"),
        a = n.n(s);
    n("302454");
    var o = n("25209"),
        l = n("691424"),
        u = n("428595");
    n("454585");
    var d = n("364458");
    let _ = (0, d.default)([u.default.PROFILE_BIO_RULES, (0, l.default)({
        enableBuildOverrides: !1
    })]);
    new(a())({
        max: 2e3
    });
    let c = o.reactParserFor(_),
        E = o.reactParserFor((0, d.default)([r().omit(_, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), {
            emoji: {
                react: () => null
            }
        }]))
}