function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseBioReact: function() {
            return f
        },
        parseBioReactWithoutScrolling: function() {
            return m
        }
    });
    var l = n("917351"),
        i = n.n(l),
        a = n("693566"),
        s = n.n(a);
    n("404828");
    var r = n("933805"),
        o = n("52140"),
        u = n("888198");
    n("367376");
    var d = n("788554");
    let c = (0, d.default)([u.default.PROFILE_BIO_RULES, (0, o.default)({
        enableBuildOverrides: !1
    })]);
    new s({
        max: 2e3
    });
    let f = r.reactParserFor(c),
        m = r.reactParserFor((0, d.default)([i.omit(c, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), {
            emoji: {
                react: () => null
            }
        }]))
}