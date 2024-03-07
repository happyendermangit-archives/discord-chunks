function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    });
    var t = E("404828");
    let {
        newline: o,
        paragraph: n,
        url: r,
        link: a,
        strong: i,
        u: I,
        br: s,
        em: T,
        image: S,
        text: N
    } = t.defaultRules;
    var O = {
        newline: o,
        paragraph: n,
        url: r,
        link: {
            ...a,
            parse(e, _, E) {
                let t = a.parse(e, _, E);
                return t.context = E.context, t
            }
        },
        strong: i,
        u: I,
        br: s,
        em: T,
        image: S,
        hook: {
            order: N.order,
            match: (0, t.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, _, E) {
                let {
                    context: t
                } = E;
                return {
                    render: t[e[2]],
                    content: _(e[1], E)
                }
            },
            react: (e, _, E) => e.render(_(e.content, E), E.key)
        },
        noparse: {
            order: N.order,
            match: (0, t.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, _, E) {
                let {
                    unsafeContext: t
                } = E, o = t[e[1]];
                return "string" != typeof o && (o = null != o ? o.toString() : ""), {
                    type: "text",
                    content: o
                }
            },
            react: e => e.content
        },
        text: N
    }
}