var tin = new Object();

$(document).ready(function() {

    tin.fresh = function(canvas) {
        canvas.data;
    };

    tin.fullscreen = function(canvas) {
        resizedata = function() {
            canvas.data.attr('width', $(window).get(0).innerWidth);
            canvas.data.attr('height', $(window).get(0).innerHeight);
            canvas.height = canvas.data.height();
            canvas.width = canvas.data.width();
        };
        $(window).resize(resizedata);
        resizedata(canvas);
    };

    tin.newcanvas = function(id) {
        _this = this;
        this.id = id;
        this.data = $('#' + id);
        this.height = this.data.height();
        this.width = this.data.width();
        this.fullscreen = function(canvas = _this) {
            console.log(canvas);
            tin.fullscreen(canvas);
        };
    };



});