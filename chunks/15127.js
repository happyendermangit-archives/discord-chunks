function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormContext: function() {
            return a
        },
        FormContextProvider: function() {
            return o
        },
        useFormContext: function() {
            return s
        }
    });
    var i = n("735250"),
        r = n("470079");
    let a = r.createContext({
        titleId: void 0,
        errorId: void 0,
        error: void 0
    });

    function s() {
        return r.useContext(a)
    }

    function o(e) {
        let {
            children: t,
            ...n
        } = e;
        return (0, i.jsx)(a.Provider, {
            value: n,
            children: t
        })
    }
}