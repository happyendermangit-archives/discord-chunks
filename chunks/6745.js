function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ComboboxPopout: function() {
            return d
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("507274"),
        l = n("838331"),
        u = n("750963");

    function d(e) {
        let {
            children: t,
            placeholder: n,
            value: a,
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
            className: s()(u.container, E, {
                [u.scroller]: c
            }),
            children: (0, i.jsx)(l.Combobox, {
                ...T,
                showScrollbar: c,
                value: a,
                multiSelect: I,
                onChange: f,
                placeholder: n,
                children: t,
                listClassName: u.list
            })
        })
    }
}