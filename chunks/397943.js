function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        TimeInput: function() {
            return l
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("921349"),
        s = n("563040"),
        o = n("959083");

    function l(e) {
        let {
            value: t,
            onChange: n,
            hideValue: l,
            disabled: u = !1
        } = e, d = r.useRef(null), _ = r.useMemo(() => new s.TimeOptions, []), [c, E] = r.useState("");

        function I(e) {
            null != t && n((0, s.timeAtSpecificDay)(t, _.selectValue(e)))
        }
        return (0, i.jsx)(a.SearchableSelect, {
            ref: d,
            className: o.select,
            options: _.getOptions(c),
            value: l ? void 0 : _.lookupByValue(t),
            onChange: I,
            isDisabled: u,
            onSearchChange: E,
            onKeyDown: function(e) {
                if ("Enter" === e.key) {
                    let e = (0, s.convertToTimeOfADay)(t, c);
                    if (null != e) {
                        var n;
                        I(e), null === (n = d.current) || void 0 === n || n.close()
                    }
                }
            }
        })
    }
}