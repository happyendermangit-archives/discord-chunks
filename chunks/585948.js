function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useKeyboardNavigation: function() {
            return o
        }
    });
    var i = n("884691"),
        l = n("880317"),
        a = n("997289"),
        s = n("246511"),
        r = n("45961");
    let o = e => {
        let {
            columnCounts: t,
            stickersGrid: n,
            stickersListRef: o,
            store: u,
            gridNavigatorId: d,
            setInspectedStickerPosition: c,
            onGridItemSelect: f
        } = e, m = (0, a.useAnalyticsContext)(), p = i.useCallback(e => {
            f(e, m)
        }, [f, m]), h = i.useCallback((e, t) => {
            c(e, t, s.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
        }, [c]), {
            gridDispatch: x,
            getItemProps: E,
            getRowProps: y,
            gridContainerProps: g,
            handleGridContainerKeyDown: S,
            isUsingKeyboardNavigation: C
        } = (0, r.useExpressionPickerGridKeyboardNavigation)({
            columnCounts: t,
            gridNavigatorId: d,
            itemGrid: n,
            itemList: o,
            onGridNavigatorItemSelect: p,
            onGridNavigatorPositionChange: h
        });
        return i.useEffect(() => u.useStore.subscribe(e => {
            if (null == e) return;
            let {
                columnIndex: t,
                rowIndex: n,
                source: i
            } = e;
            i !== s.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && x({
                type: l.GridActionType.SET_FOCUSED_POSITION,
                x: t,
                y: n
            })
        }, e => e.inspectedExpressionPosition), [x, u]), {
            getItemProps: E,
            getRowProps: y,
            gridContainerProps: g,
            handleGridContainerKeyDown: S,
            isUsingKeyboardNavigation: C
        }
    }
}