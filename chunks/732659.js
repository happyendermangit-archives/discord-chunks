function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("470079"),
        r = n("136035"),
        s = n("887490");

    function a(e, t, n) {
        i.useEffect(() => {
            let i = r.ReactEditor.findDocumentOrShadowRoot(e).defaultView;
            if ((null == i ? void 0 : i.ResizeObserver) == null) return;
            let a = s.EditorUtils.toDOMNode(e, e),
                o = a.offsetHeight,
                l = new i.ResizeObserver(() => {
                    let i = s.EditorUtils.toDOMNode(e, e).offsetHeight;
                    o !== i && (null != t.current && (t.current.style.height = "".concat(i, "px")), o = i, null == n || n(i))
                });
            return l.observe(a), () => l.disconnect()
        }, [t, e, n])
    }
}