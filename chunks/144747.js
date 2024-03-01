function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("446674"),
        r = n("913144"),
        s = n("659500"),
        a = n("49111");
    let o = null,
        l = 0;

    function u() {
        o = null
    }
    class c extends i.default.Store {
        isOpen() {
            return null != o
        }
        get version() {
            return l
        }
        getContextMenu() {
            return o
        }
        close() {
            return !!this.isOpen() && (s.ComponentDispatch.dispatch(a.ComponentActions.CONTEXT_MENU_CLOSE), !0)
        }
    }
    c.displayName = "ContextMenuStore";
    var d = new c(r.default, {
        CONTEXT_MENU_OPEN: function(e) {
            let {
                contextMenu: t
            } = e;
            l++, o = t
        },
        LAYER_PUSH: u,
        CONTEXT_MENU_CLOSE: u,
        OVERLAY_SET_UI_LOCKED: u,
        OVERLAY_DEACTIVATE_ALL_REGIONS: u
    })
}