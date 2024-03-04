function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeInput: function() {
            return l
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("774811"),
        a = n("859973"),
        o = n("574505");

    function l(e) {
        let {
            value: t,
            onChange: n,
            hideValue: l,
            disabled: u = !1
        } = e, d = s.useRef(null), c = s.useMemo(() => new a.TimeOptions, []), [f, _] = s.useState("");

        function h(e) {
            null != t && n((0, a.timeAtSpecificDay)(t, c.selectValue(e)))
        }
        return (0, i.jsx)(r.SearchableSelect, {
            ref: d,
            className: o.select,
            options: c.getOptions(f),
            value: l ? void 0 : c.lookupByValue(t),
            onChange: h,
            isDisabled: u,
            onSearchChange: _,
            onKeyDown: function(e) {
                if ("Enter" === e.key) {
                    let e = (0, a.convertToTimeOfADay)(t, f);
                    if (null != e) {
                        var n;
                        h(e), null === (n = d.current) || void 0 === n || n.close()
                    }
                }
            }
        })
    }
}