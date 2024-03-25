function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("37983");
    n("884691");
    var s = n("77078");
    async function l(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        await (0, s.openModalLazy)(async () => {
            let {
                default: s
            } = await n.el("892845").then(n.bind(n, "892845"));
            return n => (0, i.jsx)(s, {
                source: e,
                oneClickFlow: t,
                ...n
            })
        })
    }
}