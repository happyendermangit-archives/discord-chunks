function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComboboxPopout: function() {
            return d
        }
    });
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("130969"),
        l = n("960486"),
        u = n("873301");

    function d(e) {
        let {
            children: t,
            placeholder: n,
            value: r,
            onChange: d,
            onClose: c,
            showScrollbar: _,
            className: f,
            multiSelect: E,
            ...h
        } = e, g = s.useCallback(e => {
            d(e), !E && (null == c || c())
        }, [d, c, E]);
        return (0, i.jsx)(o.Dialog, {
            className: a(u.container, f, {
                [u.scroller]: _
            }),
            children: (0, i.jsx)(l.Combobox, {
                ...h,
                showScrollbar: _,
                value: r,
                multiSelect: E,
                onChange: g,
                placeholder: n,
                children: t,
                listClassName: u.list
            })
        })
    }
}