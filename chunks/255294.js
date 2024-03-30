function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useKeyboardNavigation: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("657354"),
        i = n("560897"),
        a = n("512832"),
        u = n("61546"),
        s = function(e) {
            var t = e.columnCounts,
                n = e.stickersGrid,
                s = e.stickersListRef,
                l = e.store,
                c = e.gridNavigatorId,
                f = e.setInspectedStickerPosition,
                d = e.onGridItemSelect,
                _ = (0, i.useAnalyticsContext)(),
                E = r.useCallback(function(e) {
                    d(e, _)
                }, [d, _]),
                p = r.useCallback(function(e, t) {
                    f(e, t, a.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
                }, [f]),
                m = (0, u.useExpressionPickerGridKeyboardNavigation)({
                    columnCounts: t,
                    gridNavigatorId: c,
                    itemGrid: n,
                    itemList: s,
                    onGridNavigatorItemSelect: E,
                    onGridNavigatorPositionChange: p
                }),
                y = m.gridDispatch,
                I = m.getItemProps,
                h = m.getRowProps,
                O = m.gridContainerProps,
                T = m.handleGridContainerKeyDown,
                S = m.isUsingKeyboardNavigation;
            return r.useEffect(function() {
                return l.useStore.subscribe(function(e) {
                    if (null != e) {
                        var t = e.columnIndex,
                            n = e.rowIndex;
                        e.source !== a.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && y({
                            type: o.GridActionType.SET_FOCUSED_POSITION,
                            x: t,
                            y: n
                        })
                    }
                }, function(e) {
                    return e.inspectedExpressionPosition
                })
            }, [y, l]), {
                getItemProps: I,
                getRowProps: h,
                gridContainerProps: O,
                handleGridContainerKeyDown: T,
                isUsingKeyboardNavigation: S
            }
        }
}