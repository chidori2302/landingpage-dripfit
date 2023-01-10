$(document).ready(()=>
            { 
            var submit = $("#submit-form1")
            submit.click(()=>{
                            var data = $('form#test-form').serialize();
                            var date = new Date().toLocaleString('en-GB', { hour12: false });
                            // var dateword = `Dấu thời gian=`;
                            
                            data = data + `&` +`dau+thoi+gian=`+date
                            console.log(data)
                            var form = $("#test-form")

                            if (form[0].checkValidity() === false) {
                                event.preventDefault()
                                event.stopPropagation()
                            }
                            
                            // form.addClass('was-validated');

                            // (function () {
                            //     // Add parse and format functions to using validate date time 
                            //     validate.extend(validate.validators.datetime, {
                            //         parse: function (value, options) {
                            //             return +moment.utc(value);
                            //         },
                            //         format: function (value, options) {
                            //             var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
                            //             return moment.utc(value).format(format);
                            //         },
                            //     });
                            //     const constraints = {
                            //         name: {
                            //             presence: true,
                            //             length: {
                            //                 minimum: 3,
                            //                 maximum: 20,
                            //             },
                            //             format: {
                            //                 pattern: "[a-z0-9]+",
                            //                 flags: "i",
                            //                 message: " can only contain a-z and 0-9",
                            //             },
                            //         },
                            //         phone: {
                            //             presence: true,
                            //             length: {
                            //                 minimum: 10,
                            //                 maximum: 11,
                            //             },
                            //             format: {
                            //                 pattern: "[0-9]+",
                            //                 flags: "i",
                            //                 message: "can only contain a-z and 0-9",
                            //             },
                            //         },
                            //         name: {
                            //             presence: true,
                            //             length: {
                            //                 minimum: 1,
                            //                 maximum: 4,
                            //             },
                            //             format: {
                            //                 pattern: "[a-z0-9]+",
                            //                 flags: "i",
                            //                 message: " can only contain a-z and 0-9",
                            //             },
                            //         },
                                    
                            //     }
                                
                            //     $('#weight').blur(() => {
                            //         let error = validate.single($('#email').val(), constraints.weight) || {};
                            //         $('#error-weight').html(error)
                            //     })
                            
                            //     $('#name').blur(() => {
                            //         let error = validate.single($('#name').val(), constraints.name) || {};
                            //         $('#error-name').html(error)
                            //     })
                            
                            //     $('#phone').blur(() => {
                            //         let error = validate.single($('#phone').val(), constraints.phone) || {};
                            //         $('#error-phone').html(error)
                            //     })
                            // })();

                            let check = true
                            const value = $(`form input`)
                            console.log(value);
                            if (value[0].value == ``) {
                                check = false
                                value[0].placeholder = `Vui lòng nhập thông tin`
                                value[0].classList.add(`red`)

                            }
                            if (value[1].value == ``) {
                                check = false
                                value[1].placeholder = `Vui lòng nhập thông tin`
                                value[1].classList.add(`red`)
                            } 
                            if (value[2].value == ``) {
                                check = false
                                value[2].placeholder = `Vui lòng nhập thông tin`
                                value[2].classList.add(`red`)
                            } 
                            if (check) {
                                
                                $.ajax({
                                                type : 'POST', 
                                                url : 'https://script.google.com/macros/s/AKfycbyGK5PUXG6kzTo5r0W5AT5qbUJnOqqfHGxEJuaYJJc4dVCtIhSZjAp6ONjvxrrMDtne/exec',
                                                dataType:'json',
                                                crossDomain : true,
                                                data : data,
                                                success : function(data)
                                                {
        
                                                    
                                                    if(data == 'false') 
                                                    {
                                                        alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
                                                    }else{
                                                        alert('Đã thêm dữ liệu vào Form');
                                                    }
                                                }
                                    })
                            }
                            return false
            })
        })