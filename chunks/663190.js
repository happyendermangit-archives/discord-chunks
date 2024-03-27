function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("83800"),
        l = n("385887");

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
            let l = i.HistoryUtils.currentEntry(e);
            if (null != l && (l.mergeable = !1), n >= e.history.stack.length) return;
            e.history.index = n;
            let a = i.HistoryUtils.currentEntry(e);
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
            0 === t.stack.length && (t.stack = [s(e)], t.index = 0), null != e.selection && (i.HistoryUtils.currentEntry(e).selection = e.selection), p = null, c()
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
            let r = l.EditorUtils.richValue(e);
            r !== h && (0 === a.stack.length && (a.stack = [s(e)], a.index = 0), i.HistoryUtils.isSaving(e) && (function(e, t, n) {
                let l;
                let {
                    selection: a
                } = e, s = i.HistoryUtils.currentEntry(e), r = !0, o = !0;
                if ("insert_text" === t.type && 1 === t.text.length ? (l = "insert", o = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? l = "insert" : "remove_text" === t.type && 1 === t.text.length ? l = "delete" : (l = "other", r = !1, o = !1), "set_selection" === t.type && null != s) {
                    s.selection = a;
                    return
                }
                r && function(e, t) {
                    return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
                }(s, l) ? i.HistoryUtils.insertOrMergeEntry(e, l, o) : i.HistoryUtils.insertEntry(e, l, o)
            }(e, t, m), m = t), p = t, h = r)
        }, e.deleteBackward = t => {
            i.HistoryUtils.withSingleEntry(e, () => a(t))
        }, e.deleteForward = t => {
            i.HistoryUtils.withSingleEntry(e, () => r(t))
        }, e.deleteFragment = t => {
            i.HistoryUtils.withSingleEntry(e, () => o(t))
        }, e.insertText = t => {
            1 === t.length && (null == p ? void 0 : p.type) === "remove_text" ? i.HistoryUtils.withMergedEntry(e, () => d(t)) : null != e.selection && l.RangeUtils.isExpanded(e.selection) ? i.HistoryUtils.withSingleEntry(e, () => d(t)) : d(t)
        }, e.insertData = t => {
            (null == p ? void 0 : p.type) === "remove_text" ? i.HistoryUtils.withMergedEntry(e, () => u(t)): i.HistoryUtils.withSingleEntry(e, () => u(t))
        }, e
    }

    function s(e) {
        return {
            type: "other",
            mergeable: !1,
            createdAt: Date.now(),
            value: l.EditorUtils.richValue(e),
            selection: e.selection
        }
    }
}