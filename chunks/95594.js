function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("470079"),
        r = n("663507"),
        s = n("924428"),
        a = n("151973");
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
        } = e, m = (0, s.default)(), N = (0, i.useRef)(o), [O] = (0, i.useState)(() => new r.default), {
            offsetWidth: p
        } = c(), {
            dirty: R,
            chunkStart: C,
            chunkEnd: g,
            forceUpdateOnChunkChange: L
        } = (0, a.default)({
            chunkSize: _,
            getScrollerState: c,
            forceUpdate: m
        });
        return N.current = (0, i.useMemo)(() => R > 0 ? N.current : (O.mergeProps({
            sections: t,
            columns: n,
            getItemKey: l,
            getItemHeight: u,
            getSectionHeight: d,
            bufferWidth: p,
            itemGutter: E,
            removeEdgeItemGutters: I,
            sectionGutter: T,
            padding: f,
            paddingVertical: S,
            paddingHorizontal: h,
            dir: A
        }), O.computeVisibleSections(Math.max(0, C * _), g * _), O.getState()), [R, O, t, n, l, u, d, C, g, _, E, I, T, f, S, h, p, A]), {
            ...N.current,
            masonryComputer: O,
            forceUpdateOnChunkChange: L,
            forceUpdate: m
        }
    }
}