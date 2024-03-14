function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormTextTypes: function() {
            return l
        },
        FormText: function() {
            return d
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("414456"),
        r = n.n(s),
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

    function d(e) {
        let {
            type: t = l.DEFAULT,
            className: n,
            disabled: s,
            selectable: d,
            children: c,
            style: f,
            ..._
        } = e, E = u.DEFAULT;
        return s ? E = u.DISABLED : d && (E = u.SELECTABLE), (0, i.jsx)(a.default, {
            className: r(o[t], n, o[E]),
            style: f,
            ..._,
            children: c
        })
    }
    d.Types = l
}