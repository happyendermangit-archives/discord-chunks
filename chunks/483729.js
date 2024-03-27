function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelectState: function() {
            return o
        }
    });
    var r = n("345926"),
        i = n("913122"),
        a = n("470079");

    function o(e) {
        let t = (0, r.useMenuTriggerState)(e),
            n = (0, i.useSingleSelectListState)({
                ...e,
                onSelectionChange: n => {
                    null != e.onSelectionChange && e.onSelectionChange(n), t.close()
                }
            }),
            [o, s] = (0, a.useState)(!1);
        return {
            ...n,
            ...t,
            open() {
                0 !== n.collection.size && t.open()
            },
            toggle(e) {
                0 !== n.collection.size && t.toggle(e)
            },
            isFocused: o,
            setFocused: s
        }
    }
}