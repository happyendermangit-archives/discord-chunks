function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("898770"),
        s = n("758107");

    function l(e) {
        var t = e.onClick,
            n = e.children,
            o = e.tooltip,
            l = e.dangerous,
            c = void 0 !== l && l,
            f = e.className,
            d = e["aria-label"];
        return r.createElement(a.Tooltip, {
            text: o,
            hideOnClick: !0
        }, function(e) {
            var a = e.onMouseEnter,
                l = e.onMouseLeave,
                _ = e.onClick;
            return r.createElement(u.Button, {
                onMouseEnter: a,
                onMouseLeave: l,
                onClick: function(e) {
                    e.stopPropagation(), null == _ || _(), t(e)
                },
                dangerous: c,
                "aria-label": null != d ? d : o,
                className: f
            }, r.Children.map(n, function(e) {
                return r.isValidElement(e) ? r.cloneElement(e, {
                    className: i()(e.props.className, s.actionBarIcon)
                }) : e
            }))
        })
    }
}