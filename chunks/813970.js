function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AppWindowContextProvider: function() {
            return E
        },
        MainWindowDispatch: function() {
            return s
        },
        getAppWindowContextValue: function() {
            return d
        },
        getCurrentlyInteractingAppContext: function() {
            return _
        },
        getWindowDispatchForElement: function() {
            return f
        },
        useAppContext: function() {
            return p
        },
        useWindowDispatch: function() {
            return m
        }
    });
    var r = n("470079"),
        o = n("120447"),
        i = n("502752"),
        a = n("436993"),
        u = n("281767"),
        s = new o.ComponentDispatcher,
        l = r.createContext({
            appContext: u.AppContext.APP,
            renderWindow: window,
            windowDispatch: s,
            windowId: (0, i.getMainWindowId)()
        }),
        c = new Map;

    function f(e) {
        var t, n = e.ownerDocument.defaultView;
        if (null != n) {
            var r = (0, i.getWindowId)(n);
            return null === (t = c.get(r)) || void 0 === t ? void 0 : t.windowDispatch
        }
    }

    function d(e) {
        return c.get(e)
    }

    function _() {
        var e, t, n = null == (t = (0, a.getCurrentlyInteractingWindowId)()) ? null : null !== (e = c.get(t)) && void 0 !== e ? e : null;
        return null != n ? n.appContext : null
    }

    function E(e) {
        var t, n, a, u, s = e.appContext,
            f = e.renderWindow,
            d = e.children;
        var _ = (t = s, n = f, a = (0, i.getWindowId)(n), null == (u = c.get(a)) && (u = {
            appContext: t,
            renderWindow: n,
            windowDispatch: new o.ComponentDispatcher,
            windowId: a
        }, c.set(a, u), n.addEventListener("unload", function() {
            c.delete(a)
        })), u);
        return r.createElement(l.Provider, {
            value: _
        }, d)
    }

    function p() {
        return r.useContext(l).appContext
    }

    function m() {
        return r.useContext(l).windowDispatch
    }
    t.default = l
}