function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormContext: function() {
            return s
        },
        FormContextProvider: function() {
            return o
        },
        useFormContext: function() {
            return a
        }
    });
    var i = n("735250"),
        r = n("470079");
    let s = r.createContext({
        titleId: void 0,
        errorId: void 0,
        error: void 0
    });

    function a() {
        return r.useContext(s)
    }

    function o(e) {
        let {
            children: t,
            ...n
        } = e;
        return (0, i.jsx)(s.Provider, {
            value: n,
            children: t
        })
    }
}