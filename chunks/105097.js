function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return r
        }
    }), n("70102");
    var u = n("37983"),
        i = n("884691");

    function r() {
        let t = i.createContext(void 0);

        function e() {
            let e = i.useContext(t);
            if (null == e) throw Error("Context was used outside of defined provider.");
            return e
        }
        return [t, e, function() {
            let n = e();
            return function(e) {
                let {
                    children: i
                } = e;
                return (0, u.jsx)(t.Provider, {
                    value: n,
                    children: i
                })
            }
        }]
    }
}