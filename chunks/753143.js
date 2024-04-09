function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        },
        useVirtualizedAnchor: function() {
            return u
        }
    }), n("411104"), n("47120");
    var i = n("470079"),
        r = n("134158"),
        s = n("924428"),
        a = n("151973");
    let o = Object.freeze({
        spacerTop: 0,
        totalHeight: 0,
        items: [],
        isSidebarVisible: !1
    });

    function l(e) {
        let {
            sections: t,
            sectionHeight: n,
            rowHeight: l,
            footerHeight: u,
            sidebarHeight: d,
            listHeaderHeight: _,
            chunkSize: c = 256,
            paddingTop: E = 0,
            paddingBottom: I = 0,
            getScrollerState: T,
            getAnchorId: f
        } = e, S = (0, s.default)(), h = (0, i.useRef)(o), [A] = (0, i.useState)(() => new r.default), {
            dirty: m,
            chunkStart: N,
            chunkEnd: O,
            forceUpdateOnChunkChange: p
        } = (0, a.default)({
            chunkSize: c,
            getScrollerState: T,
            forceUpdate: S
        }), {
            items: R
        } = h.current, C = null, {
            scrollTop: g
        } = T();
        for (let e of R) {
            if (0 === g) break;
            if ("footer" === e.type || "header" === e.type || null == e.anchorId) continue;
            let t = "row" === e.type ? e.row : void 0;
            if (e.offsetTop >= g) {
                C = {
                    id: e.anchorId,
                    section: e.section,
                    row: t,
                    scrollOffset: e.offsetTop - g
                };
                break
            }
        }
        let L = (0, i.useMemo)(() => {
                let e = Math.max(0, N * c);
                return null != d && e < d
            }, [c, N, d]),
            D = (0, i.useMemo)(() => m > 0 ? h.current : (A.mergeProps({
                sectionHeight: n,
                rowHeight: l,
                footerHeight: u,
                listHeaderHeight: _,
                paddingBottom: I,
                paddingTop: E,
                sections: t,
                getAnchorId: f
            }), A.compute(Math.max(0, N * c), O * c)), [m, N, O, n, l, u, _, I, E, t, A, c, f]);
        return (0, i.useLayoutEffect)(() => void(h.current = D)), {
            ...D,
            listComputer: A,
            forceUpdateOnChunkChange: p,
            anchor: C,
            isSidebarVisible: L
        }
    }

    function u(e) {
        let {
            scrollerRef: t,
            anchor: n,
            getScrollerState: r,
            listComputer: s,
            getAnchorId: a,
            totalHeight: o
        } = e;
        (0, i.useLayoutEffect)(() => {
            let {
                current: e
            } = t, {
                scrollTop: i
            } = r();
            if (null == n || null == n.row || null == e || null == a || 0 === i) return;
            let o = t => {
                if (t < 0 || t >= s.sections[n.section] || a(n.section, n.row) !== n.id) return !1;
                let [r] = s.computeScrollPosition(n.section, t), o = r - n.scrollOffset;
                return i !== o && (e.scrollTop = o), !0
            };
            if (!o(n.row)) !o(n.row - 1) && o(n.row + 1)
        }, [o])
    }
}