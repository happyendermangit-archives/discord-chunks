function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var i = n("884691"),
        l = n("721698"),
        a = n("718517"),
        s = n("482626");

    function r(e) {
        let {
            sectionId: t,
            commandsByActiveSection: n
        } = e, [r, o] = i.useState(s.CommandListSortOrder.ALPHABETICAL), u = i.useMemo(() => {
            var e, i;
            return null !== (i = null === (e = n.find(e => e.section.id === t)) || void 0 === e ? void 0 : e.data) && void 0 !== i ? i : []
        }, [n, t]), {
            popularSortedCommands: d,
            canSort: c
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
            l.getApplication(t, {
                dontRefetchMs: a.default.Millis.DAY
            })
        }, [t]), i.useEffect(() => {
            c && o(s.CommandListSortOrder.POPULAR)
        }, [c]);
        let f = u;
        switch (r) {
            case s.CommandListSortOrder.POPULAR:
                f = d;
                break;
            case s.CommandListSortOrder.ALPHABETICAL:
                f = u
        }
        return {
            sortOrder: r,
            setSortOrder: o,
            commands: f,
            canSort: c
        }
    }
}