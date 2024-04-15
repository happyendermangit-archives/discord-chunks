function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SegmentedControl: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("1561"),
        l = n("993365"),
        u = n("264049");

    function d(e) {
        let {
            option: t,
            selected: n,
            onClick: s,
            look: d,
            className: _,
            selectedClassName: c
        } = e, E = {
            [function(e) {
                switch (e) {
                    case "tab":
                    default:
                        return u.tabItemSelected;
                    case "pill":
                        return u.pillItemSelected
                }
            }(d)]: n
        };
        null != c && (E[c] = n);
        let I = r.useCallback(e => s(t, e), [s, t]);
        return (0, i.jsx)(o.Clickable, {
            className: a()(function(e) {
                switch (e) {
                    case "tab":
                    default:
                        return u.tabItem;
                    case "pill":
                        return u.pillItem
                }
            }(d), _, E),
            onClick: I,
            children: (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "none",
                children: t.name
            })
        })
    }

    function _(e) {
        let {
            options: t,
            value: n,
            onChange: s,
            look: o = "tab",
            className: l,
            optionClassName: _,
            selectedOptionClassName: c
        } = e, E = r.useCallback(e => {
            var t;
            let r = n === e.value;
            return (0, i.jsx)(d, {
                selected: r,
                option: e,
                look: o,
                onClick: s,
                className: _,
                selectedClassName: c
            }, null !== (t = e.key) && void 0 !== t ? t : String(e.value))
        }, [n, o, s, _, c]);
        return (0, i.jsx)("div", {
            className: a()(function(e) {
                switch (e) {
                    case "tab":
                    default:
                        return u.tabContainer;
                    case "pill":
                        return u.pillContainer
                }
            }(o), l),
            children: t.map(E)
        })
    }
}