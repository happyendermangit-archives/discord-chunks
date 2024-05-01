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
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        s = n("712364");
    let a = (e, t, n) => function(r) {
        return (0, i.jsx)(s.default, {
            handleSubmit: e,
            handleEarlyClose: t,
            ...n,
            ...r
        })
    };

    function o(e, t, n) {
        return (0, r.openModal)(a(e, t, n), {
            onCloseCallback: t
        })
    }

    function l(e, t, n, i) {
        return (0, r.updateModal)(e, a(t, n, i))
    }
}