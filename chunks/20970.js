function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        rules: function() {
            return I
        }
    });
    var i = n("302454");
    let {
        newline: r,
        paragraph: a,
        url: s,
        link: o,
        strong: l,
        u,
        br: d,
        em: _,
        image: c,
        text: E
    } = i.defaultRules, I = {
        newline: r,
        paragraph: a,
        url: s,
        link: {
            ...o,
            parse(e, t, n) {
                let i = o.parse(e, t, n);
                return i.context = n.context, i
            }
        },
        strong: l,
        u,
        br: d,
        em: _,
        image: c,
        hook: {
            order: E.order,
            match: (0, i.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse(e, t, n) {
                let {
                    context: i
                } = n;
                return {
                    render: i[e[2]],
                    content: t(e[1], n)
                }
            },
            react: (e, t, n) => e.render(t(e.content, n), n.key)
        },
        noparse: {
            order: E.order,
            match: (0, i.inlineRegex)(/^!!(\d+?)!!/),
            parse(e, t, n) {
                let {
                    unsafeContext: i
                } = n, r = i[e[1]];
                return "string" != typeof r && (r = null != r ? r.toString() : ""), {
                    type: "text",
                    content: r
                }
            },
            react: e => e.content
        },
        text: E
    }
}