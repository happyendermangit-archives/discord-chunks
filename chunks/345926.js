function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMenuTriggerState: function() {
            return a
        }
    });
    var r = n("99047"),
        i = n("470079");

    function a(e) {
        let t = (0, r.useOverlayTriggerState)(e),
            [n, a] = (0, i.useState)(null),
            [o, s] = (0, i.useState)([]),
            u = () => {
                s([]), t.close()
            };
        return {
            focusStrategy: n,
            ...t,
            open(e = null) {
                a(e), t.open()
            },
            toggle(e = null) {
                a(e), t.toggle()
            },
            close() {
                u()
            },
            UNSTABLE_expandedKeysStack: o,
            UNSTABLE_openSubmenu: (e, t) => {
                s(n => t > n.length ? n : [...n.slice(0, t), e])
            },
            UNSTABLE_closeSubmenu: (e, t) => {
                s(n => n[t] === e ? n.slice(0, t) : n)
            }
        }
    }
}