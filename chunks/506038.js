function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var i = n("83800"),
        l = n("939563"),
        a = n("385887");
    let s = ["applicationCommand"];

    function r(e) {
        let {
            insertBreak: t,
            insertText: n
        } = e;
        return e.insertBreak = () => {
            o(e) && t()
        }, e.insertSoftBreak = () => {
            e.insertBreak()
        }, e.insertText = t => {
            if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                n(t);
                return
            }
            let a = t.split(/\r\n|\r|\n/);
            if (!o(e)) {
                n(a.join(" "));
                return
            }
            i.HistoryUtils.withSingleEntry(e, () => {
                let t = !1;
                for (let i of a) t && l.SlateTransforms.splitNodes(e, {
                    always: !0
                }), n(i), t = !0
            })
        }, e
    }

    function o(e) {
        let t = a.EditorUtils.getCurrentBlock(e);
        return null != t && !s.includes(t[0].type)
    }
}