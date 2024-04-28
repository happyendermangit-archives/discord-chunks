function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComboboxPopout: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("507274"),
        l = n("838331"),
        u = n("837507");

    function d(e) {
        let {
            children: t,
            placeholder: n,
            value: s,
            onChange: d,
            onClose: _,
            showScrollbar: c,
            className: E,
            multiSelect: I,
            ...T
        } = e, f = r.useCallback(e => {
            d(e), !I && (null == _ || _())
        }, [d, _, I]);
        return (0, i.jsx)(o.Dialog, {
            className: a()(u.container, E, {
                [u.scroller]: c
            }),
            children: (0, i.jsx)(l.Combobox, {
                ...T,
                showScrollbar: c,
                value: s,
                multiSelect: I,
                onChange: f,
                placeholder: n,
                children: t,
                listClassName: u.list
            })
        })
    }
}