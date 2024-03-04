function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        statesWillNeverBeEqual: function() {
            return a
        },
        default: function() {
            return i
        },
        useStateFromStoresObject: function() {
            return I
        },
        useStateFromStoresArray: function() {
            return T
        }
    }), E("70102"), E("222007");
    var t = E("884691"),
        o = E("233736"),
        n = E("995113");

    function r(e, _) {
        return e === _
    }

    function a(e, _) {
        return !1
    }

    function i(e, _, E) {
        let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r,
            {
                current: i
            } = (0, t.useRef)({
                stores: e,
                areStatesEqual: a,
                getStateFromStores: _,
                prevDeps: void 0,
                state: void 0
            }),
            I = i.state;
        if (null == E || !(0, o.areArraysShallowEqual)(E, i.prevDeps)) {
            let e = _();
            (null == I || !a(I, e)) && (I = e)
        }(0, t.useLayoutEffect)(() => {
            i.getStateFromStores = _, i.prevDeps = E, i.state = I
        });
        let [, T] = (0, t.useState)(null);
        return (0, t.useLayoutEffect)(() => {
            let _ = () => {
                let e = i.getStateFromStores();
                !a(i.state, e) && (i.state = e, T({}))
            };
            _();
            let E = new n.default(e, _);
            return E.attach("useStateFromStores"), () => E.detach()
        }, []), I
    }

    function I(e, _, E) {
        return i(e, _, E, o.default)
    }

    function T(e, _, E) {
        return i(e, _, E, o.areArraysShallowEqual)
    }
}