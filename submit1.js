$(document).ready(()=>
            { 
            var submit = $("#submit-form1")
            submit.click(()=>{
                            var data = $('form#test-form1').serialize();

                            console.log(data)
                            var form = $("#test-form1")

                            if (form[0].checkValidity() === false) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            let check = true
                            const value = $(`#test-form1 input`)
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