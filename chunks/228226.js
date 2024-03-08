function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("272030"),
        o = n("406291"),
        u = n("782340"),
        d = n("267336");

    function c(e) {
        var t;
        let a, c, f, {
                className: p,
                activeCommand: m,
                activeOption: h,
                optionStates: x
            } = e,
            E = l.useCallback(e => {
                var t;
                let l = null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id;
                if (null == l) {
                    e.preventDefault();
                    return
                }(0, r.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("443070").then(n.bind(n, "443070"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        id: l,
                        label: u.default.Messages.COPY_ID_COMMAND
                    })
                })
            }, [null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id]);
        if (null == m) return null;
        if (null != h) {
            let e = x[h.name].lastValidationResult;
            a = h.displayName, c = h.displayDescription, f = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
        } else a = "".concat(o.COMMAND_SENTINEL).concat(m.displayName), c = m.displayDescription, f = null;
        return (0, i.jsxs)("div", {
            className: s(p, d.bar),
            onContextMenu: E,
            children: [(0, i.jsx)("span", {
                className: d.name,
                children: a
            }), null != f ? (0, i.jsx)("span", {
                className: d.error,
                children: f
            }) : (0, i.jsx)("span", {
                className: d.description,
                children: c
            })]
        })
    }
}