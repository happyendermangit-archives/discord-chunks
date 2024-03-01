function(e, t, r) {
    "use strict";
    async function n(e, t) {
        let [{
            relottie: n
        }, {
            default: i
        }] = await Promise.all([r.el("37216").then(r.bind(r, "37216")), r.el("745191").then(r.bind(r, "745191"))]);
        return JSON.parse((await n().use(i, {
            lss: t
        }).process(JSON.stringify(e))).value)
    }
    r.r(t), r.d(t, {
        a: function() {
            return n
        }
    }), r("222007")
}