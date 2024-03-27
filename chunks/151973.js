function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("470079");

    function r(e, t, n) {
        return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
    }
    let s = [0, 0];

    function a(e) {
        let {
            chunkSize: t,
            getScrollerState: n,
            forceUpdate: a
        } = e, {
            dirty: o,
            scrollTop: l,
            offsetHeight: u
        } = n();
        (0, i.useLayoutEffect)(() => {
            o > 0 && a()
        }, [o, a]);
        let d = (0, i.useRef)(s);
        d.current = r(l, u, t);
        let [_, c] = d.current;
        return {
            forceUpdateOnChunkChange: (0, i.useCallback)(e => {
                let {
                    dirty: i,
                    scrollTop: s,
                    offsetHeight: o
                } = n();
                if (i > 0) return;
                let [l, u] = r(s, o, t);
                l !== d.current[0] ? a() : 2 === e && u !== d.current[1] && a()
            }, [a, t, n]),
            chunkStart: _,
            chunkEnd: c,
            dirty: o
        }
    }
}