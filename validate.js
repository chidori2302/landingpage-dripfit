(function () {
    // Add parse and format functions to using validate date time 
    validate.extend(validate.validators.datetime, {
        parse: function (value, options) {
            return +moment.utc(value);
        },
        format: function (value, options) {
            var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
            return moment.utc(value).format(format);
        },
    });
    const constraints = {
        
        name: {
            presence: true,
            length: {
                minimum: 3,
                maximum: 20,
            },
            format: {
                pattern: "[a-z0-9]+",
                flags: "i",
                message: " can only contain a-z and 0-9",
            },
        },
        phone: {
            presence: true,
            length: {
                minimum: 10,
                maximum: 11,
            },
            format: {
                pattern: "[0-9]+",
                flags: "i",
                message: "Vui lòng nhập số điện thoại",
            },
        },
        
    }
    
    $('#email').blur(() => {
        let error = validate.single($('#email').val(), constraints.email) || {};
        $('#error-email').html(error)
    })

    $('#name').blur(() => {
        let error = validate.single($('#name').val(), constraints.name) || {};
        $('#error-name').html(error)
    })

    $('#phone').blur(() => {
        let error = validate.single($('#phone').val(), constraints.phone) || {};
        $('#error-phone').html(error)
    })
})();