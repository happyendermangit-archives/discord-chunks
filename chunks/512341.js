function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FormContext: function() {
            return o
        },
        FormContextProvider: function() {
            return a
        },
        useFormContext: function() {
            return i
        }
    });
    var r = n("470079"),
        o = r.createContext({
            titleId: void 0,
            errorId: void 0,
            error: void 0
        });

    function i() {
        return r.useContext(o)
    }

    function a(e) {
        var t = e.children,
            n = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["children"]);
        return r.createElement(o.Provider, {
            value: n
        }, t)
    }
}