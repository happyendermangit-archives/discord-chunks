function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("272030"),
        o = n("406291"),
        u = n("782340"),
        d = n("267336");

    function c(e) {
        var t;
        let a, c, f, {
                className: m,
                activeCommand: p,
                activeOption: h,
                optionStates: E
            } = e,
            g = i.useCallback(e => {
                var t;
                let i = null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id;
                if (null == i) {
                    e.preventDefault();
                    return
                }(0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("443070").then(n.bind(n, "443070"));
                    return t => (0, l.jsx)(e, {
                        ...t,
                        id: i,
                        label: u.default.Messages.COPY_ID_COMMAND
                    })
                })
            }, [null == p ? void 0 : null === (t = p.rootCommand) || void 0 === t ? void 0 : t.id]);
        if (null == p) return null;
        if (null != h) {
            let e = E[h.name].lastValidationResult;
            a = h.displayName, c = h.displayDescription, f = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
        } else a = "".concat(o.COMMAND_SENTINEL).concat(p.displayName), c = p.displayDescription, f = null;
        return (0, l.jsxs)("div", {
            className: s(m, d.bar),
            onContextMenu: g,
            children: [(0, l.jsx)("span", {
                className: d.name,
                children: a
            }), null != f ? (0, l.jsx)("span", {
                className: d.error,
                children: f
            }) : (0, l.jsx)("span", {
                className: d.description,
                children: c
            })]
        })
    }
}