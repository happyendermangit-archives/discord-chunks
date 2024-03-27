function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250");
    n("470079");
    var r = n("481060");
    async function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        await (0, r.openModalLazy)(async () => {
            let {
                default: r
            } = await Promise.all([n.e("99387"), n.e("85342"), n.e("83774")]).then(n.bind(n, "193049"));
            return n => (0, i.jsx)(r, {
                source: e,
                oneClickFlow: t,
                ...n
            })
        })
    }
}