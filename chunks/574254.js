function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("585483"),
        d = n("981631");
    let _ = null,
        c = 0;

    function E() {
        _ = null
    }
    class I extends(s = o.default.Store) {
        isOpen() {
            return null != _
        }
        get version() {
            return c
        }
        getContextMenu() {
            return _
        }
        close() {
            return !!this.isOpen() && (u.ComponentDispatch.dispatch(d.ComponentActions.CONTEXT_MENU_CLOSE), !0)
        }
    }
    a = "ContextMenuStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new I(l.default, {
        CONTEXT_MENU_OPEN: function(e) {
            let {
                contextMenu: t
            } = e;
            c++, _ = t
        },
        LAYER_PUSH: E,
        CONTEXT_MENU_CLOSE: E,
        OVERLAY_SET_UI_LOCKED: E,
        OVERLAY_DEACTIVATE_ALL_REGIONS: E
    })
}