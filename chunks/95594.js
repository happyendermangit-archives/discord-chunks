function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("470079"),
        r = n("663507"),
        a = n("924428"),
        s = n("151973");
    let o = Object.freeze({
        coordsMap: {},
        visibleSections: {},
        totalHeight: 0,
        gridData: {
            boundaries: [],
            coordinates: {}
        }
    });

    function l(e) {
        let {
            sections: t,
            columns: n,
            getItemKey: l,
            getItemHeight: u,
            getSectionHeight: d,
            chunkSize: _ = 250,
            getScrollerState: c,
            itemGutter: E,
            removeEdgeItemGutters: I,
            sectionGutter: T,
            padding: f,
            paddingVertical: S,
            paddingHorizontal: h,
            dir: A
        } = e, m = (0, a.default)(), N = (0, i.useRef)(o), [p] = (0, i.useState)(() => new r.default), {
            offsetWidth: O
        } = c(), {
            dirty: R,
            chunkStart: C,
            chunkEnd: g,
            forceUpdateOnChunkChange: L
        } = (0, s.default)({
            chunkSize: _,
            getScrollerState: c,
            forceUpdate: m
        });
        return N.current = (0, i.useMemo)(() => R > 0 ? N.current : (p.mergeProps({
            sections: t,
            columns: n,
            getItemKey: l,
            getItemHeight: u,
            getSectionHeight: d,
            bufferWidth: O,
            itemGutter: E,
            removeEdgeItemGutters: I,
            sectionGutter: T,
            padding: f,
            paddingVertical: S,
            paddingHorizontal: h,
            dir: A
        }), p.computeVisibleSections(Math.max(0, C * _), g * _), p.getState()), [R, p, t, n, l, u, d, C, g, _, E, I, T, f, S, h, O, A]), {
            ...N.current,
            masonryComputer: p,
            forceUpdateOnChunkChange: L,
            forceUpdate: m
        }
    }
}