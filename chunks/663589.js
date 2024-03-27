function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Manager: function() {
            return o
        },
        ManagerReferenceNodeContext: function() {
            return i
        },
        ManagerReferenceNodeSetterContext: function() {
            return a
        }
    });
    var r = n("470079"),
        i = r.createContext(),
        a = r.createContext();

    function o(e) {
        var t = e.children,
            n = r.useState(null),
            o = n[0],
            s = n[1],
            u = r.useRef(!1);
        r.useEffect(function() {
            return function() {
                u.current = !0
            }
        }, []);
        var c = r.useCallback(function(e) {
            !u.current && s(e)
        }, []);
        return r.createElement(i.Provider, {
            value: o
        }, r.createElement(a.Provider, {
            value: c
        }, t))
    }
}