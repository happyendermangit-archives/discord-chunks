function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        },
        useVirtualizedAnchor: function() {
            return u
        }
    }), n("70102"), n("222007");
    var i = n("884691"),
        r = n("898497"),
        o = n("330499"),
        s = n("382336");
    let l = Object.freeze({
        spacerTop: 0,
        totalHeight: 0,
        items: [],
        isSidebarVisible: !1
    });

    function a(e) {
        let {
            sections: t,
            sectionHeight: n,
            rowHeight: a,
            footerHeight: u,
            sidebarHeight: c,
            listHeaderHeight: d,
            chunkSize: _ = 256,
            paddingTop: f = 0,
            paddingBottom: E = 0,
            getScrollerState: S,
            getAnchorId: g
        } = e, m = (0, o.default)(), h = (0, i.useRef)(l), [p] = (0, i.useState)(() => new r.default), {
            dirty: I,
            chunkStart: T,
            chunkEnd: v,
            forceUpdateOnChunkChange: A
        } = (0, s.default)({
            chunkSize: _,
            getScrollerState: S,
            forceUpdate: m
        }), {
            items: N
        } = h.current, C = null, {
            scrollTop: R
        } = S();
        for (let e of N) {
            if (0 === R) break;
            if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
            let t = "row" === e.type ? e.row : void 0;
            if (e.offsetTop >= R) {
                C = {
                    id: e.anchorId,
                    section: e.section,
                    row: t,
                    scrollOffset: e.offsetTop - R
                };
                break
            }
        }
        let O = (0, i.useMemo)(() => {
                let e = Math.max(0, T * _);
                return null != c && e < c
            }, [_, T, c]),
            L = (0, i.useMemo)(() => I > 0 ? h.current : (p.mergeProps({
                sectionHeight: n,
                rowHeight: a,
                footerHeight: u,
                listHeaderHeight: d,
                paddingBottom: E,
                paddingTop: f,
                sections: t,
                getAnchorId: g
            }), p.compute(Math.max(0, T * _), v * _)), [I, T, v, n, a, u, d, E, f, t, p, _, g]);
        return (0, i.useLayoutEffect)(() => void(h.current = L)), {
            ...L,
            listComputer: p,
            forceUpdateOnChunkChange: A,
            anchor: C,
            isSidebarVisible: O
        }
    }

    function u(e) {
        let {
            scrollerRef: t,
            anchor: n,
            getScrollerState: r,
            listComputer: o,
            getAnchorId: s,
            totalHeight: l
        } = e;
        (0, i.useLayoutEffect)(() => {
            let {
                current: e
            } = t, {
                scrollTop: i
            } = r();
            if (null == n || null == n.row || null == e || null == s || 0 === i) return;
            let l = t => {
                if (t < 0 || t >= o.sections[n.section]) return !1;
                let r = s(n.section, n.row);
                if (r !== n.id) return !1;
                let [l] = o.computeScrollPosition(n.section, t), a = l - n.scrollOffset;
                return i !== a && (e.scrollTop = a), !0
            };
            if (!l(n.row)) !l(n.row - 1) && l(n.row + 1)
        }, [l])
    }
}