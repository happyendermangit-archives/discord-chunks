function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openClaimAccountModal: function() {
            return l
        },
        openNewUserAgeGateModal: function() {
            return o
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("952265"),
        a = n("723359"),
        s = n("231338");

    function o(e) {
        (0, r.openModalLazy)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("20727")]).then(n.bind(n, "298237"));
            return t => (0, i.jsx)(e, {
                ...t
            })
        }, {
            modalKey: a.NEW_USER_AGE_GATE_MODAL_KEY,
            onCloseRequest: s.NOOP,
            onCloseCallback: e
        })
    }

    function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, r.openModalLazy)(async () => {
            let {
                default: t
            } = await Promise.all([n.e("99387"), n.e("69495")]).then(n.bind(n, "324239"));
            return n => (0, i.jsx)(t, {
                claimRequired: e,
                ...n
            })
        }, {
            onCloseRequest: e ? s.NOOP : null,
            onCloseCallback: t
        })
    }
}