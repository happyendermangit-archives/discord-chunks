function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        parseBioReact: function() {
            return d
        },
        parseBioReactWithoutScrolling: function() {
            return _
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("31775"),
        a = n.n(i);
    n("302454");
    var u = n("364612"),
        s = n("673498"),
        l = n("690475");
    n("609879");
    var c = n("6226"),
        f = (0, c.default)([l.default.PROFILE_BIO_RULES, (0, s.default)({
            enableBuildOverrides: !1
        })]);
    new(a())({
        max: 2e3
    });
    var d = u.reactParserFor(f),
        _ = u.reactParserFor((0, c.default)([o().omit(f, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), {
            emoji: {
                react: function() {
                    return null
                }
            }
        }]))
}