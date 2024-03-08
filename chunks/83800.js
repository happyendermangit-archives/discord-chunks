function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        HistoryUtils: function() {
            return s
        }
    }), n("222007"), n("424973");
    var i = n("385887");
    let l = new WeakMap,
        a = new WeakMap,
        s = {
            isMerging(e) {
                var t;
                return null === (t = a.get(e)) || void 0 === t || t
            },
            isSaving(e) {
                var t;
                return null === (t = l.get(e)) || void 0 === t || t
            },
            withoutMerging(e, t) {
                let n = this.isMerging(e);
                a.set(e, !1);
                try {
                    t()
                } finally {
                    a.set(e, n)
                }
            },
            withoutSaving(e, t) {
                let n = this.isSaving(e);
                l.set(e, !1);
                try {
                    t()
                } finally {
                    l.set(e, n)
                }
            },
            withSingleEntry: (e, t) => r(e, "other", !1, t),
            withMergedEntry: (e, t) => r(e, "other", !0, t),
            currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
            insertOrMergeEntry(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    i = s.currentEntry(e);
                s.isMerging(e) && (null == i ? void 0 : i.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
            },
            insertEntry(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                a = null != a ? a : e.selection, l = null != l ? l : i.EditorUtils.richValue(e);
                let {
                    history: r
                } = e, o = s.currentEntry(e);
                for (null != o && (o.mergeable = !1), r.stack.length > 0 && (r.stack.length = r.index + 1); r.stack.length >= 250;) r.stack.shift();
                r.stack.push({
                    type: t,
                    mergeable: n,
                    createdAt: Date.now(),
                    value: l,
                    selection: a
                }), r.index = r.stack.length - 1
            },
            mergeEntry(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        selection: n
                    } = e,
                    l = i.EditorUtils.richValue(e),
                    a = s.currentEntry(e);
                null != a && (a.value = l, a.selection = n, !t && (a.mergeable = !1))
            }
        };

    function r(e, t, n, a) {
        let r = e.children,
            o = e.selection,
            u = s.isSaving(e);
        l.set(e, !1);
        try {
            let l = a();
            return u && (n ? s.mergeEntry(e) : e.children !== r ? s.insertEntry(e, t, !1) : s.isMerging(e) && null != e.selection && (null == o || !i.RangeUtils.equals(e.selection, o)) && s.mergeEntry(e)), l
        } finally {
            l.set(e, u)
        }
    }
}