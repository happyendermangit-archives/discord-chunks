function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("239091"),
        l = n("665692"),
        u = n("689938"),
        d = n("91186");

    function _(e) {
        var t;
        let s, _, c, {
                className: E,
                activeCommand: I,
                activeOption: T,
                optionStates: f
            } = e,
            S = r.useCallback(e => {
                var t;
                let r = null == I ? void 0 : null === (t = I.rootCommand) || void 0 === t ? void 0 : t.id;
                if (null == r) {
                    e.preventDefault();
                    return
                }(0, o.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.e("5396").then(n.bind(n, "731646"));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        id: r,
                        label: u.default.Messages.COPY_ID_COMMAND
                    })
                })
            }, [null == I ? void 0 : null === (t = I.rootCommand) || void 0 === t ? void 0 : t.id]);
        if (null == I) return null;
        if (null != T) {
            let e = f[T.name].lastValidationResult;
            s = T.displayName, _ = T.displayDescription, c = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
        } else s = "".concat(l.COMMAND_SENTINEL).concat(I.displayName), _ = I.displayDescription, c = null;
        return (0, i.jsxs)("div", {
            className: a()(E, d.bar),
            onContextMenu: S,
            children: [(0, i.jsx)("span", {
                className: d.name,
                children: s
            }), null != c ? (0, i.jsx)("span", {
                className: d.error,
                children: c
            }) : (0, i.jsx)("span", {
                className: d.description,
                children: _
            })]
        })
    }
}