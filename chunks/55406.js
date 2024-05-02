function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("757143");
    var r = n("302454"),
        a = n.n(r),
        s = n("594199");
    let o = a().defaultRules.lheading,
        l = a().defaultRules.heading,
        u = a().defaultRules.link,
        d = a().defaultRules.image,
        _ = a().defaultRules.list,
        c = a().defaultRules.blockQuote,
        E = a().defaultRules.paragraph,
        I = /\{(.+?)}/,
        T = /^\$(\w+?)\$/;
    i = n("235375");
    let f = e => {
            let {
                transformUpperCase: t = !1
            } = e;
            return (e, n, i) => {
                let r = I.exec(e[1]),
                    s = e[1].replace(I, "");
                return t && (s = s.toUpperCase()), {
                    className: null != r ? r[1] : null,
                    level: "=" === e[2] ? 1 : 2,
                    content: a().parseInline(n, s, i)
                }
            }
        },
        S = e => ({
            ...i.baseRules,
            image: {
                ...d,
                ..."function" == typeof i.customRules.image ? i.customRules.image(e) : i.customRules.image
            },
            link: {
                ...u,
                ..."function" == typeof i.customRules.link ? i.customRules.link(e) : i.customRules.link
            },
            list: {
                ..._,
                ..."function" == typeof i.customRules.list ? i.customRules.list(e) : i.customRules.list
            },
            interpolation: {
                order: s.default.order,
                match: e => T.exec(e),
                parse(e, t, n) {
                    let i = n.interpolations[e[1]];
                    return null == i ? {
                        type: "text",
                        content: e[0]
                    } : {
                        type: "interpolation",
                        renderer: i
                    }
                },
                react: e => e.renderer()
            },
            lheading: {
                ...o,
                parse: f({
                    transformUpperCase: !0
                }),
                ..."function" == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading
            },
            heading: {
                ...l,
                ..."function" == typeof i.customRules.heading ? i.customRules.heading(e) : i.customRules.heading
            },
            blockQuote: {
                ...c,
                ..."function" == typeof i.customRules.blockQuote ? i.customRules.blockQuote(e) : i.customRules.blockQuote
            },
            paragraph: {
                ...E,
                ..."function" == typeof i.customRules.paragraph ? i.customRules.paragraph(e) : i.customRules.paragraph
            }
        }),
        h = e => ({
            lheading: {
                ...o,
                parse: f({
                    transformUpperCase: !1
                }),
                ..."function" == typeof i.customRules.lheading ? i.customRules.lheading(e) : i.customRules.lheading
            }
        });
    t.default = {
        getDefaultRules: e => ({
            ...S(e)
        }),
        getSpecialRules: e => ({
            ...S(e),
            ...h(e)
        })
    }
}