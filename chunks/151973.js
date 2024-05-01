function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079");

    function r(e, t, n) {
        return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
    }
    let a = [0, 0];

    function s(e) {
        let {
            chunkSize: t,
            getScrollerState: n,
            forceUpdate: s
        } = e, {
            dirty: o,
            scrollTop: l,
            offsetHeight: u
        } = n();
        (0, i.useLayoutEffect)(() => {
            o > 0 && s()
        }, [o, s]);
        let d = (0, i.useRef)(a);
        d.current = r(l, u, t);
        let [_, c] = d.current;
        return {
            forceUpdateOnChunkChange: (0, i.useCallback)(e => {
                let {
                    dirty: i,
                    scrollTop: a,
                    offsetHeight: o
                } = n();
                if (i > 0) return;
                let [l, u] = r(a, o, t);
                l !== d.current[0] ? s() : 2 === e && u !== d.current[1] && s()
            }, [s, t, n]),
            chunkStart: _,
            chunkEnd: c,
            dirty: o
        }
    }
}