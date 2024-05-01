function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppWindowContextProvider: function() {
            return T
        },
        MainWindowDispatch: function() {
            return u
        },
        getAppWindowContextValue: function() {
            return E
        },
        getCurrentlyInteractingAppContext: function() {
            return I
        },
        getWindowDispatchForElement: function() {
            return c
        },
        useAppContext: function() {
            return f
        },
        useWindowDispatch: function() {
            return S
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("585483"),
        a = n("830917"),
        o = n("919570"),
        l = n("981631");
    let u = new s.ComponentDispatcher,
        d = r.createContext({
            appContext: l.AppContext.APP,
            renderWindow: window,
            windowDispatch: u,
            windowId: (0, a.getMainWindowId)()
        }),
        _ = new Map;

    function c(e) {
        var t;
        let n = e.ownerDocument.defaultView;
        if (null == n) return;
        let i = (0, a.getWindowId)(n);
        return null === (t = _.get(i)) || void 0 === t ? void 0 : t.windowDispatch
    }

    function E(e) {
        return _.get(e)
    }

    function I() {
        let e = function() {
            var e;
            let t = (0, o.getCurrentlyInteractingWindowId)();
            return null == t ? null : null !== (e = _.get(t)) && void 0 !== e ? e : null
        }();
        return null != e ? e.appContext : null
    }

    function T(e) {
        let {
            appContext: t,
            renderWindow: n,
            children: r
        } = e, o = function(e, t) {
            let n = (0, a.getWindowId)(t),
                i = _.get(n);
            return null == i && (i = {
                appContext: e,
                renderWindow: t,
                windowDispatch: new s.ComponentDispatcher,
                windowId: n
            }, _.set(n, i), t.addEventListener("unload", () => {
                _.delete(n)
            })), i
        }(t, n);
        return (0, i.jsx)(d.Provider, {
            value: o,
            children: r
        })
    }

    function f() {
        return r.useContext(d).appContext
    }

    function S() {
        return r.useContext(d).windowDispatch
    }
    t.default = d
}