function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        showModal: function() {
            return o
        },
        updateModalProps: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("551042"),
        r = n("920636");
    let a = (e, t, n) => function(s) {
        return (0, i.jsx)(r.default, {
            handleSubmit: e,
            handleEarlyClose: t,
            ...n,
            ...s
        })
    };

    function o(e, t, n) {
        return (0, s.openModal)(a(e, t, n), {
            onCloseCallback: t
        })
    }

    function l(e, t, n, i) {
        return (0, s.updateModal)(e, a(t, n, i))
    }
}