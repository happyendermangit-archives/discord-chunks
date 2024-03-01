function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormTextTypes: function() {
            return l
        },
        FormText: function() {
            return c
        }
    });
    var i = n("37983");
    n("884691");
    var r = n("414456"),
        s = n.n(r),
        a = n("258078"),
        o = n("9336");
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

    function c(e) {
        let {
            type: t = l.DEFAULT,
            className: n,
            disabled: r,
            selectable: c,
            children: d,
            style: f,
            ...E
        } = e, p = u.DEFAULT;
        return r ? p = u.DISABLED : c && (p = u.SELECTABLE), (0, i.jsx)(a.default, {
            className: s(o[t], n, o[p]),
            style: f,
            ...E,
            children: d
        })
    }
    c.Types = l
}