function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("411104");
    var i = n("735250"),
        r = n("470079");

    function a() {
        let e = r.createContext(void 0);

        function t() {
            let t = r.useContext(e);
            if (null == t) throw Error("Context was used outside of defined provider.");
            return t
        }
        return [e, t, function() {
            let n = t();
            return function(t) {
                let {
                    children: r
                } = t;
                return (0, i.jsx)(e.Provider, {
                    value: n,
                    children: r
                })
            }
        }]
    }
}