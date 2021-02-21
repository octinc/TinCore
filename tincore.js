var tin = null;

$(document).ready(function () {

    tin = function (id) {
        _this = this;
        this.id = id;
        this.data = $('#' + id);
        this.height = this.data.height();
        this.width = this.data.width();
        this.isfullscreen = 0;
        this.hasfullscreen = 0;
        this.unfullscreen = function () { this.isfullscreen = 0; };
        this.fullscreen = function (callback = function () { }) {
            function resizedata() {
                if (!_this.isfullscreen) return;
                _this.data.attr('width', $(window).get(0).innerWidth);
                _this.data.attr('height', $(window).get(0).innerHeight);
                _this.height = _this.data.height();
                _this.width = _this.data.width();
            };
            if (!_this.hasfullscreen) $(window).resize(resizedata);
            _this.hasfullscreen = _this.isfullscreen = 1;
            resizedata();
            callback();
        };
    };



});