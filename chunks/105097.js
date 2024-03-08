function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return r
        }
    }), n("70102");
    var i = n("37983"),
        u = n("884691");

    function r() {
        let t = u.createContext(void 0);

        function e() {
            let e = u.useContext(t);
            if (null == e) throw Error("Context was used outside of defined provider.");
            return e
        }
        return [t, e, function() {
            let n = e();
            return function(e) {
                let {
                    children: u
                } = e;
                return (0, i.jsx)(t.Provider, {
                    value: n,
                    children: u
                })
            }
        }]
    }
}