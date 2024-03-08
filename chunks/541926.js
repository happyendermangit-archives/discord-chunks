function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("970153"),
        l = n("939563"),
        a = n("385887");

    function s(e) {
        return e.setFragmentData = t => {
            if (null != e.selection) {
                let n = (0, i.toTextValue)(a.EditorUtils.richValue(e), {
                    mode: "plain",
                    range: e.selection,
                    preventEmojiSurrogates: !0
                });
                t.setData("text/plain", n)
            }
        }, e.insertData = t => {
            e.insertTextData(t)
        }, e.insertFragmentData = e => !1, e.insertTextData = t => {
            let n = t.getData("text/plain");
            return 0 !== n.length && (null != e.selection && a.RangeUtils.isExpanded(e.selection) && l.SlateTransforms.delete(e, {
                at: e.selection
            }), e.insertText(n), !0)
        }, e
    }
}