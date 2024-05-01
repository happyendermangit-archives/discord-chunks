function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    }), n("789020");
    var i = n("735250"),
        r = n("470079"),
        a = n("865427"),
        s = n("853425"),
        o = n("830121");
    let l = RegExp("^" + o.DEVLINK_REGEX.source, o.DEVLINK_REGEX.flags);

    function u(e) {
        return {
            match: (e, t) => t.allowLinks && t.allowDevLinks ? l.exec(e) : null,
            parse: (e, t) => ({
                target: e,
                type: "devLink"
            }),
            react: (e, t, n) => {
                let o = e.target[0];
                return (0, a.isManualBuildOverrideLink)(o) ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("span", {
                        children: o
                    }), (0, i.jsx)(r.Fragment, {
                        children: (0, i.jsx)(s.default, {
                            url: o
                        }, o)
                    }, n.key)]
                }) : (0, i.jsx)("span", {
                    children: o
                })
            },
            order: 6
        }
    }
}