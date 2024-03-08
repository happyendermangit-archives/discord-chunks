function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("968194"),
        a = n("128259"),
        s = n("253981"),
        r = n("295999");

    function o(e) {
        let {
            activity: t,
            color: n,
            user: o,
            look: u
        } = e;
        if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
        async function d(e, t, n) {
            try {
                let i = await (0, l.getMetadata)(e, t);
                if (i.button_urls.length <= n) return;
                let r = i.button_urls[n];
                if ("string" != typeof r) return;
                let o = s.default.safeParseWithQuery(r);
                if (null == o || null == o.protocol || null == o.hostname) return;
                (0, a.handleClick)({
                    href: s.default.format(o),
                    trusted: !1
                })
            } catch (e) {}
        }
        return (0, i.jsx)(i.Fragment, {
            children: t.buttons.map((e, l) => (0, i.jsx)(r.default, {
                color: n,
                look: u,
                onClick: () => d(t, o.id, l),
                children: e
            }, "customButton-".concat(l)))
        })
    }
}