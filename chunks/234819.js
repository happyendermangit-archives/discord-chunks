function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return S
        }
    }), E("222007"), E("424973");
    var t = E("37983");
    E("884691");
    var o = E("446674"),
        n = E("77078"),
        r = E("313915"),
        a = E("603699"),
        i = E("697218"),
        I = E("983782"),
        T = E("843455"),
        s = E("619774");

    function S() {
        var e;
        let _ = (0, o.useStateFromStores)([r.default], () => r.default.isIdleStatusIndicatorEnabled),
            E = (0, o.useStateFromStores)([i.default], () => {
                var e, _;
                return null !== (_ = null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== _ && _
            }),
            [S, N] = (0, o.useStateFromStoresArray)([a.default], () => [a.default.isIdle(), a.default.isAFK()]),
            O = [];
        return !S && !N && O.push("ACTIVE"), S && O.push("IDLE"), N && O.push("AFK"), E && _ ? (0, t.jsx)(I.default, {
            children: (0, t.jsxs)("div", {
                className: s.container,
                children: [(0, t.jsxs)("div", {
                    className: s.status,
                    children: [(0, t.jsx)(n.Status, {
                        status: O.includes("ACTIVE") ? T.StatusTypes.ONLINE : T.StatusTypes.IDLE,
                        className: s.statusIndicator
                    }), (0, t.jsx)(n.Text, {
                        variant: "text-md/normal",
                        children: "IDLE STATUS:"
                    }), (0, t.jsx)("div", {
                        className: s.statusText,
                        children: (0, t.jsx)(n.Text, {
                            variant: "text-md/bold",
                            children: O.join(" + ")
                        })
                    })]
                }), S && (0, t.jsxs)(n.Text, {
                    variant: "text-md/normal",
                    children: ["Idle since:", " ", new Date(null !== (e = a.default.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
                        year: "numeric",
                        day: "numeric",
                        month: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    })]
                })]
            })
        }) : null
    }
}