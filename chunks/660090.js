function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("47120");
    var i = n("470079"),
        r = n("674588"),
        s = n("70956"),
        a = n("314734");

    function o(e) {
        let {
            sectionId: t,
            commandsByActiveSection: n
        } = e, [o, l] = i.useState(a.CommandListSortOrder.ALPHABETICAL), u = i.useMemo(() => {
            var e, i;
            return null !== (i = null === (e = n.find(e => e.section.id === t)) || void 0 === e ? void 0 : e.data) && void 0 !== i ? i : []
        }, [n, t]), {
            popularSortedCommands: d,
            canSort: _
        } = function(e) {
            let {
                alphabeticalSortedCommands: t
            } = e;
            return i.useMemo(() => {
                if (t.length <= 1) return {
                    popularSortedCommands: t,
                    canSort: !1
                };
                let e = !1,
                    n = t.map((t, n) => (e = e || null != t.global_popularity_rank, {
                        command: t,
                        alphabeticalSortIndex: n
                    }));
                return e ? (n.sort((e, t) => {
                    let n = e.command.global_popularity_rank,
                        i = t.command.global_popularity_rank;
                    if (null != n && null != i) {
                        if (n !== i) return n - i
                    } else if (null != n) return -1;
                    else if (null != i) return 1;
                    return e.alphabeticalSortIndex - t.alphabeticalSortIndex
                }), {
                    popularSortedCommands: n.map(e => {
                        let {
                            command: t
                        } = e;
                        return t
                    }),
                    canSort: !0
                }) : {
                    popularSortedCommands: t,
                    canSort: !1
                }
            }, [t])
        }({
            alphabeticalSortedCommands: u
        });
        i.useEffect(() => {
            r.getApplication(t, {
                dontRefetchMs: s.default.Millis.DAY
            })
        }, [t]), i.useEffect(() => {
            _ && l(a.CommandListSortOrder.POPULAR)
        }, [_]);
        let c = u;
        switch (o) {
            case a.CommandListSortOrder.POPULAR:
                c = d;
                break;
            case a.CommandListSortOrder.ALPHABETICAL:
                c = u
        }
        return {
            sortOrder: o,
            setSortOrder: l,
            commands: c,
            canSort: _
        }
    }
}