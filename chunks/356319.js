function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMenuTriggerState: function() {
            return o
        }
    }), n("222007");
    var r = n("561291"),
        i = n("884691");

    function o(e) {
        let t = (0, r.useOverlayTriggerState)(e),
            [n, o] = (0, i.useState)(null),
            [s, a] = (0, i.useState)([]),
            c = () => {
                a([]), t.close()
            };
        return {
            focusStrategy: n,
            ...t,
            open() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                o(e), t.open()
            },
            toggle() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                o(e), t.toggle()
            },
            close() {
                c()
            },
            UNSTABLE_expandedKeysStack: s,
            UNSTABLE_openSubmenu: (e, t) => {
                a(n => t > n.length ? n : [...n.slice(0, t), e])
            },
            UNSTABLE_closeSubmenu: (e, t) => {
                a(n => n[t] === e ? n.slice(0, t) : n)
            }
        }
    }
}