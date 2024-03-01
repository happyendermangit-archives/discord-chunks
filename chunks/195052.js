function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("95410"),
        r = n("77078"),
        a = n("773336"),
        o = {
            show(e) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("745705").then(n.bind(n, "745705"));
                    return n => (0, s.jsx)(t, {
                        ...n,
                        url: e
                    })
                })
            },
            getBlockedDomains() {
                if ((0, a.isDesktop)()) {
                    let e = i.default.get("BlockedDomainsV2");
                    return Promise.resolve(null == e ? [] : e.split("\n"))
                }
                return Promise.resolve([])
            },
            saveBlockedDomains(e) {
                (0, a.isDesktop)() && i.default.set("BlockedDomainsV2", e.join("\n"))
            }
        }
}