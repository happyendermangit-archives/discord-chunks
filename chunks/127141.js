function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("222875"),
        i = n("143953"),
        a = n("584506");

    function u(e) {
        var t = e.mainText,
            n = e.supportingText,
            u = e.children,
            s = e.size;
        return r.createElement(i.default, {
            className: a.root,
            justify: i.default.Justify.CENTER,
            align: i.default.Align.CENTER,
            direction: i.default.Direction.VERTICAL
        }, r.createElement(o.default, {
            header: t,
            description: n,
            size: s
        }), u)
    }
}