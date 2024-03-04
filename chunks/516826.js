function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormContext: function() {
            return r
        },
        useFormContext: function() {
            return a
        },
        FormContextProvider: function() {
            return o
        }
    });
    var i = n("37983"),
        s = n("884691");
    let r = s.createContext({
        titleId: void 0,
        errorId: void 0,
        error: void 0
    });

    function a() {
        return s.useContext(r)
    }

    function o(e) {
        let {
            children: t,
            ...n
        } = e;
        return (0, i.jsx)(r.Provider, {
            value: n,
            children: t
        })
    }
}