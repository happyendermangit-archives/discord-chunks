function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("53529"),
        r = n("436660"),
        a = n("887490");
    let s = ["applicationCommand"];

    function o(e) {
        let {
            insertBreak: t,
            insertText: n
        } = e;
        return e.insertBreak = () => {
            l(e) && t()
        }, e.insertSoftBreak = () => {
            e.insertBreak()
        }, e.insertText = t => {
            if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                n(t);
                return
            }
            let a = t.split(/\r\n|\r|\n/);
            if (!l(e)) {
                n(a.join(" "));
                return
            }
            i.HistoryUtils.withSingleEntry(e, () => {
                let t = !1;
                for (let i of a) t && r.SlateTransforms.splitNodes(e, {
                    always: !0
                }), n(i), t = !0
            })
        }, e
    }

    function l(e) {
        let t = a.EditorUtils.getCurrentBlock(e);
        return null != t && !s.includes(t[0].type)
    }
}