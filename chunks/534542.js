function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormText: function() {
            return d
        },
        FormTextTypes: function() {
            return l
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("154921"),
        o = n("383165");
    let l = {
            DEFAULT: "default",
            INPUT_PLACEHOLDER: "placeholder",
            DESCRIPTION: "description",
            LABEL_BOLD: "labelBold",
            LABEL_SELECTED: "labelSelected",
            LABEL_DESCRIPTOR: "labelDescriptor",
            ERROR: "error",
            SUCCESS: "success"
        },
        u = {
            DEFAULT: "modeDefault",
            DISABLED: "modeDisabled",
            SELECTABLE: "modeSelectable"
        };

    function d(e) {
        let {
            type: t = l.DEFAULT,
            className: n,
            disabled: r,
            selectable: d,
            children: _,
            style: c,
            ...E
        } = e, I = u.DEFAULT;
        return r ? I = u.DISABLED : d && (I = u.SELECTABLE), (0, i.jsx)(s.default, {
            className: a()(o[t], n, o[I]),
            style: c,
            ...E,
            children: _
        })
    }
    d.Types = l
}