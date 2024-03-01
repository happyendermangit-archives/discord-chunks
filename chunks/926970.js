function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        withReact: function() {
            return s
        }
    });
    var l = n("371621"),
        i = n("939563"),
        a = n("385887");
    let s = (e, t) => {
        let {
            addMark: n,
            removeMark: s,
            deleteBackward: r,
            deleteForward: o,
            setFragmentData: u,
            insertData: d,
            insertFragmentData: c,
            insertTextData: f
        } = e;
        return (e = (0, l.withReact)(e)).addMark = n, e.removeMark = s, e.setFragmentData = u, e.insertData = d, e.insertFragmentData = c, e.insertTextData = f, e.deleteBackward = n => {
            if ("line" !== n || t) r(n);
            else {
                let t = a.DOMUtils.getLineActionRange(e, !0);
                null != t && i.SlateTransforms.delete(e, {
                    at: t
                })
            }
        }, e.deleteForward = n => {
            if ("line" !== n || t) o(n);
            else {
                let t = a.DOMUtils.getLineActionRange(e, !1);
                null != t && i.SlateTransforms.delete(e, {
                    at: t
                })
            }
        }, e
    }
}