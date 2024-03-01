function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showModal: function() {
            return o
        },
        updateModalProps: function() {
            return d
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("551042"),
        r = n("920636");
    let a = (e, t, n) => function(i) {
        return (0, s.jsx)(r.default, {
            handleSubmit: e,
            handleEarlyClose: t,
            ...n,
            ...i
        })
    };

    function o(e, t, n) {
        return (0, i.openModal)(a(e, t, n), {
            onCloseCallback: t
        })
    }

    function d(e, t, n, s) {
        return (0, i.updateModal)(e, a(t, n, s))
    }
}