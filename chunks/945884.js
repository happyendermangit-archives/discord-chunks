function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("302454"),
        r = n.n(i),
        a = n("777547");
    let s = /\n$/,
        o = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/,
        l = {
            order: r().defaultRules.heading.order,
            requiredFirstCharacters: ["-"],
            match: (e, t, n) => {
                let {
                    showSubtextMarkdown: r
                } = a.SubtextMarkdownUserExperiment.getCurrentConfig({
                    location: "MarkupSubtextRule"
                });
                return r ? null == n || "" === n || null != n.match(s) ? (0, i.anyScopeRegex)(o)(e, t, n) : null : null
            },
            parse: function(e, t, n) {
                return {
                    content: (0, i.parseInline)(t, e[1].trim(), n)
                }
            }
        };
    t.default = l
}