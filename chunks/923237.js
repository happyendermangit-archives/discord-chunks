function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComboboxPopout: function() {
            return c
        }
    });
    var i = n("37983"),
        r = n("884691"),
        s = n("414456"),
        a = n.n(s),
        o = n("130969"),
        l = n("960486"),
        u = n("873301");

    function c(e) {
        let {
            children: t,
            placeholder: n,
            value: s,
            onChange: c,
            onClose: d,
            showScrollbar: f,
            className: E,
            multiSelect: p,
            ...h
        } = e, _ = r.useCallback(e => {
            c(e), !p && (null == d || d())
        }, [c, d, p]);
        return (0, i.jsx)(o.Dialog, {
            className: a(u.container, E, {
                [u.scroller]: f
            }),
            children: (0, i.jsx)(l.Combobox, {
                ...h,
                showScrollbar: f,
                value: s,
                multiSelect: p,
                onChange: _,
                placeholder: n,
                children: t,
                listClassName: u.list
            })
        })
    }
}