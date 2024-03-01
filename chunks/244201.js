function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        MainWindowDispatch: function() {
            return I
        },
        getWindowDispatchForElement: function() {
            return S
        },
        getAppWindowContextValue: function() {
            return N
        },
        getCurrentlyInteractingAppContext: function() {
            return O
        },
        AppWindowContextProvider: function() {
            return A
        },
        useAppContext: function() {
            return R
        },
        useWindowDispatch: function() {
            return l
        },
        default: function() {
            return u
        }
    }), E("222007");
    var t = E("37983"),
        o = E("884691"),
        n = E("659500"),
        r = E("816454"),
        i = E("421804"),
        a = E("49111");
    let I = new n.ComponentDispatcher,
        s = o.createContext({
            appContext: a.AppContext.APP,
            renderWindow: window,
            windowDispatch: I,
            windowId: (0, r.getMainWindowId)()
        }),
        T = new Map;

    function S(e) {
        var _;
        let E = e.ownerDocument.defaultView;
        if (null == E) return;
        let t = (0, r.getWindowId)(E);
        return null === (_ = T.get(t)) || void 0 === _ ? void 0 : _.windowDispatch
    }

    function N(e) {
        return T.get(e)
    }

    function O() {
        let e = function() {
            var e;
            let _ = (0, i.getCurrentlyInteractingWindowId)();
            return null == _ ? null : null !== (e = T.get(_)) && void 0 !== e ? e : null
        }();
        return null != e ? e.appContext : null
    }

    function A(e) {
        let {
            appContext: _,
            renderWindow: E,
            children: o
        } = e, i = function(e, _) {
            let E = (0, r.getWindowId)(_),
                t = T.get(E);
            if (null == t) {
                let o = new n.ComponentDispatcher;
                t = {
                    appContext: e,
                    renderWindow: _,
                    windowDispatch: o,
                    windowId: E
                }, T.set(E, t), _.addEventListener("unload", () => {
                    T.delete(E)
                })
            }
            return t
        }(_, E);
        return (0, t.jsx)(s.Provider, {
            value: i,
            children: o
        })
    }

    function R() {
        return o.useContext(s).appContext
    }

    function l() {
        return o.useContext(s).windowDispatch
    }
    var u = s
}