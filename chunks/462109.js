function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useKeyboardNavigation: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("739940"),
        a = n("2052"),
        s = n("691251"),
        o = n("98528");
    let l = e => {
        let {
            columnCounts: t,
            stickersGrid: n,
            stickersListRef: l,
            store: u,
            gridNavigatorId: d,
            setInspectedStickerPosition: _,
            onGridItemSelect: c
        } = e, E = (0, a.useAnalyticsContext)(), I = i.useCallback(e => {
            c(e, E)
        }, [c, E]), T = i.useCallback((e, t) => {
            _(e, t, s.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
        }, [_]), {
            gridDispatch: f,
            getItemProps: S,
            getRowProps: h,
            gridContainerProps: A,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: N
        } = (0, o.useExpressionPickerGridKeyboardNavigation)({
            columnCounts: t,
            gridNavigatorId: d,
            itemGrid: n,
            itemList: l,
            onGridNavigatorItemSelect: I,
            onGridNavigatorPositionChange: T
        });
        return i.useEffect(() => u.useStore.subscribe(e => {
            if (null == e) return;
            let {
                columnIndex: t,
                rowIndex: n,
                source: i
            } = e;
            i !== s.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && f({
                type: r.GridActionType.SET_FOCUSED_POSITION,
                x: t,
                y: n
            })
        }, e => e.inspectedExpressionPosition), [f, u]), {
            getItemProps: S,
            getRowProps: h,
            gridContainerProps: A,
            handleGridContainerKeyDown: m,
            isUsingKeyboardNavigation: N
        }
    }
}