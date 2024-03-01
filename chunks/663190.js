function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("83800"),
        i = n("385887");

    function a(e, t) {
        let {
            apply: n,
            deleteBackward: a,
            deleteForward: r,
            deleteFragment: o,
            insertData: u,
            insertText: d,
            onChange: c
        } = e;

        function f(n) {
            let i = l.HistoryUtils.currentEntry(e);
            if (null != i && (i.mergeable = !1), n >= e.history.stack.length) return;
            e.history.index = n;
            let a = l.HistoryUtils.currentEntry(e);
            t({
                newValue: a.value,
                newSelection: a.selection
            })
        }
        e.history = {
            index: 0,
            stack: []
        }, e.onChange = () => {
            let {
                history: t
            } = e;
            0 === t.stack.length && (t.stack = [s(e)], t.index = 0), null != e.selection && (l.HistoryUtils.currentEntry(e).selection = e.selection), p = null, c()
        }, e.undo = () => {
            e.history.index > 0 && f(e.history.index - 1)
        }, e.redo = () => {
            e.history.index < e.history.stack.length - 1 && f(e.history.index + 1)
        };
        let m = null,
            p = null,
            h = null;
        return e.apply = t => {
            let {
                history: a
            } = e;
            n(t);
            let r = i.EditorUtils.richValue(e);
            r !== h && (0 === a.stack.length && (a.stack = [s(e)], a.index = 0), l.HistoryUtils.isSaving(e) && (function(e, t, n) {
                let i;
                let {
                    selection: a
                } = e, s = l.HistoryUtils.currentEntry(e), r = !0, o = !0;
                if ("insert_text" === t.type && 1 === t.text.length ? (i = "insert", o = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", r = !1, o = !1), "set_selection" === t.type && null != s) {
                    s.selection = a;
                    return
                }
                r && function(e, t) {
                    return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
                }(s, i) ? l.HistoryUtils.insertOrMergeEntry(e, i, o) : l.HistoryUtils.insertEntry(e, i, o)
            }(e, t, m), m = t), p = t, h = r)
        }, e.deleteBackward = t => {
            l.HistoryUtils.withSingleEntry(e, () => a(t))
        }, e.deleteForward = t => {
            l.HistoryUtils.withSingleEntry(e, () => r(t))
        }, e.deleteFragment = t => {
            l.HistoryUtils.withSingleEntry(e, () => o(t))
        }, e.insertText = t => {
            1 === t.length && (null == p ? void 0 : p.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => d(t)) : null != e.selection && i.RangeUtils.isExpanded(e.selection) ? l.HistoryUtils.withSingleEntry(e, () => d(t)) : d(t)
        }, e.insertData = t => {
            (null == p ? void 0 : p.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => u(t)): l.HistoryUtils.withSingleEntry(e, () => u(t))
        }, e
    }

    function s(e) {
        return {
            type: "other",
            mergeable: !1,
            createdAt: Date.now(),
            value: i.EditorUtils.richValue(e),
            selection: e.selection
        }
    }
}