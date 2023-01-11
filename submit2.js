$(document).ready(()=>
            { 
            var submit = $("#submit-form2")
            submit.click(()=>{
                            var data = $('form#test-form2').serialize();
                            
                            console.log(data)
                            var form = $("#test-form2")

                            if (form[0].checkValidity() === false) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            let check = true
                            const value = $(`#test-form2 input`)
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
                                                url : 'https://script.google.com/macros/s/AKfycbwY5oCg8hyfhcl1KejJfYcvPZrgJ7ciH7t6VVZX9VvZ9WKQLk2eBJVF5Bfx8hh6_n0Pyg/exec',
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
                                                        for (let i = 0; i < value.length; i++) {
                                                            value[i].value=``;
                                                            
                                                        }
                                                    }
                                                }
                                    })
                            }
                            return false
            })
        })