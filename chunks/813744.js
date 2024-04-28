function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("47120"), n("653041");
    var i = n("735250");
    n("470079");
    var r = n("442837"),
        s = n("481060"),
        a = n("857192"),
        o = n("517100"),
        l = n("594174"),
        u = n("153850"),
        d = n("231338"),
        _ = n("75798");

    function c() {
        var e;
        let t = (0, r.useStateFromStores)([a.default], () => a.default.isIdleStatusIndicatorEnabled),
            n = (0, r.useStateFromStores)([l.default], () => {
                var e, t;
                return null !== (t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== t && t
            }),
            [c, E] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isIdle(), o.default.isAFK()]),
            I = [];
        return !c && !E && I.push("ACTIVE"), c && I.push("IDLE"), E && I.push("AFK"), n && t ? (0, i.jsx)(u.default, {
            children: (0, i.jsxs)("div", {
                className: _.container,
                children: [(0, i.jsxs)("div", {
                    className: _.status,
                    children: [(0, i.jsx)(s.Status, {
                        status: I.includes("ACTIVE") ? d.StatusTypes.ONLINE : d.StatusTypes.IDLE,
                        className: _.statusIndicator
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-md/normal",
                        children: "IDLE STATUS:"
                    }), (0, i.jsx)("div", {
                        className: _.statusText,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/bold",
                            children: I.join(" + ")
                        })
                    })]
                }), c && (0, i.jsxs)(s.Text, {
                    variant: "text-md/normal",
                    children: ["Idle since:", " ", new Date(null !== (e = o.default.getIdleSince()) && void 0 !== e ? e : 0).toLocaleDateString(void 0, {
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