function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useTabListState: function() {
            return a
        }
    });
    var r = n("470079"),
        i = n("913122");

    function a(e) {
        var t;
        let n = (0, i.useSingleSelectListState)({
                ...e,
                suppressTextValueWarning: !0,
                defaultSelectedKey: null !== (t = e.defaultSelectedKey) && void 0 !== t ? t : o(e.collection, e.disabledKeys ? new Set(e.disabledKeys) : new Set)
            }),
            {
                selectionManager: a,
                collection: s,
                selectedKey: u
            } = n,
            c = (0, r.useRef)(u);
        return (0, r.useEffect)(() => {
            let e = u;
            (a.isEmpty || !s.getItem(e)) && null != (e = o(s, n.disabledKeys)) && a.setSelectedKeys([e]), (null != e && null == a.focusedKey || !a.isFocused && e !== c.current) && a.setFocusedKey(e), c.current = e
        }), {
            ...n,
            isDisabled: e.isDisabled || !1
        }
    }

    function o(e, t) {
        let n = null;
        if (e) {
            for (n = e.getFirstKey(); t.has(n) && n !== e.getLastKey();) n = e.getKeyAfter(n);
            t.has(n) && n === e.getLastKey() && (n = e.getFirstKey())
        }
        return n
    }
}