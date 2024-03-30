function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        rules: function() {
            return m
        }
    });
    var r, o, i = n("302454"),
        a = i.defaultRules.newline,
        u = i.defaultRules.paragraph,
        s = i.defaultRules.url,
        l = i.defaultRules.link,
        c = i.defaultRules.strong,
        f = i.defaultRules.u,
        d = i.defaultRules.br,
        _ = i.defaultRules.em,
        E = i.defaultRules.image,
        p = i.defaultRules.text;
    var m = {
        newline: a,
        paragraph: u,
        url: s,
        link: (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r, o, i;
                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : r[o] = i
                })
            }
            return e
        }({}, l), o = (o = {
            parse: function(e, t, n) {
                var r = l.parse(e, t, n);
                return r.context = n.context, r
            }
        }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(o)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
        }), r),
        strong: c,
        u: f,
        br: d,
        em: _,
        image: E,
        hook: {
            order: p.order,
            match: (0, i.inlineRegex)(/^\$\[(.*?)\]\((\w+)\)/),
            parse: function(e, t, n) {
                return {
                    render: n.context[e[2]],
                    content: t(e[1], n)
                }
            },
            react: function(e, t, n) {
                return e.render(t(e.content, n), n.key)
            }
        },
        noparse: {
            order: p.order,
            match: (0, i.inlineRegex)(/^!!(\d+?)!!/),
            parse: function(e, t, n) {
                var r = n.unsafeContext[e[1]];
                return "string" != typeof r && (r = null != r ? r.toString() : ""), {
                    type: "text",
                    content: r
                }
            },
            react: function(e) {
                return e.content
            }
        },
        text: p
    }
}