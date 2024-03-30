function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o() {
        var e = r.createContext(void 0);

        function t() {
            var t = r.useContext(e);
            if (null == t) throw Error("Context was used outside of defined provider.");
            return t
        }
        return [e, t, function() {
            var n = t();
            return function(t) {
                var o = t.children;
                return r.createElement(e.Provider, {
                    value: n
                }, o)
            }
        }]
    }
}