function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hqStreamingFrameAnimationPlayed: function() {
            return s
        },
        hqStreamingPopoutDismissed: function() {
            return o
        },
        hqStreamingSetEnabled: function() {
            return r
        },
        hqStreamingUnlockAnimationPlayed: function() {
            return a
        },
        usePerksDemosUIStore: function() {
            return i
        }
    });
    let i = (0, n("652874").default)(() => ({
        hqStreamingFrameAnimationPlayed: !1,
        hqStreamingUnlockAnimationPlayed: !1,
        hqStreamingPopoutDismissed: !1,
        hqStreamingIsEnabled: !1,
        hqStreamingDidEnable: !1
    }));

    function r(e) {
        let {
            hqStreamingDidEnable: t
        } = i.getState();
        i.setState({
            hqStreamingIsEnabled: e,
            hqStreamingDidEnable: e || t
        })
    }

    function s(e) {
        i.setState({
            hqStreamingFrameAnimationPlayed: e
        })
    }

    function a(e) {
        i.setState({
            hqStreamingUnlockAnimationPlayed: e
        })
    }

    function o(e) {
        i.setState({
            hqStreamingPopoutDismissed: e
        })
    }
}