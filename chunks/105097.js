function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return u
        }
    }), n("70102");
    var i = n("37983"),
        r = n("884691");

    function u() {
        let t = r.createContext(void 0);

        function e() {
            let e = r.useContext(t);
            if (null == e) throw Error("Context was used outside of defined provider.");
            return e
        }
        return [t, e, function() {
            let n = e();
            return function(e) {
                let {
                    children: r
                } = e;
                return (0, i.jsx)(t.Provider, {
                    value: n,
                    children: r
                })
            }
        }]
    }
}