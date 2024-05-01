function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("993365"),
        o = n("481060"),
        l = n("826298"),
        u = n("240991"),
        d = n("499254"),
        _ = n("541099"),
        c = n("930582");

    function E(e) {
        var t;
        let {
            channel: n,
            applicationSection: E
        } = e, I = (0, l.getIconComponent)(E), T = r.useMemo(() => {
            var e, t;
            return (0, u.parseBioReactWithoutScrolling)(null !== (t = null === (e = E.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
        }, [null === (t = E.application) || void 0 === t ? void 0 : t.description]), f = (0, a.useStateFromStores)([_.default], () => _.default.getCurrentAppDetail()), S = r.useCallback(e => {
            e.stopPropagation(), (null == f ? void 0 : f.id) === E.id ? d.dismissAppDetail() : d.showAppDetail(E)
        }, [E, f]);
        return (0, i.jsxs)("li", {
            className: c.application,
            onClick: S,
            children: [(0, i.jsx)(I, {
                className: c.applicationIcon,
                channel: n,
                section: E,
                width: 32,
                height: 32
            }), (0, i.jsxs)("div", {
                className: c.applicationDetails,
                children: [(0, i.jsx)(o.Heading, {
                    variant: "heading-md/medium",
                    children: E.name
                }), (0, i.jsx)(s.Text, {
                    className: c.applicationDescription,
                    variant: "text-xs/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: T
                })]
            })]
        })
    }

    function I(e) {
        let {
            channel: t,
            applications: n
        } = e, a = n.slice(0, 50), o = r.useMemo(() => a.map(e => (0, i.jsx)(E, {
            channel: t,
            applicationSection: e
        }, e.id)), [t, a]);
        return 0 === a.length ? null : (0, i.jsxs)("div", {
            children: [(0, i.jsx)(s.Text, {
                className: c.listHeading,
                variant: "text-sm/semibold",
                children: "Server Apps"
            }), (0, i.jsx)("ul", {
                className: c.applicationList,
                children: o
            })]
        })
    }
}